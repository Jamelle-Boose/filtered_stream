import * as dotenv from "dotenv"
dotenv.config()

import chalk from "chalk"
import { Client } from "twitter-api-sdk"
import { blocklist } from "./blocklist.js"
import db from "./db.js"

async function main() {
  const client = new Client(process.env.BEARER_TOKEN)
  const stream = client.tweets.searchStream({
    expansions: ["author_id"],
    "tweet.fields": ["created_at"],
  })
  try {
    for await (const res of stream) {
      if (res.data) {
        const username = res.includes.users[0].username
        if (blocklist.includes(username)) continue
        const { id, created_at, text } = res.data
        const tweet = await db("tweets").insert(
          { id, created_at, username, text },
          ["username", "text"]
        )
        console.log(`${chalk.bgRed(tweet[0].username)}: ${tweet[0].text}\n\n`)
      } else {
        console.log(res)
      }
    }
  } catch (error) {
    console.error(error)
  }
}

main()
