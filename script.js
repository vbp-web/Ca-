// ✅ Hero Lottie Animation
lottie.loadAnimation({
  container: document.getElementById('hero-animation'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'https://lottie.host/0207b239-5dfb-4d31-9817-991420d89b98/HHEihvSxgV.json' // Replace with CA/Finance animation
});

// ✅ Loader Animation
window.addEventListener("DOMContentLoaded", () => {
  const loadingScreen = document.getElementById("loading-screen");
  lottie.loadAnimation({
    container: document.getElementById("loading-spinner"),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://lottie.host/65a4f789-3e12-4e2a-bda2-5dc9945e7f64/l4sULgZtrp.json' // Loader animation
  });
  setTimeout(() => {
    loadingScreen.style.display = "none";
  }, 2000);
});

// ✅ Scroll-Based Section Reveal
window.addEventListener("scroll", () => {
  document.querySelectorAll("section").forEach(section => {
    const triggerBottom = window.innerHeight * 0.85;
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add("reveal");
    }
  });
});

// ✅ Count-Up Animation
function animateCount() {
  const counters = document.querySelectorAll(".count");
  counters.forEach(counter => {
    const target = +counter.getAttribute("data-count");
    const updateCount = () => {
      const current = +counter.innerText;
      const increment = Math.ceil(target / 100);
      if (current < target) {
        counter.innerText = current + increment;
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
}

window.addEventListener("scroll", () => {
  const stats = document.querySelector(".stats");
  const rect = stats?.getBoundingClientRect();
  if (rect && rect.top < window.innerHeight * 0.85 && !stats.classList.contains("counted")) {
    stats.classList.add("counted");
    animateCount();
  }
});
