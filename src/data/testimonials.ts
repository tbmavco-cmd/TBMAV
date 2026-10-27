export type Testimonial = {
  name: string;
  location: string;
  text: string;
  service: string;
  rating: number;
  source: string;
};

export const testimonials: Testimonial[] = [
  {
    name: 'Kimberly E.',
    location: 'Google review · 5 stars',
    text: "I've received both waxing and body contouring services, and the results have been amazing… I'm 39 years old and have never looked better.",
    service: 'Waxing & Body Contouring',
    rating: 5,
    source: 'Google review',
  },
  {
    name: 'Nikki',
    location: 'Google review · 5 stars',
    text: 'I had microneedling done by her, and she did a fabulous job. She was so detailed and thorough, and she walked me through the whole process so I knew exactly what to expect.',
    service: 'Microneedling',
    rating: 5,
    source: 'Google review',
  },
  {
    name: 'Amera J.',
    location: 'Google review · 5 stars',
    text: 'I got a Brazilian wax from Rina and she is incredible! She was very thorough and quick… She provided me with great aftercare tips and was very nice.',
    service: 'Brazilian Wax',
    rating: 5,
    source: 'Google review',
  },
  {
    name: 'Stephanie E.',
    location: 'Google review · 5 stars',
    text: 'She is so knowledgeable about all things skin and you can tell she loves what she does. I trust her and my skin has never looked better.',
    service: 'Skin Treatments',
    rating: 5,
    source: 'Google review',
  },
  {
    name: 'A. A.',
    location: 'Google review · 5 stars',
    text: 'She made me feel comfortable from day one and customized treatments to fit my goals. My skin has never looked better, and I\'ve also had great results with the Contour body treatments.',
    service: 'Body Contouring',
    rating: 5,
    source: 'Google review',
  },
  {
    name: 'Lilian C.',
    location: 'Google review · 5 stars',
    text: 'A truly luxurious experience from start to finish… my face and body were left looking wonderful — radiant and completely renewed.',
    service: 'Face & Body',
    rating: 5,
    source: 'Google review',
  },
];

export type ResultItem = {
  id: string;
  category:
    | 'Head-to-Toe Skin'
    | 'Intimate Skin Care'
    | 'Waxing & Ingrown-Hair Care'
    | 'Body Contouring'
    | 'Microneedling'
    | 'Skin Rejuvenation';
  title: string;
  description: string;
  image?: string;
};

export const resultCategories = [
  'All',
  'Head-to-Toe Skin',
  'Intimate Skin Care',
  'Waxing & Ingrown-Hair Care',
  'Body Contouring',
  'Microneedling',
  'Skin Rejuvenation',
] as const;

export const results: ResultItem[] = [
  {
    "id": "r0",
    "category": "Microneedling",
    "title": "Microneedling series: acne scar texture",
    "description": "Individual results vary. Shared with client consent.",
    "image": "/images/results/result-microneedling-acne-scars.jpg"
  },
  {
    "id": "r1",
    "category": "Body Contouring",
    "title": "4-in-1 body contouring series: midsection",
    "description": "Individual results vary. Shared with client consent.",
    "image": "/images/results/result-body-contouring.jpg"
  },
  {
    "id": "r2",
    "category": "Skin Rejuvenation",
    "title": "One IPL photofacial session: tone & sun damage",
    "description": "Individual results vary. Shared with client consent.",
    "image": "/images/results/result-ipl-one-session.jpg"
  },
  {
    "id": "r3",
    "category": "Skin Rejuvenation",
    "title": "Ultimate Glow Up: texture & fine lines",
    "description": "Individual results vary. Shared with client consent.",
    "image": "/images/results/result-forehead-texture.jpg"
  }
];

export const resultsDisclaimer =
  'Individual results vary. Images are shown with client consent and are not a guarantee of a specific outcome.';

