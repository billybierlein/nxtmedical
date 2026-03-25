// Central site configuration — edit this file to update global content
// that appears across multiple pages or in the header/footer.

export const siteConfig = {
  name: "NXT Medical",
  tagline: "Remote Care That Works for Your Practice",
  description:
    "NXT Medical delivers remote patient monitoring, chronic care management, and remote therapeutic monitoring programs — designed for medical practices that want better outcomes without burdening their staff.",
  url: "https://nxtmedical.us",
  contact: {
    phone: "(954) 593.0374",
    email: "info@nxtmedical.us",
    address: "",
  },
};

export const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Remote Care",
    href: "/remote-care",
    children: [
      { label: "Remote Care Overview", href: "/remote-care" },
      { label: "RPM — Remote Patient Monitoring", href: "/rpm" },
      { label: "CCM — Chronic Care Management", href: "/ccm" },
      { label: "RTM — Remote Therapeutic Monitoring", href: "/rtm" },
    ],
  },
  {
    label: "Who We Serve",
    href: "/who-we-serve",
    children: [
      { label: "Who We Serve — Overview", href: "/who-we-serve" },
      { label: "Primary Care", href: "/for-primary-care" },
      { label: "Chiropractors", href: "/for-chiropractors" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = {
  services: [
    { label: "Remote Care Overview", href: "/remote-care" },
    { label: "Remote Patient Monitoring (RPM)", href: "/rpm" },
    { label: "Chronic Care Management (CCM)", href: "/ccm" },
    { label: "Remote Therapeutic Monitoring (RTM)", href: "/rtm" },
  ],
  whoWeServe: [
    { label: "Who We Serve — Overview", href: "/who-we-serve" },
    { label: "Primary Care", href: "/for-primary-care" },
    { label: "Chiropractors", href: "/for-chiropractors" },
  ],
  company: [
    { label: "About NXT Medical", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ],
};

// Primary CTA labels — edit here to update across all pages
export const ctas = {
  bookDemo: "Book a Demo",
  bookDemoHref: "https://calendar.app.google/4RY8JiuXDVmfzJrx5",
  contactUs: "Contact Us",
  referPatient: "Refer a Patient",
  learnMore: "Learn More",
};
