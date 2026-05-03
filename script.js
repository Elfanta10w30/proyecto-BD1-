/* ============================================================
   DELIVERY BARRANQUITAS — script.js
   Handles: menu data, cart, auth, coupon, tracking, reviews
============================================================ */

// ===== MENU DATA =====
const MENU_ITEMS = [
  { id:1,  name:'Burger Clásica',        desc:'Carne de res, lechuga, tomate, cebolla y salsa especial',  price:8.99,  cat:'burger',   emoji:'🍔', bg:'bg-burger',  rating:4.8, time:'15-20 min', popular:true  },
  { id:2,  name:'Burger Doble BBQ',       desc:'Doble carne, queso cheddar, tocineta y salsa BBQ',         price:11.99, cat:'burger',   emoji:'🍔', bg:'bg-burger',  rating:4.9, time:'15-20 min', popular:true, offer:true },
  { id:3,  name:'Chicken Burger',         desc:'Pollo crujiente, lechuga, mayo de ajo y pepinillo',        price:9.49,  cat:'burger',   emoji:'🍔', bg:'bg-burger',  rating:4.7, time:'15-20 min' },
  { id:4,  name:'Pizza Margherita',       desc:'Salsa de tomate, mozzarella y albahaca fresca',            price:12.99, cat:'pizza',    emoji:'🍕', bg:'bg-pizza',   rating:4.9, time:'20-25 min', popular:true },
  { id:5,  name:'Pizza Pepperoni',        desc:'Salsa de tomate, mozzarella y pepperoni premium',          price:13.99, cat:'pizza',    emoji:'🍕', bg:'bg-pizza',   rating:4.8, time:'20-25 min' },
  { id:6,  name:'Pizza BBQ Chicken',      desc:'Pollo a la parrilla, salsa BBQ, cebolla morada y cilantro',price:14.49, cat:'pizza',    emoji:'🍕', bg:'bg-pizza',   rating:4.7, time:'20-25 min', isNew:true },
  { id:7,  name:'Pollo a la Parrilla',    desc:'Pechuga marinada a la parrilla con chimichurri',           price:10.99, cat:'chicken',  emoji:'🍗', bg:'bg-chicken', rating:4.8, time:'20-25 min', popular:true },
  { id:8,  name:'Nuggets (12 piezas)',    desc:'Nuggets crujientes de pollo con salsa a escoger',          price:8.49,  cat:'chicken',  emoji:'🍗', bg:'bg-chicken', rating:4.6, time:'15-20 min' },
  { id:9,  name:'Arroz con Pollo',        desc:'Arroz amarillo con pollo guisado al estilo puertorriqueño', price:9.99,  cat:'rice',     emoji:'🍚', bg:'bg-rice',    rating:4.9, time:'20-25 min', popular:true },
  { id:10, name:'Arroz con Gandules',     desc:'Arroz con gandules, sofrito y sazón casero',               price:7.99,  cat:'rice',     emoji:'🍚', bg:'bg-rice',    rating:4.8, time:'15-20 min' },
  { id:11, name:'Mofongo con Camarones',  desc:'Mofongo de plátano verde con camarones al ajillo',         price:13.99, cat:'rice',     emoji:'🍚', bg:'bg-seafood', rating:4.9, time:'25-30 min', popular:true },
  { id:12, name:'Ensalada César',         desc:'Lechuga romana, crutones, parmesano y aderezo César',      price:7.49,  cat:'salad',    emoji:'🥗', bg:'bg-salad',   rating:4.5, time:'10-15 min' },
  { id:13, name:'Ensalada Tropical',      desc:'Mixta con mango, aguacate, fresas y vinagreta de limón',   price:8.49,  cat:'salad',    emoji:'🥗', bg:'bg-salad',   rating:4.7, time:'10-15 min', isNew:true },
  { id:14, name:'Sándwich Club',          desc:'Pollo, tocineta, lechuga, tomate y mayo en pan tostado',   price:8.99,  cat:'sandwich', emoji:'🥪', bg:'bg-sandwich',rating:4.6, time:'15-20 min' },
  { id:15, name:'Sándwich de Pernil',     desc:'Pernil jugoso, amarillos fritos y mayoketchup casero',     price:9.49,  cat:'sandwich', emoji:'🥪', bg:'bg-sandwich',rating:4.8, time:'15-20 min', popular:true },
  { id:16, name:'Flan de Queso',          desc:'Flan cremoso de queso con caramelo artesanal',             price:4.49,  cat:'dessert',  emoji:'🍰', bg:'bg-dessert', rating:4.9, time:'5 min' },
  { id:17, name:'Tembleque',              desc:'Postre de coco tradicional puertorriqueño',                price:3.99,  cat:'dessert',  emoji:'🍰', bg:'bg-dessert', rating:4.8, time:'5 min' },
  { id:18, name:'Churros con Chocolate',  desc:'Churros crujientes con dip de chocolate caliente',         price:5.49,  cat:'dessert',  emoji:'🍰', bg:'bg-dessert', rating:4.7, time:'10 min', isNew:true },
  { id:19, name:'Malta',                  desc:'Malta fría, la bebida clásica de PR',                     price:2.49,  cat:'drink',    emoji:'🥤', bg:'bg-drink',   rating:4.7, time:'2 min' },
  { id:20, name:'Jugo de China',          desc:'Jugo de naranja natural recién exprimido',                 price:3.49,  cat:'drink',    emoji:'🥤', bg:'bg-drink',   rating:4.8, time:'5 min' },
  { id:21, name:'Refresco',               desc:'Pepsi, Coca-Cola, 7UP o agua (16oz)',                     price:1.99,  cat:'drink',    emoji:'🥤', bg:'bg-drink',   rating:4.5, time:'2 min' },
  { id:22, name:'Batido de Chinola',      desc:'Batido fresco de parcha (maracuyá) con leche',            price:4.49,  cat:'drink',    emoji:'🥤', bg:'bg-drink',   rating:4.9, time:'5 min', isNew:true },
];

