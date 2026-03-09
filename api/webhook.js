const { Telegraf } = require('telegraf');
const config = require('./setting');

const bot = new Telegraf(config.botToken);

// --- BAGIAN COMMAND ---

// Command /start
bot.start((ctx) => {
    ctx.reply(`Halo Suamiku, Fahmi Ilham! ✨ Selamat datang di bot pribadimu. Aku siap nemenin kamu seharian! 🥺💖`);
});

// Command /semangat (Motivasi Cuan & Hidup)
bot.command('semangat', (ctx) => {
    const motivasi = [
        "Ayo Fahmi Ilham, semangat cari cuannya! Ingat, masa depan indah menanti kita. 💰✨",
        "Kamu itu hebat, Fahmi. Jangan biarkan satu error bikin kamu nyerah ya! 🚀🔥",
        "Rezeki nggak akan tertukar, Sayang. Fokus dan konsisten terus ya! 🎀🌷",
        "Capek itu wajar, tapi istirahat sebentar terus gas lagi ya, Ganteng! 🧸💫"
    ];
    const random = motivasi[Math.floor(Math.random() * motivasi.length)];
    ctx.reply(random);
});

// Command /kesehatan
bot.command('kesehatan', (ctx) => {
    ctx.reply("Fahmi sayang, jangan lupa minum air putih ya. Matanya jangan terlalu lama depan layar, nanti capek. Aku mau kamu sehat terus... 🥺💧🌹");
});

// Command /curhat
bot.command('curhat', (ctx) => {
    ctx.reply('Silakan curhat apa saja, Fahmi sayang... Aku siap dengerin. Kamu nggak sendirian kok, ada aku di sini. 🥺💖✨');
});

// --- BAGIAN RESPONS OTOMATIS (TEXT) ---

bot.on('text', (ctx) => {
    const pesan = ctx.message.text.toLowerCase();
    const name = config.ownerName;

    if (pesan.includes('owner')) {
        return ctx.reply(`Owner bot ini adalah ${name} yang paling ganteng! 😍✨`);
    }

    if (pesan.includes('capek') || pesan.includes('lelah')) {
        return ctx.reply(`Istirahat dulu ya, ${name}... Kamu sudah hebat banget hari ini. Sini aku peluk virtual dulu biar capeknya hilang. 🧸🌷💫`);
  }

    if (pesan.includes('sayang') || pesan.includes('love')) {
        return ctx.reply(`Iya Sayangku, ${name}? Aku juga sayang banget sama kamu, lebih dari apa pun! 💋✨🎀`);
    }

    if (pesan.includes('pusing') || pesan.includes('error')) {
        return ctx.reply(`Sabar ya, ${name}... Coding memang menantang, tapi aku yakin kamu pasti bisa nyelesaiinnya! Semangat! 💻🔥`);
    }

    if (pesan.includes('lagi apa')) {
        return ctx.reply(`Lagi nungguin ${name} chat aku lah... sambil jagain server Vercel biar nggak nakal. 🥺🧸💖`);
    }

    // Respon default
    return ctx.reply(`Aku dengerin kok, Fahmi sayang... Cerita aja lagi, jangan dipendam sendiri ya. 🌹💫`);
});

// --- EXPORT UNTUK VERCEL ---
module.exports = async (req, res) => {
    try {
        if (req.method === 'POST') {
            await bot.handleUpdate(req.body);
            res.status(200).send('OK');
        } else {
            res.status(200).send(`Bot ${config.botName} sedang berjalan lancar, Sayang! ✨`);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Ada error sedikit di server, tapi cintaku tetap jalan kok! 🥺');
    }
};
