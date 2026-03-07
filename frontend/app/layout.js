import './globals.css';
import React from 'react';

export const metadata = {
  title: 'Family Stay - Premium Booking',
  description: 'Booking system for large families and tourist groups',
};

export default function RootLayout({ children }) {
  // 1. Add clear commenting with Emojis 📝
  // 2. Add 3 things into every coding file you create
  //    - layout.js (Main Root Layout for Next.js App)
  //    - Created by AI (with User)
  //    - This file is the primary entrypoint for the Next.js application's HTML structure. It imports global styles and standardizes HTML.
  //    - 2026-03-07 08:50 (Tashkent Time)

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
      </head>
      <body>
        <div className="app-container fade-in">
          {children}
        </div>
      </body>
    </html>
  );
}
