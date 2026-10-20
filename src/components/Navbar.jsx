import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <>
      <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`} role="banner">
        <div className="container header-container">
          <Link to="/" className="brand-link" aria-label="Infronix Technologies & Solutions LLP Home" onClick={closeDrawer}>
            <img 
              src="/assets/images/logo-stacked-clean.png" 
              alt="Infronix Technologies & Solutions LLP" 
              className="brand-logo-img" 
              width="95" 
              height="60" 
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="main-nav" aria-label="Primary Navigation">
            <ul className="nav-list">
              <li>
                <NavLink 
                  to="/" 
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  end
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/about" 
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/services" 
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/dpdp-compliance" 
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                >
                  DPDP Compliance
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/contact" 
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Header CTAs & Mobile Toggle */}
          <div className="header-actions">
            <Link to="/services" className="btn-pill btn-pill-primary">
              <span>Explore Services</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>

            <button 
              type="button" 
              className="menu-toggle" 
              aria-expanded={isDrawerOpen} 
              aria-controls="mobile-drawer" 
              aria-label="Toggle navigation menu"
              onClick={() => setIsDrawerOpen(prev => !prev)}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div 
        id="mobile-drawer" 
        className={`mobile-drawer ${isDrawerOpen ? 'is-open' : ''}`} 
        aria-label="Mobile Navigation" 
        role="dialog" 
        aria-modal="true"
      >
        <div className="drawer-header">
          <img src="/assets/images/logo-stacked-clean.png" alt="Infronix Technologies & Solutions LLP" style={{ height: '52px', width: 'auto' }} />
          <button 
            type="button" 
            className="drawer-close" 
            aria-label="Close menu"
            onClick={closeDrawer}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <ul className="mobile-nav-list">
          <li>
            <NavLink to="/" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} end onClick={closeDrawer}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} onClick={closeDrawer}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} onClick={closeDrawer}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/dpdp-compliance" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} onClick={closeDrawer}>
              DPDP Compliance
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} onClick={closeDrawer}>
              Contact Us
            </NavLink>
          </li>
        </ul>
        <div className="mobile-drawer-cta">
          <Link to="/services" className="btn-pill btn-pill-primary" style={{ width: '100%' }} onClick={closeDrawer}>
            Explore Services
          </Link>
        </div>
      </div>

      <div 
        className={`drawer-backdrop ${isDrawerOpen ? 'is-open' : ''}`} 
        aria-hidden="true"
        onClick={closeDrawer}
      ></div>
    </>
  );
}

