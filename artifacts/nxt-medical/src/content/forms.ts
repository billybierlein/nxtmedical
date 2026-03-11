// GoHighLevel form embed placeholders
// Replace the placeholder strings with the actual embed code or iframe src from GoHighLevel
// Each key corresponds to a different form/funnel in your GHL account

export const formEmbeds = {
  // General contact / inquiry form
  // TODO: Replace with GHL embed code for your contact form
  contactForm: "[GHL_CONTACT_FORM_EMBED]",

  // Book a demo scheduling form
  // TODO: Replace with GHL embed code for your demo booking form (e.g. calendar/scheduler)
  bookDemoForm: "[GHL_BOOK_DEMO_FORM_EMBED]",

  // Refer a patient form
  // TODO: Replace with GHL embed code for your patient referral intake form
  referPatientForm: "[GHL_REFER_PATIENT_FORM_EMBED]",
};

// Form section labels — used in the FormEmbed component header/copy
export const formLabels = {
  contactForm: {
    heading: "Get in Touch",
    subheading:
      "Fill out the form below and a member of our team will be in touch within one business day.",
  },
  bookDemoForm: {
    heading: "Schedule a Demo",
    subheading:
      "See how NXT Medical's remote care programs work in practice. Book a 30-minute walkthrough with our team.",
  },
  referPatientForm: {
    heading: "Refer a Patient",
    subheading:
      "Use the form below to refer a patient to one of our remote care programs. We'll follow up to confirm enrollment eligibility.",
  },
};
