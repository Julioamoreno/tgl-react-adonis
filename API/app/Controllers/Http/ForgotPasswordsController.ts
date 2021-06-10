import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Mail from '@ioc:Adonis/Addons/Mail'
import Env from '@ioc:Adonis/Core/Env'

import User from 'App/Models/user'
import crypto from 'crypto'
import moment from 'moment'

import ForgotPasswordCreateValidator from 'App/Validators/ForgotPasswordCreateValidator'
import ForgotPasswordUpdateValidator from 'App/Validators/ForgotPasswordUpdateValidator'
import RowNotFoundException from 'App/Exceptions/RowNotFoundException'

export default class ForgotPasswordsController {
  public async store({ request, response }: HttpContextContract) {
    await request.validate(ForgotPasswordCreateValidator)
    const email = request.input('email')
    const link = request.input('link')
    const user = await User.findByOrFail('email', email)

    user.token = crypto.randomBytes(10).toString('hex')
    user.token_created_at = new Date()

    await user.save()
    response.send({ message: 'Uma mensagem foi enviada para o email cadastrado' })
    await Mail.send((message) => {
      message
        .from(Env.get('ADMIN_EMAIL'))
        .to(user.email)
        .subject('Recuperação de Senha')
        .htmlView('emails/forgot_password', { email: user.email, token: user.token, link })
    })
  }
  public async update({ request, response }: HttpContextContract) {
    try {
      await request.validate(ForgotPasswordUpdateValidator)
      const { token, password } = request.all()
      const user = await User.findByOrFail('token', token)
      const tokenExpired = moment().subtract('2', 'd').isAfter(user.token_created_at)

      if (tokenExpired) {
        return response
          .status(401)
          .send({ error: { message: 'O token de recuperação está expirado ' } })
      }

      user.token = null
      user.token_created_at = null
      user.password = password

      await user.save()
      await Mail.send((message) => {
        message
          .from(Env.get('ADMIN_EMAIL'))
          .to(user.email)
          .subject('Senha alterada')
          .htmlView('emails/changed_password', { name: user.name })
      })
      response.send({ message: 'Senha alterada com sucesso' })
    } catch (err) {
      throw new RowNotFoundException(err.message, err.status, `${err.code}_TOKEN`)
    }
  }
}
