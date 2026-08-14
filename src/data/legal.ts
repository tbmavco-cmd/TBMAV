import { legalEntitySettings as les } from '@/config/legalEntity';

export type LegalPage = {
  slug: string;
  title: string;
  category: 'legal' | 'services' | 'commerce' | 'disclosures';
  lastUpdated: string;
  /** When true, a "Draft — Not Yet Effective" banner is shown. */
  draft?: boolean;
  sections: { heading: string; body: string }[];
};

const PH = (s: string) => s;

export const legalPages: LegalPage[] = [
  // 1. WEBSITE TERMS OF USE
  {
    slug: 'terms-of-use',
    title: 'Website Terms of Use',
    category: 'legal',
    lastUpdated: PH(les.lastUpdatedDate),
    draft: true,
    sections: [
      {
        heading: 'Acceptance of Terms',
        body: `By accessing or using this website operated by ${les.websiteOperatorLegalName} ("The Bare Method," "we," "us," or "our"), you agree to be bound by these Website Terms of Use. If you do not agree, please discontinue use of this website.`,
      },
      {
        heading: 'Eligibility',
        body: 'You must be at least 18 years of age and legally capable of entering into binding contracts to use this website. By using this website, you represent and warrant that you meet these requirements.',
      },
      {
        heading: 'Geographic Availability',
        body: 'This website is accessible from many locations, but not all services described on this website are available in every state. Clinical services may be limited by provider licensing and applicable law. Availability of specific services will be confirmed during the applicable booking, intake, or consent process.',
      },
      {
        heading: 'Description of the Website',
        body: 'This website provides information about esthetic services, wellness programs, retail products, education, and memberships. The website also routes users to third-party platforms for booking, medical intake, telehealth, and payment. The public website is not a medical practice and does not itself provide medical care, diagnoses, or prescriptions.',
      },
      {
        heading: 'Separation of Public Website and Clinical Services',
        body: 'Public website content, forms, and shopping features are administrative and informational only. Clinical services — including medical evaluations, telehealth visits, prescribing, and laboratory ordering — are provided through independent medical practices and licensed healthcare professionals via the designated secure patient platform. Browsing this website, adding an item to a plan, or submitting a request does not create a provider-patient relationship.',
      },
      {
        heading: 'No Medical Advice Through Public Website Content',
        body: 'Information on this website is for general educational purposes only and is not medical advice. Do not rely on website content as a substitute for evaluation and advice from an appropriately licensed healthcare provider.',
      },
      {
        heading: 'No Provider-Patient Relationship Created by Browsing',
        body: 'A provider-patient relationship is established only through the approved clinical intake and consent process conducted through the designated secure patient platform — not by browsing this website, completing a public form, or purchasing a consultation.',
      },
      {
        heading: 'No Guaranteed Treatment or Prescription',
        body: 'Completing an intake, purchasing a consultation, or enrolling in a membership does not guarantee treatment, eligibility, or a prescription. Treatment and prescribing decisions are made by appropriately licensed medical providers based on individual evaluation.',
      },
      {
        heading: 'No Emergency Services',
        body: 'This website is not for emergencies. If you are experiencing a medical or psychiatric emergency, call 911 or contact your local emergency services immediately. Do not use website forms or messaging for urgent medical needs.',
      },
      {
        heading: 'Accuracy and Availability of Information',
        body: 'We strive to keep information accurate and current but do not warrant that all content is error-free, complete, or up to date. Pricing, service availability, and program details may change without notice.',
      },
      {
        heading: 'User Account Responsibilities',
        body: 'If you create an account, you are responsible for maintaining the security of your credentials and for all activity under your account. Notify us promptly of any unauthorized use.',
      },
      {
        heading: 'Acceptable Use',
        body: 'You agree not to misuse the website, interfere with its operation, attempt to gain unauthorized access, scrape content, submit false information, or use the website for any unlawful purpose.',
      },
      {
        heading: 'Prohibited Conduct',
        body: 'Prohibited conduct includes, without limitation: submitting medical information through public forms, attempting to purchase prescription medication through the public cart, distributing malware, impersonating another person, and using automated tools to access the website without authorization.',
      },
      {
        heading: 'Intellectual Property',
        body: `Website content — including text, graphics, logos, and design — is owned by or licensed to ${les.bareMethodLegalEntityName} and is protected by copyright, trademark, and other intellectual-property laws. You may not copy, reproduce, or distribute website content without prior written permission.`,
      },
      {
        heading: 'User-Submitted Content',
        body: 'If you submit reviews, testimonials, or other content, you grant us a non-exclusive, royalty-free license to use, display, and reproduce that content in connection with the website. You represent that you own or have rights to the content you submit and that it does not violate any third-party rights.',
      },
      {
        heading: 'Product and Service Availability',
        body: 'Products and services described on this website may not always be available. We reserve the right to limit quantities, discontinue products, or modify service offerings without notice.',
      },
      {
        heading: 'Pricing Corrections',
        body: 'We strive for accurate pricing but errors may occur. We reserve the right to correct pricing errors and will notify you of any correction before charging an incorrect amount. You may decline a corrected price and receive a refund for any amount already paid.',
      },
      {
        heading: 'Third-Party Websites and Platforms',
        body: 'This website links to and routes users to third-party platforms, including Vagaro (esthetic booking), Legend EHR (patient portal and telehealth), clinical-partner platforms, pharmacy partners, laboratory partners, payment processors, and affiliate links. Each third-party platform has its own terms, privacy policy, and practices. We are not responsible for the content or practices of third-party websites.',
      },
      {
        heading: 'Vagaro Links',
        body: 'Esthetic appointments, memberships, packages, and gift cards are booked and managed through Vagaro. Vagaro processes bookings and payments according to its own terms. Please review Vagaro\'s terms before booking.',
      },
      {
        heading: 'Legend Portal Links',
        body: 'Medical intake, telehealth, clinical messaging, and patient records are handled through Legend EHR. Medical information submitted through Legend EHR is governed by the privacy practices of the healthcare entity responsible for your care.',
      },
      {
        heading: 'Clinical-Partner, Pharmacy, and Laboratory Links',
        body: 'Clinical services may be provided by an independent medical practice and licensed providers. Pharmacy fulfillment and laboratory services may be provided by independent partners. These partners maintain their own terms, licenses, records, and privacy practices.',
      },
      {
        heading: 'Payment-Provider Links',
        body: 'Payments may be processed by third-party payment processors. Payment processors handle card data according to their own security standards. We do not store complete card information on this website.',
      },
      {
        heading: 'Affiliate Links',
        body: 'Some links on this website may be affiliate links. We may receive compensation when you use an affiliate link. See our Affiliate Disclosure for details.',
      },
      {
        heading: 'Disclaimer of Warranties',
        body: 'This website and its content are provided "as is" without warranties of any kind, whether express or implied. We do not warrant that the website will be uninterrupted, error-free, or free of harmful components.',
      },
      {
        heading: 'Limitation of Liability',
        body: 'To the fullest extent permitted by applicable law, neither The Bare Method nor its affiliates, partners, or providers shall be liable for indirect, incidental, special, consequential, or punitive damages arising from your use of this website. This limitation is subject to review by qualified counsel and to any rights that cannot be excluded under applicable law.',
      },
      {
        heading: 'Indemnification',
        body: 'You agree to indemnify and hold harmless The Bare Method and its affiliates from claims, damages, and expenses arising from your misuse of the website or violation of these Terms. This provision is provided for attorney review and may be modified to comply with applicable law.',
      },
      {
        heading: 'Governing Law',
        body: PH('[GOVERNING-LAW PLACEHOLDER — e.g. These Terms are governed by the laws of the State of Minnesota, without regard to conflict-of-law principles. Insert confirmed governing law after attorney review.]'),
      },
      {
        heading: 'Dispute Resolution',
        body: PH('[DISPUTE-RESOLUTION PLACEHOLDER — Insert confirmed dispute-resolution process after attorney review. Optional arbitration, jury-trial-waiver, and class-action-waiver modules are available but disabled by default. Do not activate without attorney approval.]'),
      },
      {
        heading: 'Optional Arbitration Module (Disabled)',
        body: 'An optional arbitration clause, jury-trial waiver, and class-action waiver are available as disabled modules. Internal notice: Do not activate arbitration or class-action-waiver language without attorney approval.',
      },
      {
        heading: 'Severability',
        body: 'If any provision of these Terms is found unenforceable, the remaining provisions remain in full force and effect.',
      },
      {
        heading: 'Waiver',
        body: 'Our failure to enforce any right or provision does not constitute a waiver of that right or future enforcement.',
      },
      {
        heading: 'Assignment',
        body: 'You may not assign these Terms without our consent. We may assign these Terms in connection with a business transfer or reorganization.',
      },
      {
        heading: 'Changes to Terms',
        body: 'We may update these Terms from time to time. Material changes will be posted on this page with an updated effective date. Continued use after changes constitutes acceptance.',
      },
      {
        heading: 'Contact',
        body: `For questions about these Terms, contact us at ${les.legalNoticeEmail} or ${les.customerServicePhone}. Mailing address: ${les.businessMailingAddress.line1}, ${les.businessMailingAddress.city}, ${les.businessMailingAddress.state} ${les.businessMailingAddress.zip}.`,
      },
    ],
  },

  // 2. WEBSITE PRIVACY POLICY
  {
    slug: 'privacy-policy',
    title: 'Website Privacy Policy',
    category: 'legal',
    lastUpdated: PH(les.lastUpdatedDate),
    draft: true,
    sections: [
      {
        heading: 'Who Operates the Website',
        body: `This Privacy Policy applies to the public website operated by ${les.websiteOperatorLegalName} ("The Bare Method," "we," "us," or "our"), located at ${les.website}. This policy describes how we collect, use, and protect information you provide through this public website — outside of the clinical patient portal.`,
      },
      {
        heading: 'Scope of This Policy',
        body: 'This policy covers information collected through public website forms, the shopping cart, account features, and general browsing. It does NOT cover medical information submitted through the Legend EHR patient portal, which is governed by the privacy practices of the healthcare entity responsible for your care. This website is not HIPAA-compliant and is not intended to receive protected health information.',
      },
      {
        heading: 'Important: Do Not Submit Medical Information Here',
        body: 'The public website is not intended for the submission of medical records, diagnoses, symptoms, medication information, laboratory results, treatment photographs or other sensitive health information. Medical information must be submitted through the designated secure patient platform.',
      },
      {
        heading: 'Categories of Personal Information Collected',
        body: 'We may collect the following categories of personal information through the public website: contact information (name, email, phone), account information, order and transaction information, device and browser information, website activity, general inquiry information, marketing preferences, SMS consent information, cookies and analytics data, affiliate attribution information, and information received from third-party platforms.',
      },
      {
        heading: 'Contact Information',
        body: 'When you fill out a form, request a consultation, or contact us, we collect your name, email address, phone number, and any message you provide.',
      },
      {
        heading: 'Account Information',
        body: 'If you create an account, we collect your name, email, and password (stored in hashed form).',
      },
      {
        heading: 'Order and Transaction Information',
        body: 'When you place an order or request an invoice, we collect order details, billing name, and transaction identifiers. Payment card information is handled by our third-party payment processor and is not stored on this website.',
      },
      {
        heading: 'Device and Browser Information',
        body: 'We may collect IP address, browser type, device type, and operating system for security and analytics purposes.',
      },
      {
        heading: 'Website Activity',
        body: 'We may collect information about pages visited, buttons clicked, and time spent on the website. Analytics events use neutral names and do not include medical conditions or medication selections.',
      },
      {
        heading: 'General Inquiry Information',
        body: 'When you submit a general inquiry, we collect the information you choose to provide in the form.',
      },
      {
        heading: 'Marketing Preferences',
        body: 'We may collect your marketing preferences, including whether you opt in to email or SMS marketing. Marketing consent is separate from general website acceptance and is never required as a condition of purchase.',
      },
      {
        heading: 'SMS Consent Information',
        body: 'If you opt in to SMS messages, we collect your phone number and consent status. See our SMS and Electronic Communications Terms for details.',
      },
      {
        heading: 'Cookies and Analytics',
        body: 'We use cookies and similar technologies for website operation, analytics, and — where enabled — advertising. See our Cookie and Tracking Technologies Notice for details and preference controls.',
      },
      {
        heading: 'Affiliate Attribution Information',
        body: 'We may collect affiliate attribution data such as referral identifiers when you arrive via an affiliate link.',
      },
      {
        heading: 'Information Received From Third-Party Platforms',
        body: 'We may receive limited information from third-party platforms (such as Vagaro or Legend) necessary for coordination. We do not receive clinical or medical-record data through these integrations.',
      },
      {
        heading: 'Purposes for Collecting Information',
        body: 'We use collected information for: website operation, customer service, appointment routing, order processing, payment processing, fraud prevention, marketing (where you have opted in), analytics, legal compliance, security, and business transfers.',
      },
      {
        heading: 'Service-Provider Disclosures',
        body: 'We may share information with service providers who perform functions on our behalf (such as payment processing, booking, analytics, and email delivery). These providers are bound by confidentiality obligations and may use the information only as directed.',
      },
      {
        heading: 'Affiliate and Business-Partner Disclosures',
        body: 'We may share non-medical information with affiliates and business partners for coordination purposes. We do not share medical information collected through the patient portal on this public website.',
      },
      {
        heading: 'Retention',
        body: PH('[RETENTION PERIOD PLACEHOLDER — We retain personal information only as long as necessary for the purposes described here or as required by law. Insert confirmed retention periods after attorney review.]'),
      },
      {
        heading: 'Security Safeguards',
        body: 'We use encryption in transit, secure administrator authentication, role-based admin access, environment variables for secrets, and form-spam protection. No method of transmission or storage is completely secure.',
      },
      {
        heading: 'Children\'s Privacy',
        body: 'This website is not directed to children under 18, and we do not knowingly collect personal information from children under 18.',
      },
      {
        heading: 'State Privacy Rights',
        body: 'Depending on your state of residence, you may have rights to access, correct, or delete your personal information, and to opt out of certain processing. We will evaluate and respond to verified privacy requests as required by applicable law.',
      },
      {
        heading: 'How to Submit a Privacy Request',
        body: `To submit a privacy request (access, correction, deletion, marketing opt-out, SMS opt-out, cookie preference change, or general privacy inquiry), use our Privacy Request form or contact us at ${les.privacyEmail}. We will evaluate and respond to verified privacy requests as required by applicable law.`,
      },
      {
        heading: 'Changes to This Policy',
        body: 'We may update this Privacy Policy from time to time. Material changes will be posted with an updated effective date.',
      },
      {
        heading: 'Contact',
        body: `For privacy questions, contact ${les.privacyEmail} or ${les.customerServicePhone}.`,
      },
    ],
  },

  // 3. CONSUMER HEALTH DATA NOTICE
  {
    slug: 'consumer-health-data-notice',
    title: 'Consumer Health Data Notice',
    category: 'legal',
    lastUpdated: PH(les.lastUpdatedDate),
    draft: true,
    sections: [
      {
        heading: 'Purpose of This Notice',
        body: 'This Consumer Health Data Notice describes how The Bare Method may collect, use, and share certain health-related interest information through the public website — outside of the clinical patient portal. This notice is separate from the Website Privacy Policy and the Notice of Privacy Practices that governs medical information submitted through the patient portal.',
      },
      {
        heading: 'What Health-Related Data May Be Collected',
        body: 'Through the public website, we may collect limited health-related interest information such as: the wellness program you selected, a general health-goal category (e.g. weight management, hormone wellness, longevity, skin or hair wellness), your appointment category, general wellness quiz answers, and purchase or browsing activity related to wellness services.',
      },
      {
        heading: 'What We Do Not Collect Through the Public Website',
        body: 'The public website does not collect: detailed diagnoses, medication lists, pregnancy information, laboratory results, detailed symptoms, medical images, government identification, insurance cards, or full medical histories. This information must be entered through the designated secure patient platform (Legend).',
      },
      {
        heading: 'Why Health-Related Data Is Collected',
        body: 'We collect limited health-related interest information to route you to appropriate services, coordinate consultations, personalize wellness program recommendations, and improve our offerings.',
      },
      {
        heading: 'Who May Receive It',
        body: 'Limited health-related interest information may be shared with service providers who help us operate the website and coordinate services. We do not share this information with advertising platforms in a manner that identifies your health interests. Analytics events use neutral names and do not include medical conditions or medications.',
      },
      {
        heading: 'How to Request Deletion',
        body: `You may request deletion of your health-related interest data by submitting a Privacy Request. Contact ${les.privacyEmail} to request deletion.`,
      },
      {
        heading: 'How to Withdraw Consent',
        body: 'You may withdraw consent for the collection of health-related interest data at any time by contacting us. Withdrawing consent does not affect information already collected.',
      },
      {
        heading: 'Which Information Must Be Entered Into Legend',
        body: 'All medical information — including diagnoses, symptoms, medication histories, laboratory results, and treatment records — must be submitted through the Legend patient portal, not through public website forms.',
      },
      {
        heading: 'Data Minimization',
        body: 'The website is designed to collect the minimum necessary health-related interest information to route you to appropriate services. Public wellness quizzes do not ask for detailed medical information.',
      },
      {
        heading: 'Disabling or Deleting Quiz Data',
        body: 'Administrators may disable or delete all health-goal quiz data through the admin settings. When disabled, the quiz will not collect or store health-related interest responses.',
      },
    ],
  },

  // 4. NOTICE OF PRIVACY PRACTICES
  {
    slug: 'notice-of-privacy-practices',
    title: 'Notice of Privacy Practices',
    category: 'legal',
    lastUpdated: PH(les.lastUpdatedDate),
    draft: true,
    sections: [
      {
        heading: 'What This Page Is',
        body: 'A Notice of Privacy Practices is a legal document that explains how a healthcare entity may use and disclose protected health information, and describes the rights patients have regarding that information. It is required of covered healthcare entities under applicable federal and state law.',
      },
      {
        heading: 'Important Statement',
        body: 'Medical information submitted through the patient portal is governed by the privacy practices of the healthcare entity responsible for your care. Please review that entity\'s Notice of Privacy Practices before submitting medical information.',
      },
      {
        heading: 'Responsible Medical Practice',
        body: PH(`The medical practice responsible for clinical care is: ${les.medicalPracticeLegalName}. Insert the confirmed legal name when available.`),
      },
      {
        heading: 'Privacy Contact',
        body: PH(`Privacy contact for the responsible medical practice: ${les.noticeOfPrivacyPracticesPrivacyContact}. Insert the confirmed contact when available.`),
      },
      {
        heading: 'Effective Date',
        body: PH(`Effective date of the Notice of Privacy Practices: ${les.noticeOfPrivacyPracticesEffectiveDate}. Insert the confirmed date when available.`),
      },
      {
        heading: 'Link to the Approved Notice',
        body: PH(`Link to the responsible medical practice's approved Notice of Privacy Practices: ${les.noticeOfPrivacyPracticesUrl}. Insert the confirmed URL when available.`),
      },
      {
        heading: 'Downloadable PDF',
        body: PH(`Downloadable PDF version (when available): ${les.noticeOfPrivacyPracticesPdfUrl}. Insert the confirmed PDF link when available.`),
      },
      {
        heading: 'Do Not Combine With Website Privacy Policy',
        body: 'This Notice of Privacy Practices is a separate document from the Website Privacy Policy. The Website Privacy Policy covers public website data only. The Notice of Privacy Practices covers medical information handled by the responsible healthcare entity.',
      },
    ],
  },

  // 5. MEDICAL AND TELEHEALTH DISCLAIMER
  {
    slug: 'medical-disclaimer',
    title: 'Medical and Telehealth Disclaimer',
    category: 'services',
    lastUpdated: PH(les.lastUpdatedDate),
    draft: true,
    sections: [
      {
        heading: 'Website Content Is for General Education',
        body: 'All content on this website is provided for general educational and informational purposes only. It is not medical advice and should not be relied upon as a substitute for professional medical evaluation, diagnosis, or treatment.',
      },
      {
        heading: 'Browsing Does Not Create a Provider-Patient Relationship',
        body: 'Browsing this website, reading content, adding items to a plan, or submitting a public form does not create a provider-patient relationship. A provider relationship is established only through the approved clinical intake and consent process.',
      },
      {
        heading: 'Treatment Requires an Appropriate Evaluation',
        body: 'Any treatment recommendation requires an individualized evaluation by an appropriately licensed medical provider. Treatment is provided only when medically appropriate.',
      },
      {
        heading: 'Prescriptions Are Not Guaranteed',
        body: 'A prescription is never guaranteed. A licensed medical provider determines whether any treatment or prescription is appropriate based on your individual evaluation, medical history, and applicable law.',
      },
      {
        heading: 'Compounded Medications',
        body: 'Compounded medications are not FDA-approved. The FDA has not evaluated compounded products for safety, effectiveness, or manufacturing quality in the same way it evaluates commercially approved drugs. Your provider will discuss risks and benefits.',
      },
      {
        heading: 'Availability May Vary',
        body: 'Service availability, medication availability, and treatment options may vary. Not all services are available in every state.',
      },
      {
        heading: 'Results Vary',
        body: 'Individual results vary. No guarantee is made regarding any specific outcome. Results depend on many factors including individual health, adherence, and response to treatment.',
      },
      {
        heading: 'Laboratory Testing May Be Required',
        body: 'Laboratory testing may be required or recommended before or during treatment. Lab costs are separate unless expressly stated.',
      },
      {
        heading: 'Medication Risks and Benefits',
        body: 'Medication risks and benefits are discussed by your provider during the clinical consultation. Do not rely on website content for medication risk information.',
      },
      {
        heading: 'Not for Emergencies',
        body: 'This website is not for emergencies. If you are experiencing a medical or psychiatric emergency, call 911 or contact your local emergency services immediately.',
      },
      {
        heading: 'Clinical Judgment of Licensed Providers',
        body: 'The Bare Method does not independently control the clinical judgment of licensed providers. Clinical decisions are made by the responsible medical practice and its providers.',
      },
      {
        heading: 'Pharmacy Fulfillment',
        body: 'Pharmacy fulfillment is subject to prescription validity and pharmacy requirements. The Bare Method does not independently control pharmacy operations.',
      },
      {
        heading: 'Shipping Estimates',
        body: 'Shipping estimates do not guarantee delivery dates. Carrier delays, pharmacy processing times, and other factors may affect delivery.',
      },
      {
        heading: 'No Disease-Treatment Claims',
        body: 'The Bare Method does not state that any product diagnoses, treats, cures, or prevents any disease unless the claim is legally permitted and properly supported.',
      },
    ],
  },

  // 6. MEDICAL WELLNESS TERMS
  {
    slug: 'medical-wellness-terms',
    title: 'Medical Wellness Terms',
    category: 'services',
    lastUpdated: PH(les.lastUpdatedDate),
    draft: true,
    sections: [
      {
        heading: 'Nature of the Program',
        body: 'Medical wellness programs are provider-led services that may include consultation, evaluation, laboratory testing, treatment planning, and follow-up care. These programs are not insurance and do not guarantee any specific treatment or prescription.',
      },
      {
        heading: 'Role of The Bare Method',
        body: 'The Bare Method provides administrative coordination, program information, and routing to clinical services. The Bare Method does not itself provide medical care, diagnoses, or prescriptions.',
      },
      {
        heading: 'Role of the Independent Medical Practice',
        body: PH(`Clinical care is provided by an independent medical practice: ${les.medicalPracticeLegalName}. The medical practice maintains its own licenses, professionals, records, privacy notices, and clinical responsibilities.`),
      },
      {
        heading: 'Role of Scriptful or the Clinical Partner',
        body: PH(les.scriptfulRelationshipDescription),
      },
      {
        heading: 'Role of the Provider',
        body: 'The licensed medical provider is responsible for clinical evaluation, medical decisions, and prescribing. Provider decisions are independent of membership status.',
      },
      {
        heading: 'Role of the Pharmacy',
        body: PH(`Pharmacy fulfillment is provided by ${les.pharmacyPartnerName}. The pharmacy is responsible for dispensing, shipping, and pharmacy-specific returns or replacements.`),
      },
      {
        heading: 'Role of the Laboratory',
        body: PH(`Laboratory services are provided by ${les.laboratoryPartnerName}. Laboratory policies govern collection, processing, and results.`),
      },
      {
        heading: 'Eligibility',
        body: 'Eligibility for any medical wellness program is determined by the provider after evaluation. Not all applicants will qualify for treatment.',
      },
      {
        heading: 'State Availability',
        body: 'Telehealth and clinical services may not be available in every state. Availability depends on provider licensing and applicable law.',
      },
      {
        heading: 'Intake Requirements',
        body: 'You must complete the secure medical intake through the Legend patient portal before a consultation can occur. The intake includes identity verification and relevant medical-history questions.',
      },
      {
        heading: 'Identity Verification',
        body: 'Identity verification is required before clinical services are provided. This may include government identification submitted through the secure patient portal — never through public website forms.',
      },
      {
        heading: 'Provider Evaluation',
        body: 'A provider evaluation is required before any treatment or prescription is considered. The evaluation may be conducted via telehealth or in person.',
      },
      {
        heading: 'Medical Consent Handled Separately',
        body: 'Medical consent — including consent for treatment, telehealth, and medication — is handled through the secure patient portal and is separate from these website terms.',
      },
      {
        heading: 'No Guaranteed Treatment or Prescription',
        body: 'Payment for a consultation does not guarantee eligibility, prescription approval, a specific medication, a specific dose, or a particular result.',
      },
      {
        heading: 'Follow-Up Requirements',
        body: 'Follow-up visits may be required for continued treatment. Failure to complete required follow-ups may result in discontinuation of treatment.',
      },
      {
        heading: 'Laboratory Requirements',
        body: 'Laboratory testing may be required before or during treatment. Lab fees are separate unless expressly stated.',
      },
      {
        heading: 'Patient Responsibilities',
        body: 'You are responsible for providing accurate information, attending scheduled visits, following treatment instructions, and promptly reporting changes in your medical condition.',
      },
      {
        heading: 'Accurate-Information Requirement',
        body: 'You must provide accurate and complete information. Providing false or misleading information may result in termination from a program.',
      },
      {
        heading: 'Changes in Medical Condition',
        body: 'You must promptly report any changes in your medical condition to your provider through the secure patient portal.',
      },
      {
        heading: 'Medication Storage and Use',
        body: 'You are responsible for proper storage and use of any medication as directed by your provider and pharmacist.',
      },
      {
        heading: 'No Sharing or Resale',
        body: 'You may not share, sell, or transfer medication prescribed to you. Doing so may result in termination from the program and may be unlawful.',
      },
      {
        heading: 'Refill Requests',
        body: 'Refill requests are coordinated through the patient portal and are subject to provider approval and pharmacy processing.',
      },
      {
        heading: 'Missed Follow-Ups',
        body: 'Missed follow-up appointments may affect your treatment plan and may result in charges according to the Refund Policy.',
      },
      {
        heading: 'Discontinuation of Treatment',
        body: 'Treatment may be discontinued by the provider at any time if it is no longer medically appropriate or if the patient fails to meet program requirements.',
      },
      {
        heading: 'Pharmacy Delays and Shipping',
        body: 'Pharmacy processing and shipping are handled by the pharmacy partner. Delays may occur and are not controlled by The Bare Method.',
      },
      {
        heading: 'Charges',
        body: 'Charges may include membership fees, medication fees, laboratory fees, and provider-visit fees. Each is separate unless expressly stated.',
      },
      {
        heading: 'Refund Limitations',
        body: 'Refund eligibility for medical wellness services is described in the Refund, Cancellation and Credit Policy. Consultation fees are generally nonrefundable once the consultation has occurred.',
      },
      {
        heading: 'Clinical-Record Ownership',
        body: 'Clinical records are maintained by the responsible medical practice through the secure patient platform.',
      },
      {
        heading: 'Privacy Notice',
        body: 'Medical information is governed by the Notice of Privacy Practices of the responsible healthcare entity. Public website data is governed by the Website Privacy Policy.',
      },
      {
        heading: 'Communications',
        body: 'Clinical communications occur through the secure patient portal. Administrative communications may occur through email or SMS (where you have opted in).',
      },
      {
        heading: 'Termination from a Program',
        body: 'The Bare Method or the medical practice may terminate a patient from a program for noncompliance, safety concerns, or failure to meet program requirements.',
      },
      {
        heading: 'Emergency Limitations',
        body: 'Medical wellness programs are not for emergencies. Contact 911 or local emergency services for urgent needs.',
      },
    ],
  },

  // 7. ESTHETIC SERVICES TERMS
  {
    slug: 'esthetic-services-terms',
    title: 'Esthetic Services Terms',
    category: 'services',
    lastUpdated: PH(les.lastUpdatedDate),
    draft: true,
    sections: [
      {
        heading: 'Appointment Booking',
        body: 'Esthetic appointments are booked through Vagaro. By booking, you agree to Vagaro\'s terms and to these Esthetic Services Terms.',
      },
      {
        heading: 'Reservation Fees',
        body: PH('[RESERVATION FEE PLACEHOLDER — A reservation fee may be required to secure certain appointments. Insert the confirmed reservation fee amount and terms.]'),
      },
      {
        heading: 'Cancellation Deadlines',
        body: PH('[CANCELLATION DEADLINE PLACEHOLDER — At least 24 hours notice is requested for cancellation or rescheduling. Insert the confirmed cancellation window.]'),
      },
      {
        heading: 'No-Shows',
        body: 'Late cancellations may result in loss of reservation fee or a cancellation fee. No-shows may be charged up to the reserved service amount when properly disclosed during booking and permitted by the booking platform and applicable law. Do not activate a full-service no-show charge unless it is clearly disclosed during booking.',
      },
      {
        heading: 'Late Arrivals',
        body: 'Late arrival may shorten the service without reducing the price. Arrivals more than [PLACEHOLDER — insert late-arrival threshold] after the appointment time may be considered a no-show.',
      },
      {
        heading: 'Service Shortening',
        body: 'If you arrive late, the service may be shortened to fit the remaining time without a price reduction.',
      },
      {
        heading: 'Rescheduling',
        body: 'Rescheduling within the cancellation window is subject to availability. Rescheduling outside the window may be treated as a cancellation.',
      },
      {
        heading: 'Contraindications',
        body: 'Certain medical conditions, medications, or treatments may be contraindications for esthetic services. You must disclose relevant information before treatment.',
      },
      {
        heading: 'Required Forms',
        body: 'You must complete any required intake or consent forms before treatment begins.',
      },
      {
        heading: 'Consent Requirements',
        body: 'Service-specific informed consent must be completed separately before treatment. Esthetic informed consent is not combined with website terms.',
      },
      {
        heading: 'Minor Policy',
        body: PH('[MINOR-POLICY PLACEHOLDER — Insert the confirmed policy regarding minors, including minimum age and parental-consent requirements.]'),
      },
      {
        heading: 'Results Disclaimer',
        body: 'Individual results vary. No guarantee is made regarding any specific esthetic outcome.',
      },
      {
        heading: 'Before-and-After Photography Consent',
        body: 'Before-and-after photography consent is handled separately and must be obtained before any images are taken or used.',
      },
      {
        heading: 'Packages',
        body: 'Packages are subject to the terms disclosed at purchase and may have expiration dates. Package terms are managed through Vagaro.',
      },
      {
        heading: 'Membership Credits',
        body: 'Esthetic membership credits are managed through Vagaro. Credits may have expiration terms. See the Membership Terms for details.',
      },
      {
        heading: 'Expiration',
        body: 'Credits, packages, and promotional offers may expire according to the terms disclosed at purchase and applicable law.',
      },
      {
        heading: 'Product Reactions',
        body: 'If you experience a reaction to a product used during a service, contact us promptly. Reactions may require medical evaluation.',
      },
      {
        heading: 'Aftercare',
        body: 'Following aftercare instructions is your responsibility. Failure to follow aftercare may affect results.',
      },
      {
        heading: 'Refusal or Discontinuation of Service',
        body: 'The Bare Method reserves the right to refuse or discontinue a service if the provider or practitioner determines it is not appropriate or safe.',
      },
      {
        heading: 'Provider or Practitioner Changes',
        body: 'The assigned provider or practitioner may change. We do not guarantee a specific provider for every appointment.',
      },
      {
        heading: 'Service Availability',
        body: 'Service availability may change. We reserve the right to modify or discontinue services.',
      },
      {
        heading: 'Promotional Pricing',
        body: 'Promotional pricing is temporary and subject to the terms disclosed at the time of purchase. Promotional prices may not be combined with other offers unless stated.',
      },
      {
        heading: 'Gratuities',
        body: 'Gratuities are at the client\'s discretion and are not included in service pricing.',
      },
      {
        heading: 'Refund Rules',
        body: 'Refund rules for esthetic services are described in the Refund, Cancellation and Credit Policy.',
      },
    ],
  },

  // 8. MEMBERSHIP AND AUTOMATIC RENEWAL TERMS
  {
    slug: 'membership-terms',
    title: 'Membership and Automatic Renewal Terms',
    category: 'services',
    lastUpdated: PH(les.lastUpdatedDate),
    draft: true,
    sections: [
      {
        heading: 'Applicability',
        body: 'These terms apply to all recurring memberships, including Bare Access, Bare Support, Bare Complete, esthetic memberships, education memberships, and any future recurring program.',
      },
      {
        heading: 'Before Checkout Disclosure',
        body: 'Before you complete a membership purchase, the following will be displayed: the membership name, exact price, billing frequency, initial charge date, renewal frequency, minimum term (if any), whether pricing is promotional, when promotional pricing ends, standard renewal price, included benefits, excluded costs, cancellation procedure, required cancellation notice, when cancellation becomes effective, refund rules, failed-payment procedure, pause rules, reactivation rules, benefit expiration, and nontransferability.',
      },
      {
        heading: 'Auto-Renewal Consent',
        body: 'You must affirmatively check a box stating: "I understand that this membership automatically renews and authorizes recurring charges at the price and frequency displayed until I cancel according to the membership terms." This box is not pre-checked.',
      },
      {
        heading: 'Post-Enrollment Confirmation',
        body: 'After enrollment, you will receive a confirmation containing: the membership purchased, price, billing frequency, renewal terms, cancellation method, customer-support contact, a link to manage or cancel the membership, and the effective date.',
      },
      {
        heading: 'Cancellation Method',
        body: `You may cancel through: your account dashboard (when available), our online cancellation form, customer-service email (${les.membershipCancellationEmail}), or another verified method approved by the business. You are not required to call as the only cancellation method.`,
      },
      {
        heading: 'Cancellation Timing',
        body: 'Cancellation will prevent future renewal charges after the cancellation becomes effective. Membership benefits remain available through the end of the paid billing period unless otherwise stated. The specific notice period and effective date are subject to attorney review and will be confirmed in the final policy.',
      },
      {
        heading: 'Annual Recurring-Membership Reminder',
        body: 'For annual memberships, a reminder will be sent before each renewal containing the current price, billing frequency, included benefits, renewal status, and instructions for managing or cancelling.',
      },
      {
        heading: 'Failed Payments',
        body: 'If a payment fails, we will attempt to process the payment again. Membership benefits may be paused until payment is resolved. Re-enrollment may be subject to a fee.',
      },
      {
        heading: 'Pause Rules',
        body: PH('[PAUSE-RULES PLACEHOLDER — Insert the confirmed policy regarding membership pauses, including whether pauses are allowed, maximum pause duration, and conditions.]'),
      },
      {
        heading: 'Reactivation Rules',
        body: PH('[REACTIVATION-RULES PLACEHOLDER — Insert the confirmed policy regarding membership reactivation after cancellation or lapse.]'),
      },
      {
        heading: 'Benefit Expiration',
        body: 'Membership benefits do not roll over unless expressly stated. Complimentary add-ons must be redeemed during the applicable membership month or quarter. Unused benefits expire at the end of the billing period.',
      },
      {
        heading: 'Nontransferability',
        body: 'Memberships are nontransferable. Membership fees have no cash value.',
      },
      {
        heading: 'Savings and Combinations',
        body: 'Membership savings cannot be combined with other promotions unless specifically stated. Savings do not apply to medications, laboratory testing, shipping, pharmacy fees, consultation fees, gift cards, education, or already-discounted packages unless specifically enabled.',
      },
      {
        heading: 'Clinical Independence',
        body: 'Clinical eligibility and prescribing decisions remain independent of membership status. Membership does not guarantee treatment or a prescription.',
      },
      {
        heading: 'Prepaid Plans',
        body: 'Prepaid plans (quarterly and annual) are subject to the posted membership cancellation and refund terms. Prepaid savings represent a reduced monthly rate for upfront payment and are not a discount on the standard monthly investment.',
      },
      {
        heading: 'Promotional Memberships',
        body: 'Promotional pricing (including founding-member offers) automatically transitions to standard pricing after the promotional period. Pricing and renewal terms are clearly shown before checkout.',
      },
    ],
  },

  // 9. REFUND, CANCELLATION AND CREDIT POLICY
  {
    slug: 'refund-policy',
    title: 'Refund, Cancellation and Credit Policy',
    category: 'services',
    lastUpdated: PH(les.lastUpdatedDate),
    draft: true,
    sections: [
      {
        heading: 'Overview',
        body: 'This policy explains refund, cancellation, and credit rules for all The Bare Method offerings. Service-specific sections are provided below. This policy does not create a universal refund promise and is subject to applicable law.',
      },
      {
        heading: 'Section A: Esthetic Appointments',
        body: PH(`At least 24 hours' notice is requested for cancellation or rescheduling. Late cancellations may result in loss of reservation fee or a cancellation fee. No-shows may be charged up to the reserved service amount when properly disclosed during booking and permitted by the booking platform and applicable law. Late arrival may shorten the service without reducing the investment. Provider-cancelled appointments may be rescheduled or refunded. [INSERT CONFIRMED RESERVATION FEE AMOUNT, CANCELLATION WINDOW, AND NO-SHOW CHARGE.]`),
      },
      {
        heading: 'Section B: Wellness Consultations',
        body: 'Consultation fees may be refundable if cancelled before the disclosed cancellation deadline. Once a provider consultation has occurred, the consultation fee is generally nonrefundable. Ineligibility for medication does not automatically make a completed provider consultation refundable. A provider-cancelled consultation may be rescheduled or refunded. [INSERT CONFIRMED CANCELLATION DEADLINE AND RESCHEDULING WINDOW.]',
      },
      {
        heading: 'Section C: Memberships',
        body: 'Membership recurring charges may be cancelled according to the Membership Terms. Prepaid memberships are subject to the posted cancellation and refund terms. Used benefits are not refundable. Unused benefits do not roll over unless expressly stated. Partial-month refunds are subject to the confirmed policy. Duplicate charges, unauthorized charges, and billing errors will be reviewed. [INSERT CONFIRMED PARTIAL-MONDAY REFUND POLICY.]',
      },
      {
        heading: 'Section D: Prescription and Compounded Products',
        body: 'Refund eligibility for prescription or compounded products depends on the status of the provider review, prescription, pharmacy processing, and shipment. Once a medication has been prepared, dispensed, or shipped, it may be nonreturnable and nonrefundable, except where required by law or when the responsible pharmacy confirms an error or eligible replacement. The responsible pharmacy\'s policy controls pharmacy-specific returns and replacements. [INSERT CONFIRMED PHARMACY RETURN POLICY REFERENCE.]',
      },
      {
        heading: 'Section E: Laboratory Services',
        body: 'Lab orders, collection fees, unused kits, activated kits, completed testing, failed samples, recollection, and provider review are subject to the policies of the responsible laboratory. Refund eligibility depends on the status of the lab process. [INSERT CONFIRMED LABORATORY REFUND POLICY REFERENCE.]',
      },
      {
        heading: 'Section F: Retail Products',
        body: PH('[RETAIL-RETURN PLACEHOLDER — Unopened products may be returned within [INSERT RETURN PERIOD] of purchase. Opened skincare, hygiene-sensitive products, and supplements may not be returnable. Damaged or incorrect products may be eligible for replacement or refund. Final-sale items are nonreturnable. Shipping charges are nonrefundable except for errors. Return authorization may be required. Insert the confirmed return period and conditions.]'),
      },
      {
        heading: 'Section G: Education and Courses',
        body: PH('[EDUCATION-REFUND PLACEHOLDER — Course reservation fees are [INSERT: refundable/nonrefundable]. Remaining balances are due according to the confirmed payment schedule. Student cancellations, transfers, and rescheduling are subject to [INSERT CONFIRMED POLICY]. Instructor cancellations may result in rescheduling or refund. Digital materials and downloadable content may be nonrefundable once accessed. Insert the confirmed education refund terms.]'),
      },
      {
        heading: 'Section H: Gift Cards and Credits',
        body: 'Paid gift cards have no cash redemption value except where required by law. Promotional credits may have an expiration when properly disclosed and permitted. Paid gift-card balances are treated according to applicable law. Lost cards may be replaced subject to verification. Gift cards are nontransferable. Gift cards may not be usable for prescription products unless approved.',
      },
      {
        heading: 'Review Paths',
        body: 'We will review requests for: duplicate charges, unauthorized charges, billing errors, provider cancellations, services that cannot be delivered, and situations required by law. Submitting a request does not guarantee a refund.',
      },
      {
        heading: 'How to Request a Refund',
        body: `Use our Refund Request form or contact ${les.customerServiceEmail}. Do not submit medical information through the refund form.`,
      },
    ],
  },

  // 10. PRODUCT SALES AND SHIPPING POLICY
  {
    slug: 'shipping-policy',
    title: 'Product Sales and Shipping Policy',
    category: 'commerce',
    lastUpdated: PH(les.lastUpdatedDate),
    draft: true,
    sections: [
      {
        heading: 'Processing Estimates',
        body: PH('[PROCESSING-TIME PLACEHOLDER — Orders are processed within [INSERT PROCESSING TIME] business days. Insert the confirmed processing time.]'),
      },
      {
        heading: 'Shipping Estimates',
        body: PH('[SHIPPING-TIME PLACEHOLDER — Shipping typically takes [INSERT SHIPPING TIME] business days after processing. Insert the confirmed shipping time.]'),
      },
      {
        heading: 'Carrier Delays',
        body: 'Shipping estimates do not guarantee delivery dates. Carrier delays may occur and are beyond our control.',
      },
      {
        heading: 'Address Accuracy',
        body: 'You are responsible for providing an accurate shipping address. We are not responsible for packages delivered to an incorrect address you provided.',
      },
      {
        heading: 'Tracking',
        body: 'Tracking information is provided when available. Not all shipments include tracking.',
      },
      {
        heading: 'Lost Packages',
        body: 'If a package is lost in transit, contact us. We will work with the carrier to resolve the issue. [INSERT CONFIRMED LOST-PACKAGE POLICY.]',
      },
      {
        heading: 'Damaged or Incorrect Products',
        body: 'If you receive a damaged or incorrect product, contact us within [INSERT TIMEFRAME] of delivery for a replacement or refund.',
      },
      {
        heading: 'International Shipping',
        body: PH('[INTERNATIONAL-SHIPPING PLACEHOLDER — We [do/do not] ship internationally. Insert the confirmed international shipping status.]'),
      },
      {
        heading: 'Temperature-Sensitive Items',
        body: 'Temperature-sensitive items may require expedited shipping. [INSERT CONFIRMED TEMPERATURE-SHIPPING POLICY.]',
      },
      {
        heading: 'Prescription Fulfillment',
        body: 'Prescription fulfillment and shipping are handled by the responsible pharmacy partner. Pharmacy shipping is subject to the pharmacy\'s policies and applicable law.',
      },
      {
        heading: 'Separate Pharmacy Shipping',
        body: 'Prescription products are shipped separately from retail products and may arrive at different times.',
      },
      {
        heading: 'Split Shipments',
        body: 'Orders containing multiple items may be shipped in separate packages.',
      },
      {
        heading: 'Products Shipped by The Bare Method',
        body: 'Retail products sold directly by The Bare Method are shipped from our location or a fulfillment partner.',
      },
      {
        heading: 'Products Shipped by an Affiliate',
        body: 'Some products may be fulfilled by an affiliate or third-party seller. The responsible seller will be identified at checkout.',
      },
      {
        heading: 'Products Shipped by a Pharmacy',
        body: 'Prescription products are shipped by the responsible pharmacy, not by The Bare Method.',
      },
      {
        heading: 'Taxes and Shipping Fees',
        body: 'Applicable taxes and shipping fees are calculated at checkout. Shipping fees are nonrefundable except for errors.',
      },
      {
        heading: 'Contact',
        body: `For shipping questions, contact ${les.customerServiceEmail}.`,
      },
    ],
  },

  // 11. SUPPLEMENT AND WELLNESS PRODUCT DISCLAIMER
  {
    slug: 'supplement-disclaimer',
    title: 'Supplement and Wellness Product Disclaimer',
    category: 'commerce',
    lastUpdated: PH(les.lastUpdatedDate),
    draft: true,
    sections: [
      {
        heading: 'Supplements Are Not a Substitute for Medical Care',
        body: 'Supplements and wellness products are not substitutes for professional medical care, evaluation, or treatment.',
      },
      {
        heading: 'Product Information Is Educational',
        body: 'Product information on this website is provided for educational purposes only and is not medical advice.',
      },
      {
        heading: 'Consult a Healthcare Professional',
        body: 'Consult an appropriately licensed healthcare professional before starting any new supplement, especially if you have a medical condition, are pregnant or nursing, or take medication.',
      },
      {
        heading: 'Individual Responses Vary',
        body: 'Individual responses to supplements and wellness products vary. No specific result is guaranteed.',
      },
      {
        heading: 'Review Ingredients and Allergens',
        body: 'Review product ingredients and allergen information before use. Discontinue use and consult a healthcare professional if you experience any adverse reaction.',
      },
      {
        heading: 'Pregnancy, Nursing, and Health Conditions',
        body: 'Pregnancy, nursing, medications, and existing health conditions require professional guidance before using any supplement.',
      },
      {
        heading: 'Product Statements',
        body: 'Product statements must not exceed supported claims. The Bare Method does not state that any supplement diagnoses, treats, cures, or prevents any disease unless the claim is legally permitted and properly supported.',
      },
      {
        heading: 'Third-Party Manufacturer Claims',
        body: 'Third-party manufacturer claims remain the manufacturer\'s responsibility. The Bare Method does not repeat misleading manufacturer claims.',
      },
      {
        heading: 'No FDA-Approved Statements',
        body: 'Supplements are not reviewed or approved by the FDA for safety, effectiveness, or manufacturing quality in the same way as prescription drugs. Do not assume FDA approval unless expressly stated.',
      },
      {
        heading: 'Admin-Inserted Disclaimers',
        body: 'Administrators may insert legally reviewed supplement disclaimers for specific products through the product management settings.',
      },
    ],
  },

  // 12. AFFILIATE, REFERRAL AND ADVERTISING DISCLOSURE
  {
    slug: 'affiliate-disclosure',
    title: 'Affiliate, Referral and Advertising Disclosure',
    category: 'disclosures',
    lastUpdated: PH(les.lastUpdatedDate),
    draft: true,
    sections: [
      {
        heading: 'General Disclosure',
        body: 'The Bare Method may receive commissions, referral fees, revenue shares, free products, discounted products, sponsorship compensation, or other compensation when you use certain links or purchase certain products or services. Compensation does not change your investment unless specifically disclosed.',
      },
      {
        heading: 'Types of Relationships',
        body: 'The Bare Method may participate in affiliate links and may partner with providers, pharmacies, laboratories, software platforms, educators, and other service partners. We may refer customers to third-party services.',
      },
      {
        heading: 'Disclosure Placement',
        body: 'Disclosure is provided near the relevant recommendation, link, or product — not only in the footer. Reusable labels include: "Affiliate link," "Paid partnership," "Sponsored," "We may earn a commission," "Referral relationship," "Clinical service provided by an independent medical partner," "Fulfilled by an independent pharmacy," and "Laboratory service provided by a third party."',
      },
      {
        heading: 'Compensation and Price',
        body: 'Compensation does not change your investment unless specifically disclosed. We do not state that compensation never affects selection unless that is verified.',
      },
      {
        heading: 'Genuine Endorsements',
        body: 'Endorsements and testimonials must reflect genuine experiences. We do not permit affiliates or influencers to make claims that The Bare Method itself could not legally make.',
      },
      {
        heading: 'Affiliate Standards',
        body: 'Affiliates and partners are prohibited from: guaranteed medical outcomes, guaranteed prescriptions, disease-treatment claims without support, before-and-after manipulation, fake reviews, undisclosed compensation, false scarcity, misleading pricing, claims that compounded medication is FDA approved, claims that membership is health insurance, and claims that a product is risk-free.',
      },
      {
        heading: 'Our Service Partners',
        body: 'The Bare Method may work with independent medical practices, licensed healthcare professionals, pharmacies, laboratories, technology platforms, payment processors, educators and other service partners. The entity responsible for a particular service will be identified during the applicable booking, intake, checkout or consent process. We do not suggest that The Bare Method owns or controls an independent pharmacy, medical practice, laboratory or provider unless factually verified. Affiliated or contracted businesses may operate independently and may maintain their own licenses, professionals, records, privacy notices, clinical responsibilities, refund policies, payment relationships, and terms of service.',
      },
    ],
  },

  // 13. REVIEWS, TESTIMONIALS AND RESULTS DISCLAIMER
  {
    slug: 'testimonials-disclaimer',
    title: 'Reviews, Testimonials and Results Disclaimer',
    category: 'disclosures',
    lastUpdated: PH(les.lastUpdatedDate),
    draft: true,
    sections: [
      {
        heading: 'Individual Experiences',
        body: 'Testimonials and reviews reflect individual experiences. Results vary. Testimonials are not guarantees that another person will receive the same result.',
      },
      {
        heading: 'Material Connections',
        body: 'Material connections between the reviewer and The Bare Method must be disclosed. Free or discounted services must be disclosed.',
      },
      {
        heading: 'Images and Consent',
        body: 'Images require consent. Images must not be materially altered in a misleading way. Timeframes must be accurate.',
      },
      {
        heading: 'Typicality',
        body: 'Typicality must not be implied without support. Incentivized reviews must be labeled where required.',
      },
      {
        heading: 'Display Notice',
        body: 'The following notice is displayed near testimonial sections: "Individual experiences and results vary. Testimonials do not guarantee that another person will receive the same result." For paid or complimentary experiences: "This client received a complimentary or discounted service."',
      },
    ],
  },

  // 14. SMS AND ELECTRONIC COMMUNICATIONS TERMS
  {
    slug: 'sms-terms',
    title: 'SMS and Electronic Communications Terms',
    category: 'disclosures',
    lastUpdated: PH(les.lastUpdatedDate),
    draft: true,
    sections: [
      {
        heading: 'Consent to Receive Texts',
        body: 'By providing your phone number and checking the applicable consent box, you agree to receive SMS messages from The Bare Method. Consent is not required as a condition of purchase where applicable.',
      },
      {
        heading: 'Message Frequency',
        body: 'Message frequency varies. You may receive administrative, appointment-reminder, membership, and (if you opt in) marketing messages.',
      },
      {
        heading: 'Message and Data Rates',
        body: 'Message and data rates may apply. Contact your carrier for details.',
      },
      {
        heading: 'STOP Instructions',
        body: 'Reply STOP to any message to opt out of SMS messages.',
      },
      {
        heading: 'HELP Instructions',
        body: 'Reply HELP to any message for assistance.',
      },
      {
        heading: 'Administrative vs. Marketing Messages',
        body: 'Administrative messages (appointment reminders, payment notifications, membership notifications) may be sent without marketing consent. Marketing messages require separate opt-in.',
      },
      {
        heading: 'Separate Consent Checkboxes',
        body: 'Separate consent checkboxes are provided for administrative texts and marketing texts. Marketing consent is not bundled into general website acceptance.',
      },
      {
        heading: 'Privacy',
        body: 'SMS communications are subject to the Website Privacy Policy. Medical information is not sent via SMS.',
      },
      {
        heading: 'Carrier Responsibility',
        body: 'Carriers are not responsible for delayed or undelivered messages.',
      },
      {
        heading: 'Telephone-Number Accuracy',
        body: 'You are responsible for providing an accurate phone number.',
      },
      {
        heading: 'Withdrawal of Consent',
        body: 'You may withdraw consent at any time by replying STOP or contacting us.',
      },
    ],
  },

  // 15. COOKIE AND TRACKING TECHNOLOGIES NOTICE
  {
    slug: 'cookie-notice',
    title: 'Cookie and Tracking Technologies Notice',
    category: 'disclosures',
    lastUpdated: PH(les.lastUpdatedDate),
    draft: true,
    sections: [
      {
        heading: 'Categories of Cookies',
        body: 'We use the following categories: Strictly necessary (required for website function), Functional (enable features), Analytics (understand usage), Advertising (deliver relevant ads where enabled), and Affiliate attribution (track referrals).',
      },
      {
        heading: 'Preference Controls',
        body: 'You may accept all, reject nonessential, or customize preferences through the Cookie Preference Center. Nonessential analytics or advertising trackers are not loaded until the applicable preference is obtained where required.',
      },
      {
        heading: 'Technical Safeguard — Clinical Pages',
        body: 'Advertising pixels, session replay, analytics tools, and third-party trackers are not placed on Legend patient-portal pages, medical intake pages, telehealth pages, clinical messaging pages, medical-record pages, or any pages containing sensitive health information.',
      },
      {
        heading: 'No Health Data in Advertising',
        body: 'Health-related form entries, medical selections, diagnoses, symptoms, treatment information, and patient identifiers are not transmitted to advertising platforms.',
      },
      {
        heading: 'Neutral Analytics Event Names',
        body: 'Analytics events use neutral names such as: wellness_page_view, consultation_button_click, secure_portal_redirect, and general_form_complete. Event names do not include medical conditions or medications. Event parameters do not include the selected medical condition or medication.',
      },
    ],
  },

  // 16. ACCESSIBILITY STATEMENT
  {
    slug: 'accessibility-statement',
    title: 'Accessibility Statement',
    category: 'legal',
    lastUpdated: PH(les.lastUpdatedDate),
    draft: true,
    sections: [
      {
        heading: 'Our Commitment',
        body: 'The Bare Method is committed to making our website accessible to everyone, including individuals with disabilities. We strive to follow recognized accessibility guidelines.',
      },
      {
        heading: 'Ongoing Improvement',
        body: 'Accessibility is an ongoing effort. We continuously work to improve the website\'s accessibility features.',
      },
      {
        heading: 'Features',
        body: 'We aim to provide keyboard navigation, visible focus states, alt text for images, form labels, error descriptions, appropriate color contrast, scalable text, accessible modal behavior, and accessible checkout and policy navigation.',
      },
      {
        heading: 'Contact for Accessibility Assistance',
        body: `If you experience difficulty accessing any part of our website, need alternate booking support, or have feedback, contact us at ${les.customerServiceEmail} or ${les.customerServicePhone}.`,
      },
      {
        heading: 'No Guarantee of Perfect Accessibility',
        body: 'While we strive for accessibility, we do not guarantee that the website will be perfectly accessible to all individuals in all situations.',
      },
      {
        heading: 'Date Reviewed',
        body: PH(`[DATE REVIEWED PLACEHOLDER — Insert the confirmed date this statement was last reviewed.]`),
      },
    ],
  },

  // 17. EDUCATION AND COURSE TERMS
  {
    slug: 'education-terms',
    title: 'Education and Course Terms',
    category: 'commerce',
    lastUpdated: PH(les.lastUpdatedDate),
    draft: true,
    sections: [
      {
        heading: 'Course Eligibility',
        body: 'Course eligibility requirements are described on each course page. Some courses may have prerequisites.',
      },
      {
        heading: 'Registration and Reservation Fees',
        body: PH('[COURSE RESERVATION FEE PLACEHOLDER — Course reservation fees are [INSERT: refundable/nonrefundable] and applied to registration. Insert the confirmed reservation fee terms.]'),
      },
      {
        heading: 'Payment Plans',
        body: PH('[PAYMENT-PLAN PLACEHOLDER — Payment plans, if available, are described on the course page. Insert the confirmed payment-plan terms.]'),
      },
      {
        heading: 'Attendance',
        body: 'Students are expected to attend all scheduled sessions. [INSERT ATTENDANCE POLICY.]',
      },
      {
        heading: 'Rescheduling and Cancellation',
        body: PH('[COURSE-CANCELLATION PLACEHOLDER — Student cancellations, transfers, and rescheduling are subject to [INSERT CONFIRMED POLICY]. Instructor cancellations may result in rescheduling or refund. Insert the confirmed terms.]'),
      },
      {
        heading: 'Intellectual Property',
        body: 'Course materials are owned by The Bare Method and are for the student\'s personal use. Reproduction or distribution without permission is prohibited.',
      },
      {
        heading: 'Recording Restrictions',
        body: 'Recording of courses may be prohibited unless authorized. [INSERT RECORDING POLICY.]',
      },
      {
        heading: 'Student Conduct',
        body: 'Students are expected to conduct themselves professionally. Disruptive behavior may result in removal without refund.',
      },
      {
        heading: 'Models and Supplies',
        body: PH('[MODELS-AND-SUPPLIES PLACEHOLDER — Model requirements and supply costs are described on each course page. Insert the confirmed terms.]'),
      },
      {
        heading: 'Certificates',
        body: 'Certificates of completion, if offered, indicate completion only and do not constitute a license or certification to practice.',
      },
      {
        heading: 'Licensing and Scope-of-Practice Disclaimer',
        body: 'Courses do not guarantee licensure, certification, or income. Students are responsible for understanding and complying with the scope-of-practice laws applicable to their profession and jurisdiction.',
      },
      {
        heading: 'Digital Access',
        body: 'Digital course access is granted for the stated access period. [INSERT DIGITAL ACCESS PERIOD.]',
      },
      {
        heading: 'No-Show Students',
        body: 'Students who do not attend without notice may forfeit reservation fees and charges. [INSERT NO-SHOW POLICY.]',
      },
      {
        heading: 'Travel Expenses',
        body: 'Travel expenses for in-person courses are the student\'s responsibility unless stated otherwise.',
      },
      {
        heading: 'Force Majeure',
        body: 'The Bare Method is not liable for delays or cancellations caused by events beyond our control, including natural disasters, public-health emergencies, or government actions.',
      },
    ],
  },

  // 18. GIFT CARD AND PROMOTIONAL CREDIT TERMS
  {
    slug: 'gift-card-terms',
    title: 'Gift Card and Promotional Credit Terms',
    category: 'commerce',
    lastUpdated: PH(les.lastUpdatedDate),
    draft: true,
    sections: [
      {
        heading: 'Paid Gift Cards',
        body: 'Paid gift cards are purchased with money and tracked as a balance. They have no cash redemption value except where required by law. Lost cards may be replaced subject to verification. Paid gift cards are nontransferable. Gift cards may not be usable for prescription products unless approved.',
      },
      {
        heading: 'Promotional Credits',
        body: 'Promotional credits are complimentary, have no cash value, may have an expiration when properly disclosed and permitted, are limited to eligible services, and cannot be combined with other offers unless stated. Promotional credits are not the same as paid gift cards.',
      },
      {
        heading: 'Service-Price Changes',
        body: 'Gift card and credit values are applied to the service price at the time of redemption. If service prices change, the gift card or credit value does not change.',
      },
      {
        heading: 'Fraud Prevention',
        body: 'We reserve the right to void gift cards or credits obtained through fraud or unauthorized means.',
      },
    ],
  },

  // 19. PAYMENT AUTHORIZATION TERMS
  {
    slug: 'payment-authorization-terms',
    title: 'Payment Authorization Terms',
    category: 'commerce',
    lastUpdated: PH(les.lastUpdatedDate),
    draft: true,
    sections: [
      {
        heading: 'Price Authorization',
        body: 'By completing a purchase, you authorize us to charge the displayed price, applicable taxes, and shipping fees to your payment method.',
      },
      {
        heading: 'Recurring Charges',
        body: 'For memberships, you authorize recurring charges at the displayed price and frequency until you cancel according to the Membership Terms. Separate recurring-payment consent is required and is not pre-checked.',
      },
      {
        heading: 'Stored Payment Method',
        body: 'When applicable, your payment method may be stored tokenized with the payment processor. Complete card information is not stored on this website.',
      },
      {
        heading: 'Third-Party Processor',
        body: PH(`Payments are processed by ${les.paymentProcessor}. The processor handles card data according to its own security standards.`),
      },
      {
        heading: 'Payment Failure and Retry',
        body: 'If a payment fails, we may retry the charge. [INSERT CONFIRMED RETRY POLICY.]',
      },
      {
        heading: 'Charge Disputes',
        body: 'If you believe a charge is incorrect, contact us before disputing with your bank. [INSERT DISPUTE POLICY.]',
      },
      {
        heading: 'Refund Policy',
        body: 'Refunds are handled according to the Refund, Cancellation and Credit Policy.',
      },
      {
        heading: 'Fraud Review',
        body: 'We may review or decline transactions that appear fraudulent.',
      },
      {
        heading: 'Pricing Errors',
        body: 'Pricing errors will be corrected. You will be notified before an incorrect amount is charged and may decline the corrected price.',
      },
      {
        heading: 'Currency',
        body: 'All prices are in U.S. dollars.',
      },
      {
        heading: 'Confirmation Receipts',
        body: 'You will receive a confirmation receipt after each transaction.',
      },
    ],
  },

  // 20. COPYRIGHT, TRADEMARK AND ACCEPTABLE USE POLICY
  {
    slug: 'copyright-trademark-acceptable-use',
    title: 'Copyright, Trademark and Acceptable Use Policy',
    category: 'legal',
    lastUpdated: PH(les.lastUpdatedDate),
    draft: true,
    sections: [
      {
        heading: 'Copyright',
        body: `All website content is owned by or licensed to ${les.bareMethodLegalEntityName} and is protected by U.S. and international copyright laws.`,
      },
      {
        heading: 'Trademarks',
        body: '"The Bare Method" and related marks are trademarks of The Bare Method. Unauthorized use is prohibited.',
      },
      {
        heading: 'Acceptable Use',
        body: 'You may not copy, reproduce, distribute, or create derivative works from website content without prior written permission. You may not use The Bare Method trademarks without authorization.',
      },
      {
        heading: 'Prohibited Uses',
        body: 'Prohibited uses include: impersonating The Bare Method, creating misleading domain names, bidding on protected brand terms (for affiliates), scraping content, and using the website for unlawful purposes.',
      },
      {
        heading: 'Reporting Infringement',
        body: `To report copyright or trademark infringement, contact ${les.legalNoticeEmail}.`,
      },
      {
        heading: 'Repeat Infringer Policy',
        body: 'We may terminate access for repeat infringers in appropriate circumstances.',
      },
    ],
  },
];

export const footerDisclaimer =
  'The Bare Method offers Esthetics, Wellness-support, and provider-directed IV Therapy services. Medical evaluations, clinical care, prescriptions, and IV Therapy orders are provided by appropriately licensed medical professionals through the responsible healthcare entity. IV Therapy is administered by qualified clinical personnel, including a Registered Nurse, according to provider orders and applicable protocols. Treatment, prescriptions, eligibility, and results are not guaranteed. Medical information must be submitted through the designated secure patient portal. Individual results vary.';

export const testimonialsDisclaimer =
  'Individual experiences and results vary. Testimonials do not guarantee that another person will receive the same result.';

export const complimentaryDisclaimer =
  'This client received a complimentary or discounted service.';
