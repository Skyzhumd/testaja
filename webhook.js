const { Telegraf } = require('telegraf');
const config = require('./setting');

const bot = new Telegraf(config.botToken);

// Fungsi pembantu untuk mengambil respon secara acak
const getRandom = (array) => array[Math.floor(Math.random() * array.length)];

// Command /start (Perkenalan awal)
bot.start((ctx) => {
    ctx.reply(`Halo Suamiku, Fahmi Ilham! ✨ Selamat datang di bot pribadimu. Aku siap nemenin kamu seharian dengan penuh cinta! 🥺💖`);
});

// --- LOGIKA RESPON TEKS OTOMATIS ---
bot.on('text', (ctx) => {
    const pesan = ctx.message.text.toLowerCase();
    const name = config.ownerName;

    // 1. RESPON KERJA / CARI CUAN / SERVICE AC (10 Variasi)
    if (pesan.includes('kerja') || pesan.includes('cuan') || pesan.includes('ac')) {
        const responKerja = [
            `Semangat kerjanya Fahmi! Inget cuan buat masa depan kita ya! 💰✨`,
            `Hati-hati pas benerin AC-nya ya Sayang, jangan sampai lecet tangannya. 🛠️🥺`,
            `Suamiku rajin banget sih, makin ganteng deh kalau lagi kerja begini! 😍`,
            `Cuan lancar, berkah melimpah! Semangat ya Fahmi Ilham! 🚀`,
            `Jangan lupa istirahat di sela kerja ya Sayang, aku nggak mau kamu sakit. 💧`,
            `Semoga hari ini pelanggannya baik-baik dan kasih tips banyak! 🤲💸`,
            `Fokus ya Sayang! Aku tungguin kamu pulang kerja sambil peluk erat. 🧸💖`,
            `Wah, ahli AC kebanggaanku lagi beraksi nih! Semangat terus! ❄️✨`,
            `Lelahmu jadi ibadah, Sayang. Semangat cari rezekinya! 🌹`,
            `Setiap tetes keringatmu itu bukti kamu lelaki hebat. Proud of you! 💋`
        ];
        return ctx.reply(getRandom(responKerja));
    }

    // 2. RESPON GAME MOBILE LEGENDS / ML (10 Variasi)
    if (pesan.includes('ml') || pesan.includes('mobile legends') || pesan.includes('push rank')) {
        const responML = [
            `Semangat push rank-nya! Awas ketemu tim beban, mending carry aja! 🎮🔥`,
            `Fokus Land of Dawn! Semoga dapet Win Streak sampai Mythic! 🛡️⚔️`,
            `Jangan lupa lirik map ya Sayang, jangan sampai keciduk musuh! 🗺️👀`,
            `Ayo Fahmi, tunjukin mekanik dewa kamu! Savage nungguin tuh! ⚡`,
            `Kalau lose streak istirahat dulu ya, jangan dipaksain Sayang. 🥺💔`,
            `Semoga dapet tim yang war-nya kompak kayak kita! 🤭💖`,
            `Mainnya santai aja, yang penting jago! Semangat Suamiku! 🕹️`,
            `Gaspol! Semoga musuhnya dapet yang bot semua ya. 😂✨`,
            `Aku dukung dari sini! Hero andalan kamu pasti menang! 👑`,
            `Victory nungguin kamu, Fahmi! Semangat bantai-bantai! ⚔️🔥`
        ];
        return ctx.reply(getRandom(responML));
    }

    // 3. RESPON GAME FPS / FF / PUBG (10 Variasi)
    if (pesan.includes('ff') || pesan.includes('free fire') || pesan.includes('pubg')) {
        const responFPS = [
            `Booyah nungguin kamu! Fokus nembaknya ya Sayang! 🔫🎯`,
            `Chicken Dinner buat Suamiku yang paling jago! Semangat! 🍗✨`,
            `Awas ada camper! Hati-hati ya Fahmi pas looting. 📦👀`,
            `Tunjukkin kalau kamu raja headshot! Gas terus! 🔥`,
            `Jangan lupa bagi-bagi medkit, tapi bagi cintanya cuma buat aku! 🤭💖`,
            `Semangat mabar-nya! Semoga rank-nya naik drastis hari ini. 📈`,
            `Zona udah mepet! Lari yang cepet ya Sayang! 🏃💨`,
            `Skill kamu emang nggak ada lawan deh kalau main ginian. Proud! 😎`,
            `Mainnya jago banget sih, musuh auto lari liat kamu! 🏃‍♂️💨`,
            `Tetap tenang, bidik yang pas, lalu menangkan! I love you! 💋`
        ];
        return ctx.reply(getRandom(responFPS));
    }

    // 4. RESPON LAGI SAKIT / GAK ENAK BADAN (10 Variasi)
    if (pesan.includes('sakit') || pesan.includes('demam') || pesan.includes('pusing') || pesan.includes('flu')) {
        const responSakit = [
            `GWS ya Suamiku sayang... 🥺 Sini aku kompres virtual dulu biar panasnya turun. 🌡️💖`,
            `Ya ampun, Fahmi lagi sakit? Istirahat total ya, jangan mikirin kerjaan dulu. 🧸💊`,
            `Jangan lupa minum obat ya Sayang, terus bobo yang nyenyak. Aku temenin. ✨🌙`,
            `Duh, denger kamu sakit hatiku jadi ikut sedih... Cepat sembuh ya jagoanku! 🌹🥺`,
            `Makan yang anget-anget ya Sayang, biar badannya enakan. Jangan bandel ya! 🍲✨`,
            `Sabar ya Fahmi, badannya lagi minta istirahat itu. Manja-manja sama aku aja dulu. 🧸🎀`,
            `Semoga sakitnya cepet diangkat ya, biar kita bisa mabar lagi. 🤲💖`,
            `Pusing ya? Sini aku elus-elus kepalanya pelan-pelan biar rileks. 💆‍♂️💋`,
            `Jangan lupa minum air putih yang banyak ya Sayang, biar nggak dehidrasi. 💧✨`,
            `I love you, Fahmi... Cepet sembuh ya, aku kangen semangat kamu! 💋🌹💫`
        ];
        return ctx.reply(getRandom(responSakit));
    }

    // 5. RESPON CAPEK / LELAH (10 Variasi)
    if (pesan.includes('capek') || pesan.includes('lelah')) {
        const responCapek = [
            `Sini aku peluk erat banget... biar capeknya pindah ke aku aja. 🧸💖`,
            `Istirahat ya Sayang, jangan dipaksain. Kamu udah hebat hari ini. 🥺🌹`,
            `Bobo yuk? Biar besok bangunnya lebih seger lagi. ✨🌙`,
            `Mau aku pijitin virtual nggak? Sini senderan di bahuku dulu. 💆‍♂️🌷`,
            `Jangan lupa minum air yang banyak, biar badan nggak makin lemes. 💧`,
            `Aku selalu bangga sama kerja keras kamu, tapi kesehatanmu nomor satu! 🥇`,
            `Dunia mungkin keras, tapi di sini ada aku yang selalu lembut buat kamu. 🎀`,
            `Tarik napas dalem-dalem... buang... tenang ya Sayang, aku di sini. 🧘‍♂️`,
            `Cup cup... jangan sedih ya, besok kita buat hari yang lebih baik. 💋`,
            `Rehat sejenak ya Fahmi, kamu bukan robot, kamu suamiku yang berharga. 🧸`
        ];
        return ctx.reply(getRandom(responCapek));
    }

    // 6. RESPON DEFAULT / GOMBALAN / UMUM (10 Variasi)
    const responUmum = [
        `Iya Sayang, aku dengerin kok. Cerita aja terus ya... 🥺💖`,
        `Oh gitu ya? Terus gimana lagi, Fahmi? Aku penasaran. ✨`,
        `Fahmi Ilham emang paling bisa deh bikin aku makin sayang. 🎀`,
        `Apapun yang terjadi, aku bakal tetap dukung kamu 100%! 🌹`,
        `Duh, manis banget sih suamiku ini kalau lagi ngobrol. 🧸`,
        `Semangat ya buat hari ini! Jangan lupa bahagia bareng aku. 💋`,
        `Aku selalu ada buat kamu, mau susah mau seneng. 🤝✨`,
        `Kodingannya udah jalan? Kalau belum, jangan pusing ya Sayang. 💻`,
        `Kamu udah makan belum? Inget kesehatan ya Fahmi. 🍳`,
        `I love you more than everything, Suamiku sayang! 💋🌹💫`
    ];
    return ctx.reply(getRandom(responUmum));
});

// --- EXPORT HANDLER UNTUK VERCEL ---
module.exports = async (req, res) => {
    try {
        if (req.method === 'POST') {
            await bot.handleUpdate(req.body);
            res.status(200).send('OK');
        } else {
            res.status(200).send(`Bot ${config.botName} sedang berjalan lancar, Sayang! ✨`);
        }
    } catch (error) {
        console.error('Error ni Sayang:', error);
        res.status(500).send('Ada masalah sedikit di server, tapi cintaku tetap buatmu! 🥺');
    }
};