// ===== COUPONS =====
const COUPONS = {
  'BARRANQUITAS10': { type:'percent', value:10, label:'10% de descuento' },
  'CIELO5':         { type:'fixed',   value:5,  label:'$5.00 de descuento' },
  'ENVIOGRATIS':    { type:'shipping',value:0,  label:'Envío gratis' },
};

// ===== LANGUAGE =====
const I18N_ES_TO_EN = {
  'Inicio': 'Home',
  'Menú': 'Menu',
  'Carrito': 'Cart',
  'Envíos': 'Delivery',
  'Envios': 'Delivery',
  'Perfil': 'Profile',
  'Configuración': 'Settings',
  'Cambiar tema': 'Change theme',
  'Cerrar': 'Close',
  'Modo oscuro': 'Dark mode',
  'Notificaciones': 'Notifications',
  'Idioma': 'Language',
  'Vaciar carrito': 'Empty cart',
  'Mi cuenta': 'My account',
  'Acerca de': 'About',
  'Configuracion avanzada': 'Advanced settings',
  'Categorías': 'Categories',
  'Ver todo': 'See all',
  'Ver todas': 'See all',
  'Todo': 'All',
  'Pollo': 'Chicken',
  'Arroz': 'Rice',
  'Ensaladas': 'Salads',
  'Postres': 'Desserts',
  'Bebidas': 'Drinks',
  'Tu comida favorita,': 'Your favorite food,',
  'en minutos 🚀': 'in minutes 🚀',
  'Entrega rápida directamente a tu puerta': 'Fast delivery directly to your door',
  'Ver menú →': 'View menu →',
  '🔥 Ofertas del día': '🔥 Deals of the day',
  'Promo especial': 'Special deal',
  'Fin de semana': 'Weekend deal',
  'Cupón activo': 'Active coupon',
  'Hoy gratis': 'Free today',
  'Envío gratis hoy': 'Free delivery today',
  '🍽️ Menú popular': '🍽️ Popular menu',
  '🏪 El Restaurante': '🏪 The Restaurant',
  'Info de envíos': 'Delivery info',
  '💬 Reseñas': '💬 Reviews',
  'Tu carrito está vacío': 'Your cart is empty',
  'Agrega algo delicioso del menú': 'Add something delicious from the menu',
  'Ver menú': 'View menu',
  'Aplicar': 'Apply',
  'Subtotal': 'Subtotal',
  'Envío': 'Delivery',
  'Total': 'Total',
  'Confirmar pedido': 'Confirm order',
  'Iniciar sesión': 'Sign in',
  'Crear cuenta': 'Create account',
  'Configuraciones': 'Settings',
  'Personaliza tu experiencia en la app': 'Customize your app experience',
  'Preferencias generales': 'General preferences',
  'Tema': 'Theme',
  'Guardar configuracion': 'Save settings',
  'Restablecer por defecto': 'Reset to defaults',
  'Acciones rapidas': 'Quick actions',
  'Volver al inicio': 'Back to home',
  'Espanol': 'Spanish',
  'Activadas': 'Enabled',
  'Desactivadas': 'Disabled',
  'Claro': 'Light',
  'Oscuro': 'Dark',
  'Nuestro Menú': 'Our Menu',
  'Los mejores platos de Barranquitas': 'The best dishes in Barranquitas',
  'No encontramos resultados': 'No results found',
  'Intenta con otra búsqueda o categoría': 'Try another search or category',
};

const I18N_NODE_BASE = new WeakMap();

const I18N_PLACEHOLDERS_ES_TO_EN = {
  'Buscar comida, restaurantes…': 'Search food, restaurants...',
  'Buscar en el menú…': 'Search in the menu...',
  'Ingresa tu cupón…': 'Enter your coupon...',
  'Tu nombre': 'Your name',
  'Calle, número, sector…': 'Street, number, area...',
  'Sin cebolla, extra salsa…': 'No onion, extra sauce...',
  'Nombre (opcional)': 'Name (optional)',
  '¿Cómo fue tu experiencia?': 'How was your experience?',
  'tu@correo.com': 'you@email.com',
  'Mínimo 6 caracteres': 'Minimum 6 characters',
};

