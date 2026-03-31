/* ============================================================
   ACYERN — Interactions
   ============================================================ */

// Product data with complete specs
const products = {
  ignis: {
    name: 'IGNIS',
    color: 'Deep Burgundy',
    description: 'Passion, warmth, and transformation. Hand-selected Italian mohair blended with premium wool for unparalleled softness.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663493304469/3nJp4nxjGcBAquAvrymd3g/IMG_7578_97777c8f.jpeg',
    sizes: [
      { size: 'XS', chest: '94', length: '63', weight: '680' },
      { size: 'S', chest: '102', length: '64', weight: '720' },
      { size: 'M', chest: '110', length: '65', weight: '760' },
      { size: 'L', chest: '118', length: '66', weight: '800' },
      { size: 'XL', chest: '126', length: '67', weight: '840' }
    ],
    material: '35% Italian Mohair, 35% Wool, 30% Nylon',
    gsm: '435',
    gauge: '7-gauge',
    weight: '760g (M)',
    care: 'Hand wash in cold water. Lay flat to dry. Avoid pilling by limiting friction.',
  },
  terra: {
    name: 'TERRA',
    color: 'Olive Melange',
    description: 'Grounding, growth, and stability. A natural, earthy tone that complements any wardrobe with timeless elegance.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663493304469/3nJp4nxjGcBAquAvrymd3g/IMG_7582_8f78057b.jpeg',
    sizes: [
      { size: 'XS', chest: '94', length: '63', weight: '680' },
      { size: 'S', chest: '102', length: '64', weight: '720' },
      { size: 'M', chest: '110', length: '65', weight: '760' },
      { size: 'L', chest: '118', length: '66', weight: '800' },
      { size: 'XL', chest: '126', length: '67', weight: '840' }
    ],
    material: '35% Italian Mohair, 35% Wool, 30% Nylon',
    gsm: '435',
    gauge: '7-gauge',
    weight: '760g (M)',
    care: 'Hand wash in cold water. Lay flat to dry. Avoid pilling by limiting friction.',
  },
  aether: {
    name: 'AETHER',
    color: 'Royal Amethyst',
    description: 'Mystery, intuition, and transcendence. A sophisticated purple that captures the essence of luxury and refinement.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663493304469/3nJp4nxjGcBAquAvrymd3g/moody_luxury_purple_mohair_sweater_8b61615e.png',
    sizes: [
      { size: 'XS', chest: '94', length: '63', weight: '680' },
      { size: 'S', chest: '102', length: '64', weight: '720' },
      { size: 'M', chest: '110', length: '65', weight: '760' },
      { size: 'L', chest: '118', length: '66', weight: '800' },
      { size: 'XL', chest: '126', length: '67', weight: '840' }
    ],
    material: '35% Italian Mohair, 35% Wool, 30% Nylon',
    gsm: '435',
    gauge: '7-gauge',
    weight: '760g (M)',
    care: 'Hand wash in cold water. Lay flat to dry. Avoid pilling by limiting friction.',
  },
  aqua: {
    name: 'AQUA',
    color: 'Navy',
    description: 'Flow, depth, and serenity. A versatile navy that brings calm sophistication to every moment.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663493304469/3nJp4nxjGcBAquAvrymd3g/IMG_7580_7e5e10f2.jpeg',
    sizes: [
      { size: 'XS', chest: '94', length: '63', weight: '680' },
      { size: 'S', chest: '102', length: '64', weight: '720' },
      { size: 'M', chest: '110', length: '65', weight: '760' },
      { size: 'L', chest: '118', length: '66', weight: '800' },
      { size: 'XL', chest: '126', length: '67', weight: '840' }
    ],
    material: '35% Italian Mohair, 35% Wool, 30% Nylon',
    gsm: '435',
    gauge: '7-gauge',
    weight: '760g (M)',
    care: 'Hand wash in cold water. Lay flat to dry. Avoid pilling by limiting friction.',
  },
  cosmos: {
    name: 'COSMOS',
    color: 'Stellar Midnight',
    description: 'The infinite expanse of the night sky, captured in every thread. Luminous flecks of metallic mohair shimmer against a deep midnight ground — a garment that moves with the cosmos.',
    image: 'cosmos.png',
    sizes: [
      { size: 'XS', chest: '94', length: '63', weight: '680' },
      { size: 'S', chest: '102', length: '64', weight: '720' },
      { size: 'M', chest: '110', length: '65', weight: '760' },
      { size: 'L', chest: '118', length: '66', weight: '800' },
      { size: 'XL', chest: '126', length: '67', weight: '840' }
    ],
    material: '35% Italian Mohair, 35% Wool, 30% Nylon',
    gsm: '435',
    gauge: '7-gauge',
    weight: '760g (M)',
    care: 'Hand wash in cold water. Lay flat to dry. Avoid pilling by limiting friction.',
  },
  'cosmos-celestial': {
    name: 'COSMOS II',
    color: 'Celestial Gold',
    description: 'Where the Milky Way meets mohair. A supernova rendered in golden thread against the deepest black — wear the universe.',
    image: 'cosmos-celestial.png',
    sizes: [
      { size: 'XS', chest: '94', length: '63', weight: '680' },
      { size: 'S', chest: '102', length: '64', weight: '720' },
      { size: 'M', chest: '110', length: '65', weight: '760' },
      { size: 'L', chest: '118', length: '66', weight: '800' },
      { size: 'XL', chest: '126', length: '67', weight: '840' }
    ],
    material: '35% Italian Mohair, 35% Wool, 30% Nylon',
    gsm: '435',
    gauge: '7-gauge',
    weight: '760g (M)',
    care: 'Hand wash in cold water. Lay flat to dry. Avoid pilling by limiting friction.',
  },
};

