import { useEffect, useState } from 'react';
import { Plus, Pencil, Trash2, Save, X } from 'lucide-react';
import { supabase } from '@/lib/supabase';

type AnnouncementRow = {
  id: string;
  headline: string;
  link: string | null;
  cta_text: string | null;
  audience: string;
  priority: number;
  is_active: boolean;
  starts_at: string;
  ends_at: string | null;
  created_at: string;
};

type FormState = {
  headline: string;
  link: string;
  cta_text: string;
  audience: string;
  priority: number;
  is_active: boolean;
  starts_at: string;
  ends_at: string;
};

const emptyForm: FormState = {
  headline: '',
  link: '',
  cta_text: '',
  audience: 'general',
  priority: 0,
  is_active: true,
  starts_at: new Date().toISOString().slice(0, 16),
  ends_at: '',
};

export default function AnnouncementsView() {
  const [rows, setRows] = useState<AnnouncementRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [showNew, setShowNew] = useState(false);

  const fetchAll = async () => {
    setLoading(true);
    const { data } = await supabase
      .from('announcements')
      .select('*')
      .order('priority', { ascending: false });
    if (data) setRows(data);
    setLoading(false);
  };

  useEffect(() => { fetchAll(); }, []);

  const handleSave = async () => {
    const payload = {
      headline: form.headline.trim(),
      link: form.link.trim() || null,
      cta_text: form.cta_text.trim() || null,
      audience: form.audience,
      priority: form.priority,
      is_active: form.is_active,
      starts_at: new Date(form.starts_at).toISOString(),
      ends_at: form.ends_at ? new Date(form.ends_at).toISOString() : null,
    };

    if (editingId) {
      await supabase.from('announcements').update(payload).eq('id', editingId);
    } else {
      await supabase.from('announcements').insert(payload);
    }
    setEditingId(null);
    setShowNew(false);
    setForm(emptyForm);
    fetchAll();
  };

  const handleDelete = async (id: string) => {
    await supabase.from('announcements').delete().eq('id', id);
    fetchAll();
  };

  const startEdit = (row: AnnouncementRow) => {
    setEditingId(row.id);
    setShowNew(false);
    setForm({
      headline: row.headline,
      link: row.link || '',
      cta_text: row.cta_text || '',
      audience: row.audience,
      priority: row.priority,
      is_active: row.is_active,
      starts_at: row.starts_at ? row.starts_at.slice(0, 16) : '',
      ends_at: row.ends_at ? row.ends_at.slice(0, 16) : '',
    });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setShowNew(false);
    setForm(emptyForm);
  };

  const isExpired = (row: AnnouncementRow) =>
    row.ends_at && new Date(row.ends_at) < new Date();

  const formFields = (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="sm:col-span-2">
        <label className="block text-xs font-medium text-ink-700 mb-1">Headline</label>
        <input
          type="text"
          value={form.headline}
          onChange={(e) => setForm({ ...form, headline: e.target.value })}
          className="w-full rounded-lg border border-ink-200 px-3 py-2 text-sm focus:border-[#c9a96e] focus:ring-1 focus:ring-[#c9a96e]"
          placeholder="Short announcement text"
        />
      </div>
      <div>
        <label className="block text-xs font-medium text-ink-700 mb-1">Link (optional)</label>
        <input
          type="text"
          value={form.link}
          onChange={(e) => setForm({ ...form, link: e.target.value })}
          className="w-full rounded-lg border border-ink-200 px-3 py-2 text-sm focus:border-[#c9a96e] focus:ring-1 focus:ring-[#c9a96e]"
          placeholder="/esthetics or full URL"
        />
      </div>
      <div>
        <label className="block text-xs font-medium text-ink-700 mb-1">CTA Text (optional)</label>
        <input
          type="text"
          value={form.cta_text}
          onChange={(e) => setForm({ ...form, cta_text: e.target.value })}
          className="w-full rounded-lg border border-ink-200 px-3 py-2 text-sm focus:border-[#c9a96e] focus:ring-1 focus:ring-[#c9a96e]"
          placeholder="Book Now"
        />
      </div>
      <div>
        <label className="block text-xs font-medium text-ink-700 mb-1">Audience</label>
        <select
          value={form.audience}
          onChange={(e) => setForm({ ...form, audience: e.target.value })}
          className="w-full rounded-lg border border-ink-200 px-3 py-2 text-sm focus:border-[#c9a96e] focus:ring-1 focus:ring-[#c9a96e]"
        >
          <option value="general">General</option>
          <option value="esthetics">Esthetics</option>
          <option value="wellness">Wellness</option>
        </select>
      </div>
      <div>
        <label className="block text-xs font-medium text-ink-700 mb-1">Priority</label>
        <input
          type="number"
          value={form.priority}
          onChange={(e) => setForm({ ...form, priority: parseInt(e.target.value) || 0 })}
          className="w-full rounded-lg border border-ink-200 px-3 py-2 text-sm focus:border-[#c9a96e] focus:ring-1 focus:ring-[#c9a96e]"
        />
      </div>
      <div>
        <label className="block text-xs font-medium text-ink-700 mb-1">Starts At</label>
        <input
          type="datetime-local"
          value={form.starts_at}
          onChange={(e) => setForm({ ...form, starts_at: e.target.value })}
          className="w-full rounded-lg border border-ink-200 px-3 py-2 text-sm focus:border-[#c9a96e] focus:ring-1 focus:ring-[#c9a96e]"
        />
      </div>
      <div>
        <label className="block text-xs font-medium text-ink-700 mb-1">Ends At (optional)</label>
        <input
          type="datetime-local"
          value={form.ends_at}
          onChange={(e) => setForm({ ...form, ends_at: e.target.value })}
          className="w-full rounded-lg border border-ink-200 px-3 py-2 text-sm focus:border-[#c9a96e] focus:ring-1 focus:ring-[#c9a96e]"
        />
      </div>
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={form.is_active}
          onChange={(e) => setForm({ ...form, is_active: e.target.checked })}
          className="h-4 w-4 rounded border-ink-300 text-[#c9a96e] focus:ring-[#c9a96e]"
        />
        <label className="text-sm text-ink-700">Active</label>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-display font-semibold text-ink-900">Announcements</h2>
        {!showNew && !editingId && (
          <button
            onClick={() => { setShowNew(true); setForm(emptyForm); }}
            className="inline-flex items-center gap-1.5 rounded-lg bg-ink-900 px-4 py-2 text-sm font-medium text-cream-50 hover:bg-ink-800 transition-colors"
          >
            <Plus className="w-4 h-4" /> New
          </button>
        )}
      </div>

      {/* New form */}
      {showNew && (
        <div className="rounded-xl border border-ink-200 bg-white p-5 shadow-sm">
          <h3 className="mb-4 text-sm font-semibold text-ink-900">New Announcement</h3>
          {formFields}
          <div className="mt-4 flex gap-2">
            <button
              onClick={handleSave}
              disabled={!form.headline.trim()}
              className="inline-flex items-center gap-1.5 rounded-lg bg-ink-900 px-4 py-2 text-sm font-medium text-cream-50 hover:bg-ink-800 disabled:opacity-50 transition-colors"
            >
              <Save className="w-4 h-4" /> Save
            </button>
            <button onClick={cancelEdit} className="inline-flex items-center gap-1.5 rounded-lg border border-ink-200 px-4 py-2 text-sm font-medium text-ink-700 hover:bg-ink-50 transition-colors">
              <X className="w-4 h-4" /> Cancel
            </button>
          </div>
        </div>
      )}

      {/* List */}
      {loading ? (
        <p className="text-sm text-ink-500">Loading...</p>
      ) : rows.length === 0 ? (
        <p className="text-sm text-ink-500">No announcements yet.</p>
      ) : (
        <div className="space-y-3">
          {rows.map((row) => (
            <div
              key={row.id}
              className={`rounded-xl border bg-white p-4 shadow-sm transition-colors ${
                isExpired(row) ? 'border-red-200 opacity-60' : row.is_active ? 'border-ink-200' : 'border-ink-100 opacity-70'
              }`}
            >
              {editingId === row.id ? (
                <div>
                  {formFields}
                  <div className="mt-4 flex gap-2">
                    <button
                      onClick={handleSave}
                      disabled={!form.headline.trim()}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-ink-900 px-4 py-2 text-sm font-medium text-cream-50 hover:bg-ink-800 disabled:opacity-50 transition-colors"
                    >
                      <Save className="w-4 h-4" /> Save
                    </button>
                    <button onClick={cancelEdit} className="inline-flex items-center gap-1.5 rounded-lg border border-ink-200 px-4 py-2 text-sm font-medium text-ink-700 hover:bg-ink-50 transition-colors">
                      <X className="w-4 h-4" /> Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-ink-900 truncate">{row.headline}</p>
                    <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-ink-500">
                      <span className="inline-block rounded-full bg-ink-100 px-2 py-0.5 capitalize">{row.audience}</span>
                      <span>Priority: {row.priority}</span>
                      {row.is_active && !isExpired(row) && <span className="text-emerald-600 font-medium">Active</span>}
                      {!row.is_active && <span className="text-ink-400">Inactive</span>}
                      {isExpired(row) && <span className="text-red-500 font-medium">Expired</span>}
                      {row.cta_text && <span className="italic">CTA: {row.cta_text}</span>}
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => startEdit(row)}
                      className="p-2 rounded-lg text-ink-500 hover:text-ink-900 hover:bg-ink-50 transition-colors"
                      aria-label="Edit"
                    >
                      <Pencil className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(row.id)}
                      className="p-2 rounded-lg text-ink-500 hover:text-red-600 hover:bg-red-50 transition-colors"
                      aria-label="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
