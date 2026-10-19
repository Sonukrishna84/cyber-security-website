import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <main id="main-content">
      
      {/* Hero Section (Full-Bleed Matching Template Screenshot) */}
      <section className="hero-section" aria-labelledby="hero-title">
        <div className="container">
          <div className="hero-content">
            <span className="hero-eyebrow">CYBERSECURITY FOR A SAFER TOMORROW</span>
            <h1 id="hero-title">
              Secure Your Digital<br />
              Future with Intelligent<br />
              <span className="cyan-text">Cybersecurity</span>
            </h1>
            <p className="hero-paragraph">
              We help businesses protect their digital assets, infrastructure and data from evolving cyber threats with advanced security solutions and expert guidance.
            </p>
            <div className="hero-ctas">
              <Link to="/services" className="btn-pill btn-pill-primary">
                <span>Explore Services</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
              <Link to="/about" className="btn-pill btn-pill-secondary">
                <span>About Infronixx</span>
              </Link>
            </div>

            {/* Micro Features Row */}
            <div className="hero-micro-features">
              <div className="micro-feature-item">
                <div className="micro-feature-icon-circle" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div className="micro-feature-text">
                  <strong>Proactive Protection</strong>
                  <span>Stop threats before they strike.</span>
                </div>
              </div>

              <div className="micro-feature-item">
                <div className="micro-feature-icon-circle" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m14 10-4 4"></path>
                    <path d="M10 10l4 4"></path>
                    <circle cx="12" cy="12" r="6"></circle>
                  </svg>
                </div>
                <div className="micro-feature-text">
                  <strong>Risk-Focused Security</strong>
                  <span>Identify. Assess. Mitigate.</span>
                </div>
              </div>

              <div className="micro-feature-item">
                <div className="micro-feature-icon-circle" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <rect x="9" y="11" width="6" height="5" rx="1"></rect>
                    <path d="M10 11V9.5a2 2 0 0 1 4 0V11"></path>
                  </svg>
                </div>
                <div className="micro-feature-text">
                  <strong>Business-Ready Compliance</strong>
                  <span>Stay secure. Stay compliant.</span>
                </div>
              </div>
            </div>

            {/* Mobile-only visual fallback */}
            <div className="hero-visual-mobile">
              <img
                src="/assets/images/hero-globe-shield.png"
                alt="Intelligent Cybersecurity Defense Shield"
                className="hero-visual-mobile-img"
                width="500"
                height="397"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Glowing Divider Line */}
      <div className="hero-stats-divider"></div>

      {/* Stats Strip: "Trusted Security. Real Impact." */}
      <section className="stats-strip" aria-labelledby="stats-title">
        <div className="container stats-grid">
          <div className="stats-intro">
            <div className="stats-intro-eyebrow">OUR STRENGTH IN NUMBERS</div>
            <h2 id="stats-title" className="stats-intro-title">
              Trusted Security.<br />
              Real Impact.
            </h2>
            <p className="stats-intro-text">
              Built on expertise, powered by technology,<br />
              focused on your success.
            </p>
          </div>

          <div className="stats-items-row">
            {/* Stat 1 */}
            <div className="stat-col">
              <div className="stat-icon-badge" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <div className="stat-number">360°</div>
              <div className="stat-label">Threat Protection</div>
            </div>

            {/* Stat 2 */}
            <div className="stat-col">
              <div className="stat-icon-badge" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <polyline points="9 12 11 14 15 10"></polyline>
                </svg>
              </div>
              <div className="stat-number">24/7</div>
              <div className="stat-label">Monitoring &amp; Response</div>
            </div>

            {/* Stat 3 */}
            <div className="stat-col">
              <div className="stat-icon-badge" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="5" r="2.5"></circle>
                  <circle cx="6" cy="18" r="2.5"></circle>
                  <circle cx="18" cy="18" r="2.5"></circle>
                  <line x1="12" y1="7.5" x2="6" y2="15.5"></line>
                  <line x1="12" y1="7.5" x2="18" y2="15.5"></line>
                  <line x1="8.5" y1="18" x2="15.5" y2="18"></line>
                </svg>
              </div>
              <div className="stat-number">99.9%</div>
              <div className="stat-label">System Uptime</div>
            </div>

            {/* Stat 4 */}
            <div className="stat-col">
              <div className="stat-icon-badge" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <rect x="9" y="11" width="6" height="5" rx="1"></rect>
                  <path d="M10 11V9.5a2 2 0 0 1 4 0V11"></path>
                </svg>
              </div>
              <div className="stat-number">100%</div>
              <div className="stat-label">Data Protection Focus</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section: 9 Horizontal Cards in 3x3 Grid */}
      <section className="section" aria-labelledby="services-title">
        <div className="container">
          
          {/* Section Header with View All Link */}
          <div className="section-heading-bar">
            <div className="section-heading-left">
              <span className="section-eyebrow">OUR SERVICES</span>
              <h2 id="services-title">Comprehensive Cybersecurity Services</h2>
              <p>
                End-to-end security solutions to protect your business, data and digital operations from modern cyber threats.
              </p>
            </div>
            <Link to="/services" className="section-view-all">
              <span>View All Services</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>

          {/* 3x3 Grid of Horizontal Cards */}
          <div className="services-horizontal-grid">
            
            {/* Card 1: Endpoint Security */}
            <Link to="/services#endpoint-security" className="service-card-h">
              <div className="service-card-icon-circle" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <div className="service-card-text">
                <div className="service-card-title">Endpoint Security</div>
                <p className="service-card-desc">Protect your devices and endpoints from modern threats.</p>
              </div>
              <div className="service-card-arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </Link>

            {/* Card 2: Network Security */}
            <Link to="/services#network-security" className="service-card-h">
              <div className="service-card-icon-circle" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="16" y="16" width="6" height="6" rx="1"></rect>
                  <rect x="2" y="16" width="6" height="6" rx="1"></rect>
                  <rect x="9" y="2" width="6" height="6" rx="1"></rect>
                  <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path>
                  <path d="M12 12V8"></path>
                </svg>
              </div>
              <div className="service-card-text">
                <div className="service-card-title">Network Security</div>
                <p className="service-card-desc">Secure your network infrastructure and prevent unauthorized access.</p>
              </div>
              <div className="service-card-arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </Link>

            {/* Card 3: Cloud Security */}
            <Link to="/services#cloud-security" className="service-card-h">
              <div className="service-card-icon-circle" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
                </svg>
              </div>
              <div className="service-card-text">
                <div className="service-card-title">Cloud Security</div>
                <p className="service-card-desc">Keep your cloud environment safe and compliant.</p>
              </div>
              <div className="service-card-arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </Link>

            {/* Card 4: Data Protection */}
            <Link to="/services#data-protection" className="service-card-h">
              <div className="service-card-icon-circle" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                  <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                </svg>
              </div>
              <div className="service-card-text">
                <div className="service-card-title">Data Protection</div>
                <p className="service-card-desc">Safeguard your data with advanced encryption and backup solutions.</p>
              </div>
              <div className="service-card-arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </Link>

            {/* Card 5: User & Email Security */}
            <Link to="/services#user-email-security" className="service-card-h">
              <div className="service-card-icon-circle" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </div>
              <div className="service-card-text">
                <div className="service-card-title">User &amp; Email Security</div>
                <p className="service-card-desc">Defend against phishing, spam and email-borne threats.</p>
              </div>
              <div className="service-card-arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </Link>

            {/* Card 6: Application Security */}
            <Link to="/services#application-security" className="service-card-h">
              <div className="service-card-icon-circle" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <div className="service-card-text">
                <div className="service-card-title">Application Security</div>
                <p className="service-card-desc">Secure your applications from vulnerabilities and attacks.</p>
              </div>
              <div className="service-card-arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </Link>

            {/* Card 7: VAPT */}
            <Link to="/services#vapt" className="service-card-h">
              <div className="service-card-icon-circle" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <div className="service-card-text">
                <div className="service-card-title">VAPT</div>
                <p className="service-card-desc">Identify and fix security gaps before attackers find them.</p>
              </div>
              <div className="service-card-arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </Link>

            {/* Card 8: Threat Detection & Incident Response */}
            <Link to="/services#threat-detection" className="service-card-h">
              <div className="service-card-icon-circle" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="22" y1="12" x2="18" y2="12"></line>
                  <line x1="6" y1="12" x2="2" y2="12"></line>
                  <line x1="12" y1="6" x2="12" y2="2"></line>
                  <line x1="12" y1="22" x2="12" y2="18"></line>
                </svg>
              </div>
              <div className="service-card-text">
                <div className="service-card-title">Threat Detection &amp; Incident Response</div>
                <p className="service-card-desc">Detect, respond and neutralize threats in real time.</p>
              </div>
              <div className="service-card-arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </Link>

            {/* Card 9: Security Compliance Consulting */}
            <Link to="/services#security-compliance" className="service-card-h">
              <div className="service-card-icon-circle" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                </svg>
              </div>
              <div className="service-card-text">
                <div className="service-card-title">Security Compliance Consulting</div>
                <p className="service-card-desc">Meet industry standards and stay audit-ready.</p>
              </div>
              <div className="service-card-arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* About Us Section ("Your Trusted Cybersecurity Partner") */}
      <section className="section section-alt" aria-labelledby="partner-title">
        <div className="container partner-grid">
          
          {/* Left: SOC Analyst Visual with Stencil Overlay */}
          <div className="about-soc-card">
            <img
              src="/assets/images/about-soc-analyst.png"
              alt="Cyber Security Operations Center Analyst monitoring global telemetry"
              width="675"
              height="300"
              loading="lazy"
            />
            <div className="about-stencil-text" aria-hidden="true">
              <span>SECURE</span>
              <span>ANALYZE</span>
              <span>DEFEND</span>
            </div>
          </div>

          {/* Right: Text Content & Learn More CTA */}
          <div className="partner-content">
            <span className="section-eyebrow">ABOUT US</span>
            <h2 id="partner-title">Your Trusted Cybersecurity Partner</h2>
            <p>
              At Infronixx Technologies, we are committed to delivering intelligent and reliable cybersecurity solutions. Our mission is to help businesses stay ahead of evolving threats with proactive protection, expert guidance and industry best practices.
            </p>
            <Link to="/about" className="btn-pill btn-pill-primary">
              <span>Learn More</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>

        </div>
      </section>

      {/* DPDP Compliance Section (Full-Bleed Banner Matching Reference) */}
      <section className="dpdp-banner-section" aria-labelledby="dpdp-title">
        <div className="container dpdp-grid">
          
          {/* Left Content */}
          <div className="dpdp-content">
            <span className="dpdp-eyebrow">DPDP COMPLIANCE</span>
            <h2 id="dpdp-title">
              India's Digital Personal<br />
              Data Protection Framework
            </h2>
            <p>
              Help your business stay compliant with India's DPDP Act.<br />
              We provide expert guidance and tailored solutions for<br />
              secure and responsible data management.
            </p>
            <div>
              <Link to="/dpdp-compliance" className="btn-pill btn-pill-primary">
                <span>Explore DPDP Compliance</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Visual: Glowing Shield + India Map + Trust Tags */}
          <div className="dpdp-visual-wrap">
            <img
              src="/assets/images/dpdp-india-shield.png"
              alt="India DPDP Act Compliance Framework with Glowing Data Shield and India Map"
              className="dpdp-visual-img"
              width="954"
              height="256"
              loading="lazy"
            />
          </div>

        </div>
      </section>

      {/* Process Section: "A Strategic Approach to Stronger Security" */}
      <section className="section section-alt" aria-labelledby="process-title">
        <div className="container">
          
          <div className="section-heading-bar">
            <div className="section-heading-left">
              <span className="section-eyebrow">OUR PROCESS</span>
              <h2 id="process-title">A Strategic Approach to Stronger Security</h2>
              <p>
                We follow a proven, structured process to deliver effective and sustainable cybersecurity solutions.
              </p>
            </div>
            <Link to="/about#approach-title" className="section-view-all">
              <span>How We Work</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>

          {/* 4 Process Cards Row */}
          <div className="process-horizontal-grid">
            
            {/* Step 01 */}
            <div className="process-card-h">
              <div className="process-card-icon-circle" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
              <div className="process-card-text">
                <div className="process-card-header">
                  <span className="process-step-num">01</span>
                  <span className="process-step-name">Assess</span>
                </div>
                <p className="process-card-desc">Understand your environment, risks and requirements.</p>
              </div>
              <div className="process-card-arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </div>

            {/* Step 02 */}
            <div className="process-card-h">
              <div className="process-card-icon-circle" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                </svg>
              </div>
              <div className="process-card-text">
                <div className="process-card-header">
                  <span className="process-step-num">02</span>
                  <span className="process-step-name">Plan</span>
                </div>
                <p className="process-card-desc">Build a tailored security strategy for your business.</p>
              </div>
              <div className="process-card-arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </div>

            {/* Step 03 */}
            <div className="process-card-h">
              <div className="process-card-icon-circle" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <div className="process-card-text">
                <div className="process-card-header">
                  <span className="process-step-num">03</span>
                  <span className="process-step-name">Secure</span>
                </div>
                <p className="process-card-desc">Implement robust security controls and solutions.</p>
              </div>
              <div className="process-card-arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </div>

            {/* Step 04 */}
            <div className="process-card-h">
              <div className="process-card-icon-circle" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
              <div className="process-card-text">
                <div className="process-card-header">
                  <span className="process-step-num">04</span>
                  <span className="process-step-name">Monitor</span>
                </div>
                <p className="process-card-desc">Detect, respond and ensure long-term protection.</p>
              </div>
              <div className="process-card-arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Closing CTA Banner: Full-Width Cinematic Horizon */}
      <section className="cta-cinematic-section" aria-labelledby="cta-title">
        <div className="container">
          <div className="cta-cinematic-content">
            <h2 id="cta-title">
              Build a Stronger <span className="cyan-text">Security Posture</span>
            </h2>
            <p>
              Partner with Infronixx Technologies for intelligent, future-ready cybersecurity solutions.
            </p>
            <div className="cta-btn-wrap">
              <Link to="/services" className="btn-pill btn-pill-primary">
                <span>Explore Services</span>
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