// ── Nav scroll blur ──────────────────────────────────────────
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// ── Mobile menu ──────────────────────────────────────────────
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu    = document.getElementById('mobileMenu');
const menuIcon      = document.getElementById('menuIcon');
const closeIcon     = document.getElementById('closeIcon');

mobileMenuBtn.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  menuIcon.style.display  = open ? 'none'  : 'block';
  closeIcon.style.display = open ? 'block' : 'none';
});

// Close mobile menu on link click
mobileMenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    menuIcon.style.display  = 'block';
    closeIcon.style.display = 'none';
  });
});

// ── Scroll reveal ────────────────────────────────────────────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -48px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Stagger card reveals
document.querySelectorAll('.element-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.1}s`;
});

// ── Product modal ────────────────────────────────────────────
const backdrop  = document.getElementById('modalBackdrop');
const modalImg  = document.getElementById('modalImg');
const modalName = document.getElementById('modalName');
const modalColor = document.getElementById('modalColor');
const modalDesc = document.getElementById('modalDesc');
const modalLabel = document.getElementById('modalLabel');

function openModal(id) {
  const p = products[id];
  if (!p) return;
  modalImg.src      = p.image;
  modalImg.alt      = p.name;
  modalName.textContent  = p.name;
  modalColor.textContent = p.color;
  modalDesc.textContent  = p.description;
  modalLabel.textContent = 'The Elements — 2026';

  // Update specs
  const specsContainer = document.querySelector('.modal-specs');
  specsContainer.innerHTML = `
    <div class="modal-spec"><span>Material</span><span>${p.material}</span></div>
    <div class="modal-spec"><span>GSM</span><span>${p.gsm} g/m²</span></div>
    <div class="modal-spec"><span>Gauge</span><span>${p.gauge}</span></div>
    <div class="modal-spec"><span>Weight</span><span>${p.weight}</span></div>
    <div class="modal-spec"><span>Care</span><span>${p.care}</span></div>
  `;

  // Update size selector
  const sizeContainer = document.querySelector('.modal-sizes');
  if (sizeContainer && p.sizes) {
    sizeContainer.innerHTML = '<label>Size (cm chest / length)</label><div class="size-buttons">' +
      p.sizes.map(s => `<button class="size-btn" data-size="${s.size}">${s.size}<br><small>${s.chest}cm / ${s.length}cm</small></button>`).join('') +
      '</div>';

    document.querySelectorAll('.size-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
      });
    });
  }

  // Store product ID for cart
  document.getElementById('modal').dataset.productId = id;

  backdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  backdrop.classList.remove('open');
  document.body.style.overflow = '';
  // Reset size selection
  document.querySelectorAll('.size-btn').forEach(btn => btn.classList.remove('active'));
}

// Close on Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// ── Smooth scroll for anchor links ──────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 68;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ── "Read More" expandable content ────────────────────
document.querySelectorAll('.text-link').forEach(link => {
  link.addEventListener('click', function(e) {
    if (this.getAttribute('href') === '#') {
      e.preventDefault();
      const article = this.closest('article');
      if (article) {
        article.classList.toggle('expanded');
        const expanded = article.classList.contains('expanded');
        this.innerHTML = expanded ? 'Read less <span>←</span>' : 'Read more <span>→</span>';
      }
    }
  });
});

// ── Shopping Cart ────────────────────────────────────
let cart = [];

function addToCart(productId) {
  const p = products[productId];
  const selectedSize = document.querySelector('.size-btn.active');
  
  if (!selectedSize) {
    alert('Please select a size');
    return;
  }

  const item = {
    id: productId,
    name: p.name,
    color: p.color,
    size: selectedSize.dataset.size,
    price: 130,
    image: p.image
  };

  cart.push(item);
  updateCart();
  closeModal();
  alert('Added to cart! View your bag.');
}

function updateCart() {
  const cartItems = document.getElementById('cartItems');
  const subtotal = document.getElementById('subtotal');
  const total = document.getElementById('total');
  const checkoutBtn = document.getElementById('checkoutBtn');

  if (cart.length === 0) {
    cartItems.innerHTML = '<p class="cart-empty">Your cart is empty. Start shopping.</p>';
    subtotal.textContent = '$0 CAD';
    total.textContent = '$0 CAD';
    checkoutBtn.disabled = true;
    updateCartBadge();
    return;
  }

  let totalPrice = 0;
  cartItems.innerHTML = cart.map((item, i) => {
    totalPrice += item.price;
    return `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" />
        <div class="item-details">
          <h4>${item.name}</h4>
          <p>${item.color}</p>
          <p class="item-size">Size: ${item.size}</p>
          <p class="item-price">$${item.price} CAD</p>
        </div>
        <button class="remove-btn" onclick="removeFromCart(${i})">×</button>
      </div>
    `;
  }).join('');

  subtotal.textContent = '$' + totalPrice + ' CAD';
  total.textContent = '$' + totalPrice + ' CAD';
  checkoutBtn.disabled = false;
  updateCartBadge();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

// Make "Add to Cart" button functional
document.addEventListener('click', function(e) {
  if (e.target.closest('.btn-primary.cart-btn')) {
    const modal = document.getElementById('modal');
    const productId = modal.dataset.productId;
    if (productId) addToCart(productId);
  }
});


// ── Scroll to Cart ──────────────────────────────────
function scrollToCart() {
  const cartSection = document.getElementById('cart');
  if (cartSection) {
    const offset = 68;
    const top = cartSection.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

// Update cart badge
function updateCartBadge() {
  const badge = document.getElementById('cartBadge');
  if (badge) {
    if (cart.length > 0) {
      badge.textContent = cart.length;
      badge.style.display = 'flex';
    } else {
      badge.style.display = 'none';
    }
  }
}
