import { type LucideIcon } from 'lucide-react';

export function PlaceholderImage({
  query,
  alt,
  className = '',
  aspect = 'aspect-[4/5]',
  icon: Icon,
}: {
  query: string;
  alt: string;
  className?: string;
  aspect?: string;
  icon?: LucideIcon;
}) {
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-cream-100 to-nude-200 ${aspect} ${className}`}>
      <img
        src={`https://images.pexels.com/search/?query=${encodeURIComponent(query)}`}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover"
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = 'none';
        }}
      />
      {Icon && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon className="h-12 w-12 text-gold-500/30" strokeWidth={1} />
        </div>
      )}
    </div>
  );
}
