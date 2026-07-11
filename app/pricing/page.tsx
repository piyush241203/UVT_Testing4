'use client';
export default function PricingPage() {
  const plans = [
    { name: 'Starter', price: '$0', features: ['3 projects', '1,000 snapshots/mo', 'Community support'] },
    { name: 'Pro', price: '$49/mo', features: ['Unlimited projects', '50,000 snapshots/mo', 'Priority support'] },
    { name: 'Enterprise', price: 'Custom', features: ['SLA', 'SSO', 'Dedicated onboarding'] },
  ];
  return (
    <div style={{ padding: '24px' }}>
      <h2>Pricing</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
        {plans.map(p => (
          <div key={p.name} style={{ padding: '24px', border: '2px solid #eee', borderRadius: '12px', textAlign: 'center' }}>
            <h3 style={{ marginTop: 0 }}>{p.name}</h3>
            <div style={{ fontSize: '28px', fontWeight: 700, color: '#646cff', marginBottom: '16px' }}>{p.price}</div>
            <ul style={{ textAlign: 'left', paddingLeft: '20px' }}>
              {p.features.map(f => <li key={f}>{f}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
