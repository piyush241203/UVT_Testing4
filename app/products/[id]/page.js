'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ProductDetailPage;
const link_1 = __importDefault(require("next/link"));
const components_1 = require("../../components");
function ProductDetailPage({ params }) {
    return (<div style={{ padding: '24px' }}>
      <link_1.default href="/products">← Products</link_1.default>
      <h2>Product #{params.id}</h2>
      <p>Last updated: <components_1.RelativeTime base="2025-07-01"/></p>
      <components_1.DynamicTokens />
    </div>);
}
//# sourceMappingURL=page.js.map