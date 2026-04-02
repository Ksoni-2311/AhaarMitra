import { useState } from "react";

const Icon = ({ name, className = "" }) => (
  <span className={`material-symbols-outlined ${className}`}>{name}</span>
);

/* ── Reusable accordion section ── */
const Section = ({ icon, title, defaultOpen = false, children }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors text-left"
      >
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500">
            <Icon name={icon} />
          </div>
          <h2 className="text-lg font-bold text-gray-900">{title}</h2>
        </div>
        <Icon
          name="expand_more"
          className={`text-gray-400 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-8 pb-8 pt-2 border-t border-gray-100 space-y-6">
          {children}
        </div>
      )}
    </div>
  );
};

/* ── Info row with Edit button ── */
const InfoRow = ({ label, value }) => (
  <div className="flex items-center justify-between">
    <div>
      <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">{label}</p>
      <p className="text-sm font-semibold text-gray-800">{value}</p>
    </div>
    <button className="text-xs font-bold text-gray-400 hover:text-gray-800 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-all">
      Edit
    </button>
  </div>
);

/* ── Address row ── */
const AddressRow = ({ icon, label, address }) => (
  <div className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 border border-gray-100">
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500">
        <Icon name={icon} className="text-sm" />
      </div>
      <div>
        <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">{label}</p>
        <p className="text-sm font-semibold text-gray-800">{address}</p>
      </div>
    </div>
    <div className="flex gap-4">
      <button className="text-xs font-bold text-gray-400 hover:text-gray-800 transition-colors">Edit</button>
      <button className="text-xs font-bold text-red-400 hover:text-red-600 transition-colors">Delete</button>
    </div>
  </div>
);

/* ── Device row ── */
const DeviceRow = ({ icon, name, meta }) => (
  <div className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 border border-gray-100">
    <div className="flex items-center gap-4">
      <Icon name={icon} className="text-gray-400" />
      <div>
        <p className="text-xs font-bold text-gray-800">{name}</p>
        <p className="text-[10px] text-gray-400 uppercase tracking-tight">{meta}</p>
      </div>
    </div>
    <button className="text-xs font-bold text-red-400 hover:text-red-600 transition-colors px-2">
      Revoke
    </button>
  </div>
);

/* ══════════════════════════════════════
   ROOT
══════════════════════════════════════ */
export default function CustomerAccount18() {
  return (
    <main className="pt-32 pb-20 px-6 max-w-3xl mx-auto w-full">
      {/* Page Header */}
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-black tracking-tight mb-3 text-gray-900">Account Hub</h1>
        <p className="text-gray-400 font-medium">
          Manage your personal details and security preferences.
        </p>
      </header>

      <div className="space-y-4">

        {/* ── Personal Information ── */}
        <Section icon="person" title="Personal Information" defaultOpen={true}>
          <InfoRow label="Full Name" value="Alexandros Rivera" />
          <InfoRow label="Email Address" value="alex.rivera@example.com" />
          <InfoRow label="Phone Number" value="+1 (555) 0123-4567" />
        </Section>

        {/* ── Delivery Addresses ── */}
        <Section icon="location_on" title="Delivery Addresses">
          <div className="space-y-4 pt-2">
            <AddressRow icon="home" label="Home" address="742 Evergreen Terrace, Springfield, IL 62704" />
            <AddressRow icon="business" label="Office" address="1200 Avenue of the Americas, New York, NY 10036" />
            <AddressRow icon="school" label="University" address="3400 North Charles Street, Baltimore, MD 21218" />
            <button className="w-full flex items-center justify-center gap-2 p-4 mt-2 rounded-2xl border border-dashed border-gray-300 text-gray-400 hover:text-gray-700 hover:border-gray-400 bg-gray-50 transition-all">
              <Icon name="add" className="text-sm" />
              <span className="text-xs font-bold uppercase tracking-widest">Add New Address</span>
            </button>
          </div>
        </Section>

        {/* ── Security & Privacy ── */}
        <Section icon="security" title="Security & Privacy">
          {/* 2FA */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="vibration" className="text-amber-500" />
              <div>
                <p className="text-sm font-bold text-gray-800">Two-Factor Authentication</p>
                <p className="text-xs text-gray-400">Add an extra layer of security to your account.</p>
              </div>
            </div>
            <button className="px-4 py-2 rounded-lg bg-amber-50 text-amber-600 text-xs font-bold border border-amber-200 hover:bg-amber-100 transition-colors">
              Enable
            </button>
          </div>

          {/* Linked Devices */}
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4">
              Linked Devices
            </p>
            <div className="space-y-4">
              <DeviceRow icon="laptop_mac" name='MacBook Pro 14"' meta="San Francisco, US • Current" />
              <DeviceRow icon="smartphone" name="iPhone 15 Pro" meta="San Francisco, US • 2 hours ago" />
            </div>
          </div>
        </Section>

        {/* ── Payment Methods ── */}
        <Section icon="payments" title="Payment Methods">
          <div className="space-y-4 pt-2">
            <div className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-8 rounded-md bg-gray-200 flex items-center justify-center text-[10px] font-black text-gray-600">
                  VISA
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800">•••• •••• •••• 4242</p>
                  <p className="text-[10px] text-gray-400">Expires 12/26</p>
                </div>
              </div>
              <div className="flex gap-4">
                <button className="text-xs font-bold text-gray-400 hover:text-gray-800 transition-colors">Edit</button>
                <button className="text-xs font-bold text-red-400 hover:text-red-600 transition-colors">Remove</button>
              </div>
            </div>
            <button className="w-full flex items-center justify-center gap-2 p-4 rounded-2xl border border-dashed border-gray-300 text-gray-400 hover:text-gray-700 hover:border-gray-400 transition-all">
              <Icon name="add" className="text-sm" />
              <span className="text-xs font-bold uppercase tracking-widest">Add New Payment Method</span>
            </button>
          </div>
        </Section>

      </div>

      {/* Sign Out */}
      <div className="mt-12 flex justify-center">
        <button className="text-gray-300 hover:text-red-500 transition-colors text-xs font-bold uppercase tracking-widest flex items-center gap-2">
          <Icon name="logout" className="text-sm" />
          Sign Out of All Sessions
        </button>
      </div>
    </main>
  );
}
