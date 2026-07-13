'use client';
import { RandomAvatar, DynamicTokens, RelativeTime } from '../components';
export default function AboutPage() {
  return (
    <div style={{ padding: '24px' }}>
      <h2>🌟 About UVT Platform</h2>
      <p>The Universal Visual Testing platform — zero-config visual regression for any framework, any provider.</p>
      <p style={{ fontStyle: 'italic', color: '#666' }}>Tested on GitHub Actions with custom dynamic data masking.</p>
      <div style={{ display: 'flex', gap: '16px', marginTop: '16px', flexWrap: 'wrap' }}>
        {['alice-about', 'bob-about', 'carol-about'].map(seed => (
          <div key={seed} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <RandomAvatar seed={seed} />
            <span>{seed.split('-')[0]}</span>
          </div>
        ))}
      </div>
      <p style={{ marginTop: '16px' }}>Founded <RelativeTime base="2024-01-01" /> · Built for developer experience.</p>
      <DynamicTokens />
    </div>
  );
}
