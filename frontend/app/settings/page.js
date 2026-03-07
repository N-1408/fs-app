import React from 'react';
import Link from 'next/link';

// 1. Add clear commenting with Emojis ⚙️
// 2. Add 3 things into every coding file you create
//    - settings/page.js (Settings & Profile Page)
//    - Created by AI (with User)
//    - This file renders the profile menu with settings, dark mode toggle placeholders, and language options.
//    - 2026-03-07 08:53 (Tashkent Time)

export default function SettingsPage() {
    return (
        <>
            <header className="header">
                <div className="header-title">
                    <h1>Settings</h1>
                    <p>Manage your account 🚀</p>
                </div>
            </header>

            <main style={{ padding: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
                    <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'linear-gradient(135deg, #3B82F6, #2563EB)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', color: '#fff', fontWeight: 'bold' }}>
                        M
                    </div>
                    <div>
                        <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}>Mukhammad</h2>
                        <p style={{ color: '#94A3B8', fontSize: '14px' }}>+998 90 123 45 67</p>
                    </div>
                </div>

                <div style={{ background: '#1A1D24', borderRadius: '16px', padding: '8px 0', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <div style={{ padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                        <span style={{ fontSize: '16px', fontWeight: '500' }}>🌍 Language</span>
                        <span style={{ color: '#94A3B8', fontSize: '14px' }}>English 〉</span>
                    </div>
                    <div style={{ padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                        <span style={{ fontSize: '16px', fontWeight: '500' }}>🌙 Dark Mode</span>
                        <span style={{ color: '#3B82F6', fontSize: '14px' }}>On 〉</span>
                    </div>
                    <div style={{ padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                        <span style={{ fontSize: '16px', fontWeight: '500' }}>🔔 Notifications</span>
                        <span style={{ color: '#3B82F6', fontSize: '14px' }}>On 〉</span>
                    </div>
                    <div style={{ padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '16px', fontWeight: '500' }}>💳 Payment Methods</span>
                        <span style={{ color: '#94A3B8', fontSize: '14px' }}>〉</span>
                    </div>
                </div>

                <div style={{ marginTop: '24px', background: '#1A1D24', borderRadius: '16px', padding: '8px 0', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <div style={{ padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '16px', fontWeight: '500', color: '#EF4444' }}>Log Out</span>
                    </div>
                </div>
            </main>

            <nav className="bottom-nav">
                <Link href="/" className="nav-item">
                    <span>🏠</span>
                    Discover
                </Link>
                <div className="nav-item">
                    <span>❤️</span>
                    Saved
                </div>
                <Link href="/settings" className="nav-item active">
                    <span>⚙️</span>
                    Settings
                </Link>
            </nav>
        </>
    );
}
