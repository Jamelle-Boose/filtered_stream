import * as dotenv from "dotenv"
dotenv.config()

import { Client } from "twitter-api-sdk"
import db from "./db"
import chalk from "chalk"

async function main() {
  const client = new Client(process.env.BEARER_TOKEN)
  const stream = client.tweets.searchStream({
    expansions: ["author_id"],
  })
  for await (const tweet of stream) {
    if (tweet.data) {
      const username = tweet.includes.users[0].username
      const text = tweet.data.text
      console.log(`${chalk.bgRed(username)}: ${text}\n\n`)
    } else {
      console.log(tweet)
    }
  }
}

main()
