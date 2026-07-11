'use client';
import { useState } from 'react';
import Link from 'next/link';
export default function SearchPage() {
  const [query, setQuery] = useState('');
  const allPages = ['Dashboard', 'Blog', 'Pricing', 'FAQ', 'Team', 'Careers', 'Analytics', 'Orders', 'Notifications', 'Admin', 'Products'];
  const results = query.length >= 2 ? allPages.filter(p => p.toLowerCase().includes(query.toLowerCase())) : [];
  return (
    <div style={{ padding: '24px' }}>
      <h2>Search</h2>
      <input
        type="text" value={query} onChange={e => setQuery(e.target.value)}
        placeholder="Search pages…"
        style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '16px', marginBottom: '12px' }}
      />
      {results.length > 0 ? (
        <ul>
          {results.map(r => <li key={r}><Link href={`/${r.toLowerCase()}`}>{r}</Link></li>)}
        </ul>
      ) : query.length >= 2 ? (
        <p>No results for &ldquo;<strong>{query}</strong>&rdquo;</p>
      ) : null}
    </div>
  );
}
