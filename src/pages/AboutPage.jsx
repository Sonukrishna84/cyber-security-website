import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <main id="main-content" className="about-page">
      {/* =========================================================================
          SECTION 1: HERO SECTION
          ========================================================================= */}
      <section className="about-hero-section" aria-labelledby="about-hero-title">
        {/* Full-bleed Panoramic Cyber Shield Globe Background */}
        <div className="about-hero-bg-layer" aria-hidden="true">
          <img 
            src="/assets/images/hero-cyber-shield-full.jpg" 
            alt="" 
            className="about-hero-bg-img"
          />
          <div className="about-hero-bg-overlay"></div>
        </div>

        <div className="container about-hero-container">
          {/* Breadcrumbs Navigation */}
          <nav className="breadcrumbs about-breadcrumbs" aria-label="Breadcrumb">
            <ol className="breadcrumb-list">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-separator" aria-hidden="true">&rsaquo;</li>
              <li className="breadcrumb-item active" aria-current="page">About Us</li>
            </ol>
          </nav>

          <div className="about-hero-row">
            {/* Left Column: Text Content */}
            <div className="about-hero-content">
              <span className="hero-eyebrow">ABOUT US</span>
              
              <h1 id="about-hero-title" className="about-hero-heading">
                Securing Today,<br />
                <span className="cyan-text">Building a Safer Tomorrow</span>
              </h1>

              <p className="about-hero-paragraph">
                INFRONIXX Technologies is a leading cybersecurity company dedicated to protecting businesses, data and digital assets with advanced security solutions and expert guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: WHO WE ARE (Your Trusted Cybersecurity Partner)
          ========================================================================= */}
      <section className="about-whoweare-section" aria-labelledby="whoweare-title">
        <div className="container">
          <div className="about-whoweare-grid">
            {/* Left Column: Text & CTA */}
            <div className="about-whoweare-content">
              <span className="about-eyebrow">WHO WE ARE</span>
              <h2 id="whoweare-title" className="about-section-heading">
                Your Trusted Cybersecurity Partner
              </h2>
              <p className="about-body-text">
                We are a team of passionate cybersecurity professionals, technology experts and problem solvers. Our mission is to help organizations stay ahead of evolving cyber threats with reliable, scalable and future-ready security solutions.
              </p>
              <p className="about-body-text">
                With a strong focus on innovation, compliance and customer success, we deliver end-to-end cybersecurity services that protect your digital world and give you the confidence to grow.
              </p>
              <div className="about-btn-wrap">
                <Link to="/services" className="about-outline-btn">
                  <span>Our Services</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right Column: SOC Analyst Workspace Visual */}
            <div className="about-whoweare-visual">
              <div className="about-whoweare-img-frame">
                <img 
                  src="/assets/images/about-soc-analyst.png" 
                  alt="INFRONIXX Cybersecurity Operations Center analysts monitoring global threats" 
                  width="1024" 
                  height="449" 
                  loading="lazy" 
                  className="about-whoweare-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: FOUR PILLARS (Mission, Vision, Values, Commitment)
          ========================================================================= */}
      <section className="about-pillars-section" aria-label="Core Foundations">
        <div className="container">
          <div className="about-pillars-grid">
            {/* Card 1: Our Mission */}
            <div className="about-pillar-card">
              <div className="about-pillar-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="6"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                </svg>
              </div>
              <h3 className="about-pillar-title">Our Mission</h3>
              <p className="about-pillar-desc">
                To make the digital world safer by providing innovative, reliable and accessible cybersecurity solutions for businesses of all sizes.
              </p>
            </div>

            {/* Card 2: Our Vision */}
            <div className="about-pillar-card">
              <div className="about-pillar-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
              <h3 className="about-pillar-title">Our Vision</h3>
              <p className="about-pillar-desc">
                To be a globally trusted cybersecurity partner, recognized for excellence, innovation and customer success.
              </p>
            </div>

            {/* Card 3: Our Values */}
            <div className="about-pillar-card">
              <div className="about-pillar-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="6 3 18 3 22 9 12 22 2 9 6 3"></polygon>
                  <line x1="2" y1="9" x2="22" y2="9"></line>
                  <line x1="12" y1="22" x2="6" y2="9"></line>
                  <line x1="12" y1="22" x2="18" y2="9"></line>
                </svg>
              </div>
              <h3 className="about-pillar-title">Our Values</h3>
              <ul className="about-pillar-list">
                <li>
                  <span className="about-pillar-check" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </span>
                  <span>Integrity</span>
                </li>
                <li>
                  <span className="about-pillar-check" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </span>
                  <span>Innovation</span>
                </li>
                <li>
                  <span className="about-pillar-check" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </span>
                  <span>Excellence</span>
                </li>
                <li>
                  <span className="about-pillar-check" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </span>
                  <span>Customer Focus</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Our Commitment */}
            <div className="about-pillar-card">
              <div className="about-pillar-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <line x1="12" y1="8" x2="12" y2="14"></line>
                  <line x1="9" y1="11" x2="15" y2="11"></line>
                </svg>
              </div>
              <h3 className="about-pillar-title">Our Commitment</h3>
              <p className="about-pillar-desc">
                Your security is our priority. We work tirelessly to protect what matters most — your data, your business and your future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: KEY STATS & SOC TABLET INTERACTIVE
          ========================================================================= */}
      <section className="about-stats-section" aria-labelledby="about-stats-title">
        <div className="container">
          <div className="about-stats-grid">
            {/* Left Column: 2x2 Stats Cards */}
            <div className="about-stats-cards">
              {/* Stat 1 */}
              <div className="about-stat-card">
                <div className="about-stat-icon-wrap" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div className="about-stat-details">
                  <div className="about-stat-number">100+</div>
                  <div className="about-stat-label">Projects Delivered</div>
                  <div className="about-stat-sub">Across industries and sectors</div>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="about-stat-card">
                <div className="about-stat-icon-wrap" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div className="about-stat-details">
                  <div className="about-stat-number">50+</div>
                  <div className="about-stat-label">Happy Clients</div>
                  <div className="about-stat-sub">Trust us for their security</div>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="about-stat-card">
                <div className="about-stat-icon-wrap" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <polyline points="9 12 11 14 15 10"></polyline>
                  </svg>
                </div>
                <div className="about-stat-details">
                  <div className="about-stat-number">99.9%</div>
                  <div className="about-stat-label">Threat Detection Accuracy</div>
                  <div className="about-stat-sub">With advanced monitoring</div>
                </div>
              </div>

              {/* Stat 4 */}
              <div className="about-stat-card">
                <div className="about-stat-icon-wrap" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div className="about-stat-details">
                  <div className="about-stat-number">24/7</div>
                  <div className="about-stat-label">Support &amp; Monitoring</div>
                  <div className="about-stat-sub">Always-on protection</div>
                </div>
              </div>
            </div>

            {/* Right Column: High-Tech Tablet Visual */}
            <div className="about-stats-visual">
              <div className="about-stats-tablet-frame">
                <img 
                  src="/assets/images/about-cyber-tablet.jpg" 
                  alt="High-tech holographic cybersecurity tablet showing threat detection and encryption status" 
                  width="1024" 
                  height="576" 
                  loading="lazy" 
                  className="about-stats-tablet-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: WHY CHOOSE INFRONIXX?
          ========================================================================= */}
      <section className="about-whychoose-section" aria-labelledby="about-whychoose-title">
        <div className="container">
          <div className="about-whychoose-grid">
            {/* Left Column: Heading, Subtext & CTA Button */}
            <div className="about-whychoose-left">
              <h2 id="about-whychoose-title" className="about-whychoose-heading">
                Why Choose INFRONIXX?
              </h2>
              <p className="about-whychoose-subtext">
                We combine deep expertise, advanced technology and a client-first approach to deliver cybersecurity solutions that are reliable, scalable and future-ready.
              </p>
              <div className="about-whychoose-btn-wrap">
                <Link to="/contact" className="about-primary-btn">
                  <span>Get in Touch</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right Column: 2x2 Feature Highlights */}
            <div className="about-whychoose-right">
              {/* Feature 1 */}
              <div className="about-why-card">
                <div className="about-why-icon-wrap" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <polyline points="9 12 11 14 15 10"></polyline>
                  </svg>
                </div>
                <div className="about-why-info">
                  <h3 className="about-why-title">Expert Team</h3>
                  <p className="about-why-desc">Skilled professionals with real-world experience.</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="about-why-card">
                <div className="about-why-icon-wrap" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                  </svg>
                </div>
                <div className="about-why-info">
                  <h3 className="about-why-title">Advanced Technology</h3>
                  <p className="about-why-desc">Next-gen tools for stronger protection.</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="about-why-card">
                <div className="about-why-icon-wrap" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="4" y1="21" x2="4" y2="14"></line>
                    <line x1="4" y1="10" x2="4" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12" y2="3"></line>
                    <line x1="20" y1="21" x2="20" y2="16"></line>
                    <line x1="20" y1="12" x2="20" y2="3"></line>
                    <line x1="1" y1="14" x2="7" y2="14"></line>
                    <line x1="9" y1="8" x2="15" y2="8"></line>
                    <line x1="17" y1="16" x2="23" y2="16"></line>
                  </svg>
                </div>
                <div className="about-why-info">
                  <h3 className="about-why-title">Tailored Solutions</h3>
                  <p className="about-why-desc">Customised to fit your business needs.</p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="about-why-card">
                <div className="about-why-icon-wrap" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
                  </svg>
                </div>
                <div className="about-why-info">
                  <h3 className="about-why-title">Long-Term Support</h3>
                  <p className="about-why-desc">We're with you, every step of the way.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: PRE-FOOTER CTA BANNER (READY TO STRENGTHEN YOUR SECURITY?)
          ========================================================================= */}
      <section className="services-cta-banner-section" aria-labelledby="about-cta-title">
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
              <h3 id="about-cta-title">Ready to Strengthen Your Security?</h3>
              <p>Let's build a safer, more secure future together.</p>
            </div>
          </div>

          <div className="services-cta-action">
            <Link to="/contact" className="btn-pill btn-pill-primary">
              <span>Contact Us</span>
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