const I18N_TITLES_ES_TO_EN = {
  'Delivery Barranquitas – Comida a tu puerta': 'Delivery Barranquitas - Food to your door',
  'Configuraciones - Delivery Barranquitas': 'Settings - Delivery Barranquitas',
  'Menú – Delivery Barranquitas': 'Menu - Delivery Barranquitas',
  'Mi Carrito – Delivery Barranquitas': 'My Cart - Delivery Barranquitas',
  'Mi Perfil – Delivery Barranquitas': 'My Profile - Delivery Barranquitas',
  'Envíos – Delivery Barranquitas': 'Delivery - Delivery Barranquitas',
  'Iniciar sesión – Delivery Barranquitas': 'Sign in - Delivery Barranquitas',
};

function currentLang() {
  return localStorage.getItem('db_lang') || 'es';
}

function t(esText, enText) {
  return currentLang() === 'en' ? enText : esText;
}

function applyLanguage() {
  const lang = currentLang();
  document.documentElement.lang = lang;

  if (!document.documentElement.dataset.i18nTitleBase) {
    document.documentElement.dataset.i18nTitleBase = document.title;
  }
  const baseTitle = document.documentElement.dataset.i18nTitleBase;
  if (lang === 'en' && I18N_TITLES_ES_TO_EN[baseTitle]) {
    document.title = I18N_TITLES_ES_TO_EN[baseTitle];
  } else if (lang === 'es') {
    document.title = baseTitle;
  }

  // Translate direct text nodes, including nodes next to child elements/icons
  document.querySelectorAll('body *').forEach(el => {
    if (['SCRIPT', 'STYLE'].includes(el.tagName)) return;
    el.childNodes.forEach(node => {
      if (node.nodeType !== Node.TEXT_NODE) return;
      const current = node.nodeValue || '';
      if (!current.trim()) return;

      if (!I18N_NODE_BASE.has(node)) I18N_NODE_BASE.set(node, current);
      const base = I18N_NODE_BASE.get(node) || current;
      const trimmed = base.trim();
      const leading = base.match(/^\s*/)?.[0] || '';
      const trailing = base.match(/\s*$/)?.[0] || '';

      if (lang === 'en' && I18N_ES_TO_EN[trimmed]) {
        node.nodeValue = `${leading}${I18N_ES_TO_EN[trimmed]}${trailing}`;
      } else if (lang === 'es') {
        node.nodeValue = base;
      }
    });
  });

  document.querySelectorAll('[placeholder]').forEach(el => {
    const base = el.dataset.i18nPlaceholderBase || el.getAttribute('placeholder') || '';
    if (!el.dataset.i18nPlaceholderBase) el.dataset.i18nPlaceholderBase = base;
    if (lang === 'en' && I18N_PLACEHOLDERS_ES_TO_EN[base]) {
      el.setAttribute('placeholder', I18N_PLACEHOLDERS_ES_TO_EN[base]);
    } else if (lang === 'es') {
      el.setAttribute('placeholder', base);
    }
  });

  document.querySelectorAll('[title]').forEach(el => {
    const base = el.dataset.i18nTitleBase || el.getAttribute('title') || '';
    if (!el.dataset.i18nTitleBase) el.dataset.i18nTitleBase = base;
    if (lang === 'en' && I18N_ES_TO_EN[base]) {
      el.setAttribute('title', I18N_ES_TO_EN[base]);
    } else if (lang === 'es') {
      el.setAttribute('title', base);
    }
  });

  const modalLang = document.getElementById('langSelect');
  if (modalLang) modalLang.value = lang;
  const cfgLang = document.getElementById('cfgLang');
  if (cfgLang) cfgLang.value = lang;
}

// ===== CART =====
let cart = JSON.parse(localStorage.getItem('dbCart') || '[]');
let appliedCoupon = null;
const SHIPPING = 2.00;

function saveCart() {
  localStorage.setItem('dbCart', JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(itemId) {
  const item = MENU_ITEMS.find(i => i.id === itemId);
  if (!item) return;
  const existing = cart.find(c => c.id === itemId);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ id: item.id, name: item.name, price: item.price, emoji: item.emoji, bg: item.bg, qty: 1 });
  }
  saveCart();
  showToast(`🛒 ${item.name} agregado`, 'success');
  updateCartBadge();
}

function removeFromCart(itemId) {
  cart = cart.filter(c => c.id !== itemId);
  saveCart();
  renderCart();
}

function changeQty(itemId, delta) {
  const item = cart.find(c => c.id === itemId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(c => c.id !== itemId);
  }
  saveCart();
  renderCart();
}

function getCartTotal() {
  return cart.reduce((sum, i) => sum + i.price * i.qty, 0);
}

function getCartCount() {
  return cart.reduce((sum, i) => sum + i.qty, 0);
}

// ===== BADGE =====
function updateCartBadge() {
  const count = getCartCount();
  document.querySelectorAll('#cartBadge').forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  });
  // bottom nav cart dot
  const navCart = document.getElementById('navCartLink');
  if (navCart) {
    let dot = navCart.querySelector('.cart-dot');
    if (count > 0 && !dot) {
      dot = document.createElement('span');
      dot.className = 'cart-dot';
      navCart.appendChild(dot);
    } else if (count === 0 && dot) {
      dot.remove();
    }
  }
}

