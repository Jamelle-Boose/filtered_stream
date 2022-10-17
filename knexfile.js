// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export const development = {
  client: "better-sqlite3",
  connection: {
    filename: "./dev.sqlite3",
  },
  useNullAsDefault: true,
}
export const production = {
  client: "better-sqlite3",
  connection: {
    filename: "./prod.sqlite3",
  },
  useNullAsDefault: true,
}
