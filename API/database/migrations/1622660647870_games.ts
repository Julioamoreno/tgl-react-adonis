import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Games extends BaseSchema {
  protected tableName = 'games'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('type', 254).notNullable()
      table.string('description', 254).notNullable()
      table.integer('range').notNullable()
      table.float('price').notNullable()
      table.integer('max_number').notNullable()
      table.string('color', 12).notNullable()
      table.integer('min_cart_value').notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
