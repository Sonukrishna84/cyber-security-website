import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/style.css';

// Instant Pre-decode for critical hero images into GPU memory
if (typeof window !== 'undefined') {
  const criticalImages = [
    '/assets/images/dpdp-india-shield-full.webp',
    '/assets/images/dpdp-india-shield-full.jpg',
    '/assets/images/hero-secure-protect-shield.jpg',
    '/assets/images/hero-cyber-shield-full.jpg',
    '/assets/images/hero-shield-mobile-center.jpg'
  ];
  criticalImages.forEach(src => {
    const img = new Image();
    img.src = src;
    if (img.decode) {
      img.decode().catch(() => {});
    }
  });
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

