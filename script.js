// Initialize Vanta.NET for hero background
VANTA.NET({
  el: "#home",
  color: 0xFFFFFF,
  backgroundColor: 0x4B3832,
  points: 10.00,
  maxDistance: 20.00,
  spacing: 15.00
});

// Optional: add smooth scroll if needed
document.querySelectorAll('.bottom-nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});


