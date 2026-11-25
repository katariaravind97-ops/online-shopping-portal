const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
})[character]);

const money = (amount) => `₹${Math.round(amount).toLocaleString('en-IN')}`;

function readProduct() {
  const serializedProduct = new URLSearchParams(window.location.search).get('product');
  if (!serializedProduct) return null;

  try {
    const candidate = JSON.parse(serializedProduct);
    if (
      !candidate ||
      typeof candidate !== 'object' ||
      !/^[a-z0-9-]+$/.test(candidate.id) ||
      ![candidate.name, candidate.category, candidate.brand, candidate.description, candidate.alt].every((value) => typeof value === 'string') ||
      !Number.isFinite(candidate.price) ||
      !Number.isFinite(candidate.originalPrice) ||
      candidate.price <= 0 ||
      candidate.originalPrice <= 0 ||
      !Number.isFinite(candidate.rating) ||
      !Number.isInteger(candidate.reviews) ||
      !Array.isArray(candidate.sizes) ||
      !candidate.sizes.length ||
      !candidate.sizes.every((size) => typeof size === 'string') ||
      !Array.isArray(candidate.colors) ||
      !candidate.colors.length ||
      !candidate.colors.every((color) => typeof color === 'string')
    ) return null;

    const imageUrl = new URL(candidate.image);
    if (imageUrl.protocol !== 'https:' || imageUrl.hostname !== 'images.unsplash.com') return null;

    return { ...candidate, image: imageUrl.href };
  } catch {
    return null;
  }
}

function renderProduct(product) {
  const discount = Math.max(0, Math.round((1 - product.price / product.originalPrice) * 100));
  const label = product.tag
    ? `<span class="product-detail-tag">${escapeHtml(product.tag)}</span>`
    : '';

  document.title = `${product.name} — AR Market`;
  document.querySelector('#product-content').innerHTML = `
    <section class="product-viewer-panel" aria-label="Interactive product photo">
      <div class="product-viewer-header">
        <div><span class="section-kicker">3D-STYLE PRODUCT VIEW</span><p>Drag the photo or use arrow keys to tilt it.</p></div>
        <button class="viewer-reset" id="viewer-reset" type="button">Reset view</button>
      </div>
      <div class="product-viewer-stage" id="product-viewer-stage" tabindex="0" aria-label="Interactive 3D-style view of ${escapeHtml(product.name)}">
        <div class="product-viewer-image" id="product-viewer-image">
          <img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.alt)}" draggable="false">
        </div>
        <span class="viewer-watermark">AR MARKET · VIEW</span>
      </div>
      <p class="product-viewer-note">This interactive view tilts the catalog photo. A true 3D model is not available for this product.</p>
    </section>

    <section class="product-detail-info" aria-labelledby="product-name">
      <nav class="product-breadcrumb" aria-label="Breadcrumb"><a href="index.html#home">Home</a><span>/</span><a href="index.html#shop">Shop</a><span>/</span><span>${escapeHtml(product.category)}</span></nav>
      <span class="product-detail-brand">${escapeHtml(product.brand)} · ${escapeHtml(product.category)}</span>
      <h1 id="product-name">${escapeHtml(product.name)}</h1>
      <div class="product-detail-rating"><span class="product-rating">${product.rating.toFixed(1)} ★</span><span>${product.reviews.toLocaleString('en-IN')} customer reviews</span></div>
      <div class="product-detail-price"><span class="price-current">${money(product.price)}</span><span class="price-original">${money(product.originalPrice)}</span><span class="price-off">${discount}% off</span></div>
      ${label}
      <p class="product-detail-description">${escapeHtml(product.description)}</p>

      <div class="product-variant-fields">
        <label for="product-size">Size<select id="product-size">${product.sizes.map((size) => `<option value="${escapeHtml(size)}">${escapeHtml(size)}</option>`).join('')}</select></label>
        <label for="product-color">Colour<select id="product-color">${product.colors.map((color) => `<option value="${escapeHtml(color)}">${escapeHtml(color)}</option>`).join('')}</select></label>
      </div>
      <button class="primary-button product-add-button" id="product-add-button" type="button">Add to cart <span>→</span></button>
      <p class="product-cart-message" id="product-cart-message" role="status" aria-live="polite"></p>

      <section class="product-facts" aria-labelledby="product-facts-title">
        <h2 id="product-facts-title">Product details</h2>
        <dl>
          <div><dt>Brand</dt><dd>${escapeHtml(product.brand)}</dd></div>
          <div><dt>Category</dt><dd>${escapeHtml(product.category)}</dd></div>
          <div><dt>Available sizes</dt><dd>${escapeHtml(product.sizes.join(', '))}</dd></div>
          <div><dt>Available colours</dt><dd>${escapeHtml(product.colors.join(', '))}</dd></div>
          <div><dt>Product reference</dt><dd>${escapeHtml(product.id)}</dd></div>
        </dl>
      </section>
    </section>
  `;
}

