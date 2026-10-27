export type Faq = {
  category: 'Esthetics' | 'Wellness' | 'Shop' | 'Memberships' | 'Education' | 'General';
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    category: 'General',
    question: 'What is The Bare Method?',
    answer:
      'The Bare Method is a luxury esthetics studio in Burnsville, Minnesota, specializing in head-to-toe skin treatments, intimate-area care, and body contouring. Provider-led wellness services (weight management, hormones, telehealth) are offered separately through My Bare Method (MyBareMethod.com) — a separate company with its own providers, policies, and patient portal.',
  },
  {
    category: 'General',
    question: 'Where are you located?',
    answer:
      'We are located at Salon Lofts Burnsville, 14109 Irving Ave S, Suite 6, Burnsville, MN 55337, serving Burnsville, Apple Valley, Lakeville, Rosemount, Eagan, and the greater South Minneapolis–Saint Paul metro.',
  },
  {
    category: 'General',
    question: 'How do I book an appointment?',
    answer:
      'Esthetic services (The Bare Method) are booked through Salon Lofts. Provider-led wellness services (My Bare Method) are managed through a separate platform at MyBareMethod.com.',
  },
  {
    category: 'Esthetics',
    question: 'What makes The Bare Method different from a traditional spa?',
    answer:
      'The Bare Method is a results-driven esthetics and body sculpting experience designed to go beyond traditional spa services. We combine advanced skincare, 4-in-1 body contouring, and personalized treatment planning to create a structured approach to transformation. Every visit builds on the last, so you see consistent, visible progress over time.',
  },
  {
    category: 'Esthetics',
    question: 'Will I see results from a single session?',
    answer:
      'While single sessions are available, The Bare Method is built around consistency. Most clients choose a package or membership because it allows us to follow a structured plan and deliver better, longer-lasting results. It also gives you more flexibility and value over time.',
  },
  {
    category: 'Esthetics',
    question: 'How does the credit-based membership system work?',
    answer:
      'Our memberships use a credit-based system so you are not locked into one service. Your monthly investment converts into treatment credits — and members receive more credit value than the dollar amount paid. You can use your credits toward different treatments based on what your skin and body need at each visit, allowing for a more personalized and flexible experience.',
  },
  {
    category: 'Esthetics',
    question: 'How often should I come in?',
    answer:
      'This depends on your goals, but most clients come every 4–6 weeks for skin treatments and more frequently for body sculpting series. During your first visit, we will create a personalized plan so you know exactly what to expect and how to get the best results.',
  },
  {
    category: 'Esthetics',
    question: 'How do I book an esthetic service?',
    answer:
      'All esthetic bookings are handled through Salon Lofts. Use the "Book Esthetics" button on any esthetics page to go directly to our Salon Lofts scheduling page.',
  },
  {
    category: 'Esthetics',
    question: 'Do you require reservation fees for esthetic appointments?',
    answer:
      'Yes, a reservation fee may be required for certain services. Reservation fees are managed through Salon Lofts and applied to your service total.',
  },
  {
    category: 'Esthetics',
    question: 'What is your cancellation policy for esthetic services?',
    answer:
      'We require at least 24 hours notice to reschedule or cancel an esthetic appointment. Reservation fees may be retained for late cancellations or no-shows. See our Esthetic Cancellation Policy for full details.',
  },
  {
    category: 'Wellness',
    question: 'How do I start a wellness program?',
    answer:
      'All provider-led wellness services are managed through My Bare Method at MyBareMethod.com. Visit MyBareMethod.com to explore programs, complete intake, and schedule a provider consultation.',
  },
  {
    category: 'Wellness',
    question: 'Will I definitely receive a prescription or medication?',
    answer:
      'No. Prescriptions are not guaranteed. Medical services and prescriptions require evaluation and approval by an appropriately licensed medical provider. Treatment and prescription eligibility are not guaranteed.',
  },
  {
    category: 'Wellness',
    question: 'Is telehealth available?',
    answer:
      'Yes, telehealth consultations are available. Availability may vary by state. Telehealth visits are conducted through our secure patient platform.',
  },
  {
    category: 'Wellness',
    question: 'Where is my medical information stored?',
    answer:
      'All medical intake, medical records, clinical messaging, and provider documentation are handled through our designated secure patient platform, not on this website. We do not collect detailed medical information through the public website.',
  },
  {
    category: 'Wellness',
    question: 'I am an existing patient. How do I access my portal?',
    answer:
      'Existing patients can use the "Existing Patient Login" button to access the secure patient portal for follow-ups, refill reviews, lab review, and provider messaging.',
  },
  {
    category: 'Shop',
    question: 'What can I buy on the website?',
    answer:
      'You can purchase professional skincare, supplements, gift cards, consultation fees, reservation fees, and education products directly. Medical wellness programs are added to your Wellness Plan and require provider review before treatment.',
  },
  {
    category: 'Shop',
    question: 'What is My Wellness Plan?',
    answer:
      'My Wellness Plan is a shopping-cart-style experience for medical wellness programs. You can browse programs, add them to your plan, and submit a request. Adding a program does not purchase medication.',
  },
  {
    category: 'Shop',
    question: 'Can I request an invoice instead of paying now?',
    answer:
      'Yes. For certain items, you can request an invoice. We will review your selection, adjust pricing if needed, and send a secure invoice link by email or text.',
  },
  {
    category: 'Memberships',
    question: 'What is the difference between esthetic and wellness memberships?',
    answer:
      'Esthetic memberships include treatment credits, member pricing, and priority booking. Wellness memberships include provider follow-ups, program support, and care coordination. Medication is not automatically included in wellness memberships.',
  },
  {
    category: 'Memberships',
    question: 'Does wellness membership include medication?',
    answer:
      'No. Prescription medication, compounded products, pharmacy fees, laboratory testing, and shipping are priced separately unless a specific offer expressly says otherwise.',
  },
  {
    category: 'Memberships',
    question: 'Does wellness membership guarantee a prescription?',
    answer:
      'No. A licensed medical provider determines whether any treatment or prescription is appropriate.',
  },
  {
    category: 'Memberships',
    question: 'Can I use wellness care without a membership?',
    answer:
      'Yes. Initial consultations, follow-ups, lab reviews, and selected wellness services are available à la carte.',
  },
  {
    category: 'Memberships',
    question: 'Why is Bare Access only $49?',
    answer:
      'Bare Access is designed as a low-cost care-coordination and member-pricing option. Clinical visits, medication, labs, and shipping are purchased separately as needed.',
  },
  {
    category: 'Memberships',
    question: 'Can I cancel my wellness membership?',
    answer:
      'Members may cancel according to the posted membership terms. Any notice period, prepaid-plan restrictions, and effective cancellation date are clearly displayed.',
  },
  {
    category: 'Memberships',
    question: 'Can I combine my membership savings with promotions?',
    answer:
      'Membership savings cannot be combined with other promotions unless specifically stated.',
  },
  {
    category: 'Memberships',
    question: 'Can I use my esthetic benefits on medication or labs?',
    answer:
      'No. Esthetic benefits and credits apply only to eligible esthetic services.',
  },
  {
    category: 'Memberships',
    question: 'Are wellness memberships insurance?',
    answer:
      'No. Memberships are cash-pay wellness support programs and are not health insurance.',
  },
  {
    category: 'Education',
    question: 'Who can enroll in education courses?',
    answer:
      'Courses are designed for licensed esthetics professionals and students. A reservation fee secures your seat and is applied to course registration.',
  },
  {
    category: 'Education',
    question: 'What if a course is full?',
    answer:
      'You can join the waitlist and will be contacted when a seat becomes available.',
  },
];

