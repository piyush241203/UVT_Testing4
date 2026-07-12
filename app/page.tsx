'use client';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="text-center py-20 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-3xl shadow-2xl">
        <h2 className="text-5xl font-black mb-4 tracking-tighter">Welcome to RC-02.1 No Newline</h2>
        <p className="text-xl opacity-90 font-medium">Percy tokens updated cleanly.</p>
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
