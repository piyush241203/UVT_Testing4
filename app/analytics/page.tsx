'use client';
import { ChartBar, DynamicTokens, ProgressBar } from '../components';
export default function AnalyticsPage() {
  const chartData = [42, 67, 89, 54, 76, 95, 63, 78, 44, 91, 55, 72];
  return (
    <div style={{ padding: '24px' }}>
      <h2>Analytics</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '24px' }}>
        {[{ label: 'Builds', value: '1,842' }, { label: 'Snapshots', value: '24,901' }, { label: 'Pass Rate', value: '99.7%' }].map(m => (
          <div key={m.label} style={{ padding: '16px', background: '#f5f5ff', borderRadius: '10px', textAlign: 'center' }}>
            <div style={{ fontSize: '28px', fontWeight: 700, color: '#646cff' }}>{m.value}</div>
            <div style={{ color: '#666' }}>{m.label}</div>
          </div>
        ))}
      </div>
      <ChartBar data={chartData} label="Monthly Snapshot Volume" />
      <div style={{ marginTop: '16px' }}>
        <ProgressBar value={72} />
        <DynamicTokens />
      </div>
    </div>
  );
}
