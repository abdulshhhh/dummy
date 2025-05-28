// Enhanced Henna by Fuzz - Script.js File

// Custom Cursor Animation
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');
let mouseX = 0, mouseY = 0;
let followerX = 0, followerY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = mouseX + 'px';
  cursor.style.top = mouseY + 'px';
});

// Smooth cursor follower
function updateFollower() {
  followerX += (mouseX - followerX) * 0.1;
  followerY += (mouseY - followerY) * 0.1;
  cursorFollower.style.left = followerX + 'px';
  cursorFollower.style.top = followerY + 'px';
  requestAnimationFrame(updateFollower);
}
updateFollower();

// Cursor hover effects
document.querySelectorAll('a, button, .hover-effect').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.classList.add('expand');
    cursorFollower.style.transform = 'scale(1.5)';
  });
  el.addEventListener('mouseleave', () => {
    cursor.classList.remove('expand');
    cursorFollower.style.transform = 'scale(1)';
  });
});

// Enhanced Loading Animation with Performance Optimizations
window.addEventListener('load', function() {
  const loader = document.getElementById('loader');
  const progress = document.getElementById('progress');
  const progressPercentage = document.getElementById('progress-percentage');

  // Create enhanced particle systems
  createLoaderParticles();
  createProgressParticles();

  // Optimized progress animation with RAF
  let width = 0;
  let currentPercentage = 0;
  const loadingSteps = [12, 28, 45, 67, 82, 95, 100];
  let stepIndex = 0;
  let animationId;

  const updateProgress = () => {
    if (stepIndex < loadingSteps.length) {
      const targetWidth = loadingSteps[stepIndex];
      const targetPercentage = Math.round(targetWidth);

      const animateStep = () => {
        const widthIncrement = (targetWidth - width) * 0.08;
        const percentageIncrement = (targetPercentage - currentPercentage) * 0.08;

        width += widthIncrement;
        currentPercentage += percentageIncrement;

        progress.style.width = `${width}%`;
        progressPercentage.textContent = `${Math.round(currentPercentage)}%`;

        if (Math.abs(width - targetWidth) > 0.5) {
          animationId = requestAnimationFrame(animateStep);
        } else {
          width = targetWidth;
          currentPercentage = targetPercentage;
          progress.style.width = `${width}%`;
          progressPercentage.textContent = `${currentPercentage}%`;
          stepIndex++;

          // Add slight delay between steps for realism
          setTimeout(updateProgress, stepIndex === loadingSteps.length ? 800 :
                    Math.random() * 400 + 200);
        }
      };
      animateStep();
    } else {
      // Enhanced exit animation sequence
      setTimeout(() => {
        // First, animate rings with stagger
        gsap.to(".ring", {
          scale: 0,
          rotation: 720,
          duration: 1.2,
          stagger: 0.1,
          ease: "back.in(2)"
        });

        // Animate glow effect
        gsap.to(".loader-glow", {
          scale: 3,
          opacity: 0,
          duration: 1.5,
          delay: 0.2,
          ease: "power2.out"
        });

        // Animate particles
        gsap.to(".loader-particle", {
          scale: 0,
          opacity: 0,
          duration: 0.8,
          stagger: 0.02,
          delay: 0.3,
          ease: "power2.in"
        });

        // Animate content with sophisticated effect
        gsap.to(".loader-content", {
          y: -150,
          opacity: 0,
          scale: 0.8,
          rotationX: 90,
          duration: 1.5,
          delay: 0.5,
          ease: "power3.in"
        });

        // Final loader disappear with luxury effect
        gsap.to(loader, {
          clipPath: 'circle(0% at 50% 50%)',
          duration: 2,
          delay: 1.2,
          ease: "power4.inOut",
          onComplete: () => {
            loader.style.display = 'none';
            document.body.style.overflow = 'auto';
            cancelAnimationFrame(animationId);
            initMainAnimations();
          }
        });
      }, 500);
    }
  };

  updateProgress();
});

