// index.js
const { Telegraf, session, Markup } = require('telegraf');
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN);
const WEB_APP_URL = process.env.WEB_APP_URL || 'https://example.com';

// Add session middleware
bot.use(session());

// Localization Dictionary
const i18n = {
    uz: {
        askName: "👤 Iltimos, ism va familiyangizni kiriting:",
        askContact: "📞 Endi, iltimos telefon raqamingizni yuboring:",
        contactBtn: "📱 Raqamni yuborish",
        welcome: "🎉 Rahmat! Family Stay ilovasiga xush kelibsiz. Quyidagi tugmani bosib, uyni band qilishni boshlang:",
        openWebApp: "🏡 Ilovani ochish",
    },
    ru: {
        askName: "👤 Пожалуйста, введите ваше имя и фамилию:",
        askContact: "📞 Теперь, пожалуйста, отправьте ваш номер телефона:",
        contactBtn: "📱 Отправить номер",
        welcome: "🎉 Спасибо! Добро пожаловать в Family Stay. Нажмите на кнопку ниже, чтобы начать бронирование:",
        openWebApp: "🏡 Открыть приложение",
    },
    en: {
        askName: "👤 Please enter your first and last name:",
        askContact: "📞 Now, please share your phone number:",
        contactBtn: "📱 Share contact",
        welcome: "🎉 Thank you! Welcome to Family Stay. Click the button below to start booking:",
        openWebApp: "🏡 Open Web App",
    }
};

bot.start((ctx) => {
    // Initialize session state
    ctx.session = ctx.session || {};
    ctx.session.step = 'language';

    return ctx.reply("👋 Salom! Tilni tanlang / Пожалуйста, выберите язык / Please choose language:",
        Markup.inlineKeyboard([
            [Markup.button.callback("🇺🇿 O'zbekcha", "lang_uz")],
            [Markup.button.callback("🇷🇺 Русский", "lang_ru")],
            [Markup.button.callback("🇬🇧 English", "lang_en")],
        ])
    );
});

// Handle Language Selection
bot.action(/lang_(.+)/, async (ctx) => {
    const lang = ctx.match[1];
    ctx.session = ctx.session || {};
    ctx.session.lang = lang;
    ctx.session.step = 'name';

    await ctx.answerCbQuery();
    await ctx.reply(i18n[lang].askName);
});

// Handle Text Inputs (Names)
bot.on('text', async (ctx) => {
    const state = ctx.session || {};
    const lang = state.lang || 'en';

    if (state.step === 'name') {
        state.name = ctx.message.text;
        state.step = 'contact';

        return ctx.reply(i18n[lang].askContact, Markup.keyboard([
            [Markup.button.contactRequest(i18n[lang].contactBtn)]
        ]).resize().oneTime());
    }
});

// Handle Contact Share
bot.on('contact', async (ctx) => {
    const state = ctx.session || {};
    const lang = state.lang || 'en';

    if (state.step === 'contact') {
        state.phone = ctx.message.contact.phone_number;
        state.step = 'completed';

        // Remove custom keyboard and show inline web app button
        await ctx.reply(i18n[lang].welcome, {
            reply_markup: {
                remove_keyboard: true,
            }
        });

        const queryParams = new URLSearchParams({
            name: state.name || '',
            phone: state.phone || '',
            lang: state.lang || 'uz'
        }).toString();

        const finalWebAppUrl = `${WEB_APP_URL}?${queryParams}`;

        return ctx.reply('Family Stay App:',
            Markup.inlineKeyboard([
                Markup.button.webApp(i18n[lang].openWebApp, finalWebAppUrl)
            ])
        );
    }
});

// Error Handling for Polling Conflicts
bot.catch((err, ctx) => {
    console.error(`Bot Error:`, err);
});

// Prevent Node.js from exiting on unhandled rejection (which happens during Zero-Downtime overlapping bots)
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

bot.launch({ dropPendingUpdates: true }).then(() => {
    console.log('Bot is running...');

    // Render Free Tier Keep-Alive Pinger (Pings every 10 minutes)
    const renderUrl = 'https://family-stay-bot.onrender.com';
    setInterval(() => {
        fetch(renderUrl)
            .then(res => console.log(`[Keep-Alive] Pinged ${renderUrl} - Status: ${res.status}`))
            .catch(err => console.error(`[Keep-Alive] Ping failed:`, err.message));
    }, 10 * 60 * 1000); // 10 minutes

}).catch((err) => {
    console.error('Bot launch error:', err);
});

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
