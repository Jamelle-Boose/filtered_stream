/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export const development = {
  client: "better-sqlite3",
  connection: {
    filename: "./development.sqlite3",
  },
  useNullAsDefault: true,
}
export const production = {
  client: "better-sqlite3",
  connection: {
    filename: "./production.sqlite3",
  },
  useNullAsDefault: true,
}
