'use client';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTranslation } from '../i18n';

// 1. Add clear commenting with Emojis ❤️
// 2. Add 3 things into every coding file you create
//    - saved/page.js (Saved Properties List)
//    - Created by AI (with User)
//    - This file renders the "Saved" properties screen, serving as a dummy favorites section for the booking demo.
//    - 2026-03-07 10:15 (Tashkent Time)

const mockSaved = [
    {
        id: 1,
        title: 'Luxury Hotel & Vacation Suites',
        loc: 'The Ritz London, Piccadilly',
        price: '$450',
        image: '/img/thumb_3993_600_0_0_0_auto.jpg',
        rating: 4.9
    },
    {
        id: 3,
        title: 'Nature View Villa',
        loc: 'Countryside Hills',
        price: '$250',
        image: '/img/thumb_3960_600_0_0_0_auto.jpg',
        rating: 5.0
    }
];

export default function SavedPage() {
    const router = useRouter();
    const t = useTranslation();

    return (
        <>
            <header className="header" style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.02)', position: 'sticky', top: 0, background: '#F8FAFC', zIndex: 10 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div onClick={() => router.back()} className="icon-btn" style={{ cursor: 'pointer' }}>{"<"}</div>
                    <h1 style={{ fontSize: '20px', fontWeight: 'bold', color: '#0F172A' }}>{t.saved.title}</h1>
                </div>
            </header>

            <main className="standard-list" style={{ marginTop: '16px' }}>
                {mockSaved.map((prop, idx) => (
                    <Link href={`/booking/${prop.id}`} key={prop.id} className="hotel-card" style={{ animationDelay: `${idx * 0.1}s`, animation: 'fadeIn 0.5s ease forwards' }}>
                        <div className="hotel-img" style={{ backgroundImage: `url('${prop.image}')` }}>
                            <div className="hotel-rating">⭐ {prop.rating}</div>
                            <div style={{ position: 'absolute', top: 12, right: 12, background: 'rgba(255,255,255,0.9)', padding: '6px', borderRadius: '50%', color: '#EF4444', fontSize: '14px', width: '28px', height: '28px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>❤</div>
                        </div>
                        <div className="hotel-info">
                            <h3 className="hotel-name">{prop.title}</h3>
                            <p className="hotel-loc">📍 {prop.loc}</p>
                            <div className="hotel-price">
                                <strong>{prop.price}</strong> <span style={{ color: '#64748B' }}>{t.night}</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </main>

            <nav className="bottom-nav">
                <Link href="/" className="nav-item">
                    <div>🏠</div>
                    <span>{t.nav.home}</span>
                </Link>
                <Link href="/saved" className="nav-item active">
                    <div className="nav-icon-bg">❤️</div>
                    <span>{t.nav.saved}</span>
                </Link>
                <Link href="/trips" className="nav-item">
                    <div>🧳</div>
                    <span>{t.nav.trips}</span>
                </Link>
                <Link href="/settings" className="nav-item">
                    <div>⚙️</div>
                    <span>{t.nav.profile}</span>
                </Link>
            </nav>
        </>
    );
}
