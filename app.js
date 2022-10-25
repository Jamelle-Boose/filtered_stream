import { blocklist } from "./utils/blocklist.js"
import { log } from "./utils/logger.js"
import { DataAccessLayer } from "./utils/dataAccessLayer.js"
import { filteredStream } from "./utils/filteredStream.js"

async function app() {
  try {
    for await (const res of filteredStream()) {
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
          log.message(tweet)
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

app()
