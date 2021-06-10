import Route from '@ioc:Adonis/Core/Route'

Route.post('/login', 'SessionsController.store')
Route.resource('/user', 'UsersController').only(['store'])
Route.resource('/forgotpassword', 'ForgotPasswordsController').only(['store', 'update'])
Route.resource('/games', 'GamesController').only(['index'])

Route.group(() => {
  Route.resource('/user', 'UsersController').apiOnly().except(['store'])
  Route.resource('/games', 'GamesController').apiOnly().except(['index'])
  Route.resource('/bets', 'BetsController').apiOnly()
}).middleware(['auth'])
