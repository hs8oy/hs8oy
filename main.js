// Star animation
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

// Set canvas size
function setCanvasSize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
setCanvasSize();
window.addEventListener("resize", setCanvasSize);

// Star properties
const stars = [];
const starCount = 200;
const starSpeed = 0.2;

// Create stars
for (let i = 0; i < starCount; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 2,
    speed: Math.random() * starSpeed + 0.1,
  });
}

// Animate stars
function animateStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  stars.forEach((star) => {
    // Move star
    star.y += star.speed;

    // Reset star position if it goes off screen
    if (star.y > canvas.height) {
      star.y = 0;
      star.x = Math.random() * canvas.width;
    }

    // Draw star
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${0.5 + Math.random() * 0.5})`;
    ctx.fill();
  });

  requestAnimationFrame(animateStars);
}

animateStars();

window.addEventListener("load", () => {
  const overlay = document.querySelector(".loading-overlay");

  setTimeout(() => {
    overlay.style.transition = "opacity 0.5s";
    overlay.style.opacity = "0";
    setTimeout(() => {
      overlay.style.display = "none";
    }, 500);
  }, 2500); // Total animation time (2s) + little extra time
});

ScrollReveal().reveal("section", {
  duration: 2000, // مدة الحركة
  origin: "bottom", // اتجاه الحركة
  distance: "80px", // المسافة
  delay: 2500, // التأخير
});

ScrollReveal().reveal(".er", {
  duration: 2000, // مدة الحركة
  origin: "right", // اتجاه الحركة
  distance: "80px", // المسافة
  delay: 100, // التأخير
});

ScrollReveal().reveal(".c", {
  duration: 2000, // مدة الحركة
  origin: "bottom",
  distance: "10px", // المسافة
  delay: 3000, // التأخير
});

ScrollReveal().reveal(".h", {
  duration: 2000, // مدة الحركة
  origin: "bottom", // اتجاه الحركة
  distance: "10px", // المسافة
  delay: 3500, // التأخير
});

ScrollReveal().reveal(".j", {
  duration: 2000, // مدة الحركة
  origin: "bottom", // اتجاه الحركة
  distance: "10px", // المسافة
  delay: 4000, // التأخير
});
