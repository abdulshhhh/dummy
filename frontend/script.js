// ===== MOBILE DETECTION & OPTIMIZATION SYSTEM =====
const isMobile = () => {
  return window.innerWidth <= 768 ||
         /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
         ('ontouchstart' in window) ||
         (navigator.maxTouchPoints > 0);
};

const isTablet = () => {
  return window.innerWidth > 768 && window.innerWidth <= 1024 &&
         ('ontouchstart' in window || navigator.maxTouchPoints > 0);
};

// Debounce function for performance
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Mobile optimization class management
function applyMobileOptimizations() {
  const body = document.body;

  if (isMobile()) {
    body.classList.add('mobile-device');
    body.classList.remove('desktop-device', 'tablet-device');

    // Disable heavy animations on mobile
    body.style.setProperty('--animation-duration', '0.3s');
    body.style.setProperty('--hover-transition', 'none');
    body.style.setProperty('--cursor-trail', 'none');

    // Disable custom cursor on mobile
    body.style.cursor = 'auto';

    console.log('Mobile optimizations applied');
  } else if (isTablet()) {
    body.classList.add('tablet-device');
    body.classList.remove('desktop-device', 'mobile-device');

    // Moderate animations on tablet
    body.style.setProperty('--animation-duration', '0.4s');
    body.style.setProperty('--hover-transition', '0.2s ease');
    body.style.setProperty('--cursor-trail', 'none');

    console.log('Tablet optimizations applied');
  } else {
    body.classList.add('desktop-device');
    body.classList.remove('mobile-device', 'tablet-device');

    // Full animations on desktop
    body.style.setProperty('--animation-duration', '0.6s');
    body.style.setProperty('--hover-transition', '0.3s ease');
    body.style.setProperty('--cursor-trail', 'block');

    console.log('Desktop optimizations applied');
  }
}

// Apply optimizations immediately
applyMobileOptimizations();

// Reapply on resize with debouncing
window.addEventListener('resize', debounce(applyMobileOptimizations, 250));

// WORLD'S MOST FLAWLESS HENNA LOADING EXPERIENCE
// Absolutely perfect coverage with zero bleed-through

// Immediate body protection
document.documentElement.style.overflow = 'hidden';
document.body.style.overflow = 'hidden';
document.body.classList.add('loading');

window.addEventListener('load', function() {
  // Ensure complete coverage
  ensureFlawlessLoading();

  // Initialize henna loading experience
  initializeHennaLoading();

  // Exactly 4 seconds loading duration
  setTimeout(() => {
    completeHennaLoading();
  }, 4000);
});

// Ensure absolutely flawless loading coverage
function ensureFlawlessLoading() {
  // Hide all content except loader
  const allElements = document.querySelectorAll('body > *:not(.loader)');
  allElements.forEach(element => {
    element.style.visibility = 'hidden';
    element.style.opacity = '0';
  });

  // Ensure loader is fully visible
  const loader = document.getElementById('loader');
  if (loader) {
    loader.style.visibility = 'visible';
    loader.style.opacity = '1';
    loader.style.display = 'flex';
  }

  // Prevent any scrolling
  document.body.style.position = 'fixed';
  document.body.style.top = '0';
  document.body.style.left = '0';
  document.body.style.width = '100%';
  document.body.style.height = '100%';
}

// Initialize authentic henna loading animations
function initializeHennaLoading() {
  // Animate progress percentage
  animateProgressPercentage();

  // Create floating henna essence particles
  createHennaEssenceParticles();

  // Add ambient henna atmosphere
  createHennaAmbience();
}

// Animate progress percentage counter
function animateProgressPercentage() {
  const progressElement = document.getElementById('progress-percentage');
  if (!progressElement) return;

  let progress = 0;
  const duration = 4000; // 4 seconds
  const interval = 50; // Update every 50ms
  const increment = 100 / (duration / interval);

  const progressInterval = setInterval(() => {
    progress += increment;
    if (progress >= 100) {
      progress = 100;
      clearInterval(progressInterval);
    }
    progressElement.textContent = Math.round(progress) + '%';
  }, interval);
}

// Create floating henna essence particles
function createHennaEssenceParticles() {
  const essenceContainer = document.querySelector('.essence-particles');
  if (!essenceContainer) return;

  for (let i = 0; i < 8; i++) {
    setTimeout(() => {
      createEssenceParticle(essenceContainer);
    }, i * 500);
  }
}

function createEssenceParticle(container) {
  const particle = document.createElement('div');
  particle.className = 'essence-particle';
  particle.style.cssText = `
    position: absolute;
    width: ${Math.random() * 4 + 2}px;
    height: ${Math.random() * 4 + 2}px;
    background: radial-gradient(circle, rgba(139, 69, 19, 0.6), rgba(212, 175, 55, 0.3));
    border-radius: 50%;
    left: ${Math.random() * 100}%;
    top: ${Math.random() * 100}%;
    animation: essenceFloat ${Math.random() * 3 + 2}s ease-in-out infinite;
    opacity: 0;
  `;

  container.appendChild(particle);

  // Animate particle
  setTimeout(() => {
    particle.style.opacity = '1';
  }, 100);

  // Remove particle after animation
  setTimeout(() => {
    if (particle.parentNode) {
      particle.parentNode.removeChild(particle);
    }
  }, 5000);
}

// Create ambient henna atmosphere
function createHennaAmbience() {
  const ambienceContainer = document.querySelector('.henna-ambience');
  if (!ambienceContainer) return;

  // Add floating pattern elements
  const patterns = document.querySelectorAll('.floating-pattern');
  patterns.forEach((pattern, index) => {
    pattern.style.cssText = `
      position: absolute;
      width: ${Math.random() * 30 + 20}px;
      height: ${Math.random() * 30 + 20}px;
      border: 2px solid rgba(139, 69, 19, 0.1);
      border-radius: 50%;
      left: ${Math.random() * 80 + 10}%;
      top: ${Math.random() * 80 + 10}%;
      animation: patternFloat ${Math.random() * 4 + 3}s ease-in-out infinite;
      animation-delay: ${index * 0.5}s;
    `;
  });
}

