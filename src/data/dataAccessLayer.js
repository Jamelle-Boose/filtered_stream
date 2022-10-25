import db from "./db.js"

export class DataAccessLayer {
  constructor({ username, id, created_at, text }) {
    this.username = username
    this.id = id
    this.created_at = created_at
    this.text = text
  }

  async insert() {
    return await db("tweets").insert(
      {
        id: this.id,
        created_at: this.created_at,
        username: this.username,
        text: this.text,
      },
      ["username", "text"]
    )
  }
}