function enableViewer() {
  const stage = document.querySelector('#product-viewer-stage');
  const image = document.querySelector('#product-viewer-image');
  const resetButton = document.querySelector('#viewer-reset');
  let rotationX = 0;
  let rotationY = 0;
  let dragStart = null;

  const updateView = () => {
    image.style.setProperty('--rotate-x', `${rotationX}deg`);
    image.style.setProperty('--rotate-y', `${rotationY}deg`);
  };

  const resetView = () => {
    rotationX = 0;
    rotationY = 0;
    updateView();
  };

  stage.addEventListener('pointerdown', (event) => {
    if (event.button !== 0) return;
    event.preventDefault();
    dragStart = { x: event.clientX, y: event.clientY, rotationX, rotationY, pointerId: event.pointerId };
    stage.setPointerCapture(event.pointerId);
    stage.classList.add('is-dragging');
  });

  stage.addEventListener('pointermove', (event) => {
    if (!dragStart || event.pointerId !== dragStart.pointerId) return;
    rotationY = Math.max(-18, Math.min(18, dragStart.rotationY + (event.clientX - dragStart.x) * 0.35));
    rotationX = Math.max(-12, Math.min(12, dragStart.rotationX - (event.clientY - dragStart.y) * 0.25));
    updateView();
  });

  const finishDrag = (event) => {
    if (!dragStart || event.pointerId !== dragStart.pointerId) return;
    dragStart = null;
    stage.classList.remove('is-dragging');
  };

  stage.addEventListener('pointerup', finishDrag);
  stage.addEventListener('pointercancel', finishDrag);
  stage.addEventListener('keydown', (event) => {
    const movement = {
      ArrowLeft: [0, -4],
      ArrowRight: [0, 4],
      ArrowUp: [4, 0],
      ArrowDown: [-4, 0]
    }[event.key];
    if (!movement) return;
    event.preventDefault();
    rotationX = Math.max(-12, Math.min(12, rotationX + movement[0]));
    rotationY = Math.max(-18, Math.min(18, rotationY + movement[1]));
    updateView();
  });

  resetButton.addEventListener('click', resetView);
}

function enableCart(product) {
  const message = document.querySelector('#product-cart-message');
  document.querySelector('#product-add-button').addEventListener('click', () => {
    let cart;
    try {
      const savedCart = localStorage.getItem('ar-shop-cart');
      cart = savedCart ? JSON.parse(savedCart) : [];
    } catch {
      message.textContent = 'Your cart could not be read from browser storage.';
      return;
    }

    if (!Array.isArray(cart)) {
      message.textContent = 'Your saved cart data is invalid. Return to the shop and try again.';
      return;
    }

    const size = document.querySelector('#product-size').value;
    const color = document.querySelector('#product-color').value;
    const existing = cart.find((item) => item && item.id === product.id && item.size === size && item.color === color);
    if (existing) {
      if (!Number.isInteger(existing.quantity) || existing.quantity < 1) {
        message.textContent = 'Your saved cart data is invalid. Return to the shop and try again.';
        return;
      }
      existing.quantity += 1;
    } else cart.push({ id: product.id, size, color, quantity: 1 });

    try {
      localStorage.setItem('ar-shop-cart', JSON.stringify(cart));
    } catch {
      message.textContent = 'Your cart could not be saved in browser storage.';
      return;
    }

    message.textContent = `${product.name} added to your cart.`;
  });
}

const product = readProduct();
if (product) {
  const productContent = document.querySelector('#product-content');
  productContent.hidden = false;
  renderProduct(product);
  enableViewer();
  enableCart(product);
} else {
  document.querySelector('#product-unavailable').hidden = false;
}
