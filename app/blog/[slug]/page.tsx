'use client';
import Link from 'next/link';
import { RelativeTime, DynamicTokens, SkeletonLoader } from '../../components';

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  return (
    <div style={{ padding: '24px' }}>
      <Link href="/blog">← Back to Blog</Link>
      <h2>Blog Post: {params.slug}</h2>
      <p>Published: <RelativeTime base="2025-07-01" /></p>
      <p>This is a detailed blog article about {params.slug}. It contains both static and dynamic content to validate UVT stabilization.</p>
      <DynamicTokens />
      <SkeletonLoader />
    </div>
  );
}
