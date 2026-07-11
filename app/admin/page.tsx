'use client';
import { DynamicTokens, SkeletonLoader } from '../components';
export default function AdminPage() {
  return (
    <div style={{ padding: '24px' }}>
      <h2>Admin Panel</h2>
      <p>Protected workspace — administrative controls and audit tooling.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '16px' }}>
        {['Users', 'API Tokens', 'Webhooks', 'Audit Logs'].map(section => (
          <div key={section} style={{ padding: '16px', border: '1px solid #eee', borderRadius: '8px' }}>
            <h4 style={{ margin: '0 0 8px' }}>{section}</h4>
            <SkeletonLoader />
          </div>
        ))}
      </div>
      <DynamicTokens />
    </div>
  );
}
