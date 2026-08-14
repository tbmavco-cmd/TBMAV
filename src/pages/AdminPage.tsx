import { useEffect, useState, type ReactNode } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogOut, LayoutDashboard, FileText, Mail, Settings, Shield, Scale, Megaphone, ShoppingBag } from 'lucide-react';
import { supabase, wellnessStatusLabels, contactStatusLabels } from '@/lib/supabase';
import { siteConfig } from '@/config/site';
import { legalEntitySettings } from '@/config/legalEntity';
import AnnouncementsView from '@/components/AnnouncementsView';

type AdminView = 'dashboard' | 'wellness' | 'contact' | 'config' | 'legal' | 'announcements' | 'catalog';

export function AdminPage() {
  const navigate = useNavigate();
  const [session, setSession] = useState<boolean | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [view, setView] = useState<AdminView>('dashboard');

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(!!data.session);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_event, sess) => {
      setSession(!!sess);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setAuthError(null);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setAuthError(error.message);
    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  if (session === null) {
    return <div className="flex min-h-screen items-center justify-center bg-nude-50"><p className="text-ink-700">Loading...</p></div>;
  }

  if (!session) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-nude-50 px-4">
        <div className="w-full max-w-md">
          <div className="card p-8">
            <div className="mb-6 flex items-center gap-2.5">
              <Shield className="h-6 w-6 text-gold-500" />
              <h1 className="font-display text-2xl font-medium text-ink-900">Admin Login</h1>
            </div>
            <p className="mb-6 text-sm text-ink-700">
              Secure admin dashboard for The Bare Method staff. Sign in to manage requests, orders,
              and configuration.
            </p>
            {authError && (
              <div className="mb-4 rounded-lg bg-red-50 border border-red-200 p-3 text-sm text-red-700">
                {authError}
              </div>
            )}
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="label" htmlFor="admin-email">Email</label>
                <input id="admin-email" type="email" required className="input" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div>
                <label className="label" htmlFor="admin-password">Password</label>
                <input id="admin-password" type="password" required className="input" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <button type="submit" disabled={loading} className="btn-gold w-full">
                {loading ? 'Signing in...' : 'Sign In'}
              </button>
            </form>
            <Link to="/" className="mt-4 block text-center text-sm text-ink-700 hover:text-gold-600">
              Back to website
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-nude-50">
      <div className="border-b border-ink-900/8 bg-white">
        <div className="container-bare flex h-16 items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Shield className="h-5 w-5 text-gold-500" />
            <span className="font-display text-lg font-medium text-ink-900">The Bare Method — Admin</span>
          </div>
          <button onClick={handleLogout} className="btn-ghost text-sm">
            <LogOut className="h-4 w-4" /> Sign Out
          </button>
        </div>
      </div>

      <div className="container-bare py-8">
        <div className="grid gap-8 lg:grid-cols-[200px_1fr]">
          <nav className="space-y-1">
            {[
              { id: 'dashboard' as const, label: 'Dashboard', icon: LayoutDashboard },
              { id: 'wellness' as const, label: 'Wellness Requests', icon: FileText },
              { id: 'contact' as const, label: 'Contact Submissions', icon: Mail },
              { id: 'config' as const, label: 'Configuration', icon: Settings },
            { id: 'legal' as const, label: 'Legal & Policies', icon: Scale },
            { id: 'announcements' as const, label: 'Announcements', icon: Megaphone },
            { id: 'catalog' as const, label: 'Wellness Catalog', icon: ShoppingBag },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setView(item.id)}
                  className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                    view === item.id
                      ? 'bg-ink-900 text-cream-50'
                      : 'text-ink-700 hover:bg-ink-900/5'
                  }`}
                >
                  <Icon className="h-4 w-4" /> {item.label}
                </button>
              );
            })}
          </nav>

          <div>
            {view === 'dashboard' && <DashboardView />}
            {view === 'wellness' && <WellnessRequestsView />}
            {view === 'contact' && <ContactSubmissionsView />}
            {view === 'config' && <ConfigView />}
          {view === 'legal' && <LegalView />}
          {view === 'announcements' && <AnnouncementsView />}
          {view === 'catalog' && <CatalogAdminView />}
          </div>
        </div>
      </div>
    </div>
  );
}

function DashboardView() {
  const [wellnessCount, setWellnessCount] = useState<number | null>(null);
  const [contactCount, setContactCount] = useState<number | null>(null);

  useEffect(() => {
    supabase.from('wellness_requests').select('*', { count: 'exact', head: true }).then(({ count }) => setWellnessCount(count ?? 0));
    supabase.from('contact_submissions').select('*', { count: 'exact', head: true }).then(({ count }) => setContactCount(count ?? 0));
  }, []);

  return (
    <div>
      <h2 className="heading-display text-2xl text-ink-900">Dashboard</h2>
      <p className="mt-1 text-sm text-ink-700">Overview of public orders, requests, and submissions.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard label="Wellness Requests" value={wellnessCount} />
        <StatCard label="Contact Submissions" value={contactCount} />
        <StatCard label="Pending Invoice Requests" value={null} note="Filtered in Wellness Requests" />
      </div>
      <div className="mt-8 rounded-2xl bg-cream-100 p-6">
        <h3 className="font-medium text-ink-900">Nonclinical Admin Only</h3>
        <p className="mt-2 text-sm text-ink-700">
          This dashboard handles nonclinical business administration only. Medical charting, patient
          records, and clinical documentation are managed through Legend EHR — not here. No protected
          health information is stored in this system.
        </p>
      </div>
    </div>
  );
}

function StatCard({ label, value, note }: { label: string; value: number | null; note?: string }) {
  return (
    <div className="card p-5">
      <p className="text-xs font-semibold uppercase tracking-wide text-ink-700/60">{label}</p>
      <p className="mt-2 text-3xl font-semibold text-ink-900">{value === null ? '—' : value}</p>
      {note && <p className="mt-1 text-xs text-ink-700/50">{note}</p>}
    </div>
  );
}

function WellnessRequestsView() {
  const [requests, setRequests] = useState<WellnessRequestRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>('all');
  const [selected, setSelected] = useState<WellnessRequestRow | null>(null);

  useEffect(() => {
    loadRequests();
  }, []);

  const loadRequests = async () => {
    setLoading(true);
    const { data } = await supabase
      .from('wellness_requests')
      .select('*')
      .order('created_at', { ascending: false });
    setRequests((data as WellnessRequestRow[]) ?? []);
    setLoading(false);
  };

  const filtered = filter === 'all' ? requests : requests.filter((r) => r.status === filter);

  const updateStatus = async (id: string, newStatus: string) => {
    await supabase.from('wellness_requests').update({ status: newStatus, updated_at: new Date().toISOString() }).eq('id', id);
    await supabase.from('request_status_history').insert({
      request_type: 'wellness',
      request_id: id,
      new_status: newStatus,
      changed_by_email: (await supabase.auth.getUser()).data.user?.email ?? null,
    });
    loadRequests();
    if (selected?.id === id) setSelected({ ...selected, status: newStatus });
  };

  return (
    <div>
      <h2 className="heading-display text-2xl text-ink-900">Wellness Requests</h2>
      <p className="mt-1 text-sm text-ink-700">View and manage wellness plan and consultation requests.</p>

      <div className="mt-4 flex flex-wrap gap-2">
        <FilterChip label="All" active={filter === 'all'} onClick={() => setFilter('all')} />
        {Object.entries(wellnessStatusLabels).map(([key, label]) => (
          <FilterChip key={key} label={label} active={filter === key} onClick={() => setFilter(key)} />
        ))}
      </div>

      {loading ? (
        <p className="mt-6 text-ink-700">Loading...</p>
      ) : filtered.length === 0 ? (
        <p className="mt-6 text-ink-700/60">No requests found.</p>
      ) : (
        <div className="mt-6 space-y-3">
          {filtered.map((r) => (
            <button
              key={r.id}
              onClick={() => setSelected(r)}
              className="card card-hover w-full p-4 text-left"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-medium text-ink-900">{r.first_name} {r.last_name}</p>
                  <p className="text-sm text-ink-700/70">{r.selected_program}</p>
                </div>
                <div className="text-right">
                  <StatusBadge status={r.status} labels={wellnessStatusLabels} />
                  <p className="mt-1 text-xs text-ink-700/50">{new Date(r.created_at).toLocaleDateString()}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      )}

      {selected && (
        <RequestDetailModal
          request={selected}
          onClose={() => setSelected(null)}
          onUpdateStatus={(s) => updateStatus(selected.id, s)}
          labels={wellnessStatusLabels}
          type="wellness"
        />
      )}
    </div>
  );
}

function ContactSubmissionsView() {
  const [submissions, setSubmissions] = useState<ContactSubmissionRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>('all');
  const [selected, setSelected] = useState<ContactSubmissionRow | null>(null);

  useEffect(() => {
    loadSubmissions();
  }, []);

  const loadSubmissions = async () => {
    setLoading(true);
    const { data } = await supabase
      .from('contact_submissions')
      .select('*')
      .order('created_at', { ascending: false });
    setSubmissions((data as ContactSubmissionRow[]) ?? []);
    setLoading(false);
  };

  const filtered = filter === 'all' ? submissions : submissions.filter((s) => s.status === filter);

  const updateStatus = async (id: string, newStatus: string) => {
    await supabase.from('contact_submissions').update({ status: newStatus, updated_at: new Date().toISOString() }).eq('id', id);
    await supabase.from('request_status_history').insert({
      request_type: 'contact',
      request_id: id,
      new_status: newStatus,
      changed_by_email: (await supabase.auth.getUser()).data.user?.email ?? null,
    });
    loadSubmissions();
    if (selected?.id === id) setSelected({ ...selected, status: newStatus });
  };

  return (
    <div>
      <h2 className="heading-display text-2xl text-ink-900">Contact Submissions</h2>
      <p className="mt-1 text-sm text-ink-700">View and manage general contact form submissions.</p>

      <div className="mt-4 flex flex-wrap gap-2">
        <FilterChip label="All" active={filter === 'all'} onClick={() => setFilter('all')} />
        {Object.entries(contactStatusLabels).map(([key, label]) => (
          <FilterChip key={key} label={label} active={filter === key} onClick={() => setFilter(key)} />
        ))}
      </div>

      {loading ? (
        <p className="mt-6 text-ink-700">Loading...</p>
      ) : filtered.length === 0 ? (
        <p className="mt-6 text-ink-700/60">No submissions found.</p>
      ) : (
        <div className="mt-6 space-y-3">
          {filtered.map((s) => (
            <button key={s.id} onClick={() => setSelected(s)} className="card card-hover w-full p-4 text-left">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-medium text-ink-900">{s.name}</p>
                  <p className="text-sm text-ink-700/70">{s.area_of_interest ?? 'General'}</p>
                </div>
                <div className="text-right">
                  <StatusBadge status={s.status} labels={contactStatusLabels} />
                  <p className="mt-1 text-xs text-ink-700/50">{new Date(s.created_at).toLocaleDateString()}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      )}

      {selected && (
        <RequestDetailModal
          request={selected}
          onClose={() => setSelected(null)}
          onUpdateStatus={(s) => updateStatus(selected.id, s)}
          labels={contactStatusLabels}
          type="contact"
        />
      )}
    </div>
  );
}

function FilterChip({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors ${
        active ? 'bg-ink-900 text-cream-50' : 'border border-ink-900/15 text-ink-700 hover:bg-ink-900/5'
      }`}
    >
      {label}
    </button>
  );
}

