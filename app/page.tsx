'use client';
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {/* Hero Banner */}
      <section style={{
        textAlign: 'center',
        padding: '60px 32px',
        background: 'linear-gradient(135deg, #0f172a 0%, #4f46e5 50%, #7c3aed 100%)',
        color: '#fff',
        borderRadius: '24px',
        boxShadow: '0 12px 48px rgba(79,70,229,0.5)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '-40px', right: '-40px',
          width: '200px', height: '200px',
          background: 'rgba(167,139,250,0.2)', borderRadius: '50%'
        }} />
        <h1 style={{ fontSize: '3rem', fontWeight: 900, margin: '0 0 12px', letterSpacing: '-2px' }}>
          🚀 UVT Next.js Demo v3
        </h1>
        <p style={{ fontSize: '1.2rem', margin: '0 0 24px', opacity: 0.85 }}>
          Percy visual regression testing — 20 routes auto-discovered
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <span style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', borderRadius: '20px', padding: '8px 18px', fontSize: '13px', fontWeight: 600, border: '1px solid rgba(255,255,255,0.3)' }}>✅ Percy Integrated</span>
          <span style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', borderRadius: '20px', padding: '8px 18px', fontSize: '13px', fontWeight: 600, border: '1px solid rgba(255,255,255,0.3)' }}>⚡ Selective Testing</span>
          <span style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', borderRadius: '20px', padding: '8px 18px', fontSize: '13px', fontWeight: 600, border: '1px solid rgba(255,255,255,0.3)' }}>🎯 20 Routes Covered</span>
          <span style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', borderRadius: '20px', padding: '8px 18px', fontSize: '13px', fontWeight: 600, border: '1px solid rgba(255,255,255,0.3)' }}>🔍 App Router</span>
        </div>
      </section>

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
              padding: '14px 16px',
              background: color,
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '12px',
              fontWeight: 600,
              fontSize: '14px',
              display: 'block',
              textAlign: 'center',
              boxShadow: `0 4px 12px ${color}66`,
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}>{label}</Link>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ui change v3 - percy exec integration */