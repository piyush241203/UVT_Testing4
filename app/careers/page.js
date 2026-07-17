'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CareersPage;
function CareersPage() {
    const jobs = ['Senior Frontend Engineer', 'Visual Testing Advocate', 'SDK Integrations Engineer', 'DevRel Manager'];
    return (<div style={{ padding: '24px' }}>
      <h2>Careers</h2>
      <p>Join our distributed team. We are hiring across all time zones.</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {jobs.map(j => (<div key={j} style={{ padding: '16px', border: '1px solid #eee', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontWeight: 500 }}>{j}</span>
            <button style={{ padding: '6px 16px', background: '#646cff', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Apply</button>
          </div>))}
      </div>
    </div>);
}
//# sourceMappingURL=page.js.map