import { useState } from "react";

// ─── Prerequisites ────────────────────────────────────────────────────────────
// Add to your index.html <head>:
// <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"/>
// <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>

// ─── Primitives ───────────────────────────────────────────────────────────────

const Icon = ({ name, className = "" }) => (
  <span
    className={`material-symbols-outlined ${className}`}
    style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}
  >
    {name}
  </span>
);

const WidgetTitle = ({ label, right }) => (
  <div className="flex items-center justify-between mb-4">
    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
      {label}
    </span>
    {right}
  </div>
);

// Coloured left-border revenue card
const RevenueCard = ({ title, icon, iconColor, borderColor, amount, trend, trendUp, subscribers }) => (
  <div
    className={`bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm p-6 border-l-4 ${borderColor}`}
  >
    <WidgetTitle
      label={title}
      right={<Icon name={icon} className={`text-sm ${iconColor}`} />}
    />

    <div className="flex flex-col gap-1 mb-6">
      <div className="text-3xl font-black text-gray-900">{amount}</div>
      <div
        className={`text-[10px] font-bold uppercase tracking-widest flex items-center gap-1 ${
          trendUp ? "text-emerald-500" : "text-rose-500"
        }`}
      >
        <Icon name={trendUp ? "trending_up" : "trending_down"} className="text-sm" />
        {trend}
      </div>
    </div>

    <div className="space-y-3">
      <div className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-2">
        Recent Subscribers
      </div>
      {subscribers.map(({ name, amount: amt }) => (
        <div
          key={name}
          className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100"
        >
          <span className="text-[10px] font-bold text-gray-600 italic">{name}</span>
          <span className="text-xs font-black text-emerald-500">{amt}</span>
        </div>
      ))}
    </div>
  </div>
);

// ─── Revenue Cards data ───────────────────────────────────────────────────────

const revenueCards = [
  {
    title: "Deluxe Thali Revenue",
    icon: "restaurant",
    iconColor: "text-blue-500",
    borderColor: "border-l-blue-500",
    amount: "₹1,24,500",
    trend: "+18.4% this month",
    trendUp: true,
    subscribers: [
      { name: "Rahul Sharma", amount: "₹4,500" },
      { name: "Priya Verma",  amount: "₹4,500" },
      { name: "Amit Singh",   amount: "₹4,500" },
    ],
  },
  {
    title: "Standard Thali Revenue",
    icon: "lunch_dining",
    iconColor: "text-amber-500",
    borderColor: "border-l-amber-500",
    amount: "₹82,300",
    trend: "+5.2% this month",
    trendUp: true,
    subscribers: [
      { name: "Suresh K.",   amount: "₹3,200" },
      { name: "Nisha Rani",  amount: "₹3,200" },
      { name: "Vikram G.",   amount: "₹3,200" },
    ],
  },
  {
    title: "Mini Thali Revenue",
    icon: "bakery_dining",
    iconColor: "text-emerald-500",
    borderColor: "border-l-emerald-500",
    amount: "₹45,150",
    trend: "-2.1% this month",
    trendUp: false,
    subscribers: [
      { name: "Karan Malhotra", amount: "₹1,800" },
      { name: "Deepa J.",       amount: "₹1,800" },
      { name: "Rohan P.",       amount: "₹1,800" },
    ],
  },
];

// ─── Payment table data ───────────────────────────────────────────────────────

