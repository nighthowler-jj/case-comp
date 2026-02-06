// force redeploy

const canvas = document.getElementById("bg-canvas");
const ctx = canvas.getContext("2d");

let w, h;
function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

const particles = Array.from({ length: 120 }, () => ({
  x: Math.random() * w,
  y: Math.random() * h,
  r: Math.random() * 1.8 + 0.5,
  vx: Math.random() * 0.15 - 0.075,
  vy: Math.random() * 0.15 - 0.075,
  a: Math.random() * 0.4 + 0.2
}));

function animate() {
  ctx.clearRect(0, 0, w, h);

  for (const p of particles) {
    p.x += p.vx;
    p.y += p.vy;

    if (p.x < 0) p.x = w;
    if (p.x > w) p.x = 0;
    if (p.y < 0) p.y = h;
    if (p.y > h) p.y = 0;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(217, 119, 87, ${p.a})`; // terracotta glow
    ctx.fill();
  }

  requestAnimationFrame(animate);
}

animate();


