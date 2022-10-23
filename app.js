import { Client } from "twitter-api-sdk"
import { blocklist } from "./utils/blocklist.js"
import { log } from "./utils/log.js"
import { DataAccessLayer } from "./utils/dataAccessLayer.js"
import { config } from "./config/index.js"

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
          const context = {
            username: res.includes.users[0].username,
            id: res.data.id,
            created_at: res.data.created_at,
            text: res.data.text,
          }

          if (blocklist.includes(context.username)) continue
          const DAL = new DataAccessLayer(context)
          const [tweet] = await DAL.insert()
          log.text(tweet)

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
