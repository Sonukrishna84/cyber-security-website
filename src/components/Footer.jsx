import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          
          {/* Column 1: Brand */}
          <div className="footer-col">
            <Link to="/" className="brand-link" aria-label="Infronix Technologies & Solutions LLP Home">
              <img 
                src="/assets/images/logo-stacked-clean.png" 
                alt="Infronix Technologies & Solutions LLP" 
                style={{ height: '56px', width: 'auto', marginBottom: '14px' }} 
              />
            </Link>
            <p className="footer-desc">
              Infronix Technologies &amp; Solutions LLP delivers intelligent cybersecurity solutions to protect what matters most — your business, your data and your digital future.
            </p>
            <div className="social-links" aria-label="Official Social Media Profiles">
              <a href="https://linkedin.com" className="social-circle-btn" aria-label="LinkedIn profile" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="https://twitter.com" className="social-circle-btn" aria-label="Twitter / X profile" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="https://facebook.com" className="social-circle-btn" aria-label="Facebook profile" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="https://youtube.com" className="social-circle-btn" aria-label="YouTube channel" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polygon points="10 8 16 12 10 16 10 8"></polygon><rect x="2" y="4" width="20" height="16" rx="4"></rect></svg>
              </a>
              <a href="https://instagram.com" className="social-circle-btn" aria-label="Instagram profile" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/dpdp-compliance">DPDP Compliance</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="footer-col">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><Link to="/services#endpoint-security">Endpoint Security</Link></li>
              <li><Link to="/services#network-security">Network Security</Link></li>
              <li><Link to="/services#cloud-security">Cloud Security</Link></li>
              <li><Link to="/services#data-security">Data Security</Link></li>
              <li><Link to="/services#user-email-security">User &amp; Email Security</Link></li>
              <li><Link to="/services#application-security">Application Security</Link></li>
              <li><Link to="/services#vapt">VAPT</Link></li>
              <li><Link to="/services#threat-detection-incident-response">Threat Detection &amp; Incident Response</Link></li>
              <li><Link to="/services#security-compliance-consulting">Security Compliance Consulting</Link></li>
            </ul>
          </div>

          {/* Column 4: DPDP Compliance */}
          <div className="footer-col">
            <h4>DPDP Compliance</h4>
            <ul className="footer-links">
              <li><Link to="/dpdp-compliance">DPDP Compliance Overview</Link></li>
              <li><Link to="/dpdp-compliance#framework">Compliance Framework</Link></li>
              <li><Link to="/dpdp-compliance#assessment">Data Audit &amp; Assessment</Link></li>
            </ul>
          </div>

          {/* Column 5: Contact Us */}
          <div className="footer-col">
            <h4>Contact Us</h4>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <svg className="footer-contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span>Unit no 604, 6th floor, Tower B, Bhutani Alphathum, Sector-90, Noida 201305</span>
              </li>
              <li className="footer-contact-item">
                <svg className="footer-contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <a href="tel:+919555373510">+91 95553 73510</a>
              </li>
              <li className="footer-contact-item">
                <svg className="footer-contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                <a href="mailto:info@infronixtech.in">info@infronixtech.in</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <div>
            &copy; <span className="current-year">{currentYear}</span>{' '}
            <a 
              href="https://rudrensolutions.online/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-copyright-link"
            >
              Rudren Solutions
            </a>
            . All rights reserved.
          </div>
          <div className="footer-bottom-links">
            <Link to="/about">Privacy Policy</Link>
            <span>|</span>
            <Link to="/about">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
