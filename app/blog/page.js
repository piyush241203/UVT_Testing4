'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BlogPage;
const link_1 = __importDefault(require("next/link"));
const components_1 = require("../components");
const posts = [
    { id: 'intro', title: 'Introducing UVT', excerpt: 'Zero-config visual testing.', date: '2025-07-01' },
    { id: 'dse', title: 'How DSE Works', excerpt: 'Dynamic stabilization at scale.', date: '2025-07-05' },
    { id: 'rc02', title: 'RC-02 Lifecycle Test', excerpt: 'Git-based end-to-end validation.', date: '2025-07-10' },
];
function BlogPage() {
    return (<div style={{ padding: '24px' }}>
      <h2>Blog</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {posts.map(p => (<div key={p.id} style={{ padding: '16px', border: '1px solid #eee', borderRadius: '8px' }}>
            <h3 style={{ margin: '0 0 4px' }}><link_1.default href={`/blog/${p.id}`}>{p.title}</link_1.default></h3>
            <p style={{ margin: '0 0 8px', color: '#666' }}>{p.excerpt}</p>
            <small>{p.date} · <components_1.RelativeTime base={p.date}/></small>
          </div>))}
      </div>
    </div>);
}
//# sourceMappingURL=page.js.map