/**
 * INFRONIXX Technologies — Vanilla JavaScript
 * Lightweight, accessible, zero-dependency interactivity.
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileNavigation();
  initCurrentYear();
  initSmoothScrollOffsets();
});

/**
 * Adds .scrolled class to header on scroll for enhanced contrast
 */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 24) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/**
 * Mobile Drawer Menu with accessible keyboard trap and ARIA states
 */
function initMobileNavigation() {
  const toggleBtn = document.querySelector('.menu-toggle');
  const drawer = document.querySelector('.mobile-drawer');
  const closeBtn = document.querySelector('.drawer-close');
  const backdrop = document.querySelector('.drawer-backdrop');
  const navLinks = document.querySelectorAll('.mobile-nav-link, .mobile-drawer .btn');

  if (!toggleBtn || !drawer || !backdrop) return;

  const openDrawer = () => {
    drawer.classList.add('active');
    backdrop.classList.add('active');
    toggleBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    
    // Focus first focusable element inside drawer
    if (closeBtn) closeBtn.focus();
  };

  const closeDrawer = () => {
    drawer.classList.remove('active');
    backdrop.classList.remove('active');
    toggleBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    toggleBtn.focus();
  };

  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeDrawer);
  }

  backdrop.addEventListener('click', closeDrawer);

  // Close when clicking nav links inside drawer
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });

  // Handle escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('active')) {
      closeDrawer();
    }
  });
}

/**
 * Dynamically inserts the current calendar year into elements with class .current-year
 */
function initCurrentYear() {
  const elements = document.querySelectorAll('.current-year');
  const year = new Date().getFullYear();
  elements.forEach(el => {
    el.textContent = year;
  });
}

/**
 * Handles in-page anchor offset for smooth scrolling with fixed header
 */
function initSmoothScrollOffsets() {
  const links = document.querySelectorAll('a[href^="#"]:not([href="#"]):not([href="#main-content"])');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerOffset = 90;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        // Set focus to the target section for accessibility
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
        
        // Update URL hash without jumping
        if (history.pushState) {
          history.pushState(null, null, targetId);
        } else {
          location.hash = targetId;
        }
      }
    });
  });
}

