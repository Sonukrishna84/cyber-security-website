import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SERVICE_CATEGORIES } from '../data/servicesData';
import ServiceIcon from '../components/ServiceIcon';

// Triplicate categories so that infinite loop never has a blank edge on any display
const MARQUEE_CATEGORIES = [
  ...SERVICE_CATEGORIES.map(c => ({ ...c, _marqueeKey: `set1-${c.id}` })),
  ...SERVICE_CATEGORIES.map(c => ({ ...c, _marqueeKey: `set2-${c.id}` })),
  ...SERVICE_CATEGORIES.map(c => ({ ...c, _marqueeKey: `set3-${c.id}` })),
];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState(SERVICE_CATEGORIES[0].id);
  const [isLaptopZoomed, setIsLaptopZoomed] = useState(false);
  const location = useLocation();
  const chipsScrollRef = React.useRef(null);
  const isPausedRef = React.useRef(false);
  const pauseTimeoutRef = React.useRef(null);
  const scrollPosRef = React.useRef(0);

  // SEO Document Title and Meta Description
  useEffect(() => {
    document.title = "Cybersecurity Services | INFRONIXX Technologies";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Explore comprehensive cybersecurity solutions from INFRONIXX Technologies, covering endpoint protection, network defense, cloud security, data protection, user & email security, and application security.";
  }, []);

  // Set active category based on URL hash if present
  useEffect(() => {
    if (location.hash) {
      const hashId = location.hash.replace('#', '');
      const matched = SERVICE_CATEGORIES.find(c => c.id === hashId);
      if (matched) {
        setActiveCategory(matched.id);
      }
    }
  }, [location.hash]);

  const activeCategoryRef = React.useRef(activeCategory);
  activeCategoryRef.current = activeCategory;

  // ScrollSpy using throttled IntersectionObserver to keep scrolling 120 FPS buttery smooth
  useEffect(() => {
    let rafId = null;
    const observerCallback = (entries) => {
      const intersecting = entries.filter((e) => e.isIntersecting);
      if (intersecting.length > 0) {
        const topSection = intersecting[0];
        if (topSection.target.id && topSection.target.id !== activeCategoryRef.current) {
          if (rafId) cancelAnimationFrame(rafId);
          rafId = requestAnimationFrame(() => {
            setActiveCategory(topSection.target.id);
          });
        }
      }
    };

    const observerOptions = {
      root: null,
      rootMargin: '-100px 0px -50% 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    SERVICE_CATEGORIES.forEach((cat) => {
      const el = document.getElementById(cat.id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setActiveCategory(id);
    window.history.pushState(null, '', `#${id}`);

    // Pause continuous scroll briefly on click
    isPausedRef.current = true;
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    pauseTimeoutRef.current = setTimeout(() => {
      isPausedRef.current = false;
    }, 3000);

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Smooth continuous auto-scroll to the left
  useEffect(() => {
    const scroller = chipsScrollRef.current;
    if (!scroller) return;

    let animId;
    let lastTime = performance.now();
    const speed = 36; // 36px/sec smooth and readable

    const step = (now) => {
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      if (!isPausedRef.current && scroller) {
        const setWidth = scroller.scrollWidth / 3;
        if (setWidth > 0) {
          scrollPosRef.current += speed * dt;
          if (scrollPosRef.current >= setWidth) {
            scrollPosRef.current -= setWidth;
          }
          scroller.scrollLeft = scrollPosRef.current;
        }
      } else if (scroller) {
        scrollPosRef.current = scroller.scrollLeft;
      }

      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animId);
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    };
  }, []);

  const handleChipsWheel = (e) => {
    if (chipsScrollRef.current && Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      chipsScrollRef.current.scrollLeft += e.deltaY;
      scrollPosRef.current = chipsScrollRef.current.scrollLeft;
      isPausedRef.current = true;
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
      pauseTimeoutRef.current = setTimeout(() => {
        isPausedRef.current = false;
      }, 1800);
    }
  };

  const handleMouseEnter = () => {
    isPausedRef.current = true;
  };

  const handleMouseLeave = () => {
    isPausedRef.current = false;
  };

  const handleTouchStart = () => {
    isPausedRef.current = true;
  };

  const handleTouchEnd = () => {
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    pauseTimeoutRef.current = setTimeout(() => {
      isPausedRef.current = false;
    }, 2000);
  };

  return (
    <main id="main-content" className="services-page">
      {/* =========================================================================
          SECTION 1: HERO SECTION
          ========================================================================= */}
      <section className="services-hero-section" aria-labelledby="services-hero-title">
        {/* Full-width Panoramic Cyber Services Hub Background Layer */}
        <div className="services-hero-bg-layer" aria-hidden="true">
          <img 
            src="/assets/images/services-hero-cyber-hub.jpg" 
            alt="INFRONIXX Cybersecurity Services Defense Hub" 
            className="services-hero-bg-img"
            loading="eager"
            fetchPriority="high"
          />
          <div className="services-hero-bg-overlay"></div>
          <div className="services-hero-blue-tint"></div>
        </div>

        <div className="container services-hero-container">
          <div className="services-hero-content">
            {/* Eyebrow */}
            <div className="services-hero-eyebrow">
              <span className="services-eyebrow-line"></span>
              <span>ENTERPRISE CYBERSECURITY PRACTICES</span>
            </div>
            
            <h1 id="services-hero-title" className="services-hero-heading">
              Comprehensive Cybersecurity Services <br className="desktop-break" />
              for <span className="cyan-text">Your Business</span>
            </h1>

            <p className="services-hero-paragraph">
              Explore cybersecurity solutions designed to help organizations identify security risks, protect digital assets, strengthen IT infrastructure, and improve their security posture.
            </p>

            <div className="services-hero-actions">
              <a 
                href="#services-overview" 
                className="btn-pill btn-pill-primary"
                onClick={(e) => scrollToSection(e, 'services-overview')}
              >
                <span>Explore Our Services</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>

              <Link to="/contact" className="btn-pill btn-pill-secondary">
                <span>Contact Us</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
          </div>

          {/* Bottom 3-Column Service Value Bar */}
          <div className="services-hero-features-bar" aria-label="Key Service Benefits">
            <div className="services-hero-feature-item">
              <div className="services-hero-feature-icon-box" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <div className="services-hero-feature-text">
                <span className="services-feature-title">Proactive Protection</span>
                <span className="services-feature-sub">Continuous threat defense &amp; hardening</span>
              </div>
            </div>

            <div className="services-hero-feature-divider" aria-hidden="true"></div>

            <div className="services-hero-feature-item">
              <div className="services-hero-feature-icon-box" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              </div>
              <div className="services-hero-feature-text">
                <span className="services-feature-title">Expert Guidance</span>
                <span className="services-feature-sub">Certified security advisory</span>
              </div>
            </div>

            <div className="services-hero-feature-divider" aria-hidden="true"></div>

            <div className="services-hero-feature-item">
              <div className="services-hero-feature-icon-box" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="6"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                </svg>
              </div>
              <div className="services-hero-feature-text">
                <span className="services-feature-title">Business Focused</span>
                <span className="services-feature-sub">Risk-prioritized enterprise ROI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Glowing Divider Line */}
      <div className="hero-stats-divider"></div>

      {/* =========================================================================
          SECTION 2: SERVICES OVERVIEW (6 CARDS LINKING TO DETAILED SECTIONS)
          ========================================================================= */}
      <section id="services-overview" className="services-overview-section section" aria-labelledby="services-overview-title">
        <div className="container">
          <div className="services-section-header">
            <span className="hero-eyebrow">OUR SERVICES</span>
            <h2 id="services-overview-title" className="section-title">Our Cybersecurity Services</h2>
            <p className="section-subtitle">
              We provide structured cybersecurity solutions spanning six critical domains, designed to harden perimeters, protect endpoints, secure cloud workloads, and safeguard sensitive data.
            </p>
          </div>

          <div className="services-overview-grid">
            {SERVICE_CATEGORIES.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                onClick={(e) => scrollToSection(e, cat.id)}
                className="services-overview-card"
                aria-label={`Jump to detailed section: ${cat.title}`}
              >
                <div className="overview-card-header">
                  <div className="overview-card-icon" aria-hidden="true">
                    <ServiceIcon name={cat.iconName} size={24} />
                  </div>
                  <span className="overview-card-num">{cat.number}</span>
                </div>
                <h3 className="overview-card-title">{cat.title}</h3>
                <p className="overview-card-desc">{cat.shortDesc}</p>
                <div className="overview-card-footer">
                  <span className="overview-card-link-text">Explore Solutions</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Glowing Divider Line */}
      <div className="hero-stats-divider"></div>

      {/* =========================================================================
          SECTION 3: DETAILED SERVICE SECTIONS WITH STICKY CATEGORY SIDEBAR
          ========================================================================= */}
      <section className="services-details-container-section section" aria-label="Detailed Cybersecurity Services">
        <div className="container">
          {/* Category Quick Selector (Available on ALL devices, Non-Sticky, Horizontal Scrollable) */}
          <div className="services-mobile-selector-wrap services-category-selector-box" aria-label="Jump to Service Category">
            <div className="mobile-selector-header category-selector-header">
              <span className="mobile-selector-label category-selector-label">JUMP TO SERVICE:</span>
            </div>
            <div 
              className="services-mobile-chips-scroll services-category-chips-scroll"
              ref={chipsScrollRef}
              onWheel={handleChipsWheel}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {MARQUEE_CATEGORIES.map((cat) => (
                <a
                  key={cat._marqueeKey}
                  href={`#${cat.id}`}
                  onClick={(e) => scrollToSection(e, cat.id)}
                  className={`mobile-category-chip category-chip-btn ${activeCategory === cat.id ? 'active' : ''}`}
                >
                  <ServiceIcon name={cat.iconName} size={15} />
                  <span>{cat.shortTitle}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Detailed Service Content */}
          <div className="services-split-layout">
            <div className="services-details-content-column">
              {SERVICE_CATEGORIES.map((cat) => (
                <section
                  key={cat.id}
                  id={cat.id}
                  className="service-detail-block"
                  aria-labelledby={`heading-${cat.id}`}
                >
                  <div className="service-detail-block-header">
                    <div className="service-detail-title-wrap">
                      <div className="service-detail-main-icon" aria-hidden="true">
                        <ServiceIcon name={cat.iconName} size={30} />
                      </div>
                      <h2 id={`heading-${cat.id}`} className="service-detail-title">
                        {cat.title}
                      </h2>
                    </div>

                    <p className="service-detail-intro">
                      {cat.shortDesc} Our engineering team assists businesses in evaluating vulnerabilities across this domain, recommending purpose-built safeguards, and establishing continuous visibility.
                    </p>
                  </div>

                  {/* Included Solutions Grid */}
                  <div className="service-solutions-section">
                    <h3 className="solutions-section-heading">Key Capabilities &amp; Included Solutions</h3>
                    <div className="service-solutions-grid">
                      {cat.solutions.map((sol, sIdx) => (
                        <div key={sIdx} className="solution-item-card">
                          <div className="solution-item-header">
                            <div className="solution-bullet-dot" aria-hidden="true"></div>
                            <h3 className="solution-item-title">{sol.title}</h3>
                          </div>
                          <p className="solution-item-desc">{sol.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Business Use Cases & Value */}
                  {cat.useCases && cat.useCases.length > 0 && (
                    <div className="service-usecases-section">
                      <h4 className="usecases-heading">Business Value &amp; Practical Use Cases</h4>
                      <ul className="service-usecases-list">
                        {cat.useCases.map((uc, uIdx) => (
                          <li key={uIdx} className="usecase-item">
                            <span className="usecase-check-icon" aria-hidden="true">
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                            </span>
                            <span>{uc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Related Services & Contextual CTA Bar */}
                  <div className="service-detail-footer-bar">
                    {cat.related && cat.related.length > 0 && (
                      <div className="related-services-wrap">
                        <span className="related-services-label">Related Services:</span>
                        <div className="related-services-pills">
                          {cat.related.map((relId) => {
                            const relCat = SERVICE_CATEGORIES.find(c => c.id === relId);
                            if (!relCat) return null;
                            return (
                              <a
                                key={relId}
                                href={`#${relId}`}
                                onClick={(e) => scrollToSection(e, relId)}
                                className="related-service-pill"
                              >
                                <ServiceIcon name={relCat.iconName} size={14} />
                                <span>{relCat.shortTitle}</span>
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    <div className="contextual-cta-box">
                      <div className="contextual-cta-text">
                        <h5>Ready to Strengthen Your {cat.shortTitle}?</h5>
                        <p>Discuss your operational requirements and architecture with our technical advisors.</p>
                      </div>
                      <Link 
                        to="/contact" 
                        className="btn-pill btn-pill-primary contextual-cta-btn"
                        aria-label={`Contact us regarding ${cat.title}`}
                      >
                        <span>Inquire About {cat.shortTitle}</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Glowing Divider Line */}
      <div className="hero-stats-divider"></div>

      {/* =========================================================================
          SECTION 4: WHY CHOOSE US (TRUSTED CYBERSECURITY PARTNER)
          ========================================================================= */}
      <section className="services-partner-section section section-alt" aria-labelledby="partner-title">
        <div className="container">
          <div className="services-partner-grid">
            {/* Left Column: 3D Isometric Laptop & Datacenter Visual */}
            <div className="services-partner-visual">
              <div 
                className={`services-laptop-frame ${isLaptopZoomed ? 'is-zoomed' : ''}`}
                onClick={() => setIsLaptopZoomed(!isLaptopZoomed)}
                role="button"
                tabIndex={0}
                aria-label="Toggle zoom 3D cybersecurity laptop visual"
                title="Click to zoom image"
              >
                <img 
                  src="/assets/images/services-partner-laptop.jpg" 
                  alt="Futuristic cybersecurity laptop and server infrastructure" 
                  className="services-laptop-img"
                />
              </div>
            </div>

            {/* Right Column: Content & 4 Features Grid */}
            <div className="services-partner-content">
              <span className="hero-eyebrow">WHY CHOOSE US</span>
              <h2 id="partner-title" className="section-title">Your Trusted Cybersecurity Partner</h2>
              <p className="services-partner-desc">
                We combine deep expertise, advanced technology and a client-first approach to deliver cybersecurity solutions that are reliable, scalable and future-ready.
              </p>

              <div className="services-partner-features">
                {/* Feature 1 */}
                <div className="partner-feature-item">
                  <div className="partner-feature-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <div className="partner-feature-text">
                    <h4>Experienced Team</h4>
                    <p>Skilled professionals with real-world expertise.</p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="partner-feature-item">
                  <div className="partner-feature-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                      <rect x="9" y="9" width="6" height="6"></rect>
                      <line x1="9" y1="1" x2="9" y2="4"></line>
                      <line x1="15" y1="1" x2="15" y2="4"></line>
                      <line x1="9" y1="20" x2="9" y2="23"></line>
                      <line x1="15" y1="20" x2="15" y2="23"></line>
                      <line x1="20" y1="9" x2="23" y2="9"></line>
                      <line x1="20" y1="14" x2="23" y2="14"></line>
                      <line x1="1" y1="9" x2="4" y2="9"></line>
                      <line x1="1" y1="14" x2="4" y2="14"></line>
                    </svg>
                  </div>
                  <div className="partner-feature-text">
                    <h4>Advanced Technology</h4>
                    <p>Next-gen tools for stronger protection.</p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="partner-feature-item">
                  <div className="partner-feature-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3"></circle>
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                    </svg>
                  </div>
                  <div className="partner-feature-text">
                    <h4>Tailored Solutions</h4>
                    <p>Customized to fit your business needs.</p>
                  </div>
                </div>

                {/* Feature 4 */}
                <div className="partner-feature-item">
                  <div className="partner-feature-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
                    </svg>
                  </div>
                  <div className="partner-feature-text">
                    <h4>Long-Term Support</h4>
                    <p>We're with you, every step of the way.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: OUR PROCESS (HOW WE WORK)
          ========================================================================= */}
      <section className="services-process-section section" aria-labelledby="process-title">
        <div className="container">
          <div className="services-process-layout">
            <div className="services-process-header">
              <span className="hero-eyebrow">OUR PROCESS</span>
              <h2 id="process-title" className="section-title">How We Work</h2>
              <p className="section-subtitle">
                A simple and transparent process to get you secure, faster.
              </p>
            </div>

            <div className="services-steps-flow">
              <div className="process-step-item">
                <div className="process-badge">01</div>
                <h4 className="process-step-title">Assess</h4>
                <p className="process-step-desc">Understand your needs and identify risks.</p>
                <div className="process-connector" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>

              <div className="process-step-item">
                <div className="process-badge">02</div>
                <h4 className="process-step-title">Plan</h4>
                <p className="process-step-desc">Create a customized security strategy.</p>
                <div className="process-connector" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>

              <div className="process-step-item">
                <div className="process-badge">03</div>
                <h4 className="process-step-title">Implement</h4>
                <p className="process-step-desc">Deploy solutions and strengthen your systems.</p>
                <div className="process-connector" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>

              <div className="process-step-item">
                <div className="process-badge">04</div>
                <h4 className="process-step-title">Monitor</h4>
                <p className="process-step-desc">Ongoing support and continuous security monitoring.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: PRE-FOOTER CTA BANNER
          ========================================================================= */}
      <section className="services-cta-banner-section" aria-labelledby="services-cta-title">
        <div className="services-cta-bg-layer" aria-hidden="true">
          <img 
            src="/assets/images/cta-landscape.png" 
            alt="" 
            className="services-cta-bg-img"
          />
          <div className="services-cta-bg-overlay"></div>
        </div>

        <div className="container services-cta-container">
          <div className="services-cta-content">
            <div className="services-cta-badge" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <div className="services-cta-text">
              <h3 id="services-cta-title">Ready to Strengthen Your Security?</h3>
              <p>Let's build a safer, more secure future together.</p>
            </div>
          </div>

          <div className="services-cta-action">
            <Link to="/contact" className="btn-pill btn-pill-primary">
              <span>Get a Quote</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
