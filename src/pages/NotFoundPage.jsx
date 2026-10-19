import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <main id="main-content" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', padding: '80px 0' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: '640px' }}>
        <div className="eyebrow" style={{ justifyContent: 'center', marginBottom: '14px' }}>
          <span className="eyebrow-dot" aria-hidden="true"></span>
          <span>404 Error</span>
        </div>
        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 800, marginBottom: '16px' }}>
          Page <span className="text-gradient">Not Found</span>
        </h1>
        <p style={{ color: '#A0B2C6', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '32px' }}>
          The cybersecurity asset or page you requested cannot be located. It may have moved or been updated as part of our infrastructure enhancements.
        </p>
        <div>
          <Link to="/" className="btn-pill btn-pill-primary">
            <span>Return to Home</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>
      </div>
    </main>
  );
}

