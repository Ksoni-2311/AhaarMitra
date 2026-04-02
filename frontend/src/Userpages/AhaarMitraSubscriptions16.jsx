import { useState } from "react";

/* ─── Global Styles: Poppins + Material Symbols ─── */
const GlobalStyles = () => (
  <>
    {/* <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
      rel="stylesheet"
    /> */}
    <style>{`
      .material-symbols-outlined {
        font-weight: normal;
        font-style: normal;
        font-size: 24px;
        line-height: 1;
        letter-spacing: normal;
        text-transform: none;
        display: inline-block;
        white-space: nowrap;
        word-wrap: normal;
        direction: ltr;
        font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        user-select: none;
      }
      .subscription-card {
        transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
      }
      .subscription-card:hover {
        border-color: rgba(0,0,0,0.18) !important;
        box-shadow: 0 8px 32px rgba(0,0,0,0.07);
      }
      ::-webkit-scrollbar { width: 6px; }
      ::-webkit-scrollbar-track { background: transparent; }
      ::-webkit-scrollbar-thumb { background: #e5e5e5; border-radius: 10px; }
      ::-webkit-scrollbar-thumb:hover { background: #d4d4d4; }
    `}</style>
  </>
);

/* ─── Icon helper ─── */
const Icon = ({ name, className = "" }) => (
  <span className={`material-symbols-outlined ${className}`}>{name}</span>
);

/* ══════════════════════════════════════
   NAVBAR
══════════════════════════════════════ */
const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm h-20 px-6 md:px-12 flex justify-between items-center">
    <div className="text-2xl font-black text-gray-900 tracking-tighter">AhaarMitra</div>

    <div className="hidden md:flex items-center gap-8 font-bold tracking-tight">
      <a className="text-gray-400 hover:text-gray-900 transition-colors" href="#">Explore</a>
      <a className="text-gray-900 border-b-2 border-gray-900 pb-1" href="#">Subscriptions</a>
      <a className="text-gray-400 hover:text-gray-900 transition-colors" href="#">Orders</a>
      <a className="text-gray-400 hover:text-gray-900 transition-colors" href="#">Support</a>
    </div>

    <div className="flex items-center gap-6">
      <div className="relative flex items-center bg-gray-100 rounded-full px-4 py-2 border border-gray-200">
        <Icon name="search" className="text-gray-400 mr-2 text-xl" />
        <input
          className="bg-transparent border-none outline-none focus:ring-0 text-sm text-gray-700 w-48 placeholder:text-gray-400"
          placeholder="Search subscriptions..."
          type="text"
        />
      </div>
      <button className="text-gray-400 hover:text-gray-700 transition-all duration-300">
        <Icon name="notifications" />
      </button>
      <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-200">
        <img
          alt="User Profile"
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxDgB08kbHg4r0zUnel6GttGO-S_WADO-w39rZhmkQPeD79HasHrKA8oAcSftvGzC6oWsZv-3hHotK2rfgbjdQNkZqMa5FcXsDbZVFCEQoVtQ9a9zpeEfUxTW7eCHzfCeQaPfJ-PMY2ndmRCjf77328Z85PdHaoAjLcdRd3RFFqiwQAApTNkhBXUhMa453XBrKR-JtM3zUmkov1Nmp9X9J_3nspx3uueROaIDFzZhSepvqDnuU7HJlfrQcZiHVxo0o5fvUwKLJ2v7y"
        />
      </div>
    </div>
  </nav>
);

