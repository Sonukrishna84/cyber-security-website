import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <main id="main-content">
      {/* Breadcrumbs */}
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <div className="container">
          <ol className="breadcrumb-list">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-separator" aria-hidden="true">&rsaquo;</li>
            <li className="breadcrumb-item active" aria-current="page">About Us</li>
          </ol>
        </div>
      </nav>

      {/* Header Section */}
      <section className="section" style={{ paddingBottom: '40px' }}>
        <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            <span className="eyebrow-dot" aria-hidden="true"></span>
            <span>Corporate Security Profile</span>
          </div>
          <h1>About <span className="text-gradient">Infronix Technologies &amp; Solutions LLP</span></h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-silver)', marginTop: '1.25rem' }}>
            Infronix Technologies &amp; Solutions LLP focuses on helping businesses understand cybersecurity risks, strengthen digital infrastructure, and protect valuable information through practical security solutions.
          </p>
        </div>
      </section>

      {/* Section 1: Who We Are */}
      <section className="section section-alt" aria-labelledby="who-we-are-title">
        <div className="container split-layout">
          <div className="split-content">
            <div className="eyebrow">
              <span className="eyebrow-dot" aria-hidden="true"></span>
              <span>Identity &amp; Philosophy</span>
            </div>
            <h2 id="who-we-are-title">Who We Are</h2>
            <p>
              Infronix Technologies &amp; Solutions LLP operates with a singular focus: assisting organizations in navigating the increasingly complex cyber threat landscape through rigorous technical analysis and principled defense practices.
            </p>
            <p>
              Our service philosophy is built on technical transparency, engineering rigor, and dependable operational execution. Rather than relying on generic software claims, we evaluate the distinct architectural realities of each client—examining network configurations, cloud environments, access policies, and data storage workflows to build realistic protection.
            </p>
            <p>
              We view cybersecurity as a fundamental business enabler that preserves organizational trust, protects intellectual capital, and sustains digital continuity.
            </p>
          </div>
          <div className="split-visual">
            <img 
              src="/assets/images/hero-cyber-shield.svg" 
              alt="Infronix Defensive Engineering and Risk Philosophy" 
              width="600" 
              height="450" 
              loading="lazy" 
            />
          </div>
        </div>
      </section>

      {/* Section 2: Mission & Vision */}
      <section className="section" aria-labelledby="mission-vision-title">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">
              <span className="eyebrow-dot" aria-hidden="true"></span>
              <span>Guiding Principles</span>
            </div>
            <h2 id="mission-vision-title">Our Purpose &amp; Direction</h2>
            <p>
              Our core mission and long-term vision direct every technical evaluation and security advisory engagement we deliver.
            </p>
          </div>

          <div className="cards-grid-2">
            <article className="cyber-card">
              <div className="card-icon-wrap" aria-hidden="true">
                <img src="/assets/icons/shield.svg" alt="" width="28" height="28" />
              </div>
              <h2>Our Mission</h2>
              <p>
                To help organizations systematically identify vulnerabilities, reduce cyber risks, and build stronger, self-sustaining security practices. We strive to provide transparent, evidence-based technical guidance that empowers leadership to make informed security decisions and safeguard critical assets with confidence.
              </p>
            </article>

            <article className="cyber-card">
              <div className="card-icon-wrap" aria-hidden="true">
                <img src="/assets/icons/lock.svg" alt="" width="28" height="28" />
              </div>
              <h2>Our Vision</h2>
              <p>
                To support a safer digital environment through responsible cybersecurity practices, principled data protection, and continuous operational improvement. We envision an enterprise landscape where organizations of all sizes can operate resiliently against cyber threats while respecting user privacy and regulatory mandates.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Section 3: Our Cybersecurity Expertise */}
      <section className="section section-alt" aria-labelledby="expertise-title">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">
              <span className="eyebrow-dot" aria-hidden="true"></span>
              <span>Core Competencies</span>
            </div>
            <h2 id="expertise-title">Our Cybersecurity Expertise</h2>
            <p>
              Our technical proficiency spans five interconnected security disciplines, ensuring multi-tiered coverage across infrastructure, applications, and regulatory governance.
            </p>
          </div>

          <div className="cards-grid-3">
            <article className="cyber-card">
              <div className="card-icon-wrap" aria-hidden="true">
                <img src="/assets/icons/network.svg" alt="" width="28" height="28" />
              </div>
              <h3>Infrastructure and Network Security</h3>
              <p>
                Comprehensive evaluation and hardening of routing perimeters, firewall rules, internal subnet segmentation, and secure connectivity frameworks to minimize attack surface exposure.
              </p>
            </article>

            <article className="cyber-card">
              <div className="card-icon-wrap" aria-hidden="true">
                <img src="/assets/icons/cloud.svg" alt="" width="28" height="28" />
              </div>
              <h3>Cloud and Data Protection</h3>
              <p>
                Technical posture review of multi-cloud configurations, containerized services, storage buckets, and IAM policies, paired with robust data encryption standards at rest and in transit.
              </p>
            </article>

            <article className="cyber-card">
              <div className="card-icon-wrap" aria-hidden="true">
                <img src="/assets/icons/vapt.svg" alt="" width="28" height="28" />
              </div>
              <h3>Application Security and VAPT</h3>
              <p>
                Authorized offensive testing methodologies simulating real-world threat actors to identify code injection, logic flaws, broken authentication, and API vulnerabilities.
              </p>
            </article>

            <article className="cyber-card">
              <div className="card-icon-wrap" aria-hidden="true">
                <img src="/assets/icons/threat.svg" alt="" width="28" height="28" />
              </div>
              <h3>Threat Detection and Incident Response</h3>
              <p>
                Architecting logging architectures, anomaly detection workflows, escalation protocols, and containment procedures to reduce incident dwell time and preserve evidence integrity.
              </p>
            </article>

            <article className="cyber-card">
              <div className="card-icon-wrap" aria-hidden="true">
                <img src="/assets/icons/compliance.svg" alt="" width="28" height="28" />
              </div>
              <h3>Security Compliance Consulting</h3>
              <p>
                Structured readiness reviews for organizational security standards, baseline controls, and data privacy legislation including India's Digital Personal Data Protection Act, 2023.
              </p>
            </article>

            <article className="cyber-card" style={{ background: 'rgba(8, 125, 255, 0.1)', borderColor: 'var(--accent-cyan)', justifyContent: 'center' }}>
              <h3 style={{ color: 'var(--accent-cyan)' }}>Holistic Security Posture</h3>
              <p>
                Our competencies are designed to complement one another, creating layered protection that reinforces organizational resilience across every digital vector.
              </p>
              <Link to="/services" className="btn btn-secondary btn-sm" style={{ width: 'auto', alignSelf: 'flex-start' }}>
                Explore All Services
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* Section 4: Why Choose Us */}
      <section className="section" aria-labelledby="why-choose-title">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">
              <span className="eyebrow-dot" aria-hidden="true"></span>
              <span>Distinction</span>
            </div>
            <h2 id="why-choose-title">Why Choose Infronix Technologies &amp; Solutions LLP?</h2>
            <p>
              We focus on practical, defensible security outcomes that strengthen your operational resilience and safeguard client relationships.
            </p>
          </div>

          <div className="cards-grid-3">
            <div className="benefit-card">
              <div className="benefit-num">VALUE 01</div>
              <h3>A Security-First Approach</h3>
              <p>Security is not an afterthought or an optional add-on in our engagements; it serves as the foundational lens through which all infrastructure, workflows, and tools are evaluated.</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-num">VALUE 02</div>
              <h3>Solutions Aligned with Business Requirements</h3>
              <p>We design security recommendations that respect your company's operational tempo, technical stack, budget parameters, and business growth trajectories.</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-num">VALUE 03</div>
              <h3>Emphasis on Risk Identification and Prevention</h3>
              <p>We focus our investigative efforts on eliminating vulnerabilities before incidents take place, minimizing financial, operational, and reputational exposures.</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-num">VALUE 04</div>
              <h3>Clear Communication and Practical Recommendations</h3>
              <p>Our reports translate complex technical telemetry into prioritized, executable remediation steps easily understood by both engineering teams and executive leadership.</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-num">VALUE 05</div>
              <h3>Ongoing Improvement of Security Practices</h3>
              <p>Cyber defense is dynamic. We help organizations establish iterative review cycles so controls adapt smoothly as novel threats emerge and infrastructure scales.</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-num">VALUE 06</div>
              <h3>Verifiable Engineering Discipline</h3>
              <p>Our methodologies align with established global cybersecurity benchmarks, ensuring recommendations are testable, reproducible, and operationally sound.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Closing CTA */}
      <section className="section section-alt" aria-label="Get in touch CTA">
        <div className="container">
          <div className="cta-banner" style={{ marginTop: '20px' }}>
            <h2>Ready to Strengthen Your Security Posture?</h2>
            <p>
              Explore our specialized cybersecurity services or connect directly with our advisory specialists to discuss your organization's specific requirements.
            </p>
            <div className="cta-buttons">
              <Link to="/services" className="btn btn-primary">
                <span>Services</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

