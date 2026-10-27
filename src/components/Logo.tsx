import { Link } from 'react-router-dom';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <Link to="/" className={`block shrink-0 ${className}`} aria-label="The Bare Method home">
      <img src="/images/tbm-monogram-signature-transparent.png" alt="The Bare Method — Advanced Esthetics" width={1096} height={712} className="block h-auto w-[136px] object-contain sm:w-[156px]" />
    </Link>
  );
}
