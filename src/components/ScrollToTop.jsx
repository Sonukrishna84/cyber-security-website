import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

    // If navigating to contact on mobile without a hash, auto-target the Get In Touch box
    const effectiveHash = (pathname === '/contact' && isMobile && !hash)
      ? '#contact-info-section'
      : hash;

    if (effectiveHash) {
      const targetId = effectiveHash.replace(/^#/, '');
      const scrollToHashElement = (attempts = 0) => {
        const element = document.getElementById(targetId) || document.querySelector(effectiveHash);
        if (element) {
          const navOffset = isMobile ? 70 : 84;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: Math.max(0, elementPosition - navOffset),
            behavior: 'smooth'
          });
        } else if (attempts < 15) {
          setTimeout(() => scrollToHashElement(attempts + 1), 50);
        }
      };
      setTimeout(() => scrollToHashElement(0), 50);
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return null;
}
