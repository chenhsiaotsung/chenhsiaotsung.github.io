// ===== Smooth Navbar Active Link =====
const sections = document.querySelectorAll('section[id]');
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
  navbar.style.boxShadow = window.scrollY > 10
    ? '0 4px 20px rgba(0,0,0,0.12)'
    : '0 2px 12px rgba(0,0,0,0.06)';
});

// ===== Fade-in on scroll =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1 });

document.querySelectorAll('.timeline-item, .skill-category, .project-card, .contact-item').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// ===== Profile photo tip =====
function showPhotoTip() {
  alert('Tip: Name your photo "photo.jpg" and place it in the root folder.\nIn index.html, replace the icon with:\n<img src="photo.jpg" alt="Hsiao-Tsung Chen" />');
}