// FLAWLESS loading completion with perfect restoration
function completeHennaLoading() {
  const loader = document.getElementById('loader');

  // Create final henna burst effect
  createHennaBurstEffect();

  // Elegant fade out with artistic transition
  setTimeout(() => {
    loader.style.transition = 'opacity 1.2s ease-out, transform 1.2s ease-out, filter 1.2s ease-out';
    loader.style.opacity = '0';
    loader.style.transform = 'scale(1.15) rotate(3deg)';
    loader.style.filter = 'blur(5px)';

    setTimeout(() => {
      // Complete removal of loader
      loader.style.display = 'none';
      loader.remove();

      // Restore body to normal state
      restorePageToNormalState();

      // Initialize main page with henna-inspired entrance
      initializeMainPageWithHennaStyle();
    }, 1200);
  }, 200);
}

// Restore page to perfect normal state
function restorePageToNormalState() {
  // Remove loading class and restore body
  document.body.classList.remove('loading');
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.left = '';
  document.body.style.width = '';
  document.body.style.height = '';
  document.body.style.overflow = '';
  document.documentElement.style.overflow = '';

  // Restore all hidden elements
  const allElements = document.querySelectorAll('body > *');
  allElements.forEach(element => {
    element.style.visibility = '';
    element.style.opacity = '';
  });
}

// Create final henna burst effect
function createHennaBurstEffect() {
  const canvas = document.querySelector('.henna-canvas');
  if (!canvas) return;

  for (let i = 0; i < 12; i++) {
    const burst = document.createElement('div');
    burst.style.cssText = `
      position: absolute;
      width: 4px;
      height: 4px;
      background: var(--gold);
      border-radius: 50%;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      animation: hennaBurst 0.8s ease-out forwards;
      animation-delay: ${i * 0.05}s;
    `;

    const angle = (i / 12) * 360;
    burst.style.setProperty('--angle', angle + 'deg');

    canvas.appendChild(burst);
  }
}

// Initialize main page with henna-inspired entrance
function initializeMainPageWithHennaStyle() {
  const navbar = document.querySelector('.navbar');
  const words = document.querySelectorAll('.word');
  const btns = document.querySelectorAll('.btn');
  const heroImg = document.querySelector('.hero-img');
  const scrollDown = document.querySelector('.scroll-down');

  // Animate navbar with henna-style entrance
  if (navbar) {
    navbar.style.opacity = '1';
    navbar.style.transform = 'translateY(0)';
    navbar.style.filter = 'none';
  }

  // Animate hero text words with organic flow
  if (words.length > 0) {
    words.forEach((word, i) => {
      setTimeout(() => {
        word.style.opacity = '1';
        word.style.transform = 'translateY(0) rotateX(0deg)';
      }, i * 150);
    });
  }

  // Animate buttons with henna-inspired timing
  if (btns.length > 0) {
    btns.forEach((btn, i) => {
      setTimeout(() => {
        btn.style.opacity = '1';
        btn.style.transform = 'translateY(0) scale(1)';
      }, 600 + (i * 200));
    });
  }

  // Animate hero image with artistic reveal
  if (heroImg) {
    setTimeout(() => {
      heroImg.style.opacity = '1';
      heroImg.style.transform = 'rotateY(-8deg) rotateX(3deg) scale(1)';
    }, 400);
  }

  // Animate scroll indicator
  if (scrollDown) {
    setTimeout(() => {
      scrollDown.style.opacity = '1';
    }, 1200);
  }
}