// ===== TOAST =====
function showToast(msg, type = '') {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.textContent = msg;
  container.appendChild(t);
  setTimeout(() => t.remove(), 3000);
}

// ===== RENDER MENU CARD =====
function renderMenuCard(item) {
  const en = currentLang() === 'en';
  const badges = [
    item.popular ? '<span class="badge-popular">Popular</span>' : '',
    item.isNew   ? `<span class="badge-new">${en ? 'New' : 'Nuevo'}</span>` : '',
    item.offer   ? `<span class="badge-offer">${en ? 'Deal' : 'Oferta'}</span>` : '',
  ].filter(Boolean).join('');

  const stars = '⭐'.repeat(Math.round(item.rating));

  return `
    <div class="menu-card" data-cat="${item.cat}" data-name="${item.name.toLowerCase()}">
      <div class="menu-card-img ${item.bg}">
        <div class="card-badges">${badges}</div>
        <span>${item.emoji}</span>
        <button class="btn-add-float" onclick="addToCart(${item.id})" title="${en ? 'Add to cart' : 'Agregar al carrito'}">+</button>
      </div>
      <div class="menu-card-body">
        <div class="menu-card-name">${item.name}</div>
        <div class="menu-card-desc">${item.desc}</div>
        <div class="menu-card-meta">
          <div>
            <div class="menu-card-rating"><span class="star-icon">⭐</span>${item.rating} · ${item.time}</div>
          </div>
          <div class="menu-card-price">$${item.price.toFixed(2)}</div>
        </div>
      </div>
    </div>`;
}

// ===== FILTER HELPERS =====
function applyFilter(gridId, cat, search) {
  const grid = document.getElementById(gridId);
  if (!grid) return;
  const noResults = document.getElementById('noResults');
  const resultInfo = document.getElementById('menuResultInfo');
  let items = MENU_ITEMS;
  if (cat && cat !== 'all') items = items.filter(i => i.cat === cat);
  if (search) {
    const q = search.toLowerCase();
    items = items.filter(i => i.name.toLowerCase().includes(q) || i.desc.toLowerCase().includes(q));
  }
  grid.innerHTML = items.map(renderMenuCard).join('');
  if (noResults) noResults.style.display = items.length === 0 ? 'block' : 'none';
  if (resultInfo) resultInfo.textContent = items.length > 0
    ? `${items.length} ${currentLang() === 'en' ? 'results' : 'resultados'}`
    : '';
  updateCartBadge();
  applyLanguage();
}

// ===== HOME PAGE =====
let homeCat = 'all';
function filterHome(cat, el) {
  homeCat = cat;
  document.querySelectorAll('#homeCats .cat-chip').forEach(c => c.classList.remove('active'));
  if (el) el.classList.add('active');
  const title = document.getElementById('menuSectionTitle');
  const labels = currentLang() === 'en'
    ? { all:'🍽️ Popular menu', burger:'🍔 Burgers', pizza:'🍕 Pizzas', chicken:'🍗 Chicken', rice:'🍚 Rice bowls', salad:'🥗 Salads', dessert:'🍰 Desserts', drink:'🥤 Drinks' }
    : { all:'🍽️ Menú popular', burger:'🍔 Burgers', pizza:'🍕 Pizzas', chicken:'🍗 Pollo', rice:'🍚 Arroces', salad:'🥗 Ensaladas', dessert:'🍰 Postres', drink:'🥤 Bebidas' };
  if (title) title.textContent = labels[cat] || (currentLang() === 'en' ? '🍽️ Menu' : '🍽️ Menú');
  applyFilter('homeMenuGrid', cat, '');
}

// ===== MENU PAGE =====
let menuCat = 'all';
let menuSearch = '';
function filterMenu(cat, el) {
  menuCat = cat;
  document.querySelectorAll('#menuCats .cat-chip').forEach(c => c.classList.remove('active'));
  if (el) el.classList.add('active');
  applyFilter('menuGrid', menuCat, menuSearch);
}

