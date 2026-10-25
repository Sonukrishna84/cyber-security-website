import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <main id="main-content" className="about-page">
      {/* =========================================================================
          SECTION 1: HERO SECTION
          ========================================================================= */}
      <section className="about-hero-section" aria-labelledby="about-hero-title">
        {/* Holographic Cyber Globe Office Background Layer */}
        <div className="about-hero-bg-wrapper" aria-hidden="true">
          <img 
            src="/assets/images/about-hero-cyber-globe.png" 
            alt="" 
            className="about-hero-bg-img"
            loading="eager"
            fetchPriority="high"
          />
          <div className="about-hero-gradient-overlay"></div>
        </div>

        <div className="container about-hero-container">
          <div className="about-hero-content">
            {/* Eyebrow with Cyan Accent Dash */}
            <div className="about-hero-eyebrow">
              <span className="about-hero-eyebrow-line"></span>
              <span>ABOUT INFRONIX TECHNOLOGIES</span>
            </div>
            
            {/* Main Headline */}
            <h1 id="about-hero-title" className="about-hero-title">
              Securing Businesses.<br />
              <span className="about-hero-title-cyan">Empowering Digital Growth.</span>
            </h1>

            {/* Description Paragraph */}
            <p className="about-hero-paragraph">
              We help businesses protect their digital assets, strengthen cybersecurity, and simplify IT operations through reliable security, data privacy, and enterprise technology solutions.
            </p>

            {/* Dual CTAs */}
            <div className="about-hero-ctas">
              <Link to="/services" className="about-hero-btn-primary">
                <span>Explore Our Services</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
              <Link to="/contact" className="about-hero-btn-secondary">
                <span>Contact Us</span>
              </Link>
            </div>
          </div>

          {/* Bottom 4-Column Micro-Features Bar */}
          <div className="about-hero-features-bar" aria-label="Key Service Highlights">
            {/* Feature 1: Cybersecurity Solutions */}
            <div className="about-hero-feature-item">
              <div className="about-hero-feature-icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="#00A3FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <div className="about-hero-feature-text">
                <span>Cybersecurity</span>
                <span>Solutions</span>
              </div>
            </div>

            <div className="about-hero-feature-divider" aria-hidden="true"></div>

            {/* Feature 2: Data Privacy & Compliance */}
            <div className="about-hero-feature-item">
              <div className="about-hero-feature-icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="#00A3FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <div className="about-hero-feature-text">
                <span>Data Privacy &amp;</span>
                <span>Compliance</span>
              </div>
            </div>

            <div className="about-hero-feature-divider" aria-hidden="true"></div>

            {/* Feature 3: Enterprise IT Solutions */}
            <div className="about-hero-feature-item">
              <div className="about-hero-feature-icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="#00A3FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
                </svg>
              </div>
              <div className="about-hero-feature-text">
                <span>Enterprise</span>
                <span>IT Solutions</span>
              </div>
            </div>

            <div className="about-hero-feature-divider" aria-hidden="true"></div>

            {/* Feature 4: Managed IT Services */}
            <div className="about-hero-feature-item">
              <div className="about-hero-feature-icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="#00A3FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="18" cy="5" r="3"></circle>
                  <circle cx="6" cy="12" r="3"></circle>
                  <circle cx="18" cy="19" r="3"></circle>
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                </svg>
              </div>
              <div className="about-hero-feature-text">
                <span>Managed IT</span>
                <span>Services</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Glowing Divider Line */}
      <div className="hero-stats-divider"></div>

      {/* =========================================================================
          SECTION 2: WHO WE ARE
          ========================================================================= */}
      <section className="about-whoweare-section" aria-labelledby="whoweare-title">
        <div className="container">
          <div className="about-whoweare-grid">
            {/* Left Column: Text Content */}
            <div className="about-whoweare-content">
              <span className="about-eyebrow">WHO WE ARE</span>
              <h2 id="whoweare-title" className="about-section-heading">
                Your Trusted Partner in Cybersecurity and Enterprise Technology
              </h2>
              <p className="about-body-text">
                Infronix Technologies is a technology solutions provider dedicated to helping businesses protect their digital assets, improve IT operations, and navigate evolving cybersecurity challenges.
              </p>
              <p className="about-body-text">
                We combine security-focused strategies, innovative technologies, and a business-centric approach to help organizations strengthen their security posture, manage risks, and support digital transformation.
              </p>
              <p className="about-body-text">
                Our solutions are designed around each organization's unique requirements, operational goals, and data protection priorities.
              </p>
              <div className="about-btn-wrap">
                <Link to="/services" className="about-outline-btn">
                  <span>Explore Our Services</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right Column: SOC Analyst Visual Frame */}
            <div className="about-whoweare-visual">
              <div className="about-whoweare-img-frame">
                <img 
                  src="/assets/images/about-soc-analyst.png" 
                  alt="Infronix Technologies Security Operations team monitoring digital assets and enterprise systems" 
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
          SECTION 3: WHAT WE DO (5 Core Capabilities)
          ========================================================================= */}
      <section className="about-whatwedo-section" aria-labelledby="whatwedo-title">
        <div className="container">
          <div className="about-section-header text-center">
            <span className="about-eyebrow">WHAT WE DO</span>
            <h2 id="whatwedo-title" className="about-section-heading">
              Comprehensive Technology and Security Solutions
            </h2>
            <p className="about-section-subtitle">
              We deliver integrated cybersecurity, data privacy, and enterprise IT solutions to help businesses operate securely and efficiently.
            </p>
          </div>

          <div className="about-whatwedo-grid">
            {/* Card 1: Cybersecurity Solutions */}
            <div className="about-wedo-card">
              <div className="about-wedo-header">
                <div className="about-wedo-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <polyline points="9 12 11 14 15 10"></polyline>
                  </svg>
                </div>
                <span className="about-wedo-badge">Cybersecurity</span>
              </div>
              <h3 className="about-wedo-title">Cybersecurity Solutions</h3>
              <p className="about-wedo-desc">
                Strengthen your organization's security with endpoint protection, email security, Data Loss Prevention (DLP), Extended Detection and Response (XDR), Mobile Device Management (MDM), and enterprise security solutions.
              </p>
              <div className="about-wedo-tags">
                <span>Endpoint Protection</span>
                <span>Email Security</span>
                <span>DLP</span>
                <span>XDR</span>
                <span>MDM</span>
              </div>
            </div>

            {/* Card 2: DPDPA Compliance & Data Privacy */}
            <div className="about-wedo-card">
              <div className="about-wedo-header">
                <div className="about-wedo-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </div>
                <span className="about-wedo-badge">Data Privacy</span>
              </div>
              <h3 className="about-wedo-title">DPDPA Compliance &amp; Data Privacy</h3>
              <p className="about-wedo-desc">
                Support your data protection journey with privacy assessments, compliance workflows, data governance, and risk management solutions aligned with applicable requirements under India's Digital Personal Data Protection Act, 2023.
              </p>
              <div className="about-wedo-tags">
                <span>DPDPA 2023</span>
                <span>Privacy Assessments</span>
                <span>Compliance Workflows</span>
                <span>Data Governance</span>
              </div>
            </div>

            {/* Card 3: Microsoft & Enterprise IT Solutions */}
            <div className="about-wedo-card">
              <div className="about-wedo-header">
                <div className="about-wedo-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="7"></rect>
                    <rect x="14" y="3" width="7" height="7"></rect>
                    <rect x="14" y="14" width="7" height="7"></rect>
                    <rect x="3" y="14" width="7" height="7"></rect>
                  </svg>
                </div>
                <span className="about-wedo-badge">Enterprise IT</span>
              </div>
              <h3 className="about-wedo-title">Microsoft &amp; Enterprise IT Solutions</h3>
              <p className="about-wedo-desc">
                Improve workplace productivity and operational efficiency with Microsoft 365, business email, enterprise productivity tools, licensing, IT infrastructure, and technical support.
              </p>
              <div className="about-wedo-tags">
                <span>Microsoft 365</span>
                <span>Business Email</span>
                <span>Productivity Tools</span>
                <span>Licensing &amp; Infra</span>
              </div>
            </div>

            {/* Card 4: Data Protection & Information Security */}
            <div className="about-wedo-card">
              <div className="about-wedo-header">
                <div className="about-wedo-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </div>
                <span className="about-wedo-badge">Data Protection</span>
              </div>
              <h3 className="about-wedo-title">Data Protection &amp; Information Security</h3>
              <p className="about-wedo-desc">
                Identify data security risks, strengthen access controls, protect sensitive information, and implement appropriate safeguards against data loss and unauthorized access.
              </p>
              <div className="about-wedo-tags">
                <span>Risk Identification</span>
                <span>Access Controls</span>
                <span>Sensitive Info Defense</span>
                <span>Safeguards</span>
              </div>
            </div>

            {/* Card 5: Managed IT Services & Support (Wide Layout) */}
            <div className="about-wedo-card about-wedo-card-wide">
              <div className="about-wedo-header">
                <div className="about-wedo-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                    <line x1="6" y1="6" x2="6.01" y2="6"></line>
                    <line x1="6" y1="18" x2="6.01" y2="18"></line>
                  </svg>
                </div>
                <span className="about-wedo-badge">Managed Services</span>
              </div>
              <h3 className="about-wedo-title">Managed IT Services &amp; Support</h3>
              <p className="about-wedo-desc">
                Maintain reliable IT operations with technology support and managed services designed to improve IT performance, operational continuity, and infrastructure management.
              </p>
              <div className="about-wedo-tags">
                <span>Operational Continuity</span>
                <span>IT Performance</span>
                <span>Infrastructure Management</span>
                <span>Technical Support</span>
              </div>
            </div>
          </div>

          {/* Section 3 CTA */}
          <div className="about-wedo-cta-wrap text-center" style={{ marginTop: '40px' }}>
            <Link to="/services" className="btn-pill btn-pill-primary">
              <span>Explore Our Services</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4 & 5: OUR MISSION & OUR VISION
          ========================================================================= */}
      <section className="about-mv-section" aria-labelledby="mission-vision-title">
        <div className="container">
          <div className="about-section-header text-center">
            <span className="about-eyebrow">OUR CORE PURPOSE</span>
            <h2 id="mission-vision-title" className="about-section-heading">
              Our Mission &amp; Vision
            </h2>
            <p className="about-section-subtitle">
              Guiding our commitments and fueling innovation across every solution we engineer.
            </p>
          </div>

          <div className="about-mv-grid">
            {/* Section 4: Our Mission */}
            <div className="about-mv-card about-mission-card">
              <div className="about-mv-icon-wrap" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="6"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                </svg>
              </div>
              <span className="about-mv-badge">Our Mission</span>
              <h3 className="about-mv-heading">Making Technology More Secure and Accessible</h3>
              <p className="about-mv-quote">
                “Our mission is to make cybersecurity, data privacy, and enterprise technology more accessible, effective, and reliable for businesses of every size.”
              </p>
            </div>

            {/* Section 5: Our Vision */}
            <div className="about-mv-card about-vision-card">
              <div className="about-mv-icon-wrap" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
              <span className="about-mv-badge">Our Vision</span>
              <h3 className="about-mv-heading">Building a Secure and Future-Ready Digital World</h3>
              <p className="about-mv-quote">
                “Our vision is to become a trusted technology and cybersecurity partner for organizations seeking a secure, compliant, and future-ready digital environment.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: WHY CHOOSE INFRONIX TECHNOLOGIES? (5 Strategic Pillars)
          ========================================================================= */}
      <section className="about-whychoose-section" aria-labelledby="about-whychoose-title">
        <div className="container">
          <div className="about-section-header text-center">
            <span className="about-eyebrow">WHY CHOOSE INFRONIX TECHNOLOGIES?</span>
            <h2 id="about-whychoose-title" className="about-section-heading">
              Technology Solutions Built Around Your Business
            </h2>
            <p className="about-section-subtitle">
              We align our cybersecurity, data protection, and enterprise IT recommendations with your operational needs and business goals.
            </p>
          </div>

          <div className="about-why-five-grid">
            {/* Pillar 1: Security-First Approach */}
            <div className="about-why-pillar-card">
              <div className="about-why-pillar-header">
                <span className="about-why-pillar-num">01</span>
                <div className="about-why-pillar-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <polyline points="9 12 11 14 15 10"></polyline>
                  </svg>
                </div>
              </div>
              <h3 className="about-why-pillar-title">Security-First Approach</h3>
              <p className="about-why-pillar-desc">
                We prioritize the protection of business data, systems, infrastructure, and digital assets.
              </p>
            </div>

            {/* Pillar 2: Compliance-Focused Solutions */}
            <div className="about-why-pillar-card">
              <div className="about-why-pillar-header">
                <span className="about-why-pillar-num">02</span>
                <div className="about-why-pillar-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 11 12 14 22 4"></polyline>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                </div>
              </div>
              <h3 className="about-why-pillar-title">Compliance-Focused Solutions</h3>
              <p className="about-why-pillar-desc">
                We help organizations understand and address evolving data protection and regulatory requirements.
              </p>
            </div>

            {/* Pillar 3: Business-Centric Strategy */}
            <div className="about-why-pillar-card">
              <div className="about-why-pillar-header">
                <span className="about-why-pillar-num">03</span>
                <div className="about-why-pillar-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10"></line>
                    <line x1="12" y1="20" x2="12" y2="4"></line>
                    <line x1="6" y1="20" x2="6" y2="14"></line>
                  </svg>
                </div>
              </div>
              <h3 className="about-why-pillar-title">Business-Centric Strategy</h3>
              <p className="about-why-pillar-desc">
                We align technology recommendations with your operational needs, business objectives, and security priorities.
              </p>
            </div>

            {/* Pillar 4: Integrated IT & Security Expertise */}
            <div className="about-why-pillar-card">
              <div className="about-why-pillar-header">
                <span className="about-why-pillar-num">04</span>
                <div className="about-why-pillar-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                    <polyline points="2 17 12 22 22 17"></polyline>
                    <polyline points="2 12 12 17 22 12"></polyline>
                  </svg>
                </div>
              </div>
              <h3 className="about-why-pillar-title">Integrated IT &amp; Security Expertise</h3>
              <p className="about-why-pillar-desc">
                We bring cybersecurity, data protection, and enterprise IT solutions together to support a more connected approach to technology management.
              </p>
            </div>

            {/* Pillar 5: Long-Term Partnership */}
            <div className="about-why-pillar-card">
              <div className="about-why-pillar-header">
                <span className="about-why-pillar-num">05</span>
                <div className="about-why-pillar-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
              </div>
              <h3 className="about-why-pillar-title">Long-Term Partnership</h3>
              <p className="about-why-pillar-desc">
                We focus on lasting business relationships through responsive support, practical solutions, and continuous improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: OUR COMMITMENT
          ========================================================================= */}
      <section className="about-commitment-section" aria-labelledby="commitment-title">
        <div className="container">
          <div className="about-commitment-card">
            <div className="about-commitment-top">
              <span className="about-eyebrow">OUR COMMITMENT</span>
              <h2 id="commitment-title" className="about-section-heading">
                Protect What Matters. Move Forward with Confidence.
              </h2>
            </div>

            <div className="about-commitment-body">
              <p className="about-commitment-p">
                At Infronix Technologies, we believe cybersecurity is about more than preventing threats. It is about building trust, supporting business continuity, and enabling sustainable digital growth.
              </p>
              <p className="about-commitment-p">
                We are committed to helping organizations prepare for emerging risks, safeguard critical information, and navigate an increasingly connected world with greater confidence.
              </p>
            </div>

            <div className="about-commitment-signoff">
              <div className="about-signoff-badge-group">
                <div className="about-signoff-shield-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div className="about-signoff-meta">
                  <span className="about-signoff-company">Infronix Technologies</span>
                  <span className="about-signoff-tagline">Secure Today. Protect Tomorrow.</span>
                </div>
              </div>

              <div className="about-signoff-actions">
                <Link to="/contact" className="btn-pill btn-pill-primary">
                  <span>Talk to an Expert</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
                <Link to="/services" className="btn-pill btn-pill-outline">
                  <span>Explore Our Services</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: FINAL CTA SECTION
          ========================================================================= */}
      <section className="about-final-cta-section" aria-labelledby="final-cta-title">
        <div className="about-final-cta-bg-layer" aria-hidden="true">
          <img 
            src="/assets/images/cta-landscape.png" 
            alt="" 
            className="about-final-cta-bg-img"
          />
          <div className="about-final-cta-bg-overlay"></div>
        </div>

        <div className="container about-final-cta-container">
          <div className="about-final-cta-content">
            <span className="about-eyebrow">GET STARTED</span>
            <h2 id="final-cta-title" className="about-final-cta-heading">
              Ready to Strengthen Your Digital Security?
            </h2>
            <p className="about-final-cta-desc">
              Discover technology and cybersecurity solutions designed around your business needs.
            </p>
            <p className="about-final-cta-supporting">
              Connect with Infronix Technologies to explore cybersecurity, data privacy, and enterprise IT solutions.
            </p>
          </div>

          <div className="about-final-cta-action">
            <Link to="/contact" className="btn-pill btn-pill-primary about-final-cta-btn">
              <span>Discuss Your Requirements</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
