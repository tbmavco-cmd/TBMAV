import type { LucideIcon } from 'lucide-react';
import { Shield, Flower2, Waves, Sun, Sparkles, Droplet } from 'lucide-react';

export type ServiceDetail = {
  bestFor: string;
  benefits: string[];
  treatmentTime: string;
  downtime: string;
  recommendedSeries: string;
  faq: { q: string; a: string }[];
  membershipCredits: boolean;
};

export type EstheticFocus = {
  slug: string;
  name: string;
  eyebrow: string;
  description: string;
  concerns: string[];
  techniques: string[];
  idealFor: string;
  icon: LucideIcon;
  details: ServiceDetail;
};

export const estheticFocusAreas: EstheticFocus[] = [
  {
    slug: 'head-to-toe-skin-hidden-insecurities',
    name: 'Head-to-Toe Skin & Hidden Insecurities',
    eyebrow: 'Head-to-Toe Skin Confidence',
    description:
      'Care for the skin concerns that are often hidden, overlooked, or difficult to talk about. From texture and discoloration to scarring and crepey-looking skin, every session is private, respectful, and built around your comfort.',
    concerns: [
      'Uneven texture and roughness',
      'Loose or crepey-looking skin',
      'Stretch marks',
      'Discoloration and uneven tone',
      'Ingrown hairs and bumps',
      'Body acne and breakouts',
      'Scarring',
      'Under-butt and inner-thigh concerns',
      'Back, chest, abdomen, and other body-area skin concerns',
    ],
    techniques: [
      'Customized exfoliation and resurfacing',
      'Hydrating and smoothing body treatments',
      'Brightening support for uneven tone',
      'Targeted care for ingrowns and bumps',
      'Skin-firming support',
    ],
    idealFor:
      'Clients who feel self-conscious about skin concerns anywhere on the body and want a safe, judgment-free space to address them.',
    icon: Shield,
    details: {
      bestFor: 'Clients looking to improve texture, tone, and confidence in areas they typically keep hidden.',
      benefits: [
        'Smoother, more even skin texture',
        'Reduced appearance of discoloration',
        'Improved skin clarity and radiance',
        'Boosted body confidence',
      ],
      treatmentTime: '60–90 minutes',
      downtime: 'Minimal — mild redness for 24–48 hours',
      recommendedSeries: '4–6 sessions, spaced 2–4 weeks apart',
      faq: [
        { q: 'Is it painful?', a: 'Most clients describe it as mildly warm or tingly. Comfort is always prioritized.' },
        { q: 'When will I see results?', a: 'Many notice improvement after 2–3 sessions, with cumulative results over the full series.' },
      ],
      membershipCredits: true,
    },
  },
  {
    slug: 'intimate-waxing-skin-care',
    name: 'Intimate Waxing & Skin Care',
    eyebrow: 'Intimate-Area Confidence',
    description:
      'The Bare Method specializes in intimate-area waxing and skin care, performed with care, professionalism, and respect. From Brazilian waxing to ingrown prevention and brightening support, every service is tailored to your comfort and goals.',
    concerns: [
      'Unwanted hair removal',
      'Ingrown hairs and bumps',
      'Intimate-area discoloration',
      'Texture and bump concerns',
      'Post-wax irritation',
    ],
    techniques: [
      'Professional Brazilian and intimate-area waxing',
      'Ingrown-hair prevention',
      'Vajacial-style intimate-area skin care',
      'Brightening support for intimate skin',
      'Aftercare and maintenance guidance',
    ],
    idealFor:
      'Clients seeking professional, inclusive intimate-area care in a tasteful, confidence-focused setting.',
    icon: Flower2,
    details: {
      bestFor: 'Clients who want professional intimate-area grooming and skin care in a private, respectful environment.',
      benefits: [
        'Smooth, bump-free skin',
        'Reduced ingrown hairs',
        'Improved skin tone and texture',
        'Long-lasting hair removal results',
      ],
      treatmentTime: '30–60 minutes',
      downtime: 'None — resume normal activities immediately',
      recommendedSeries: 'Every 4–6 weeks for consistent results',
      faq: [
        { q: 'Is Brazilian waxing painful?', a: 'Discomfort is brief and lessens significantly with regular appointments as hair grows finer.' },
        { q: 'How should I prepare?', a: 'Hair should be about ¼ inch long. Exfoliate gently 24 hours before, and avoid sun exposure.' },
      ],
      membershipCredits: true,
    },
  },
  {
    slug: 'ipl-photofacials',
    name: 'IPL Photofacials',
    eyebrow: 'Light-Based Skin Renewal',
    description:
      'Intense Pulsed Light (IPL) photofacials target sun spots, redness, and uneven tone for a clearer, more even-looking complexion. A personalized series is recommended for best results.',
    concerns: [
      'Sun spots and sun damage',
      'Redness and rosacea-like flushing',
      'Uneven skin tone',
      'Broken capillaries on the face',
      'Freckling and pigmentation',
    ],
    techniques: [
      'IPL (intense pulsed light) photofacial',
      'Personalized treatment planning',
      'Series-based protocols',
      'Post-treatment skin care guidance',
    ],
    idealFor:
      'Clients looking to brighten sun damage, redness, and uneven tone with a light-based series.',
    icon: Sun,
    details: {
      bestFor: 'Clients with sun spots, redness, or uneven tone who want a light-based renewal series.',
      benefits: [
        'Brightened sun spots and pigmentation',
        'Reduced visible redness',
        'More even, radiant complexion',
        'Improved overall skin clarity',
      ],
      treatmentTime: '30–45 minutes',
      downtime: 'Minimal — mild redness and darkening of spots for a few days',
      recommendedSeries: '3–5 sessions, spaced 3–4 weeks apart',
      faq: [
        { q: 'Is IPL safe for my skin?', a: 'IPL is most effective on lighter skin tones. A consultation will determine if IPL is the right fit for you.' },
        { q: 'When will I see results?', a: 'Sun spots typically darken and flake off within 1–2 weeks; cumulative results appear over the series.' },
      ],
      membershipCredits: true,
    },
  },
  {
    slug: 'shr-light-pulse-hair-reduction',
    name: 'SHR Light-Pulse Hair Reduction',
    eyebrow: 'Gentle Hair Reduction',
    description:
      'SHR light-pulse hair reduction is a gentle, in-motion approach to long-term hair reduction for face and body. Sold as a personalized series for lasting smoothness.',
    concerns: [
      'Unwanted facial hair',
      'Unwanted body hair',
      'Ingrown hairs from shaving',
      'Stubble and frequent maintenance',
    ],
    techniques: [
      'SHR light-pulse hair reduction',
      'In-motion gliding technique',
      'Personalized series planning',
      'Aftercare and maintenance guidance',
    ],
    idealFor:
      'Clients seeking gentle, long-term hair reduction for face and body without the discomfort of traditional methods.',
    icon: Sparkles,
    details: {
      bestFor: 'Clients who want lasting hair reduction with a gentle, in-motion light-pulse approach.',
      benefits: [
        'Long-term hair reduction',
        'Gentle, in-motion treatment',
        'Reduced ingrown hairs',
        'Smoother skin over a series',
      ],
      treatmentTime: '30–60 minutes depending on area',
      downtime: 'Minimal — mild warmth and pinkness for a few hours',
      recommendedSeries: '6–8 sessions, spaced 4–6 weeks apart',
      faq: [
        { q: 'What is SHR light-pulse hair reduction?', a: 'SHR is a light-pulse hair reduction method that uses a gentler, in-motion technique. We always call it SHR light-pulse hair reduction.' },
        { q: 'Does it hurt?', a: 'Most clients find SHR more comfortable than traditional methods, describing it as a warm sensation.' },
      ],
      membershipCredits: true,
    },
  },
  {
    slug: 'ipl-spider-vein-treatment',
    name: 'IPL Spider Vein Treatment',
    eyebrow: 'Spider Vein Clearing',
    description:
      'IPL spider vein treatment targets visible spider veins on the face and body using light-based technology. Sold as a multi-session series for progressive clearing.',
    concerns: [
      'Visible spider veins on face',
      'Spider veins on legs',
      'Broken capillaries',
      'Diffuse redness from small vessels',
    ],
    techniques: [
      'IPL (intense pulsed light) vein targeting',
      'Personalized series planning',
      'Progressive clearing protocols',
      'Post-treatment care guidance',
    ],
    idealFor:
      'Clients with visible spider veins looking for a non-invasive, light-based clearing series.',
    icon: Droplet,
    details: {
      bestFor: 'Clients with small, visible spider veins who want a light-based clearing option.',
      benefits: [
        'Reduced appearance of spider veins',
        'Clearer, more even skin tone',
        'Non-invasive, light-based approach',
        'Progressive results over a series',
      ],
      treatmentTime: '20–40 minutes depending on area',
      downtime: 'Minimal — mild redness for 24–48 hours',
      recommendedSeries: '2–4 sessions, spaced 4–6 weeks apart',
      faq: [
        { q: 'Will the veins disappear completely?', a: 'Many veins fade significantly over a series; individual results vary and new vessels can develop over time.' },
        { q: 'Is it uncomfortable?', a: 'Most describe a quick snap sensation with each pulse. Comfort is managed throughout.' },
      ],
      membershipCredits: true,
    },
  },
  {
    slug: 'advanced-microneedling-rejuvenation',
    name: 'Advanced Microneedling & Skin Rejuvenation',
    eyebrow: 'Skin Rejuvenation',
    description:
      'Microneedling services designed to support skin renewal, and may be combined with LED light, BB Glow-style, and PDRN-based topical protocols. Every plan is customized based on your skin goals, and individual results vary.',
    concerns: [
      'Skin texture and tone',
      'Fine lines and laxity',
      'Scarring and unevenness',
      'Dullness and lack of radiance',
    ],
    techniques: [
      'Microneedling for skin rejuvenation',
      'Red LED light support',
      'Blue LED light support',
      'BB Glow-style treatments',
      'PDRN-based topical protocols',
      'Customized rejuvenation plans',
    ],
    idealFor:
      'Clients seeking advanced, personalized skin rejuvenation with careful, consultation-led planning.',
    icon: Waves,
    details: {
      bestFor: 'Clients wanting advanced skin renewal for texture, tone, scarring, or early signs of aging.',
      benefits: [
        'Stimulated collagen production',
        'Improved skin texture and firmness',
        'Reduced appearance of scars and fine lines',
        'Enhanced product absorption and glow',
      ],
      treatmentTime: '60–90 minutes',
      downtime: '2–5 days of redness and mild peeling',
      recommendedSeries: '3–6 sessions, spaced 4–6 weeks apart',
      faq: [
        { q: 'How deep does the needle go?', a: 'Depth is customized per treatment area and concern — always within safe professional ranges.' },
        { q: 'Can I wear makeup after?', a: 'We recommend waiting 24–48 hours before applying makeup to allow the skin to heal.' },
      ],
      membershipCredits: true,
    },
  },
  {
    slug: 'body-contouring',
    name: '4-in-1 Body Contouring',
    eyebrow: 'Body Contouring',
    description:
      'Non-invasive body sculpting that combines fat freezing, cavitation, radiofrequency and laser lipo in a personalized series, focused on how you feel in your body. Individual results vary.',
    concerns: [
      'Desire for improved body definition',
      'Skin-firming goals',
      'Smoother-looking skin',
      'Body-confidence goals',
    ],
    techniques: [
      'Fat freezing (cryolipolysis)',
      'Cavitation',
      'Radiofrequency (RF) skin-firming',
      'Laser lipo',
      'Personalized treatment planning',
    ],
    idealFor:
      'Clients looking to complement a healthy lifestyle with non-invasive contouring and firming support.',
    icon: Sparkles,
    details: {
      bestFor: 'Clients seeking non-invasive body definition and skin tightening to complement a healthy lifestyle.',
      benefits: [
        'Improved body definition',
        'Tighter, firmer-looking skin',
        'Personalized multi-modality series',
        'Non-invasive with no surgery required',
      ],
      treatmentTime: '45–75 minutes',
      downtime: 'Minimal — mild redness or warmth in the treated area',
      recommendedSeries: '6–8 sessions, spaced 1–2 weeks apart',
      faq: [
        { q: 'Does it really work?', a: 'Many clients see noticeable toning and firming after a full series. Results vary by individual.' },
        { q: 'Is it uncomfortable?', a: 'Most describe the treatments as tolerable, with sensations of cold, warmth, or gentle suction depending on the modality.' },
      ],
      membershipCredits: true,
    },
  },
];

