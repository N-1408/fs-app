'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

// 1. Add clear commenting with Emojis 🏠
// 2. Add 3 things into every coding file you create
//    - page.js (Home Screen - Bookify Style)
//    - Created by AI (with User)
//    - This file renders the redesigned light theme home screen with horizontal scrolling deals, categories, and property matches.
//    - 2026-03-07 09:55 (Tashkent Time)
// 3. ✨ Change log:
//    - 2026-03-07 09:55 (Tashkent Time) - Integrated real Telegram profile photo and valid Bottom Nav links.

const mockDeals = [
  { id: 1, title: 'Deals for Kuala Lumpur', sub: '19 - 20 Jun, 2 adults', bg: 'var(--accent-color)' },
  { id: 2, title: 'Summer in Tashkent', sub: 'July Offers', bg: '#4ade80' }
];

const mockExplore = [
  { id: 1, title: 'Tower Bridge Suite', img: '/img/thumb_3960_600_0_0_0_auto.jpg' },
  { id: 2, title: 'Nature Resorts', img: '/img/thumb_1470_600_0_0_0_auto.jpg' },
  { id: 3, title: 'Family Villas', img: '/img/thumb_1116_600_0_0_0_auto.jpg' }
];

const mockProperties = [
  {
    id: 1,
    title: 'Luxury Hotel & Vacation Suites',
    loc: 'The Ritz London, Piccadilly',
    price: '$450',
    image: '/img/thumb_3993_600_0_0_0_auto.jpg',
    rating: 4.9
  },
  {
    id: 2,
    title: 'Grand Retreat House',
    loc: 'Tashkent City Center',
    price: '$200',
    image: '/img/thumb_4026_600_0_0_0_auto.jpg',
    rating: 5.0
  }
];

export default function HomePage() {
  const [userPhoto, setUserPhoto] = useState('/img/d.png'); // Fallback

  useEffect(() => {
    const photo = localStorage.getItem('fs_user_photo');
    if (photo) {
      setUserPhoto(photo);
    }
  }, []);

  return (
    <>
      <header className="header">
        <div className="header-title">
          <h1>Bookify</h1>
        </div>
        <div className="header-icons">
          <div className="icon-btn">🔔</div>
          <div className="icon-btn" style={{ overflow: 'hidden' }}>
            <img src={userPhoto} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Profile" />
          </div>
        </div>
      </header>

      <div className="search-container">
        <div className="search-input">
          <span>🔍</span>
          <input type="text" placeholder="Search here..." />
        </div>
        <div className="icon-btn">⚙️</div>
      </div>

      <div className="categories-scroll">
        <div className="category-pill active">🛏️ Stays</div>
        <div className="category-pill">✈️ Flights</div>
        <div className="category-pill">🚗 Cars</div>
        <div className="category-pill">🏛️ Attractions</div>
      </div>

      <div className="horizontal-scroll" style={{ marginTop: '16px' }}>
        {mockDeals.map(deal => (
          <div key={deal.id} className="featured-card" style={{ background: deal.bg }}>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold' }}>{deal.title}</h3>
            <p style={{ fontSize: '13px', marginTop: '8px', opacity: 0.9 }}>{deal.sub}</p>
            <div className="featured-btn">See deals</div>
          </div>
        ))}
      </div>

      <h2 className="section-title">Explore more, save more</h2>
      <div className="horizontal-scroll">
        {mockExplore.map(item => (
          <div key={item.id} className="explore-card" style={{ backgroundImage: `url('${item.img}')` }}>
            <div className="explore-card-title">{item.title}</div>
            <div style={{ position: 'absolute', top: 12, right: 12, color: 'white' }}>♡</div>
          </div>
        ))}
      </div>

      <h2 className="section-title">Need ideas ➔</h2>
      <div className="horizontal-scroll">
        {mockExplore.slice(1).map(item => (
          <div key={item.id} className="explore-card" style={{ backgroundImage: `url('${item.img}')`, minWidth: '140px', height: '160px' }}>
            <div className="hotel-rating" style={{ top: 8, left: 8, padding: '2px 6px', fontSize: 10 }}>⭐ 5.0</div>
            <div style={{ position: 'absolute', bottom: 12, left: 12, color: 'white', fontWeight: 600, fontSize: 12, textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}>
              📍 {item.title}
            </div>
          </div>
        ))}
      </div>

      <h2 className="section-title">Weekend Special Offers</h2>
      <div className="standard-list">
        {mockProperties.map(prop => (
          <Link href={`/booking/${prop.id}`} key={prop.id} className="hotel-card">
            <div className="hotel-img" style={{ backgroundImage: `url('${prop.image}')` }}>
              <div className="hotel-rating">⭐ {prop.rating}</div>
            </div>
            <div className="hotel-info">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <h3 className="hotel-name">{prop.title}</h3>
                <span style={{ color: '#64748B' }}>♡</span>
              </div>
              <p className="hotel-loc">📍 {prop.loc}</p>
              <div className="hotel-price">
                <strong>{prop.price}</strong> <span style={{ color: '#64748B' }}>night</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <nav className="bottom-nav">
        <Link href="/" className="nav-item active">
          <div className="nav-icon-bg">🏠</div>
          <span>Home</span>
        </Link>
        <Link href="/saved" className="nav-item">
          <div>♡</div>
          <span>Saved</span>
        </Link>
        <Link href="/trips" className="nav-item">
          <div>🧳</div>
          <span>Trips</span>
        </Link>
        <Link href="/settings" className="nav-item">
          <div>⚙️</div>
          <span>Profile</span>
        </Link>
      </nav>
    </>
  );
}
