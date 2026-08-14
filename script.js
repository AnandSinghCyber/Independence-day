// Small celebratory sparkle effect. Respects reduced-motion preferences.
const sky = document.querySelector('.sky');

if (sky && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  for (let i = 0; i < 18; i++) {
    const dot = document.createElement('span');

    dot.className = 'spark';
    dot.style.left = `${Math.random() * 100}%`;
    dot.style.top = `${10 + Math.random() * 78}%`;
    dot.style.animationDelay = `${-Math.random() * 7}s`;
    dot.style.animationDuration = `${5 + Math.random() * 5}s`;

    sky.appendChild(dot);
  }
}
