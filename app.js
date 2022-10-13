require("dotenv").config()
const { Client } = require("twitter-api-sdk")

async function main() {
  const client = new Client(process.env.BEARER_TOKEN)
  const stream = client.tweets.searchStream()
  for await (const tweet of stream) {
    if (tweet.data) {
      console.log(`${tweet.data.text}\n\n`)
    } else {
      console.log(tweet)
    }
  }
}

main()
