import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import { column, beforeSave, BaseModel, HasMany, hasMany, scope } from '@ioc:Adonis/Lucid/Orm'

import Bets from 'App/Models/Bet'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @column({ serializeAs: null })
  public token: string | null

  @column({ serializeAs: null })
  public token_created_at: Date | null

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }

  @hasMany(() => Bets, {
    foreignKey: 'user_id',
  })
  public bets: HasMany<typeof Bets>

  public static owner = scope((query, user: User) => {
    const isAdmin = false
    if (isAdmin) return
    query.where('id', user.id).firstOrFail()
  })
}
