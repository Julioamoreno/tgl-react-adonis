import Event from '@ioc:Adonis/Core/Event'
import Mail from '@ioc:Adonis/Addons/Mail'
import Env from '@ioc:Adonis/Core/Env'

import Bet from 'App/Models/Bet'

Event.on('new:bet', async ({ bets }) => {
  const betsId = bets.map(({ id }) => id)
  const total = bets.reduce((sum, bet) => {
    return sum + parseFloat(bet.price)
  }, 0)

  const betsRelacions = await Bet.query().whereIn('id', betsId).preload('user').preload('game')
  const allBets = betsRelacions.map((bet) => {
    bet.numbers = bet.numbers.split(', ').sort().join(', ')
    bet.price = bet.price.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      style: 'currency',
      currency: 'BRL',
    })
    return bet.serialize()
  })
  const { email, name } = allBets[0].user

  await Mail.send((message) => {
    message
      .from(Env.get('ADMIN_EMAIL'))
      .to(email)
      .subject('Jogo Realizado')
      .htmlView('emails/new_bet', {
        name,
        games: allBets,
        valor: total.toLocaleString('pt-BR', {
          minimumFractionDigits: 2,
          style: 'currency',
          currency: 'BRL',
        }),
      })
  })
})
