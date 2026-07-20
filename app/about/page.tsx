'use client';
import { RandomAvatar, DynamicTokens, RelativeTime } from '../components';

export default function AboutPage() {
  const gradients = [
    'linear-gradient(135deg,#064e3b,#065f46)',
    'linear-gradient(135deg,#1e1b4b,#312e81)',
    'linear-gradient(135deg,#0c4a6e,#075985)',
  ];
  const seeds = ['alice-about', 'bob-about', 'carol-about'];
  const tags = ['Percy Integrated', 'Zero Config', 'App Router', 'Selective Testing'];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Hero Banner */}
      <div style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0ea5e9 100%)',
        borderRadius: '20px', padding: '40px 32px', color: '#fff',
        boxShadow: '0 8px 32px rgba(14,165,233,0.35)',
      }}>
        <h1 style={{ margin: '0 0 10px', fontSize: '2rem', fontWeight: 900, letterSpacing: '-1px' }}>🧪 About UVT Platform v4.1 — New Percy Token Git CI Test ✅</h1>



        <p style={{ margin: '0 0 20px', fontSize: '1.05rem', opacity: 0.85 }}>
          Universal Visual Testing — zero-config visual regression for any framework. Powered by Percy + Playwright.
        </p>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {tags.map(tag => (
            <span key={tag} style={{
              background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)',
              borderRadius: '20px', padding: '6px 16px', fontSize: '12px', fontWeight: 600,
              border: '1px solid rgba(255,255,255,0.3)'
            }}>{tag}</span>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div>
        <h2 style={{ color: '#0ea5e9', fontSize: '1.1rem', fontWeight: 700, marginBottom: '12px' }}>👥 Team</h2>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          {seeds.map((seed, i) => (
            <div key={seed} style={{
              display: 'flex', alignItems: 'center', gap: '12px',
              background: gradients[i], borderRadius: '14px', padding: '14px 20px',
              color: '#fff', boxShadow: '0 4px 16px rgba(0,0,0,0.2)', minWidth: '160px',
            }}>
              <RandomAvatar seed={seed} />
              <div>
                <div style={{ fontWeight: 700, textTransform: 'capitalize' }}>{seed.split('-')[0]}</div>
                <div style={{ fontSize: '11px', opacity: 0.7 }}>UVT Team</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Meta */}
      <div style={{
        background: 'linear-gradient(135deg,#1e1b4b,#312e81)', borderRadius: '14px',
        padding: '20px 24px', color: '#fff',
      }}>
        <p style={{ margin: '0 0 12px' }}>Founded <RelativeTime base="2024-01-01" /> · Built for developer experience.</p>
        <DynamicTokens />
      </div>
    </div>
  );
}
