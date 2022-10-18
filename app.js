import * as dotenv from "dotenv"
dotenv.config()

import { Client } from "twitter-api-sdk"
import db from "./db"
import chalk from "chalk"

async function main() {
  const client = new Client(process.env.BEARER_TOKEN)
  const stream = client.tweets.searchStream({
    expansions: ["author_id"],
    "tweet.fields": ["created_at"],
  })
  for await (const res of stream) {
    if (res.data) {
      const username = res.includes.users[0].username
      const { id, created_at, text } = res.data
      const tweet = await db.insert({
        id: id,
        created_at: created_at,
        username: username,
        text: text,
      })
      console.log(`${chalk.bgRed(username)}: ${text}\n\n`)
    } else {
      console.log(tweet)
    }
  }
}

main()