const payments = [
  {
    initials: "RS",
    initColor: "bg-blue-100 border-blue-200 text-blue-600",
    name: "Rahul Sharma",
    phone: "+91 98765-43210",
    tel: "+919876543210",
    plan: "Deluxe Thali",
    planColor: "text-blue-500 bg-blue-50",
    date: "Oct 24, 2024",
    time: "14:20 PM",
    txn: "TXN-48293021",
    amount: "₹4,500.00",
    status: "Received",
    alt: false,
  },
  {
    initials: "SK",
    initColor: "bg-amber-100 border-amber-200 text-amber-600",
    name: "Suresh Kumar",
    phone: "+91 99887-76655",
    tel: "+919988776655",
    plan: "Standard Thali",
    planColor: "text-amber-500 bg-amber-50",
    date: "Oct 24, 2024",
    time: "11:05 AM",
    txn: "TXN-48293108",
    amount: "₹3,200.00",
    status: "Received",
    alt: true,
  },
  {
    initials: "KM",
    initColor: "bg-emerald-100 border-emerald-200 text-emerald-600",
    name: "Karan Malhotra",
    phone: "+91 91234-56789",
    tel: "+919123456789",
    plan: "Mini Thali",
    planColor: "text-emerald-500 bg-emerald-50",
    date: "Oct 23, 2024",
    time: "18:45 PM",
    txn: "TXN-48292855",
    amount: "₹1,800.00",
    status: "Received",
    alt: false,
  },
  {
    initials: "PV",
    initColor: "bg-blue-100 border-blue-200 text-blue-600",
    name: "Priya Verma",
    phone: "+91 88776-65544",
    tel: "+918877665544",
    plan: "Deluxe Thali",
    planColor: "text-blue-500 bg-blue-50",
    date: "Oct 23, 2024",
    time: "09:12 AM",
    txn: "TXN-48292412",
    amount: "₹4,500.00",
    status: "Received",
    alt: true,
  },
];

// ─── Subscriber Payment History Table ────────────────────────────────────────

const filters = ["All Meals", "Deluxe", "Standard", "Mini"];

