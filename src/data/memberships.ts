export type Membership = {
  slug: string;
  name: string;
  division: 'esthetics' | 'wellness';
  tagline: string;
  price: string;
  features: string[];
  note?: string;
  ctaLabel: string;
  ctaType: 'contact' | 'wellness_plan' | 'portal';
  active: boolean;
};

export const memberships: Membership[] = [
  {
    slug: 'bare-glow-membership',
    name: 'Bare Glow Membership',
    division: 'esthetics',
    tagline: 'Monthly treatment credits and member-exclusive investment for regular clients.',
    price: 'From $99/mo',
    features: [
      'Monthly treatment credits',
      'Member-exclusive investment on all esthetic services',
      'Priority booking',
      'Corrective skin treatments',
      'LED therapy included',
      'Head-to-toe skin treatments',
      'Seasonal promotions & member exclusives',
      'Product savings',
    ],
    note: 'Credits convert to more value than the dollar amount paid. A service normally costing $175 may only use 125–150 credits depending on your membership level.',
    ctaLabel: 'Contact for Information',
    ctaType: 'contact',
    active: true,
  },
  {
    slug: 'bare-elite-membership',
    name: 'Bare Elite Membership',
    division: 'esthetics',
    tagline: 'The highest tier — maximum credit value, flexibility, and transformation.',
    price: 'From $175/mo',
    features: [
      'Maximum monthly treatment credits',
      'Highest credit value per dollar',
      'Priority booking',
      'Corrective skin treatments',
      'Add-ons & enhancements',
      'LED therapy',
      'Head-to-toe skin treatments & body contouring',
      'Seasonal promotions & member exclusives',
      'Product savings',
    ],
    note: 'Higher memberships unlock greater credit value. Credits can be used toward different treatments each visit — you are not locked into one service.',
    ctaLabel: 'Contact for Information',
    ctaType: 'contact',
    active: true,
  },
];

