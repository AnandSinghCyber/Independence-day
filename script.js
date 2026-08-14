// 🇮🇳 Anand Mobile & Electrics — Independence Day Effects

document.addEventListener("DOMContentLoaded", () => {
  const sky = document.querySelector(".sky");

  // Respect users who prefer reduced motion
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (!sky || reducedMotion) return;

  // -----------------------------------------
  // 1. Create floating tricolour particles
  // -----------------------------------------

  const colors = ["#ff8c1a", "#ffffff", "#138a4b"];

  for (let i = 0; i < 30; i++) {
    const particle = document.createElement("span");

    particle.classList.add("tricolor-particle");

    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];

    particle.style.animationDuration =
      `${5 + Math.random() * 8}s`;

    particle.style.animationDelay =
      `${Math.random() * 5}s`;

    sky.appendChild(particle);
  }

  // -----------------------------------------
  // 2. Independence Day confetti
  // -----------------------------------------

  const confettiColors = [
    "#ff8c1a",
    "#ffffff",
    "#138a4b",
    "#123c70"
  ];

  for (let i = 0; i < 45; i++) {
    const confetti = document.createElement("span");

    confetti.classList.add("confetti");

    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.backgroundColor =
      confettiColors[
        Math.floor(Math.random() * confettiColors.length)
      ];

    confetti.style.animationDelay =
      `${Math.random() * 3}s`;

    confetti.style.animationDuration =
      `${3 + Math.random() * 4}s`;

    document.body.appendChild(confetti);

    // Remove after animation
    setTimeout(() => {
      confetti.remove();
    }, 8000);
  }

  // -----------------------------------------
  // 3. Scroll reveal animation
  // -----------------------------------------

  const sections = document.querySelectorAll(".section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  sections.forEach((section) => {
    section.classList.add("hidden");
    observer.observe(section);
  });

  // -----------------------------------------
  // 4. Smooth button interaction
  // -----------------------------------------

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");

      if (targetId === "#") return;

      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // -----------------------------------------
  // 5. Small greeting in browser console
  // -----------------------------------------

  console.log(
    "🇮🇳 Happy Independence Day from Anand Mobile & Electrics!"
  );
  console.log("Jai Hind! ❤️");
});
