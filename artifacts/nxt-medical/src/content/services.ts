// Service content — used across multiple pages for consistent messaging

export const services = {
  rpm: {
    shortName: "RPM",
    fullName: "Remote Patient Monitoring",
    tagline: "Real-time data, proactive care.",
    description:
      "Monitor your patients' chronic conditions between visits using connected devices. NXT Medical handles device supply, daily data review, patient communication, and billing-ready documentation.",
    benefits: [
      "Daily monitoring of blood pressure, glucose, weight, and more",
      "Clinical staff review every reading — no burden on your team",
      "Escalation protocols when readings fall outside thresholds",
      "Monthly reimbursable under Medicare CPT codes 99453–99458",
    ],
    whoItIsFor:
      "Practices managing patients with hypertension, diabetes, heart failure, COPD, or other chronic conditions that benefit from regular physiological monitoring.",
    href: "/rpm",
  },
  ccm: {
    shortName: "CCM",
    fullName: "Chronic Care Management",
    tagline: "Coordinated care for your most complex patients.",
    description:
      "CCM provides structured care coordination and monthly touchpoints for patients with two or more chronic conditions — improving outcomes while generating reliable recurring revenue.",
    benefits: [
      "Monthly care management touchpoints for each enrolled patient",
      "Care plan creation, maintenance, and updates",
      "Medication review, referral coordination, and proactive outreach",
      "Monthly reimbursable under Medicare CPT codes 99490–99491",
    ],
    whoItIsFor:
      "Primary care, internal medicine, and multi-specialty practices with patient panels that include complex, high-utilization patients with multiple chronic diagnoses.",
    href: "/ccm",
  },
  rtm: {
    shortName: "RTM",
    fullName: "Remote Therapeutic Monitoring",
    tagline: "Therapy adherence, tracked and supported.",
    description:
      "RTM monitors whether patients are following prescribed therapy programs between visits — improving adherence, outcomes, and recovery timelines without requiring more staff hours.",
    benefits: [
      "Therapy adherence tracking between clinical visits",
      "Early intervention when patients fall behind on prescribed programs",
      "App-based or device-supported engagement tools",
      "Monthly reimbursable under Medicare RTM CPT codes",
    ],
    whoItIsFor:
      "Physical therapy, orthopedics, neurology, and specialties managing post-surgical recovery or therapy-dependent chronic conditions.",
    href: "/rtm",
  },
};

export const processSteps = [
  {
    step: "01",
    title: "Discover",
    description:
      "We learn your patient population, existing workflows, and practice goals. Together we identify which programs fit best and map out the right enrollment approach.",
  },
  {
    step: "02",
    title: "Implement",
    description:
      "NXT Medical handles onboarding, staff training, device logistics, and patient enrollment. We minimize disruption to your existing operations from day one.",
  },
  {
    step: "03",
    title: "Support",
    description:
      "We manage ongoing clinical operations — monitoring, documentation, care coordination — while you retain full clinical oversight and patient relationships.",
  },
];

export const partnerBenefits = [
  {
    title: "Hands-On Onboarding",
    description:
      "We don't hand you a manual and walk away. NXT Medical works alongside your team through implementation, training, and the first patient enrollments.",
  },
  {
    title: "Billing & Reimbursement Support",
    description:
      "Our team understands the CPT codes, time requirements, and documentation standards needed to bill correctly for RPM, CCM, and RTM services.",
  },
  {
    title: "Minimal Staff Disruption",
    description:
      "Your clinical and administrative staff are not expected to run these programs. NXT Medical provides the care management and clinical monitoring staff.",
  },
  {
    title: "Scalable Program Growth",
    description:
      "Start with a small cohort and scale at a pace that works for your practice. Our infrastructure is built to support programs from dozens to thousands of patients.",
  },
];
