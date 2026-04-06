// ===== Language Toggle =====
let isZh = true;

function toggleLang() {
  isZh = !isZh;
  const lang = isZh ? 'zh' : 'en';
  const btn = document.getElementById('langBtn');

  document.querySelectorAll('[data-zh]').forEach(el => {
    el.textContent = el.dataset[lang];
  });

  btn.textContent = isZh ? 'English' : '中文';
  document.documentElement.lang = isZh ? 'zh-TW' : 'en';
}

// ===== Smooth Navbar Active Link =====
const sections = document.querySelectorAll('section[id], div[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 100) {
      current = section.id;
    }
  });

  navLinks.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === '#' + current) {
      a.classList.add('active');
    }
  });
});

// ===== Navbar shadow on scroll =====
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.12)';
  } else {
    navbar.style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)';
  }
});

// ===== Fade-in on scroll =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.timeline-item, .skill-category, .project-card, .contact-item').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// ===== Photo click to upload hint =====
document.querySelector('.profile-photo').addEventListener('click', () => {
  alert(isZh
    ? '提示：將大頭照命名為 photo.jpg 放在網站根目錄，並在 index.html 中將 <i class="fa-solid fa-user"></i> 替換為 <img src="photo.jpg" alt="陳孝宗" />。'
    : 'Tip: Name your photo photo.jpg and place it in the root folder. In index.html, replace the icon with <img src="photo.jpg" alt="Hsiao-Tsung Chen" />.');
});
