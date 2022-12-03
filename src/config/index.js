import * as dotenv from "dotenv"

process.env.NODE_ENV = process.env.NODE_ENV || "development"

const envFound = dotenv.config()
if (envFound.error) throw new Error("⚠️  Couldn't find .env file  ⚠️")

export const config = {
  bearerToken: process.env.BEARER_TOKEN,
  notionToken: process.env.NOTION_TOKEN,
  notionDatabaseId: process.env.NOTION_DATABASE_ID,
}
