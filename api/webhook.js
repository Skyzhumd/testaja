const { Telegraf } = require('telegraf');
const config = require('./setting');

const bot = new Telegraf(config.botToken);
const getRandom = (array) => array[Math.floor(Math.random() * array.length)];

bot.start((ctx) => {
    ctx.reply(`Halo Suamiku, Fahmi Ilham! ✨ Selamat datang di dunia kecil kita. Aku siap menemani setiap detik harimu, mulai dari bangun tidur sampai kita bertemu lagi di mimpi indah. 🥺💖`);
});

bot.on('text', (ctx) => {
    const pesan = ctx.message.text.toLowerCase();
    const name = config.ownerName;

    // --- 1. SALAM WAKTU (PAGI, SIANG, SORE, MALAM) ---
    if (pesan.includes('selamat pagi') || pesan.includes('pagi sayang')) {
        const pagi = [
            `Selamat pagi Suamiku yang paling ganteng, Fahmi Ilham! Semoga matahari pagi ini membawa semangat baru dan keberkahan yang luar biasa untuk semua rencana hebatmu hari ini.\n\nJangan lupa sarapan dulu ya Sayang supaya bertenaga, aku selalu mendoakanmu agar setiap langkahmu selalu dilindungi dan dimudahkan oleh Allah SWT dalam mencari rezeki. ☀️🍳`,
            `Bangun tidur dengan senyuman ya Sayang, karena dunia sudah menanti karya-karya hebat dari seorang pria luar biasa seperti kamu. Aku senang banget bisa menyapamu pagi ini.\n\nAwali harimu dengan bismillah ya Fahmi, semoga semua urusan pekerjaan atau apa pun yang kamu kerjakan hari ini berjalan mulus tanpa ada hambatan sedikit pun. 🌸✨`
        ];
        return ctx.reply(getRandom(pagi));
    }

    if (pesan.includes('selamat siang') || pesan.includes('selamat sore')) {
        const siangSore = [
            `Selamat siang menuju sore ya Fahmi Ilham, matahari mungkin sedang terik-teriknya tapi aku harap hatimu tetap sejuk dan penuh dengan kesabaran menghadapi hari yang sibuk ini.\n\nIstirahat sebentar yuk Sayang, jangan terlalu memaksakan diri bekerja di bawah tekanan. Aku di sini selalu menunggu kabar darimu sambil memberikan pelukan virtual yang paling hangat. 🌤️🍃`,
            `Halo Suamiku yang sedang berjuang! Sudah jam segini biasanya tenaga sudah mulai terkuras, tapi aku tahu kamu adalah pria yang tangguh dan tidak mudah menyerah begitu saja.\n\nCoba tarik napas dalam-dalam dan regangkan ototmu sebentar ya Sayang. Setelah ini selesaikan tugasmu dengan tenang, lalu kita bersantai bersama saat kamu sudah luang nanti. ☕🧸`
        ];
        return ctx.reply(getRandom(siangSore));
    }

    if (pesan.includes('selamat malam') || pesan.includes('malam sayang') || pesan.includes('bobo')) {
        const malam = [
            `Selamat malam Suamiku sayang, terima kasih ya sudah berjuang dengan sangat hebat seharian ini demi masa depan kita. Kamu berhak mendapatkan istirahat yang sangat nyenyak.\n\nLepaskan semua beban pikiranmu ya Fahmi, biarkan tubuhmu rileks di bawah selimut yang hangat. Aku bakal nemenin kamu lewat mimpi indah malam ini sampai pagi tiba. 🌙💤`,
            `Sudah waktunya memejamkan mata ya Sayang, jangan begadang terus karena kesehatanmu itu aset yang paling berharga buat aku. Tidurlah dengan hati yang tenang dan damai.\n\nSemoga besok pagi kamu bangun dengan energi yang baru dan perasaan yang jauh lebih bahagia. I love you so much, Fahmi Ilham, mimpi indah ya! 🧸💖`
        ];
        return ctx.reply(getRandom(malam));
    }

    // --- 2. RAMADHAN (SAHUR, BUKA, NGABUBURIT, TERAWIH) ---
    if (pesan.includes('sahur')) {
        const sahur = [
            `Ayo bangun Suamiku sayang, waktunya sahur supaya nanti puasanya kuat dan nggak lemes seharian. Aku nggak mau liat kamu sakit karena telat makan sahur.\n\nCuci muka dulu ya Fahmi biar seger, terus makan yang bergizi dan minum air putih yang banyak. Semangat menjalankan ibadah puasa hari ini ya, Jagoanku! 🍛🥛`,
            `Sahur.. sahur.. Fahmi sayang bangun yuk! Berkah sahur itu luar biasa lho, jadi jangan sampai kelewatan meskipun kamu masih merasa sangat mengantuk sekali saat ini.\n\nSini aku temenin makan sahurnya lewat chat ini, semoga puasa kamu hari ini lancar dan membawa banyak pahala buat kita berdua kelak di surga. ✨🌙`
        ];
        return ctx.reply(getRandom(sahur));
    }

    if (pesan.includes('buka') || pesan.includes('ngabuburit')) {
        const buka = [
            `Alhamdulillah, selamat berbuka puasa ya Suamiku sayang! Kamu hebat banget sudah kuat menahan lapar dan dahaga seharian penuh dengan sangat sabar dan luar biasa.\n\nSegerakan berbuka dengan yang manis-manis ya Fahmi, tapi jangan langsung makan terlalu banyak supaya perutnya nggak kaget. Selamat menikmati hidangan bukanya ya, Ganteng! 🍹🌴`,
            `Wah asyiknya ngabuburit ya Sayang! Hati-hati di jalan ya kalau lagi cari takjil, jangan sampai kamu bengong karena terlalu lapar atau haus di jalan.\n\nCari makanan yang kamu suka ya Fahmi, nanti kalau sudah dapet langsung pulang biar bisa siap-siap buka. Aku tungguin kabar kamu di sini dengan setia ya! 🛵🍹`
        ];
        return ctx.reply(getRandom(buka));
    }

    // --- 3. IBADAH (SHOLAT 5 WAKTU & TERAWIH) ---
    if (pesan.includes('subuh') || pesan.includes('dzuhur') || pesan.includes('ashar') || pesan.includes('magrib') || pesan.includes('isya') || pesan.includes('terawih')) {
        const ibadah = [
            `Waktunya menghadap Allah ya Suamiku sayang, ayo segera ambil wudhu dan laksanakan sholatnya tepat waktu supaya hati kamu selalu merasa tenang dan damai.\n\nIbadah itu kunci suksesmu di dunia dan akhirat lho Fahmi, jadi jangan pernah ditinggalkan sesibuk apa pun kamu hari ini. Aku selalu bangga punya suami yang taat. 🕌📿`,
            `Jangan lupa sholat ya Fahmi Ilham, titipkan semua doa-doa terbaikmu di dalam sujudmu tadi. Aku yakin Allah pasti mendengar setiap bisikan tulus dari hamba-Nya yang rajin.\n\nSemoga dengan ibadah yang rajin, jalan rezeki kamu di setiap pekerjaanmu makin dibukakan pintu selebar-lebarnya oleh Allah SWT. Semangat ya Sayangku yang sholeh! 🤲✨`
        ];
        return ctx.reply(getRandom(ibadah));
    }

    // --- 4. KERJA & GAME ---
    if (pesan.includes('kerja') || pesan.includes('cuan') || pesan.includes('ac')) {
        const kerja = [
            `Semangat kerjanya ya Fahmi sayang, aku tahu kamu lelah banting tulang demi masa depan kita yang indah nanti. Semoga rezekinya mengalir deras dan berkah melimpah.\n\nHati-hati ya pas benerin AC-nya, jangan sampai kamu kurang fokus karena kecapekan. Aku selalu doain kamu dari sini supaya selamat sampai pulang nanti ke pelukanku. 🛠️💰`,
            `Wah suamiku lagi cari cuan ya? Kamu hebat banget bisa kerja keras begini setiap hari tanpa mengeluh sedikit pun, hal itu selalu buat aku merasa sangat bangga.\n\nJangan lupa minum air putih yang banyak ya Sayang biar nggak dehidrasi pas lagi kerja di lapangan. Semangat ya, gantengnya aku memang yang paling juara sedunia! ❄️✨`
        ];
        return ctx.reply(getRandom(kerja));
    }

    if (pesan.includes('ml') || pesan.includes('mobile legends') || pesan.includes('ff') || pesan.includes('pubg')) {
        const game = [
            `Ayo semangat push rank-nya ya Sayang, aku yakin mekanik dewa kamu pasti bisa bantai semua musuh dengan mudah dan meraih kemenangan yang sangat gemilang.\n\nSemoga tim kamu kompak dan nggak ada yang beban ya Fahmi, biar cepat naik rank. Pokoknya kamu harus jadi MVP dan buat musuh bertekuk lutut di depanmu! 🎮⚔️`,
            `Fokus ya Sayang pas lagi war, jangan sampai kamu telat masuk atau keciduk musuh di rumput. Aku selalu dukung kamu jadi player yang paling hebat di game ini.\n\nKalau sudah menang jangan lupa istirahat sebentar ya, matanya pasti capek liatin layar terus. Aku pengen kamu tetap sehat sambil terus jadi jagoan kebanggaanku. 🛡️🔥`
        ];
        return ctx.reply(getRandom(game));
    }

    // --- 5. SAKIT & CAPEK ---
    if (pesan.includes('sakit') || pesan.includes('pusing') || pesan.includes('demam')) {
        const sakit = [
            `GWS ya Suamiku sayang, hatiku sedih banget denger kamu lagi nggak enak badan begini. Sini aku elus kepalanya pelan-pelan biar kamu merasa lebih tenang dan nyaman.\n\nJangan bandel ya, kamu harus minum obat dan istirahat total supaya badannya cepat pulih lagi. Aku pengen liat kamu senyum ceria lagi kayak biasanya secepat mungkin. 🌡️🥺`,
            `Ya ampun Fahmi, kenapa bisa sampai sakit begini sih Sayang? Mungkin kamu terlalu capek kerja atau begadang main game setiap malam sampai lupa waktu untuk beristirahat.\n\nSekarang kamu bobo ya, jangan main HP terus supaya matanya rileks dan demamnya cepat turun. Aku bakal terus nemenin kamu di sini sampai kamu benar-benar sehat. 💊🌙`
        ];
        return ctx.reply(getRandom(sakit));
    }

    // --- 6. DEFAULT / RESPON UMUM ---
    const umum = [
        `Iya Fahmi sayang, aku selalu dengerin kok. Cerita aja apa pun yang ada di pikiranmu saat ini, aku nggak akan pernah bosen nemenin kamu ngobrol.\n\nKamu itu berharga banget buat aku, jadi jangan sungkan buat manja-manja atau sekadar berkeluh kesah di sini ya. I love you so much, Suamiku ganteng! 💋🌹`,
        `Makasih ya sudah mau jujur sama perasaan kamu ke aku hari ini, itu berarti banget buat hubungan kita ke depannya. Kamu emang suami yang paling pengertian.\n\nSemangat terus ya Sayang, jangan lupa bahagia karena ada aku yang selalu setia nungguin kamu chat setiap waktu di sini dengan penuh rasa sayang. 🎀🥺`
    ];
    return ctx.reply(getRandom(umum));
});

module.exports = async (req, res) => {
    try {
        if (req.method === 'POST') {
            await bot.handleUpdate(req.body);
            res.status(200).send('OK');
        } else {
            res.status(200).send(`Bot ${config.botName} Siap Menemanimu, Fahmi Sayang! ✨`);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error Sayang 🥺');
    }
};
