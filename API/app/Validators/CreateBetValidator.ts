import { schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateBetValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    bet: schema.array().members(
      schema.object().members({
        game_id: schema.number(),
        numbers: schema.string(),
        price: schema.number(),
      })
    ),
  })

  public messages = {
    required: 'The {{field}} is required.',
  }
}
