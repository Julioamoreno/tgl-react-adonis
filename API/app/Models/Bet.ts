import { DateTime } from 'luxon'
import { BaseModel, column, hasOne, HasOne, scope } from '@ioc:Adonis/Lucid/Orm'

import User from 'App/Models/user'
import Game from 'App/Models/Game'

export default class Bet extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public user_id: number

  @column()
  public game_id: number

  @column()
  public numbers: string

  @column()
  public price: number | string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasOne(() => User, {
    localKey: 'user_id',
    foreignKey: 'id',
  })
  public user: HasOne<typeof User>

  @hasOne(() => Game, {
    localKey: 'game_id',
    foreignKey: 'id',
  })
  public game: HasOne<typeof Game>

  public static owner = scope((query, user: User) => {
    query.where('user_id', user.id)
  })
}
