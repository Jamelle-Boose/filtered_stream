import { Client } from "@notionhq/client"
import { config } from "../config/index.js"

const notion = new Client({ auth: config.notionToken })
const databaseId = config.notionDatabaseId

export const createNotionPage = async ({ username, id, created_at, text }) => {
  try {
    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        id: {
          title: [
            {
              text: {
                content: id,
              },
            },
          ],
        },
        created_at: {
          rich_text: [
            {
              text: {
                content: created_at,
              },
            },
          ],
        },
        username: {
          rich_text: [
            {
              text: {
                content: username,
              },
            },
          ],
        },
        text: {
          rich_text: [
            {
              text: {
                content: text,
              },
            },
          ],
        },
      },
    })
    console.log("Success! Entry added.")
  } catch (error) {
    console.error(error.body)
  }
}
