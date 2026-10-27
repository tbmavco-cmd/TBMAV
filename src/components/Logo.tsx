import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <Link to="/" className={`flex items-center gap-2.5 ${className}`} aria-label="The Bare Method home">
      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold-400/50 bg-blush-50">
        <Sparkles className="h-4.5 w-4.5 text-gold-500" strokeWidth={1.5} />
      </span>
      <span className="font-display italic text-xl font-medium tracking-tightest text-ink-900 leading-none">
        The Bare Method
      </span>
    </Link>
  );
}

