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
      'The Bare Method is a luxury esthetics studio in Apple Valley, Minnesota, specializing in head-to-toe skin treatments, intimate-area care, and body contouring. My Bare Method is the separate provider-guided wellness experience within the broader brand vision.',
  },
  {
    category: 'General',
    question: 'Where are you located?',
    answer:
      'We are located at 15115 Cedar Avenue, Suite 33, Apple Valley, MN 55124, serving Apple Valley, Lakeville, Rosemount, Burnsville, Eagan, and the greater South Minneapolis–Saint Paul metro.',
  },
  {
    category: 'General',
    question: 'How do I book an appointment?',
    answer:
      'Esthetic services are booked through Vagaro. My Bare Method wellness services are managed through the separate website at https://mybaremethod.com.',
  },
  {
    category: 'Esthetics',
    question: 'What makes The Bare Method different from a traditional spa?',
    answer:
      'The Bare Method is a results-driven esthetics and body sculpting experience designed to go beyond traditional spa services. We combine advanced skincare, EMS + RF body contouring, and personalized treatment planning to create a structured approach to transformation. Every visit builds on the last, so you see consistent, visible progress over time.',
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
      'All esthetic bookings, reservation fees, packages, memberships, and gift cards are handled through Vagaro. Use the "Book Esthetics via Vagaro" button on any esthetics page to go directly to our Vagaro booking page.',
  },
  {
    category: 'Esthetics',
    question: 'Do you require reservation fees for esthetic appointments?',
    answer:
      'Yes, a reservation fee may be required for certain services. Reservation fees are managed through Vagaro and applied to your service total.',
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
      'All My Bare Method wellness services are managed through https://mybaremethod.com. Visit that separate website to explore options and begin its customer journey.',
  },
  {
    category: 'Wellness',
    question: 'Where do My Bare Method wellness services take place?',
    answer:
      'My Bare Method wellness services take place through its separate website, team, policies, and customer journey. The Bare Method website does not provide or manage those services.',
  },
  {
    category: 'Wellness',
    question: 'How do I learn more about My Bare Method?',
    answer:
      'Visit https://mybaremethod.com for current information about the separate My Bare Method wellness experience.',
  },
  {
    category: 'Wellness',
    question: 'Does The Bare Method manage My Bare Method accounts?',
    answer:
      'No. My Bare Method manages its own accounts, customer information, policies, and support through https://mybaremethod.com.',
  },
  {
    category: 'Wellness',
    question: 'I already use My Bare Method. Where do I go for support?',
    answer:
      'Use the My Bare Method website and support channels for account access or wellness questions. The Bare Method esthetics team cannot manage those accounts.',
  },
  {
    category: 'Shop',
    question: 'What can I buy on the website?',
    answer:
      'The Bare Method website directs esthetic customers to Vagaro for applicable services, memberships, packages, and gift cards. My Bare Method manages its own separate wellness offerings.',
  },
  {
    category: 'Shop',
    question: 'Where do I shop for wellness offerings?',
    answer:
      'Wellness offerings belong on the separate My Bare Method website at https://mybaremethod.com. This website does not host wellness shopping or checkout.',
  },
  {
    category: 'Shop',
    question: 'Can I request an invoice instead of paying now?',
    answer:
      'For esthetic services, use the confirmed Vagaro booking and payment flow. My Bare Method handles its own separate customer and payment questions.',
  },
  {
    category: 'Memberships',
    question: 'What is the difference between esthetic and wellness memberships?',
    answer:
      'Esthetic memberships include treatment credits, member pricing, and priority booking through Vagaro. My Bare Method memberships, if offered, are managed separately at https://mybaremethod.com.',
  },
  {
    category: 'Memberships',
    question: 'Where are wellness memberships managed?',
    answer:
      'My Bare Method manages its own wellness memberships and customer terms through https://mybaremethod.com. The Bare Method website does not sell or administer them.',
  },
  {
    category: 'Memberships',
    question: 'Can I use my esthetic membership for My Bare Method?',
    answer:
      'No. The Bare Method esthetic memberships are handled through Vagaro and apply only to eligible esthetic services.',
  },
  {
    category: 'Memberships',
    question: 'Can I use wellness care without a membership?',
    answer:
      'Visit https://mybaremethod.com for My Bare Method availability and terms.',
  },
  {
    category: 'Memberships',
    question: 'Why is Bare Access only $49?',
    answer:
      'My Bare Method can provide current details about any wellness membership or access option on its separate website.',
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
    question: 'Can I use my esthetic benefits outside eligible esthetic services?',
    answer:
      'No. Esthetic benefits and credits apply only to eligible esthetic services.',
  },
  {
    category: 'Memberships',
    question: 'Are wellness memberships insurance?',
    answer:
      'My Bare Method publishes its own membership terms on its separate website. The Bare Method esthetic memberships are not insurance.',
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
