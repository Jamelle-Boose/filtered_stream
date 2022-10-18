/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("tweets", table => {
    table.integer("id").primary()
    table.string("created_at")
    table.string("username")
    table.string("text")
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  //TODO add drop schema
}
