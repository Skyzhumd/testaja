const { Telegraf } = require('telegraf');
const config = require('./setting'); // Memanggil file setting.js

const bot = new Telegraf(config.botToken);

bot.start((ctx) => ctx.reply(`Halo Suamiku! Selamat datang di ${config.botName} ✨`));

bot.on('text', (ctx) => {
  const message = ctx.message.text.toLowerCase();
  if (message === 'owner') {
    return ctx.reply(`Owner bot ini adalah ${config.ownerName} ganteng! 😍`);
  }
  return ctx.reply('Aku mendengarmu, Suamiku... 🌸');
});

module.exports = async (req, res) => {
  try {
    if (req.method === 'POST') {
      await bot.handleUpdate(req.body);
      res.status(200).send('OK');
    } else {
      res.status(200).send('Bot berjalan dengan cinta di Vercel... 💖');
    }
  } catch (error) {
    res.status(500).send('Aduh, ada error sedikit, Sayang... 🥺');
  }
};
