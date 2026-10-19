import React from 'react';
import { Link } from 'react-router-dom';

export default function DPDPPage() {
  return (
    <main id="main-content">
      {/* Breadcrumbs */}
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <div className="container">
          <ol className="breadcrumb-list">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-separator" aria-hidden="true">&rsaquo;</li>
            <li className="breadcrumb-item active" aria-current="page">DPDP Compliance</li>
          </ol>
        </div>
      </nav>

      {/* Header */}
      <section className="section" style={{ paddingBottom: '40px' }}>
        <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            <span className="eyebrow-dot" aria-hidden="true"></span>
            <span>Indian Privacy Framework</span>
          </div>
          <h1>DPDP Compliance and <span className="text-gradient">Data Protection Services</span></h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-silver)', marginTop: '1.25rem' }}>
            India's Digital Personal Data Protection framework establishes requirements concerning the processing of digital personal data. Organizations should understand their applicable obligations and review how personal data is collected, used, stored, and protected.
          </p>
        </div>
      </section>

      {/* Section 1: Understanding India's DPDP Framework */}
      <section className="section section-alt" aria-labelledby="understanding-dpdp-title">
        <div className="container split-layout">
          <div className="split-content">
            <div className="eyebrow">
              <span className="eyebrow-dot" aria-hidden="true"></span>
              <span>Regulatory Context</span>
            </div>
            <h2 id="understanding-dpdp-title">Understanding India's DPDP Framework</h2>
            <p>
              The Digital Personal Data Protection Act, 2023 (DPDP Act) represents India's dedicated legal regime governing the processing of digital personal data. The Act balances the fundamental right of individuals (Data Principals) to protect their personal information with the lawful processing needs of organizations (Data Fiduciaries).
            </p>
            <p>
              The framework applies to any processing of digital personal data within India, as well as extraterritorially if personal data is processed in connection with offering goods or services to Data Principals in India. Responsible processing requires establishing clear lawful grounds, maintaining transparent privacy notices, obtaining verifiable consent, and enforcing reasonable security safeguards to prevent personal data breaches.
            </p>
            <p>
              Organizations must proactively evaluate their data ecosystems to ensure that technical systems and administrative procedures reflect these statutory expectations.
            </p>
          </div>
          <div className="split-visual">
            <img 
              src="/assets/images/dpdp-framework.svg" 
              alt="Diagram Illustrating India DPDP Act 2023 Architecture" 
              width="600" 
              height="420" 
              loading="lazy" 
            />
          </div>
        </div>
      </section>

      {/* Section 2: Why DPDP Compliance Matters */}
      <section className="section" aria-labelledby="why-compliance-matters-title">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">
              <span className="eyebrow-dot" aria-hidden="true"></span>
              <span>Core Pillars</span>
            </div>
            <h2 id="why-compliance-matters-title">Why DPDP Compliance Matters</h2>
            <p>
              Aligning with the DPDP framework is more than a statutory mandate—it establishes a trusted foundation for digital business relationships and institutional accountability.
            </p>
          </div>

          <div className="cards-grid-4">
            <div className="benefit-card">
              <div className="benefit-num">PILLAR 01</div>
              <h3>Privacy Governance</h3>
              <p>Establishing internal ownership, clear operational roles, and management oversight for how personal information flows through organizational infrastructure.</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-num">PILLAR 02</div>
              <h3>Transparent Data Practices</h3>
              <p>Providing clear, accessible notices to Data Principals explaining what information is collected, the specific purpose of processing, and how consent may be withdrawn.</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-num">PILLAR 03</div>
              <h3>Appropriate Security Safeguards</h3>
              <p>Deploying technical measures including encryption, access restrictions, network segmentation, and secure backups to prevent unauthorized data exposure.</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-num">PILLAR 04</div>
              <h3>Organizational Accountability</h3>
              <p>Maintaining demonstrable records of processing activities, implementing prompt incident reporting mechanisms, and ensuring responsive grievance redressal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Our DPDP Compliance Support */}
      <section id="data-protection-services" className="section section-alt" aria-labelledby="dpdp-support-title">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">
              <span className="eyebrow-dot" aria-hidden="true"></span>
              <span>Technical &amp; Consulting Support</span>
            </div>
            <h2 id="dpdp-support-title">Our DPDP Compliance Support</h2>
            <p>
              Infronix Technologies & Solutions LLP offers structured consulting and technical advisory services to help enterprises assess, implement, and validate data protection safeguards.
            </p>
          </div>

          <div className="cards-grid-3">
            <article className="cyber-card">
              <div className="card-icon-wrap" aria-hidden="true">
                <img src="/assets/icons/compliance.svg" alt="" width="28" height="28" />
              </div>
              <h3>Data Protection Gap Assessment</h3>
              <p>Systematic review of existing IT infrastructure, policies, and operational workflows against DPDP Act obligations to highlight compliance gaps and prioritize technical mitigations.</p>
            </article>

            <article className="cyber-card">
              <div className="card-icon-wrap" aria-hidden="true">
                <img src="/assets/icons/data.svg" alt="" width="28" height="28" />
              </div>
              <h3>Personal Data Mapping</h3>
              <p>Comprehensive inventory of digital personal data across servers, cloud stores, databases, and third-party vendors, documenting data collection points, flow lineages, and retention periods.</p>
            </article>

            <article className="cyber-card">
              <div className="card-icon-wrap" aria-hidden="true">
                <img src="/assets/icons/shield.svg" alt="" width="28" height="28" />
              </div>
              <h3>Privacy Policy and Notice Review</h3>
              <p>Consulting evaluation of existing privacy disclosures and user-facing notices to verify alignment with statutory clarity, language accessibility, and itemized consent guidelines.</p>
            </article>

            <article className="cyber-card">
              <div className="card-icon-wrap" aria-hidden="true">
                <img src="/assets/icons/lock.svg" alt="" width="28" height="28" />
              </div>
              <h3>Data Handling Process Review</h3>
              <p>Analysis of data collection methods, employee access privileges, cross-border transmission rules, and data disposal protocols to reduce unnecessary data proliferation.</p>
            </article>

            <article className="cyber-card">
              <div className="card-icon-wrap" aria-hidden="true">
                <img src="/assets/icons/vapt.svg" alt="" width="28" height="28" />
              </div>
              <h3>Security Safeguards Assessment</h3>
              <p>Technical validation of security measures including encryption in transit and at rest, access management controls, backup resilience, and system vulnerability posture.</p>
            </article>

            <article className="cyber-card">
              <div className="card-icon-wrap" aria-hidden="true">
                <img src="/assets/icons/endpoint.svg" alt="" width="28" height="28" />
              </div>
              <h3>Compliance Documentation Support</h3>
              <p>Assisting teams in assembling structured security documentation, incident escalation playbooks, standard operating procedures, and technical evidence repositories.</p>
            </article>
          </div>

          {/* Legal Disclaimer */}
          <aside className="compliance-callout" role="note" aria-label="Legal Disclaimer">
            <div className="compliance-callout-title">Important Advisory Notice &amp; Scope Distinction</div>
            <p>
              Infronix Technologies & Solutions LLP provides technical, operational, and cybersecurity advisory services to assist organizations in strengthening their security safeguards and privacy readiness. Our services do not constitute formal legal advice, legal opinions, or statutory certifications. Regulatory obligations and legal responsibilities under the DPDP Act, 2023 should be reviewed in coordination with qualified legal counsel. Infronix Technologies & Solutions LLP does not guarantee compliance or specific legal outcomes.
            </p>
          </aside>
        </div>
      </section>

      {/* Section 4: Better Data Protection Practices */}
      <section className="section" aria-labelledby="better-practices-title">
        <div className="container split-layout">
          <div className="split-content">
            <div className="eyebrow">
              <span className="eyebrow-dot" aria-hidden="true"></span>
              <span>Lifecycle Discipline</span>
            </div>
            <h2 id="better-practices-title">Building Better Data Protection Practices</h2>
            <p>
              Sustainable data protection is an ongoing practice rather than a static document. Reviewing how your business collects, accesses, stores, retains, and disposes of personal data reduces the blast radius of any potential security incident.
            </p>
            <ul className="checklist">
              <li>
                <svg className="checklist-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span><strong>Data Minimization:</strong> Collecting only what is strictly necessary for specified, declared business objectives.</span>
              </li>
              <li>
                <svg className="checklist-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span><strong>Access Restriction:</strong> Enforcing role-based access control (RBAC) and eliminating excessive shared administrative credentials.</span>
              </li>
              <li>
                <svg className="checklist-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span><strong>Storage &amp; Encryption:</strong> Verifying strong cryptographic standards for databases, archives, and cloud object stores.</span>
              </li>
              <li>
                <svg className="checklist-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span><strong>Defined Retention:</strong> Establishing verifiable deletion and electronic shredding timelines once processing purposes conclude.</span>
              </li>
            </ul>
          </div>
          <div className="split-visual" style={{ padding: '32px', background: 'var(--bg-surface)' }}>
            <h3 style={{ color: 'var(--accent-cyan)', marginBottom: '12px' }}>Data Breach Readiness</h3>
            <p style={{ fontSize: '0.95rem', marginBottom: '20px' }}>
              Under the DPDP Act, organizations must notify the Data Protection Board of India and affected Data Principals in the event of a personal data breach. Preparedness requires pre-defined technical procedures:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ background: 'rgba(2, 11, 25, 0.6)', padding: '14px 18px', borderRadius: '8px', borderLeft: '3px solid var(--accent-cyan)' }}>
                <strong style={{ color: '#F5F8FC', fontSize: '0.9rem' }}>1. Detection &amp; Triage:</strong>
                <div style={{ fontSize: '0.85rem', color: '#A8B8CC' }}>Rapid identification of compromised systems and data categorization.</div>
              </div>
              <div style={{ background: 'rgba(2, 11, 25, 0.6)', padding: '14px 18px', borderRadius: '8px', borderLeft: '3px solid var(--accent-blue)' }}>
                <strong style={{ color: '#F5F8FC', fontSize: '0.9rem' }}>2. Containment &amp; Isolation:</strong>
                <div style={{ fontSize: '0.85rem', color: '#A8B8CC' }}>Quarantining affected nodes and preventing secondary exposure.</div>
              </div>
              <div style={{ background: 'rgba(2, 11, 25, 0.6)', padding: '14px 18px', borderRadius: '8px', borderLeft: '3px solid var(--accent-cyan)' }}>
                <strong style={{ color: '#F5F8FC', fontSize: '0.9rem' }}>3. Reporting Telemetry:</strong>
                <div style={{ fontSize: '0.85rem', color: '#A8B8CC' }}>Formulating factual incident narratives and impact metrics.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Assessment Process */}
      <section className="section section-alt" aria-labelledby="assessment-approach-title">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">
              <span className="eyebrow-dot" aria-hidden="true"></span>
              <span>Structured Process</span>
            </div>
            <h2 id="assessment-approach-title">Our DPDP Assessment Approach</h2>
            <p>
              We follow an iterative four-step assessment approach to evaluate data safeguards and support continuous governance.
            </p>
          </div>

          <div className="process-grid">
            <div className="step-card">
              <div className="step-number">01</div>
              <h3>Assess Current Practices</h3>
              <p>Conduct workshops with technical and operational leads, catalog existing digital personal data stores, and review access controls and data transfer paths.</p>
            </div>
            <div className="step-card">
              <div className="step-number">02</div>
              <h3>Identify Gaps &amp; Risks</h3>
              <p>Compare current operational practices against DPDP Act expectations, highlighting vulnerabilities, unencrypted data flows, and procedural deficiencies.</p>
            </div>
            <div className="step-card">
              <div className="step-number">03</div>
              <h3>Recommend Improvements</h3>
              <p>Deliver a prioritized, actionable remediation roadmap outlining recommended technical safeguards, configuration fixes, and documentation templates.</p>
            </div>
            <div className="step-card">
              <div className="step-number">04</div>
              <h3>Review Implementation</h3>
              <p>Conduct follow-up evaluations to verify the efficacy of deployed technical safeguards and assist in embedding long-term data protection reviews.</p>
            </div>
          </div>

          {/* Section 6: CTA */}
          <div className="cta-banner" style={{ marginTop: '64px' }}>
            <h2>Discuss Your DPDP Compliance Requirements</h2>
            <p>
              Assess your organization's digital personal data footprint and implement practical security safeguards. Connect with Infronix Technologies & Solutions LLP to begin your data protection assessment.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                <span>Contact Us Today</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </Link>
              <Link to="/services" className="btn btn-secondary">
                <span>Explore Technical Services</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