function StatusBadge({ status, labels }: { status: string; labels: Record<string, string> }) {
  const colors: Record<string, string> = {
    awaiting_review: 'bg-amber-100 text-amber-800',
    new: 'bg-amber-100 text-amber-800',
    intake_required: 'bg-blue-100 text-blue-800',
    invoice_sent: 'bg-indigo-100 text-indigo-800',
    reviewed: 'bg-blue-100 text-blue-800',
    paid: 'bg-green-100 text-green-800',
    responded: 'bg-green-100 text-green-800',
    cancelled: 'bg-red-100 text-red-800',
    archived: 'bg-gray-100 text-gray-700',
  };
  return (
    <span className={`inline-block rounded-full px-2.5 py-1 text-xs font-medium ${colors[status] ?? 'bg-gray-100 text-gray-700'}`}>
      {labels[status] ?? status}
    </span>
  );
}

type BaseRequest = {
  id: string;
  status: string;
  created_at: string;
};

function RequestDetailModal<T extends BaseRequest>({
  request,
  onClose,
  onUpdateStatus,
  labels,
  type,
}: {
  request: T;
  onClose: () => void;
  onUpdateStatus: (status: string) => void;
  labels: Record<string, string>;
  type: 'wellness' | 'contact';
}) {
  const [notes, setNotes] = useState<RequestNoteRow[]>([]);
  const [newNote, setNewNote] = useState('');
  const [invoiceLink, setInvoiceLink] = useState(
    type === 'wellness' ? (request as unknown as WellnessRequestRow).invoice_link ?? '' : '',
  );
  const [invoiceTotal, setInvoiceTotal] = useState(
    type === 'wellness' ? (request as unknown as WellnessRequestRow).invoice_total_cents ?? '' : '',
  );

  useEffect(() => {
    supabase
      .from('request_notes')
      .select('*')
      .eq('request_id', request.id)
      .eq('request_type', type)
      .order('created_at', { ascending: false })
      .then(({ data }) => setNotes((data as RequestNoteRow[]) ?? []));
  }, [request.id, type]);

  const addNote = async () => {
    if (!newNote.trim()) return;
    const user = await supabase.auth.getUser();
    await supabase.from('request_notes').insert({
      request_type: type,
      request_id: request.id,
      note_body: newNote,
      created_by_email: user.data.user?.email ?? null,
    });
    setNewNote('');
    const { data } = await supabase
      .from('request_notes')
      .select('*')
      .eq('request_id', request.id)
      .eq('request_type', type)
      .order('created_at', { ascending: false });
    setNotes((data as RequestNoteRow[]) ?? []);
  };

  const saveInvoice = async () => {
    if (type !== 'wellness') return;
    await supabase
      .from('wellness_requests')
      .update({
        invoice_link: invoiceLink || null,
        invoice_total_cents: invoiceTotal ? Number(invoiceTotal) : null,
        updated_at: new Date().toISOString(),
      })
      .eq('id', request.id);
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-ink-900/40 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
        <div className="sticky top-0 border-b border-ink-900/10 bg-white px-6 py-4">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-xl font-medium text-ink-900">Request Details</h3>
            <button onClick={onClose} className="btn-ghost p-2 text-sm">Close</button>
          </div>
        </div>
        <div className="space-y-6 p-6">
          <DetailRow label="Status">
            <StatusBadge status={request.status} labels={labels} />
          </DetailRow>
          <DetailRow label="Submitted">{new Date(request.created_at).toLocaleString()}</DetailRow>

          {type === 'wellness' ? (
            <WellnessRequestFields request={request as unknown as WellnessRequestRow} />
          ) : (
            <ContactRequestFields request={request as unknown as ContactSubmissionRow} />
          )}

          {/* Status update */}
          <div>
            <label className="label">Update Status</label>
            <select
              className="input"
              value={request.status}
              onChange={(e) => onUpdateStatus(e.target.value)}
            >
              {Object.entries(labels).map(([key, label]) => (
                <option key={key} value={key}>{label}</option>
              ))}
            </select>
          </div>

          {/* Invoice (wellness only) */}
          {type === 'wellness' && (
            <div className="rounded-xl bg-cream-100 p-4">
              <h4 className="text-sm font-medium text-ink-900">Invoice Management</h4>
              <div className="mt-3 space-y-3">
                <div>
                  <label className="label">External Invoice Link</label>
                  <input
                    className="input"
                    placeholder="Paste secure invoice link..."
                    value={invoiceLink}
                    onChange={(e) => setInvoiceLink(e.target.value)}
                  />
                </div>
                <div>
                  <label className="label">Invoice Total (cents)</label>
                  <input
                    type="number"
                    className="input"
                    placeholder="e.g. 15000 for $150.00"
                    value={invoiceTotal}
                    onChange={(e) => setInvoiceTotal(e.target.value)}
                  />
                </div>
                <button onClick={saveInvoice} className="btn-outline text-sm">Save Invoice Details</button>
              </div>
            </div>
          )}

          {/* Notes */}
          <div>
            <h4 className="text-sm font-medium text-ink-900">Internal Notes</h4>
            <div className="mt-3 space-y-2">
              {notes.map((n) => (
                <div key={n.id} className="rounded-lg bg-cream-100 p-3">
                  <p className="text-sm text-ink-700">{n.note_body}</p>
                  <p className="mt-1 text-xs text-ink-700/50">
                    {n.created_by_email} · {new Date(n.created_at).toLocaleString()}
                  </p>
                </div>
              ))}
              {notes.length === 0 && <p className="text-sm text-ink-700/50">No notes yet.</p>}
            </div>
            <div className="mt-3 flex gap-2">
              <input
                className="input flex-1"
                placeholder="Add an internal note..."
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && addNote()}
              />
              <button onClick={addNote} className="btn-gold text-sm">Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-ink-900/5 pb-3">
      <span className="text-xs font-semibold uppercase tracking-wide text-ink-700/60">{label}</span>
      <span className="text-sm text-ink-900 text-right">{children}</span>
    </div>
  );
}

