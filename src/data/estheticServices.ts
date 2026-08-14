import type { LucideIcon } from 'lucide-react';
import { Shield, Flower2, Zap, Waves } from 'lucide-react';

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
    slug: 'body-skin-hidden-insecurities',
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
    slug: 'ems-rf-body-contouring',
    name: 'EMS & RF Body Contouring',
    eyebrow: 'Body Contouring',
    description:
      'Non-invasive body contouring sessions may use EMS and radiofrequency technology to support muscle stimulation, improved body definition, and skin-firming goals. Each plan is personalized and focused on how you feel in your body.',
    concerns: [
      'Desire for improved body definition',
      'Skin-firming goals',
      'Smoother-looking skin',
      'Muscle tone support',
      'Body-confidence goals',
    ],
    techniques: [
      'Electrical muscle stimulation (EMS)',
      'Radiofrequency (RF) skin-firming',
      'Personalized treatment planning',
      'Confidence-focused session design',
    ],
    idealFor:
      'Clients looking to complement a healthy lifestyle with non-invasive contouring and firming support.',
    icon: Zap,
    details: {
      bestFor: 'Clients seeking non-invasive body definition and skin tightening to complement a healthy lifestyle.',
      benefits: [
        'Improved muscle tone and definition',
        'Tighter, firmer-looking skin',
        'Reduced appearance of cellulite',
        'Non-invasive with no surgery required',
      ],
      treatmentTime: '45–75 minutes',
      downtime: 'None — no recovery needed',
      recommendedSeries: '6–8 sessions, spaced 1–2 weeks apart',
      faq: [
        { q: 'Does it really work?', a: 'Many clients see noticeable toning and firming after a full series. Results vary by individual.' },
        { q: 'Is it uncomfortable?', a: 'Most describe EMS as a deep muscle contraction and RF as a warm, relaxing sensation.' },
      ],
      membershipCredits: true,
    },
  },
  {
    slug: 'advanced-microneedling-rejuvenation',
    name: 'Advanced Microneedling & Skin Rejuvenation',
    eyebrow: 'Skin Rejuvenation',
    description:
      'Microneedling services designed to support skin renewal, and may be combined with EMS, LED light, BB Glow-style, and PDRN-based topical protocols. Every plan is customized based on your skin goals, and individual results vary.',
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
      'EMS combination sessions',
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
];
