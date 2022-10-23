import knex from "knex"
import { development } from "../config/knex.js"

export const db = knex(development)
