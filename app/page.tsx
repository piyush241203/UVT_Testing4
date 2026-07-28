'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// =====================================================
// ADVERTISEMENT SUITE — TCSE/ADE Certification Scenarios
// Uses TCSE-detectable: IAB sizes, CSS classes, ARIA labels
// =====================================================

function LeaderboardBanner() {
  return (
    <div className="ad-banner" aria-label="Advertisement" role="complementary"
      style={{ width: '100%', maxWidth: '728px', height: '90px', background: 'linear-gradient(135deg, #f0fdf4, #dcfce7)', border: '1px solid #86efac', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', margin: '0 auto 4px', boxSizing: 'border-box', gap: '12px' }}>
      <span style={{ fontWeight: 700, color: '#166534', fontSize: '14px' }}>🛒 Black Friday Sale — Up to 60% Off Premium SaaS</span>
      <span style={{ background: '#064e3b', color: '#4ade80', fontSize: '10px', padding: '3px 8px', borderRadius: '12px' }}>Sponsored</span>
      <button style={{ padding: '8px 16px', background: '#16a34a', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 600, cursor: 'pointer', fontSize: '12px' }}>Shop Now</button>
    </div>
  );
}

function SidebarMediumRectangle() {
  return (
    <div className="sidebar-ad ad-unit" aria-label="Advertisement"
      style={{ width: '300px', height: '250px', background: 'linear-gradient(160deg, #eff6ff, #dbeafe)', border: '1px solid #93c5fd', borderRadius: '10px', padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box', flexShrink: 0 }}>
      <div>
        <div style={{ fontSize: '9px', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>Sponsored</div>
        <div style={{ fontWeight: 800, fontSize: '17px', color: '#1e40af', marginBottom: '6px' }}>Vercel Pro</div>
        <div style={{ fontSize: '13px', color: '#374151', lineHeight: 1.4 }}>Deploy Next.js apps instantly. Zero config. Global CDN.</div>
      </div>
      <div style={{ background: '#2563eb', color: '#fff', padding: '10px', borderRadius: '6px', textAlign: 'center', fontWeight: 600, cursor: 'pointer', fontSize: '13px' }}>Start Free →</div>
    </div>
  );
}

function SponsoredBlogCard({ title, source }: { title: string; source: string }) {
  return (
    <div className="sponsored-content" aria-label="Sponsored article"
      style={{ border: '1px solid #e5e7eb', borderRadius: '10px', padding: '14px', background: '#fff', boxShadow: '0 2px 6px rgba(0,0,0,0.05)' }}>
      <div style={{ fontSize: '9px', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>Sponsored · {source}</div>
      <div style={{ fontWeight: 700, color: '#111827', fontSize: '14px', marginBottom: '6px' }}>{title}</div>
      <span style={{ fontSize: '12px', color: '#2563eb', fontWeight: 600 }}>Read More →</span>
    </div>
  );
}

function CookieConsentBanner() {
  const [shown, setShown] = useState(true);
  if (!shown) return null;
  return (
    <div id="cookie-consent" className="cookie-banner"
      style={{ position: 'fixed', bottom: 0, left: 0, right: 0, background: '#1f2937', color: '#f9fafb', padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', zIndex: 9999, gap: '16px', flexWrap: 'wrap' }}>
      <p style={{ margin: 0, fontSize: '13px' }}>🍪 We use cookies to personalize your experience and show relevant ads. <strong>Cookie Policy</strong></p>
      <div style={{ display: 'flex', gap: '8px' }}>
        <button onClick={() => setShown(false)} style={{ padding: '7px 16px', background: '#10b981', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 600, fontSize: '12px' }}>Accept</button>
        <button onClick={() => setShown(false)} style={{ padding: '7px 16px', background: 'transparent', color: '#9ca3af', border: '1px solid #4b5563', borderRadius: '6px', cursor: 'pointer', fontSize: '12px' }}>Decline</button>
      </div>
    </div>
  );
}

function FloatingChatWidget() {
  const [open, setOpen] = useState(false);
  return (
    <div className="chat-widget" style={{ position: 'fixed', bottom: '80px', right: '20px', zIndex: 9998 }}>
      {open && (
        <div style={{ width: '260px', height: '300px', background: '#fff', borderRadius: '12px', boxShadow: '0 8px 32px rgba(0,0,0,0.15)', padding: '14px', marginBottom: '8px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ fontWeight: 700, fontSize: '13px' }}>💬 Need Help?</div>
          <div style={{ flex: 1, background: '#f9fafb', borderRadius: '8px', padding: '8px', fontSize: '12px', color: '#6b7280' }}>Hi there! How can we help you today?</div>
          <input placeholder="Reply..." style={{ padding: '6px', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '12px' }} />
        </div>
      )}
      <button id="chat-button" onClick={() => setOpen(o => !o)} style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#2563eb', color: '#fff', border: 'none', fontSize: '20px', cursor: 'pointer', display: 'block', marginLeft: 'auto', boxShadow: '0 4px 12px rgba(37,99,235,0.4)' }}>💬</button>
    </div>
  );
}

function NewsletterPopupNext() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 4000);
    return () => clearTimeout(t);
  }, []);
  if (!visible) return null;
  return (
    <div className="newsletter-popup" role="dialog"
      style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', background: '#fff', borderRadius: '16px', padding: '28px', width: '360px', boxShadow: '0 20px 60px rgba(0,0,0,0.2)', zIndex: 10000 }}>
      <button onClick={() => setVisible(false)} style={{ position: 'absolute', top: '10px', right: '12px', background: 'none', border: 'none', fontSize: '18px', cursor: 'pointer', color: '#9ca3af' }}>✕</button>
      <h3 style={{ margin: '0 0 8px', fontSize: '20px', fontWeight: 800 }}>🎁 Get 3 Months Free</h3>
      <p style={{ margin: '0 0 14px', color: '#6b7280', fontSize: '13px' }}>Join 50,000 developers. Get Next.js tips, deals, and tutorials.</p>
      <input placeholder="your@email.com" style={{ width: '100%', padding: '9px 12px', border: '1px solid #e5e7eb', borderRadius: '7px', fontSize: '13px', marginBottom: '10px', boxSizing: 'border-box' }} />
      <button style={{ width: '100%', padding: '10px', background: '#4f46e5', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 700, cursor: 'pointer', fontSize: '14px' }}>Subscribe →</button>
    </div>
  );
}

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px' }}>
      {/* TCSE: Google AdSense style leaderboard */}
      <LeaderboardBanner />

      {/* Main content + sidebar layout */}
      <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '24px' }}>

          {/* Hero Banner */}
          <section style={{
            textAlign: 'center', padding: '52px 32px',
            background: 'linear-gradient(135deg, #0f172a 0%, #4f46e5 50%, #7c3aed 100%)',
            color: '#fff', borderRadius: '20px', boxShadow: '0 12px 48px rgba(79,70,229,0.5)',
          }}>
            <h1 style={{ fontSize: '2.6rem', fontWeight: 900, margin: '0 0 12px', letterSpacing: '-2px' }}>
              🚀 UVT Next.js Demo v5.1 — Certified ✨
            </h1>
            <p style={{ fontSize: '1.1rem', margin: '0 0 20px', opacity: 0.85 }}>
              Percy visual regression testing — 20 routes auto-discovered
            </p>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
              {['✨ Certified v5.1', '✅ Percy Integrated', '⚡ Selective Testing', '🎯 20 Routes'].map(tag => (
                <span key={tag} style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', borderRadius: '20px', padding: '7px 16px', fontSize: '12px', fontWeight: 600, border: '1px solid rgba(255,255,255,0.3)' }}>{tag}</span>
              ))}
            </div>
          </section>

          {/* TCSE: Sponsored Blog Cards */}
          <div>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#4f46e5', marginBottom: '12px' }}>📰 Sponsored Articles</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
              <SponsoredBlogCard title="10 Next.js Performance Tips You Must Know" source="Vercel Blog" />
              <SponsoredBlogCard title="Why Developers Choose Cloudflare for Edge Deploy" source="Cloudflare" />
            </div>
          </div>

          {/* Navigation Grid */}
          <div>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#4f46e5', marginBottom: '16px' }}>📄 All Pages</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '12px' }}>
              {[
                ['/about', 'About', '#4f46e5'],
                ['/blog', 'Blog', '#0ea5e9'],
                ['/pricing', 'Pricing', '#10b981'],
                ['/faq', 'FAQ', '#f59e0b'],
                ['/team', 'Team', '#ef4444'],
                ['/careers', 'Careers', '#8b5cf6'],
                ['/contact', 'Contact', '#06b6d4'],
                ['/dashboard', 'Dashboard', '#6366f1'],
                ['/products', 'Products', '#ec4899'],
                ['/analytics', 'Analytics', '#14b8a6'],
                ['/orders', 'Orders', '#f97316'],
                ['/notifications', 'Notifications', '#a855f7'],
                ['/admin', 'Admin', '#dc2626'],
                ['/search', 'Search', '#2563eb'],
              ].map(([href, label, color]) => (
                <Link key={href} href={href} style={{
                  padding: '14px 16px', background: color, color: '#fff',
                  textDecoration: 'none', borderRadius: '12px', fontWeight: 600,
                  fontSize: '14px', display: 'block', textAlign: 'center',
                  boxShadow: `0 4px 12px ${color}66`,
                }}>{label}</Link>
              ))}
            </div>
          </div>

        </div>

        {/* TCSE: Sidebar Ads */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <SidebarMediumRectangle />
          <div className="ad-slot" aria-label="Sponsored Advertisement"
            style={{ width: '160px', background: 'linear-gradient(180deg, #faf5ff, #ede9fe)', border: '1px solid #c4b5fd', borderRadius: '8px', padding: '14px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ fontSize: '9px', color: '#9ca3af', textTransform: 'uppercase' }}>Advertisement</div>
            <div style={{ fontWeight: 700, fontSize: '13px', color: '#6d28d9', textAlign: 'center' }}>DevTools Pro</div>
            {['Debug', 'Profile', 'Optimize'].map(t => (
              <div key={t} style={{ background: '#7c3aed', color: '#fff', borderRadius: '5px', padding: '7px', textAlign: 'center', fontSize: '11px', fontWeight: 600 }}>{t}</div>
            ))}
          </div>
        </div>
      </div>

      {/* TCSE: Global widgets */}
      <CookieConsentBanner />
      <FloatingChatWidget />
      <NewsletterPopupNext />
    </div>
  );
}

/* ui change v4 - TCSE/ADE certification ads added */