import React from 'react';
import Link from 'next/link';

// 1. Add clear commenting with Emojis 📅
// 2. Add 3 things into every coding file you create
//    - booking/[id]/page.js (Booking Page Details)
//    - Created by AI (with User)
//    - This file renders the single property details view and allows the user to mock a booking.
//    - 2026-03-07 08:52 (Tashkent Time)

export default function BookingPage({ params }) {
    // Mock property data based on params.id
    return (
        <>
            <div className="property-image" style={{ backgroundImage: `url('/img/thumb_1470_600_0_0_0_auto.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '300px' }}>
                <Link href="/" style={{ position: 'absolute', top: 20, left: 20, background: 'rgba(0,0,0,0.5)', padding: '8px 16px', borderRadius: 20, color: 'white', backdropFilter: 'blur(5px)' }}>
                    ← Back
                </Link>
            </div>

            <div style={{ padding: '24px', paddingBottom: '100px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>Grand Retreat House</h1>
                    <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#3B82F6' }}>$200/night</span>
                </div>

                <div style={{ marginTop: '16px', display: 'flex', gap: '8px' }}>
                    <span style={{ background: '#232730', padding: '6px 12px', borderRadius: '8px', fontSize: '14px', color: '#94A3B8' }}>🏠 House</span>
                    <span style={{ background: '#232730', padding: '6px 12px', borderRadius: '8px', fontSize: '14px', color: '#94A3B8' }}>👥 8-10 guests</span>
                    <span style={{ background: '#232730', padding: '6px 12px', borderRadius: '8px', fontSize: '14px', color: '#94A3B8' }}>⭐ 4.9</span>
                </div>

                <div style={{ marginTop: '24px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>About Property</h3>
                    <p style={{ color: '#94A3B8', fontSize: '15px', lineHeight: '1.6' }}>
                        Perfect choice for large families or tourist groups up to 10 people. Fully equipped kitchen, multiple bathrooms, and a cozy atmosphere that makes you feel at home.
                    </p>
                </div>

                <div style={{ marginTop: '32px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Select Dates</h3>
                    <div style={{ display: 'flex', gap: '16px' }}>
                        <div style={{ flex: 1, background: '#1A1D24', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <p style={{ fontSize: '12px', color: '#94A3B8' }}>Check in</p>
                            <p style={{ fontSize: '16px', fontWeight: '500', marginTop: '4px' }}>Oct 15, 2026</p>
                        </div>
                        <div style={{ flex: 1, background: '#1A1D24', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <p style={{ fontSize: '12px', color: '#94A3B8' }}>Check out</p>
                            <p style={{ fontSize: '16px', fontWeight: '500', marginTop: '4px' }}>Oct 20, 2026</p>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ position: 'fixed', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', maxWidth: '480px', background: 'rgba(26,29,36,0.95)', padding: '20px', borderTop: '1px solid rgba(255,255,255,0.1)', zIndex: 100 }}>
                <button style={{ width: '100%', background: '#3B82F6', color: 'white', border: 'none', padding: '16px', borderRadius: '12px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 4px 12px rgba(59, 130, 246, 0.4)' }}>
                    Book Now - $1000 Total
                </button>
            </div>
        </>
    );
}
