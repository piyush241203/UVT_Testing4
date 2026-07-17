'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BlogDetailPage;
const link_1 = __importDefault(require("next/link"));
const components_1 = require("../../components");
function BlogDetailPage({ params }) {
    return (<div style={{ padding: '24px' }}>
      <link_1.default href="/blog">← Back to Blog</link_1.default>
      <h2>Blog Post: {params.slug}</h2>
      <p>Published: <components_1.RelativeTime base="2025-07-01"/></p>
      <p>This is a detailed blog article about {params.slug}. It contains both static and dynamic content to validate UVT stabilization.</p>
      <components_1.DynamicTokens />
      <components_1.SkeletonLoader />
    </div>);
}
//# sourceMappingURL=page.js.map