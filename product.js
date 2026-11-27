const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
})[character]);

const money = (amount) => `₹${Math.round(amount).toLocaleString('en-IN')}`;
const sizePriceStep = 100;

function normalizeProduct(candidate) {
  try {
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
    const galleryImages = Array.isArray(candidate.galleryImages)
      ? candidate.galleryImages.slice(0, 8).flatMap((entry) => {
        try {
          if (!entry || typeof entry !== 'object' || typeof entry.label !== 'string' || typeof entry.alt !== 'string') return [];
          const source = new URL(entry.src, window.location.href);
          const allowed = ['https:', 'http:'].includes(source.protocol) &&
            (source.origin === window.location.origin || (source.protocol === 'https:' && source.hostname === 'images.unsplash.com'));
          if (!allowed) return [];
          return [{ src: source.href, alt: entry.alt, label: entry.label }];
        } catch {
          return [];
        }
      })
      : [];

    return {
      ...candidate,
      image: imageUrl.href,
      tag: typeof candidate.tag === 'string' ? candidate.tag : '',
      galleryImages: galleryImages.length ? galleryImages : [{ src: imageUrl.href, alt: candidate.alt, label: 'Main view' }]
    };
  } catch {
    return null;
  }
}

function readProductCatalog() {
  try {
    const serializedProducts = localStorage.getItem('ar-shop-products');
    if (!serializedProducts) return [];
    const candidates = JSON.parse(serializedProducts);
    return Array.isArray(candidates) ? candidates.map(normalizeProduct).filter(Boolean) : [];
  } catch (error) {
    console.error('Could not load the product catalog from browser storage.', error);
    return [];
  }
}

function readProduct(catalog) {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get('id');
  if (productId) return catalog.find((item) => item.id === productId) || null;

  const serializedProduct = params.get('product');
  if (!serializedProduct) return null;
  try {
    return normalizeProduct(JSON.parse(serializedProduct));
  } catch {
    return null;
  }
}

function readRelatedProducts(product, catalog) {
  return catalog
    .filter((item) => item.id !== product.id && item.category === product.category)
    .slice(0, 8);
}

function productDetailHref(product) {
  return `product.html?id=${encodeURIComponent(product.id)}`;
}

function renderProduct(product, relatedProducts) {
  const discount = Math.max(0, Math.round((1 - product.price / product.originalPrice) * 100));
  const label = product.tag
    ? `<span class="product-detail-tag">${escapeHtml(product.tag)}</span>`
    : '';
  const galleryThumbnails = product.galleryImages.length > 1
    ? `<div class="product-gallery-thumbnails" role="group" aria-label="More product views">
        ${product.galleryImages.map((view, index) => `
          <button class="product-gallery-thumbnail${index === 0 ? ' is-active' : ''}" type="button" data-gallery-image="${index}" aria-label="${escapeHtml(view.label)}" aria-pressed="${index === 0}">
            <img src="${escapeHtml(view.src)}" alt="" loading="lazy">
            <span>${escapeHtml(view.label)}</span>
          </button>`).join('')}
      </div>`
    : '';
  const relatedItems = relatedProducts
    .filter((item) => item.id !== product.id && item.category === product.category)
    .map((item) => {
      const href = productDetailHref(item);
      return `
        <a class="related-product-card" href="${escapeHtml(href)}">
          <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.alt)}" loading="lazy">
          <span class="related-product-copy">
            <strong>${escapeHtml(item.name)}</strong>
            <span>${money(item.price)}</span>
          </span>
        </a>`;
    }).join('');
  const relatedSection = relatedItems
    ? `<section class="related-products" aria-labelledby="related-products-title">
        <h2 id="related-products-title">Related products</h2>
        <div class="related-product-grid">${relatedItems}</div>
      </section>`
    : '';

  document.title = `${product.name} — AR Market`;
  document.querySelector('#product-content').innerHTML = `
    <section class="product-gallery-panel" aria-label="Product images">
      <figure class="product-gallery-feature" id="product-gallery-feature">
        <img id="product-gallery-main" src="${escapeHtml(product.galleryImages[0].src)}" alt="${escapeHtml(product.galleryImages[0].alt)}">
        <figcaption id="product-gallery-caption">${escapeHtml(product.galleryImages[0].label)}</figcaption>
      </figure>
      ${galleryThumbnails}
      <p class="product-gallery-disclaimer">Only the main photo shows the selected product. Other angles are illustrative category references, not verified views of this exact item.</p>
    </section>

    <section class="product-detail-info" aria-labelledby="product-name">
      <nav class="product-breadcrumb" aria-label="Breadcrumb"><a href="index.html#home">Home</a><span>/</span><a href="index.html#shop">Shop</a><span>/</span><span>${escapeHtml(product.category)}</span></nav>
      <span class="product-detail-brand">${escapeHtml(product.brand)} · ${escapeHtml(product.category)}</span>
      <h1 id="product-name">${escapeHtml(product.name)}</h1>
      <div class="product-detail-rating"><span class="product-rating">${product.rating.toFixed(1)} ★</span><span>${product.reviews.toLocaleString('en-IN')} customer reviews</span></div>
      <div class="product-detail-price"><span class="price-current" id="product-current-price">${money(product.price)}</span><span class="price-original" id="product-original-price">${money(product.originalPrice)}</span><span class="price-off" id="product-discount">${discount}% off</span></div>
      ${label}
      <p class="product-detail-description">${escapeHtml(product.description)}</p>

      <div class="product-variant-fields">
        <label for="product-size">Size<select id="product-size">${product.sizes.map((size) => `<option value="${escapeHtml(size)}">${escapeHtml(size)}</option>`).join('')}</select></label>
        <label for="product-color"><span class="product-color-label">Colour<span class="product-color-swatch" id="product-color-swatch" aria-label="Selected colour"></span></span><select id="product-color">${product.colors.map((color) => `<option value="${escapeHtml(color)}">${escapeHtml(color)}</option>`).join('')}</select></label>
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
    ${relatedSection}
  `;
}

