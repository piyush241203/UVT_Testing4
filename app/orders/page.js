'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = OrdersPage;
function OrdersPage() {
    const orders = Array.from({ length: 6 }, (_, i) => ({
        id: `ORD-${1000 + i}`,
        item: `Service ${String.fromCharCode(65 + i)}`,
        status: ['Pending', 'Processing', 'Shipped', 'Delivered'][i % 4],
        amount: `$${(49.99 + i * 15).toFixed(2)}`,
    }));
    return (<div style={{ padding: '24px' }}>
      <h2>Orders</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ background: '#f5f5f5' }}>
            {['Order ID', 'Item', 'Status', 'Amount'].map(h => (<th key={h} style={{ textAlign: 'left', padding: '10px 12px', borderBottom: '2px solid #eee' }}>{h}</th>))}
          </tr>
        </thead>
        <tbody>
          {orders.map(o => (<tr key={o.id} style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: '10px 12px' }}><code>{o.id}</code></td>
              <td style={{ padding: '10px 12px' }}>{o.item}</td>
              <td style={{ padding: '10px 12px' }}>
                <span style={{ padding: '2px 8px', borderRadius: '999px', fontSize: '12px', background: o.status === 'Delivered' ? '#d4edda' : '#fff3cd' }}>
                  {o.status}
                </span>
              </td>
              <td style={{ padding: '10px 12px' }}>{o.amount}</td>
            </tr>))}
        </tbody>
      </table>
    </div>);
}
//# sourceMappingURL=page.js.map