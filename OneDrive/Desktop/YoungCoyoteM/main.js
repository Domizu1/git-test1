
ScrollReveal().reveal('.map-section', {
  origin: 'left',
  distance: '100px',
  duration: 1600,
  delay: 200,
  easing: 'ease-out',
  opacity: 0,
  reset: false
});
ScrollReveal().reveal('.offer-card', {
  origin: 'bottom',
  distance: '50px',
  duration: 1200,
  interval: 200,
  opacity: 0,
  reset: false
});
ScrollReveal().reveal('.hero-text', {
  origin: 'top',
  distance: '60px',
  duration: 1500,
  delay: 300,
  opacity: 0
});
ScrollReveal().reveal('.contact-card', {
  origin: 'right',
  distance: '100px',
  duration: 1600,
  delay: 200,
  easing: 'ease-out',
  opacity: 0,
  reset: false
});

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const sideNav = document.querySelector(".side-nav");
  const closeBtn = document.querySelector(".side-nav .close-btn");

  toggle.addEventListener("click", () => {
    sideNav.classList.add("show");
    toggle.setAttribute("aria-expanded", "true");
  });

  closeBtn.addEventListener("click", () => {
    sideNav.classList.remove("show");
    toggle.setAttribute("aria-expanded", "false");
  });

  sideNav.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      sideNav.classList.remove("show");
      toggle.setAttribute("aria-expanded", "false");
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") sideNav.classList.remove("show");
  });
});


