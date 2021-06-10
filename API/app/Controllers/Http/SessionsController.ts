import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/user'
import AuthUserValidator from 'App/Validators/AuthUserValidator'

export default class SessionsController {
  public async store({ request, auth }: HttpContextContract) {
    await request.validate(AuthUserValidator)
    const { email, password } = request.all()

    const { token } = await auth.attempt(email, password)
    const user = await User.query().where({ email }).preload('bets')
    return { user, token }
  }
}
