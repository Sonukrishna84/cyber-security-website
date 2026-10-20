import React from 'react';
import { Link } from 'react-router-dom';

export default function ServicesPage() {
  return (
    <main id="main-content" className="services-page">
      {/* =========================================================================
          SECTION 1: HERO SECTION
          ========================================================================= */}
      <section className="services-hero-section" aria-labelledby="services-hero-title">
        {/* Full-bleed Panoramic Cyber Shield Globe Background */}
        <div className="services-hero-bg-layer" aria-hidden="true">
          <img 
            src="/assets/images/hero-cyber-shield-full.jpg" 
            alt="" 
            className="services-hero-bg-img"
          />
          <div className="services-hero-bg-overlay"></div>
        </div>

        <div className="container services-hero-container">
          <div className="services-hero-row">
            {/* Left Column: Text & Features */}
            <div className="services-hero-content">
              <span className="hero-eyebrow">OUR SERVICES</span>
              
              <h1 id="services-hero-title" className="services-hero-heading">
                Comprehensive Cybersecurity<br />
                Solutions for a <span className="cyan-text">Safer Tomorrow</span>
              </h1>

              <p className="services-hero-paragraph">
                We provide end-to-end cybersecurity services to help businesses stay protected, compliant and resilient in an ever-evolving digital world.
              </p>

              {/* 3 Key Feature Chips */}
              <div className="services-hero-chips" aria-label="Key Service Benefits">
                <div className="services-hero-chip">
                  <div className="services-chip-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                  <span>Proactive Protection</span>
                </div>

                <div className="services-hero-chip">
                  <div className="services-chip-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                    </svg>
                  </div>
                  <span>Expert Guidance</span>
                </div>

                <div className="services-hero-chip">
                  <div className="services-chip-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <circle cx="12" cy="12" r="6"></circle>
                      <circle cx="12" cy="12" r="2"></circle>
                    </svg>
                  </div>
                  <span>Business Focused</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: WHAT WE OFFER (6 SERVICE CARDS)
          ========================================================================= */}
      <section className="services-offer-section section" aria-labelledby="offer-title">
        <div className="container">
          <div className="services-section-header">
            <span className="hero-eyebrow">OUR SERVICES</span>
            <h2 id="offer-title" className="section-title">What We Offer</h2>
            <p className="section-subtitle">
              From risk assessment to ongoing monitoring, our cybersecurity services are designed to address your unique challenges and keep your data, systems and users safe.
            </p>
          </div>

          <div className="services-offer-grid">
            {/* Card 1: Penetration Testing */}
            <div className="service-offer-card">
              <div className="service-card-top">
                <div className="service-card-icon-wrap" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <polyline points="9 12 11 14 15 10"></polyline>
                  </svg>
                </div>
              </div>
              <h3 className="service-card-title">Penetration Testing</h3>
              <p className="service-card-desc">
                Identify and fix vulnerabilities before attackers find them.
              </p>
              <Link to="/contact" className="service-card-action" aria-label="Inquire about Penetration Testing">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>

            {/* Card 2: Security Assessment & Audits */}
            <div className="service-offer-card">
              <div className="service-card-top">
                <div className="service-card-icon-wrap" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </div>
              </div>
              <h3 className="service-card-title">Security Assessment &amp; Audits</h3>
              <p className="service-card-desc">
                Get a clear view of your security posture with expert analysis.
              </p>
              <Link to="/contact" className="service-card-action" aria-label="Inquire about Security Assessment & Audits">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>

            {/* Card 3: 24/7 Security Monitoring */}
            <div className="service-offer-card">
              <div className="service-card-top">
                <div className="service-card-icon-wrap" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <path d="M12 8v4l3 3"></path>
                  </svg>
                </div>
              </div>
              <h3 className="service-card-title">24/7 Security Monitoring</h3>
              <p className="service-card-desc">
                Detect and respond to threats in real-time with our SOC services.
              </p>
              <Link to="/contact" className="service-card-action" aria-label="Inquire about 24/7 Security Monitoring">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>

            {/* Card 4: Cloud Security */}
            <div className="service-offer-card">
              <div className="service-card-top">
                <div className="service-card-icon-wrap" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
                  </svg>
                </div>
              </div>
              <h3 className="service-card-title">Cloud Security</h3>
              <p className="service-card-desc">
                Secure your cloud infrastructure and applications with advanced protection.
              </p>
              <Link to="/contact" className="service-card-action" aria-label="Inquire about Cloud Security">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>

            {/* Card 5: Data Protection & Compliance */}
            <div className="service-offer-card">
              <div className="service-card-top">
                <div className="service-card-icon-wrap" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                </div>
              </div>
              <h3 className="service-card-title">Data Protection &amp; Compliance</h3>
              <p className="service-card-desc">
                Meet regulatory requirements and protect sensitive data.
              </p>
              <Link to="/dpdp-compliance" className="service-card-action" aria-label="Explore DPDP Compliance and Data Protection">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>

            {/* Card 6: Security Consulting */}
            <div className="service-offer-card">
              <div className="service-card-top">
                <div className="service-card-icon-wrap" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
              </div>
              <h3 className="service-card-title">Security Consulting</h3>
              <p className="service-card-desc">
                Strategic guidance to build a stronger security ecosystem.
              </p>
              <Link to="/contact" className="service-card-action" aria-label="Inquire about Security Consulting">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: WHY CHOOSE US (TRUSTED CYBERSECURITY PARTNER)
          ========================================================================= */}
      <section className="services-partner-section section section-alt" aria-labelledby="partner-title">
        <div className="container">
          <div className="services-partner-grid">
            {/* Left Column: 3D Isometric Laptop & Datacenter Visual */}
            <div className="services-partner-visual">
              <div className="services-laptop-frame">
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
          SECTION 4: OUR PROCESS (HOW WE WORK)
          ========================================================================= */}
      <section className="services-process-section section" aria-labelledby="process-title">
        <div className="container">
          <div className="services-process-layout">
            {/* Left Header */}
            <div className="services-process-header">
              <span className="hero-eyebrow">OUR PROCESS</span>
              <h2 id="process-title" className="section-title">How We Work</h2>
              <p className="section-subtitle">
                A simple and transparent process to get you secure, faster.
              </p>
            </div>

            {/* Right Process Steps Flow */}
            <div className="services-steps-flow">
              {/* Step 01 */}
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

              {/* Step 02 */}
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

              {/* Step 03 */}
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

              {/* Step 04 */}
              <div className="process-step-item">
                <div className="process-badge">04</div>
                <h4 className="process-step-title">Monitor</h4>
                <p className="process-step-desc">Ongoing support and threat detection.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: PRE-FOOTER CTA BANNER (READY TO STRENGTHEN YOUR SECURITY?)
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
