import React from 'react';
import { Link } from 'react-router-dom';

export default function DPDPPage() {
  return (
    <main id="main-content" className="dpdp-page">
      
      {/* =========================================================================
          SECTION 1: HERO SECTION
          ========================================================================= */}
      <section className="dpdp-hero-section" aria-labelledby="dpdp-hero-title">
        <div className="container dpdp-hero-container">
          
          {/* Left Column: Text & Actions */}
          <div className="dpdp-hero-content">
            {/* Breadcrumbs */}
            <div className="breadcrumbs-bar">
              <Link to="/">Home</Link>
              <span className="breadcrumb-sep" aria-hidden="true">&gt;</span>
              <span className="breadcrumb-current">DPDP Compliance</span>
            </div>

            <span className="hero-eyebrow">DATA PRIVACY &amp; PROTECTION</span>
            
            <h1 id="dpdp-hero-title" className="dpdp-hero-heading">
              DPDP Compliance and<br />
              <span className="cyan-text">Data Protection Services</span>
            </h1>

            <p className="dpdp-hero-paragraph">
              India's Digital Personal Data Protection framework establishes requirements for the processing of digital personal data. We help organizations understand their obligations and build stronger data protection practices through expert guidance and practical compliance support.
            </p>

            <div className="hero-ctas">
              <a href="#dpdp-support" className="btn-pill btn-pill-primary">
                <span>Explore Our DPDP Services</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
              <Link to="/contact" className="btn-pill btn-pill-secondary">
                <span>Contact Us</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Cyber Shield & India Map Visual + Floating Chips */}
          <div className="dpdp-hero-visual-wrapper">
            <div className="dpdp-visual-stage">
              <img 
                src="/assets/images/dpdp-india-shield.png" 
                alt="DPDP India Framework - Cyber Shield and Digital Map of India" 
                className="dpdp-stage-graphic"
                width="840"
                height="320"
              />

              {/* 4 Floating Badges on the Far Right */}
              <div className="dpdp-floating-chips" aria-label="Key DPDP Focus Areas">
                {/* Chip 1 */}
                <div className="dpdp-chip-item">
                  <div className="dpdp-chip-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  </div>
                  <span className="dpdp-chip-label">Privacy</span>
                </div>

                {/* Chip 2 */}
                <div className="dpdp-chip-item">
                  <div className="dpdp-chip-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                      <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                      <path d="M3 12A9 3 0 0 0 21 12"></path>
                    </svg>
                  </div>
                  <span className="dpdp-chip-label">Data Protection</span>
                </div>

                {/* Chip 3 */}
                <div className="dpdp-chip-item">
                  <div className="dpdp-chip-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <path d="m9 15 2 2 4-4"></path>
                    </svg>
                  </div>
                  <span className="dpdp-chip-label">Compliance</span>
                </div>

                {/* Chip 4 */}
                <div className="dpdp-chip-item">
                  <div className="dpdp-chip-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                  <span className="dpdp-chip-label">Security</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 2: UNDERSTANDING INDIA'S DPDP FRAMEWORK
          ========================================================================= */}
      <section className="dpdp-understanding-section section" aria-labelledby="understanding-title">
        <div className="container dpdp-understanding-grid">
          
          {/* Left Column: Heading, Text & Button */}
          <div className="dpdp-und-left">
            <span className="section-eyebrow">THE DPDP ACT, 2023</span>
            <h2 id="understanding-title">
              Understanding India's<br />
              DPDP Framework
            </h2>
            <p className="dpdp-und-text">
              The Digital Personal Data Protection (DPDP) Act, 2023 sets out the rules for the collection, use, storage and transfer of digital personal data in India. It aims to protect individual privacy while enabling responsible innovation and data-driven growth.
            </p>
            <div className="dpdp-und-btn-wrap">
              <Link to="/contact" className="btn-pill btn-pill-secondary">
                <span>Learn More About DPDP</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
          </div>

          {/* Center Column: Cyber Datacenter & Indian Flag Visual */}
          <div className="dpdp-und-center">
            <div className="dpdp-datacenter-card">
              <img 
                src="/assets/images/dpdp-flag-lock.png" 
                alt="Cybersecurity Operations and India DPDP Framework" 
                className="dpdp-datacenter-img"
                width="513"
                height="318"
              />
            </div>
          </div>

          {/* Right Column: 3 Pillar Items */}
          <div className="dpdp-und-right">
            {/* Item 1 */}
            <div className="dpdp-pillar-item">
              <div className="dpdp-pillar-badge" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <div className="dpdp-pillar-content">
                <h3>Protects Individual Privacy</h3>
                <p>Ensures personal data is handled with care and transparency.</p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="dpdp-pillar-item">
              <div className="dpdp-pillar-badge" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
              <div className="dpdp-pillar-content">
                <h3>Sets Clear Obligations</h3>
                <p>Guides how organizations collect, use and store data.</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="dpdp-pillar-item">
              <div className="dpdp-pillar-badge" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <circle cx="12" cy="11" r="3"></circle>
                </svg>
              </div>
              <div className="dpdp-pillar-content">
                <h3>Builds Trust in Digital Ecosystem</h3>
                <p>Supports a safer and more responsible data environment.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: WHY DPDP COMPLIANCE MATTERS (4 CARDS)
          ========================================================================= */}
      <section className="dpdp-matters-section section section-alt" aria-labelledby="why-matters-title">
        <div className="container">
          
          <div className="dpdp-centered-header">
            <span className="section-eyebrow">WHY IT MATTERS</span>
            <h2 id="why-matters-title">Why DPDP Compliance Matters</h2>
            <p className="section-lead-paragraph">
              Compliance is not just about meeting legal requirements &mdash; it's about building trust, reducing risk, and creating a strong foundation for long-term business growth.
            </p>
          </div>

          <div className="dpdp-matters-grid">
            {/* Card 1 */}
            <div className="dpdp-matter-card">
              <div className="matter-icon-wrap" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="16" rx="3"></rect>
                  <circle cx="9" cy="10" r="2"></circle>
                  <line x1="15" y1="8" x2="17" y2="8"></line>
                  <line x1="15" y1="12" x2="17" y2="12"></line>
                  <line x1="7" y1="16" x2="17" y2="16"></line>
                </svg>
              </div>
              <h3>Privacy Governance</h3>
              <p>Establishes clear data management practices and accountability.</p>
            </div>

            {/* Card 2 */}
            <div className="dpdp-matter-card">
              <div className="matter-icon-wrap" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <polyline points="9 12 11 14 15 10"></polyline>
                </svg>
              </div>
              <h3>Transparent Practices</h3>
              <p>Builds customer trust through responsible data handling.</p>
            </div>

            {/* Card 3 */}
            <div className="dpdp-matter-card">
              <div className="matter-icon-wrap" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
              </div>
              <h3>Security Safeguards</h3>
              <p>Reduces the risk of data breaches and unauthorized access.</p>
            </div>

            {/* Card 4 */}
            <div className="dpdp-matter-card">
              <div className="matter-icon-wrap" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 15a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z"></path>
                  <path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12"></path>
                </svg>
              </div>
              <h3>Organizational Accountability</h3>
              <p>Helps meet regulatory expectations and avoid potential penalties.</p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: OUR DPDP COMPLIANCE SUPPORT (6 CARDS + DISCLAIMER BADGE)
          ========================================================================= */}
      <section id="dpdp-support" className="dpdp-services-section section" aria-labelledby="dpdp-support-title">
        <div className="container">
          
          <div className="dpdp-support-header-row">
            <div className="dpdp-support-header-left">
              <span className="section-eyebrow">OUR SERVICES</span>
              <h2 id="dpdp-support-title">Our DPDP Compliance Support</h2>
              <p className="dpdp-support-lead">
                We provide end-to-end assistance to help organizations understand their data protection responsibilities and implement the right measures. Our services include technical support and consulting guidance &mdash; not legal advice.
              </p>
            </div>

            <div className="dpdp-disclaimer-pill" role="note">
              <div className="disclaimer-icon-wrap" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>
              </div>
              <div className="disclaimer-text">
                <strong>Technical &amp; Consulting Support</strong>
                <span>(Not Legal Advice)</span>
              </div>
            </div>
          </div>

          <div className="dpdp-services-card-grid">
            {/* Card 1 */}
            <div className="dpdp-service-h-card">
              <div className="service-h-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <div className="service-h-body">
                <h3>Data Protection Gap Assessment</h3>
                <p>Evaluate your current data practices and identify compliance gaps.</p>
              </div>
              <div className="service-h-arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </div>

            {/* Card 2 */}
            <div className="dpdp-service-h-card">
              <div className="service-h-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                  <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                  <path d="M3 12A9 3 0 0 0 21 12"></path>
                </svg>
              </div>
              <div className="service-h-body">
                <h3>Personal Data Mapping</h3>
                <p>Identify and document the types of personal data you process.</p>
              </div>
              <div className="service-h-arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </div>

            {/* Card 3 */}
            <div className="dpdp-service-h-card">
              <div className="service-h-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <div className="service-h-body">
                <h3>Privacy Policy and Notice Review</h3>
                <p>Review and help structure privacy policies and customer notices.</p>
              </div>
              <div className="service-h-arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </div>

            {/* Card 4 */}
            <div className="dpdp-service-h-card">
              <div className="service-h-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <circle cx="12" cy="11" r="3"></circle>
                </svg>
              </div>
              <div className="service-h-body">
                <h3>Data Handling Process Review</h3>
                <p>Assess data collection, storage, access and retention processes.</p>
              </div>
              <div className="service-h-arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </div>

            {/* Card 5 */}
            <div className="dpdp-service-h-card">
              <div className="service-h-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
              </div>
              <div className="service-h-body">
                <h3>Security Safeguards Assessment</h3>
                <p>Check technical and organizational security measures for data protection.</p>
              </div>
              <div className="service-h-arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </div>

            {/* Card 6 */}
            <div className="dpdp-service-h-card">
              <div className="service-h-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <polyline points="16 11 18 13 22 9"></polyline>
                </svg>
              </div>
              <div className="service-h-body">
                <h3>Compliance Documentation Support</h3>
                <p>Assist with required documentation and policy frameworks.</p>
              </div>
              <div className="service-h-arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: OUR DPDP ASSESSMENT APPROACH (01, 02, 03, 04 STEPS)
          ========================================================================= */}
      <section className="dpdp-approach-section section section-alt" aria-labelledby="dpdp-approach-title">
        <div className="container dpdp-approach-grid">
          
          <div className="dpdp-approach-intro">
            <span className="section-eyebrow">OUR APPROACH</span>
            <h2 id="dpdp-approach-title">Our DPDP Assessment Approach</h2>
            <p>
              A structured and practical approach to help you build stronger data protection practices and reduce compliance risks.
            </p>
          </div>

          <div className="dpdp-approach-steps-row">
            {/* Step 1 */}
            <div className="dpdp-step-card">
              <div className="dpdp-step-top">
                <div className="dpdp-step-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </div>
                <div className="dpdp-step-arrow" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
              </div>
              <div className="dpdp-step-number">01</div>
              <h3 className="dpdp-step-title">Assess</h3>
              <p className="dpdp-step-desc">Review current data practices and systems.</p>
            </div>

            {/* Step 2 */}
            <div className="dpdp-step-card">
              <div className="dpdp-step-top">
                <div className="dpdp-step-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="7" r="4"></circle>
                    <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"></path>
                    <circle cx="12" cy="12" r="10"></circle>
                  </svg>
                </div>
                <div className="dpdp-step-arrow" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
              </div>
              <div className="dpdp-step-number">02</div>
              <h3 className="dpdp-step-title">Identify</h3>
              <p className="dpdp-step-desc">Find gaps, risks and compliance requirements.</p>
            </div>

            {/* Step 3 */}
            <div className="dpdp-step-card">
              <div className="dpdp-step-top">
                <div className="dpdp-step-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="6"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                  </svg>
                </div>
                <div className="dpdp-step-arrow" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
              </div>
              <div className="dpdp-step-number">03</div>
              <h3 className="dpdp-step-title">Recommend</h3>
              <p className="dpdp-step-desc">Suggest practical improvements.</p>
            </div>

            {/* Step 4 */}
            <div className="dpdp-step-card">
              <div className="dpdp-step-top">
                <div className="dpdp-step-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <polyline points="9 12 11 14 15 10"></polyline>
                  </svg>
                </div>
              </div>
              <div className="dpdp-step-number">04</div>
              <h3 className="dpdp-step-title">Review</h3>
              <p className="dpdp-step-desc">Support implementation and ongoing monitoring.</p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: CLOSING CTA BANNER
          ========================================================================= */}
      <section className="dpdp-cta-section" aria-labelledby="dpdp-cta-title">
        <div className="container">
          <div className="dpdp-cta-strip">
            <div className="dpdp-cta-left">
              <div className="dpdp-cta-icon-badge" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <div className="dpdp-cta-text">
                <h2 id="dpdp-cta-title">Discuss Your DPDP Compliance Requirements</h2>
                <p>Get expert guidance on data protection, compliance readiness and secure data management practices.</p>
              </div>
            </div>

            <div className="dpdp-cta-right">
              <Link to="/contact" className="btn-pill btn-pill-primary">
                <span>Contact Us</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
