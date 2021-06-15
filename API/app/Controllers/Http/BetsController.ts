import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Bet from 'App/Models/Bet'
import CreateBet from 'App/Validators/CreateBetValidator'
import Event from '@ioc:Adonis/Core/Event'

export default class BetsController {
  public async index({ request, auth }: HttpContextContract) {
    const { page } = request.qs()
    const bet = await Bet.query().where('user_id', auth.user!.id).preload('game').paginate(page)

    return bet
  }

  public async store({ request, response, auth }: HttpContextContract) {
    await request.validate(CreateBet)
    try {
      let data = request.input('bet')
      data = await data.map((bet) => ({
        user_id: auth.user!.id,
        game_id: bet.game_id,
        numbers: bet.numbers,
        price: bet.price,
      }))

      const bets = await Bet.createMany(data).then(() => {
        return Bet.query()
          .preload('game')
          .withScopes((scopes) => scopes.owner)
      })

      Event.emit('new:bet', { bets })

      return bets
    } catch (error) {
      response.send(error)
    }
  }

  public async show({ params, auth }: HttpContextContract) {
    const bet = await Bet.query()
      .where('id', params.id)
      .preload('game')
      .withScopes((scopes) => scopes.owner(auth.user!))
      .firstOrFail()

    return bet
  }

  public async update({ request, params, auth }: HttpContextContract) {
    const bet = await Bet.query()
      .where('id', params.id)
      .withScopes((scopes) => scopes.owner(auth.user!))
      .firstOrFail()
    const data = request.only(['user_id', 'game_id', 'numbers', 'price'])

    bet.merge(data)
    await bet.save()

    return bet
  }

  public async destroy({ params, auth }: HttpContextContract) {
    const bet = await Bet.query()
      .where('id', params.id)
      .withScopes((scopes) => scopes.owner(auth.user!))
      .firstOrFail()
    await bet.delete()
  }
}
