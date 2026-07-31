import type { Dictionary } from "./types";

export const en: Dictionary = {
  meta: {
    siteName: "Lucía Reser",
    homeTitle: "Lucía Reser — Certified Public Translator, English–Spanish",
    homeDescription:
      "Certified English–Spanish public translator in Buenos Aires, specializing in legal, medical, and migration documents, with deep expertise in women's and reproductive health translation.",
  },
  nav: {
    publicTranslation: "Public Translation",
    localization: "Localization",
    portfolio: "Portfolio",
    about: "About",
    blog: "Blog",
    contact: "Contact",
  },
  footer: {
    tagline: "Exact language, handled with care.",
    navHeading: "Site",
    contactHeading: "Get in touch",
    rights: "All rights reserved.",
  },
  home: {
    heroKicker: "Certified Public Translator · English–Spanish",
    heroHeadline: "Lucía Reser",
    heroSub:
      "I translate the documents that carry real weight: legal filings, medical records, the paperwork of starting a new life somewhere.",
    ctaPrimary: "Send a document",
    ctaSecondary: "See my work",
    credentials: [
      { label: "Registration", value: "Colegio de Traductores, CABA" },
      { label: "Languages", value: "English ⇄ Spanish" },
      { label: "Focus", value: "Legal · Medical · Migration" },
      { label: "Based in", value: "Buenos Aires, Argentina" },
    ],
    translateHeading: "Documents that carry real weight:",
    translateItems: [
      { name: "Legal", description: "Contracts, rulings, powers of attorney." },
      { name: "Medical", description: "Clinical records, reports, prescriptions." },
      { name: "Migration", description: "Residency files, visa paperwork, civil registry." },
      { name: "Academic", description: "Degrees, transcripts, certifications." },
    ],
    translateLink: "See how certified translation works",
    specializationHeadline:
      "Women's health, translated with care. Medical and reproductive health documents require more than accuracy — they require someone who understands what's actually being said, and to whom.",
    specializationLink: "Read more about this focus",
    featuredWorkKicker: "Featured work",
    featuredWorkTitle: "Reproductive health app, English → Spanish (Latin America)",
    featuredWorkParagraphs: [
      "The challenge: a health app's onboarding copy needed to feel warm and non-clinical in Spanish without losing medical precision — a tone problem more than a vocabulary problem.",
      "My approach: built a short glossary of preferred terms with the client before starting, then translated for a plain reading level without infantilizing the content.",
      "Outcome: shipped across six Latin American Spanish variants with zero terminology revisions requested.",
    ],
    featuredWorkLink: "See more work",
    aboutTeaserText:
      "I'm Lucía — a certified translator who spends as much time on terminology consistency and quality control as on the translation itself. Outside of work: photography, reading, and a standing habit of finding quiet cafés wherever I go.",
    aboutTeaserLink: "More about me",
    processHeading: "How it works",
    processSteps: [
      { title: "Send your document", description: "Tell me what it is, the language pair, and when you need it." },
      { title: "Review & quote", description: "I confirm scope, cost, and turnaround — usually within a few hours." },
      { title: "Certified delivery", description: "You receive the signed, sealed translation, ready to use." },
    ],
    closingHeadline: "Have a document that needs to be exactly right?",
  },
  publicTranslation: {
    heroHeadline: "A certified translation isn't just accurate — it's legally valid.",
    heroBody:
      "Courts, universities, and immigration offices require a sworn translator's seal and signature, not just a good translation. That's what I provide.",
    documentsHeading: "Documents I certify",
    documents: [
      { name: "Civil registry", examples: "Birth, marriage, and death certificates", icon: "certificate" },
      { name: "Legal", examples: "Court rulings, contracts, powers of attorney", icon: "scale" },
      { name: "Academic", examples: "Degrees and transcripts", icon: "diploma" },
      { name: "Medical", examples: "Records and clinical reports", icon: "medical" },
      { name: "Migration", examples: "Residency and visa paperwork", icon: "passport" },
    ],
    processHeading: "The process",
    processSteps: [
      { title: "Submit", description: "Send a scan or photo of the document." },
      { title: "Quote", description: "You'll get cost and turnaround the same day." },
      { title: "Translate & certify", description: "Sealed and signed, matching the original exactly." },
      { title: "Deliver", description: "Pick up in Buenos Aires or receive it by courier." },
    ],
    pricingHeading: "Pricing & turnaround",
    pricingBody:
      "Cost depends on page count, subject matter, and how quickly you need it — not a flat rate per word. Most standard documents (certificates, transcripts) are ready within 24–48 hours; urgent requests are usually possible.",
    faqHeading: "Common questions",
    faq: [
      {
        q: "Does this translation work outside Argentina?",
        a: "Depends on the destination country's requirements. Tell me where the document is going, and I'll confirm what's needed — apostille, consular legalization, or the certified translation alone.",
      },
      {
        q: "Do you need the original document, or is a scan enough?",
        a: "A clear scan or photo is enough to start and quote. For final delivery, some destinations require the physical certified copy — I'll tell you which applies to your case.",
      },
      {
        q: "How is pricing calculated?",
        a: "By page count and complexity, with urgency as a factor for very fast turnarounds. You'll always get a specific number before I start, never a vague estimate.",
      },
      {
        q: "Can you translate into English as well as Spanish?",
        a: "Yes — certified translation works both directions, English to Spanish and Spanish to English.",
      },
    ],
    ctaHeadline: "Ready to send your document?",
    ctaButton: "Send your document",
  },
  localization: {
    heroHeadline:
      "I work with localization teams on MTPE, linguistic QA, and full localization projects.",
    heroBody:
      "Primarily in healthcare, education, legal, and migration content. I'm equally comfortable reviewing machine output line-by-line as I am translating from scratch.",
    domainsHeading: "Domain expertise",
    domains: [
      {
        name: "Healthcare & reproductive health",
        description:
          "The deepest specialization in my practice — terminology, tone, and register for medical and reproductive health content, built over years of focused work.",
        featured: true,
      },
      { name: "Legal", description: "Contracts, terms of service, compliance documentation." },
      { name: "Education", description: "Course content, certifications, academic platforms." },
      { name: "Migration", description: "Government and NGO-facing immigration content." },
    ],
    methodologyHeading: "How I approach quality",
    methodologyBody:
      "My QA process isn't a checklist run at the end — it's built into each pass: terminology consistency against the client's glossary, register checks (a reproductive health app doesn't read like a legal contract, even in translation), and a final read for the thing checklists miss: does this sound like something a real person would say?",
    methodologySteps: [
      "Source text review",
      "MT pass (where applicable)",
      "Linguistic QA & terminology check",
      "Register & tone pass",
      "Delivery",
    ],
    toolsHeading: "Tools & formats",
    tools: ["memoQ", "Trados Studio", "XLIFF, JSON, CSV", "Google Docs & Sheets workflows"],
    portfolioTeaser:
      "A recent project: reviewing MT output for a reproductive health app's onboarding flow across 40,000 words.",
    portfolioLink: "See relevant work",
    ctaHeadline: "Have a project in mind?",
    ctaButton: "Let's talk about a project",
  },
  portfolio: {
    heroHeadline: "A selection of the work I can share.",
    confidentialityNote:
      "Some client work is protected by confidentiality — where that's the case, I've described the project without naming the client.",
    filters: ["All", "Healthcare", "Legal", "Education", "Migration", "Localization"],
    cases: [
      {
        category: "Healthcare",
        title: "Reproductive health app, English → Spanish (Latin America)",
        context:
          "A health app's onboarding copy needed to feel warm and non-clinical in Spanish without losing medical precision — a tone problem more than a vocabulary problem.",
        approach:
          "Built a short glossary of preferred terms with the client before starting, then translated for a plain reading level without infantilizing the content.",
        outcome:
          "Shipped across six Latin American Spanish variants with zero terminology revisions requested.",
      },
      {
        category: "Legal",
        title: "Immigration case file, Spanish → English",
        context:
          "A family's residency application depended on a full case file — court records, affidavits, and civil documents — being translated to a standard that would hold up under review.",
        approach:
          "Cross-referenced every proper name and date against the source twice, and kept formatting identical to the originals so reviewers could follow along page for page.",
        outcome: "Application accepted without a single translation-related query.",
      },
      {
        category: "Localization",
        title: "MTPE review, patient education platform",
        context:
          "A patient education platform needed its machine-translated Spanish content reviewed for a rollout across three countries.",
        approach:
          "Reviewed against the client's glossary and style guide, flagging patterns in the MT engine's errors so the client could improve future output, not just this batch.",
        outcome: "Delivered ahead of schedule with a shared error-pattern report for the client's MT vendor.",
      },
    ],
    ctaHeadline: "Have a similar project?",
    ctaButton: "Discuss a similar project",
  },
  about: {
    heroHeadline: "About",
    opening:
      "I'm Lucía. I translate documents that matter — legal, medical, the paperwork that comes with starting over somewhere new — and I've spent the years since certification getting genuinely good at the parts other translators treat as an afterthought: quality control, terminology consistency, knowing when a \"correct\" translation still isn't the right one.",
    pathHeading: "Path",
    pathBody:
      "Certified Public Translator, English–Spanish, registered with the Colegio de Traductores in Buenos Aires. Alongside certified translation, I work with international localization companies across healthcare, education, legal, and migration content.",
    specializationHeading: "Why women's health",
    specializationBody:
      "Reproductive health material is some of the most consequential text I work with — the wrong word doesn't just look bad, it can mislead someone at a moment they most need clarity. That's where I've built my deepest expertise, and it's the work I care most about getting exactly right.",
    learningHeading: "Currently learning",
    learningBody:
      "Right now I'm teaching myself web development, and picking up Illustrator and Photoshop along the way — partly because I built this site, and partly because I like understanding the whole shape of a project I'm part of, not just my piece of it.",
    outsideHeading: "Outside translation",
    hobbies: [
      { name: "photography", label: "Photography" },
      { name: "reading", label: "Reading" },
      { name: "music", label: "New music" },
      { name: "baking", label: "Baking" },
      { name: "collage", label: "Collage" },
      { name: "museums", label: "Museums & quiet cafés" },
    ],
    closingHeadline: "Want to work together?",
    ctaButton: "Work together",
  },
  blog: {
    heroHeadline: "Notes on translation",
    heroSub: "Short, specific answers to the questions clients and colleagues actually ask.",
    posts: [
      {
        slug: "apostille-vs-certified-translation",
        title: "Do you need an apostille or just a certified translation? A quick way to tell.",
        takeaway:
          "If your document is going to a country in the Hague Convention, here's the actual difference — and how to avoid paying for the wrong one.",
        readingTime: "4 min",
        category: "Legal",
        body: [
          "Short answer: if the destination country is in the Hague Convention, you need an apostille on the original document, not on the translation. Here's why that trips people up, and what to check before you pay for anything.",
          "An apostille certifies that the original document — the birth certificate, the degree, the court ruling — is authentic and issued by a legitimate authority. It has nothing to do with translation quality or certification; it's a stamp on the source document, applied by a government office (in Argentina, usually the Ministerio de Relaciones Exteriores or a local Colegio de Escribanos).",
          "A certified translation, separately, confirms that the translation itself is accurate and complete, sealed and signed by a registered public translator. Many destination institutions want both: an apostilled original, plus a certified translation of it.",
          "The order matters too. In most cases, you apostille the original first, then have the certified translation done — sometimes the translator needs to translate the apostille text itself, since it's part of the document once it's attached.",
          "If you're not sure whether your destination country is part of the Hague Convention, tell me where the document is going and I'll confirm exactly what's needed before you pay for anything.",
        ],
        ctaHeadline: "Need a document translated for this?",
        ctaButton: "Send your document",
      },
      {
        slug: "how-long-certified-translation-takes",
        title: "How long does a certified translation actually take in Argentina?",
        takeaway:
          "Most standard documents: 24–48 hours. Here's what actually changes that timeline, and when to ask for a rush.",
        readingTime: "3 min",
        category: "Legal",
        body: [
          "For a standard one-to-two-page document — a birth certificate, a diploma, a simple contract — 24 to 48 hours is typical from the moment I confirm the quote, not from when you first ask.",
          "What extends it: document length (a full academic transcript with dozens of courses takes longer than a one-page certificate), technical density (a detailed medical report needs more careful terminology work than a birth certificate), and legibility of the original — a blurry scan slows everything down before translation even starts.",
          "What speeds it up: a clear, complete scan sent upfront, and telling me your real deadline immediately rather than after I've already quoted a standard timeline. Rush requests are usually possible — say so when you first reach out, not after.",
          "One thing that doesn't speed it up: skipping the quote step. I confirm scope and cost before starting on every document, even urgent ones — it takes minutes, and it means no surprises for either of us.",
        ],
        ctaHeadline: "On a deadline?",
        ctaButton: "Send your document",
      },
      {
        slug: "mtpe-quality-framework",
        title: "What good MTPE review actually looks like (not just fixing typos)",
        takeaway:
          "A short framework for reviewing machine-translated Spanish that goes beyond grammar — terminology, register, and the errors worth reporting upstream.",
        readingTime: "5 min",
        category: "Localization",
        body: [
          "Most MTPE guidance stops at grammar and fluency. That catches maybe half of what actually makes machine-translated content unusable in production — the other half is terminology consistency and register, and both require domain judgment a grammar check can't provide.",
          "Terminology consistency means checking every rendered term against the client's glossary, not just confirming the sentence reads naturally. Machine translation is notoriously inconsistent term-to-term across a single document, even when each individual sentence looks fine in isolation.",
          "Register is the harder skill, and the one most reviewers skip. A reproductive health app's onboarding flow and a legal terms-of-service document should never read the same in translation, even if the source English was similarly formal in both — a good reviewer adjusts register deliberately, not just literally.",
          "The most valuable thing a reviewer can do beyond the immediate deliverable: track patterns in the MT engine's specific errors and report them to the client, not just correct them silently. A pattern report (the engine consistently mishandles a specific medical term, or drops formality in a specific sentence structure) helps the client's MT vendor improve future output — which is worth more, long-term, than one clean delivery.",
        ],
        ctaHeadline: "Need MTPE or linguistic QA support?",
        ctaButton: "Let's talk about a project",
      },
    ],
  },
  contact: {
    heroHeadline: "Get in touch",
    responseNote:
      "Send me a message directly — email or WhatsApp both work, and I usually reply within a few hours during the week (Argentina time, GMT-3).",
    emailLabel: "Email",
    whatsappLabel: "WhatsApp",
    formHeading: "Prefer a form? Tell me what you need translated, the language pair, and roughly when you need it. That's enough for me to give you a real answer, not a generic quote.",
    formFields: {
      name: "Your name",
      email: "Email",
      documentType: "What do you need translated?",
      languagePair: "Language pair",
      timeline: "When do you need it?",
      message: "Anything else I should know?",
      submit: "Send message",
    },
    timezoneNote: "Based in Buenos Aires, Argentina (GMT-3).",
  },
};
