import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetId = hash.replace(/^#/, '');
      const scrollToHashElement = (attempts = 0) => {
        const element = document.getElementById(targetId) || document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else if (attempts < 10) {
          // Retry after brief tick to accommodate React rendering
          setTimeout(() => scrollToHashElement(attempts + 1), 60);
        }
      };
      // Allow slight tick for route transition to finish
      setTimeout(() => scrollToHashElement(0), 40);
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return null;
}
