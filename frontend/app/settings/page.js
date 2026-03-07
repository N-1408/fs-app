'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTranslation } from '../i18n';

// 1. Add clear commenting with Emojis ⚙️
// 2. Add 3 things into every coding file you create
//    - settings/page.js (Profile Hub)
//    - Created by AI (with User)
//    - This file renders the redesigned Profile screen featuring user data sourced dynamically from localStorage, replicating the Bookify app style.
//    - 2026-03-07 10:15 (Tashkent Time)

export default function ProfilePage() {
    const router = useRouter();
    const t = useTranslation();
    const [user, setUser] = useState({ name: 'Guest', phone: '+998 00 000 00 00', photo: '' });

    useEffect(() => {
        // Read dynamic user info passed by the Telegram Bot
        const savedName = localStorage.getItem('fs_user_name');
        const savedPhone = localStorage.getItem('fs_user_phone');
        const savedPhoto = localStorage.getItem('fs_user_photo');

        if (savedName || savedPhone || savedPhoto) {
            setUser({
                name: savedName || 'Telegram User',
                phone: savedPhone || 'Not provided',
                photo: savedPhoto || ''
            });
        }
    }, []);

    return (
        <div style={{ minHeight: '100vh', background: '#F8FAFC' }}>
            <div style={{ padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div onClick={() => router.back()} className="icon-btn" style={{ cursor: 'pointer' }}>{"<"}</div>
                <h2 style={{ fontSize: '18px', fontWeight: '600' }}>{t.profile.title}</h2>
                <div className="icon-btn" style={{ cursor: 'pointer' }}>⋮</div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '16px' }}>
                <div style={{ width: '90px', height: '90px', borderRadius: '50%', background: 'linear-gradient(135deg, #3B82F6, #60A5FA)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', color: '#fff', fontWeight: 'bold', boxShadow: '0 8px 20px rgba(59,130,246,0.3)', position: 'relative', overflow: 'visible' }}>
                    {user.photo ?
                        <img src={user.photo} style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} alt="Profile" />
                        : user.name.charAt(0).toUpperCase()}
                    <div style={{ position: 'absolute', bottom: 0, right: 0, background: '#fff', padding: '4px', borderRadius: '50%', border: '2px solid #F8FAFC', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px' }}>✏️</div>
                </div>
                <h2 style={{ fontSize: '22px', fontWeight: '700', marginTop: '16px' }}>{user.name}</h2>
                <p style={{ color: '#64748B', fontSize: '15px', marginTop: '4px' }}>{user.phone}</p>
            </div>

            <div style={{ padding: '0 24px', marginTop: '16px' }}>
                <div style={{ background: '#FEF2F2', border: '1px solid #FCA5A5', padding: '16px', borderRadius: '16px' }}>
                    <p style={{ fontSize: '13px', color: '#991B1B', lineHeight: '1.5', whiteSpace: 'pre-line' }}>
                        {t.profile.demoNote}
                    </p>
                </div>
            </div>

            <div style={{ padding: '0 24px', marginTop: '32px' }}>
                <div style={{ background: 'linear-gradient(135deg, #3B82F6, #2563EB)', borderRadius: '24px', padding: '24px', color: '#fff', position: 'relative', overflow: 'hidden', boxShadow: '0 10px 25px rgba(37,99,235,0.2)' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: '600', position: 'relative', zIndex: 2 }}>{t.profile.rewards}</h3>
                    <p style={{ fontSize: '12px', marginTop: '8px', opacity: 0.9, position: 'relative', zIndex: 2 }}>{t.profile.perks}</p>
                    <div style={{ position: 'absolute', right: -20, bottom: -20, fontSize: '120px', opacity: 0.1, zIndex: 1 }}>✈️</div>
                </div>
            </div>

            <div style={{ padding: '0 24px', marginTop: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px', background: '#FFFFFF', borderRadius: '20px', border: '1px solid #E2E8F0', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
                    <span style={{ color: '#64748B', fontWeight: '500' }}>{t.profile.credits}</span>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                        <span style={{ fontWeight: '700' }}>$ 00.0</span>
                        <span style={{ color: '#64748B' }}>➔</span>
                    </div>
                </div>
            </div>

            <div style={{ padding: '24px', paddingBottom: '100px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>{t.profile.paymentInfo}</h3>

                <div style={{ background: '#FFFFFF', borderRadius: '24px', border: '1px solid #E2E8F0', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', borderBottom: '1px solid #E2E8F0', cursor: 'pointer' }}>
                        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', color: '#64748B' }}>
                            <span>💳</span> <span style={{ fontWeight: '500' }}>{t.profile.rewardsWallet}</span>
                        </div>
                        <div style={{ color: '#64748B' }}>➔</div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', borderBottom: '1px solid #E2E8F0', cursor: 'pointer' }}>
                        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', color: '#64748B' }}>
                            <span>🏦</span> <span style={{ fontWeight: '500' }}>{t.profile.paymentMethods}</span>
                        </div>
                        <div style={{ color: '#64748B' }}>➔</div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', cursor: 'pointer' }}>
                        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', color: '#64748B' }}>
                            <span>🧾</span> <span style={{ fontWeight: '500' }}>{t.profile.transactions}</span>
                        </div>
                        <div style={{ color: '#64748B' }}>➔</div>
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
                <Link href="/settings" className="nav-item active">
                    <div className="nav-icon-bg">⚙️</div>
                    <span>{t.nav.profile}</span>
                </Link>
            </nav>
        </div>
    );
}