// Enhanced Loader Particle System
function createLoaderParticles() {
  const container = document.getElementById('loader-particles');
  if (!container) return;

  const particleCount = 40;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('loader-particle');

    const size = Math.random() * 6 + 2;
    const posX = Math.random() * 100;
    const delay = Math.random() * 6;
    const duration = Math.random() * 4 + 6;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${posX}%`;
    particle.style.animationDelay = `${delay}s`;
    particle.style.animationDuration = `${duration}s`;

    container.appendChild(particle);
  }
}

// Progress Bar Particle System
function createProgressParticles() {
  const container = document.getElementById('progress-particles');
  if (!container) return;

  const particleCount = 15;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('progress-particle');

    const size = Math.random() * 4 + 2;
    const posX = Math.random() * 100;
    const delay = Math.random() * 2;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${posX}%`;
    particle.style.animationDelay = `${delay}s`;

    container.appendChild(particle);
  }
}

// Create Enhanced Particle Systems
function createMagicParticles() {
  const container = document.getElementById('magic-particles');
  if (!container) return;

  const particleCount = 30;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    const size = Math.random() * 6 + 2;
    const posX = Math.random() * 100;
    const delay = Math.random() * 8;
    const duration = Math.random() * 10 + 8;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${posX}%`;
    particle.style.animationDelay = `${delay}s`;
    particle.style.animationDuration = `${duration}s`;

    container.appendChild(particle);
  }
}

// Initialize Main Animations
function initMainAnimations() {
  // Create particle systems
  createMagicParticles();
  createGoldDust();

  // Animate navbar in with bounce effect
  gsap.to(".navbar", {
    y: 0,
    opacity: 1,
    duration: 1.5,
    delay: 0.3,
    ease: "elastic.out(1, 0.6)"
  });

  // Enhanced text animations with magnetic effect
  gsap.utils.toArray('.word').forEach((el, i) => {
    gsap.from(el, {
      y: 150,
      opacity: 0,
      rotation: 15,
      delay: i * 0.3,
      duration: 2,
      ease: "elastic.out(1, 0.5)",
      onComplete: () => {
        // Add magnetic hover effect
        el.addEventListener('mouseenter', () => {
          gsap.to(el, {
            y: -10,
            scale: 1.1,
            rotation: Math.random() * 10 - 5,
            duration: 0.6,
            ease: "elastic.out(1, 0.5)"
          });
        });

        el.addEventListener('mouseleave', () => {
          gsap.to(el, {
            y: 0,
            scale: 1,
            rotation: 0,
            duration: 0.6,
            ease: "elastic.out(1, 0.5)"
          });
        });
      }
    });
  });

  // Hero paragraph with typewriter effect
  const heroP = document.querySelector('.hero-text p');
  if (heroP) {
    const text = heroP.textContent;
    heroP.textContent = '';

    gsap.from(heroP, {
      opacity: 0,
      duration: 1,
      delay: 1.2,
      onComplete: () => {
        let i = 0;
        const typeWriter = () => {
          if (i < text.length) {
            heroP.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 30);
          }
        };
        typeWriter();
      }
    });
  }

  // Hero image with spectacular entrance
  gsap.fromTo(".hero-img",
    {
      opacity: 0,
      scale: 0.3,
      rotationY: 180,
      z: -1000
    },
    {
      opacity: 1,
      scale: 1,
      rotationY: -15,
      z: 0,
      duration: 2.5,
      delay: 1.5,
      ease: "back.out(1.7)",
      onComplete: () => {
        // Add continuous floating effect
        gsap.to(".hero-img", {
          y: 15,
          rotation: 2,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      }
    }
  );

  // Button animations with stagger
  gsap.utils.toArray('.btn').forEach((btn, i) => {
    gsap.fromTo(btn,
      {
        y: 100,
        opacity: 0,
        scale: 0.8
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.5,
        delay: 2.2 + (i * 0.2),
        ease: "elastic.out(1, 0.8)"
      }
    );
  });

  // Scroll indicator with delayed entrance
  gsap.to(".scroll-down", {
    opacity: 1,
    duration: 1.5,
    delay: 3,
    ease: "power2.out"
  });

  // Add click handlers
  const scrollDown = document.querySelector('.scroll-down');
  if (scrollDown) {
    scrollDown.addEventListener('click', () => {
      gsap.to(window, {
        scrollTo: {y: window.innerHeight, offsetY: 0},
        duration: 2,
        ease: "power2.inOut"
      });
    });
  }
}

// Enhanced scroll effects
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const navbar = document.querySelector('.navbar');

  if (navbar) {
    if (scrolled > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  // Parallax effects
  const heroText = document.querySelector('.hero-text');
  const heroImg = document.querySelector('.hero-img');
  const scrollDown = document.querySelector('.scroll-down');

  if (heroText && heroImg && scrollDown) {
    gsap.to(heroText, {
      y: scrolled * 0.3,
      opacity: 1 - scrolled * 0.002,
      duration: 0.3
    });

    gsap.to(heroImg, {
      y: scrolled * 0.2,
      rotationY: -15 + scrolled * 0.05,
      duration: 0.3
    });

    gsap.to(scrollDown, {
      opacity: Math.max(0, 1 - scrolled * 0.01),
      duration: 0.3
    });
  }
});

// Advanced hover effects for hero image
const heroImgContainer = document.querySelector('.hero-img-container');
if (heroImgContainer) {
  let mouseX = 0, mouseY = 0;
  let targetX = 0, targetY = 0;

  heroImgContainer.addEventListener('mousemove', (e) => {
    const rect = heroImgContainer.getBoundingClientRect();
    mouseX = (e.clientX - rect.left - rect.width / 2) / 15;
    mouseY = (e.clientY - rect.top - rect.height / 2) / 15;
  });

  heroImgContainer.addEventListener('mouseleave', () => {
    mouseX = 0;
    mouseY = 0;
  });

  // Smooth animation loop
  function animate() {
    targetX += (mouseX - targetX) * 0.1;
    targetY += (mouseY - targetY) * 0.1;

    gsap.set(heroImgContainer, {
      rotationY: -15 + targetX,
      rotationX: 5 + targetY,
      transformPerspective: 1000
    });

    requestAnimationFrame(animate);
  }
  animate();
}

// Add magical sparkle effect on click
document.addEventListener('click', (e) => {
  createSparkle(e.clientX, e.clientY);
});

function createSparkle(x, y) {
  const sparkle = document.createElement('div');
  sparkle.style.position = 'fixed';
  sparkle.style.left = x + 'px';
  sparkle.style.top = y + 'px';
  sparkle.style.width = '10px';
  sparkle.style.height = '10px';
  sparkle.style.background = 'radial-gradient(circle, #d4af37, transparent)';
  sparkle.style.borderRadius = '50%';
  sparkle.style.pointerEvents = 'none';
  sparkle.style.zIndex = '9999';
  document.body.appendChild(sparkle);

  gsap.fromTo(sparkle,
    {
      scale: 0,
      rotation: 0
    },
    {
      scale: 2,
      rotation: 360,
      duration: 0.6,
      ease: "power2.out",
      onComplete: () => {
        gsap.to(sparkle, {
          scale: 0,
          opacity: 0,
          duration: 0.3,
          onComplete: () => sparkle.remove()
        });
      }
    }
  );
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  // Add smooth reveal animations for all hover effects
  gsap.utils.toArray('.hover-effect').forEach(el => {
    el.addEventListener('mouseenter', () => {
      gsap.to(el, {
        scale: 1.05,
        duration: 0.4,
        ease: "power2.out"
      });
    });

    el.addEventListener('mouseleave', () => {
      gsap.to(el, {
        scale: 1,
        duration: 0.4,
        ease: "power2.out"
      });
    });
  });
});

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  console.log('Henna by Fuzz - Enhanced animations loaded successfully!');
});

function createGoldDust() {
  const container = document.getElementById('gold-dust');
  if (!container) return;

  const particleCount = 60;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('gold-particle');

    const size = Math.random() * 8 + 2;
    const posX = Math.random() * 100;
    const delay = Math.random() * 20;
    const duration = Math.random() * 20 + 15;
    const blur = Math.random() * 3;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${posX}%`;
    particle.style.animationDelay = `${delay}s`;
    particle.style.animationDuration = `${duration}s`;
    particle.style.filter = `blur(${blur}px)`;

    container.appendChild(particle);
  }
}
