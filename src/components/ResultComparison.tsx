import type { ResultItem } from '@/data/testimonials';

type Panel = { x: number; y: number; width: number; height: number };

// Layout-only crops of the original collages: no pixels are retouched.
// The client confirmed that the right-hand forehead image is the after photo.
const panels: Record<string, { sourceHeight: number; after: Panel; before: Panel }> = {
  r0: { sourceHeight: 1400, after: { x: 0, y: 0, width: 1400, height: 700 }, before: { x: 0, y: 700, width: 1400, height: 700 } },
  r1: { sourceHeight: 982, after: { x: 0, y: 0, width: 1400, height: 445 }, before: { x: 0, y: 445, width: 1400, height: 537 } },
  r2: { sourceHeight: 1400, after: { x: 43, y: 743, width: 1314, height: 614 }, before: { x: 43, y: 43, width: 1314, height: 614 } },
  r3: { sourceHeight: 1400, after: { x: 714, y: 14, width: 672, height: 1372 }, before: { x: 14, y: 14, width: 672, height: 1372 } },
};

export function ResultComparison({ result }: { result: ResultItem }) {
  const layout = panels[result.id];
  if (!result.image || !layout) return null;
  return (
    <div className="bg-blush-100">
      {(['after', 'before'] as const).map(stage => {
        const panel = layout[stage];
        return (
          <figure key={stage} className="border-b border-blush-200">
            <figcaption className="bg-black px-4 py-2 text-center text-xs font-medium uppercase tracking-[0.2em] text-gold-300">{stage}</figcaption>
            <div className="flex aspect-[2/1] items-center justify-center overflow-hidden">
              <div className="relative h-full max-w-full overflow-hidden" style={{ aspectRatio: `${panel.width} / ${panel.height}` }}>
                <img src={result.image} alt={`${result.title} — ${stage}`} loading="lazy" width={1400} height={layout.sourceHeight}
                  className="absolute max-w-none"
                  style={{ width: `${1400 / panel.width * 100}%`, height: `${layout.sourceHeight / panel.height * 100}%`, left: `${-panel.x / panel.width * 100}%`, top: `${-panel.y / panel.height * 100}%` }} />
              </div>
            </div>
          </figure>
        );
      })}
    </div>
  );
}
