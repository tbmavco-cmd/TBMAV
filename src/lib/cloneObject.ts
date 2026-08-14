/**
 * Deep-clone a persisted admin record into a new insert payload.
 * Identity timestamps and primary keys are stripped so Postgres can assign
 * fresh values on insert.
 */
const IDENTITY_KEYS = ['id', 'created_at', 'updated_at'] as const;

export function cloneObject<T extends Record<string, unknown>>(
  source: T,
  overrides: Partial<T> = {},
  extraOmit: readonly string[] = [],
): Record<string, unknown> {
  const cloned = structuredClone(source) as Record<string, unknown>;
  for (const key of IDENTITY_KEYS) {
    delete cloned[key];
  }
  for (const key of extraOmit) {
    delete cloned[key];
  }
  return { ...cloned, ...overrides };
}

/** Build a unique `-copy` slug that does not collide with existing slugs. */
export function uniqueCopySlug(baseSlug: string, existingSlugs: Iterable<string>): string {
  const root = `${String(baseSlug || 'item').replace(/-copy(?:-\d+)?$/i, '')}-copy`;
  const taken = new Set(existingSlugs);
  if (!taken.has(root)) return root;
  let n = 2;
  while (taken.has(`${root}-${n}`)) n += 1;
  return `${root}-${n}`;
}

/** Append a copy suffix without stacking endlessly: "Name" → "Name (Copy)" → "Name (Copy 2)". */
export function copyLabel(name: string): string {
  const raw = String(name || 'Untitled').trim() || 'Untitled';
  const match = raw.match(/^(.*?)(?: \(Copy(?: (\d+))?\)\s*)$/);
  if (!match) return `${raw} (Copy)`;
  const base = match[1].trim() || 'Untitled';
  const next = match[2] ? Number(match[2]) + 1 : 2;
  return `${base} (Copy ${next})`;
}
