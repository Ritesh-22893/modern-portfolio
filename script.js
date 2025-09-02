// SET DARK THEME IMMEDIATELY BEFORE ANY OTHER CODE
document.documentElement.setAttribute('data-theme', 'dark');

// Loader functionality
window.addEventListener('load', function() {
  const loader = document.getElementById('loader');

  // Hide loader after minimum 3 seconds (to show the full animation)
  setTimeout(() => {
    loader.classList.add('hidden');

    // Remove loader from DOM after transition
    setTimeout(() => {
      loader.remove();
    }, 500);
  }, 3000);
});

//for typed library to show auto typing text
var typed = new Typed('#element', {
  strings: ['Frontend Developer.', 'UI Designer.', 'Graphics Designer.'],
  typeSpeed: 80,
  loop: true,
  backSpeed: 90,
  showCursor: true
});

// for creating quotes with fading effect
document.addEventListener("DOMContentLoaded", () => {
  const quotes = [
    "Bringing ideas to life, one component at a time",
    "I code to create, to innovate, and to inspire",
    "Every line of code is a step closer to innovation",
    "A developer with a minimalist approach but maximal goals",
    "Building elegant web experiences",
    "Not just writing code, but building dreams",
    "In the world of tech, simplicity and speed are my allies"
  ];

  const quoteContainer = document.querySelector(".quote");
  let currentIndex = 0;

  function showQuote() {
    if (!quoteContainer) return;

    // Set the text of the current quote
    quoteContainer.textContent = quotes[currentIndex];

    // Add the 'show' class to fade in
    quoteContainer.classList.add("show");

    // After 3 seconds, fade out and move to next quote
    setTimeout(() => {
      quoteContainer.classList.remove("show");
      currentIndex = (currentIndex + 1) % quotes.length;

      // Wait for fade out, then show next quote
      setTimeout(showQuote, 500);
    }, 3000);
  }

  // Start the quote cycle
  showQuote();

  // THEME TOGGLE FUNCTIONALITY - FIXED
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const navbar = document.querySelector('.navbar');

  // Initialize with stored theme or default to dark
  const storedTheme = localStorage.getItem('theme');
  const initialTheme = storedTheme ? storedTheme : 'dark';

  // Apply theme and save if it wasn't stored
  document.documentElement.setAttribute('data-theme', initialTheme);
  if (!storedTheme) {
    localStorage.setItem('theme', 'dark');
  }

  // Update icon based on current theme
  updateThemeIcon(initialTheme);

  // Theme toggle click handler
  if (themeToggle && themeIcon) {
    themeToggle.addEventListener('click', function(e) {
      e.preventDefault();

      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

      // Change theme immediately
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }

  // Update theme icon function
  function updateThemeIcon(theme) {
    if (themeIcon) {
      if (theme === 'dark') {
        themeIcon.className = 'fas fa-moon';
      } else {
        themeIcon.className = 'fas fa-sun';
      }
    }
  }

  // Navbar scroll effect
  if (navbar) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }
});

// Floating Navigation Active State and Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.floating-nav a');
    const sections = document.querySelectorAll('section[id]');

    // Function to update active nav link based on scroll
    function updateActiveNav() {
        let current = '';
        const scrollPos = window.pageYOffset + 200;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                current = sectionId;
            }
        });

        // Update active states
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');

            if (href === `#${current}`) {
                link.classList.add('active');
            }
        });

        // Set home as active if at top of page
        if (window.pageYOffset < 100) {
            navLinks.forEach(link => link.classList.remove('active'));
            const homeLink = document.querySelector('.floating-nav a[href="#home"]');
            if (homeLink) homeLink.classList.add('active');
        }
    }

    // Smooth scroll function
    function smoothScrollTo(targetId) {
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }

    // Add click handlers to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            this.classList.add('active');
            smoothScrollTo(targetId);
        });
    });

    // Update active nav on scroll
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(updateActiveNav, 10);
    });

    // Initialize active state
    updateActiveNav();
});

// Resume section functionality
document.addEventListener('DOMContentLoaded', function() {
    const resumeButtons = document.querySelectorAll('.resume-left .btn');
    const resumeSections = document.querySelectorAll('.resume-right > div');

    function showSection(sectionName) {
        resumeSections.forEach(section => {
            section.classList.remove('active');
        });

        resumeButtons.forEach(btn => {
            btn.classList.remove('primary-btn');
        });

        const targetSection = document.querySelector(`[data-content="${sectionName}"]`);
        if (targetSection) {
            targetSection.classList.add('active');
        }

        const targetButton = document.querySelector(`[data-section="${sectionName}"]`);
        if (targetButton) {
            targetButton.classList.add('primary-btn');
        }
    }

    resumeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const sectionName = this.getAttribute('data-section');
            showSection(sectionName);
        });
    });

    showSection('skills');
});

// FAQ Accordion - FIXED VERSION
document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('.question');

    questions.forEach(question => {
        question.addEventListener('click', function() {
            const qandaItem = this.closest('.QandA');
            qandaItem.classList.toggle('active');
        });
    });
});

// FIXED FAQ ARROWS - Remove duplicate functionality
// FAQ Accordion functionality - MODERN VERSION
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const toggleBtn = item.querySelector('.toggle-btn i');

        if (question) {
            question.addEventListener('click', function() {
                const isActive = item.classList.contains('active');

                // Close all other FAQ items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                        const otherToggle = otherItem.querySelector('.toggle-btn i');
                        if (otherToggle) {
                            otherToggle.className = 'fas fa-plus';
                        }
                    }
                });

                // Toggle current item
                item.classList.toggle('active');

                // Update icon
                if (toggleBtn) {
                    if (isActive) {
                        toggleBtn.className = 'fas fa-plus';
                    } else {
                        toggleBtn.className = 'fas fa-minus';
                    }
                }
            });
        }
    });
});
