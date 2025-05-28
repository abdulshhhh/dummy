// Enhanced Henna by Fuzz - Script.js File

// Immediate loading start
window.addEventListener('load', function() {
  // Ensure loading completes after all resources are loaded
  setTimeout(() => {
    if (window.loadingComplete) return;
    window.loadingComplete = true;

    const finishEvent = new CustomEvent('finishLoading');
    document.dispatchEvent(finishEvent);
  }, 500);
});

// Modern Enhanced Loading Animation
document.addEventListener('DOMContentLoaded', function() {
  const loader = document.getElementById('loader');
  const progressFill = document.getElementById('progress-fill');
  const progressPercentage = document.getElementById('progress-percentage');
  const loadingStatus = document.getElementById('loading-status');

  // Create elegant particle system
  createElegantParticles();

  // Loading messages for better UX
  const loadingMessages = [
    "Preparing your experience...",
    "Loading beautiful designs...",
    "Setting up the magic...",
    "Almost ready...",
    "Welcome to Henna by Fuzz!"
  ];

  let currentProgress = 0;
  let messageIndex = 0;

  // Smooth progress animation
  function updateProgress() {
    const targetProgress = Math.min(currentProgress + Math.random() * 15 + 5, 100);

    // Animate progress bar
    gsap.to(progressFill, {
      width: `${targetProgress}%`,
      duration: 0.8,
      ease: "power2.out"
    });

    // Update percentage with smooth counting
    gsap.to({ value: currentProgress }, {
      value: targetProgress,
      duration: 0.8,
      ease: "power2.out",
      onUpdate: function() {
        progressPercentage.textContent = Math.round(this.targets()[0].value);
      }
    });

    currentProgress = targetProgress;

    // Update loading message
    if (messageIndex < loadingMessages.length - 1 && currentProgress > (messageIndex + 1) * 20) {
      messageIndex++;
      gsap.to(loadingStatus, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          loadingStatus.textContent = loadingMessages[messageIndex];
          gsap.to(loadingStatus, {
            opacity: 0.8,
            duration: 0.3
          });
        }
      });
    }

    // Continue loading or finish
    if (currentProgress < 100) {
      setTimeout(updateProgress, Math.random() * 600 + 400);
    } else {
      window.loadingComplete = true;
      setTimeout(finishLoading, 800);
    }
  }

  // Start loading after a brief delay
  setTimeout(updateProgress, 1000);

  // Listen for forced finish event
  document.addEventListener('finishLoading', finishLoading);

  // Elegant exit animation
  function finishLoading() {
    if (window.loadingFinished) return;
    window.loadingFinished = true;
    // Animate logo letters out
    gsap.to(".logo-letter", {
      y: -50,
      opacity: 0,
      scale: 0.8,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.in"
    });

    // Animate subtitle out
    gsap.to(".logo-subtitle", {
      y: -30,
      opacity: 0,
      duration: 0.6,
      delay: 0.3,
      ease: "power2.in"
    });

    // Animate progress container out
    gsap.to(".progress-container", {
      y: 30,
      opacity: 0,
      duration: 0.6,
      delay: 0.4,
      ease: "power2.in"
    });

    // Animate loading status out
    gsap.to(".loading-status", {
      y: 20,
      opacity: 0,
      duration: 0.6,
      delay: 0.5,
      ease: "power2.in"
    });

    // Animate particles out
    gsap.to(".elegant-particle", {
      scale: 0,
      opacity: 0,
      duration: 0.8,
      delay: 0.6,
      stagger: 0.02,
      ease: "power2.in"
    });

    // Final loader exit with modern effect
    gsap.to(loader, {
      opacity: 0,
      scale: 1.1,
      duration: 1.2,
      delay: 1,
      ease: "power2.inOut",
      onComplete: () => {
        loader.style.display = 'none';
        document.body.style.overflow = 'auto';
        initMainAnimations();
      }
    });
  }
});

// Elegant Particle System for Loader
function createElegantParticles() {
  const container = document.getElementById('elegant-particles');
  if (!container) return;

  const particleCount = 25;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('elegant-particle');

    // Varied particle properties for natural look
    const size = Math.random() * 4 + 2;
    const posX = Math.random() * 100;
    const delay = Math.random() * 8;
    const duration = Math.random() * 8 + 10;
    const opacity = Math.random() * 0.4 + 0.2;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${posX}%`;
    particle.style.animationDelay = `${delay}s`;
    particle.style.animationDuration = `${duration}s`;
    particle.style.opacity = opacity;

    // Add some color variation
    const colors = ['var(--gold)', 'var(--peach)', 'var(--rose)'];
    particle.style.background = colors[Math.floor(Math.random() * colors.length)];

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
