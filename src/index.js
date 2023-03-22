require('dotenv').config()
const sequelize = require('./db')
const models = require('./models/models')
const { Bot } = require('grammy')

const bot = new Bot(process.env.BOT_TOKEN)

bot.command('access', ctx => {
  console.log()
})

const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    bot.start(console.log('Игра началась!'))
  } catch (error) {
    console.log(error)
  }
}

start()

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
