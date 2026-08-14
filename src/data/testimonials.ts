export type Testimonial = {
  name: string;
  location: string;
  text: string;
  service: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    name: 'Jessica M.',
    location: 'Apple Valley, MN',
    text: 'My skin has never looked better. The custom facial was tailored exactly to my concerns, and the aftercare guidance made a real difference in my routine.',
    service: 'Advanced Custom Facial',
    rating: 5,
  },
  {
    name: 'Ashley R.',
    location: 'Lakeville, MN',
    text: 'The Brazilian wax was the most comfortable I have ever had. Professional, quick, and I felt completely at ease the entire time.',
    service: 'Brazilian Waxing',
    rating: 5,
  },
  {
    name: 'Taylor K.',
    location: 'Burnsville, MN',
    text: 'I came in for body contouring and left feeling more confident than I have in years. The space is beautiful and the care is personal.',
    service: 'Body Contouring',
    rating: 5,
  },
  {
    name: 'Megan L.',
    location: 'Eagan, MN',
    text: 'The microneedling series transformed my skin texture. My acne scars are visibly softer and my overall glow is unreal.',
    service: 'Microneedling',
    rating: 5,
  },
  {
    name: 'Nicole B.',
    location: 'Rosemount, MN',
    text: 'The wellness consultation was thorough and genuinely personalized. I finally feel like I have a plan that makes sense for my body.',
    service: 'Weight Management',
    rating: 5,
  },
  {
    name: 'Danielle S.',
    location: 'Apple Valley, MN',
    text: 'Rina is an incredible educator. I left the speed waxing workshop with real, usable technique and so much more confidence.',
    service: 'Speed Waxing Mastery',
    rating: 5,
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
    id: 'r1',
    category: 'Head-to-Toe Skin',
    title: 'Head-to-Toe Skin — Texture & Tone Series',
    description: 'Improved tone, clarity, and hydration across the skin over a personalized series.',
    image: '/images/ChatGPT_Image_Jul_25,_2026,_11_37_20_PM copy.png',
  },
  {
    id: 'r2',
    category: 'Microneedling',
    title: 'Microneedling — Acne Scar Softening',
    description: 'Visible improvement in acne scar texture after a four-session microneedling series.',
    image: '/images/ChatGPT_Image_Jul_26,_2026,_12_12_24_AM.png',
  },
  {
    id: 'r3',
    category: 'Body Contouring',
    title: 'Body Contouring — Midsection Refinement',
    description: 'Refined midsection appearance after a personalized body contouring series.',
    image: '/images/ChatGPT_Image_Jul_26,_2026,_12_05_44_AM.png',
  },
  {
    id: 'r4',
    category: 'Waxing & Ingrown-Hair Care',
    title: 'Brazilian Waxing — Smooth, Confident Results',
    description: 'Consistent, comfortable Brazilian waxing with finer regrowth over time.',
    image: '/images/ChatGPT_Image_Jul_25,_2026,_11_57_04_PM.png',
  },
  {
    id: 'r5',
    category: 'Skin Rejuvenation',
    title: 'Skin Rejuvenation — Instant Glow',
    description: 'Immediate smoothness and radiance after a single rejuvenation session.',
    image: '/images/ChatGPT_Image_Jul_26,_2026,_12_03_06_AM.png',
  },
  {
    id: 'r6',
    category: 'Skin Rejuvenation',
    title: 'Full Rejuvenation Journey — Skin & Body',
    description: 'A combined rejuvenation, microneedling, and body treatment journey for comprehensive renewal.',
    image: '/images/ChatGPT_Image_Jul_26,_2026,_12_08_48_AM.png',
  },
  {
    id: 'r7',
    category: 'Microneedling',
    title: 'Microneedling — Fine Line Softening',
    description: 'Softer appearance of fine lines after a microneedling series.',
    image: '/images/ChatGPT_Image_Jul_25,_2026,_11_41_13_PM copy.png',
  },
  {
    id: 'r8',
    category: 'Body Contouring',
    title: 'EMS & RF — Tone and Firmness',
    description: 'Improved muscle tone and skin firmness after a combined EMS and radiofrequency series.',
    image: '/images/ChatGPT_Image_Jul_26,_2026,_12_21_27_AM.png',
  },
  {
    id: 'r9',
    category: 'Intimate Skin Care',
    title: 'Vajacial — Calm, Bright, Confident',
    description: 'Reduced irritation and brighter intimate skin after a vajacial series.',
    image: '/images/ChatGPT_Image_Jul_26,_2026,_12_20_21_AM.png',
  },
];

export const resultsDisclaimer =
  'Individual results vary. Images are shown with client consent and are not a guarantee of a specific outcome.';
