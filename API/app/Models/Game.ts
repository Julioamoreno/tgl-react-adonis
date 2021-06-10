import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Bet from './Bet'

export default class Game extends BaseModel {
  @column({ isPrimary: true })
  public 'id': number

  @column()
  public 'type': string

  @column()
  public 'description': string

  @column()
  public 'range': number

  @column()
  public 'price': number

  @column()
  public 'max_number': number

  @column()
  public 'color': string

  @column()
  public 'min_cart_value': number

  @belongsTo(() => Bet, {
    foreignKey: 'game_id',
  })
  public 'bet': BelongsTo<typeof Bet>
}
