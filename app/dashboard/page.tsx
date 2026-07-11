'use client';
import { LiveClock, CountdownTimer, DynamicTokens, CanvasAnimation, ProgressBar, RelativeTime } from '../components';

export default function DashboardPage() {
  return (
    <div style={{ padding: '24px' }}>
      <h2>Dashboard</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '32px' }}>
        {[{ label: 'Builds', value: '182' }, { label: 'Passed', value: '177' }, { label: 'Failed', value: '5' }, { label: 'Snapshots', value: '9,840' }].map(m => (
          <div key={m.label} style={{ padding: '20px', background: '#eef2ff', border: '1px solid #d0d7ff', borderRadius: '12px', textAlign: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
            <div style={{ fontSize: '28px', fontWeight: 800, color: '#4f46e5' }}>{m.value}</div>
            <div style={{ color: '#4b5563', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{m.label}</div>
          </div>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
        <div style={{ padding: '16px', border: '1px solid #eee', borderRadius: '8px' }}>
          <h4 style={{ margin: '0 0 8px' }}>Live Clock</h4>
          <LiveClock />
        </div>
        <div style={{ padding: '16px', border: '1px solid #eee', borderRadius: '8px' }}>
          <h4 style={{ margin: '0 0 8px' }}>Deploy Countdown</h4>
          <CountdownTimer seconds={900} />
        </div>
      </div>
      <ProgressBar value={97} />
      <div style={{ marginTop: '16px' }}>
        <DynamicTokens />
      </div>
      <CanvasAnimation />
    </div>
  );
}
