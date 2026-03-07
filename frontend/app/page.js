import React from 'react';
import Link from 'next/link';

// 1. Add clear commenting with Emojis 🏠
// 2. Add 3 things into every coding file you create
//    - page.js (Main Landing Page for Property List)
//    - Created by AI (with User)
//    - This file renders the main discovery view where users can see available apartments and houses. It uses mock data to represent properties.
//    - 2026-03-07 08:50 (Tashkent Time)

const mockProperties = [
  {
    id: 1,
    title: 'Family Apartment Oasis',
    type: 'Apartment',
    capacity: '6-8',
    price: '$120',
    image: '/img/thumb_1116_600_0_0_0_auto.jpg',
    rating: 4.8
  },
  {
    id: 2,
    title: 'Grand Retreat House',
    type: 'House',
    capacity: '8-10',
    price: '$200',
    image: '/img/thumb_1470_600_0_0_0_auto.jpg',
    rating: 4.9
  },
  {
    id: 3,
    title: 'Nature View Villa',
    type: 'House',
    capacity: '10-12',
    price: '$250',
    image: '/img/thumb_3960_600_0_0_0_auto.jpg',
    rating: 5.0
  }
];

export default function HomePage() {
  return (
    <>
      <header className="header">
        <div className="header-title">
          <h1>Family Stay</h1>
          <p>Find your perfect space 🌟</p>
        </div>
        <div className="header-avatar" style={{ width: 40, height: 40, borderRadius: '50%', background: 'linear-gradient(135deg, #3B82F6, #2563EB)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, color: '#fff', fontWeight: 600 }}>
          M
        </div>
      </header>

      <main className="property-list">
        {mockProperties.map((prop, idx) => (
          <Link href={`/booking/${prop.id}`} key={prop.id} className="property-card" style={{ animationDelay: `${idx * 0.1}s`, display: 'block', textDecoration: 'none' }}>
            <div className="property-image" style={{ backgroundImage: `url('${prop.image}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <span className="property-tag">{prop.type}</span>
            </div>

            <div className="property-details">
              <h3 className="property-title">{prop.title}</h3>
              <div className="property-info">
                <span className="property-info-item">
                  👥 {prop.capacity} guests
                </span>
                <span className="property-info-item" style={{ marginLeft: 'auto', color: '#FCD34D' }}>
                  ⭐ {prop.rating}
                </span>
              </div>
              <div className="property-price">
                <span className="price-amount">{prop.price}</span>
                <span className="price-period">/ night</span>
              </div>
            </div>
          </Link>
        ))}
      </main>

      <nav className="bottom-nav">
        <Link href="/" className="nav-item active">
          <span>🏠</span>
          Discover
        </Link>
        <div className="nav-item">
          <span>❤️</span>
          Saved
        </div>
        <Link href="/settings" className="nav-item">
          <span>⚙️</span>
          Settings
        </Link>
      </nav>
    </>
  );
}
