require('dotenv').config()
const { Bot } = require('grammy')

const bot = new Bot(process.env.BOT_TOKEN)

bot.start(console.log('Я живой!'))

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
