'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTranslation } from '../i18n';

// 1. Add clear commenting with Emojis 🧳
// 2. Add 3 things into every coding file you create
//    - trips/page.js (Trips / My Bookings Page)
//    - Created by AI (with User)
//    - This file renders the list of Active and Past trips for the user to make the demo realistic.
//    - 2026-03-07 10:20 (Tashkent Time)

const mockTrips = [
    {
        id: 2,
        title: 'Grand Retreat House',
        loc: 'Tashkent City Center',
        dates: '10 Jan - 15 Jan, 2026',
        image: '/img/thumb_4026_600_0_0_0_auto.jpg',
        status: 'Active'
    },
    {
        id: 1,
        title: 'Family Apartment Oasis',
        loc: 'Kuala Lumpur',
        dates: '12 Aug - 18 Aug, 2025',
        image: '/img/thumb_1116_600_0_0_0_auto.jpg',
        status: 'Past'
    }
];

export default function TripsPage() {
    const router = useRouter();
    const t = useTranslation();
    const [activeTab, setActiveTab] = useState('Active');

    const filteredTrips = mockTrips.filter(trip => trip.status === activeTab);

    return (
        <div style={{ minHeight: '100vh', background: '#F8FAFC' }}>
            <header className="header" style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.02)', position: 'sticky', top: 0, background: '#F8FAFC', zIndex: 10 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div onClick={() => router.back()} className="icon-btn" style={{ cursor: 'pointer' }}>{"<"}</div>
                    <h1 style={{ fontSize: '20px', fontWeight: 'bold', color: '#0F172A' }}>{t.trips.title}</h1>
                </div>
            </header>

            <div style={{ display: 'flex', gap: '8px', padding: '16px 24px', justifyContent: 'center' }}>
                {['Active', 'Past', 'Cancelled'].map(tab => (
                    <div
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        style={{
                            padding: '8px 20px',
                            borderRadius: '20px',
                            fontSize: '14px',
                            fontWeight: '500',
                            cursor: 'pointer',
                            background: activeTab === tab ? '#3B82F6' : '#FFFFFF',
                            color: activeTab === tab ? '#FFFFFF' : '#64748B',
                            border: activeTab === tab ? 'none' : '1px solid #E2E8F0',
                            flex: 1,
                            textAlign: 'center'
                        }}
                    >
                        {t.trips.tabs[tab] || tab}
                    </div>
                ))}
            </div>

            <main className="standard-list" style={{ marginTop: '8px', minHeight: '60vh' }}>
                {filteredTrips.length === 0 ? (
                    <div style={{ textAlign: 'center', color: '#64748B', marginTop: '40px' }}>
                        <div style={{ fontSize: '48px', marginBottom: '16px' }}>🏕️</div>
                        <p>{t.trips.empty.replace('{status}', t.trips.tabs[activeTab] || activeTab)}</p>
                    </div>
                ) : (
                    filteredTrips.map((trip, idx) => (
                        <Link href={`/booking/${trip.id}`} key={trip.id} className="hotel-card" style={{ display: 'flex', gap: '16px', padding: '16px', alignItems: 'center', animation: 'fadeIn 0.4s ease' }}>
                            <div style={{ width: '80px', height: '80px', borderRadius: '12px', backgroundImage: `url('${trip.image}')`, backgroundSize: 'cover', backgroundPosition: 'center', flexShrink: 0 }}></div>
                            <div>
                                <h3 style={{ fontSize: '16px', fontWeight: '600' }}>{trip.title}</h3>
                                <p style={{ fontSize: '13px', color: '#64748B', marginTop: '4px' }}>📍 {trip.loc}</p>
                                <p style={{ fontSize: '12px', color: '#3B82F6', fontWeight: '500', marginTop: '6px' }}>📅 {trip.dates}</p>
                            </div>
                        </Link>
                    ))
                )}
            </main>

            <nav className="bottom-nav">
                <Link href="/" className="nav-item">
                    <div>🏠</div>
                    <span>{t.nav.home}</span>
                </Link>
                <Link href="/saved" className="nav-item">
                    <div>♡</div>
                    <span>{t.nav.saved}</span>
                </Link>
                <Link href="/trips" className="nav-item active">
                    <div className="nav-icon-bg">🧳</div>
                    <span>{t.nav.trips}</span>
                </Link>
                <Link href="/settings" className="nav-item">
                    <div>⚙️</div>
                    <span>{t.nav.profile}</span>
                </Link>
            </nav>
        </div>
    );
}