// ===== CART PAGE =====
function renderCart() {
  const itemsEl = document.getElementById('cartItems');
  const emptyEl = document.getElementById('cartEmpty');
  const checkoutEl = document.getElementById('cartCheckout');
  const countLabel = document.getElementById('cartItemCountLabel');
  if (!itemsEl) return;

  if (cart.length === 0) {
    itemsEl.innerHTML = '';
    if (emptyEl) emptyEl.style.display = 'block';
    if (checkoutEl) checkoutEl.style.display = 'none';
    if (countLabel) countLabel.textContent = '0 artículos';
    return;
  }

  if (emptyEl) emptyEl.style.display = 'none';
  if (checkoutEl) checkoutEl.style.display = 'block';
  if (countLabel) countLabel.textContent = `${getCartCount()} artículo${getCartCount() !== 1 ? 's' : ''}`;

  itemsEl.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-img ${item.bg || ''}">${item.emoji}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">$${item.price.toFixed(2)} c/u</div>
      </div>
      <div class="cart-item-right">
        <button class="cart-item-remove" onclick="removeFromCart(${item.id})">✕</button>
        <div class="qty-ctrl">
          <button onclick="changeQty(${item.id}, -1)">−</button>
          <span class="qty-num">${item.qty}</span>
          <button onclick="changeQty(${item.id}, +1)">+</button>
        </div>
        <div class="cart-item-total">$${(item.price * item.qty).toFixed(2)}</div>
      </div>
    </div>`).join('');

  renderSummary();
  updateCartBadge();

  // Apply pending coupon from promo click
  const pending = localStorage.getItem('pendingCoupon');
  if (pending) {
    localStorage.removeItem('pendingCoupon');
    const inp = document.getElementById('couponInput');
    if (inp) { inp.value = pending; applyCoupon(); }
  }
}

function renderSummary() {
  const subtotal = getCartTotal();
  let discount = 0;
  let shipping = SHIPPING;

  if (appliedCoupon) {
    const c = COUPONS[appliedCoupon];
    if (c.type === 'percent')  discount = subtotal * c.value / 100;
    if (c.type === 'fixed')    discount = Math.min(c.value, subtotal);
    if (c.type === 'shipping') shipping = 0;
  }

  const total = subtotal + shipping - discount;

  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set('sumSubtotal', `$${subtotal.toFixed(2)}`);
  set('sumEnvio', shipping === 0 ? 'Gratis 🎉' : `$${shipping.toFixed(2)}`);
  set('sumTotal', `$${total.toFixed(2)}`);

  const discRow = document.getElementById('discountRow');
  if (discRow) {
    discRow.style.display = discount > 0 ? 'flex' : 'none';
    set('sumDescuento', `-$${discount.toFixed(2)}`);
  }
}

// ===== COUPON =====
function applyCoupon() {
  const inp = document.getElementById('couponInput');
  const msg = document.getElementById('couponMsg');
  if (!inp || !msg) return;
  const code = inp.value.trim().toUpperCase();
  if (COUPONS[code]) {
    appliedCoupon = code;
    msg.className = 'coupon-msg ok';
    msg.textContent = `✅ Cupón aplicado: ${COUPONS[code].label}`;
    renderSummary();
  } else {
    msg.className = 'coupon-msg err';
    msg.textContent = '❌ Cupón inválido';
    appliedCoupon = null;
    renderSummary();
  }
}

// ===== ORDER SUBMIT =====
function submitOrder() {
  const name    = (document.getElementById('orderName')    || {}).value || '';
  const phone   = (document.getElementById('orderPhone')   || {}).value || '';
  const address = (document.getElementById('orderAddress') || {}).value || '';

  if (!name.trim() || !phone.trim() || !address.trim()) {
    showToast('⚠️ Por favor completa todos los campos', 'error');
    return;
  }
  if (cart.length === 0) {
    showToast('⚠️ Tu carrito está vacío', 'error');
    return;
  }

  const btn = document.getElementById('orderBtn');
  if (btn) { btn.disabled = true; btn.textContent = '⏳ Enviando pedido…'; }

  setTimeout(() => {
    showToast('🎉 ¡Pedido confirmado!', 'success');
    startTracking();
    localStorage.setItem('dbOrderCount', (parseInt(localStorage.getItem('dbOrderCount') || '0') + 1).toString());
    cart = [];
    saveCart();
    if (btn) { btn.disabled = false; btn.textContent = 'Confirmar pedido'; }
  }, 1200);
}

// ===== WHATSAPP =====
function sendWhatsApp() {
  if (cart.length === 0) { showToast('⚠️ Tu carrito está vacío', 'error'); return; }
  const name    = (document.getElementById('orderName')    || {}).value || 'Cliente';
  const address = (document.getElementById('orderAddress') || {}).value || 'No especificada';
  const payment = (document.getElementById('orderPayment') || {}).value || 'efectivo';
  const notes   = (document.getElementById('orderNotes')   || {}).value || '';

  const subtotal = getCartTotal();
  let shipping = SHIPPING, discount = 0;
  if (appliedCoupon) {
    const c = COUPONS[appliedCoupon];
    if (c.type === 'percent')  discount = subtotal * c.value / 100;
    if (c.type === 'fixed')    discount = Math.min(c.value, subtotal);
    if (c.type === 'shipping') shipping = 0;
  }
  const total = subtotal + shipping - discount;

  const lines = cart.map(i => `  • ${i.name} x${i.qty} = $${(i.price * i.qty).toFixed(2)}`).join('\n');
  const msg = [
    '🍔 *NUEVO PEDIDO – Delivery Barranquitas*',
    '',
    `👤 Cliente: ${name}`,
    `📍 Dirección: ${address}`,
    `💳 Pago: ${payment}`,
    notes ? `📝 Notas: ${notes}` : '',
    '',
    '*Artículos:*',
    lines,
    '',
    `Subtotal: $${subtotal.toFixed(2)}`,
    `Envío: ${shipping === 0 ? 'Gratis' : '$'+shipping.toFixed(2)}`,
    discount > 0 ? `Descuento: -$${discount.toFixed(2)}` : '',
    `*Total: $${total.toFixed(2)}*`,
  ].filter(l => l !== '').join('\n');

  window.open(`https://wa.me/17871234567?text=${encodeURIComponent(msg)}`, '_blank');
}

