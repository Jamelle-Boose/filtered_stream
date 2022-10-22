import chalk from "chalk"

export const log = {
  text: ({ username, text }) => {
    console.log(`${chalk.bgRed(username)}: ${text}\n\n`)
  },
}
