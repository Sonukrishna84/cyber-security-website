import React from 'react';
import { Link } from 'react-router-dom';

export default function ContactPage() {
  return (
    <main id="main-content">
      {/* Contact Hero Section */}
      <section className="hero-section" aria-labelledby="contact-hero-title">
        <div className="container hero-grid">
          <div className="hero-content">
            {/* Breadcrumbs in Hero */}
            <div className="breadcrumbs-bar">
              <Link to="/">Home</Link>
              <span aria-hidden="true">&gt;</span>
              <span className="breadcrumb-current">Contact Us</span>
            </div>

            <span className="hero-eyebrow">GET IN TOUCH</span>
            <h1 id="contact-hero-title">
              Contact INFRONIXX<br />
              <span className="cyan-text">Technologies</span>
            </h1>
            <p className="hero-paragraph">
              Looking to strengthen your organization's cybersecurity? Contact INFRONIXX Technologies to discuss your security requirements and explore suitable cybersecurity and data protection services.
            </p>

            {/* Micro Features Row */}
            <div className="hero-micro-features" style={{ borderTop: 'none', paddingTop: 0 }}>
              <div className="micro-feature-item">
                <div className="micro-feature-icon-circle" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div className="micro-feature-text">
                  <strong>Expert Guidance</strong>
                </div>
              </div>

              <div className="micro-feature-item">
                <div className="micro-feature-icon-circle" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                  </svg>
                </div>
                <div className="micro-feature-text">
                  <strong>Tailored Solutions</strong>
                </div>
              </div>

              <div className="micro-feature-item">
                <div className="micro-feature-icon-circle" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div className="micro-feature-text">
                  <strong>Trusted Partnership</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Right Hero Visual: Typographic Quote Matching Reference Screenshot */}
          <div className="contact-hero-tagline-col">
            <div className="contact-hero-tagline" aria-label="Stronger Security For A Safer Tomorrow">
              <span className="tagline-line">STRONGER</span>
              <span className="tagline-line">SECURITY</span>
              <span className="tagline-line">FOR A</span>
              <span className="tagline-line tagline-cyan">SAFER</span>
              <span className="tagline-line tagline-cyan">TOMORROW</span>
              <div className="tagline-dash" aria-hidden="true"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Glowing Divider Line */}
      <div className="hero-stats-divider"></div>

      {/* Main Section: Left Contact Info + Right How We Can Help Box */}
      <section id="contact-info-section" className="section section-alt" aria-labelledby="contact-info-title">
        <div className="container contact-main-grid">
          
          {/* Left Column: Our Contact Information */}
          <div className="contact-info-col">
            <span className="section-eyebrow">GET IN TOUCH</span>
            <h2 id="contact-info-title">Our Contact Information</h2>
            <p className="contact-info-intro">
              Reach out to us through the details below. We're here to answer your questions and help you find the right cybersecurity solutions.
            </p>

            <div className="contact-info-list">
              {/* Email */}
              <div className="contact-info-row">
                <div className="contact-info-icon-circle" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </div>
                <div className="contact-info-content">
                  <strong>Business Email</strong>
                  <a href="mailto:info@infronixx.com">info@infronixx.com</a>
                </div>
              </div>

              {/* Phone */}
              <div className="contact-info-row">
                <div className="contact-info-icon-circle" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="contact-info-content">
                  <strong>Phone Number</strong>
                  <a href="tel:+919876543210">+91 98765 43210</a>
                </div>
              </div>

              {/* Address */}
              <div className="contact-info-row">
                <div className="contact-info-icon-circle" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="contact-info-content">
                  <strong>Business Address</strong>
                  <span>Noida, Uttar Pradesh, India</span>
                  <span className="contact-info-subnote">(Address details can be updated as per your business.)</span>
                </div>
              </div>

              {/* Website */}
              <div className="contact-info-row">
                <div className="contact-info-icon-circle" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                </div>
                <div className="contact-info-content">
                  <strong>Website</strong>
                  <a href="https://www.infronixx.com" target="_blank" rel="noopener noreferrer">www.infronixx.com</a>
                </div>
              </div>
            </div>

            {/* Follow Us Social Buttons */}
            <div>
              <div className="contact-follow-heading">Follow Us</div>
              <div className="social-links">
                <a href="https://linkedin.com/company/infronixx-placeholder" className="social-circle-btn" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="https://twitter.com/infronixx_placeholder" className="social-circle-btn" aria-label="Twitter / X" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a href="https://facebook.com/infronixx-placeholder" className="social-circle-btn" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="https://youtube.com/infronixx-placeholder" className="social-circle-btn" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polygon points="10 8 16 12 10 16 10 8"></polygon>
                    <rect x="2" y="4" width="20" height="16" rx="4"></rect>
                  </svg>
                </a>
                <a href="https://instagram.com" className="social-circle-btn" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: How We Can Help (Framed Priority Card) */}
          <div className="contact-help-card">
            <span className="section-eyebrow">HOW WE CAN HELP</span>
            <h2>Your Security, Our Priority</h2>
            <p className="contact-help-intro">
              Our team is ready to assist you with cybersecurity assessments, VAPT, infrastructure protection, cloud security, application security, and DPDP compliance support. Get in touch with us to discuss your specific needs and explore the best solutions.
            </p>

            {/* 6 Capability Cards Grid */}
            <div className="contact-capability-grid">
              <div className="capability-card">
                <div className="capability-icon-wrap" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <polyline points="9 12 11 14 15 10"></polyline>
                  </svg>
                </div>
                <div className="capability-title">Cybersecurity</div>
                <p className="capability-desc">Identify risks and strengthen your security posture.</p>
              </div>

              <div className="capability-card">
                <div className="capability-icon-wrap" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m14 10-4 4"></path>
                    <path d="M10 10l4 4"></path>
                    <circle cx="12" cy="12" r="6"></circle>
                  </svg>
                </div>
                <div className="capability-title">VAPT Services</div>
                <p className="capability-desc">Find and fix vulnerabilities before attackers do.</p>
              </div>

              <div className="capability-card">
                <div className="capability-icon-wrap" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="16" y="16" width="6" height="6" rx="1"></rect>
                    <rect x="2" y="16" width="6" height="6" rx="1"></rect>
                    <rect x="9" y="2" width="6" height="6" rx="1"></rect>
                    <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path>
                    <path d="M12 12V8"></path>
                  </svg>
                </div>
                <div className="capability-title">Infrastructure Security</div>
                <p className="capability-desc">Protect your network, endpoints and IT infrastructure.</p>
              </div>

              <div className="capability-card">
                <div className="capability-icon-wrap" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
                  </svg>
                </div>
                <div className="capability-title">Cloud Security</div>
                <p className="capability-desc">Secure your cloud applications and data.</p>
              </div>

              <div className="capability-card">
                <div className="capability-icon-wrap" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </div>
                <div className="capability-title">Application Security</div>
                <p className="capability-desc">Build secure and resilient applications.</p>
              </div>

              <div className="capability-card">
                <div className="capability-icon-wrap" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <path d="m9 15 2 2 4-4"></path>
                  </svg>
                </div>
                <div className="capability-title">DPDP Compliance</div>
                <p className="capability-desc">Support your data protection and privacy requirements.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Explore Our Services Section */}
      <section className="section" aria-labelledby="explore-services-title">
        <div className="container explore-services-split">
          <div>
            <span className="section-eyebrow">EXPLORE OUR SERVICES</span>
            <h2 id="explore-services-title">Our Cybersecurity &amp;<br />Compliance Services</h2>
            <p style={{ marginTop: '14px', maxWidth: '440px' }}>
              From proactive threat detection to data protection and compliance, we offer a complete range of cybersecurity services to help your business stay secure and resilient.
            </p>
          </div>

          <div className="explore-cards-row">
            {/* Card 1 */}
            <Link to="/services" className="explore-card">
              <div className="explore-card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <polyline points="9 12 11 14 15 10"></polyline>
                </svg>
              </div>
              <h3>Services</h3>
              <p>Explore our full range of cybersecurity solutions.</p>
              <span className="explore-card-link">
                <span>View Services</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
            </Link>

            {/* Card 2 */}
            <Link to="/dpdp-compliance" className="explore-card">
              <div className="explore-card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <path d="m9 15 2 2 4-4"></path>
                </svg>
              </div>
              <h3>DPDP Compliance</h3>
              <p>Learn about our data protection and compliance services.</p>
              <span className="explore-card-link">
                <span>View Compliance</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
            </Link>

            {/* Card 3 */}
            <Link to="/about" className="explore-card">
              <div className="explore-card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3>About Us</h3>
              <p>Know more about our mission, vision and expertise.</p>
              <span className="explore-card-link">
                <span>Learn More</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Section: Location (Digital Map + Visit Our Office) */}
      <section className="section section-alt" aria-labelledby="location-title">
        <div className="container location-split-grid">
          {/* Left: Map Visual */}
          <div className="location-map-card">
            <img 
              src="/assets/images/contact-location-map.png" 
              alt="Office Location Map in Noida, Uttar Pradesh, India" 
              width="575" 
              height="288" 
              loading="lazy" 
            />
          </div>

          {/* Right: Office Details Card */}
          <div className="location-office-card">
            <div className="location-office-content">
              <span className="section-eyebrow">OUR LOCATION</span>
              <h2 id="location-title">Visit Our Office</h2>
              <p>
                We are based in Noida, Uttar Pradesh, and welcome discussions with businesses looking for reliable cybersecurity and data protection solutions.
              </p>
              
              <div className="location-pin-bullet">
                <svg className="location-pin-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <div className="location-pin-text">
                  <strong>Noida, Uttar Pradesh, India</strong>
                  <span>(Exact address can be updated as per your business.)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Banner CTA Strip */}
      <section className="section" style={{ paddingTop: '36px', paddingBottom: '50px' }}>
        <div className="container">
          <div className="banner-cta-strip">
            <div className="banner-cta-left">
              <div className="banner-cta-icon-circle" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <polyline points="9 12 11 14 15 10"></polyline>
                </svg>
              </div>
              <div className="banner-cta-text">
                <h3>Let's Build a Safer Digital Future Together</h3>
                <p>Get in touch today to discuss your cybersecurity and data protection needs.</p>
              </div>
            </div>
            <a href="#contact-info-section" className="btn-pill btn-pill-primary">
              <span>Contact Us</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
