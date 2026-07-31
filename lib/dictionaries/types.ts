export type Dictionary = {
  meta: {
    siteName: string;
    homeTitle: string;
    homeDescription: string;
  };
  nav: {
    publicTranslation: string;
    localization: string;
    portfolio: string;
    about: string;
    blog: string;
    contact: string;
  };
  footer: {
    tagline: string;
    navHeading: string;
    contactHeading: string;
    rights: string;
  };
  home: {
    heroKicker: string;
    heroHeadline: string;
    heroSub: string;
    ctaPrimary: string;
    ctaSecondary: string;
    credentials: { label: string; value: string }[];
    translateHeading: string;
    translateItems: { name: string; description: string }[];
    translateLink: string;
    specializationHeadline: string;
    specializationLink: string;
    featuredWorkKicker: string;
    featuredWorkTitle: string;
    featuredWorkParagraphs: string[];
    featuredWorkLink: string;
    aboutTeaserText: string;
    aboutTeaserLink: string;
    processHeading: string;
    processSteps: { title: string; description: string }[];
    closingHeadline: string;
  };
  publicTranslation: {
    heroHeadline: string;
    heroBody: string;
    documentsHeading: string;
    documents: { name: string; examples: string; icon: string }[];
    processHeading: string;
    processSteps: { title: string; description: string }[];
    pricingHeading: string;
    pricingBody: string;
    faqHeading: string;
    faq: { q: string; a: string }[];
    ctaHeadline: string;
    ctaButton: string;
  };
  localization: {
    heroHeadline: string;
    heroBody: string;
    domainsHeading: string;
    domains: { name: string; description: string; featured?: boolean }[];
    methodologyHeading: string;
    methodologyBody: string;
    methodologySteps: string[];
    toolsHeading: string;
    tools: string[];
    portfolioTeaser: string;
    portfolioLink: string;
    ctaHeadline: string;
    ctaButton: string;
  };
  portfolio: {
    heroHeadline: string;
    confidentialityNote: string;
    filters: string[];
    cases: {
      category: string;
      title: string;
      context: string;
      approach: string;
      outcome: string;
    }[];
    ctaHeadline: string;
    ctaButton: string;
  };
  about: {
    heroHeadline: string;
    opening: string;
    pathHeading: string;
    pathBody: string;
    specializationHeading: string;
    specializationBody: string;
    learningHeading: string;
    learningBody: string;
    outsideHeading: string;
    hobbies: { name: string; label: string }[];
    closingHeadline: string;
    ctaButton: string;
  };
  blog: {
    heroHeadline: string;
    heroSub: string;
    posts: {
      slug: string;
      title: string;
      takeaway: string;
      readingTime: string;
      category: string;
      body: string[];
      ctaHeadline: string;
      ctaButton: string;
    }[];
  };
  contact: {
    heroHeadline: string;
    responseNote: string;
    emailLabel: string;
    whatsappLabel: string;
    formHeading: string;
    formFields: {
      name: string;
      email: string;
      documentType: string;
      languagePair: string;
      timeline: string;
      message: string;
      submit: string;
    };
    timezoneNote: string;
  };
};
