'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ContactPage;
const react_1 = require("react");
function ContactPage() {
    const [submitted, setSubmitted] = (0, react_1.useState)(false);
    return (<div style={{ padding: '24px' }}>
      <h2>Contact Support</h2>
      {submitted ? (<div style={{ color: 'green', fontWeight: 'bold' }}>Message sent! We will respond within 24 hours.</div>) : (<form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '360px' }}>
          <input type="text" placeholder="Name" required style={{ padding: '8px 12px', borderRadius: '6px', border: '1px solid #ccc' }}/>
          <input type="email" placeholder="Email" required style={{ padding: '8px 12px', borderRadius: '6px', border: '1px solid #ccc' }}/>
          <textarea placeholder="Message" required style={{ padding: '8px 12px', borderRadius: '6px', border: '1px solid #ccc', minHeight: '100px' }}/>
          <button type="submit" style={{ padding: '10px', background: '#646cff', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Submit</button>
        </form>)}
    </div>);
}
//# sourceMappingURL=page.js.map