function enableVariants(product) {
  const sizeSelect = document.querySelector('#product-size');
  const colorSelect = document.querySelector('#product-color');
  const currentPrice = document.querySelector('#product-current-price');
  const originalPrice = document.querySelector('#product-original-price');
  const discountLabel = document.querySelector('#product-discount');
  const galleryFeature = document.querySelector('#product-gallery-feature');
  const colorSwatch = document.querySelector('#product-color-swatch');
  const colorStyles = {
    white: { color: '#f5f2ea', blend: 'screen', opacity: '.35' },
    black: { color: '#202124', blend: 'multiply', opacity: '.65' },
    navy: { color: '#20365c', blend: 'color', opacity: '.58' },
    'sky blue': { color: '#8ec9e8', blend: 'color', opacity: '.55' },
    blue: { color: '#3268a8', blend: 'color', opacity: '.55' },
    sand: { color: '#d8c29a', blend: 'color', opacity: '.5' },
    olive: { color: '#687044', blend: 'color', opacity: '.58' },
    charcoal: { color: '#454a50', blend: 'color', opacity: '.55' },
    indigo: { color: '#3e4c85', blend: 'color', opacity: '.58' },
    'washed blue': { color: '#8ba9c4', blend: 'color', opacity: '.5' },
    stone: { color: '#a39c8b', blend: 'color', opacity: '.45' },
    silver: { color: '#b8bec4', blend: 'screen', opacity: '.32' },
    gold: { color: '#d1a947', blend: 'color', opacity: '.62' },
    'rose gold': { color: '#c98679', blend: 'color', opacity: '.55' },
    tan: { color: '#b17a45', blend: 'color', opacity: '.58' },
    tortoise: { color: '#70452a', blend: 'color', opacity: '.62' },
    brown: { color: '#68452f', blend: 'color', opacity: '.62' }
  };

  const updatePrice = () => {
    const adjustment = Math.max(0, sizeSelect.selectedIndex) * sizePriceStep;
    const price = product.price + adjustment;
    const original = product.originalPrice + adjustment;
    currentPrice.textContent = money(price);
    originalPrice.textContent = money(original);
    discountLabel.textContent = `${Math.max(0, Math.round((1 - price / original) * 100))}% off`;
  };

  const updateColor = () => {
    const colorName = colorSelect.value;
    const style = colorStyles[colorName.toLowerCase()] || { color: '#8b9094', blend: 'color', opacity: '.45' };
    galleryFeature.style.setProperty('--product-color-tint', style.color);
    galleryFeature.style.setProperty('--product-color-blend', style.blend);
    galleryFeature.style.setProperty('--product-color-opacity', style.opacity);
    colorSwatch.style.backgroundColor = style.color;
    colorSwatch.setAttribute('aria-label', `${colorName} selected`);
  };

  sizeSelect.addEventListener('change', updatePrice);
  colorSelect.addEventListener('change', updateColor);
  updatePrice();
  updateColor();
}

function enableGallery(product) {
  const mainImage = document.querySelector('#product-gallery-main');
  const caption = document.querySelector('#product-gallery-caption');
  const feature = document.querySelector('#product-gallery-feature');
  document.querySelectorAll('[data-gallery-image]').forEach((button) => {
    button.addEventListener('click', () => {
      const view = product.galleryImages[Number(button.dataset.galleryImage)];
      if (!view) return;
      mainImage.src = view.src;
      mainImage.alt = view.alt;
      caption.textContent = view.label;
      document.querySelectorAll('[data-gallery-image]').forEach((thumbnail) => {
        const selected = thumbnail === button;
        thumbnail.classList.toggle('is-active', selected);
        thumbnail.setAttribute('aria-pressed', String(selected));
      });
    });
  });
  return feature;
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

function enableBackNavigation() {
  const backLink = document.querySelector('.product-back-link');
  if (!document.referrer || new URL(document.referrer).origin !== window.location.origin) return;
  backLink.lastChild.textContent = ' Back to previous page';
  backLink.addEventListener('click', (event) => {
    event.preventDefault();
    window.history.back();
  });
}

enableBackNavigation();

const productCatalog = readProductCatalog();
const product = readProduct(productCatalog);
if (product) {
  const relatedProducts = readRelatedProducts(product, productCatalog);
  const productContent = document.querySelector('#product-content');
  productContent.hidden = false;
  renderProduct(product, relatedProducts);
  enableGallery(product);
  enableVariants(product);
  enableCart(product);
} else {
  document.querySelector('#product-unavailable').hidden = false;
}
