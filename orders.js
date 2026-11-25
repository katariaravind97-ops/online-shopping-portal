const ordersList = document.querySelector('#orders-list');
const ordersEmpty = document.querySelector('#orders-empty');
const ordersError = document.querySelector('#orders-error');
const ordersSummary = document.querySelector('#orders-summary');

const money = (amount) => `₹${Math.round(amount).toLocaleString('en-IN')}`;
const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
})[character]);

function isValidOrder(order) {
  return Boolean(
    order &&
    typeof order === 'object' &&
    /^AR-[A-Z0-9]+$/.test(order.id) &&
    typeof order.placedAt === 'string' &&
    Number.isFinite(Date.parse(order.placedAt)) &&
    order.status === 'Demo order placed' &&
    Number.isInteger(order.subtotal) &&
    order.subtotal >= 0 &&
    Number.isInteger(order.discount) &&
    order.discount >= 0 &&
    order.discount <= order.subtotal &&
    Number.isInteger(order.total) &&
    order.total === order.subtotal - order.discount &&
    Array.isArray(order.items) &&
    order.items.length > 0 &&
    order.items.every((item) => (
      item &&
      typeof item === 'object' &&
      /^[a-z0-9-]+$/.test(item.id) &&
      typeof item.name === 'string' &&
      typeof item.size === 'string' &&
      typeof item.color === 'string' &&
      Number.isInteger(item.quantity) &&
      item.quantity > 0 &&
      Number.isInteger(item.unitPrice) &&
      item.unitPrice > 0
    ))
  );
}

function renderOrder(order, index) {
  const date = new Date(order.placedAt);
  const orderItems = order.items.map((item) => `
    <li class="order-item">
      <span><strong>${escapeHtml(item.name)}</strong><small>${escapeHtml(item.color)} · Size ${escapeHtml(item.size)} · Qty ${item.quantity}</small></span>
      <strong>${money(item.unitPrice * item.quantity)}</strong>
    </li>`).join('');
  const discountLine = order.discount
    ? `<div class="order-discount"><span>Coupon savings</span><strong>−${money(order.discount)}</strong></div>`
    : '';

  return `
    <article class="order-card" aria-labelledby="order-${index}-id">
      <header class="order-card-header">
        <div>
          <small>Order reference</small>
          <h2 id="order-${index}-id">${escapeHtml(order.id)}</h2>
          <time datetime="${escapeHtml(order.placedAt)}">${date.toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
        </div>
        <span class="order-status">${escapeHtml(order.status)}</span>
      </header>
      <div class="order-card-body">
        <ul class="order-items">${orderItems}</ul>
        <div class="order-totals">
          <div><span>Subtotal</span><strong>${money(order.subtotal)}</strong></div>
          ${discountLine}
          <div><span>Delivery</span><strong>Free</strong></div>
          <div class="order-total"><strong>Total</strong><strong>${money(order.total)}</strong></div>
        </div>
      </div>
    </article>`;
}

try {
  const savedOrders = localStorage.getItem('ar-shop-orders');
  const orders = savedOrders ? JSON.parse(savedOrders) : [];
  if (!Array.isArray(orders) || orders.some((order) => !isValidOrder(order))) {
    throw new Error('Saved order history is invalid.');
  }

  if (orders.length) {
    ordersList.innerHTML = orders.map(renderOrder).join('');
    ordersSummary.textContent = `${orders.length} ${orders.length === 1 ? 'demo order' : 'demo orders'} saved in this browser.`;
  } else {
    ordersEmpty.hidden = false;
  }
} catch {
  ordersError.hidden = false;
  ordersError.textContent = 'Your order history could not be read from this browser. Please check browser storage and try again.';
}