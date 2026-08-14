/**
 * ============================================================================
 *  LEGAL ENTITY SETTINGS — CENTRAL CONFIGURATION
 * ============================================================================
 *
 *  This is the ONE file to edit for all legal-entity, partner-relationship,
 *  and policy-version information used across every legal page on the site.
 *
 *  Edit the placeholder values below to match your actual business operations.
 *  Every placeholder is wrapped in [BRACKETS] so you can easily find and
 *  replace them.
 *
 *  ADMINISTRATOR NOTICE — NOT DISPLAYED PUBLICLY
 *  ---------------------------------------------------------------------------
 *  "These policy templates must be reviewed by qualified Minnesota legal
 *  counsel before publication or commercial launch. The website owner is
 *  responsible for confirming that the policies accurately reflect actual
 *  business operations, clinical relationships, payment practices,
 *  cancellation procedures, data handling and applicable law."
 *  ---------------------------------------------------------------------------
 *
 *  Do NOT paste API keys, passwords, or credentials here.
 * ============================================================================
 */

export type PolicyStatus = 'draft' | 'pending_legal_review' | 'approved' | 'published' | 'archived';

export type PolicyVersionMeta = {
  slug: string;
  title: string;
  status: PolicyStatus;
  effectiveDate: string;
  lastUpdated: string;
  version: string;
  reviewerName?: string;
  internalNotes?: string;
};

