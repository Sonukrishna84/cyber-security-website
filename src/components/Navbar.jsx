import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { SERVICE_CATEGORIES } from '../data/servicesData';
import ServiceIcon from './ServiceIcon';

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  
  const location = useLocation();
  const megaMenuRef = useRef(null);
  const servicesBtnRef = useRef(null);
  const closeTimerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route or hash changes
  useEffect(() => {
    setIsDrawerOpen(false);
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);
  }, [location.pathname, location.hash]);

  // Handle click outside to close desktop mega-menu
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        megaMenuRef.current && 
        !megaMenuRef.current.contains(e.target) &&
        servicesBtnRef.current &&
        !servicesBtnRef.current.contains(e.target)
      ) {
        setIsServicesOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (isServicesOpen) {
          setIsServicesOpen(false);
          servicesBtnRef.current?.focus();
        }
        if (isDrawerOpen) {
          setIsDrawerOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isServicesOpen, isDrawerOpen]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isDrawerOpen]);

  const closeDrawer = () => {
    setIsDrawerOpen(false);
    setIsMobileServicesOpen(false);
  };

  // Hover handlers with debounce for smooth mouse movement
  const handleMouseEnter = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimerRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 220);
  };

  const toggleServicesClick = (e) => {
    e.preventDefault();
    setIsServicesOpen(prev => !prev);
  };

  return (
    <>
      <header className={`site-header ${isScrolled ? 'is-scrolled scrolled' : ''}`} role="banner">
        <div className="container header-container">
          <Link to="/" className="brand-link" aria-label="Infronix Technologies & Solutions LLP Home" onClick={closeDrawer}>
            <img 
              src="/assets/images/logo-stacked-clean.png" 
              alt="Infronix Technologies & Solutions LLP" 
              className="brand-logo-img" 
              width="102" 
              height="64" 
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

              {/* Services with Desktop Mega-Menu */}
              <li 
                className="nav-item-has-megamenu"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="nav-link-dropdown-wrap">
                  <NavLink 
                    to="/services" 
                    className={({ isActive }) => `nav-link nav-link-services ${isActive || isServicesOpen ? 'active' : ''}`}
                    ref={servicesBtnRef}
                    aria-haspopup="true"
                    aria-expanded={isServicesOpen}
                    id="services-nav-item"
                  >
                    <span>Services</span>
                    <button
                      type="button"
                      className={`dropdown-chevron-btn ${isServicesOpen ? 'is-open' : ''}`}
                      onClick={toggleServicesClick}
                      aria-label="Toggle Services Menu"
                      tabIndex={0}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </button>
                  </NavLink>
                </div>

                {/* Services Mega-Menu Dropdown */}
                <div 
                  className={`services-megamenu ${isServicesOpen ? 'is-open' : ''}`}
                  ref={megaMenuRef}
                  role="menu"
                  aria-labelledby="services-nav-item"
                >
                  <div className="megamenu-inner">
                    <div className="megamenu-header-row">
                      <div className="megamenu-header-title">
                        <span className="megamenu-badge">OUR EXPERTISE</span>
                        <h4>Cybersecurity Solutions &amp; Practices</h4>
                      </div>
                      <Link 
                        to="/services" 
                        className="megamenu-view-all"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        <span>View All Services Overview</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </Link>
                    </div>

                    {/* 9 Services 3x3 Grid */}
                    <div className="megamenu-grid">
                      {SERVICE_CATEGORIES.map((cat) => (
                        <Link
                          key={cat.id}
                          to={`/services#${cat.id}`}
                          className="megamenu-item"
                          role="menuitem"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          <div className="megamenu-item-icon">
                            <ServiceIcon name={cat.iconName} size={18} />
                          </div>
                          <div className="megamenu-item-text">
                            <span className="megamenu-item-title">{cat.title}</span>
                          </div>
                        </Link>
                      ))}
                    </div>

                    {/* Mega-menu Bottom Strip */}
                    <div className="megamenu-footer-strip">
                      <div className="megamenu-footer-note">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="12" y1="16" x2="12" y2="12"></line>
                          <line x1="12" y1="8" x2="12.01" y2="8"></line>
                        </svg>
                        <span>Need tailored consulting or architectural guidance? Our experts assist enterprise teams nationwide.</span>
                      </div>
                      <Link 
                        to="/contact" 
                        className="megamenu-footer-cta"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        <span>Talk to an Expert</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
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
            <Link to="/contact" className="btn-pill btn-pill-primary header-cta-btn">
              <span>Talk to an Expert</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>

            <button 
              type="button" 
              className={`menu-toggle ${isDrawerOpen ? 'is-active' : ''}`} 
              aria-expanded={isDrawerOpen} 
              aria-controls="mobile-drawer" 
              aria-label={isDrawerOpen ? "Close navigation menu" : "Open navigation menu"}
              onClick={() => setIsDrawerOpen(prev => !prev)}
            >
              {isDrawerOpen ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div 
        id="mobile-drawer" 
        className={`mobile-drawer ${isDrawerOpen ? 'active is-open' : ''}`} 
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

          {/* Mobile Services Accordion */}
          <li className="mobile-accordion-item">
            <div className="mobile-accordion-trigger-row">
              <NavLink 
                to="/services" 
                className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                onClick={closeDrawer}
              >
                Services
              </NavLink>
              <button
                type="button"
                className={`mobile-accordion-toggle ${isMobileServicesOpen ? 'is-expanded' : ''}`}
                onClick={() => setIsMobileServicesOpen(prev => !prev)}
                aria-expanded={isMobileServicesOpen}
                aria-label="Expand Services Categories"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
            </div>

            {/* Accordion Content */}
            <div className={`mobile-accordion-content ${isMobileServicesOpen ? 'is-open' : ''}`}>
              <div className="mobile-services-sublist">
                <Link 
                  to="/services" 
                  className="mobile-sublink mobile-sublink-all"
                  onClick={closeDrawer}
                >
                  <span>View All Services</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>

                {SERVICE_CATEGORIES.map((cat) => (
                  <Link
                    key={cat.id}
                    to={`/services#${cat.id}`}
                    className="mobile-sublink"
                    onClick={closeDrawer}
                  >
                    <div className="mobile-sublink-icon">
                      <ServiceIcon name={cat.iconName} size={16} />
                    </div>
                    <span className="mobile-sublink-title">{cat.title}</span>
                  </Link>
                ))}
              </div>
            </div>
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
          <Link to="/contact" className="btn-pill btn-pill-primary" style={{ width: '100%' }} onClick={closeDrawer}>
            Talk to an Expert
          </Link>
        </div>
      </div>

      <div 
        className={`drawer-backdrop ${isDrawerOpen ? 'active is-open' : ''}`} 
        aria-hidden="true"
        onClick={closeDrawer}
      ></div>
    </>
  );
}