/* ══════════════════════════════════════
   SUBSCRIPTION CARD
══════════════════════════════════════ */
const SubscriptionCard = ({
  vendorName,
  planLabel,
  daysRemaining,
  vendorImg,
  vendorIcon,
  nextDelivery,
  mealIcon,
  mealLabel,
  budget,
  actions,
}) => (
  <div className="subscription-card bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
    <div className="p-8">
      {/* Header row */}
      <div className="flex flex-wrap justify-between items-start gap-4 mb-8">
        <div className="flex gap-4">
          <div className="w-16 h-16 rounded-xl overflow-hidden border border-gray-200 bg-gray-100 flex items-center justify-center shrink-0">
            {vendorImg ? (
              <img alt="Vendor" className="w-full h-full object-cover" src={vendorImg} />
            ) : (
              <Icon name={vendorIcon} className="text-3xl text-gray-300" />
            )}
          </div>
          <div>
            <h3 className="text-2xl font-black mb-1 text-gray-900">{vendorName}</h3>
            <div className="flex items-center gap-3">
              <span className="bg-green-50 text-green-600 px-2.5 py-0.5 rounded text-[10px] font-black uppercase tracking-widest border border-green-200">
                Active
              </span>
              <span className="text-gray-400 text-xs font-bold uppercase tracking-wider">{planLabel}</span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-3xl font-black text-gray-900">
            {daysRemaining}{" "}
            <span className="text-sm text-gray-400 uppercase tracking-widest">Days</span>
          </div>
          <div className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Remaining</div>
        </div>
      </div>

      {/* Info row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 py-6 border-y border-gray-100">
        <div>
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">Next Delivery</span>
          <div className="flex items-center gap-2">
            <Icon name="calendar_today" className="text-amber-500 text-lg" />
            <span className="font-bold text-sm text-gray-800">{nextDelivery}</span>
          </div>
        </div>
        <div>
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">Included Meals</span>
          <div className="flex items-center gap-2">
            <Icon name={mealIcon} className="text-amber-500 text-lg" />
            <span className="font-bold text-sm text-gray-800">{mealLabel}</span>
          </div>
        </div>
        <div>
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">Daily Budget</span>
          <div className="flex items-center gap-2">
            <Icon name="payments" className="text-amber-500 text-lg" />
            <span className="font-bold text-sm text-gray-800">{budget}</span>
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex flex-wrap gap-3">
        {actions.map((action, i) =>
          action.primary ? (
            <button
              key={i}
              className="flex-1 min-w-[120px] py-3 rounded-xl bg-gray-900 text-white text-[11px] font-black uppercase tracking-widest hover:bg-gray-700 transition-colors flex items-center justify-center gap-2"
            >
              <Icon name={action.icon} className="text-lg" />
              {action.label}
            </button>
          ) : (
            <button
              key={i}
              className="flex-1 min-w-[120px] py-3 rounded-xl border border-gray-200 text-[11px] font-black uppercase tracking-widest hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 text-gray-500"
            >
              <Icon name={action.icon} className="text-lg" />
              {action.label}
            </button>
          )
        )}
      </div>
    </div>
  </div>
);

/* ══════════════════════════════════════
   VENDOR SPECIAL PERKS
══════════════════════════════════════ */
const perks = [
  {
    icon: "schedule",
    title: "1-hour cancellation",
    desc: "Cancel last minute without charges.",
  },
  {
    icon: "distance",
    title: "No-contact delivery",
    desc: "Doorstep hygiene protocols.",
  },
  {
    icon: "calendar_today",
    title: "Renewal Priority",
    desc: "Early bird slots for renewing users.",
  },
];

const VendorPerks = () => (
  <section className="pt-8">
    <h2 className="text-xl font-bold mb-6 text-gray-900">Vendor Special Perks</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {perks.map((perk, i) => (
        <div
          key={i}
          className="bg-gray-50 p-5 rounded-xl border border-gray-100 flex items-start gap-4"
        >
          <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center shrink-0 text-amber-500">
            <Icon name={perk.icon} />
          </div>
          <div>
            <h4 className="font-bold text-sm mb-1 text-gray-800">{perk.title}</h4>
            <p className="text-[11px] text-gray-400 font-medium leading-relaxed">{perk.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

/* ══════════════════════════════════════
   SIDEBAR
══════════════════════════════════════ */
const Sidebar = () => (
  <div className="sticky top-28 space-y-6">
    {/* Subscription Summary */}
    <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
      <h3 className="text-lg font-bold mb-6 text-gray-900">Subscription Summary</h3>
      <div className="space-y-6">
        <div className="flex justify-between items-center pb-4 border-b border-gray-100">
          <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">Active Plans</span>
          <span className="text-xl font-black text-gray-900">2</span>
        </div>
        <div className="flex justify-between items-center pb-4 border-b border-gray-100">
          <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">Total Monthly Spend</span>
          <span className="text-xl font-black text-gray-900">₹4,650</span>
        </div>
        <div className="space-y-4">
          <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] block">
            Upcoming Renewals
          </span>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">Shree Tiffin</span>
            <span className="font-bold text-gray-800">May 24</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">Morning Brews</span>
            <span className="font-bold text-gray-800">May 16</span>
          </div>
        </div>
      </div>
    </div>

    {/* Payment & Billing */}
    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
          Payment &amp; Billing
        </span>
        <Icon name="account_balance_wallet" className="text-gray-400" />
      </div>
      <div className="mb-6">
        <span className="block text-[11px] text-gray-400 font-medium mb-1">Next Billing Date</span>
        <h3 className="text-2xl font-black text-gray-900">May 16, 2024</h3>
      </div>
      <div className="space-y-3">
        <button className="w-full py-3 bg-gray-900 text-white text-[10px] font-black uppercase tracking-widest rounded-lg hover:bg-gray-700 transition-colors">
          Manage Payment Methods
        </button>
        <button className="w-full py-3 border border-gray-200 text-gray-500 text-[10px] font-black uppercase tracking-widest rounded-lg hover:bg-gray-100 transition-colors">
          Download Last Invoice
        </button>
      </div>
    </div>

    {/* Concierge Support */}
    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
      <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">
        Concierge Support
      </h3>
      <div className="space-y-4">
        <a className="flex items-center gap-4 group cursor-pointer" href="#">
          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
            <Icon name="support_agent" className="text-sm text-gray-500" />
          </div>
          <div>
            <span className="block text-xs text-gray-400 font-bold">24/7 Priority</span>
            <span className="text-sm font-bold text-gray-800">Live Chat Support</span>
          </div>
        </a>
      </div>
    </div>
  </div>
);

/* ══════════════════════════════════════
   FOOTER
══════════════════════════════════════ */
const Footer = () => (
  <footer className="w-full py-12 px-6 md:px-12 mt-auto border-t border-gray-200 bg-gray-50">
    <div className="grid grid-cols-2 md:grid-cols-4 items-start gap-8 w-full max-w-7xl mx-auto">
      <div className="flex flex-col gap-4">
        <div className="text-lg font-bold text-gray-900">AhaarMitra</div>
        <p className="text-xs text-gray-400 uppercase tracking-widest leading-relaxed">
          The Premium Digital Hearth for Modern Nutrition.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <h4 className="text-gray-700 text-xs font-bold uppercase tracking-widest mb-2">Legal</h4>
        <a className="text-gray-400 hover:text-gray-800 transition-colors text-xs font-medium uppercase tracking-widest" href="#">Privacy Policy</a>
        <a className="text-gray-400 hover:text-gray-800 transition-colors text-xs font-medium uppercase tracking-widest" href="#">Terms of Service</a>
      </div>
      <div className="flex flex-col gap-3">
        <h4 className="text-gray-700 text-xs font-bold uppercase tracking-widest mb-2">Support</h4>
        <a className="text-gray-400 hover:text-gray-800 transition-colors text-xs font-medium uppercase tracking-widest" href="#">Contact Support</a>
        <a className="text-gray-400 hover:text-gray-800 transition-colors text-xs font-medium uppercase tracking-widest" href="#">Partner with Us</a>
      </div>
      <div className="flex flex-col gap-4 items-end">
        <div className="flex gap-4">
          <Icon name="brand_awareness" className="text-gray-300 hover:text-gray-700 cursor-pointer transition-colors" />
          <Icon name="share" className="text-gray-300 hover:text-gray-700 cursor-pointer transition-colors" />
          <Icon name="public" className="text-gray-300 hover:text-gray-700 cursor-pointer transition-colors" />
        </div>
        <div className="text-gray-400 text-[10px] font-medium uppercase tracking-widest text-right">
          © 2024 AhaarMitra Editorial. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
);

/* ══════════════════════════════════════
   DATA
══════════════════════════════════════ */
const subscriptions = [
  {
    vendorName: "Shree Tiffin Services",
    planLabel: "Premium Monthly Plan",
    daysRemaining: 12,
    vendorImg:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDMBmIchnkIkoQGR77HPKNPe8Mi87AWVXdlxtSOo0_aqUzxSiao8g8wNuB6MLnue5hBiJqoCqYqYf_QwyAx8srHTmiWQLzDoSpBgjo79alSoDbXQZ1BxnJSwyVy8He4b-CbkpWuTgncU4YcUKtpcr-pZOyPo1hbVYNmqrmfArc3zZZuFPXAiqx6A5bpLRmZEtfGqskXEk_ur5KQcptvlknPuRIA86F4SmByElS4qXuo1rcrzcBC2SHCGJ1fTtaHQtFIc92CaW3sgiyX",
    nextDelivery: "Tomorrow, 12:30 PM",
    mealIcon: "restaurant",
    mealLabel: "Lunch & Dinner",
    budget: "₹90 / Day",
    actions: [
      { icon: "chat", label: "Contact Vendor" },
      { icon: "swap_horiz", label: "Change Plan" },
      { icon: "autorenew", label: "Renew Plan", primary: true },
    ],
  },
  {
    vendorName: "Morning Brews & Bakes",
    planLabel: "Breakfast Weekly Plan",
    daysRemaining: 4,
    vendorIcon: "local_cafe",
    nextDelivery: "Tomorrow, 08:00 AM",
    mealIcon: "bakery_dining",
    mealLabel: "Breakfast",
    budget: "₹65 / Day",
    actions: [
      { icon: "call", label: "Contact Vendor" },
      { icon: "upgrade", label: "Upgrade Plan" },
      { icon: "autorenew", label: "Renew Plan", primary: true },
    ],
  },
];

/* ══════════════════════════════════════
   ROOT
══════════════════════════════════════ */
export default function AhaarMitraSubscriptions() {
  return (
    <div className="antialiased min-h-screen flex flex-col bg-white text-gray-900">
      {/* <GlobalStyles /> */}
      {/* <Navbar /> */}

      <main className="pt-24 pb-20 px-6 md:px-12 max-w-7xl mx-auto w-full">
        {/* Page header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-gray-900">
            Your Subscriptions
          </h1>
          <p className="text-gray-400 font-medium">
            Manage your active plans, meal timings, and vendor preferences.
          </p>
        </header>

        <div className="grid grid-cols-12 gap-8">
          {/* Left column */}
          <div className="col-span-12 lg:col-span-8 space-y-8">
            {/* Section heading */}
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold flex items-center gap-2 text-gray-900">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse inline-block" />
                Active Services (2)
              </h2>
              <button className="text-xs font-black uppercase tracking-widest text-gray-400 hover:text-gray-700 transition-colors">
                View Past Plans
              </button>
            </div>

            {/* Subscription cards */}
            {subscriptions.map((sub, i) => (
              <SubscriptionCard key={i} {...sub} />
            ))}

            {/* Perks */}
            <VendorPerks />
          </div>

          {/* Right sidebar */}
          <div className="col-span-12 lg:col-span-4">
            <Sidebar />
          </div>
        </div>
      </main>

      {/* <Footer /> */}
    </div>
  );
}
