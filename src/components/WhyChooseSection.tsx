import { ClipboardList, Cpu, Gem, BadgeDollarSign, Crown, Award } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';

const features = [
  {
    title: 'Customized Treatment Plans',
    description:
      'Every service is tailored to your unique skin, body, and wellness goals. No cookie-cutter approaches — just personalized care designed around you.',
    icon: ClipboardList,
  },
  {
    title: 'Advanced Technology',
    description:
      'From EMS body contouring and RF skin tightening to medical-grade microneedling and LED therapy, we invest in proven, results-driven technology.',
    icon: Cpu,
  },
  {
    title: 'Luxury Private Spa Experience',
    description:
      'A calm, private-suite environment designed for your comfort, confidence, and peace of mind. Never rushed, never judged.',
    icon: Gem,
  },
  {
    title: 'Transparent Pricing',
    description:
      'Clear pricing with no hidden fees. Know exactly what to expect before your appointment — from single sessions to memberships.',
    icon: BadgeDollarSign,
  },
  {
    title: 'Flexible Membership Options',
    description:
      'Esthetic and wellness memberships designed to reward consistency, with credits you can use on the services that matter most to you.',
    icon: Crown,
  },
  {
    title: 'Advanced Practice Expertise',
    description:
      'Led by an Advanced Practice Esthetician with nearly a decade of specialized experience in head-to-toe skin treatments, intimate care, and rejuvenation.',
    icon: Award,
  },
];

export function WhyChooseSection() {
  return (
    <section className="section bg-cream-100">
      <div className="container-bare">
        <SectionHeading
          eyebrow="The Bare Method Difference"
          title="Why Choose The Bare Method"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="card p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-gold-500">
                <feature.icon className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <h3 className="mt-4 font-display font-medium text-ink-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
