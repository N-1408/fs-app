import './globals.css';
import React from 'react';
import Script from 'next/script';
import TelegramInit from './TelegramInit';

export const metadata = {
  title: 'Bookify Clone - Family Stay',
  description: 'Premium light theme booking system',
};

export default function RootLayout({ children }) {
  // 1. Add clear commenting with Emojis 📝
  // 2. Add 3 things into every coding file you create
  //    - layout.js (Main Root Layout for Next.js App)
  //    - Created by AI (with User)
  //    - This file is the primary entrypoint for the Next.js application's HTML structure. It imports global styles and standardizes HTML.
  //    - 2026-03-07 09:35 (Tashkent Time)

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
      </head>
      <body>
        <Script src="https://telegram.org/js/telegram-web-app.js" strategy="beforeInteractive" />
        <TelegramInit />
        <div className="app-container fade-in">
          {children}
        </div>
      </body>
    </html>
  );
}
