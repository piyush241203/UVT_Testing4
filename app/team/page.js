'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TeamPage;
const components_1 = require("../components");
const members = [
    { name: 'Alice Chen', role: 'Lead Engineer', seed: 'alice-next-rc02' },
    { name: 'Bob Okafor', role: 'DSE Architect', seed: 'bob-next-rc02' },
    { name: 'Carol Smith', role: 'SDK Developer', seed: 'carol-next-rc02' },
    { name: 'David Kim', role: 'QA Engineer', seed: 'david-next-rc02' },
];
function TeamPage() {
    return (<div style={{ padding: '24px' }}>
      <h2>Team</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
        {members.map(m => (<div key={m.name} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px', border: '1px solid #eee', borderRadius: '8px' }}>
            <components_1.RandomAvatar seed={m.seed}/>
            <div>
              <div style={{ fontWeight: 600 }}>{m.name}</div>
              <div style={{ color: '#666', fontSize: '13px' }}>{m.role}</div>
            </div>
          </div>))}
      </div>
    </div>);
}
//# sourceMappingURL=page.js.map