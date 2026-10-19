import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <main id="main-content">
      
      {/* Hero Section */}
      <section className="hero-section" aria-label="Hero Introduction">
        <div className="container hero-container">
          <div className="hero-content">
            
            <div className="hero-badge">
              <span className="hero-badge-dot" aria-hidden="true"></span>
              <span className="hero-badge-text">CYBER SECURITY DIVISION</span>
            </div>

            <h1 className="hero-title">
              Fortifying Modern Business with <span className="hero-title-highlight">Intelligent Cybersecurity</span>
            </h1>

            <p className="hero-subtitle">
              Comprehensive vulnerability assessment, threat intelligence, and tailored defense strategies to secure your digital infrastructure against advanced threats.
            </p>

            <div className="hero-ctas">
              <Link to="/services" className="btn-pill btn-pill-primary">
                <span>Explore Services</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
              <Link to="/contact" className="btn-pill btn-pill-secondary">
                <span>Contact Us</span>
              </Link>
            </div>

            <div className="hero-micro-features" aria-label="Key security highlights">
              <div className="micro-feature">
                <span className="micro-feature-check" aria-hidden="true">&#10003;</span>
                <span className="micro-feature-text">Proactive Defense</span>
              </div>
              <div className="micro-feature">
                <span className="micro-feature-check" aria-hidden="true">&#10003;</span>
                <span className="micro-feature-text">Cloud &amp; Network Security</span>
              </div>
              <div className="micro-feature">
                <span className="micro-feature-check" aria-hidden="true">&#10003;</span>
                <span className="micro-feature-text">Compliance Advisory</span>
              </div>
            </div>

          </div>
        </div>

        {/* Stats Strip with Glowing Accent Bar */}
        <div className="stats-strip">
          <div className="container stats-flex-container">
            <div className="stats-intro-col">
              <span className="stats-intro-eyebrow">OUR STRENGTH IN NUMBERS</span>
              <h2 className="stats-intro-title">Securing Enterprise Ecosystems Across India</h2>
            </div>

            <div className="stats-items-row">
              <div className="stat-card">
                <div className="stat-value">99.8%</div>
                <div className="stat-label">Threat Neutralization</div>
                <div className="stat-sub">Enterprise protection rate across managed endpoints</div>
              </div>

              <div className="stat-card">
                <div className="stat-value">24/7</div>
                <div className="stat-label">Continuous Monitoring</div>
                <div className="stat-sub">Real-time alerts, proactive scanning &amp; rapid response</div>
              </div>

              <div className="stat-card">
                <div className="stat-value">100%</div>
                <div className="stat-label">Compliance Focus</div>
                <div className="stat-sub">DPDP, ISO 27001 &amp; CERT-In aligned security frameworks</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section" aria-labelledby="services-title">
        <div className="container">
          
          <div className="section-header-split">
            <div>
              <span className="section-eyebrow">SERVICES</span>
              <h2 id="services-title">Comprehensive Cybersecurity Services</h2>
            </div>
            <Link to="/services" className="section-view-all">
              <span>View All Services</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </Link>
          </div>

          <div className="services-horizontal-grid">
            <Link to="/services#endpoint-security" className="service-card-h">
              <div className="service-card-h-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="12" x="3" y="4" rx="2"></rect><line x1="2" x2="22" y1="20" y2="20"></line></svg>
              </div>
              <div className="service-card-h-body">
                <h3>Endpoint Security</h3>
                <p>Advanced protection for workstations, servers, and mobile devices against zero-day threats.</p>
              </div>
              <div className="service-card-h-arrow" aria-hidden="true">&rarr;</div>
            </Link>

            <Link to="/services#network-security" className="service-card-h">
              <div className="service-card-h-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"></rect><rect width="6" height="6" x="9" y="9" rx="1"></rect></svg>
              </div>
              <div className="service-card-h-body">
                <h3>Network Security</h3>
                <p>Next-gen firewalls, intrusion detection, and micro-segmentation to guard perimeter defenses.</p>
              </div>
              <div className="service-card-h-arrow" aria-hidden="true">&rarr;</div>
            </Link>

            <Link to="/services#cloud-security" className="service-card-h">
              <div className="service-card-h-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>
              </div>
              <div className="service-card-h-body">
                <h3>Cloud Security</h3>
                <p>Safeguarding hybrid and multi-cloud architectures with posture management and IAM governance.</p>
              </div>
              <div className="service-card-h-arrow" aria-hidden="true">&rarr;</div>
            </Link>

            <Link to="/services#data-protection" className="service-card-h">
              <div className="service-card-h-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
              </div>
              <div className="service-card-h-body">
                <h3>Data Protection</h3>
                <p>End-to-end data encryption, loss prevention (DLP), and privacy management solutions.</p>
              </div>
              <div className="service-card-h-arrow" aria-hidden="true">&rarr;</div>
            </Link>

            <Link to="/services#user-email-security" className="service-card-h">
              <div className="service-card-h-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
              </div>
              <div className="service-card-h-body">
                <h3>User &amp; Email Security</h3>
                <p>Anti-phishing, credential protection, and security awareness training for workforce defense.</p>
              </div>
              <div className="service-card-h-arrow" aria-hidden="true">&rarr;</div>
            </Link>

            <Link to="/services#application-security" className="service-card-h">
              <div className="service-card-h-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
              </div>
              <div className="service-card-h-body">
                <h3>Application Security</h3>
                <p>Securing source code, CI/CD pipelines, and web applications through dynamic &amp; static analysis.</p>
              </div>
              <div className="service-card-h-arrow" aria-hidden="true">&rarr;</div>
            </Link>

            <Link to="/services#vapt" className="service-card-h">
              <div className="service-card-h-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="22" x2="18" y1="12" y2="12"></line><line x1="6" x2="2" y1="12" y2="12"></line><line x1="12" x2="12" y1="6" y2="2"></line><line x1="12" x2="12" y1="22" y2="18"></line></svg>
              </div>
              <div className="service-card-h-body">
                <h3>VAPT Assessments</h3>
                <p>Rigorous vulnerability scanning and simulated adversary attacks to expose critical gaps.</p>
              </div>
              <div className="service-card-h-arrow" aria-hidden="true">&rarr;</div>
            </Link>

            <Link to="/services#threat-detection" className="service-card-h">
              <div className="service-card-h-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <div className="service-card-h-body">
                <h3>Threat Detection &amp; IR</h3>
                <p>Rapid containment, digital forensics, and proactive hunting to minimize impact of breaches.</p>
              </div>
              <div className="service-card-h-arrow" aria-hidden="true">&rarr;</div>
            </Link>
          </div>

        </div>
      </section>

      {/* DPDP Compliance Banner Section */}
      <section className="dpdp-banner-section" aria-labelledby="dpdp-title">
        <div className="container dpdp-grid">
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

      {/* Process Section */}
      <section className="section section-alt" aria-labelledby="process-title">
        <div className="container">
          <div className="section-header-split" style={{ marginBottom: '28px' }}>
            <div>
              <span className="section-eyebrow">OUR PROCESS</span>
              <h2 id="process-title" style={{ fontSize: 'clamp(1.5rem, 2.3vw, 1.95rem)', marginBottom: '6px' }}>
                A Strategic Approach to Stronger Security
              </h2>
              <p style={{ color: '#8E9EB5', fontSize: '0.9rem', margin: 0 }}>
                We follow a proven, structured process to deliver effective and sustainable cybersecurity solutions.
              </p>
            </div>
            <Link to="/about" className="section-view-all" style={{ alignSelf: 'flex-start' }}>
              <span>How We Work</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </Link>
          </div>

          <div className="process-horizontal-grid">
            <div className="process-card-h">
              <div className="process-card-arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
              </div>
              <div className="process-card-icon-wrap">
                <div className="process-step-badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </div>
              </div>
              <div className="process-card-content">
                <div className="process-card-title-row">
                  <span className="process-step-num">01</span>
                  <span className="process-step-name">Assess</span>
                </div>
                <p className="process-card-desc">Understand your environment, risks and requirements.</p>
              </div>
            </div>

            <div className="process-card-h">
              <div className="process-card-arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
              </div>
              <div className="process-card-icon-wrap">
                <div className="process-step-badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
                </div>
              </div>
              <div className="process-card-content">
                <div className="process-card-title-row">
                  <span className="process-step-num">02</span>
                  <span className="process-step-name">Plan</span>
                </div>
                <p className="process-card-desc">Build a tailored security strategy for your business.</p>
              </div>
            </div>

            <div className="process-card-h">
              <div className="process-card-arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
              </div>
              <div className="process-card-icon-wrap">
                <div className="process-step-badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                </div>
              </div>
              <div className="process-card-content">
                <div className="process-card-title-row">
                  <span className="process-step-num">03</span>
                  <span className="process-step-name">Secure</span>
                </div>
                <p className="process-card-desc">Implement robust security controls and solutions.</p>
              </div>
            </div>

            <div className="process-card-h">
              <div className="process-card-arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
              </div>
              <div className="process-card-icon-wrap">
                <div className="process-step-badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                </div>
              </div>
              <div className="process-card-content">
                <div className="process-card-title-row">
                  <span className="process-step-num">04</span>
                  <span className="process-step-name">Monitor</span>
                </div>
                <p className="process-card-desc">Detect, respond and ensure long-term protection.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Closing CTA Banner (Full-Width Cinematic Horizon) */}
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

