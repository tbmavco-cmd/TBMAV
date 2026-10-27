import { Link } from 'react-router-dom';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <Link to="/" className={`block shrink-0 ${className}`} aria-label="The Bare Method home">
      <img src="/images/bare-method-logo.png" alt="The Bare Method — Advanced Esthetics" width={1200} height={800} className="block h-auto w-[156px] rounded-md object-contain sm:w-[180px]" />
    </Link>
  );
}
