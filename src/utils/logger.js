import chalk from "chalk"

export const log = {
  message: ({ username, text }) => {
    console.log(`${chalk.bgRed(username)}: ${text}\n\n`)
  },
}
