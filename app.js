import chalk from "chalk"
import { Client } from "twitter-api-sdk"

import blocklist from "./blocklist.js"
import db from "./db.js"
import config from "./config/index.js"

async function main() {
  const client = new Client(config.bearerToken)
  const stream = client.tweets.searchStream({
    expansions: ["author_id"],
    "tweet.fields": ["created_at"],
  })
  try {
    for await (const res of stream) {
      switch (true) {
        case "data" in res:
          const username = res.includes.users[0].username
          if (blocklist.includes(username)) continue
          const { id, created_at, text } = res.data
          const tweet = await db("tweets").insert(
            { id, created_at, username, text },
            ["username", "text"]
          )
          console.log(`${chalk.bgRed(tweet[0].username)}: ${tweet[0].text}\n\n`)
          break
        case "errors" in res:
          console.log(res)
          break
      }
    }
  } catch (error) {
    console.error(error)
  }
}

main()
