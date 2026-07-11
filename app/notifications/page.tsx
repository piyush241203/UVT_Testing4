'use client';
import { RelativeTime } from '../components';
export default function NotificationsPage() {
  const items = [
    { id: 1, type: 'success', msg: 'Build #1842 passed — all snapshots approved.' },
    { id: 2, type: 'warning', msg: '3 dynamic elements detected on /dashboard.' },
    { id: 3, type: 'info', msg: 'New team member Carol joined the workspace.' },
    { id: 4, type: 'error', msg: 'Build #1839 failed — 2 visual differences found.' },
  ];
  const color: Record<string, string> = { success: '#d4edda', warning: '#fff3cd', info: '#cce5ff', error: '#f8d7da' };
  return (
    <div style={{ padding: '24px' }}>
      <h2>Notifications</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {items.map(n => (
          <div key={n.id} style={{ padding: '12px 16px', borderRadius: '8px', background: color[n.type] }}>
            <strong style={{ textTransform: 'uppercase', fontSize: '11px' }}>{n.type}</strong>
            <p style={{ margin: '4px 0 0' }}>{n.msg}</p>
            <small><RelativeTime base={new Date(Date.now() - n.id * 300000).toISOString()} /></small>
          </div>
        ))}
      </div>
    </div>
  );
}
