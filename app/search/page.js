'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SearchPage;
const react_1 = require("react");
const link_1 = __importDefault(require("next/link"));
function SearchPage() {
    const [query, setQuery] = (0, react_1.useState)('');
    const allPages = ['Dashboard', 'Blog', 'Pricing', 'FAQ', 'Team', 'Careers', 'Analytics', 'Orders', 'Notifications', 'Admin', 'Products'];
    const results = query.length >= 2 ? allPages.filter(p => p.toLowerCase().includes(query.toLowerCase())) : [];
    return (<div style={{ padding: '24px' }}>
      <h2>Search</h2>
      <input type="text" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search pages…" style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '16px', marginBottom: '12px' }}/>
      {results.length > 0 ? (<ul>
          {results.map(r => <li key={r}><link_1.default href={`/${r.toLowerCase()}`}>{r}</link_1.default></li>)}
        </ul>) : query.length >= 2 ? (<p>No results for &ldquo;<strong>{query}</strong>&rdquo;</p>) : null}
    </div>);
}
//# sourceMappingURL=page.js.map