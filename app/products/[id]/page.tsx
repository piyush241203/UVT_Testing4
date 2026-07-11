'use client';
import Link from 'next/link';
import { RelativeTime, DynamicTokens } from '../../components';
export default function ProductDetailPage({ params }: { params: { id: string } }) {
  return (
    <div style={{ padding: '24px' }}>
      <Link href="/products">← Products</Link>
      <h2>Product #{params.id}</h2>
      <p>Last updated: <RelativeTime base="2025-07-01" /></p>
      <DynamicTokens />
    </div>
  );
}
