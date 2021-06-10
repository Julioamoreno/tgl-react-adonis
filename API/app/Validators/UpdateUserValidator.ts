import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UpdateUserValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string.optional({ trim: true }),
    email: schema.string.optional({}, [
      rules.email(),
      rules.unique({ table: 'users', column: 'email' }),
    ]),
    password: schema.string.optional({}, [rules.confirmed()]),
  })

  public messages = {
    confirmed: 'The {{field}} confirmation does not match.',
    required: 'The {{field}} is required.',
    unique: 'The {{field}} has already been taken by someone else.',
  }
}
