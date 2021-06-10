import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class OwnerMiddleware {
  /**
   * Handle request
   */
  public async handle(
    { auth, request, response, params }: HttpContextContract,
    next: () => Promise<void>
  ) {
    await auth.check()
    if (!request.hasBody()) {
      return await next()
    }
    if (request.matchesRoute('/forgotpassword')) {
      const email: string = request.input('email')
      if (auth.user!.email === email) {
        return await next()
      }
    } else if (request.matchesRoute('/bets')) {
      const bet = request.input('bet')
      const equalToAuthenticated = ({ user_id }) => user_id === auth.user!.id

      if (bet.every(equalToAuthenticated)) {
        return await next()
      }
    } else {
      const { id } = params

      if (auth.user!.id === id) {
        console.log('entrou')
        return await next()
      }
      console.log(id)
    }
    return response.status(403).send({ message: 'Access denied, check the fields' })
  }
}
