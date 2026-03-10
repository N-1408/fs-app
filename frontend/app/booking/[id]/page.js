'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTranslation } from '../../i18n';

// 1. Add clear commenting with Emojis 📅
// 2. Add 3 transition things into every coding file you create
//    - booking/[id]/page.js (Booking Details - Bookify Style)
//    - Created by AI (with User)
//    - This file renders the details of a booking, matching the clean Light Theme "Bookify" Booking details screen. It includes tabs and manager contact options.
//    - 2026-03-07 10:20 (Tashkent Time)


export default function BookingDetailsPage({ params }) {
    const router = useRouter();
    const t = useTranslation();
    const [activeTab, setActiveTab] = useState('Active');

    const tabs = ['Active', 'Past', 'Cancelled'];

    return (
        <div style={{ minHeight: '100vh', background: '#F8FAFC' }}>
            <div style={{ padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div onClick={() => router.back()} className="icon-btn" style={{ cursor: 'pointer' }}>{"<"}</div>
                <h2 style={{ fontSize: '18px', fontWeight: '600' }}>{t.booking.title}</h2>
                <div className="icon-btn" style={{ cursor: 'pointer' }}>{"+"}</div>
            </div>

            <div style={{ display: 'flex', gap: '8px', padding: '0 24px 16px', justifyContent: 'center' }}>
                {tabs.map(tab => (
                    <div
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        style={{
                            padding: '10px 24px',
                            borderRadius: '24px',
                            fontSize: '14px',
                            fontWeight: '500',
                            cursor: 'pointer',
                            background: activeTab === tab ? '#DBEAFE' : '#FFFFFF',
                            color: activeTab === tab ? '#2563EB' : '#64748B',
                            border: '1px solid #E2E8F0',
                            flex: 1,
                            textAlign: 'center'
                        }}
                    >
                        {t.trips.tabs[tab] || tab}
                    </div>
                ))}
            </div>

            <div style={{ padding: '0 24px 100px' }}>
                <div style={{ background: '#FFFFFF', borderRadius: '32px', padding: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', border: '1px solid #E2E8F0' }}>

                    <div style={{ height: '200px', borderRadius: '24px', background: `url('/img/thumb_3993_600_0_0_0_auto.jpg') center/cover`, position: 'relative' }}>
                        <div className="hotel-rating" style={{ top: 16, left: 16 }}>⭐ 4.9</div>
                    </div>

                    <div style={{ marginTop: '20px', padding: '0 8px' }}>
                        <h3 style={{ fontSize: '20px', fontWeight: '700' }}>Luxury Hotel & Vacation Suites</h3>
                        <p style={{ color: '#64748B', fontSize: '14px', marginTop: '6px' }}>📍 The Ritz London, Piccadilly</p>
                    </div>

                    <div style={{ display: 'flex', gap: '12px', marginTop: '24px', alignItems: 'center' }}>
                        <div style={{ flex: 1, background: '#F8FAFC', borderRadius: '20px', padding: '16px' }}>
                            <div style={{ fontSize: '13px', color: '#64748B' }}>{t.booking.checkIn}</div>
                            <div style={{ fontSize: '16px', fontWeight: '600', marginTop: '4px' }}>10 Jan, 2026</div>
                            <div style={{ fontSize: '13px', color: '#64748B', marginTop: '4px' }}>16:00pm</div>
                        </div>
                        <div style={{ color: '#64748B', background: '#F8FAFC', padding: '12px', borderRadius: '50%' }}>➔</div>
                        <div style={{ flex: 1, background: '#F8FAFC', borderRadius: '20px', padding: '16px' }}>
                            <div style={{ fontSize: '13px', color: '#64748B' }}>{t.booking.checkOut}</div>
                            <div style={{ fontSize: '16px', fontWeight: '600', marginTop: '4px' }}>15 Jan, 2026</div>
                            <div style={{ fontSize: '13px', color: '#64748B', marginTop: '4px' }}>16:00pm</div>
                        </div>
                    </div>

                    <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '16px', padding: '0 8px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', paddingBottom: '16px', borderBottom: '1px solid #E2E8F0' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#64748B', fontWeight: '500' }}>
                                <span>📞</span> {t.booking.callManager}
                            </div>
                            <div style={{ color: '#64748B' }}>➔</div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', paddingBottom: '8px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#64748B', fontWeight: '500' }}>
                                <span>💬</span> {t.booking.messageManager}
                            </div>
                            <div style={{ color: '#64748B' }}>➔</div>
                        </div>
                    </div>

                </div>
            </div>

            <nav className="bottom-nav">
                <Link href="/" className="nav-item">
                    <div>🏠</div>
                    <span>{t.nav.home}</span>
                </Link>
                <Link href="/saved" className="nav-item">
                    <div>♡</div>
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
        </div>
    );
}
