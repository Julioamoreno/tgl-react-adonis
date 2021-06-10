import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Mail from '@ioc:Adonis/Addons/Mail'
import Env from '@ioc:Adonis/Core/Env'

import User from 'App/Models/user'
import CreateUser from 'App/Validators/CreateUserValidator'
import UpdateUser from 'App/Validators/UpdateUserValidator'

import RowNotFoundException from 'App/Exceptions/RowNotFoundException'

export default class UsersController {
  public async index({ request, auth }: HttpContextContract) {
    const { page } = request.qs()
    const user = await User.query()
      .withScopes((scope) => scope.owner(auth.user!))
      .paginate(page)
    return user
  }

  public async store({ request, response, auth }: HttpContextContract) {
    await request.validate(CreateUser)
    try {
      const data = request.only(['name', 'email', 'password'])
      const user = await User.create(data)
      const { token } = await auth.attempt(data.email, data.password)

      await Mail.send((message) => {
        message
          .from(Env.get('ADMIN_EMAIL'))
          .to(user.email)
          .subject('Bem Vindo!')
          .htmlView('emails/welcome', { name: user.name })
      })

      return { user, token }
    } catch (err) {
      response.send({ message: err.message })
    }
  }

  public async show({ params, auth }: HttpContextContract) {
    try {
      const user = await User.query()
        .preload('bets')
        .where(params)
        .withScopes((scope) => scope.owner(auth.user!))
        .firstOrFail()

      return user
    } catch (err) {
      throw new RowNotFoundException(err.message, err.status, err.code)
    }
  }

  public async update({ params, request, auth }: HttpContextContract) {
    await request.validate(UpdateUser)
    const user = await User.query()
      .where(params)
      .withScopes((scope) => scope.owner(auth.user!))
      .firstOrFail()

    const data = request.only(['name', 'email', 'password'])

    user.merge(data)

    await user.save()
    return user
  }

  public async destroy({ params, auth }: HttpContextContract) {
    const user = await User.query()
      .where(params)
      .withScopes((scope) => scope.owner(auth.user!))
      .firstOrFail()

    await user.delete()
  }
}
