'use client';
import Link from 'next/link';
export default function ProductsPage() {
  return (
    <div style={{ padding: '24px' }}>
      <h2>Products</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
        {[1, 2, 3, 4].map(id => (
          <div key={id} style={{ padding: '16px', border: '1px solid #eee', borderRadius: '10px' }}>
            <h3 style={{ marginTop: 0 }}>Product {id}</h3>
            <p style={{ color: '#666' }}>Premium visual testing addon #{id}</p>
            <Link href={`/products/${id}`}>View Details →</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
