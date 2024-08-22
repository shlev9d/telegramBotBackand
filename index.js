const TelegramBot = require('node-telegram-bot-api');
const { token, webhookUrl, messages, webApiUrl } = require('./config');

const bot = new TelegramBot(token, { polling: true });

bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;
  const userLanguage = msg.from.language_code || 'en';

  const lang = messages[userLanguage] ? userLanguage : 'en';

  if (text === '/start') {
    await bot.sendMessage(chatId, messages[lang].start, {
      reply_markup: {
        inline_keyboard: Object.entries(messages[lang].signs).map(
          ([sign, code]) => [
            {
              text: sign,
              web_app: { url: `${webApiUrl}?sign=${encodeURIComponent(code)}` },
            },
          ]
        ),
      },
    });
  }
});
