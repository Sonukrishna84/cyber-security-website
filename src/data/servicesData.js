/**
 * INFRONIXX Technologies — Core Cybersecurity Services Data
 * 9 Standard Service Categories & Included Solutions
 */

export const SERVICE_CATEGORIES = [
  {
    id: 'endpoint-security',
    number: '01',
    title: 'Endpoint Security',
    shortTitle: 'Endpoint Security',
    tagline: 'Defend Connected Enterprise Workstations, Servers & Mobile Fleets',
    shortDesc: 'Protect business endpoints and connected devices through suitable endpoint security technologies, helping organizations identify threats and strengthen device protection.',
    iconName: 'laptop-shield',
    solutions: [
      {
        title: 'Antivirus and Endpoint Protection',
        desc: 'Core defense software running locally on workstations and servers to detect, quarantine, and eliminate file-based threats, trojans, ransomware, and malicious executables before execution.'
      },
      {
        title: 'Endpoint Detection and Response (EDR)',
        desc: 'Continuous behavioral monitoring, telemetry recording, and automated anomaly detection across endpoints, empowering security teams to identify stealthy, fileless, and in-memory attack techniques.'
      },
      {
        title: 'Extended Detection and Response (XDR)',
        desc: 'Unifies and correlates telemetry across endpoints, network traffic, cloud workloads, and identity stores to provide unified threat hunting, contextual correlation, and rapid cross-domain containment.'
      },
      {
        title: 'Data Loss Prevention (DLP)',
        desc: 'Policy-driven controls implemented on endpoints to monitor and restrict unauthorized copying, transfer, or printing of sensitive company data to USB drives, unapproved cloud storage, or external drives.'
      },
      {
        title: 'Data Encryption',
        desc: 'Full-disk encryption (such as BitLocker and FileVault) and file-level cryptographic mechanisms ensuring that lost, stolen, or compromised hardware remains unreadable without authenticated access.'
      },
      {
        title: 'Mobile Device Management (MDM)',
        desc: 'Centralized administration of corporate and BYOD smartphones and tablets, enforcing security baselines, remote wiping, encryption enforcement, and compliant enterprise application distribution.'
      }
    ],
    useCases: [
      'Mitigate ransomware infection across distributed and remote workforces.',
      'Enforce compliance for lost or stolen company laptops with full disk encryption.',
      'Gain granular visibility into running processes and system modifications on every host.'
    ],
    related: ['network-security', 'data-security']
  },
  {
    id: 'network-security',
    number: '02',
    title: 'Network Security',
    shortTitle: 'Network Security',
    tagline: 'Safeguard Internal Infrastructure, Perimeters & Modern Remote Access',
    shortDesc: 'Defend your network perimeter and internal communication channels with advanced firewalls, intrusion inspection, and zero-trust connectivity.',
    iconName: 'network-shield',
    solutions: [
      {
        title: 'Firewall Security',
        desc: 'Stateful and Next-Generation Firewalls (NGFW) providing deep packet inspection, application-level filtering, encrypted traffic inspection, and granular perimeter access policies.'
      },
      {
        title: 'Host-based Intrusion Detection Systems (HIDS)',
        desc: 'Host-level monitoring engines that scrutinize system logs, file integrity changes, rootkit presence, and unauthorized configuration alterations within internal operating system environments.'
      },
      {
        title: 'Host-based Intrusion Prevention Systems (HIPS)',
        desc: 'Proactive inline security controls that intercept, evaluate, and actively block suspicious system calls, malicious DLL injections, and memory anomalies before damage occurs.'
      },
      {
        title: 'Zero Trust Network Access (ZTNA)',
        desc: 'Modern least-privilege remote access model that verifies identity, device health, and context continuously, granting access only to specific private applications rather than entire network subnets.'
      }
    ],
    useCases: [
      'Replace vulnerable legacy VPNs with identity-aware, least-privilege Zero Trust tunnels.',
      'Prevent lateral movement of intruders across corporate server segments.',
      'Inspect inbound and outbound encrypted traffic for malicious command-and-control communication.'
    ],
    related: ['cloud-security', 'endpoint-security']
  },
  {
    id: 'cloud-security',
    number: '03',
    title: 'Cloud Security',
    shortTitle: 'Cloud Security',
    tagline: 'Protect Multi-Cloud Workloads, SaaS Platforms & Cloud Perimeters',
    shortDesc: 'Secure enterprise cloud environments across AWS, Azure, GCP, and SaaS applications with visibility, posture governance, and attack surface tracking.',
    iconName: 'cloud-shield',
    solutions: [
      {
        title: 'Cloud Access Security Broker (CASB)',
        desc: 'Enforces security, governance, and compliance policies between enterprise users and SaaS platforms (such as Microsoft 365, Google Workspace, and Salesforce), discovering shadow IT and preventing data leaks.'
      },
      {
        title: 'Cloud Security Posture Management (CSPM)',
        desc: 'Automates continuous auditing of cloud infrastructure configurations against industry frameworks (CIS benchmarks, NIST), pinpointing misconfigured buckets, open ports, and excessive IAM permissions.'
      },
      {
        title: 'Attack Surface Management (ASM)',
        desc: 'Continuous outside-in discovery and mapping of all internet-facing digital assets, identifying forgotten cloud instances, subdomains, shadow APIs, and expired certificates before attackers exploit them.'
      }
    ],
    useCases: [
      'Discover and control unauthorized Shadow IT cloud apps used across the organization.',
      'Continuously audit cloud buckets and storage instances against accidental public exposure.',
      'Maintain continuous visibility over rapidly evolving public-facing cloud domains.'
    ],
    related: ['data-security', 'application-security']
  },
  {
    id: 'data-security',
    number: '04',
    title: 'Data Security',
    shortTitle: 'Data Security',
    tagline: 'Protect Sensitive Assets, Customer Records & Confidential IP',
    shortDesc: 'Safeguard intellectual property, customer data, and regulated records across storage, transit, and usage through encryption, rights management, and DLP.',
    iconName: 'database-lock',
    solutions: [
      {
        title: 'Data Loss Prevention (DLP)',
        desc: 'Content-aware security enforcement that discovers, classifies, and controls confidential data (PII, financial data, health records), preventing exfiltration over email, web uploads, or external media.'
      },
      {
        title: 'Data Encryption',
        desc: 'Robust cryptographic implementations protecting structured databases, file storage, and data in motion with AES-256 standards, hardware security modules (HSM), and centralized key lifecycle management.'
      },
      {
        title: 'Information Rights Management (IRM)',
        desc: 'Persistent document-level security embedding access permissions directly into sensitive spreadsheets, PDFs, and presentations, governing who can view, edit, print, or forward documents outside the company.'
      },
      {
        title: 'Digital Rights Management (DRM)',
        desc: 'Access control technologies designed to protect proprietary digital intellectual property, trade secrets, and media from unauthorized duplication, redistribution, and reverse-engineering.'
      }
    ],
    useCases: [
      'Ensure compliance with India DPDP Act and international data privacy regulations.',
      'Prevent accidental or deliberate exfiltration of customer database exports.',
      'Maintain document protection even when sensitive files are shared with external contractors.'
    ],
    related: ['security-compliance-consulting', 'user-email-security']
  },
  {
    id: 'user-email-security',
    number: '05',
    title: 'User & Email Security',
    shortTitle: 'User & Email Security',
    tagline: 'Fortify Identity Perimeters, Privileged Access & Inbound Email Gateways',
    shortDesc: 'Defend against phishing, credential stuffing, account takeover, and insider threats through unified identity governance and email security controls.',
    iconName: 'user-shield',
    solutions: [
      {
        title: 'Identity and Access Management (IAM)',
        desc: 'Centralized directory services, Single Sign-On (SSO), and context-aware Multi-Factor Authentication (MFA) ensuring verified identities access only appropriate corporate resources.'
      },
      {
        title: 'Privileged Access Management (PAM)',
        desc: 'Strict vaulting, credential rotation, session isolation, and approval workflows for administrator accounts, preventing domain compromise and unauthorized root access.'
      },
      {
        title: 'Email Security',
        desc: 'Multi-layered email gateways incorporating advanced anti-phishing, link rewrites, attachment sandboxing, and domain authentication protocols (SPF, DKIM, DMARC) against spoofing.'
      },
      {
        title: 'User Behavior Analytics (UBA)',
        desc: 'Machine learning baselines that track typical user patterns, flagging anomalous behaviors such as impossible travel logins, abnormal off-hours access, or mass file downloads.'
      }
    ],
    useCases: [
      'Block advanced business email compromise (BEC) and executive impersonation attacks.',
      'Eliminate static shared administrator passwords across enterprise servers.',
      'Trigger automated MFA challenges upon anomalous geolocation or device indicators.'
    ],
    related: ['endpoint-security', 'threat-detection-incident-response']
  },
  {
    id: 'application-security',
    number: '06',
    title: 'Application Security',
    shortTitle: 'Application Security',
    tagline: 'Shield Customer-Facing Web Apps, APIs & Microservices',
    shortDesc: 'Protect web applications and APIs from OWASP Top 10 vulnerabilities, DDoS attacks, automated bots, and transactional fraud.',
    iconName: 'code-shield',
    solutions: [
      {
        title: 'Web Application Firewall (WAF)',
        desc: 'Application-layer security shield inspecting HTTP/HTTPS traffic, blocking SQL injections, Cross-Site Scripting (XSS), remote code execution, and zero-day web exploits in real-time.'
      },
      {
        title: 'Content Delivery Network (CDN)',
        desc: 'Globally distributed edge caching coupled with high-capacity volumetric DDoS mitigation, ensuring high availability, accelerated response times, and resilience under traffic spikes.'
      },
      {
        title: 'Threat Intelligence',
        desc: 'Curated feeds of malicious IP addresses, known botnet signatures, compromised proxy servers, and threat actor indicators integrated into application gateways for proactive blocking.'
      },
      {
        title: 'Anti-Fraud Solutions',
        desc: 'Behavioral biometrics, device fingerprinting, and transactional anomaly detection preventing credential stuffing, automated bot scraping, and fraudulent account takeovers.'
      }
    ],
    useCases: [
      'Shield critical customer portals and APIs against automated scraping and credential stuffing.',
      'Maintain uptime during volumetric and layer-7 application DDoS floods.',
      'Secure legacy web applications where source code modifications are difficult.'
    ],
    related: ['vapt', 'cloud-security']
  },
  {
    id: 'vapt',
    number: '07',
    title: 'Vulnerability Assessment & Penetration Testing (VAPT)',
    shortTitle: 'VAPT',
    tagline: 'Proactively Discover, Exploit & Remediate Security Weaknesses',
    shortDesc: 'Identify and fix exploitable vulnerabilities across networks, web applications, mobile apps, and cloud environments before malicious actors find them.',
    iconName: 'bug-scan',
    solutions: [
      {
        title: 'Vulnerability Assessment',
        desc: 'Automated and authenticated scanning of IP ranges, servers, databases, and application stacks to catalog unpatched software, weak ciphers, and misconfigured services.'
      },
      {
        title: 'Authorized Penetration Testing',
        desc: 'Rigorous manual ethical hacking mimicking real-world adversary tactics across network perimeters, web applications, mobile platforms, and APIs to demonstrate practical business risk.'
      },
      {
        title: 'Security Weakness Identification',
        desc: 'Detailed analysis of architectural flaws, logic bugs, insecure direct object references, privilege escalations, and unauthenticated endpoints across enterprise infrastructure.'
      },
      {
        title: 'Risk Prioritization',
        desc: 'Contextual risk rating based on CVSS scoring, asset criticality, exploitability, and potential business disruption, helping engineering teams focus on high-impact vulnerabilities first.'
      },
      {
        title: 'Remediation Recommendations',
        desc: 'Clear, actionable developer-ready guidance, configuration instructions, code patches, and post-remediation validation testing to verify complete flaw elimination.'
      }
    ],
    useCases: [
      'Fulfill periodic audit and compliance mandates for RBI, CERT-In, ISO 27001, and SOC 2.',
      'Uncover critical zero-day and business-logic flaws prior to major software releases.',
      'Equip internal IT teams with pragmatic, step-by-step remediation roadmaps.'
    ],
    related: ['application-security', 'network-security']
  },
  {
    id: 'threat-detection-incident-response',
    number: '08',
    title: 'Threat Detection & Incident Response',
    shortTitle: 'Threat Detection & Response',
    tagline: 'Investigate Anomalies, Contain Cyber Attacks & Recover Resiliently',
    shortDesc: 'Detect active threats, investigate suspicious activity, execute structured incident response, and minimize operational downtime.',
    iconName: 'radar-alert',
    solutions: [
      {
        title: 'Threat Detection',
        desc: 'Rule-based and behavioral telemetry correlation scanning log feeds, endpoints, and networks for indicators of compromise (IOCs) and indicators of attack (IOAs).'
      },
      {
        title: 'Suspicious Activity Investigation',
        desc: 'Deep-dive security triage and digital forensics analyzing suspicious network traffic, unauthorized lateral movements, abnormal account elevations, and rogue processes.'
      },
      {
        title: 'Security Incident Response',
        desc: 'Rapid containment measures to isolate compromised endpoints, revoke active adversary sessions, neutralize active malware, and prevent data exfiltration.'
      },
      {
        title: 'Incident Response Planning',
        desc: 'Developing structured organizational playbooks, escalation workflows, communication matrices, and crisis tabletop exercises to ensure predictable operational resilience.'
      },
      {
        title: 'Security Monitoring (Where Offered)',
        desc: 'Centralized aggregation of security events across enterprise infrastructure, establishing baseline visibility and prioritized alert routing for operational teams.'
      }
    ],
    useCases: [
      'Rapidly contain ransomware propagation before enterprise-wide encryption.',
      'Conduct digital forensics to establish the root cause and scope of unauthorized access.',
      'Establish clear regulatory breach reporting timelines aligned with statutory standards.'
    ],
    related: ['endpoint-security', 'user-email-security']
  },
  {
    id: 'security-compliance-consulting',
    number: '09',
    title: 'Security Compliance Consulting',
    shortTitle: 'Compliance Consulting',
    tagline: 'Align Enterprise Policies, Governance & Regulatory Obligations',
    shortDesc: 'Navigate complex regulatory mandates, conduct thorough gap analyses, and build robust security documentation and data governance frameworks.',
    iconName: 'file-check',
    solutions: [
      {
        title: 'Security Compliance Assessments',
        desc: 'Structured evaluation of current organizational security controls against recognized standards such as DPDP Act 2023, ISO/IEC 27001, SOC 2, HIPAA, and PCI-DSS.'
      },
      {
        title: 'Compliance Gap Analysis',
        desc: 'Comprehensive diagnostic audits comparing existing technical and operational safeguards against compliance requirements, detailing specific remediation steps.'
      },
      {
        title: 'Security Policy and Documentation Support',
        desc: 'Authoring and formalizing enterprise Information Security Policies (ISPs), Incident Response Procedures, Acceptable Use Policies, and vendor risk management documentation.'
      },
      {
        title: 'Risk Assessment',
        desc: 'Systematic identification and evaluation of organizational cybersecurity risks, business impact analyses (BIA), and creation of enterprise risk registers.'
      },
      {
        title: 'Data Protection and Privacy Consulting',
        desc: 'Specialized advisory covering data lifecycle classification, consent management frameworks, Data Protection Impact Assessments (DPIA), and India DPDP compliance support.'
      }
    ],
    useCases: [
      'Prepare enterprise environments for formal ISO 27001 certification or SOC 2 Type II audits.',
      'Achieve verifiable compliance with India Digital Personal Data Protection (DPDP) regulations.',
      'Satisfy mandatory enterprise client vendor security assessment questionnaires.'
    ],
    related: ['data-security', 'vapt']
  }
];

