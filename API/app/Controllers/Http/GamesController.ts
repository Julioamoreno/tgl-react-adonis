import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Game from 'App/Models/Game'
import CreateGame from 'App/Validators/CreateGameValidator'

export default class GamesController {
  public async index({}: HttpContextContract) {
    const game = await Game.all()
    return game
  }

  public async store({ request }: HttpContextContract) {
    await request.validate(CreateGame)
    const data = request.only([
      'type',
      'description',
      'range',
      'price',
      'max_number',
      'color',
      'min_cart_value',
    ])

    const game = await Game.create(data)
    return game
  }

  public async show({ params }: HttpContextContract) {
    const game = await Game.findOrFail(params.id)
    return game
  }

  public async update({ params, request }: HttpContextContract) {
    const game = await Game.findOrFail(params.id)
    const data = request.only([
      'type',
      'description',
      'range',
      'price',
      'max_number',
      'color',
      'min_cart_value',
    ])

    game.merge(data)
    await game.save()
    return game
  }

  public async destroy({ params }: HttpContextContract) {
    const game = await Game.findOrFail(params.id)
    await game.delete()
  }
}
