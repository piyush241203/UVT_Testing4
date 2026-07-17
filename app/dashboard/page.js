'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DashboardPage;
const components_1 = require("../components");
function DashboardPage() {
    return (<div style={{ padding: '24px' }}>
      <h2 style={{ color: '#e05d44' }}>Dashboard — v2</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', marginBottom: '24px' }}>
        {[{ label: 'Builds', value: '182' }, { label: 'Passed', value: '177' }, { label: 'Failed', value: '5' }, { label: 'Snapshots', value: '9,840' }].map(m => (<div key={m.label} style={{ padding: '14px', background: '#fff7ed', borderRadius: '10px', textAlign: 'center', border: '1px solid #fed7aa' }}>
            <div style={{ fontSize: '24px', fontWeight: 700, color: '#e05d44' }}>{m.value}</div>
            <div style={{ color: '#666', fontSize: '13px' }}>{m.label}</div>
          </div>))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
        <div style={{ padding: '16px', border: '1px solid #eee', borderRadius: '8px' }}>
          <h4 style={{ margin: '0 0 8px' }}>Live Clock</h4>
          <components_1.LiveClock />
        </div>
        <div style={{ padding: '16px', border: '1px solid #eee', borderRadius: '8px' }}>
          <h4 style={{ margin: '0 0 8px' }}>Deploy Countdown</h4>
          <components_1.CountdownTimer seconds={900}/>
        </div>
      </div>
      <components_1.ProgressBar value={97}/>
      <div style={{ marginTop: '16px' }}>
        <components_1.DynamicTokens />
      </div>
      <components_1.CanvasAnimation />
    </div>);
}
//# sourceMappingURL=page.js.map