import { useState } from "react";

const PROFILE_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBxDgB08kbHg4r0zUnel6GttGO-S_WADO-w39rZhmkQPeD79HasHrKA8oAcSftvGzC6oWsZv-3hHotK2rfgbjdQNkZqMa5FcXsDbZVFCEQoVtQ9a9zpeEfUxTW7eCHzfCeQaPfJ-PMY2ndmRCjf77328Z85PdHaoAjLcdRd3RFFqiwQAApTNkhBXUhMa453XBrKR-JtM3zUmkov1Nmp9X9J_3nspx3uueROaIDFzZhSepvqDnuU7HJlfrQcZiHVxo0o5fvUwKLJ2v7y";

/* ── Tiny Material Symbol wrapper ── */
function Icon({ name, className = "" }) {
  return (
    <span
      className={`material-symbols-outlined select-none ${className}`}
      style={{ fontVariationSettings: "'FILL' 0,'wght' 400,'GRAD' 0,'opsz' 24" }}
    >
      {name}
    </span>
  );
}

/* ── Sidebar tab button ── */
function TabBtn({ id, icon, label, active, onClick }) {
  return (
    <button
      onClick={() => onClick(id)}
      className={`w-full flex items-center gap-4 p-4 rounded-2xl border transition-all text-left
        ${active
          ? "bg-zinc-900 border-zinc-800 text-white shadow-lg"
          : "border-transparent text-zinc-500 hover:bg-zinc-100 hover:text-zinc-800"
        }`}
    >
      <div
        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors flex-shrink-0
          ${active ? "bg-white text-zinc-900" : "bg-zinc-100 text-zinc-400"}`}
      >
        <Icon name={icon} />
      </div>
      <span className="font-bold tracking-tight">{label}</span>
    </button>
  );
}

/* ── Info row with Edit button ── */
function InfoRow({ label, value }) {
  return (
    <div className="flex items-center justify-between py-1">
      <div>
        <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-1">{label}</p>
        <p className="text-sm font-semibold text-zinc-800">{value}</p>
      </div>
      <button className="text-xs font-bold text-zinc-400 hover:text-zinc-900 px-4 py-2 rounded-lg bg-zinc-100 hover:bg-zinc-200 transition-all">
        Edit
      </button>
    </div>
  );
}

/* ── Address card ── */
function AddressCard({ icon, label, address }) {
  return (
    <div className="flex items-center justify-between p-4 rounded-2xl bg-zinc-50 border border-zinc-200">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-400">
          <Icon name={icon} className="text-sm" />
        </div>
        <div>
          <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-1">{label}</p>
          <p className="text-sm font-semibold text-zinc-800">{address}</p>
        </div>
      </div>
      <div className="flex gap-4">
        <button className="text-xs font-bold text-zinc-400 hover:text-zinc-800 transition-colors">Edit</button>
        <button className="text-xs font-bold text-red-400 hover:text-red-600 transition-colors">Delete</button>
      </div>
    </div>
  );
}

/* ── Tab panels ── */
function PersonalTab() {
  return (
    <div className="p-8 space-y-8">
      <h3 className="text-xl font-bold text-zinc-900 mb-6">Personal Information</h3>
      <div className="space-y-6 divide-y divide-zinc-100">
        <InfoRow label="Full Name" value="Alexandros Rivera" />
        <div className="pt-6">
          <InfoRow label="Email Address" value="alex.rivera@email.com" />
        </div>
        <div className="pt-6">
          <InfoRow label="Phone Number" value="+1 (555) 0123-4567" />
        </div>
      </div>
    </div>
  );
}

function DeliveryTab() {
  return (
    <div className="p-8 space-y-4">
      <h3 className="text-xl font-bold text-zinc-900 mb-6">Delivery Addresses</h3>
      <AddressCard icon="home" label="Home" address="742 Evergreen Terrace, Springfield, IL 62704" />
      <AddressCard icon="business" label="Office" address="1200 Avenue of the Americas, New York, NY 10036" />
      <button className="w-full flex items-center justify-center gap-2 p-4 mt-2 rounded-2xl border border-dashed border-zinc-300 text-zinc-400 hover:text-zinc-700 hover:border-zinc-400 bg-zinc-50 transition-all">
        <Icon name="add" className="text-sm" />
        <span className="text-xs font-bold uppercase tracking-widest">Add New Address</span>
      </button>
    </div>
  );
}

function SecurityTab() {
  return (
    <div className="p-8 space-y-8">
      <h3 className="text-xl font-bold text-zinc-900 mb-6">Security &amp; Privacy</h3>
      {/* 2FA */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Icon name="vibration" className="text-amber-500" />
          <div>
            <p className="text-sm font-bold text-zinc-800">Two-Factor Authentication</p>
            <p className="text-xs text-zinc-400">Add an extra layer of security to your account.</p>
          </div>
        </div>
        <button className="px-4 py-2 rounded-lg bg-amber-50 text-amber-600 text-xs font-bold border border-amber-200 hover:bg-amber-100 transition-all">
          Enable
        </button>
      </div>
      {/* Linked devices */}
      <div>
        <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-4">Linked Devices</p>
        <div className="flex items-center justify-between p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
          <div className="flex items-center gap-4">
            <Icon name="laptop_mac" className="text-zinc-400" />
            <div>
              <p className="text-xs font-bold text-zinc-800">MacBook Pro 14"</p>
              <p className="text-[10px] text-zinc-400 uppercase tracking-tight">San Francisco, US • Current</p>
            </div>
          </div>
          <button className="text-xs font-bold text-red-400 hover:text-red-600 transition-colors px-2">Revoke</button>
        </div>
      </div>
    </div>
  );
}

function PaymentTab() {
  return (
    <div className="p-8 space-y-4">
      <h3 className="text-xl font-bold text-zinc-900 mb-6">Payment Methods</h3>
      <div className="flex items-center justify-between p-4 rounded-2xl bg-zinc-50 border border-zinc-200">
        <div className="flex items-center gap-4">
          <div className="w-12 h-8 rounded-md bg-zinc-200 flex items-center justify-center text-[10px] font-black text-zinc-700">
            VISA
          </div>
          <div>
            <p className="text-sm font-bold text-zinc-800">•••• •••• •••• 4242</p>
            <p className="text-[10px] text-zinc-400">Expires 12/26</p>
          </div>
        </div>
        <div className="flex gap-4">
          <button className="text-xs font-bold text-zinc-400 hover:text-zinc-800 transition-colors">Edit</button>
          <button className="text-xs font-bold text-red-400 hover:text-red-600 transition-colors">Remove</button>
        </div>
      </div>
      <button className="w-full flex items-center justify-center gap-2 p-4 rounded-2xl border border-dashed border-zinc-300 text-zinc-400 hover:text-zinc-700 hover:border-zinc-400 transition-all">
        <Icon name="add" className="text-sm" />
        <span className="text-xs font-bold uppercase tracking-widest">Add Payment Method</span>
      </button>
    </div>
  );
}

const TABS = [
  { id: "personal", icon: "person", label: "Personal Info" },
  { id: "delivery", icon: "location_on", label: "Addresses" },
  { id: "security", icon: "security", label: "Security" },
  { id: "payment", icon: "payments", label: "Payments" },
];

const TAB_PANELS = {
  personal: <PersonalTab />,
  delivery: <DeliveryTab />,
  security: <SecurityTab />,
  payment: <PaymentTab />,
};

/* ══════════════════════════════
   Main Component
══════════════════════════════ */
export default function CustomerAccount18() {
  const [activeTab, setActiveTab] = useState("personal");

  return (
    <>
      {/* Google Fonts */}
      {/* <link
        href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        rel="stylesheet"
      /> */}

      <div
        className="min-h-screen flex flex-col antialiased"
        style={{ backgroundColor: "#f8f8f8", color: "#0a0a0a" }}
      >

        {/* ── Main ── */}
        <main className="pt-24 pb-20 px-6 max-w-5xl mx-auto w-full">
          {/* Page header */}
          <header className="mb-12 text-center">
            <h1 className="text-4xl font-black tracking-tight mb-3 text-zinc-900">Account Hub</h1>
            <p className="text-zinc-400 font-medium">Manage your personal details and security preferences.</p>
          </header>

          {/* Profile card */}
          <div className="bg-white border border-zinc-200 rounded-[2rem] p-8 mb-8 flex items-center gap-8 shadow-sm">
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-zinc-200 flex-shrink-0">
              <img alt="User Profile large" className="w-full h-full object-cover" src={PROFILE_IMG} />
            </div>
            <div className="flex flex-col">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-1">Welcome back,</p>
              <h2 className="text-3xl font-black tracking-tight text-zinc-900">Alexandros Rivera</h2>
              <p className="text-sm text-zinc-400 font-medium">Member since November 2023</p>
            </div>
          </div>

          {/* Tabs layout */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Sidebar */}
            <aside className="w-full md:w-72 flex-shrink-0 space-y-2 h-fit max-h-[400px]">
              {TABS.map((tab) => (
                <TabBtn
                  key={tab.id}
                  id={tab.id}
                  icon={tab.icon}
                  label={tab.label}
                  active={activeTab === tab.id}
                  onClick={setActiveTab}
                />
              ))}

              <div className="pt-8 px-4">
                <button className="text-zinc-300 hover:text-red-500 transition-colors text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                  <Icon name="logout" className="text-sm" />
                  Sign Out
                </button>
              </div>
            </aside>

            {/* Content panel */}
            <div className="flex-grow bg-white border border-zinc-200 rounded-[2rem] overflow-hidden min-h-[400px] shadow-sm">
              {TAB_PANELS[activeTab]}
            </div>
          </div>
        </main>

        {/* ── Footer ── */}
        {/* <footer className="w-full py-12 px-12 mt-auto border-t border-zinc-200 bg-white">
          <div className="grid grid-cols-2 md:grid-cols-4 items-start gap-8 w-full max-w-7xl mx-auto">
            <div className="flex flex-col gap-4">
              <div className="text-lg font-bold text-zinc-900">AhaarMitra</div>
              <p className="text-xs text-zinc-400 uppercase tracking-widest leading-relaxed">
                The Premium Digital Hearth for Modern Nutrition.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="text-zinc-900 text-xs font-bold uppercase tracking-widest mb-2">Legal</h4>
              {["Privacy Policy", "Terms of Service"].map((l) => (
                <a key={l} href="#" className="text-zinc-400 hover:text-zinc-900 transition-colors text-xs font-medium uppercase tracking-widest">
                  {l}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="text-zinc-900 text-xs font-bold uppercase tracking-widest mb-2">Support</h4>
              {["Contact Support", "Partner with Us"].map((l) => (
                <a key={l} href="#" className="text-zinc-400 hover:text-zinc-900 transition-colors text-xs font-medium uppercase tracking-widest">
                  {l}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-4 items-end">
              <div className="flex gap-4">
                {["brand_awareness", "share", "public"].map((icon) => (
                  <Icon key={icon} name={icon} className="text-zinc-400 hover:text-zinc-800 cursor-pointer transition-colors" />
                ))}
              </div>
              <div className="text-zinc-400 text-[10px] font-medium uppercase tracking-widest text-right">
                © 2024 AhaarMitra Editorial. All rights reserved.
              </div>
            </div>
          </div>
        </footer> */}
      </div>
    </>
  );
}
