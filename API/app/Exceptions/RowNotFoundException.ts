import { Exception } from '@adonisjs/core/build/standalone'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class RowNotFoundException extends Exception {
  public async handle(error: this, ctx: HttpContextContract) {
    if (error.code === 'E_ROW_NOT_FOUND_TOKEN') {
      return ctx.response.status(403).send({ message: 'Invalid Token' })
    }
    if (error.code === 'ER_NO_REFERENCED_ROW_2_GAME') {
      return ctx.response.status(403).send({ message: 'Game not found, check game id' })
    }
    return ctx.response.status(error.status).send({ message: 'Not Found' })
  }
}
