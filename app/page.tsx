'use client';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="text-center py-24 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-2xl shadow-xl">
        <h2 className="text-6xl font-extrabold mb-6 tracking-tight">Welcome to RC-02.1 Validation</h2>
        <p className="text-2xl opacity-95">Validating new Percy tokens and GHA Auth Check.</p>
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