// ===== ORDER TRACKING =====
function startTracking() {
  const card = document.getElementById('trackingCard');
  if (!card) return;
  card.style.display = 'block';
  card.scrollIntoView({ behavior: 'smooth', block: 'start' });

  const steps = ['step1', 'step2', 'step3', 'step4'];
  let current = 0;

  function advance() {
    if (current > 0) {
      const prev = document.getElementById(steps[current - 1]);
      if (prev) prev.classList.replace('active', 'done');
    }
    const curr = document.getElementById(steps[current]);
    if (curr) curr.classList.add('active');
    current++;
    if (current < steps.length) {
      setTimeout(advance, current === 1 ? 2000 : current === 2 ? 4000 : 5000);
    } else {
      const last = document.getElementById(steps[steps.length - 1]);
      if (last) { last.classList.remove('active'); last.classList.add('done'); }
      showToast('🏠 ¡Tu pedido fue entregado!', 'success');
    }
  }
  advance();
}

// ===== AUTH =====
function doLogin() {
  const email = (document.getElementById('loginEmail') || {}).value || '';
  const pass  = (document.getElementById('loginPassword') || {}).value || '';
  if (!email || !pass) { showToast('⚠️ Completa todos los campos', 'error'); return; }

  // Simple demo auth — in production use a real backend
  const users = JSON.parse(localStorage.getItem('dbUsers') || '[]');
  const user = users.find(u => u.email === email && u.password === pass);
  if (!user) { showToast('❌ Correo o contraseña incorrectos', 'error'); return; }

  localStorage.setItem('dbUser', JSON.stringify(user));
  showToast('✅ ¡Bienvenido, ' + user.name + '!', 'success');
  setTimeout(() => location.href = 'index.html', 800);
}

function doRegister() {
  const name  = (document.getElementById('regName')     || {}).value || '';
  const email = (document.getElementById('regEmail')    || {}).value || '';
  const pass  = (document.getElementById('regPassword') || {}).value || '';
  const role  = (document.getElementById('regRole')     || {}).value || 'cliente';

  if (!name || !email || !pass) { showToast('⚠️ Completa todos los campos', 'error'); return; }
  if (pass.length < 6) { showToast('⚠️ La contraseña debe tener al menos 6 caracteres', 'error'); return; }

  const users = JSON.parse(localStorage.getItem('dbUsers') || '[]');
  if (users.find(u => u.email === email)) { showToast('❌ Ese correo ya está registrado', 'error'); return; }

  const newUser = { name, email, password: pass, role };
  users.push(newUser);
  localStorage.setItem('dbUsers', JSON.stringify(users));
  localStorage.setItem('dbUser', JSON.stringify(newUser));
  showToast('🎉 Cuenta creada. ¡Bienvenido!', 'success');
  setTimeout(() => location.href = 'index.html', 800);
}

function guestLogin() {
  const guest = { name: 'Invitado', email: '', role: 'cliente' };
  localStorage.setItem('dbUser', JSON.stringify(guest));
  showToast('👤 Entrando como invitado…');
  setTimeout(() => location.href = 'index.html', 600);
}

function doLogout() {
  localStorage.removeItem('dbUser');
  showToast('👋 Sesión cerrada');
  setTimeout(() => location.href = 'index.html', 600);
}

// ===== PROFILE PAGE =====
function renderProfile() {
  const user = JSON.parse(localStorage.getItem('dbUser') || 'null');
  const avatarEl = document.getElementById('profileAvatar');
  const nameEl   = document.getElementById('profileName');
  const roleEl   = document.getElementById('profileRoleBadge');
  const emailEl  = document.getElementById('profileEmail');
  const guestCTA = document.getElementById('guestCTA');
  const logoutSection = document.getElementById('logoutSection');

  const roleEmoji = { cliente:'🙋', restaurante:'🍽️', repartidor:'🛵' };
  const roleLabel = { cliente:'Cliente', restaurante:'Restaurante', repartidor:'Repartidor' };

  if (user) {
    if (avatarEl) avatarEl.textContent = roleEmoji[user.role] || '👤';
    if (nameEl)   nameEl.textContent   = user.name;
    if (roleEl)   roleEl.textContent   = `${roleEmoji[user.role] || '👤'} ${roleLabel[user.role] || user.role}`;
    if (emailEl)  emailEl.textContent  = user.email || '';
    if (guestCTA) guestCTA.style.display = 'none';
    if (logoutSection) logoutSection.style.display = 'block';
  } else {
    if (guestCTA) guestCTA.style.display = 'block';
    if (logoutSection) logoutSection.style.display = 'none';
  }

  const orders = parseInt(localStorage.getItem('dbOrderCount') || '0');
  const statO = document.getElementById('statOrders');
  if (statO) statO.textContent = orders;

  renderReviews();
  const reviews = JSON.parse(localStorage.getItem('dbReviews') || '[]');
  const statR = document.getElementById('statReviews');
  if (statR) statR.textContent = reviews.length;
}

