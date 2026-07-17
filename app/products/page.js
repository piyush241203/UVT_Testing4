'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ProductsPage;
const link_1 = __importDefault(require("next/link"));
function ProductsPage() {
    return (<div style={{ padding: '24px' }}>
      <h2>Products</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
        {[1, 2, 3, 4].map(id => (<div key={id} style={{ padding: '16px', border: '1px solid #eee', borderRadius: '10px' }}>
            <h3 style={{ marginTop: 0 }}>Product {id}</h3>
            <p style={{ color: '#666' }}>Premium visual testing addon #{id}</p>
            <link_1.default href={`/products/${id}`}>View Details →</link_1.default>
          </div>))}
      </div>
    </div>);
}
//# sourceMappingURL=page.js.map