function WellnessRequestFields({ request }: { request: WellnessRequestRow }) {
  return (
    <>
      <DetailRow label="Name">{request.first_name} {request.last_name}</DetailRow>
      <DetailRow label="Email">{request.email}</DetailRow>
      <DetailRow label="Phone">{request.phone}</DetailRow>
      <DetailRow label="State">{request.state_of_residence}</DetailRow>
      <DetailRow label="Contact Method">{request.preferred_contact_method}</DetailRow>
      <DetailRow label="Program">{request.selected_program}</DetailRow>
      <DetailRow label="Format">{request.consultation_format}</DetailRow>
      {request.scheduling_preference && <DetailRow label="Scheduling">{request.scheduling_preference}</DetailRow>}
      {request.admin_message && <DetailRow label="Message">{request.admin_message}</DetailRow>}
      <DetailRow label="Email Consent">{request.consent_email ? 'Yes' : 'No'}</DetailRow>
      <DetailRow label="SMS Consent">{request.consent_sms ? 'Yes' : 'No'}</DetailRow>
    </>
  );
}

function ContactRequestFields({ request }: { request: ContactSubmissionRow }) {
  return (
    <>
      <DetailRow label="Name">{request.name}</DetailRow>
      <DetailRow label="Email">{request.email}</DetailRow>
      <DetailRow label="Phone">{request.phone ?? '—'}</DetailRow>
      <DetailRow label="Area of Interest">{request.area_of_interest ?? '—'}</DetailRow>
      <DetailRow label="Contact Method">{request.preferred_contact_method ?? '—'}</DetailRow>
      <DetailRow label="Message">{request.message}</DetailRow>
    </>
  );
}

