/**
 * ============================================================================
 *  THE BARE METHOD — CENTRAL SETTINGS FILE
 * ============================================================================
 *
 *  This is the ONE file you need to edit to update the public hub's links,
 *  contact info, booking URLs, the My Bare Method destination, and
 *  social-media settings.
 *
 *  HOW TO EDIT:
 *    1. Open this file (src/config/site.ts) in your editor.
 *    2. Find the setting you need to review.
 *    3. Preserve verified destination structures unless the owner confirms a change.
 *    4. Save the file. Your changes go live the next time the site builds.
 *
 *  WHAT NOT TO DO:
 *    - Do NOT paste API keys, passwords, or merchant credentials here.
 *      This file is part of your public website code. Only paste URLs that
 *      you would be comfortable sharing publicly (booking pages, portal
 *      login pages, hosted checkout pages, etc.).
 *    - Do NOT remove the quotes around your URLs.
 *
 *  PHASES:
 *    Current hub: local esthetics discovery and Vagaro booking, with a separate
 *    outbound handoff to My Bare Method wellness.
 *    Legacy wellness, medical-platform, and payment fields remain below for
 *    historical reference only; they are not public hub workflows.
 * ============================================================================
 */

export const siteConfig = {
  myBareMethodUrl: 'https://mybaremethod.com',

  // ==========================================================================
  //  1. BUSINESS INFORMATION
  //  Update your business name, address, phone, email, and hours here.
  // ==========================================================================
  business: {
    name: 'The Bare Method',
    domain: 'thebaremethodmn.com',
    tagline: 'Your Skin. Your Wellness. Your Method.',
    location: 'Apple Valley, Minnesota',
    address: {
      line1: '15115 Cedar Avenue, Suite 33',
      city: 'Apple Valley',
      state: 'MN',
      zip: '55124',
    },
    phone: '218-656-7189',
    phoneHref: 'tel:+12186567189',
    email: 'info@thebaremethodmn.com',
    founder: 'Carina "Rina" Hebert',
    // Edit your business hours below. Each line is one day.
    hours: [
      { day: 'Monday', hours: 'Closed' },
      { day: 'Tuesday', hours: '9:00 AM – 6:00 PM' },
      { day: 'Wednesday', hours: '9:00 AM – 6:00 PM' },
      { day: 'Thursday', hours: '9:00 AM – 6:00 PM' },
      { day: 'Friday', hours: '9:00 AM – 6:00 PM' },
      { day: 'Saturday', hours: '9:00 AM – 4:00 PM' },
      { day: 'Sunday', hours: 'Closed' },
    ],
    // These appear in SEO and footer copy. Add or remove cities as needed.
    serviceAreas: [
      'Apple Valley',
      'Lakeville',
      'Rosemount',
      'Burnsville',
      'Eagan',
      'South Minneapolis–Saint Paul metro',
    ],
  },

  // ==========================================================================
  //  2. VAGARO — ESTHETIC BOOKING (Phase 1)
  //  These are the verified active Vagaro MySite destinations for The Bare
  //  Method. Keep the shared /thebaremethod path structure intact.
  // ==========================================================================
  vagaro: {
    // Main Vagaro MySite destination
    bookingUrl: 'https://mysite.vagaro.com/thebaremethod',

    // Services tab
    servicesUrl: 'https://mysite.vagaro.com/thebaremethod/services',

    // Gift certificates
    giftCardUrl: 'https://mysite.vagaro.com/thebaremethod/gift-certificates',

    // Memberships
    membershipUrl: 'https://mysite.vagaro.com/thebaremethod/memberships',

    // Packages
    packagesUrl: 'https://mysite.vagaro.com/thebaremethod/packages',

    // Deals / promotions
    dealsUrl: 'https://mysite.vagaro.com/thebaremethod/daily-deals',

    // FAQs
    faqsUrl: 'https://mysite.vagaro.com/thebaremethod/faqs',

    // Reviews
    reviewsUrl: 'https://mysite.vagaro.com/thebaremethod/reviews',

    // Gallery
    galleryUrl: 'https://mysite.vagaro.com/thebaremethod/gallery',
  },

  // ==========================================================================
  //  LEGACY: MEDICAL WELLNESS PLATFORM CONFIGURATION (NOT USED BY THE HUB)
  //  Paste your Legend EHR URLs below. These send patients to
  //  the secure platform for medical intake, telehealth, and portal access.
  //  Find them in your Legend EHR admin dashboard under Patient Links.
  //  Leave any URL blank ('') to hide its button until the secure URL is ready.
  // ==========================================================================
  legend: {
    // PASTE YOUR LEGEND INTAKE URL HERE — new patients start here
    intakeUrl: 'https://app.optimantra.com/thebaremethod/intake',

    // PASTE YOUR LEGEND PATIENT PORTAL URL HERE — existing patients log in here
    patientPortalUrl: 'https://app.optimantra.com/thebaremethod/portal',

    // PASTE YOUR LEGEND BOOKING URL HERE — patients schedule consultations here
    bookingUrl: 'https://app.optimantra.com/thebaremethod/booking',

    // PASTE YOUR EXISTING PATIENT LOGIN URL HERE
    existingPatientLoginUrl: 'https://app.optimantra.com/thebaremethod/login',
  },

  // ==========================================================================
  //  LEGACY: IV THERAPY — SCREENING, INTAKE & BOOKING (NOT USED BY THE HUB)
  //  Paste your IV Therapy URLs below when supplied. Until then these are
  //  intentionally blank — buttons that reference them show "Coming Soon"
  //  and do not link anywhere. Do not paste fake URLs.
  //  IV Therapy requires medical screening, provider approval, and an
  //  appropriate treatment order before any purchase or booking.
  // ==========================================================================
  ivTherapy: {
    // PASTE YOUR IV THERAPY INTAKE URL HERE — clients begin screening here
    intakeUrl: '',
    // PASTE YOUR IV THERAPY SCREENING URL HERE — secure medical screening
    screeningUrl: '',
    // PASTE YOUR IV THERAPY BOOKING URL HERE — approved-treatment scheduling
    bookingUrl: '',
  },

  // ==========================================================================
  //  LEGACY: AGELESSRX EMR — SECONDARY MEDICAL EMR (NOT USED BY THE HUB)
  //  Paste your AgelessRx EMR URLs below when supplied. Until then these are
  //  intentionally blank — buttons that reference them show "Coming Soon"
  //  and do not link anywhere. Do not paste fake URLs.
  // ==========================================================================
  agelessRx: {
    // PASTE YOUR AGELESSRX INTAKE URL HERE — new patients start here
    intakeUrl: '',
    // PASTE YOUR AGELESSRX PATIENT PORTAL URL HERE — existing patients log in
    patientPortalUrl: '',
    // PASTE YOUR AGELESSRX SCHEDULING URL HERE — patients book visits here
    schedulingUrl: '',
  },

  // ==========================================================================
  //  LEGACY: WELLNESS MEMBERSHIPS — CHECKOUT & PORTAL LINKS (NOT USED BY THE HUB)
  //  These are hosted payment / intake / invoice links used by the wellness
  //  membership and à-la-carte sections. Paste real URLs when ready; leave
  //  blank to show a "request" form instead of a live payment button.
  //  Do NOT paste API keys or credentials here — only public URLs.
  // ==========================================================================
  wellness: {
    // Hosted payment link for membership checkout (leave blank to use request form)
    membershipCheckoutUrl: '',
    // Hosted intake link for new wellness consultations
    consultationIntakeUrl: '',
    // Manual invoice request link (e.g. a form or email link)
    invoiceRequestUrl: '',
    // Existing-patient portal link (same as legend.existingPatientLoginUrl if shared)
    existingPatientPortalUrl: '',
  },

  // ==========================================================================
  //  LEGACY: PAYMENT — MERCHANT SERVICES (NOT USED BY THE HUB)
  //  These settings are for Phase 3 when your merchant account is set up
  //  through Organic Payment Gateways. Leave the hostedPaymentUrl values
  //  as empty strings ('') until you have your hosted checkout page URLs.
  //
  //  Organic Payment Gateways arranges the merchant account and compatible
  //  gateway — it is not itself the gateway. Authorize.Net is the preferred
  //  gateway; NMI is a possible alternative.
  //
  //  Do NOT paste API secrets or login credentials here. Only paste the
  //  hosted checkout page URLs that your gateway provider gives you.
  // ==========================================================================
  payments: {
    merchantServicesCompany: 'Organic Payment Gateways',
    preferredGateway: 'Authorize.Net',
    alternativeGateway: 'NMI',
    // Four separate payment lanes — each can have its own merchant account.
    lanes: {
      esthetics: {
        label: 'Esthetic Services',
        // PHASE 3 — PASTE YOUR HOSTED CHECKOUT URL FOR ESTHETICS HERE
        hostedPaymentUrl: '',
        description: 'Facials, waxing, body treatments, contouring, memberships, packages, gift cards, spa retail.',
      },
      medical: {
        label: 'Wellness',
        // PHASE 3 — PASTE YOUR HOSTED CHECKOUT URL FOR MEDICAL HERE
        hostedPaymentUrl: '',
        description: 'Wellness consultations, telehealth visits, lab-review fees, wellness-program fees, wellness memberships.',
      },
      retail: {
        label: 'Retail',
        // PHASE 3 — PASTE YOUR HOSTED CHECKOUT URL FOR RETAIL HERE
        hostedPaymentUrl: '',
        description: 'Skincare, supplements, nonprescription wellness products, merchandise.',
      },
      education: {
        label: 'Education',
        // PHASE 3 — PASTE YOUR HOSTED CHECKOUT URL FOR EDUCATION HERE
        hostedPaymentUrl: '',
        description: 'Course reservation fees, registration, digital education, workshops, professional memberships.',
      },
    },
  },

  // ==========================================================================
  //  5. SOCIAL MEDIA & ANALYTICS
  //  Paste your social-media URLs and analytics IDs below.
  //  Google Analytics and Meta Pixel are optional — leave blank if unused.
  // ==========================================================================
  social: {
    // PASTE YOUR INSTAGRAM URL HERE
    instagram: 'https://www.instagram.com/thebaremethodav',
    instagramHandle: '@thebaremethodav',

    // PASTE YOUR GOOGLE BUSINESS PROFILE URL HERE
    googleBusiness: 'https://www.google.com/maps/place/The+Bare+Method',

    // PASTE YOUR GOOGLE REVIEWS SHARE URL HERE
    googleReviews:
      'https://www.google.com/search?sca_esv=dd9042cde73709e4&rlz=1C1HKFL_enUS1215US1215&biw=1920&bih=945&sxsrf=APpeQnsT5KhkkJWy0zxgBWSw83rRth1wdw:1785030348503&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_-Q2a1R4cl_yMGvSaWyxoKegw4JJaMKo_uNy37cTFsDPIaW2r0Kj-Qb5Rh3gQKfgeKDpp1pfn7-oxNs9mFAmHQY2ytEe&q=The+Bare+Method+Reviews&sa=X&ved=2ahUKEwiNvNeenO-VAxX3hisGHR_2F_YQ0bkNegQIKRAI&cshid=1785030441778772',

    // PASTE YOUR GOOGLE ANALYTICS ID HERE (e.g. 'G-XXXXXXXXXX') — or leave blank
    googleAnalyticsId: '',

    // PASTE YOUR META PIXEL ID HERE — or leave blank
    metaPixelId: '',
  },

  // ==========================================================================
  //  6. GOOGLE MAPS
  //  These control the map on the Contact page and the "Get Directions" link.
  //  The defaults below use your business address. You usually do not need
  //  to change these unless you move locations.
  // ==========================================================================
  maps: {
    embedSrc:
      'https://www.google.com/maps?q=15115+Cedar+Avenue+Suite+33+Apple+Valley+MN+55124&output=embed',
    directionsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=15115+Cedar+Avenue+Suite+33+Apple+Valley+MN+55124',
  },

  // ==========================================================================
  //  7. LEGACY CLINICAL PARTNERS (NOT USED BY THE PUBLIC HUB)
  // ==========================================================================
  clinicalPartners: {
    medicalPlatform: 'Legend EHR',
    providerPartner: 'Scriptful (or another approved licensed-provider partner)',
    pharmacyFulfillment: 'Approved pharmacy partner',
    laboratoryServices: 'Participating laboratories',
  },
} as const;

export type SiteConfig = typeof siteConfig;
