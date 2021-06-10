import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateUserValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string({ trim: true }),
    email: schema.string({}, [rules.email(), rules.unique({ table: 'users', column: 'email' })]),
    password: schema.string({}, [rules.confirmed()]),
  })

  public messages = {
    confirmed: 'The {{field}} confirmation does not match.',
    required: 'The {{field}} is required.',
    unique: 'The {{field}} has already been taken by someone else.',
  }
}
