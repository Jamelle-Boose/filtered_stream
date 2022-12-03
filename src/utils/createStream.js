import { blockList } from "./blockList.js"
import { log } from "./logger.js"
import { filterStream } from "./filterStream.js"
import { DataAccessLayer } from "../data/dataAccessLayer.js"
import { createNotionPage } from "./notion.js"

export const createStream = async () => {
  try {
    for await (const res of filterStream()) {
      switch (true) {
        case "data" in res:
          const context = {
            username: res.includes.users[0].username,
            id: res.data.id,
            created_at: res.data.created_at,
            text: res.data.text,
          }

          if (blockList.includes(context.username)) continue
          const regex = /\d{4}/g
          const match = context.text.match(regex)
          if (match) {
            const DAL = new DataAccessLayer(context)
            const [tweet] = await DAL.insert()
            await createNotionPage(context)
            log.message(tweet)
          }
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
