'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FAQPage;
const react_1 = require("react");
function FAQPage() {
    const [open, setOpen] = (0, react_1.useState)(null);
    const items = [
        { q: 'What is UVT?', a: 'Universal Visual Testing is a zero-config visual regression testing platform.' },
        { q: 'How does DSE work?', a: 'The Dynamic Stabilization Engine detects and masks dynamic content before comparison.' },
        { q: 'Does it support Next.js?', a: 'Yes — UVT natively supports React, Next.js, Vue, Angular, Svelte, and more.' },
        { q: 'What is the Percy integration?', a: 'UVT connects to Percy to upload DOM snapshots for cloud visual comparison.' },
    ];
    return (<div style={{ padding: '24px' }}>
      <h2>FAQ</h2>
      {items.map((item, i) => (<div key={i} style={{ marginBottom: '8px', border: '1px solid #eee', borderRadius: '8px', overflow: 'hidden' }}>
          <button onClick={() => setOpen(open === i ? null : i)} style={{ width: '100%', textAlign: 'left', padding: '12px 16px', background: '#f9f9f9', border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: '15px' }}>
            {item.q}
          </button>
          {open === i && <div style={{ padding: '12px 16px' }}>{item.a}</div>}
        </div>))}
    </div>);
}
//# sourceMappingURL=page.js.map