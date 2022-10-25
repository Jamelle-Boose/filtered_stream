import { config } from "../config/index.js"
import { Client } from "twitter-api-sdk"

export const filterStream = () => {
  const client = new Client(config.bearerToken)
  return client.tweets.searchStream({
    expansions: ["author_id"],
    "tweet.fields": ["created_at"],
  })
}
