const TelegramBot = reqiire('node-telegram-bot-api')

const TOKEN = '954593715:AAGEQx57sR1QapVbPkcoiWyucO6FMp3KuGk'

const bot = new TelegramBot(TOKEN, {polling: true})

bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, 'Приветствую тебя, ${msg.from.first_name}')
})