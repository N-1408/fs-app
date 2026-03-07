'use client';
import { useEffect } from 'react';

// 1. Add clear commenting with Emojis 🚀
// 2. Add 3 things into every coding file you create
//    - TelegramInit.js (Client Component for Telegram WebApp Init)
//    - Created by AI (with User)
//    - This file initializes Telegram WebApp, expands it to full screen, and extracts user data (including real profile photo) directly from Telegram APIs via initDataUnsafe.
//    - 2026-03-07 09:47 (Tashkent Time)
// 3. ✨ Change log:
//    - 2026-03-07 09:47 (Tashkent Time) - Integrated initDataUnsafe for real user photo.

export default function TelegramInit() {
    useEffect(() => {
        try {
            if (window.Telegram && window.Telegram.WebApp) {
                window.Telegram.WebApp.expand();
                window.Telegram.WebApp.ready();
                window.Telegram.WebApp.setHeaderColor('#F8FAFC');

                const user = window.Telegram.WebApp.initDataUnsafe?.user;
                if (user) {
                    localStorage.setItem('fs_user_name', user.first_name + (user.last_name ? ' ' + user.last_name : ''));
                    localStorage.setItem('fs_user_photo', user.photo_url || '');
                }
            }
        } catch (err) {
            console.log('Telegram WebApp error', err);
        }

        // Fallback URL query parameters (for phone which is not in initDataUnsafe without permissions)
        const params = new URLSearchParams(window.location.search);
        const phoneStr = params.get('phone');
        if (phoneStr) {
            localStorage.setItem('fs_user_phone', phoneStr);
        }
    }, []);

    return null;
}
