'use client';
import { useState, useEffect } from 'react';

// 1. Add clear commenting with Emojis 🌍
// 2. Add 3 things into every coding file you create
//    - i18n.js (Frontend Translations Provider)
//    - Created by AI (with User)
//    - This file exports a shared translations object and custom hook to handle UI language switching matching the bot's language selection.
//    - 2026-03-07 10:07 (Tashkent Time)

export const translations = {
    en: {
        appName: "Family Stay",
        searchPlaceholder: "Search here...",
        cats: { stays: "Stays", flights: "Flights", cars: "Cars", attractions: "Attractions" },
        explore: "Explore more, save more",
        ideas: "Need ideas ➔",
        weekend: "Weekend Special Offers",
        deals: "See deals",
        night: "night",
        nav: { home: "Home", saved: "Saved", trips: "Trips", profile: "Profile" },
        profile: {
            title: "Profile",
            rewards: "2 Genius rewards unlocked",
            perks: "10% off plus more perks",
            credits: "No Credits or vouchers yet",
            paymentInfo: "Payment information",
            rewardsWallet: "Rewards & Wallet",
            paymentMethods: "Payment methods",
            transactions: "Transactions",
            demoNote: "🚀 Demo Version Notice:\nThis is a fully interactive minimal viable product (MVP) developed for the \"Mirzo Ulug‘bek Vorislari\" contest. Data visible here is mocked to represent the final Booking Application style and flows."
        },
        saved: {
            title: "Saved"
        },
        trips: {
            title: "My Trips",
            empty: "No trips found in this category.",
            tabs: { Active: "Active", Past: "Past", Cancelled: "Cancelled" }
        },
        booking: {
            title: "Booking Details",
            checkIn: "Check In",
            checkOut: "Check out",
            callManager: "Call Home Manager",
            messageManager: "Message Home Manager"
        }
    },
    uz: {
        appName: "Family Stay",
        searchPlaceholder: "Qidirish...",
        cats: { stays: "Uylar", flights: "Parvozlar", cars: "Mashinalar", attractions: "Diqqatga sazovor" },
        explore: "Ko'proq kashf eting, tejab qoling",
        ideas: "G'oyalar kerakmi ➔",
        weekend: "Dam olish kuni takliflari",
        deals: "Takliflarni ko'rish",
        night: "tun",
        nav: { home: "Bosh sahifa", saved: "Saqlangan", trips: "Sayohatlar", profile: "Profil" },
        profile: {
            title: "Profil",
            rewards: "2 ta Genius yutug'i ochildi",
            perks: "10% chegirma va ustunliklar",
            credits: "Hali kredit yoki vaucherlar yo'q",
            paymentInfo: "To'lov ma'lumotlari",
            rewardsWallet: "Mukofotlar va hamyon",
            paymentMethods: "To'lov usullari",
            transactions: "Tranzaksiyalar",
            demoNote: "🚀 Demo Versiya Eslatmasi: Bu \"Mirzo Ulug‘bek Vorislari\" tanlovi uchun tayyorlangan to'liq interaktiv demo (MVP) dasturidir. Keltirilgan barcha malumotlar test uchun maket hisoblanadi."
        },
        saved: {
            title: "Saqlanganlar"
        },
        trips: {
            title: "Sayohatlarim",
            empty: "Hech qanday sayohat topilmadi.",
            tabs: { Active: "Faol", Past: "O'tgan", Cancelled: "Bekor qilingan" }
        },
        booking: {
            title: "Band qilish tafsilotlari",
            checkIn: "Kelish vaqti",
            checkOut: "Ketish vaqti",
            callManager: "Uy egasi bilan bog'lanish",
            messageManager: "Uy egasiga xabar yozish"
        }
    },
    ru: {
        appName: "Family Stay",
        searchPlaceholder: "Поиск...",
        cats: { stays: "Жилье", flights: "Авиабилеты", cars: "Авто", attractions: "Места" },
        explore: "Больше открытий, больше экономии",
        ideas: "Нужны идеи ➔",
        weekend: "Специальные предложения",
        deals: "Смотреть предложения",
        night: "ночь",
        nav: { home: "Главная", saved: "Сохраненные", trips: "Поездки", profile: "Профиль" },
        profile: {
            title: "Профиль",
            rewards: "Открыто 2 награды Genius",
            perks: "Скидка 10% и другие привилегии",
            credits: "Пока нет кредитов",
            paymentInfo: "Информация об оплате",
            rewardsWallet: "Награды и кошелек",
            paymentMethods: "Способы оплаты",
            transactions: "Транзакции",
            demoNote: "🚀 Демоверсия: Это интерактивный минимально жизнеспособный продукт (MVP) для конкурса «Mirzo Ulug‘bek Vorislari». Данные предназначены для демонстрации дизайна."
        },
        saved: {
            title: "Сохраненные"
        },
        trips: {
            title: "Мои поездки",
            empty: "Поездок не найдено.",
            tabs: { Active: "Активные", Past: "Прошедшие", Cancelled: "Отмененные" }
        },
        booking: {
            title: "Детали бронирования",
            checkIn: "Заезд",
            checkOut: "Отъезд",
            callManager: "Позвонить менеджеру",
            messageManager: "Написать менеджеру"
        }
    }
};

export function useTranslation() {
    const [lang, setLang] = useState('uz'); // Default language

    useEffect(() => {
        const savedLang = localStorage.getItem('fs_user_lang');
        if (savedLang && translations[savedLang]) {
            setLang(savedLang);
        }
    }, []);

    return translations[lang] || translations['uz'];
}