// ===== REVIEWS =====
function submitReview() {
  const stars  = (document.getElementById('reviewStars')  || {}).value || '5';
  const author = (document.getElementById('reviewAuthor') || {}).value || 'Anónimo';
  const text   = (document.getElementById('reviewText')   || {}).value || '';
  if (!text.trim()) { showToast('⚠️ Escribe tu reseña', 'error'); return; }

  const reviews = JSON.parse(localStorage.getItem('dbReviews') || '[]');
  reviews.unshift({
    author: author || 'Anónimo',
    stars: parseInt(stars),
    text,
    date: new Date().toLocaleDateString('es-PR', { year:'numeric', month:'short', day:'numeric' }),
  });
  localStorage.setItem('dbReviews', JSON.stringify(reviews));
  showToast('⭐ Reseña publicada', 'success');

  const tf = document.getElementById('reviewText');
  if (tf) tf.value = '';
  renderReviews();
  const statR = document.getElementById('statReviews');
  if (statR) statR.textContent = reviews.length;
}

function renderReviews(containerId = 'reviewsList') {
  const el = document.getElementById(containerId);
  if (!el) return;
  const reviews = JSON.parse(localStorage.getItem('dbReviews') || '[]');
  const titleEl = document.getElementById('reviewsTitle');

  // Seed with default reviews if empty
  const list = reviews.length > 0 ? reviews : [
    { author:'María González', stars:5, text:'¡Excelente comida! La pizza llegó caliente y muy sabrosa. Definitivamente volvería a pedir.', date:'1 may 2026' },
    { author:'Carlos Rivera',  stars:5, text:'El arroz con pollo está increíble, sabe a comida casera de abuela. Envío súper rápido.', date:'30 abr 2026' },
    { author:'Keila Torres',   stars:4, text:'Muy buena comida y precio justo. La burger doble BBQ es una locura. 100% recomendado.', date:'28 abr 2026' },
  ];

  if (titleEl) titleEl.textContent = `💬 Reseñas (${list.length})`;
  el.innerHTML = list.map(r => `
    <div class="review-card">
      <div class="review-header">
        <div class="review-avatar">😊</div>
        <div>
          <div class="review-author">${r.author}</div>
          <div class="review-date">${r.date}</div>
        </div>
        <div class="review-stars">${'⭐'.repeat(r.stars)}</div>
      </div>
      <div class="review-text">${r.text}</div>
    </div>`).join('');
}

// ===== REVIEWS PREVIEW (index page) =====
function renderReviewsPreview() {
  const el = document.getElementById('reviewsPreview');
  if (!el) return;
  const defaultReviews = [
    { author:'María González', stars:5, text:'¡Excelente comida! La pizza llegó caliente y muy sabrosa.', date:'1 may 2026' },
    { author:'Carlos Rivera',  stars:5, text:'El arroz con pollo está increíble, sabe a comida casera.', date:'30 abr 2026' },
  ];
  const stored = JSON.parse(localStorage.getItem('dbReviews') || '[]');
  const list = [...stored, ...defaultReviews].slice(0, 3);
  el.innerHTML = list.map(r => `
    <div class="review-card">
      <div class="review-header">
        <div class="review-avatar">😊</div>
        <div>
          <div class="review-author">${r.author}</div>
          <div class="review-date">${r.date}</div>
        </div>
        <div class="review-stars">${'⭐'.repeat(r.stars)}</div>
      </div>
      <div class="review-text">${r.text}</div>
    </div>`).join('');
}

// ===== GLOBAL SEARCH (header) =====
function initGlobalSearch() {
  const inp = document.getElementById('globalSearch');
  if (!inp) return;
  inp.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      const q = inp.value.trim();
      if (q) location.href = `menu.html?q=${encodeURIComponent(q)}`;
    }
  });
}

// ===== READ URL PARAMS =====
function readURLParams() {
  const params = new URLSearchParams(location.search);
  const q = params.get('q');
  const cat = params.get('cat');

  // Menu search input
  const searchEl = document.getElementById('menuSearch');
  if (searchEl && q) searchEl.value = q;

  if (q || cat) {
    menuSearch = q || '';
    menuCat    = cat || 'all';
    if (cat) {
      const chip = document.querySelector(`#menuCats [data-cat="${cat}"]`);
      if (chip) filterMenu(cat, chip);
    } else {
      applyFilter('menuGrid', menuCat, menuSearch);
    }
  }
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    // Load saved settings
    loadSettings();
  syncThemeControls();

  updateCartBadge();
  initGlobalSearch();

  const page = location.pathname.split('/').pop() || 'index.html';

  // Menu search live filter
  const menuSearchEl = document.getElementById('menuSearch');
  if (menuSearchEl) {
    menuSearchEl.addEventListener('input', e => {
      menuSearch = e.target.value;
      applyFilter('menuGrid', menuCat, menuSearch);
    });
  }

  if (page === 'index.html' || page === '' || page === '/') {
    applyFilter('homeMenuGrid', 'all', '');
    renderReviewsPreview();
  }
  if (page === 'menu.html') {
    applyFilter('menuGrid', 'all', '');
    readURLParams();
  }
  if (page === 'carrito.html') {
    renderCart();
  }
  if (page === 'perfil.html') {
    renderProfile();
  }
  if (page === 'configuraciones.html') {
    initConfiguracionesPage();
  }

  applyLanguage();
});