export const legalEntitySettings = {
  // ==========================================================================
  //  1. ENTITY IDENTITY
  // ==========================================================================
  websiteOperatorLegalName: '[WEBSITE OPERATOR LEGAL NAME — e.g. The Bare Method LLC]',
  bareMethodLegalEntityName: '[THE BARE METHOD LEGAL ENTITY NAME — e.g. The Bare Method LLC]',
  dbaName: 'The Bare Method',
  businessMailingAddress: {
    line1: '15115 Cedar Avenue, Suite 33',
    city: 'Apple Valley',
    state: 'MN',
    zip: '55124',
  },
  website: 'thebaremethodmn.com',

  // ==========================================================================
  //  2. CONTACT EMAILS & PHONE
  // ==========================================================================
  customerServiceEmail: '[CUSTOMER-SERVICE EMAIL — e.g. info@thebaremethodmn.com]',
  privacyEmail: '[PRIVACY EMAIL — e.g. privacy@thebaremethodmn.com]',
  legalNoticeEmail: '[LEGAL-NOTICE EMAIL — e.g. legal@thebaremethodmn.com]',
  membershipCancellationEmail: '[MEMBERSHIP-CANCELLATION EMAIL — e.g. cancel@thebaremethodmn.com]',
  customerServicePhone: '218-656-7189',

  // ==========================================================================
  //  3. CLINICAL & MEDICAL RELATIONSHIPS
  // ==========================================================================
  medicalPracticeLegalName: '[MEDICAL-PRACTICE LEGAL NAME — insert when confirmed]',
  clinicalPartnerName: '[CLINICAL-PARTNER NAME — e.g. Scriptful or another approved licensed-provider partner]',
  scriptfulRelationshipDescription:
    'The Bare Method may work with Scriptful (or another approved clinical partner) to connect clients with appropriately licensed medical providers for evaluation, telehealth, and prescribing. The clinical partner and its providers are responsible for clinical decisions, medical evaluations, and prescribing. The Bare Method does not independently control the clinical judgment of licensed providers.',
  legendPatientPlatformDescription:
    'Legend EHR is the designated secure patient platform used for medical intake, telehealth visits, clinical messaging, and patient records. Medical information submitted through Legend EHR is governed by the privacy practices of the healthcare entity responsible for your care.',
  noticeOfPrivacyPracticesUrl: '[LINK TO RESPONSIBLE MEDICAL PRACTICE NOTICE OF PRIVACY PRACTICES — insert when confirmed]',
  noticeOfPrivacyPracticesPdfUrl: '[OPTIONAL PDF DOWNLOAD LINK — insert when available]',
  noticeOfPrivacyPracticesPrivacyContact: '[MEDICAL PRACTICE PRIVACY CONTACT — insert when confirmed]',
  noticeOfPrivacyPracticesEffectiveDate: '[EFFECTIVE DATE — insert when confirmed]',

  // ==========================================================================
  //  4. PHARMACY & LABORATORY
  // ==========================================================================
  pharmacyPartnerName: '[PHARMACY-PARTNER NAME — or use: An approved independent pharmacy partner]',
  laboratoryPartnerName: '[LABORATORY-PARTNER NAME — or use: Participating third-party laboratories]',

  // ==========================================================================
  //  5. PAYMENT & TECHNOLOGY
  // ==========================================================================
  paymentProcessor: '[PAYMENT PROCESSOR — e.g. Authorize.Net or NMI via Organic Payment Gateways]',
  merchantServicesProvider: '[MERCHANT-SERVICES PROVIDER — e.g. Organic Payment Gateways]',
  paymentGateway: '[PAYMENT GATEWAY — e.g. Authorize.Net]',
  estheticBookingProvider: 'Vagaro',

  // ==========================================================================
  //  6. AFFILIATES & REFERRAL PARTNERS
  // ==========================================================================
  affiliateCompanies: '[LIST AFFILIATE COMPANIES — or use: Various affiliate partners as disclosed at the point of recommendation]',
  referralPartners: '[LIST REFERRAL PARTNERS — or use: Various referral partners as disclosed at the point of recommendation]',
  educationDivision: '[EDUCATION DIVISION NAME — e.g. The Bare Method Education, a division of The Bare Method]',

  // ==========================================================================
  //  7. POLICY VERSION CONTROL
  //  Edit these dates and statuses as policies are reviewed and published.
  //  Statuses: draft | pending_legal_review | approved | published | archived
  // ==========================================================================
  effectiveDate: '[EFFECTIVE DATE — insert when confirmed]',
  lastUpdatedDate: '[LAST UPDATED DATE — insert when confirmed]',

  policyVersions: [
    { slug: 'terms-of-use', title: 'Website Terms of Use', status: 'draft' as PolicyStatus, effectiveDate: '[EFFECTIVE DATE]', lastUpdated: '[LAST UPDATED]', version: '1.0' },
    { slug: 'privacy-policy', title: 'Website Privacy Policy', status: 'draft' as PolicyStatus, effectiveDate: '[EFFECTIVE DATE]', lastUpdated: '[LAST UPDATED]', version: '1.0' },
    { slug: 'consumer-health-data-notice', title: 'Consumer Health Data Notice', status: 'draft' as PolicyStatus, effectiveDate: '[EFFECTIVE DATE]', lastUpdated: '[LAST UPDATED]', version: '1.0' },
    { slug: 'notice-of-privacy-practices', title: 'Notice of Privacy Practices', status: 'draft' as PolicyStatus, effectiveDate: '[EFFECTIVE DATE]', lastUpdated: '[LAST UPDATED]', version: '1.0' },
    { slug: 'medical-disclaimer', title: 'Medical and Telehealth Disclaimer', status: 'draft' as PolicyStatus, effectiveDate: '[EFFECTIVE DATE]', lastUpdated: '[LAST UPDATED]', version: '1.0' },
    { slug: 'medical-wellness-terms', title: 'Medical Wellness Terms', status: 'draft' as PolicyStatus, effectiveDate: '[EFFECTIVE DATE]', lastUpdated: '[LAST UPDATED]', version: '1.0' },
    { slug: 'esthetic-services-terms', title: 'Esthetic Services Terms', status: 'draft' as PolicyStatus, effectiveDate: '[EFFECTIVE DATE]', lastUpdated: '[LAST UPDATED]', version: '1.0' },
    { slug: 'membership-terms', title: 'Membership and Automatic Renewal Terms', status: 'draft' as PolicyStatus, effectiveDate: '[EFFECTIVE DATE]', lastUpdated: '[LAST UPDATED]', version: '1.0' },
    { slug: 'refund-policy', title: 'Refund, Cancellation and Credit Policy', status: 'draft' as PolicyStatus, effectiveDate: '[EFFECTIVE DATE]', lastUpdated: '[LAST UPDATED]', version: '1.0' },
    { slug: 'shipping-policy', title: 'Product Sales and Shipping Policy', status: 'draft' as PolicyStatus, effectiveDate: '[EFFECTIVE DATE]', lastUpdated: '[LAST UPDATED]', version: '1.0' },
    { slug: 'supplement-disclaimer', title: 'Supplement and Wellness Product Disclaimer', status: 'draft' as PolicyStatus, effectiveDate: '[EFFECTIVE DATE]', lastUpdated: '[LAST UPDATED]', version: '1.0' },
    { slug: 'affiliate-disclosure', title: 'Affiliate, Referral and Advertising Disclosure', status: 'draft' as PolicyStatus, effectiveDate: '[EFFECTIVE DATE]', lastUpdated: '[LAST UPDATED]', version: '1.0' },
    { slug: 'testimonials-disclaimer', title: 'Reviews, Testimonials and Results Disclaimer', status: 'draft' as PolicyStatus, effectiveDate: '[EFFECTIVE DATE]', lastUpdated: '[LAST UPDATED]', version: '1.0' },
    { slug: 'sms-terms', title: 'SMS and Electronic Communications Terms', status: 'draft' as PolicyStatus, effectiveDate: '[EFFECTIVE DATE]', lastUpdated: '[LAST UPDATED]', version: '1.0' },
    { slug: 'cookie-notice', title: 'Cookie and Tracking Technologies Notice', status: 'draft' as PolicyStatus, effectiveDate: '[EFFECTIVE DATE]', lastUpdated: '[LAST UPDATED]', version: '1.0' },
    { slug: 'accessibility-statement', title: 'Accessibility Statement', status: 'draft' as PolicyStatus, effectiveDate: '[EFFECTIVE DATE]', lastUpdated: '[LAST UPDATED]', version: '1.0' },
    { slug: 'education-terms', title: 'Education and Course Terms', status: 'draft' as PolicyStatus, effectiveDate: '[EFFECTIVE DATE]', lastUpdated: '[LAST UPDATED]', version: '1.0' },
    { slug: 'gift-card-terms', title: 'Gift Card and Promotional Credit Terms', status: 'draft' as PolicyStatus, effectiveDate: '[EFFECTIVE DATE]', lastUpdated: '[LAST UPDATED]', version: '1.0' },
    { slug: 'payment-authorization-terms', title: 'Payment Authorization Terms', status: 'draft' as PolicyStatus, effectiveDate: '[EFFECTIVE DATE]', lastUpdated: '[LAST UPDATED]', version: '1.0' },
    { slug: 'copyright-trademark-acceptable-use', title: 'Copyright, Trademark and Acceptable Use Policy', status: 'draft' as PolicyStatus, effectiveDate: '[EFFECTIVE DATE]', lastUpdated: '[LAST UPDATED]', version: '1.0' },
  ] as PolicyVersionMeta[],

  // ==========================================================================
  //  8. OPTIONAL ATTORNEY-REVIEW MODULES (DISABLED BY DEFAULT)
  //  Do not activate arbitration or class-action-waiver language without
  //  attorney approval.
  // ==========================================================================
  optionalModules: {
    arbitration: {
      enabled: false,
      notice: 'Do not activate arbitration or class-action-waiver language without attorney approval.',
    },
    classActionWaiver: {
      enabled: false,
      notice: 'Do not activate arbitration or class-action-waiver language without attorney approval.',
    },
    juryTrialWaiver: {
      enabled: false,
      notice: 'Do not activate arbitration or class-action-waiver language without attorney approval.',
    },
  },

  // ==========================================================================
  //  9. INTERNAL ADMINISTRATOR NOTICE (NOT DISPLAYED PUBLICLY)
  // ==========================================================================
  adminNotice:
    'These policy templates must be reviewed by qualified Minnesota legal counsel before publication or commercial launch. The website owner is responsible for confirming that the policies accurately reflect actual business operations, clinical relationships, payment practices, cancellation procedures, data handling and applicable law.',
} as const;

export type LegalEntitySettings = typeof legalEntitySettings;
