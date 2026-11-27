const image = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=720&q=80`;

const products = [
  { id: 'everyday-tee', name: 'Everyday cotton T-shirt', category: 'Shirts', price: 599, originalPrice: 899, rating: 4.5, reviews: 642, brand: 'Thread & Loom', tag: 'Bestseller', description: 'Soft, breathable cotton for an easy everyday layer.', image: image('photo-1521572163474-6864f9cf17ab'), alt: 'Classic cotton T-shirt', sizes: ['S', 'M', 'L', 'XL'], colors: ['White', 'Black', 'Navy'] },
  { id: 'linen-shirt', name: 'Relaxed linen shirt', category: 'Shirts', price: 1199, originalPrice: 1699, rating: 4.4, reviews: 318, brand: 'Thread & Loom', tag: 'Easy favourite', description: 'A relaxed fit linen-blend shirt for brighter days.', image: image('photo-1603252109303-2751441dd157'), alt: 'Relaxed button-up shirt', sizes: ['S', 'M', 'L', 'XL'], colors: ['Sky blue', 'White', 'Sand'] },
  { id: 'oversized-shirt', name: 'Weekend overshirt', category: 'Shirts', price: 1399, originalPrice: 1899, rating: 4.3, reviews: 157, brand: 'Northline', tag: '', description: 'A versatile extra layer with a comfortable roomy fit.', image: image('photo-1598033129183-c4f50c736f10'), alt: 'Casual overshirt for layering', sizes: ['S', 'M', 'L', 'XL'], colors: ['Olive', 'Charcoal'] },
  { id: 'straight-jeans', name: 'Straight-fit denim jeans', category: 'Pants', price: 1599, originalPrice: 2199, rating: 4.5, reviews: 728, brand: 'Northline Denim', tag: 'Top rated', description: 'Classic straight-leg denim made for all-day comfort.', image: image('photo-1542272604-787c3835535d'), alt: 'Blue straight-leg jeans', sizes: ['28', '30', '32', '34', '36'], colors: ['Indigo', 'Washed blue'] },
  { id: 'chino-pants', name: 'Everyday cotton chinos', category: 'Pants', price: 1299, originalPrice: 1799, rating: 4.2, reviews: 276, brand: 'Northline', tag: '', description: 'Easy cotton chinos that go from workdays to weekends.', image: image('photo-1473966968600-fa801b869a1a'), alt: 'Neutral everyday trousers', sizes: ['28', '30', '32', '34', '36'], colors: ['Stone', 'Navy', 'Black'] },
  { id: 'classic-watch', name: 'Classic dial wristwatch', category: 'Watches', price: 2499, originalPrice: 3499, rating: 4.6, reviews: 1104, brand: 'Aster & Co.', tag: 'Bestseller', description: 'A clean, timeless dial with a comfortable everyday strap.', image: image('photo-1523275335684-37898b6baf30'), alt: 'Classic watch with a simple dial', sizes: ['One size'], colors: ['Silver', 'Gold', 'Black'] },
  { id: 'minimal-watch', name: 'Minimal mesh watch', category: 'Watches', price: 3199, originalPrice: 4299, rating: 4.5, reviews: 483, brand: 'Aster & Co.', tag: 'New arrival', description: 'A pared-back face and fine mesh strap for a polished finish.', image: image('photo-1524592094714-0f0654e20314'), alt: 'Minimal wristwatch with a metal strap', sizes: ['One size'], colors: ['Silver', 'Rose gold'] },
  { id: 'canvas-sneakers', name: 'Canvas everyday sneakers', category: 'Shoes', price: 1399, originalPrice: 1999, rating: 4.3, reviews: 527, brand: 'Stepwise', tag: 'Popular', description: 'Light, versatile canvas sneakers for wherever the day goes.', image: image('photo-1525966222134-fcfa99b8ae77'), alt: 'Casual canvas sneakers', sizes: ['6', '7', '8', '9', '10'], colors: ['White', 'Black'] },
  { id: 'leather-loafers', name: 'Soft leather loafers', category: 'Shoes', price: 2299, originalPrice: 2999, rating: 4.4, reviews: 194, brand: 'Stepwise', tag: '', description: 'A smart-casual slip-on with a soft, easy-wear finish.', image: image('photo-1533867617858-e7b97e060509'), alt: 'Brown leather casual shoes', sizes: ['6', '7', '8', '9', '10'], colors: ['Tan', 'Black'] },
  { id: 'daily-tote', name: 'Everyday carryall tote', category: 'Bags', price: 899, originalPrice: 1299, rating: 4.4, reviews: 314, brand: 'Common Ground', tag: 'Good pick', description: 'A roomy everyday tote for work, errands and weekends.', image: image('photo-1548036328-c9fa89d128fa'), alt: 'Everyday shoulder bag', sizes: ['One size'], colors: ['Tan', 'Black', 'Olive'] },
  { id: 'city-backpack', name: 'City daypack', category: 'Bags', price: 1799, originalPrice: 2399, rating: 4.5, reviews: 268, brand: 'Common Ground', tag: '', description: 'A clean, practical backpack with room for daily essentials.', image: image('photo-1553062407-98eeb64c6a62'), alt: 'Compact city backpack', sizes: ['One size'], colors: ['Black', 'Navy'] },
  { id: 'sunglasses', name: 'Everyday frame sunglasses', category: 'Accessories', price: 799, originalPrice: 1199, rating: 4.2, reviews: 402, brand: 'Daylight Studio', tag: 'Sunny day pick', description: 'A versatile frame to finish off your everyday look.', image: image('photo-1511499767150-a48a237f0083'), alt: 'Stylish sunglasses', sizes: ['One size'], colors: ['Tortoise', 'Black'] },
  { id: 'leather-wallet', name: 'Slim fold wallet', category: 'Accessories', price: 699, originalPrice: 999, rating: 4.3, reviews: 218, brand: 'Common Ground', tag: '', description: 'A compact everyday wallet with a neat, durable finish.', image: image('photo-1627123424574-724758594e93'), alt: 'Compact leather wallet', sizes: ['One size'], colors: ['Brown', 'Black'] },
  { id: 'everyday-belt', name: 'Classic buckle belt', category: 'Accessories', price: 649, originalPrice: 899, rating: 4.1, reviews: 169, brand: 'Common Ground', tag: '', description: 'A simple finishing touch for your favourite trousers.', image: image('photo-1627123424574-724758594e93'), alt: 'Classic leather belt', sizes: ['S', 'M', 'L'], colors: ['Tan', 'Black'] },
  { id: 'silver-chain', name: 'Layered silver-tone chain', category: 'Accessories', price: 549, originalPrice: 799, rating: 4.4, reviews: 341, brand: 'Daylight Studio', tag: 'Little detail', description: 'An easy-to-layer chain that adds a subtle finishing touch.', image: image('photo-1611652022419-a9419f74343d'), alt: 'Minimal silver-tone jewelry', sizes: ['One size'], colors: ['Silver', 'Gold'] }
];

const collectionExtensions = [
  {
    category: 'Shirts',
    brand: 'Thread & Loom',
    basePrice: 749,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Blue', 'Black'],
    description: 'An easy-to-style wardrobe staple with a comfortable everyday fit.',
    names: ['Oxford button-down shirt', 'Striped poplin shirt', 'Soft pique polo shirt', 'Boxy graphic T-shirt', 'Long-sleeve crew tee', 'Relaxed chambray shirt', 'Textured resort shirt', 'Classic flannel overshirt', 'Ribbed tank top', 'Lightweight camp-collar shirt', 'Everyday checked shirt', 'Heavyweight cotton tee', 'Quarter-zip pullover', 'Soft knit polo', 'Casual denim shirt', 'Printed short-sleeve shirt', 'Essential crewneck tee'],
    photos: ['photo-1602810318383-e386cc2a3ccf', 'photo-1596755094514-f87e34085b2c', 'photo-1618354691373-d851c5c3a990', 'photo-1576566588028-4147f3842f27', 'photo-1627225924765-552d49cf47ad', 'photo-1618354691229-88d47f285158', 'photo-1523381210434-271e8be1f52b', 'photo-1434389677669-e08b4cac3105', 'photo-1564859228273-274232fdb516', 'photo-1489987707025-afc232f7ea0f', 'photo-1598554747436-c9293d6a588f', 'photo-1515886657613-9f3515b0c78f', 'photo-1529139574466-a303027c1d8b', 'photo-1503342217505-b0a15ec3261c', 'photo-1551488831-00ddcb6c6bd3', 'photo-1603252109303-2751441dd157', 'photo-1598033129183-c4f50c736f10']
  },
  {
    category: 'Pants',
    brand: 'Northline',
    basePrice: 1099,
    sizes: ['28', '30', '32', '34', '36'],
    colors: ['Indigo', 'Stone', 'Black'],
    description: 'A dependable fit made to move comfortably through your day.',
    names: ['Tapered cotton chinos', 'Relaxed cargo pants', 'Slim dark denim jeans', 'Wide-leg tailored trousers', 'Linen-blend easy pants', 'Utility jogger pants', 'Stretch cotton trousers', 'Pleated formal pants', 'Soft corduroy trousers', 'Relaxed-fit jeans', 'Tapered work pants', 'Everyday track pants', 'Drawstring linen pants', 'Classic black jeans', 'Straight-cut chinos', 'Utility cargo joggers', 'Soft-knit lounge pants', 'Ankle-length trousers'],
    photos: ['photo-1541099649105-f69ad21f3246', 'photo-1594633312681-425c7b97ccd1', 'photo-1624378439575-d8705ad7ae80', 'photo-1511196044526-5cb3bcb7071b', 'photo-1560243563-062bfc001d68', 'photo-1475180098004-ca77a66827be', 'photo-1539109136881-3be0616acf4b', 'photo-1582418702059-97ebafb35d09', 'photo-1509631179647-0177331693ae', 'photo-1525507119028-ed4c629a60a3', 'photo-1515886657613-9f3515b0c78f', 'photo-1503342217505-b0a15ec3261c', 'photo-1627225924765-552d49cf47ad', 'photo-1598033129183-c4f50c736f10', 'photo-1602810318383-e386cc2a3ccf', 'photo-1523381210434-271e8be1f52b', 'photo-1434389677669-e08b4cac3105', 'photo-1564859228273-274232fdb516']
  },
  {
    category: 'Watches',
    brand: 'Aster & Co.',
    basePrice: 2199,
    sizes: ['One size'],
    colors: ['Silver', 'Gold', 'Black'],
    description: 'A versatile timepiece with a considered dial and comfortable strap.',
    names: ['Silver chronograph watch', 'Leather-strap analog watch', 'Midnight dial wristwatch', 'Gold-tone dress watch', 'Sport silicone watch', 'Square-face classic watch', 'Fine mesh strap watch', 'Minimal black dial watch', 'Heritage field watch', 'Slim rose-gold watch', 'Everyday analog timepiece', 'Two-tone classic watch', 'Blue-dial steel watch', 'Petite bracelet watch', 'Modern steel wristwatch', 'Neutral leather watch', 'Clean white dial watch', 'Brushed metal watch'],
    photos: ['photo-1523170335258-f5ed11844a49', 'photo-1434056886845-dac89ffe9b56', 'photo-1524805444758-089113d48a6d', 'photo-1522312346375-d1a52e2b99b3', 'photo-1508685096489-7aacd43bd3b1', 'photo-1526045431048-f857369baa09', 'photo-1508057198894-247b23fe5ade', 'photo-1434493789847-2f02dc6ca35d', 'photo-1547996160-81dfa63595aa', 'photo-1619134778706-7015533a6150', 'photo-1612817159949-195b6eb9e31a', 'photo-1617043786394-f977fa12eddf', 'photo-1511379938547-c1f69419868d', 'photo-1526170375885-4d8ecf77b99f', 'photo-1618221195710-dd6b41faaea6', 'photo-1523275335684-37898b6baf30', 'photo-1524592094714-0f0654e20314', 'photo-1523170335258-f5ed11844a49']
  },
  {
    category: 'Shoes',
    brand: 'Stepwise',
    basePrice: 1299,
    sizes: ['6', '7', '8', '9', '10'],
    colors: ['White', 'Black', 'Tan'],
    description: 'A comfortable, versatile pair made for everyday plans.',
    names: ['Retro low-top sneakers', 'Lace-up running shoes', 'Leather court sneakers', 'Suede casual trainers', 'Everyday slip-on shoes', 'High-top canvas shoes', 'City walking sneakers', 'Classic white trainers', 'Suede desert boots', 'Lightweight runners', 'Everyday ballet flats', 'Block-heel sandals', 'Leather slide sandals', 'Casual lace-up shoes', 'Knit walking shoes', 'Minimal leather sneakers', 'Everyday ankle boots', 'Cushioned sports trainers'],
    photos: ['photo-1542291026-7eec264c27ff', 'photo-1460353581641-37baddab0fa2', 'photo-1543163521-1bf539c55dd2', 'photo-1495555961986-6d4c1ecb7be3', 'photo-1514989940723-e8e51635b782', 'photo-1608231387042-66d1773070a5', 'photo-1549298916-b41d501d3772', 'photo-1597045566677-8cf032ed6634', 'photo-1552346154-21d32810aba3', 'photo-1600185365483-26d7a4cc7519', 'photo-1560343090-f0409e92791a', 'photo-1539185441755-769473a23570', 'photo-1551107696-a4b0c5a0d9a2', 'photo-1512374382149-233c42b6a83b', 'photo-1579338559194-a162d19bf842', 'photo-1525966222134-fcfa99b8ae77', 'photo-1533867617858-e7b97e060509', 'photo-1542291026-7eec264c27ff']
  },
  {
    category: 'Bags',
    brand: 'Common Ground',
    basePrice: 899,
    sizes: ['One size'],
    colors: ['Black', 'Tan', 'Olive'],
    description: 'A practical, easy-carry design that fits into your everyday routine.',
    names: ['Everyday crossbody bag', 'Soft shoulder bag', 'Structured mini tote', 'Weekend travel duffel', 'Commuter day backpack', 'Compact sling bag', 'Quilted shoulder bag', 'Canvas shopper tote', 'Relaxed weekend tote', 'Zip-top satchel bag', 'Laptop messenger bag', 'Mini crossbody purse', 'Soft hobo shoulder bag', 'Everyday work tote', 'Compact travel backpack', 'Weekend shoulder bag', 'Woven carryall tote', 'Utility sling pack'],
    photos: ['photo-1584917865442-de89df76afd3', 'photo-1590874103328-eac38a683ce7', 'photo-1591561954557-26941169b49e', 'photo-1566150905458-1bf1fc113f0d', 'photo-1598532163257-ae3c6b2524b6', 'photo-1565026057447-bc90a3dceb87', 'photo-1622560480654-d96214fdc887', 'photo-1524499982521-1ffd58dd89ea', 'photo-1553062407-98eeb64c6a62', 'photo-1548036328-c9fa89d128fa', 'photo-1584917865442-de89df76afd3', 'photo-1590874103328-eac38a683ce7', 'photo-1591561954557-26941169b49e', 'photo-1566150905458-1bf1fc113f0d', 'photo-1598532163257-ae3c6b2524b6', 'photo-1565026057447-bc90a3dceb87', 'photo-1622560480654-d96214fdc887', 'photo-1524499982521-1ffd58dd89ea']
  },
  {
    category: 'Accessories',
    brand: 'Daylight Studio',
    basePrice: 399,
    sizes: ['One size'],
    colors: ['Black', 'Silver', 'Gold'],
    description: 'A small finishing detail to make your everyday look your own.',
    names: ['Acetate frame sunglasses', 'Compact card holder', 'Smooth leather belt', 'Baseball cap', 'Soft rib-knit beanie', 'Classic signet ring', 'Minimal pendant necklace', 'Everyday hoop earrings', 'Printed lightweight scarf', 'Soft leather gloves', 'Replacement watch strap', 'Stackable bracelet set', 'Silver cuff bracelet', 'Everyday hair claw clip', 'Minimal stud earrings', 'Textured fabric belt'],
    photos: ['photo-1611652022419-a9419f74343d', 'photo-1511499767150-a48a237f0083', 'photo-1605100804763-247f67b3557e', 'photo-1617038220319-276d3cfab638', 'photo-1630019852942-f89202989a59', 'photo-1611591437281-460bfbe1220a', 'photo-1606760227091-3dd870d97f1d', 'photo-1526045431048-f857369baa09', 'photo-1611652022419-a9419f74343d', 'photo-1509631179647-0177331693ae', 'photo-1511499767150-a48a237f0083', 'photo-1605100804763-247f67b3557e', 'photo-1617038220319-276d3cfab638', 'photo-1630019852942-f89202989a59', 'photo-1611591437281-460bfbe1220a', 'photo-1606760227091-3dd870d97f1d']
  }
];

collectionExtensions.forEach((collection, collectionIndex) => {
  const missingCount = 20 - products.filter((product) => product.category === collection.category).length;
  collection.names.slice(0, missingCount).forEach((name, index) => {
    const price = collection.basePrice + (index % 7) * 125;
    const id = `${collection.category.toLowerCase()}-edit-${String(index + 1).padStart(2, '0')}`;
    products.push({
      id,
      name,
      category: collection.category,
      price,
      originalPrice: Math.round(price * 1.35 / 50) * 50,
      rating: Number((4.1 + (index % 7) * 0.1).toFixed(1)),
      reviews: 84 + index * 47 + collectionIndex * 13,
      brand: collection.brand,
      tag: index % 5 === 0 ? 'New arrival' : '',
      description: collection.description,
      image: image(collection.photos[index]),
      alt: `${name} product photograph`,
      sizes: collection.sizes,
      colors: collection.colors
    });
  });
});

const illustrativeAngleLabels = [
  'Front angle · illustrative',
  'Back angle · illustrative',
  'Side angle · illustrative'
];

products.forEach((product) => {
  const categoryProducts = products.filter((item) => item.category === product.category);
  const productIndex = categoryProducts.findIndex((item) => item.id === product.id);
  product.galleryImages = [
    { src: product.image, alt: product.alt, label: 'Selected product photo' },
    ...illustrativeAngleLabels.map((label, index) => {
      const reference = categoryProducts[(productIndex + index + 1) % categoryProducts.length];
      return {
        src: reference.image,
        alt: `Illustrative ${reference.category.toLowerCase()} reference; not the selected product`,
        label
      };
    })
  ];
});

const categories = ['All', 'Shirts', 'Pants', 'Watches', 'Shoes', 'Bags', 'Accessories', 'Wishlist'];
const state = {
  category: 'All',
  query: '',
  cart: loadCart(),
  favorites: new Set(loadFavorites()),
  couponApplied: false,
  toastTimer: 0,
  checkoutAddress: null
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const money = (amount) => `₹${Math.round(amount).toLocaleString('en-IN')}`;
const sizePriceStep = 100;

function getSizePrice(product, size) {
  return product.price + Math.max(0, product.sizes.indexOf(size)) * sizePriceStep;
}

function productDetailHref(product) {
  return `product.html?id=${encodeURIComponent(product.id)}`;
}

function readStorage(key, fallback) {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : fallback;
  } catch {
    return fallback;
  }
}

function saveStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    showToast('Your browser could not save this preference.');
  }
}

function loadCart() {
  const saved = readStorage('ar-shop-cart', []);
  if (!Array.isArray(saved)) return [];
  return saved.filter((item) => {
    if (!item || typeof item !== 'object') return false;
    const product = products.find((candidate) => candidate.id === item.id);
    return Boolean(
      product &&
      product.sizes.includes(item.size) &&
      product.colors.includes(item.color) &&
      Number.isInteger(item.quantity) &&
      item.quantity > 0
    );
  });
}

function loadFavorites() {
  const saved = readStorage('ar-shop-favorites', []);
  return Array.isArray(saved) ? saved.filter((id) => products.some((product) => product.id === id)) : [];
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[character]);
}

function showToast(message) {
  const toast = $('#toast');
  toast.textContent = message;
  toast.classList.add('is-visible');
  window.clearTimeout(state.toastTimer);
  state.toastTimer = window.setTimeout(() => toast.classList.remove('is-visible'), 2600);
}

try {
  localStorage.setItem('ar-shop-products', JSON.stringify(products));
} catch {
  showToast('Related products could not be saved in browser storage.');
}

function renderProducts() {
  const query = state.query.trim().toLowerCase();
  let visible = products.filter((product) => {
    const matchesCategory = state.category === 'All' || (state.category === 'Wishlist' ? state.favorites.has(product.id) : product.category === state.category);
    const matchesQuery = !query || `${product.name} ${product.category} ${product.brand} ${product.description}`.toLowerCase().includes(query);
    return matchesCategory && matchesQuery;
  });

  const sort = $('#sort-products').value;
  if (sort === 'popular') visible = [...visible].sort((a, b) => b.reviews - a.reviews);
  if (sort === 'price-low') visible = [...visible].sort((a, b) => a.price - b.price);
  if (sort === 'price-high') visible = [...visible].sort((a, b) => b.price - a.price);
  if (sort === 'rating') visible = [...visible].sort((a, b) => b.rating - a.rating);
  if (sort === 'discount') {
    visible = [...visible].sort((a, b) => (
      (1 - b.price / b.originalPrice) - (1 - a.price / a.originalPrice)
    ));
  }

  $('#product-grid').innerHTML = visible.map(productCard).join('');
  $('#empty-state').hidden = visible.length > 0;
  $('#items-count').textContent = `${visible.length} ${visible.length === 1 ? 'item' : 'items'}`;
  $('#listing-title').textContent = state.category === 'Wishlist' ? 'Your wishlist' : state.category === 'All' ? 'Shop the collection' : `${state.category} collection`;
  $('#listing-subtitle').textContent = state.category === 'Wishlist' ? 'The pieces you saved for later.' : 'Clothing, watches and accessories chosen for everyday wear.';
  $$('.filter-chip, .nav-tab, .mobile-nav [data-category]').forEach((button) => {
    const selected = button.dataset.category === state.category;
    button.classList.toggle('is-selected', selected && button.classList.contains('filter-chip'));
    button.classList.toggle('is-active', selected && button.classList.contains('nav-tab'));
    button.setAttribute('aria-pressed', String(selected));
  });
  $('#wishlist-count').textContent = state.favorites.size;
  $('#mobile-filter-toggle').setAttribute('aria-expanded', String($('#filters').classList.contains('is-open')));
}

function productCard(product) {
  const favorite = state.favorites.has(product.id);
  const discount = Math.max(0, Math.round((1 - product.price / product.originalPrice) * 100));
  const productHref = productDetailHref(product);
  return `
    <article class="product-card">
      <div class="product-image">
        <a class="product-photo-link" href="${escapeHtml(productHref)}" aria-label="View ${escapeHtml(product.name)} details">
          <img src="${product.image}" alt="${escapeHtml(product.alt)}" loading="lazy">
        </a>
        <div class="product-badges">
          ${product.tag ? `<span class="product-badge">${escapeHtml(product.tag)}</span>` : ''}
          ${discount ? `<span class="product-discount-badge">${discount}% off</span>` : ''}
        </div>
        <button class="favorite-button${favorite ? ' is-favorite' : ''}" type="button" data-favorite="${product.id}" aria-label="${favorite ? 'Remove from' : 'Add to'} wishlist" aria-pressed="${favorite}">${favorite ? '♥' : '♡'}</button>
      </div>
      <div class="product-info">
        <div class="product-category-row"><span class="product-category">${escapeHtml(product.category)}</span><span class="product-brand">${escapeHtml(product.brand)}</span></div>
        <h3 class="product-name"><a href="${escapeHtml(productHref)}">${escapeHtml(product.name)}</a></h3>
        <div class="product-rating" aria-label="Rated ${product.rating.toFixed(1)} out of 5 from ${product.reviews} reviews"><span class="rating-star" aria-hidden="true">★</span><strong>${product.rating.toFixed(1)}</strong><span class="review-count">(${product.reviews.toLocaleString('en-IN')})</span></div>
        <p class="product-desc">${escapeHtml(product.description)}</p>
        <div class="price-line"><span class="price-current">${money(product.price)}</span><span class="price-original">${money(product.originalPrice)}</span></div>
        <p class="product-options">Sizes ${escapeHtml(product.sizes.join(' · '))}</p>
        <div class="product-card-actions"><button class="add-button" type="button" data-add="${product.id}">Add to bag <span aria-hidden="true">＋</span></button><a class="detail-button" href="${escapeHtml(productHref)}" aria-label="View ${escapeHtml(product.name)} details">↗</a></div>
      </div>
    </article>
  `;
}

function updateSuggestions() {
  const suggestions = $('#suggestions');
  const query = $('#global-search').value.trim().toLowerCase();
  if (query.length < 2) {
    suggestions.hidden = true;
    return;
  }
  const matches = products.filter((product) => `${product.name} ${product.category} ${product.brand}`.toLowerCase().includes(query)).slice(0, 5);
  suggestions.innerHTML = matches.length
    ? matches.map((product) => `<button type="button" data-suggestion="${product.id}"><span>${escapeHtml(product.name)}</span><small>${escapeHtml(product.category)} · ${money(product.price)}</small></button>`).join('')
    : '<p>No matching products yet.</p>';
  suggestions.hidden = false;
}

function addToCart(id, size, color) {
  const product = products.find((item) => item.id === id);
  if (!product) return;
  const selectedSize = size || product.sizes[0];
  const selectedColor = color || product.colors[0];
  const item = state.cart.find((entry) => entry.id === id && entry.size === selectedSize && entry.color === selectedColor);
  if (item) item.quantity += 1;
  else state.cart.push({ id, size: selectedSize, color: selectedColor, quantity: 1 });
  saveStorage('ar-shop-cart', state.cart);
  renderCart();
  showToast(`${product.name} added to your cart`);
}

function renderCart() {
  const count = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  $$('.cart-count').forEach((element) => { element.textContent = count; });
  $('.drawer-count').textContent = `(${count})`;
  $('#cart-items').innerHTML = state.cart.length
    ? state.cart.map((entry, index) => {
      const product = products.find((item) => item.id === entry.id);
      const unitPrice = getSizePrice(product, entry.size);
      return `
        <article class="cart-item">
          <img src="${product.image}" alt="${escapeHtml(product.alt)}">
          <div><h3 class="cart-item-name">${escapeHtml(product.name)}</h3><span class="cart-item-price">${money(unitPrice)}</span>
            <p class="cart-variant">${escapeHtml(entry.color)} · Size ${escapeHtml(entry.size)}</p>
            <div class="quantity-control"><button type="button" data-quantity="${index}" data-change="-1" aria-label="Decrease quantity">−</button><span>${entry.quantity}</span><button type="button" data-quantity="${index}" data-change="1" aria-label="Increase quantity">+</button></div>
          </div><button class="remove-item" type="button" data-remove="${index}">Remove</button>
          <span class="cart-item-total">Line total: ${money(unitPrice * entry.quantity)}</span>
        </article>`;
    }).join('')
    : '<div class="cart-empty"><span class="cart-empty-mark" aria-hidden="true">✳</span><h3>Your cart is waiting.</h3><p>Discover something you will love and make it yours.</p><button class="cart-continue-button" type="button" data-continue-shopping>Continue shopping <span aria-hidden="true">→</span></button></div>';

  const totals = getCartTotals();
  $('#cart-subtotal').textContent = money(totals.subtotal);
  $('#cart-discount').textContent = `−${money(totals.discount)}`;
  $('#cart-total').textContent = money(totals.total);
  $('#discount-row').hidden = totals.discount === 0;
  $('#checkout-button').disabled = count === 0;
}

function getCartTotals() {
  const subtotal = state.cart.reduce((sum, entry) => {
    const product = products.find((item) => item.id === entry.id);
    return sum + getSizePrice(product, entry.size) * entry.quantity;
  }, 0);
  const discount = state.couponApplied ? Math.round(subtotal * 0.1) : 0;
  return { subtotal, discount, total: subtotal - discount };
}

function openCart() {
  $('#cart-drawer').classList.add('is-open');
  $('#backdrop').classList.add('is-open');
  $('#cart-drawer').setAttribute('aria-hidden', 'false');
  document.body.classList.add('has-open-dialog');
  $('.close-drawer').focus();
}

function closeCart() {
  $('#cart-drawer').classList.remove('is-open');
  $('#backdrop').classList.remove('is-open');
  $('#cart-drawer').setAttribute('aria-hidden', 'true');
  document.body.classList.remove('has-open-dialog');
}

function setCheckoutStep(step) {
  $$('.checkout-step').forEach((section) => {
    section.hidden = section.dataset.checkoutStep !== step;
  });
  const stepOrder = ['details', 'payment', 'review', 'complete'];
  const activeIndex = stepOrder.indexOf(step);
  $$('[data-progress-step]').forEach((item) => {
    const itemIndex = stepOrder.indexOf(item.dataset.progressStep);
    item.classList.toggle('is-complete', itemIndex < activeIndex);
    if (itemIndex === activeIndex) item.setAttribute('aria-current', 'step');
    else item.removeAttribute('aria-current');
  });
  $('#checkout-title').textContent = step === 'complete' ? 'Order placed' : 'Checkout';
}

function renderCheckoutReview() {
  const address = state.checkoutAddress;
  const payment = getPaymentSelection();
  if (!address || !payment) return false;
  const totals = getCartTotals();
  const items = state.cart.map((entry) => {
    const product = products.find((item) => item.id === entry.id);
    const unitPrice = getSizePrice(product, entry.size);
    return `<li><span>${escapeHtml(product.name)} <small>${entry.quantity} × ${money(unitPrice)}</small></span><strong>${money(unitPrice * entry.quantity)}</strong></li>`;
  }).join('');

  $('#checkout-review').innerHTML = `
    <section class="checkout-review-block">
      <h4>Delivering to</h4>
      <p><strong>${escapeHtml(address.name)}</strong><br>${escapeHtml(address.street)}<br>${escapeHtml(address.city)}, ${escapeHtml(address.region)} ${escapeHtml(address.postal)}<br>${escapeHtml(address.email)} · ${escapeHtml(address.phone)}</p>
    </section>
    <section class="checkout-review-block">
      <h4>Items</h4>
      <ul class="checkout-review-items">${items}</ul>
    </section>
    <div class="checkout-review-totals">
      <div><span>Subtotal</span><span>${money(totals.subtotal)}</span></div>
      ${totals.discount ? `<div class="checkout-review-discount"><span>Coupon savings</span><span>−${money(totals.discount)}</span></div>` : ''}
      <div><span>Delivery</span><span>Free</span></div>
      <div class="checkout-review-grand-total"><strong>Total</strong><strong>${money(totals.total)}</strong></div>
      <div class="checkout-payment-summary"><strong>Payment method</strong><span>${escapeHtml(payment.label)}</span></div>
      <p>${escapeHtml(payment.status)}</p>
    </div>`;
  return true;
}

function getPaymentSelection() {
  const formData = new FormData($('#checkout-payment-form'));
  const mode = formData.get('payment-mode');
  if (mode === 'cod') {
    return { method: 'cod', label: 'Cash on delivery', status: 'Payment due on delivery · Demo only' };
  }
  if (mode === 'online') {
    const method = formData.get('online-payment');
    if (method === 'upi') {
      return { method: 'upi', label: 'UPI', status: 'Online payment not processed · Demo only' };
    }
    if (method === 'card') {
      return { method: 'card', label: 'Credit card', status: 'Card payment not processed · Secure provider required' };
    }
  }
  return null;
}

function updatePaymentOptions() {
  const form = $('#checkout-payment-form');
  const onlineSelected = form.querySelector('[name="payment-mode"]:checked')?.value === 'online';
  const onlineOptions = $('#online-payment-options');
  onlineOptions.hidden = !onlineSelected;
  onlineOptions.querySelectorAll('[name="online-payment"]').forEach((input) => {
    input.required = onlineSelected;
    if (!onlineSelected) input.checked = false;
  });

  const selectedMethod = form.querySelector('[name="online-payment"]:checked')?.value;
  const securityNote = $('#payment-security-note');
  securityNote.textContent = selectedMethod === 'card'
    ? 'Credit card selected. This demo cannot safely collect card or bank details. Never enter card numbers, CVV, PINs, passwords, or bank credentials here; a secure payment-provider checkout must be connected.'
    : 'This demo does not process payments. Never enter card numbers, CVV, PINs, passwords, or bank credentials here. A secure payment-provider checkout must be connected to accept payment.';
}

function openCheckout() {
  if (!state.cart.length) return;
  closeCart();
  state.checkoutAddress = null;
  $('#checkout-address-form').reset();
  $('#checkout-payment-form').reset();
  $('#payment-validation-message').hidden = true;
  updatePaymentOptions();
  setCheckoutStep('details');
  $('#checkout-dialog').showModal();
  document.body.classList.add('has-open-dialog');
  $('#checkout-address-form').elements.name.focus();
}

function updateAccountControl() {
  const accountButton = $('#account-button');
  let authenticated = false;
  try {
    authenticated = sessionStorage.getItem('ar-market-authenticated') === 'true';
  } catch {
    authenticated = false;
  }
  accountButton.textContent = authenticated ? 'Sign out' : 'Sign in';
  accountButton.dataset.authenticated = String(authenticated);
}

function placeDemoOrder() {
  if (!state.cart.length) return;
  if (!state.checkoutAddress) {
    setCheckoutStep('details');
    $('#checkout-address-form').elements.name.focus();
    return;
  }
  const payment = getPaymentSelection();
  if (!payment) {
    setCheckoutStep('payment');
    $('#payment-validation-message').hidden = false;
    $('#payment-validation-message').textContent = 'Choose cash on delivery or online payment, then select an online method if needed.';
    $('#checkout-payment-form').querySelector('[name="payment-mode"]').focus();
    return;
  }
  const totals = getCartTotals();
  const orderId = `AR-${Date.now().toString(36).toUpperCase()}`;
  const placedAt = new Date().toISOString();
  const order = {
    id: orderId,
    placedAt,
    status: 'Demo order placed',
    subtotal: totals.subtotal,
    discount: totals.discount,
    total: totals.total,
    payment: { method: payment.method, status: payment.status },
    tracking: {
      number: `ARTRK-${orderId.slice(3)}`,
      events: [
        { label: 'Order placed', at: placedAt },
        { label: 'Preparing order', at: null },
        { label: 'Handed to carrier', at: null },
        { label: 'Out for delivery', at: null },
        { label: 'Delivered', at: null }
      ]
    },
    items: state.cart.map((entry) => {
      const product = products.find((item) => item.id === entry.id);
      return {
        id: product.id,
        name: product.name,
        brand: product.brand,
        category: product.category,
        description: product.description,
        image: product.galleryImages && product.galleryImages.length ? product.galleryImages[0].src : product.image,
        size: entry.size,
        color: entry.color,
        quantity: entry.quantity,
        unitPrice: getSizePrice(product, entry.size)
      };
    })
  };

  if (!persistDemoOrder(order)) return;

  $('#checkout-order-error').hidden = true;
  $('#checkout-confirmation').innerHTML = `Demo order <strong>${orderId}</strong> has been recorded for <strong>${money(totals.total)}</strong>. ${escapeHtml(payment.status)}.`;
  state.cart = [];
  state.couponApplied = false;
  saveStorage('ar-shop-cart', state.cart);
  renderCart();
  setCheckoutStep('complete');
}

function persistDemoOrder(order) {
  try {
    const savedOrders = localStorage.getItem('ar-shop-orders');
    const orders = savedOrders ? JSON.parse(savedOrders) : [];
    if (!Array.isArray(orders)) throw new Error('Saved order history is invalid.');
    orders.unshift(order);
    localStorage.setItem('ar-shop-orders', JSON.stringify(orders));
    return true;
  } catch {
    $('#checkout-order-error').hidden = false;
    $('#checkout-order-error').textContent = 'This demo order could not be saved in your browser. Your cart is unchanged; please try again.';
    return false;
  }
}

function toggleFavorite(id) {
  if (state.favorites.has(id)) state.favorites.delete(id);
  else state.favorites.add(id);
  saveStorage('ar-shop-favorites', [...state.favorites]);
  renderProducts();
  showToast(state.favorites.has(id) ? 'Saved to your wishlist' : 'Removed from your wishlist');
}

function setCategory(category) {
  state.category = categories.includes(category) ? category : 'All';
  $('#filters').classList.remove('is-open');
  $('#mobile-filter-toggle').setAttribute('aria-expanded', 'false');
  renderProducts();
  $('#shop').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

document.addEventListener('click', (event) => {
  if (event.target.closest('#empty-state-reset')) {
    state.query = '';
    state.category = 'All';
    $('#global-search').value = '';
    renderProducts();
    return;
  }
  const categoryButton = event.target.closest('[data-category]');
  if (categoryButton) {
    setCategory(categoryButton.dataset.category);
    return;
  }
  if (event.target.closest('#shop-now')) {
    setCategory('All');
    return;
  }
  if (event.target.closest('#wishlist-open')) {
    setCategory('Wishlist');
    return;
  }
  const suggestion = event.target.closest('[data-suggestion]');
  if (suggestion) {
    const product = products.find((item) => item.id === suggestion.dataset.suggestion);
    if (product) {
      $('#global-search').value = product.name;
      state.query = product.name;
      $('#suggestions').hidden = true;
      setCategory(product.category);
    }
    return;
  }
  const addButton = event.target.closest('[data-add]');
  if (addButton) addToCart(addButton.dataset.add);
  const favoriteButton = event.target.closest('[data-favorite]');
  if (favoriteButton) toggleFavorite(favoriteButton.dataset.favorite);
  if (event.target.closest('[data-continue-shopping]')) {
    closeCart();
    $('#shop').scrollIntoView({ behavior: 'smooth', block: 'start' });
    return;
  }
  const removeButton = event.target.closest('[data-remove]');
  if (removeButton) {
    state.cart.splice(Number(removeButton.dataset.remove), 1);
    saveStorage('ar-shop-cart', state.cart);
    renderCart();
  }
  const quantityButton = event.target.closest('[data-quantity]');
  if (quantityButton) {
    const item = state.cart[Number(quantityButton.dataset.quantity)];
    item.quantity += Number(quantityButton.dataset.change);
    state.cart = state.cart.filter((entry) => entry.quantity > 0);
    saveStorage('ar-shop-cart', state.cart);
    renderCart();
  }
  if (event.target.closest('#cart-open, #mobile-cart-open')) openCart();
  if (event.target.closest('#account-button')) {
    if (event.target.closest('#account-button').dataset.authenticated === 'true') {
      try {
        sessionStorage.removeItem('ar-market-authenticated');
      } catch {
        showToast('Your browser could not end the sign-in session.');
        return;
      }
      window.location.assign('login.html');
    } else {
      window.location.assign('login.html');
    }
  }
  if (event.target.closest('.close-drawer, #backdrop')) closeCart();
  const notice = event.target.closest('[data-notice]');
  if (notice) showToast(notice.dataset.notice);
});

$('#search-form').addEventListener('submit', (event) => {
  event.preventDefault();
  state.query = $('#global-search').value.trim();
  $('#suggestions').hidden = true;
  const query = state.query.toLowerCase();
  const firstMatch = products.find((product) => `${product.name} ${product.category} ${product.brand} ${product.description}`.toLowerCase().includes(query));
  if (query && firstMatch) state.category = 'All';
  renderProducts();
  $('#shop').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

$('#global-search').addEventListener('input', () => {
  state.query = $('#global-search').value;
  updateSuggestions();
  renderProducts();
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.search-bar')) $('#suggestions').hidden = true;
});

$('#sort-products').addEventListener('change', renderProducts);
$('#mobile-filter-toggle').addEventListener('click', () => {
  const filters = $('#filters');
  const isOpen = filters.classList.toggle('is-open');
  $('#mobile-filter-toggle').setAttribute('aria-expanded', String(isOpen));
});
$('#coupon-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const code = $('#coupon').value.trim().toUpperCase();
  if (code === 'ARSTYLE10' && state.cart.length) {
    state.couponApplied = true;
    $('#coupon-message').textContent = 'ARSTYLE10 applied — 10% off items.';
    $('#coupon-message').style.color = '#23805c';
    renderCart();
  } else {
    $('#coupon-message').textContent = state.cart.length ? 'That code is not available in this demo.' : 'Add an item before applying a code.';
    $('#coupon-message').style.color = '#a64c45';
  }
});

$('#checkout-button').addEventListener('click', openCheckout);
$('#checkout-address-form').addEventListener('submit', (event) => {
  event.preventDefault();
  state.checkoutAddress = Object.fromEntries(new FormData(event.currentTarget).entries());
  setCheckoutStep('payment');
  $('#checkout-payment-form').querySelector('[name="payment-mode"]').focus();
});
$('#checkout-payment-form').addEventListener('change', (event) => {
  if (event.target.matches('[name="payment-mode"]')) {
    $('#payment-validation-message').hidden = true;
    updatePaymentOptions();
  }
  if (event.target.matches('[name="online-payment"]')) updatePaymentOptions();
});
$('#checkout-payment-form').addEventListener('submit', (event) => {
  event.preventDefault();
  $('#payment-validation-message').hidden = true;
  if (!renderCheckoutReview()) {
    $('#payment-validation-message').hidden = false;
    $('#payment-validation-message').textContent = 'Choose a payment option before reviewing the order.';
    return;
  }
  setCheckoutStep('review');
});
$('#payment-back').addEventListener('click', () => setCheckoutStep('details'));
$('#checkout-back').addEventListener('click', () => setCheckoutStep('payment'));
$('#checkout-place').addEventListener('click', placeDemoOrder);
$('#checkout-close').addEventListener('click', () => $('#checkout-dialog').close());
$('#checkout-done').addEventListener('click', () => $('#checkout-dialog').close());
$('#checkout-dialog').addEventListener('close', () => {
  if ($('#checkout-dialog').open) return;
  document.body.classList.remove('has-open-dialog');
  setCheckoutStep('details');
});

$('#newsletter-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const input = $('#email');
  $('#form-message').textContent = `Thanks — ${input.value.trim()} has been added for this demo.`;
  input.value = '';
});

$('.close-drawer').addEventListener('click', closeCart);
$('#backdrop').addEventListener('click', closeCart);
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeCart();
});

renderProducts();
renderCart();
updateAccountControl();