const PaymentTable = () => {
  const [activeFilter, setActiveFilter] = useState("All Meals");

  const filtered = payments.filter((p) => {
    if (activeFilter === "All Meals") return true;
    return p.plan.toLowerCase().includes(activeFilter.toLowerCase());
  });

  return (
    <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
      {/* Header */}
      <div className="p-6 pb-4 border-b border-gray-100">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
            Subscriber Payment History
          </span>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border ${
                  activeFilter === f
                    ? "bg-gray-900 text-white border-gray-900"
                    : "bg-gray-50 text-gray-400 border-gray-200 hover:border-gray-400 hover:text-gray-700"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Table */}
      <div
        className="overflow-y-auto px-6"
        style={{ maxHeight: "1200px" }}
      >
        <table className="w-full border-collapse">
          <thead className="sticky top-0 bg-white z-10">
            <tr className="text-[9px] font-black text-gray-400 uppercase tracking-[0.15em] border-b border-gray-100">
              <th className="py-4 text-left font-black">Subscriber</th>
              <th className="py-4 text-left font-black">Meal Plan</th>
              <th className="py-4 text-left font-black">Payment Date</th>
              <th className="py-4 text-left font-black">Transaction ID</th>
              <th className="py-4 text-left font-black">Amount</th>
              <th className="py-4 text-left font-black">Status</th>
              <th className="py-4" />
            </tr>
          </thead>
          <tbody>
            {filtered.map((p) => (
              <tr
                key={p.txn}
                className={`group transition-colors hover:bg-blue-50/40 ${
                  p.alt ? "bg-gray-50/60" : "bg-transparent"
                }`}
              >
                {/* Subscriber */}
                <td className="py-5">
                  <div className="flex items-center gap-3">
                    <a
                      href="#"
                      className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${p.initColor} hover:bg-blue-100 hover:border-blue-400`}
                    >
                      <span className="text-[10px] font-black">{p.initials}</span>
                    </a>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-gray-800">{p.name}</span>
                      <a
                        href={`tel:${p.tel}`}
                        className="text-[10px] text-blue-500 hover:text-blue-400 flex items-center gap-1 transition-colors font-semibold"
                      >
                        <Icon name="phone_in_talk" className="text-[14px]" />
                        {p.phone}
                      </a>
                    </div>
                  </div>
                </td>

                {/* Meal Plan */}
                <td className="py-5">
                  <span className={`text-[10px] font-black uppercase px-2 py-1 rounded ${p.planColor}`}>
                    {p.plan}
                  </span>
                </td>

                {/* Date */}
                <td className="py-5">
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-gray-800">{p.date}</span>
                    <span className="text-[9px] text-gray-400">{p.time}</span>
                  </div>
                </td>

                {/* TXN ID */}
                <td className="py-5">
                  <div className="inline-block px-3 py-1.5 rounded bg-gray-100 border border-gray-200">
                    <span className="text-[10px] font-extrabold text-gray-700 tracking-wider">
                      {p.txn}
                    </span>
                  </div>
                </td>

                {/* Amount */}
                <td className="py-5">
                  <span className="text-xs font-black text-emerald-500">{p.amount}</span>
                </td>

                {/* Status */}
                <td className="py-5">
                  <span className="px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest bg-emerald-50 text-emerald-600 border border-emerald-200">
                    {p.status}
                  </span>
                </td>

                {/* Receipt */}
                <td className="py-5 text-right px-4">
                  <Icon
                    name="receipt_long"
                    className="text-gray-300 hover:text-gray-700 cursor-pointer transition-colors"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="p-6 border-t border-gray-100 bg-gray-50">
        <div className="flex items-center justify-between">
          <div className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.1em]">
            End of payment history records
          </div>
          <button className="px-3 py-1 bg-white border border-gray-200 rounded-lg text-[10px] font-bold text-gray-700 hover:bg-gray-100 transition-all flex items-center gap-2 shadow-sm">
            Download Report
            <Icon name="download" className="text-xs" />
          </button>
        </div>
      </div>
    </div>
  );
};

// ─── Main Dashboard ───────────────────────────────────────────────────────────

export default function VendorFinance8() {
  return (
    <div
      className="antialiased overflow-x-hidden min-h-screen bg-gray-50"
      style={{ fontFamily: "'Manrope', sans-serif" }}
    >
      {/* Dot-grid background */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, rgba(0,0,0,0.04) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <header className="w-full pt-8 pb-6 px-12 flex justify-between items-center border-b border-gray-100 bg-white/80 backdrop-blur-xl sticky top-0 z-50">
        {/* Logo */}
        <div className="inline-block shrink-0">
          <div className="text-2xl font-black text-gray-900 tracking-tighter uppercase">
            AhaarMitra
          </div>
          <div className="h-0.5 w-full bg-gradient-to-r from-blue-500 to-transparent" />
        </div>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {["Dashboard", "Order History", "Services", "Subscriber", "Finance"].map(
            (item) => (
              <a
                key={item}
                href="#"
                className={`text-[11px] font-black uppercase tracking-widest transition-colors ${
                  item === "Finance"
                    ? "text-gray-900 border-b-2 border-gray-300 pb-1"
                    : "text-gray-400 hover:text-gray-900"
                }`}
              >
                {item}
              </a>
            )
          )}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-6 shrink-0">
          {/* Notification bell */}
          <button className="relative text-gray-400 hover:text-gray-700 transition-colors flex items-center justify-center">
            <Icon name="notifications" className="text-xl" />
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-blue-500 ring-2 ring-white" />
          </button>

          {/* Avatar */}
          <a
            href="#"
            className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-200 bg-gray-100 hover:bg-blue-100 hover:border-blue-400 transition-all duration-300"
          >
            <span className="text-[10px] font-black text-gray-600">AM</span>
          </a>
        </div>
      </header>

      {/* ── Main ───────────────────────────────────────────────────────────── */}
      <main className="max-w-7xl mx-auto p-6 md:p-12 relative">
        {/* Page title */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 mb-4">
            Meal{" "}
            <span
              className="text-blue-600"
              style={{ textShadow: "0 0 20px rgba(59,130,246,0.25)" }}
            >
              Insights.
            </span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl">
            Track revenue performance and subscriber trends across your meal products.
          </p>
        </div>

        {/* Revenue cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {revenueCards.map((card) => (
            <RevenueCard key={card.title} {...card} />
          ))}
        </div>

        {/* Payment history table */}
        <PaymentTable />
      </main>

      {/* ── Footer ─────────────────────────────────────────────────────────── */}
      <footer className="w-full py-10 px-12 border-t border-gray-100 bg-white/60 backdrop-blur-sm mt-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-8">
            {["Privacy Policy", "Terms of Service", "Support Portal"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-gray-400 hover:text-gray-800 transition-colors text-[10px] font-bold uppercase tracking-widest"
              >
                {link}
              </a>
            ))}
          </div>
          <div className="text-gray-400 text-[10px] font-medium uppercase tracking-[0.2em]">
            © 2024 AHAARMITRA ANALYTICS. PRECISION IN SERVICE MANAGEMENT.
          </div>
        </div>
      </footer>
    </div>
  );
}
