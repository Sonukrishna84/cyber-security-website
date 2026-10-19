import React from 'react';
import { Link } from 'react-router-dom';

export default function ServicesPage() {
  return (
    <main id="main-content">
      {/* Breadcrumbs */}
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <div className="container">
          <ol className="breadcrumb-list">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-separator" aria-hidden="true">&rsaquo;</li>
            <li className="breadcrumb-item active" aria-current="page">Services</li>
          </ol>
        </div>
      </nav>

      {/* Header */}
      <section className="section" style={{ paddingBottom: '40px' }}>
        <div className="container">
          <div className="section-header text-left" style={{ maxWidth: '900px' }}>
            <div className="eyebrow">
              <span className="eyebrow-dot" aria-hidden="true"></span>
              <span>Security Engineering &amp; Assurance</span>
            </div>
            <h1>Comprehensive Cybersecurity Services for <span className="text-gradient">Your Business</span></h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-silver)', marginTop: '1.25rem' }}>
              Every organization faces different security challenges. Infronix Technologies & Solutions LLP offers cybersecurity services designed to help businesses identify weaknesses, protect digital assets, strengthen infrastructure, and improve their security posture.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detailed Directory */}
      <section className="section section-alt" style={{ paddingTop: '20px' }}>
        <div className="container">

          {/* 1. Endpoint Security */}
          <article id="endpoint-security" className="service-detail-item">
            <div className="split-layout">
              <div>
                <div className="eyebrow">Service 01 &bull; Device Defense</div>
                <h2>Endpoint Security</h2>
                <p>
                  Endpoints—including laptops, desktops, mobile devices, servers, and remote workstations—represent the most frequent entry point for modern cyber threats. As hybrid working models expand, endpoint environments require rigorous, layered security controls to prevent compromise.
                </p>
                <p>
                  Infronix Technologies & Solutions LLP helps organizations evaluate and deploy robust device protection strategies that reduce endpoint attack surfaces, enforce least-privilege configurations, and suppress unauthorized software execution.
                </p>
                <div className="service-meta-box">
                  <div className="service-meta-title">Key Capabilities &amp; Use Cases</div>
                  <ul className="service-meta-list">
                    <li>Fleet-wide baseline hardening and configuration audits</li>
                    <li>Antivirus and Endpoint Detection and Response (EDR) validation</li>
                    <li>Device encryption controls (BitLocker / FileVault configuration)</li>
                    <li>Removable media restrictions and USB access controls</li>
                    <li>Patch management workflows and vulnerable software discovery</li>
                  </ul>
                </div>
              </div>
              <div className="split-visual" style={{ padding: '36px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div className="card-icon-wrap" style={{ width: '64px', height: '64px' }} aria-hidden="true">
                  <img src="/assets/icons/endpoint.svg" alt="" width="36" height="36" />
                </div>
                <h3 style={{ color: 'var(--accent-cyan)', marginBottom: '8px' }}>Defending the Frontline</h3>
                <p style={{ fontSize: '0.95rem', marginBottom: '18px' }}>
                  Securing every connected endpoint against ransomware, unauthorized script execution, and persistent lateral movement.
                </p>
                <Link to="/contact" className="btn btn-secondary btn-sm" style={{ width: 'auto', alignSelf: 'flex-start' }}>
                  Inquire About Endpoint Security
                </Link>
              </div>
            </div>
          </article>

          {/* 2. Network Security */}
          <article id="network-security" className="service-detail-item">
            <div className="split-layout reverse">
              <div>
                <div className="eyebrow">Service 02 &bull; Perimeter &amp; Segmentation</div>
                <h2>Network Security</h2>
                <p>
                  Organizational networks must balance high-throughput business communication with strict boundary defenses. Without continuous monitoring and granular segmentation, single perimeter lapses can expose sensitive internal systems.
                </p>
                <p>
                  Our network security services evaluate perimeter firewalls, router configurations, internal access control lists (ACLs), and traffic flow topologies to prevent unauthorized access and isolate critical internal zones.
                </p>
                <div className="service-meta-box">
                  <div className="service-meta-title">Key Capabilities &amp; Use Cases</div>
                  <ul className="service-meta-list">
                    <li>Firewall rulebase review, optimization, and legacy rule cleanup</li>
                    <li>Virtual Local Area Network (VLAN) segmentation and micro-segmentation</li>
                    <li>Secure Remote Access (VPN and Zero Trust Network Access) review</li>
                    <li>Intrusion Detection/Prevention System (IDS/IPS) inspection</li>
                    <li>Traffic anomaly monitoring and unauthorized port discovery</li>
                  </ul>
                </div>
              </div>
              <div className="split-visual" style={{ padding: '36px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div className="card-icon-wrap" style={{ width: '64px', height: '64px' }} aria-hidden="true">
                  <img src="/assets/icons/network.svg" alt="" width="36" height="36" />
                </div>
                <h3 style={{ color: 'var(--accent-cyan)', marginBottom: '8px' }}>Fortifying Boundaries</h3>
                <p style={{ fontSize: '0.95rem', marginBottom: '18px' }}>
                  Eliminating unauthorized ingress, lateral traversal, and insecure network conduits across on-premises and branch facilities.
                </p>
                <Link to="/contact" className="btn btn-secondary btn-sm" style={{ width: 'auto', alignSelf: 'flex-start' }}>
                  Inquire About Network Security
                </Link>
              </div>
            </div>
          </article>

          {/* 3. Cloud Security */}
          <article id="cloud-security" className="service-detail-item">
            <div className="split-layout">
              <div>
                <div className="eyebrow">Service 03 &bull; Cloud Infrastructure</div>
                <h2>Cloud Security</h2>
                <p>
                  As enterprises migrate workloads to cloud infrastructure (such as AWS, Azure, and Google Cloud), security responsibilities are shared between the provider and the client. The vast majority of cloud breaches stem from customer configuration errors and excessive IAM privileges.
                </p>
                <p>
                  Infronix Technologies & Solutions LLP provides rigorous cloud configuration assessments, access management reviews, and cloud data protection consulting to keep your multi-cloud environments resilient.
                </p>
                <div className="service-meta-box">
                  <div className="service-meta-title">Key Capabilities &amp; Use Cases</div>
                  <ul className="service-meta-list">
                    <li>Cloud Security Posture Management (CSPM) audits</li>
                    <li>Identity &amp; Access Management (IAM) role and policy least-privilege analysis</li>
                    <li>Public storage bucket, database, and snapshot exposure verification</li>
                    <li>Container and serverless infrastructure security configuration</li>
                    <li>Cloud audit logging and telemetry configuration (CloudTrail, Activity Logs)</li>
                  </ul>
                </div>
              </div>
              <div className="split-visual" style={{ padding: '36px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div className="card-icon-wrap" style={{ width: '64px', height: '64px' }} aria-hidden="true">
                  <img src="/assets/icons/cloud.svg" alt="" width="36" height="36" />
                </div>
                <h3 style={{ color: 'var(--accent-cyan)', marginBottom: '8px' }}>Securing the Cloud Tenant</h3>
                <p style={{ fontSize: '0.95rem', marginBottom: '18px' }}>
                  Ensuring cloud-native architectures follow zero trust identity controls and hardened infrastructure baselines.
                </p>
                <Link to="/contact" className="btn btn-secondary btn-sm" style={{ width: 'auto', alignSelf: 'flex-start' }}>
                  Inquire About Cloud Security
                </Link>
              </div>
            </div>
          </article>

          {/* 4. Data Protection */}
          <article id="data-protection" className="service-detail-item">
            <div className="split-layout reverse">
              <div>
                <div className="eyebrow">Service 04 &bull; Information Safeguards</div>
                <h2>Data Protection</h2>
                <p>
                  Data is an organization's most valuable asset and most targeted liability. Protecting sensitive customer records, financial transactions, and proprietary source code requires structured technical controls across the entire data lifecycle.
                </p>
                <p>
                  We guide organizations in implementing strict data handling practices, role-based access restrictions, and proven encryption standards for information at rest, in transit, and during processing.
                </p>
                <div className="service-meta-box">
                  <div className="service-meta-title">Key Capabilities &amp; Use Cases</div>
                  <ul className="service-meta-list">
                    <li>Data classification and discovery across structured and unstructured stores</li>
                    <li>Cryptographic review: AES-256 at-rest and TLS 1.3 in-transit implementation</li>
                    <li>Data Loss Prevention (DLP) configuration review and policy tuning</li>
                    <li>Secure data backup integrity, isolation, and immutable storage controls</li>
                    <li>Data retention and secure electronic sanitization procedures</li>
                  </ul>
                </div>
              </div>
              <div className="split-visual" style={{ padding: '36px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div className="card-icon-wrap" style={{ width: '64px', height: '64px' }} aria-hidden="true">
                  <img src="/assets/icons/data.svg" alt="" width="36" height="36" />
                </div>
                <h3 style={{ color: 'var(--accent-cyan)', marginBottom: '8px' }}>Shielding Sensitive Assets</h3>
                <p style={{ fontSize: '0.95rem', marginBottom: '18px' }}>
                  Preventing unauthorized exfiltration, accidental exposure, and unencrypted transmission of critical business intelligence.
                </p>
                <Link to="/contact" className="btn btn-secondary btn-sm" style={{ width: 'auto', alignSelf: 'flex-start' }}>
                  Inquire About Data Protection
                </Link>
              </div>
            </div>
          </article>

          {/* 5. User & Email Security */}
          <article id="user-email-security" className="service-detail-item">
            <div className="split-layout">
              <div>
                <div className="eyebrow">Service 05 &bull; Identity &amp; Human Layer</div>
                <h2>User and Email Security</h2>
                <p>
                  Phishing emails, credential theft, and social engineering remain the primary catalysts for corporate security incidents. Protecting the human layer requires technical email safeguards combined with strict identity authentication.
                </p>
                <p>
                  Infronix Technologies & Solutions LLP helps businesses configure enterprise email authentication protocols, enforce phishing-resistant multi-factor authentication, and instill practical security awareness among staff.
                </p>
                <div className="service-meta-box">
                  <div className="service-meta-title">Key Capabilities &amp; Use Cases</div>
                  <ul className="service-meta-list">
                    <li>Email authentication hardening: SPF, DKIM, and DMARC enforcement</li>
                    <li>Business Email Compromise (BEC) prevention controls and inbound filtering</li>
                    <li>Multi-Factor Authentication (MFA) implementation and conditional access policies</li>
                    <li>Privileged account management and credential hygiene evaluation</li>
                    <li>Employee security awareness guidelines and practical guidance materials</li>
                  </ul>
                </div>
              </div>
              <div className="split-visual" style={{ padding: '36px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div className="card-icon-wrap" style={{ width: '64px', height: '64px' }} aria-hidden="true">
                  <img src="/assets/icons/email.svg" alt="" width="36" height="36" />
                </div>
                <h3 style={{ color: 'var(--accent-cyan)', marginBottom: '8px' }}>Mitigating Social Vectors</h3>
                <p style={{ fontSize: '0.95rem', marginBottom: '18px' }}>
                  Defending enterprise mailboxes and user accounts from spoofing, credential brute-forcing, and deceptive lures.
                </p>
                <Link to="/contact" className="btn btn-secondary btn-sm" style={{ width: 'auto', alignSelf: 'flex-start' }}>
                  Inquire About Email Security
                </Link>
              </div>
            </div>
          </article>

          {/* 6. Application Security */}
          <article id="application-security" className="service-detail-item">
            <div className="split-layout reverse">
              <div>
                <div className="eyebrow">Service 06 &bull; Software Assurance</div>
                <h2>Application Security</h2>
                <p>
                  Software applications and public APIs directly interface with untrusted users. Insecure code patterns or architectural flaws can allow attackers to bypass business logic, extract database contents, or take over administrative sessions.
                </p>
                <p>
                  Our application security services systematically assess web applications, APIs, and mobile backends to uncover coding vulnerabilities, evaluate authentication schemes, and recommend concrete developer fixes.
                </p>
                <div className="service-meta-box">
                  <div className="service-meta-title">Key Capabilities &amp; Use Cases</div>
                  <ul className="service-meta-list">
                    <li>OWASP Top 10 vulnerability assessment (SQLi, XSS, CSRF, SSRF, IDOR)</li>
                    <li>REST and GraphQL API security and token authorization verification</li>
                    <li>Session management, token expiration, and secure cookie controls</li>
                    <li>Third-party dependency and open-source library vulnerability scanning</li>
                    <li>Secure Software Development Lifecycle (SSDLC) policy guidance</li>
                  </ul>
                </div>
              </div>
              <div className="split-visual" style={{ padding: '36px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div className="card-icon-wrap" style={{ width: '64px', height: '64px' }} aria-hidden="true">
                  <img src="/assets/icons/appsec.svg" alt="" width="36" height="36" />
                </div>
                <h3 style={{ color: 'var(--accent-cyan)', marginBottom: '8px' }}>Hardening Code &amp; APIs</h3>
                <p style={{ fontSize: '0.95rem', marginBottom: '18px' }}>
                  Validating software defenses before deployment to safeguard sensitive backend databases and user sessions.
                </p>
                <Link to="/contact" className="btn btn-secondary btn-sm" style={{ width: 'auto', alignSelf: 'flex-start' }}>
                  Inquire About App Security
                </Link>
              </div>
            </div>
          </article>

          {/* 7. VAPT */}
          <article id="vapt" className="service-detail-item">
            <div className="split-layout">
              <div>
                <div className="eyebrow">Service 07 &bull; Offensive Testing</div>
                <h2>Vulnerability Assessment and Penetration Testing (VAPT)</h2>
                <p>
                  VAPT provides an empirical, objective evaluation of your cybersecurity defenses. Rather than assuming controls are working, authorized simulated attacks reveal exactly where perimeter defenses can be breached and data extracted.
                </p>
                <p>
                  Infronix Technologies & Solutions LLP performs controlled, ethical penetration testing across external networks, internal infrastructure, web applications, and wireless environments, providing documented evidence and prioritized remediation roadmaps.
                </p>
                <div className="service-meta-box">
                  <div className="service-meta-title">Key Capabilities &amp; Use Cases</div>
                  <ul className="service-meta-list">
                    <li>External and internal network penetration testing</li>
                    <li>Web application and REST API penetration testing</li>
                    <li>Cloud tenant and Kubernetes environment penetration testing</li>
                    <li>Vulnerability prioritization based on exploitability and business impact (CVSS)</li>
                    <li>Post-remediation re-testing to verify vulnerability closure</li>
                  </ul>
                </div>
              </div>
              <div className="split-visual" style={{ padding: '36px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <img src="/assets/images/vapt-network-map.svg" alt="Vulnerability Assessment and Network Penetration Testing Diagram" width="500" height="350" style={{ marginBottom: '20px' }} />
                <h3 style={{ color: 'var(--accent-cyan)', marginBottom: '8px' }}>Authorized Attack Simulation</h3>
                <p style={{ fontSize: '0.95rem', marginBottom: '18px' }}>
                  Uncovering exploitable weaknesses before adversaries do, accompanied by step-by-step mitigation playbooks.
                </p>
                <Link to="/contact" className="btn btn-secondary btn-sm" style={{ width: 'auto', alignSelf: 'flex-start' }}>
                  Inquire About VAPT
                </Link>
              </div>
            </div>
          </article>

          {/* 8. Threat Detection and IR */}
          <article id="threat-detection" className="service-detail-item">
            <div className="split-layout reverse">
              <div>
                <div className="eyebrow">Service 08 &bull; Monitoring &amp; Containment</div>
                <h2>Threat Detection and Incident Response</h2>
                <p>
                  In the event of an attack or anomalous system activity, speed of detection and precision of containment determine whether an event remains a minor incident or escalates into a catastrophic data breach.
                </p>
                <p>
                  We help organizations establish structured security monitoring frameworks, configure log telemetry across critical systems, define incident triage procedures, and formulate actionable incident response playbooks.
                </p>
                <div className="service-meta-box">
                  <div className="service-meta-title">Key Capabilities &amp; Use Cases</div>
                  <ul className="service-meta-list">
                    <li>Centralized log ingestion and SIEM telemetry configuration guidance</li>
                    <li>Incident Response (IR) plan development and role assignments</li>
                    <li>Suspicious behavior and anomaly triage workflows</li>
                    <li>Incident containment, eradication, and post-incident review procedures</li>
                    <li>Evidence preservation principles for forensic review</li>
                  </ul>
                </div>
              </div>
              <div className="split-visual" style={{ padding: '36px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div className="card-icon-wrap" style={{ width: '64px', height: '64px' }} aria-hidden="true">
                  <img src="/assets/icons/threat.svg" alt="" width="36" height="36" />
                </div>
                <h3 style={{ color: 'var(--accent-cyan)', marginBottom: '8px' }}>Rapid Incident Containment</h3>
                <p style={{ fontSize: '0.95rem', marginBottom: '18px' }}>
                  Ensuring your security teams possess clear escalation workflows and detection mechanisms to isolate threats swiftly.
                </p>
                <Link to="/contact" className="btn btn-secondary btn-sm" style={{ width: 'auto', alignSelf: 'flex-start' }}>
                  Inquire About Incident Response
                </Link>
              </div>
            </div>
          </article>

          {/* 9. Security Compliance */}
          <article id="security-compliance" className="service-detail-item">
            <div className="split-layout">
              <div>
                <div className="eyebrow">Service 09 &bull; Governance &amp; Assurance</div>
                <h2>Security Compliance Consulting</h2>
                <p>
                  Enterprises are subject to expanding compliance frameworks, vendor risk assessments, and data protection legislation. Demonstrating verifiable security controls is increasingly required to secure enterprise contracts and satisfy regulatory bodies.
                </p>
                <p>
                  Infronix Technologies & Solutions LLP conducts compliance gap analyses, reviews information security policies, and provides documentation support to align your technical controls with required standards.
                </p>
                <div className="service-meta-box">
                  <div className="service-meta-title">Key Capabilities &amp; Use Cases</div>
                  <ul className="service-meta-list">
                    <li>Information security policy review and governance alignment</li>
                    <li>Readiness assessments for ISO 27001, SOC 2, and CIS Controls baselines</li>
                    <li>India DPDP Act technical safeguard assessment and advisory</li>
                    <li>Vendor and third-party risk assessment methodologies</li>
                    <li>Audit preparation, evidence compilation, and remediation tracking</li>
                  </ul>
                </div>
              </div>
              <div className="split-visual" style={{ padding: '36px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div className="card-icon-wrap" style={{ width: '64px', height: '64px' }} aria-hidden="true">
                  <img src="/assets/icons/compliance.svg" alt="" width="36" height="36" />
                </div>
                <h3 style={{ color: 'var(--accent-cyan)', marginBottom: '8px' }}>Audit-Ready Governance</h3>
                <p style={{ fontSize: '0.95rem', marginBottom: '18px' }}>
                  Bridging technical operational controls with formal governance standards and regulatory compliance requirements.
                </p>
                <Link to="/contact" className="btn btn-secondary btn-sm" style={{ width: 'auto', alignSelf: 'flex-start' }}>
                  Inquire About Compliance Consulting
                </Link>
              </div>
            </div>
          </article>

        </div>
      </section>

      {/* Closing CTA */}
      <section className="section" aria-labelledby="solution-match-title">
        <div className="container">
          <div className="cta-banner">
            <h2 id="solution-match-title">Find the Right Security Solution for Your Business</h2>
            <p>
              Every enterprise possesses a unique infrastructure topology, regulatory environment, and risk profile. Service selection depends on your current digital footprint, compliance obligations, and internal capabilities. Our security specialists work collaboratively with you to identify high-impact priorities and architect an effective defense roadmap.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                <span>Contact Us to Discuss Your Security Requirements</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </Link>
              <Link to="/dpdp-compliance" className="btn btn-secondary">
                <span>Explore DPDP Compliance</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