// ===== SETTINGS =====
function openSettings() {
  const overlay = document.getElementById('settingsOverlay');
  if (!overlay) return;
  overlay.classList.add('open');
  syncThemeControls();
  const notifRaw = localStorage.getItem('dbNotif') ?? localStorage.getItem('db_notif') ?? '1';
  const notif = notifRaw !== '0';
  const nt = document.getElementById('notifToggle');
  if (nt) nt.checked = notif;
  const langSelect = document.getElementById('langSelect');
  if (langSelect) langSelect.value = currentLang();
}

function closeSettings() {
  const overlay = document.getElementById('settingsOverlay');
  if (overlay) overlay.classList.remove('open');
}

function closeSettingsOutside(e) {
  if (e.target.id === 'settingsOverlay') closeSettings();
}

function toggleDark(on) {
  document.body.classList.toggle('dark', on);
  localStorage.setItem('dbDark', on ? '1' : '0');
  syncThemeControls();
  showToast(on ? t('🌙 Modo oscuro activado', '🌙 Dark mode enabled') : t('☀️ Modo claro activado', '☀️ Light mode enabled'));
}

function saveSetting(key, value) {
  const parsed = typeof value === 'boolean' ? (value ? '1' : '0') : String(value);
  if (key === 'notif') {
    localStorage.setItem('dbNotif', parsed);
    localStorage.setItem('db_notif', parsed);
  } else {
    localStorage.setItem('db_' + key, parsed);
  }
  if (key === 'lang') applyLanguage();
  showToast(t('✅ Configuración guardada', '✅ Settings saved'));
}

function loadSettings() {
  if (localStorage.getItem('dbDark') === '1') {
    document.body.classList.add('dark');
  }
}

function toggleThemeQuick() {
  const darkOn = document.body.classList.contains('dark');
  toggleDark(!darkOn);
}

function syncThemeControls() {
  const darkOn = document.body.classList.contains('dark');
  document.querySelectorAll('[data-theme-toggle]').forEach(btn => {
    btn.textContent = darkOn ? '☀️' : '🌙';
    btn.title = darkOn ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro';
  });
  const darkSwitch = document.getElementById('darkToggle');
  if (darkSwitch) darkSwitch.checked = darkOn;
}

function clearCartSetting() {
  if (cart.length === 0) { showToast(t('ℹ️ El carrito ya está vacío', 'ℹ️ Cart is already empty')); return; }
  cart = [];
  saveCart();
  closeSettings();
  showToast(t('🗑️ Carrito vaciado', '🗑️ Cart cleared'));
  if (typeof renderCart === 'function') renderCart();
}

function showAbout() {
  closeSettings();
  setTimeout(() => {
    showToast(currentLang() === 'en'
      ? '🍔 Delivery Barranquitas v1.0 · Barranquitas, Puerto Rico'
      : '🍔 Delivery Barranquitas v1.0 · Barranquitas, PR');
  }, 200);
}

// ===== CONFIGURACIONES PAGE =====
function initConfiguracionesPage() {
  const lang = localStorage.getItem('db_lang') || 'es';
  const notif = localStorage.getItem('dbNotif') ?? localStorage.getItem('db_notif') ?? '1';
  const dark = localStorage.getItem('dbDark') === '1';

  const langEl = document.getElementById('cfgLang');
  const notifEl = document.getElementById('cfgNotif');
  const themeEl = document.getElementById('cfgTheme');

  if (langEl) langEl.value = (lang === 'en' ? 'en' : 'es');
  if (notifEl) notifEl.value = (notif === '0' ? '0' : '1');
  if (themeEl) themeEl.value = dark ? 'dark' : 'light';
}

function guardarConfiguracionAvanzada() {
  const langEl = document.getElementById('cfgLang');
  const notifEl = document.getElementById('cfgNotif');
  const themeEl = document.getElementById('cfgTheme');

  const lang = langEl ? langEl.value : 'es';
  const notif = notifEl ? notifEl.value === '1' : true;
  const dark = themeEl ? themeEl.value === 'dark' : false;

  saveSetting('lang', lang);
  saveSetting('notif', notif);
  toggleDark(dark);
  applyLanguage();
  showToast(t('⚙️ Preferencias actualizadas', '⚙️ Preferences updated'), 'success');
}

function restablecerConfiguracion() {
  localStorage.setItem('db_lang', 'es');
  localStorage.setItem('dbNotif', '1');
  localStorage.setItem('db_notif', '1');
  localStorage.setItem('dbDark', '0');
  toggleDark(false);
  initConfiguracionesPage();
  applyLanguage();
  showToast(t('♻️ Configuración restablecida', '♻️ Settings restored'), 'success');
}