// Initialize main page content animations
function initializeMainPage() {
  const navbar = document.querySelector('.navbar');
  const words = document.querySelectorAll('.word');
  const btns = document.querySelectorAll('.btn');
  const heroImg = document.querySelector('.hero-img');
  const scrollDown = document.querySelector('.scroll-down');

  // Animate navbar
  if (navbar) {
    navbar.style.opacity = '1';
    navbar.style.transform = 'translateY(0)';
  }

  // Animate hero text words
  if (words.length > 0) {
    words.forEach((word, i) => {
      setTimeout(() => {
        word.style.opacity = '1';
        word.style.transform = 'translateY(0)';
      }, i * 200);
    });
  }

  // Animate buttons
  if (btns.length > 0) {
    btns.forEach((btn, i) => {
      setTimeout(() => {
        btn.style.opacity = '1';
        btn.style.transform = 'translateY(0)';
      }, 800 + (i * 200));
    });
  }

  // Animate hero image
  if (heroImg) {
    setTimeout(() => {
      heroImg.style.opacity = '1';
    }, 600);
  }

  // Animate scroll down
  if (scrollDown) {
    setTimeout(() => {
      scrollDown.style.opacity = '1';
    }, 1000);
  }
}

    document.addEventListener('DOMContentLoaded', function() {
      // Ensure About section is immediately visible
      const aboutSection = document.querySelector('.about-section');
      const aboutContainer = document.querySelector('.about-container');
      const aboutContent = document.querySelector('.about-content');
      const aboutImages = document.querySelector('.about-images');

      if (aboutSection) {
        aboutSection.style.display = 'block';
        aboutSection.style.visibility = 'visible';
        aboutSection.style.opacity = '1';
      }

      if (aboutContainer) {
        aboutContainer.style.display = 'grid';
        aboutContainer.style.visibility = 'visible';
        aboutContainer.style.opacity = '1';
      }

      if (aboutContent) {
        aboutContent.style.opacity = '1';
        aboutContent.style.transform = 'translateX(0)';
      }

      if (aboutImages) {
        aboutImages.style.opacity = '1';
        aboutImages.style.transform = 'translateX(0)';
      }

      // Create particles for About section - same as Hero
      createAboutParticles();

      // Create particles for Services section
      createServicesParticles();

      // Function to create About section particles
      function createAboutParticles() {
        const aboutParticleContainer = document.getElementById('aboutParticleContainer');
        if (!aboutParticleContainer) return;

        for (let i = 0; i < 25; i++) {
          const particle = document.createElement('div');
          particle.classList.add('particle');

          // Random properties
          const size = Math.random() * 8 + 4;
          const posX = Math.random() * 100;
          const delay = Math.random() * 25;
          const duration = Math.random() * 15 + 25;

          particle.style.width = `${size}px`;
          particle.style.height = `${size}px`;
          particle.style.left = `${posX}%`;
          particle.style.animationDelay = `${delay}s`;
          particle.style.animationDuration = `${duration}s`;
          particle.style.opacity = Math.random() * 0.6 + 0.2;

          aboutParticleContainer.appendChild(particle);
        }
      }

      // Function to create Services section particles
      function createServicesParticles() {
        const servicesParticleContainer = document.getElementById('servicesParticleContainer');
        if (!servicesParticleContainer) return;

        for (let i = 0; i < 20; i++) {
          const particle = document.createElement('div');
          particle.classList.add('particle');

          // Random properties
          const size = Math.random() * 6 + 3;
          const posX = Math.random() * 100;
          const delay = Math.random() * 30;
          const duration = Math.random() * 20 + 30;

          particle.style.width = `${size}px`;
          particle.style.height = `${size}px`;
          particle.style.left = `${posX}%`;
          particle.style.animationDelay = `${delay}s`;
          particle.style.animationDuration = `${duration}s`;
          particle.style.opacity = Math.random() * 0.5 + 0.1;

          servicesParticleContainer.appendChild(particle);
        }
      }

      // Initialize AOS (Animate On Scroll)
      if (typeof AOS !== 'undefined') {
        AOS.init({
          duration: 800,
          once: true,
          easing: 'ease-in-out'
        });
      }

      // Image Carousel Functionality
      const images = document.querySelectorAll('.swapping-image');
      const dots = document.querySelectorAll('.dot');
      let currentIndex = 0;
      let interval;

      function showImage(index) {
        images.forEach(img => img.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        images[index].classList.add('active');
        dots[index].classList.add('active');
        currentIndex = index;
      }

      function nextImage() {
        let nextIndex = (currentIndex + 1) % images.length;
        showImage(nextIndex);
      }

      // Auto-rotate images every 5 seconds
      function startCarousel() {
        interval = setInterval(nextImage, 5000);
      }

      // Pause on hover
      const imageContainer = document.querySelector('.image-container');
      imageContainer.addEventListener('mouseenter', () => clearInterval(interval));
      imageContainer.addEventListener('mouseleave', startCarousel);

      // Dot navigation
      dots.forEach(dot => {
        dot.addEventListener('click', function() {
          const index = parseInt(this.getAttribute('data-index'));
          showImage(index);
        });
      });

      startCarousel();

      // Counter Animation for Stats
      const statNumbers = document.querySelectorAll('.stat-number');

      function animateCounters() {
        statNumbers.forEach(stat => {
          const target = parseInt(stat.getAttribute('data-target'));
          const increment = target / 100;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              clearInterval(timer);
              current = target;
            }
            stat.textContent = Math.floor(current);
          }, 20);
        });
      }

      // Intersection Observer for counter animation
      const statsSection = document.querySelector('.about-stats');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCounters();
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });

      if (statsSection) {
        observer.observe(statsSection);
      }
    });
    // Enhanced Loader Animation with Spectacular Effects
    document.addEventListener('DOMContentLoaded', function() {
      const loader = document.getElementById('loader');
      const progress = document.getElementById('progress');
      const progressText = document.getElementById('progressText');
      const navbar = document.querySelector('.navbar');
      const words = document.querySelectorAll('.word');
      const btns = document.querySelectorAll('.btn');
      const heroImg = document.querySelector('.hero-img');
      const scrollDown = document.querySelector('.scroll-down');

      // Create spectacular background particles and sparkles
      createLoaderBackgroundParticles();
      createProgressParticles();
      createSparkleEffects();

      // Enhanced loading messages
      const loadingMessages = [
        'Preparing Experience...',
        'Loading Artistry...',
        'Crafting Beauty...',
        'Almost Ready!',
        'Welcome to Henna by Fuzz!'
      ];

      let messageIndex = 0;
      let progressValue = 0;
      const progressSteps = [25, 50, 75, 90, 100]; // Faster progression
      let stepIndex = 0;

      // Faster smooth progress animation
      const progressInterval = setInterval(() => {
        if (stepIndex < progressSteps.length) {
          const targetProgress = progressSteps[stepIndex];
          const increment = (targetProgress - progressValue) * 0.15; // Faster increment

          progressValue += increment;
          progress.style.width = `${progressValue}%`;
          progressText.textContent = `${loadingMessages[messageIndex]} ${Math.floor(progressValue)}%`;

          if (Math.abs(progressValue - targetProgress) < 1) {
            progressValue = targetProgress;
            stepIndex++;
            messageIndex = Math.min(messageIndex + 1, loadingMessages.length - 1);

            if (stepIndex >= progressSteps.length) {
              clearInterval(progressInterval);

              // Spectacular exit animation
              setTimeout(() => {
                // Animate letters out with stagger
                const letters = document.querySelectorAll('.letter');
                letters.forEach((letter, i) => {
                  setTimeout(() => {
                    letter.style.transform = 'translateY(-100px) rotateX(90deg) scale(0)';
                    letter.style.opacity = '0';
                  }, i * 50);
                });

                // Animate rings out
                setTimeout(() => {
                  const rings = document.querySelectorAll('.henna-pattern');
                  rings.forEach((ring, i) => {
                    setTimeout(() => {
                      ring.style.transform = 'scale(0) rotate(720deg)';
                      ring.style.opacity = '0';
                    }, i * 100);
                  });
                }, 500);

                // Fade out progress and glow
                setTimeout(() => {
                  document.querySelector('.progress-container').style.opacity = '0';
                  document.querySelector('.loader-glow').style.opacity = '0';
                  document.querySelector('.text-glow').style.opacity = '0';
                }, 800);

                // Final loader fade
                setTimeout(() => {
                  loader.style.opacity = '0';
                  loader.style.transform = 'scale(1.1)';
                  loader.style.filter = 'blur(10px)';

                  setTimeout(() => {
                    loader.style.display = 'none';

                    // Animate main content in
                    navbar.style.transform = 'translateY(0)';
                    navbar.style.opacity = '1';

                    setTimeout(() => {
                      words.forEach((word, i) => {
                        setTimeout(() => {
                          word.style.opacity = '1';
                          word.style.transform = 'translateY(0)';
                        }, i * 200);
                      });

                      btns.forEach((btn, i) => {
                        setTimeout(() => {
                          btn.style.opacity = '1';
                          btn.style.transform = 'translateY(0)';
                        }, 1000 + (i * 200));
                      });

                      heroImg.style.opacity = '1';
                      scrollDown.style.opacity = '1';
                    }, 500);
                  }, 1000);
                }, 800); // Reduced from 1200
              }, 500); // Reduced from 800
            }
          }
        }
      }, 30); // Faster interval from 50

      // Particle creation functions
      function createLoaderBackgroundParticles() {
        const container = document.getElementById('loaderBgParticles');
        const particleCount = 50;

        for (let i = 0; i < particleCount; i++) {
          const particle = document.createElement('div');
          particle.classList.add('bg-particle');

          const size = Math.random() * 12 + 4;
          const posX = Math.random() * 100;
          const delay = Math.random() * 15;
          const duration = Math.random() * 10 + 15;

          particle.style.width = `${size}px`;
          particle.style.height = `${size}px`;
          particle.style.left = `${posX}%`;
          particle.style.animationDelay = `${delay}s`;
          particle.style.animationDuration = `${duration}s`;

          container.appendChild(particle);
        }
      }

      function createProgressParticles() {
        const container = document.getElementById('progressParticles');
        const particleCount = 20;

        for (let i = 0; i < particleCount; i++) {
          const particle = document.createElement('div');
          particle.classList.add('progress-particle');

          const size = Math.random() * 5 + 2;
          const posX = Math.random() * 100;
          const delay = Math.random() * 2.5;

          particle.style.width = `${size}px`;
          particle.style.height = `${size}px`;
          particle.style.left = `${posX}%`;
          particle.style.animationDelay = `${delay}s`;

          container.appendChild(particle);
        }
      }

      // Create floating sparkle effects
      function createSparkleEffects() {
        const container = document.getElementById('sparkleContainer');
        const sparkleCount = 30;

        for (let i = 0; i < sparkleCount; i++) {
          const sparkle = document.createElement('div');
          sparkle.classList.add('sparkle');

          const size = Math.random() * 8 + 4;
          const posX = Math.random() * 100;
          const posY = Math.random() * 100;
          const delay = Math.random() * 4;
          const duration = Math.random() * 3 + 4;

          sparkle.style.width = `${size}px`;
          sparkle.style.height = `${size}px`;
          sparkle.style.left = `${posX}%`;
          sparkle.style.top = `${posY}%`;
          sparkle.style.animationDelay = `${delay}s`;
          sparkle.style.animationDuration = `${duration}s`;

          container.appendChild(sparkle);
        }
      }

      // Create floating particles for main page
      const particleContainer = document.getElementById('particleContainer');
      for (let i = 0; i < 40; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        // Random properties
        const size = Math.random() * 12 + 6;
        const posX = Math.random() * 100;
        const delay = Math.random() * 20;
        const duration = Math.random() * 15 + 20;

        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.opacity = Math.random() * 0.8 + 0.3;

        // Enhanced golden shades with variations
        const goldenShades = [
          'radial-gradient(circle, rgba(212, 175, 55, 0.9) 0%, rgba(255, 215, 0, 0.7) 50%, rgba(184, 134, 11, 0.5) 100%)',
          'radial-gradient(circle, rgba(255, 215, 0, 0.8) 0%, rgba(212, 175, 55, 0.6) 50%, rgba(255, 193, 7, 0.4) 100%)',
          'radial-gradient(circle, rgba(184, 134, 11, 0.9) 0%, rgba(212, 175, 55, 0.7) 50%, rgba(255, 215, 0, 0.5) 100%)',
          'radial-gradient(circle, rgba(255, 193, 7, 0.8) 0%, rgba(184, 134, 11, 0.6) 50%, rgba(212, 175, 55, 0.4) 100%)'
        ];
        particle.style.background = goldenShades[Math.floor(Math.random() * goldenShades.length)];

        // Add golden glow effect
        particle.style.boxShadow = `0 0 ${15 + Math.random() * 10}px rgba(212, 175, 55, 0.6), 0 0 ${30 + Math.random() * 20}px rgba(255, 215, 0, 0.4)`;

        particleContainer.appendChild(particle);
      }

      // Scroll down button
      scrollDown.addEventListener('click', () => {
        const aboutSection = document.getElementById('about');
        aboutSection.scrollIntoView({
          behavior: 'smooth'
        });
      });

      // Navbar scroll effect
      window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      });

      // Word hover effects
      words.forEach(word => {
        word.style.opacity = '0';
        word.style.transform = 'translateY(20px)';
        word.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
      });

      // About Section Scroll Animation
      const aboutSection = document.querySelector('.about-section');
      const aboutContent = document.querySelector('.about-content');
      const aboutImages = document.querySelector('.about-images');
      const aboutParagraphs = document.querySelectorAll('.about-text p');
      const statItems = document.querySelectorAll('.stat-item');

      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      };

      const aboutObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Animate content
            setTimeout(() => {
              aboutContent.classList.add('animate');
            }, 200);

            // Animate images
            setTimeout(() => {
              aboutImages.classList.add('animate');
            }, 400);

            // Animate paragraphs with stagger
            aboutParagraphs.forEach((p, index) => {
              setTimeout(() => {
                p.classList.add('animate');
              }, 600 + (index * 200));
            });

            // Animate stats with stagger
            statItems.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('animate');
              }, 1200 + (index * 150));
            });
          }
        });
      }, observerOptions);

      aboutObserver.observe(aboutSection);

      // Image Swapping Animation
      const swappingImages = document.querySelectorAll('.swapping-image');
      const dots = document.querySelectorAll('.dot');
      let currentImageIndex = 0;
      let imageInterval;

      function showImage(index) {
        // Remove active class from all images and dots
        swappingImages.forEach(img => {
          img.classList.remove('active');
          img.classList.add('fade-out');
        });
        dots.forEach(dot => dot.classList.remove('active'));

        // Add active class to current image and dot
        setTimeout(() => {
          swappingImages.forEach(img => img.classList.remove('fade-out'));
          swappingImages[index].classList.add('active');
          dots[index].classList.add('active');
        }, 300);

        currentImageIndex = index;
      }

      function nextImage() {
        const nextIndex = (currentImageIndex + 1) % swappingImages.length;
        showImage(nextIndex);
      }

      // Auto image swapping
      function startImageSwapping() {
        imageInterval = setInterval(nextImage, 4000);
      }

      function stopImageSwapping() {
        clearInterval(imageInterval);
      }

      // Dot click handlers
      dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
          showImage(index);
          stopImageSwapping();
          setTimeout(startImageSwapping, 2000); // Restart auto-swapping after 2 seconds
        });
      });

      // Start auto image swapping when about section is visible
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            startImageSwapping();
          } else {
            stopImageSwapping();
          }
        });
      }, { threshold: 0.3 });

      imageObserver.observe(aboutImages);

      // Enhanced navigation with active states
      const navLinks = document.querySelectorAll('.nav-links a');
      const sections = document.querySelectorAll('section[id]');

      // Initialize gallery functionality
      initializeStyleGallery();

      // Galaxy Brain Navbar Scroll Effect
      initializeNavbarScrollEffect();

      // Galaxy Brain Audio Experience
      initializeAmbientAudio();

      // Initialize Portfolio functionality
      initializePortfolio();

      // Initialize Contact functionality
      initializeContact();

      // Initialize Elegant Side Popup
      initializeElegantSidePopup();

      // Initialize Mobile Optimizations
      initializeMobileOptimizations();

      // Smooth scrolling for navigation links
      navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            // Remove active class from all links
            navLinks.forEach(link => link.classList.remove('active'));
            // Add active class to clicked link
            this.classList.add('active');

            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        });
      });

      // Update active nav link on scroll
      window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
          const sectionTop = section.offsetTop;
          if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
          }
        });

        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
          }
        });
      });

      // Add sparkle effect on nav link hover
      navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
          createNavSparkle(this);
        });
      });

      function createNavSparkle(element) {
        const sparkle = document.createElement('div');
        sparkle.style.position = 'absolute';
        sparkle.style.width = '4px';
        sparkle.style.height = '4px';
        sparkle.style.background = 'var(--gold)';
        sparkle.style.borderRadius = '50%';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '9999';

        const rect = element.getBoundingClientRect();
        sparkle.style.left = (rect.left + Math.random() * rect.width) + 'px';
        sparkle.style.top = (rect.top + Math.random() * rect.height) + 'px';

        document.body.appendChild(sparkle);

        // Animate sparkle
        sparkle.animate([
          { transform: 'scale(0) rotate(0deg)', opacity: 0 },
          { transform: 'scale(1) rotate(180deg)', opacity: 1 },
          { transform: 'scale(0) rotate(360deg)', opacity: 0 }
        ], {
          duration: 800,
          easing: 'ease-out'
        }).onfinish = () => sparkle.remove();
      }
    });

    // ===== ELEGANT STYLE GALLERY FUNCTIONALITY =====
    let currentGalleryStyle = '';
    let currentImageIndex = 0;
    let galleryImages = [];

    // Gallery image collections for each style
    const styleGalleries = {
      traditional: {
        title: 'Traditional Indian Henna',
        description: 'Rich, detailed motifs with paisleys, florals, and bridal storytelling. Timeless patterns that honor ancient traditions.',
        images: [
          '../images/akmeh1.jpg',
          '../images/akmeh7.jpg',
          '../images/akmeh12.jpeg',
          '../images/work1.jpg',
          '../images/akmeh9.jpg'
        ]
      },
      arabic: {
        title: 'Arabic Henna Style',
        description: 'Bold, flowing patterns with floral and leafy elements, perfect for quick yet stunning looks with maximum visual impact.',
        images: [
          '../images/akmeh2.PNG',
          '../images/akmeh8.jpg',
          '../images/akmeh510.jpg',
          '../images/akmeh5.jpg',
          '../images/akmeh11.jpg'
        ]
      },
      khafeef: {
        title: 'Khafeef Henna Style',
        description: 'Delicate flowers intertwined with leafy vines, creating graceful patterns that embody feminine elegance and natural beauty.',
        images: [
          '../images/akmeh3.PNG',
          '../images/akmeh6.jpg',
          '../images/akmeh9.jpg',
          '../images/akmeh1.jpg',
          '../images/akmeh12.jpeg'
        ]
      },
      minimal: {
        title: 'Modern Minimal Henna',
        description: 'Clean, elegant designs for brides who love simplicity and style. Contemporary aesthetics with sophisticated beauty.',
        images: [
          '../images/akmeh4.PNG',
          '../images/akmeh11.jpg',
          '../images/akmeh7.jpg',
          '../images/akmeh510.jpg',
          '../images/work1.jpg'
        ]
      },
      fusion: {
        title: 'Fusion Henna Style',
        description: 'A unique blend of Indian, Arabic, and contemporary styles customized for your event. Creating something entirely new and personal.',
        images: [
          '../images/akmeh5.jpg',
          '../images/akmeh8.jpg',
          '../images/akmeh6.jpg',
          '../images/akmeh2.PNG',
          '../images/akmeh3.PNG'
        ]
      }
    };

    function initializeStyleGallery() {
      // Add keyboard navigation
      document.addEventListener('keydown', function(e) {
        const modal = document.getElementById('galleryModal');
        if (modal.classList.contains('active')) {
          if (e.key === 'Escape') {
            closeStyleGallery();
          } else if (e.key === 'ArrowLeft') {
            previousImage();
          } else if (e.key === 'ArrowRight') {
            nextImage();
          }
        }
      });

      // Add mobile touch/swipe support
      let touchStartX = 0;
      let touchEndX = 0;

      document.addEventListener('touchstart', function(e) {
        const modal = document.getElementById('galleryModal');
        if (modal.classList.contains('active')) {
          touchStartX = e.changedTouches[0].screenX;
        }
      });

      document.addEventListener('touchend', function(e) {
        const modal = document.getElementById('galleryModal');
        if (modal.classList.contains('active')) {
          touchEndX = e.changedTouches[0].screenX;
          handleSwipe();
        }
      });

      function handleSwipe() {
        const swipeThreshold = 50;
        const swipeDistance = touchEndX - touchStartX;

        if (Math.abs(swipeDistance) > swipeThreshold) {
          if (swipeDistance > 0) {
            // Swipe right - previous image
            previousImage();
          } else {
            // Swipe left - next image
            nextImage();
          }
        }
      }
    }

    function openStyleGallery(style) {
      currentGalleryStyle = style;
      const gallery = styleGalleries[style];

      if (!gallery) return;

      galleryImages = gallery.images;
      currentImageIndex = 0;

      // Update modal content
      document.getElementById('galleryTitle').textContent = gallery.title;
      document.getElementById('galleryDescription').textContent = gallery.description;

      // Load main image
      updateMainImage();

      // Create thumbnails
      createThumbnails();

      // Show modal with animation
      const modal = document.getElementById('galleryModal');
      modal.style.display = 'flex';
      setTimeout(() => {
        modal.classList.add('active');
      }, 10);

      // Prevent body scroll
      document.body.style.overflow = 'hidden';
    }

    function closeStyleGallery() {
      const modal = document.getElementById('galleryModal');
      modal.classList.remove('active');

      setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = '';
      }, 400);
    }

    function updateMainImage() {
      const mainImage = document.getElementById('mainGalleryImage');

      // Add loading state
      mainImage.style.opacity = '0.5';
      mainImage.style.filter = 'blur(2px)';

      // Create new image for preloading
      const newImage = new Image();
      newImage.loading = 'lazy';
      newImage.onload = function() {
        mainImage.src = this.src;
        mainImage.alt = `Professional ${styleGalleries[currentGalleryStyle].title} henna design by Henna by Fuzz - Beautiful mehndi artistry for weddings and special occasions`;

        // Smooth fade-in animation
        mainImage.style.transition = 'opacity 0.4s ease, filter 0.4s ease';
        mainImage.style.opacity = '1';
        mainImage.style.filter = 'blur(0px)';
      };

      newImage.src = galleryImages[currentImageIndex];

      // Update active thumbnail
      updateActiveThumbnail();
    }

    function createThumbnails() {
      const container = document.getElementById('thumbnailsContainer');
      container.innerHTML = '';

      galleryImages.forEach((image, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.className = `thumbnail ${index === 0 ? 'active' : ''}`;
        thumbnail.onclick = () => selectImage(index);

        const img = document.createElement('img');
        img.src = image;
        img.alt = `Thumbnail ${index + 1}`;

        thumbnail.appendChild(img);
        container.appendChild(thumbnail);
      });
    }

    function updateActiveThumbnail() {
      const thumbnails = document.querySelectorAll('.thumbnail');
      thumbnails.forEach((thumb, index) => {
        thumb.classList.toggle('active', index === currentImageIndex);
      });
    }

    function selectImage(index) {
      currentImageIndex = index;
      updateMainImage();
    }

    function previousImage() {
      currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
      updateMainImage();
    }

    function nextImage() {
      currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
      updateMainImage();
    }

    // Galaxy Brain Navbar Scroll Effect
    function initializeNavbarScrollEffect() {
      const navbar = document.querySelector('.navbar');
      let ticking = false;

      function updateNavbar() {
        const scrollY = window.scrollY;

        if (scrollY > 100) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }

        ticking = false;
      }

      function requestTick() {
        if (!ticking) {
          requestAnimationFrame(updateNavbar);
          ticking = true;
        }
      }

      window.addEventListener('scroll', requestTick);
    }

    // Galaxy Brain Ambient Audio Experience
    function initializeAmbientAudio() {
      const audioToggle = document.getElementById('audioToggle');
      const ambientAudio = document.getElementById('ambientAudio');
      const audioIcon = document.querySelector('.audio-icon');
      let isPlaying = false;

      if (!audioToggle || !ambientAudio) return;

      // Set initial volume
      ambientAudio.volume = 0.3;

      audioToggle.addEventListener('click', function() {
        if (isPlaying) {
          // Fade out and pause
          fadeOut(ambientAudio, 1000);
          audioToggle.classList.remove('playing');
          audioIcon.textContent = '🎵';
          isPlaying = false;
        } else {
          // Play and fade in
          ambientAudio.play().then(() => {
            fadeIn(ambientAudio, 1000);
            audioToggle.classList.add('playing');
            audioIcon.textContent = '🎶';
            isPlaying = true;
          }).catch(error => {
            console.log('Audio play failed:', error);
          });
        }
      });

      // Fade in function
      function fadeIn(audio, duration) {
        audio.volume = 0;
        const targetVolume = 0.3;
        const step = targetVolume / (duration / 50);

        const fadeInInterval = setInterval(() => {
          if (audio.volume < targetVolume) {
            audio.volume = Math.min(audio.volume + step, targetVolume);
          } else {
            clearInterval(fadeInInterval);
          }
        }, 50);
      }

      // Fade out function
      function fadeOut(audio, duration) {
        const startVolume = audio.volume;
        const step = startVolume / (duration / 50);

        const fadeOutInterval = setInterval(() => {
          if (audio.volume > 0) {
            audio.volume = Math.max(audio.volume - step, 0);
          } else {
            audio.pause();
            clearInterval(fadeOutInterval);
          }
        }, 50);
      }
    }

    // ===== PORTFOLIO FUNCTIONALITY =====
    function initializePortfolio() {
      // Portfolio filtering
      const filterBtns = document.querySelectorAll('.filter-btn');
      const portfolioItems = document.querySelectorAll('.portfolio-item');

      filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
          const filter = this.getAttribute('data-filter');

          // Update active button
          filterBtns.forEach(b => b.classList.remove('active'));
          this.classList.add('active');

          // Filter items
          portfolioItems.forEach(item => {
            const category = item.getAttribute('data-category');

            if (filter === 'all' || category === filter || category === 'all') {
              item.style.display = 'block';
              item.style.opacity = '0';
              item.style.transform = 'translateY(20px)';

              setTimeout(() => {
                item.style.transition = 'all 0.4s ease';
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
              }, 100);
            } else {
              item.style.transition = 'all 0.3s ease';
              item.style.opacity = '0';
              item.style.transform = 'translateY(-20px)';

              setTimeout(() => {
                item.style.display = 'none';
              }, 300);
            }
          });
        });
      });

      // Before/After comparison slider
      initializeComparisonSlider();

      // Create contact particles
      createContactParticles();
    }

    function initializeComparisonSlider() {
      const slider = document.querySelector('.comparison-slider');
      const afterImage = document.querySelector('.after-image');
      const container = document.querySelector('.comparison-container');

      if (!slider || !afterImage || !container) return;

      let isDragging = false;

      function updateSlider(x) {
        const rect = container.getBoundingClientRect();
        const percentage = Math.max(0, Math.min(100, ((x - rect.left) / rect.width) * 100));

        slider.style.left = percentage + '%';
        afterImage.style.clipPath = `polygon(${percentage}% 0%, 100% 0%, 100% 100%, ${percentage}% 100%)`;
      }

      slider.addEventListener('mousedown', () => isDragging = true);

      document.addEventListener('mousemove', (e) => {
        if (isDragging) {
          updateSlider(e.clientX);
        }
      });

      document.addEventListener('mouseup', () => isDragging = false);

      // Touch support
      slider.addEventListener('touchstart', () => isDragging = true);

      document.addEventListener('touchmove', (e) => {
        if (isDragging) {
          updateSlider(e.touches[0].clientX);
        }
      });

      document.addEventListener('touchend', () => isDragging = false);
    }

    // ===== CONTACT FUNCTIONALITY =====
    function initializeContact() {
      // Form handling
      const contactForm = document.getElementById('contactForm');

      if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
          e.preventDefault();
          handleFormSubmission(this);
        });
      }

      // Form input animations
      const formInputs = document.querySelectorAll('.form-input, .form-textarea, .form-select');

      formInputs.forEach(input => {
        input.addEventListener('focus', function() {
          this.parentElement.classList.add('focused');
        });

        input.addEventListener('blur', function() {
          if (!this.value) {
            this.parentElement.classList.remove('focused');
          }
        });

        // Check if input has value on load
        if (input.value) {
          input.parentElement.classList.add('focused');
        }
      });
    }

    function handleFormSubmission(form) {
      const submitBtn = form.querySelector('.contact-submit-btn');
      const btnText = submitBtn.querySelector('.btn-text');
      const btnIcon = submitBtn.querySelector('.btn-icon');

      // Show loading state
      submitBtn.disabled = true;
      btnText.textContent = 'Sending...';
      btnIcon.textContent = '⏳';

      // Simulate form submission (replace with actual form handling)
      setTimeout(() => {
        // Success state
        btnText.textContent = 'Message Sent!';
        btnIcon.textContent = '✨';
        submitBtn.style.background = 'linear-gradient(135deg, #4CAF50, #45a049)';

        // Reset form
        form.reset();

        // Reset button after delay
        setTimeout(() => {
          submitBtn.disabled = false;
          btnText.textContent = 'Send Message';
          btnIcon.textContent = '💌';
          submitBtn.style.background = '';
        }, 3000);
      }, 2000);
    }

    function createContactParticles() {
      const particleContainer = document.getElementById('contactParticles');
      if (!particleContainer) return;

      for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        // Random properties
        const size = Math.random() * 4 + 2;
        const posX = Math.random() * 100;
        const delay = Math.random() * 25;
        const duration = Math.random() * 10 + 25;

        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;

        particleContainer.appendChild(particle);
      }
    }

    // ===== ELEGANT SIDE POPUP FUNCTIONALITY =====
    function initializeElegantSidePopup() {
      const sidePopup = document.getElementById('elegantSidePopup');
      const dmButton = document.getElementById('elegantDmBtn');

      if (!sidePopup) return;

      let hasShown = false;

      // Show popup after delay and scroll
      setTimeout(() => {
        if (!hasShown) {
          showElegantPopup();
        }
      }, 5000); // 5 second delay for elegance

      // Show on scroll past about section
      window.addEventListener('scroll', () => {
        if (hasShown) return;

        const aboutSection = document.getElementById('about');
        if (aboutSection) {
          const rect = aboutSection.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.5) {
            showElegantPopup();
          }
        }
      });

      // DM button click tracking
      if (dmButton) {
        dmButton.addEventListener('click', () => {
          // Track conversion
          console.log('Elegant popup DM clicked');

          // Add success animation
          dmButton.style.background = 'linear-gradient(135deg, #4CAF50, #45a049)';
          dmButton.querySelector('.btn-text').textContent = 'Opening...';
          dmButton.querySelector('.btn-icon').textContent = '✨';

          // Close popup after short delay
          setTimeout(() => {
            closeElegantPopup();
          }, 1500);
        });
      }

      // Auto-hide after 15 seconds if no interaction
      setTimeout(() => {
        if (sidePopup.classList.contains('visible')) {
          closeElegantPopup();
        }
      }, 20000);

      // Keyboard support
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && sidePopup.classList.contains('visible')) {
          closeElegantPopup();
        }
      });
    }

    function showElegantPopup() {
      const sidePopup = document.getElementById('elegantSidePopup');
      if (!sidePopup || sidePopup.classList.contains('visible')) return;

      sidePopup.classList.add('visible');

      // Add gentle entrance animation
      setTimeout(() => {
        const popupContent = sidePopup.querySelector('.popup-content');
        if (popupContent) {
          popupContent.style.animation = 'elegantSlideIn 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        }
      }, 100);
    }

    function closeElegantPopup() {
      const sidePopup = document.getElementById('elegantSidePopup');
      if (!sidePopup) return;

      sidePopup.classList.remove('visible');

      // Reset DM button if it was changed
      setTimeout(() => {
        const dmButton = document.getElementById('elegantDmBtn');
        if (dmButton) {
          dmButton.style.background = '';
          dmButton.querySelector('.btn-text').textContent = 'Message Me';
          dmButton.querySelector('.btn-icon').textContent = '💌';
        }
      }, 800);
    }

    // Add elegant slide-in animation
    const elegantStyle = document.createElement('style');
    elegantStyle.textContent = `
      @keyframes elegantSlideIn {
        0% {
          transform: translateX(50px) scale(0.95);
          opacity: 0;
        }
        100% {
          transform: translateX(0) scale(1);
          opacity: 1;
        }
      }
    `;
    document.head.appendChild(elegantStyle);

    // Make closeElegantPopup globally available
    window.closeElegantPopup = closeElegantPopup;

    // ===== MOBILE OPTIMIZATION FUNCTIONS =====
    function initializeMobileOptimizations() {
      if (isMobile()) {
        initializeMobileScrollAnimations();
        initializeTouchInteractions();
        optimizeMobilePerformance();
        initializeMobileGallery();
      } else if (isTablet()) {
        initializeTabletOptimizations();
      }
    }

    // Mobile scroll-triggered animations using Intersection Observer
    function initializeMobileScrollAnimations() {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, observerOptions);

      // Add fade-in class to elements that should animate on mobile
      const animateElements = document.querySelectorAll(
        '.service-card, .portfolio-item, .about-content, .contact-form-section, .contact-info-section'
      );

      animateElements.forEach(element => {
        element.classList.add('fade-in-mobile');
        observer.observe(element);
      });
    }

    // Touch interactions for mobile
    function initializeTouchInteractions() {
      // Convert hover effects to tap effects
      const interactiveElements = document.querySelectorAll(
        '.service-card, .portfolio-item, .btn, .nav-links a'
      );

      interactiveElements.forEach(element => {
        // Add touch feedback
        element.addEventListener('touchstart', function() {
          this.style.transform = 'scale(0.98)';
          this.style.transition = 'transform 0.1s ease';
        });

        element.addEventListener('touchend', function() {
          setTimeout(() => {
            this.style.transform = '';
            this.style.transition = '';
          }, 100);
        });
      });

      // Enhanced swipe support for gallery
      initializeMobileSwipeGallery();
    }

    // Mobile swipe gallery
    function initializeMobileSwipeGallery() {
      const galleryModal = document.getElementById('galleryModal');
      if (!galleryModal) return;

      let startX = 0;
      let startY = 0;
      let distX = 0;
      let distY = 0;

      galleryModal.addEventListener('touchstart', function(e) {
        const touch = e.touches[0];
        startX = touch.clientX;
        startY = touch.clientY;
      });

      galleryModal.addEventListener('touchmove', function(e) {
        e.preventDefault(); // Prevent scrolling
        const touch = e.touches[0];
        distX = touch.clientX - startX;
        distY = touch.clientY - startY;
      });

      galleryModal.addEventListener('touchend', function() {
        const threshold = 50;

        if (Math.abs(distX) > Math.abs(distY) && Math.abs(distX) > threshold) {
          if (distX > 0) {
            previousImage(); // Swipe right
          } else {
            nextImage(); // Swipe left
          }
        }

        // Reset
        startX = 0;
        startY = 0;
        distX = 0;
        distY = 0;
      });
    }

    // Mobile performance optimizations
    function optimizeMobilePerformance() {
      // Reduce particle count
      const particles = document.querySelectorAll('.particle');
      particles.forEach((particle, index) => {
        if (index > 5) {
          particle.style.display = 'none';
        }
      });

      // Disable heavy animations
      const heavyAnimations = document.querySelectorAll(
        '.floating-element, .sparkle, .essence-particle'
      );

      heavyAnimations.forEach(element => {
        element.style.animationDuration = '0.3s';
        element.style.animationIterationCount = '1';
      });

      // Optimize images for mobile
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.hasAttribute('loading')) {
          img.setAttribute('loading', 'lazy');
        }
        img.style.imageRendering = 'optimizeSpeed';
      });

      // Reduce backdrop blur for performance
      const blurElements = document.querySelectorAll(
        '.navbar, .service-card, .contact-form-section'
      );

      blurElements.forEach(element => {
        const currentFilter = getComputedStyle(element).backdropFilter;
        if (currentFilter.includes('blur')) {
          element.style.backdropFilter = 'blur(10px)';
        }
      });
    }

    // Mobile gallery optimizations
    function initializeMobileGallery() {
      // Add tap-to-reveal for portfolio items
      const portfolioItems = document.querySelectorAll('.portfolio-item');

      portfolioItems.forEach(item => {
        let tapped = false;

        item.addEventListener('touchend', function(e) {
          e.preventDefault();

          if (!tapped) {
            // First tap - reveal overlay
            const overlay = this.querySelector('.portfolio-overlay');
            if (overlay) {
              overlay.style.opacity = '1';
              tapped = true;

              // Hide overlay after 3 seconds
              setTimeout(() => {
                overlay.style.opacity = '0';
                tapped = false;
              }, 3000);
            }
          } else {
            // Second tap - open gallery
            const category = this.getAttribute('data-category');
            if (category && category !== 'all') {
              openStyleGallery(category);
            }
          }
        });
      });

      // Optimize gallery modal for mobile
      const galleryModal = document.getElementById('galleryModal');
      if (galleryModal) {
        // Add mobile-specific styles
        galleryModal.style.padding = '1rem';

        const modalContent = galleryModal.querySelector('.modal-content');
        if (modalContent) {
          modalContent.style.maxHeight = '90vh';
          modalContent.style.overflow = 'auto';
        }
      }
    }

    // Tablet optimizations
    function initializeTabletOptimizations() {
      // Moderate animations for tablet
      const animatedElements = document.querySelectorAll(
        '.service-card, .portfolio-item, .btn'
      );

      animatedElements.forEach(element => {
        element.style.transitionDuration = '0.4s';
      });

      // Tablet-specific grid layouts are handled by CSS
      console.log('Tablet optimizations applied');
    }

    // Lazy loading optimization
    function initializeLazyLoading() {
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target;
              img.src = img.dataset.src;
              img.classList.remove('lazy');
              imageObserver.unobserve(img);
            }
          });
        });

        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
      }
    }

    // Initialize lazy loading
    initializeLazyLoading();
