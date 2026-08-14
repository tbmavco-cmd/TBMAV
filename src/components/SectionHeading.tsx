import { type ReactNode } from 'react';

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
  className = '',
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}) {
  return (
    <div className={`${center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} ${className}`}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="heading-display text-3xl text-ink-900 sm:text-4xl lg:text-[2.75rem] text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-ink-700 sm:text-lg text-balance">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="bg-cream-100 pt-16 pb-12 lg:pt-24 lg:pb-16">
      <div className="container-bare">
        {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
        <h1 className="heading-display text-4xl text-ink-900 sm:text-5xl lg:text-6xl text-balance max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-700 text-balance">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