function ConfigView() {
  return (
    <div>
      <h2 className="heading-display text-2xl text-ink-900">Configuration</h2>
      <p className="mt-1 text-sm text-ink-700">
        Review your integration URLs and settings. To update values, edit{' '}
        <code className="rounded bg-cream-100 px-1.5 py-0.5 text-xs">src/config/site.ts</code>.
      </p>

      <div className="mt-6 space-y-6">
        <ConfigSection title="Vagaro (Esthetics)">
          <ConfigItem label="Booking URL" value={siteConfig.vagaro.bookingUrl} />
          <ConfigItem label="Services URL" value={siteConfig.vagaro.servicesUrl} />
          <ConfigItem label="Gift Card URL" value={siteConfig.vagaro.giftCardUrl} />
          <ConfigItem label="Membership URL" value={siteConfig.vagaro.membershipUrl} />
          <ConfigItem label="Packages URL" value={siteConfig.vagaro.packagesUrl} />
          <ConfigItem label="Deals URL" value={siteConfig.vagaro.dealsUrl} />
          <ConfigItem label="FAQs URL" value={siteConfig.vagaro.faqsUrl} />
          <ConfigItem label="Reviews URL" value={siteConfig.vagaro.reviewsUrl} />
          <ConfigItem label="Gallery URL" value={siteConfig.vagaro.galleryUrl} />
        </ConfigSection>

        <ConfigSection title="Legend EHR (Wellness)">
          <ConfigItem label="Intake URL" value={siteConfig.legend.intakeUrl} />
          <ConfigItem label="Patient Portal URL" value={siteConfig.legend.patientPortalUrl} />
          <ConfigItem label="Booking URL" value={siteConfig.legend.bookingUrl} />
          <ConfigItem label="Existing Patient Login" value={siteConfig.legend.existingPatientLoginUrl} />
        </ConfigSection>

        <ConfigSection title="Payment Lanes">
          {Object.entries(siteConfig.payments.lanes).map(([key, lane]) => (
            <ConfigItem
              key={key}
              label={`${lane.label} — Hosted Payment URL`}
              value={lane.hostedPaymentUrl || 'Not configured — paste your URL in site.ts'}
            />
          ))}
        </ConfigSection>

        <ConfigSection title="Social & Analytics">
          <ConfigItem label="Instagram" value={siteConfig.social.instagram} />
          <ConfigItem label="Google Business Profile" value={siteConfig.social.googleBusiness} />
          <ConfigItem label="Google Analytics ID" value={siteConfig.social.googleAnalyticsId || 'Not configured'} />
          <ConfigItem label="Meta Pixel ID" value={siteConfig.social.metaPixelId || 'Not configured'} />
        </ConfigSection>

        <ConfigSection title="Merchant Services">
          <ConfigItem label="Merchant Services Company" value={siteConfig.payments.merchantServicesCompany} />
          <ConfigItem label="Preferred Gateway" value={siteConfig.payments.preferredGateway} />
          <ConfigItem label="Alternative Gateway" value={siteConfig.payments.alternativeGateway} />
        </ConfigSection>
      </div>

      <div className="mt-8 rounded-2xl bg-cream-100 p-6">
        <h3 className="font-medium text-ink-900">Where to Paste Your Credentials</h3>
        <ul className="mt-3 space-y-1.5 text-sm text-ink-700">
          <li>• Vagaro booking, gift card, membership, and package URLs → <code className="text-xs">siteConfig.vagaro</code></li>
          <li>• Legend EHR intake, portal, booking, and login URLs → <code className="text-xs">siteConfig.legend</code></li>
          <li>• Authorize.Net / NMI hosted payment form URLs → <code className="text-xs">siteConfig.payments.lanes</code></li>
          <li>• Instagram, Google Business, Analytics, Meta Pixel → <code className="text-xs">siteConfig.social</code></li>
          <li>• Do NOT paste raw API secrets or keys here — use hosted/tokenized forms only.</li>
        </ul>
      </div>
    </div>
  );
}

function ConfigSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="card p-5">
      <h3 className="text-xs font-semibold uppercase tracking-wide text-gold-600">{title}</h3>
      <div className="mt-3 space-y-2">{children}</div>
    </div>
  );
}

function ConfigItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1 border-b border-ink-900/5 pb-2 last:border-0 sm:flex-row sm:items-center sm:justify-between">
      <span className="text-sm text-ink-700">{label}</span>
      <span className="text-xs text-ink-900 sm:text-right break-all">{value}</span>
    </div>
  );
}

type WellnessRequestRow = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  state_of_residence: string;
  preferred_contact_method: string;
  selected_program: string;
  consultation_format: string;
  scheduling_preference: string | null;
  admin_message: string | null;
  consent_email: boolean;
  consent_sms: boolean;
  status: string;
  invoice_link: string | null;
  invoice_total_cents: number | null;
  created_at: string;
};

type ContactSubmissionRow = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  area_of_interest: string | null;
  preferred_contact_method: string | null;
  message: string;
  status: string;
  created_at: string;
};

type RequestNoteRow = {
  id: string;
  note_body: string;
  created_by_email: string | null;
  created_at: string;
};

function LegalView() {
  const statusColors: Record<string, string> = {
    draft: 'bg-amber-100 text-amber-800',
    pending_legal_review: 'bg-blue-100 text-blue-800',
    approved: 'bg-emerald-100 text-emerald-800',
    published: 'bg-green-100 text-green-800',
    archived: 'bg-gray-100 text-gray-700',
  };

  return (
    <div>
      <h2 className="heading-display text-2xl text-ink-900">Legal & Policy Management</h2>
      <p className="mt-1 text-sm text-ink-700">
        Review legal entity settings, policy version control, and attorney-review status. To update
        values, edit{' '}
        <code className="rounded bg-cream-100 px-1.5 py-0.5 text-xs">src/config/legalEntity.ts</code>{' '}
        and{' '}
        <code className="rounded bg-cream-100 px-1.5 py-0.5 text-xs">src/data/legal.ts</code>.
      </p>

      <div className="mt-4 rounded-2xl border border-amber-300 bg-amber-50 p-5">
        <div className="flex items-start gap-3">
          <Shield className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
          <div>
            <p className="font-medium text-amber-900">Internal Administrator Notice — Not Displayed Publicly</p>
            <p className="mt-1 text-sm text-amber-800">{legalEntitySettings.adminNotice}</p>
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-6">
        <ConfigSection title="Legal Entity Settings">
          <ConfigItem label="Website Operator Legal Name" value={legalEntitySettings.websiteOperatorLegalName} />
          <ConfigItem label="The Bare Method Legal Entity" value={legalEntitySettings.bareMethodLegalEntityName} />
          <ConfigItem label="DBA Name" value={legalEntitySettings.dbaName} />
          <ConfigItem label="Business Mailing Address" value={`${legalEntitySettings.businessMailingAddress.line1}, ${legalEntitySettings.businessMailingAddress.city}, ${legalEntitySettings.businessMailingAddress.state} ${legalEntitySettings.businessMailingAddress.zip}`} />
          <ConfigItem label="Customer-Service Email" value={legalEntitySettings.customerServiceEmail} />
          <ConfigItem label="Privacy Email" value={legalEntitySettings.privacyEmail} />
          <ConfigItem label="Legal-Notice Email" value={legalEntitySettings.legalNoticeEmail} />
          <ConfigItem label="Membership-Cancellation Email" value={legalEntitySettings.membershipCancellationEmail} />
          <ConfigItem label="Customer-Service Phone" value={legalEntitySettings.customerServicePhone} />
        </ConfigSection>

        <ConfigSection title="Clinical & Wellness Relationships">
          <ConfigItem label="Medical-Practice Legal Name" value={legalEntitySettings.medicalPracticeLegalName} />
          <ConfigItem label="Clinical Partner" value={legalEntitySettings.clinicalPartnerName} />
          <ConfigItem label="Scriptful Relationship" value={legalEntitySettings.scriptfulRelationshipDescription} />
          <ConfigItem label="Legend Platform Description" value={legalEntitySettings.legendPatientPlatformDescription} />
          <ConfigItem label="Notice of Privacy Practices URL" value={legalEntitySettings.noticeOfPrivacyPracticesUrl} />
          <ConfigItem label="Notice of Privacy Practices PDF" value={legalEntitySettings.noticeOfPrivacyPracticesPdfUrl} />
          <ConfigItem label="Notice of Privacy Practices Contact" value={legalEntitySettings.noticeOfPrivacyPracticesPrivacyContact} />
          <ConfigItem label="Notice of Privacy Practices Effective Date" value={legalEntitySettings.noticeOfPrivacyPracticesEffectiveDate} />
        </ConfigSection>

        <ConfigSection title="Pharmacy & Laboratory">
          <ConfigItem label="Pharmacy Partner" value={legalEntitySettings.pharmacyPartnerName} />
          <ConfigItem label="Laboratory Partner" value={legalEntitySettings.laboratoryPartnerName} />
        </ConfigSection>

        <ConfigSection title="Payment & Technology">
          <ConfigItem label="Payment Processor" value={legalEntitySettings.paymentProcessor} />
          <ConfigItem label="Merchant-Services Provider" value={legalEntitySettings.merchantServicesProvider} />
          <ConfigItem label="Payment Gateway" value={legalEntitySettings.paymentGateway} />
          <ConfigItem label="Esthetic Booking Provider" value={legalEntitySettings.estheticBookingProvider} />
        </ConfigSection>

        <ConfigSection title="Affiliates & Education">
          <ConfigItem label="Affiliate Companies" value={legalEntitySettings.affiliateCompanies} />
          <ConfigItem label="Referral Partners" value={legalEntitySettings.referralPartners} />
          <ConfigItem label="Education Division" value={legalEntitySettings.educationDivision} />
        </ConfigSection>

        <ConfigSection title="Optional Attorney-Review Modules (Disabled)">
          <ConfigItem label="Arbitration" value={legalEntitySettings.optionalModules.arbitration.enabled ? 'ENABLED' : 'Disabled'} />
          <ConfigItem label="Class-Action Waiver" value={legalEntitySettings.optionalModules.classActionWaiver.enabled ? 'ENABLED' : 'Disabled'} />
          <ConfigItem label="Jury-Trial Waiver" value={legalEntitySettings.optionalModules.juryTrialWaiver.enabled ? 'ENABLED' : 'Disabled'} />
          <p className="mt-2 text-xs text-red-600">
            {legalEntitySettings.optionalModules.arbitration.notice}
          </p>
        </ConfigSection>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wide text-gold-600">Policy Version Control</h3>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-ink-900/10">
                  <th className="py-2 pr-4 text-left font-medium text-ink-700">Policy</th>
                  <th className="py-2 px-3 text-left font-medium text-ink-700">Status</th>
                  <th className="py-2 px-3 text-left font-medium text-ink-700">Version</th>
                  <th className="py-2 px-3 text-left font-medium text-ink-700">Effective Date</th>
                  <th className="py-2 px-3 text-left font-medium text-ink-700">Last Updated</th>
                </tr>
              </thead>
              <tbody>
                {legalEntitySettings.policyVersions.map((p) => (
                  <tr key={p.slug} className="border-b border-ink-900/5">
                    <td className="py-2 pr-4">
                      <Link to={`/legal/${p.slug}`} className="text-ink-900 hover:text-gold-600 underline">
                        {p.title}
                      </Link>
                    </td>
                    <td className="py-2 px-3">
                      <span className={`inline-block rounded-full px-2.5 py-1 text-xs font-medium ${statusColors[p.status] ?? 'bg-gray-100 text-gray-700'}`}>
                        {p.status.replace(/_/g, ' ')}
                      </span>
                    </td>
                    <td className="py-2 px-3 text-ink-700">{p.version}</td>
                    <td className="py-2 px-3 text-ink-700">{p.effectiveDate}</td>
                    <td className="py-2 px-3 text-ink-700">{p.lastUpdated}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function CatalogAdminView() {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<any | null>(null);

  const load = () => {
    supabase
      .from('wellness_products')
      .select('*')
      .order('sort_order')
      .then(({ data }) => {
        setItems(data || []);
        setLoading(false);
      });
  };

  useEffect(() => { load(); }, []);

  const toggleField = async (id: string, field: string, current: boolean) => {
    await supabase.from('wellness_products').update({ [field]: !current, updated_at: new Date().toISOString() }).eq('id', id);
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, [field]: !current } : i)));
  };

  const saveEdit = async () => {
    if (!editing) return;
    const { id, ...fields } = editing;
    await supabase.from('wellness_products').update({ ...fields, updated_at: new Date().toISOString() }).eq('id', id);
    setEditing(null);
    load();
  };

  if (loading) return <p className="text-ink-500 text-sm">Loading catalog...</p>;

  const grouped = items.reduce<Record<string, any[]>>((acc, item) => {
    const cat = item.category_label || item.category || 'Uncategorized';
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(item);
    return acc;
  }, {});

  return (
    <div>
      <h2 className="text-xl font-semibold text-ink-900 mb-2">Wellness Catalog</h2>
      <p className="text-sm text-ink-600 mb-6">
        Manage product visibility, approvals, and details. Products default to hidden until you set them as visible.
      </p>

      {/* Editing modal */}
      {editing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink-900/50 p-4">
          <div className="w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white rounded-2xl p-6 space-y-4">
            <h3 className="font-display text-lg font-medium text-ink-900">Edit Product</h3>
            <div>
              <label className="label">Name</label>
              <input className="input" value={editing.name} onChange={(e) => setEditing({ ...editing, name: e.target.value })} />
            </div>
            <div>
              <label className="label">Category Label</label>
              <input className="input" value={editing.category_label || ''} onChange={(e) => setEditing({ ...editing, category_label: e.target.value })} />
            </div>
            <div>
              <label className="label">Format</label>
              <input className="input" value={editing.format || ''} onChange={(e) => setEditing({ ...editing, format: e.target.value })} />
            </div>
            <div>
              <label className="label">Description</label>
              <textarea className="input" rows={3} value={editing.description || ''} onChange={(e) => setEditing({ ...editing, description: e.target.value })} />
            </div>
            <div>
              <label className="label">Image URL</label>
              <input className="input" value={editing.image_url || ''} onChange={(e) => setEditing({ ...editing, image_url: e.target.value })} />
            </div>
            <div>
              <label className="label">Sort Order</label>
              <input className="input" type="number" value={editing.sort_order} onChange={(e) => setEditing({ ...editing, sort_order: parseInt(e.target.value) || 0 })} />
            </div>
            <div>
              <label className="label">State Availability</label>
              <input className="input" value={editing.state_availability || 'all'} onChange={(e) => setEditing({ ...editing, state_availability: e.target.value })} placeholder="all, or comma-separated: FL,TX,CA" />
            </div>
            <div>
              <label className="label">Intake URL</label>
              <input className="input" value={editing.intake_url || ''} onChange={(e) => setEditing({ ...editing, intake_url: e.target.value })} />
            </div>
            <div className="flex gap-3 pt-2">
              <button onClick={saveEdit} className="btn-gold flex-1 text-sm">Save</button>
              <button onClick={() => setEditing(null)} className="btn-outline flex-1 text-sm">Cancel</button>
            </div>
          </div>
        </div>
      )}

      {Object.entries(grouped).map(([cat, catItems]) => (
        <div key={cat} className="mb-8">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-500 mb-3">{cat}</h3>
          <div className="space-y-3">
            {catItems.map((item: any) => (
              <div key={item.id} className="flex flex-col sm:flex-row sm:items-center gap-3 rounded-xl border border-ink-900/10 bg-white p-4">
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-ink-900 truncate">{item.name}</p>
                  <p className="text-xs text-ink-500 mt-0.5">{item.format || 'No format'} • Sort: {item.sort_order}</p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <ToggleBtn label="Visible" active={item.visible} onClick={() => toggleField(item.id, 'visible', item.visible)} />
                  <ToggleBtn label="Featured" active={item.featured} onClick={() => toggleField(item.id, 'featured', item.featured)} />
                  <ToggleBtn label="Labs" active={item.labs_required} onClick={() => toggleField(item.id, 'labs_required', item.labs_required)} />
                  <ToggleBtn label="Clinical" active={item.clinical_approved} onClick={() => toggleField(item.id, 'clinical_approved', item.clinical_approved)} />
                  <ToggleBtn label="Pharmacy" active={item.pharmacy_approved} onClick={() => toggleField(item.id, 'pharmacy_approved', item.pharmacy_approved)} />
                  <ToggleBtn label="Merchant" active={item.merchant_approved} onClick={() => toggleField(item.id, 'merchant_approved', item.merchant_approved)} />
                  <ToggleBtn label="Legal" active={item.legal_reviewed} onClick={() => toggleField(item.id, 'legal_reviewed', item.legal_reviewed)} />
                  <button onClick={() => setEditing({ ...item })} className="rounded-full px-3 py-1 text-xs font-medium bg-gold-400/20 text-gold-600 hover:bg-gold-400/30 transition-colors">
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function ToggleBtn({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
        active
          ? 'bg-green-100 text-green-800 hover:bg-green-200'
          : 'bg-ink-100 text-ink-500 hover:bg-ink-200'
      }`}
    >
      {label}: {active ? 'Yes' : 'No'}
    </button>
  );
}

