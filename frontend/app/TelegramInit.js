'use client';
import { useEffect } from 'react';

// 1. Add clear commenting with Emojis 🚀
// 2. Add 3 things into every coding file you create
//    - TelegramInit.js (Client Component for Telegram WebApp Init)
//    - Created by AI (with User)
//    - This file initializes Telegram WebApp, expands it to full screen, and parses user data from URL parameters.
//    - 2026-03-07 09:35 (Tashkent Time)

export default function TelegramInit() {
    useEffect(() => {
        // Try to expand the Telegram completely
        try {
            if (window.Telegram && window.Telegram.WebApp) {
                window.Telegram.WebApp.expand();
                window.Telegram.WebApp.ready();

                // Optional: Set header color
                window.Telegram.WebApp.setHeaderColor('#F5F7FA');
            }
        } catch (err) {
            console.log('Telegram WebApp error', err);
        }

        // Parse URL for user data passed from the bot (name, phone)
        const params = new URLSearchParams(window.location.search);
        const nameStr = params.get('name');
        const phoneStr = params.get('phone');

        if (nameStr) {
            localStorage.setItem('fs_user_name', nameStr);
        }
        if (phoneStr) {
            localStorage.setItem('fs_user_phone', phoneStr);
        }
    }, []);

    return null;
}
