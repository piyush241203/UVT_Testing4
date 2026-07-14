'use client';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="text-center py-20 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-3xl shadow-2xl">
        <h2 className="text-6xl font-black mb-4 tracking-tighter">🌸 Welcome to UVT RC-04 Live Pipeline</h2>
        <p className="text-2xl opacity-90 font-bold">URAE Validation complete.</p>
      </section>
      <nav style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', marginTop: '24px' }}>
        {[
          ['/about', 'About'],
          ['/blog', 'Blog'],
          ['/pricing', 'Pricing'],
          ['/faq', 'FAQ'],
          ['/team', 'Team'],
          ['/careers', 'Careers'],
          ['/contact', 'Contact'],
          ['/dashboard', 'Dashboard'],
          ['/products', 'Products'],
          ['/analytics', 'Analytics'],
          ['/orders', 'Orders'],
          ['/notifications', 'Notifications'],
          ['/admin', 'Admin'],
          ['/search', 'Search'],
        ].map(([href, label]) => (
          <Link key={href} href={href} style={{
            padding: '8px 20px', background: '#646cff', color: '#fff',
            textDecoration: 'none', borderRadius: '6px', fontWeight: 500
          }}>{label}</Link>
        ))}
      </nav>
    </div>
  );
}

/* ui change 3 */