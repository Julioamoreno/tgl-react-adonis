import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateGameValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    type: schema.string(),
    description: schema.string(),
    range: schema.number([rules.required()]),
    price: schema.number([rules.required()]),
    max_number: schema.number([rules.required()]),
    color: schema.string(),
    min_cart_value: schema.number([rules.required(), rules.range(1, 100)]),
  })

  public messages = {
    required: 'The {{field}} is required.',
    range:
      'The {{field}} range validation error, should be a number from {{options.start}} to {{options.stop}}',
  }
}
