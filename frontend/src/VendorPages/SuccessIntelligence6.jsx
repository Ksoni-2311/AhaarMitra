import { useState } from "react";
import VendorNavBar from "../components/VendorNavBar";

/* ── Global Styles ─────────────────────────────────────────────────────────── */
const G = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800;900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
    *, *::before, *::after { box-sizing: border-box; font-family: 'Manrope', sans-serif; }
    .ms { font-family: 'Material Symbols Outlined'; font-variation-settings: 'FILL' 0,'wght' 400,'GRAD' 0,'opsz' 24; line-height:1; user-select:none; }
    .ms-fill { font-family: 'Material Symbols Outlined'; font-variation-settings: 'FILL' 1,'wght' 400,'GRAD' 0,'opsz' 24; line-height:1; user-select:none; }
    .scrollbar-thin::-webkit-scrollbar{width:4px}
    .scrollbar-thin::-webkit-scrollbar-track{background:#f1f5f9;border-radius:8px}
    .scrollbar-thin::-webkit-scrollbar-thumb{background:#cbd5e1;border-radius:8px}
    .sidebar-scroll::-webkit-scrollbar{width:0px}
    .score-ring { background: conic-gradient(#3b82f6 0% 82%, #e2e8f0 82% 100%); }
    .progress-bar-fill { background: linear-gradient(90deg, #3b82f6 0%, #60a5fa 100%); }
    .dot-grid {
      background-image: radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px);
      background-size: 28px 28px;
    }
  `}</style>
);

/* ── DATA ──────────────────────────────────────────────────────────────────── */
const SUBSCRIBERS = [
  { id: "RK", name: "Rajesh Kumar",  code: "#9401-K", score: 82, color: "bg-blue-600" },
  { id: "SR", name: "Sneha Reddy",   code: "#9305-R", score: 94, color: "bg-emerald-600" },
  { id: "AS", name: "Amit Sharma",   code: "#9388-S", score: 56, color: "bg-violet-600" },
];

const ORDERS = [
  { id: "#AM-940101", timeline: "LUNCH",  icon: "wb_sunny",  iconColor: "text-amber-500",  meal: "PREMIUM THALI",  sub: "Paneer Sabzi, Dal Tadka",       date: "OCT 26 • 13:14", status: "DELIVERED",         statusStyle: "bg-emerald-50 text-emerald-600 border-emerald-200", review: 4 },
  { id: "#AM-940099", timeline: "DINNER", icon: "dark_mode", iconColor: "text-purple-500", meal: "HEALTHY FEAST",  sub: "Grilled Veggies, Quinoa",       date: "OCT 25 • 20:30", status: "DELIVERED",         statusStyle: "bg-emerald-50 text-emerald-600 border-emerald-200", review: 4 },
  { id: "#AM-939922", timeline: "LUNCH",  icon: "wb_sunny",  iconColor: "text-amber-500",  meal: "CLASSIC THALI",  sub: "Aloo Jeera, Mix Veg",           date: "OCT 24 • 12:45", status: "CANCELLED BY USER", statusStyle: "bg-rose-50 text-rose-600 border-rose-200",           review: null },
  { id: "#AM-939918", timeline: "DINNER", icon: "dark_mode", iconColor: "text-purple-500", meal: "PREMIUM FEAST",  sub: "Butter Chicken, Naan",          date: "OCT 23 • 20:15", status: "DELIVERED",         statusStyle: "bg-emerald-50 text-emerald-600 border-emerald-200", review: 5 },
  { id: "#AM-939889", timeline: "LUNCH",  icon: "wb_sunny",  iconColor: "text-amber-500",  meal: "CLASSIC THALI",  sub: "Dal Makhani, Roti",             date: "OCT 23 • 13:02", status: "CANCELLED BY VENDOR",statusStyle: "bg-orange-50 text-orange-600 border-orange-200",    review: null, note: "RETRIED" },
  { id: "#AM-939762", timeline: "DINNER", icon: "dark_mode", iconColor: "text-purple-500", meal: "KETO DIET PLAN", sub: "Avocado Salad, Chicken",        date: "OCT 22 • 20:45", status: "DELIVERED",         statusStyle: "bg-emerald-50 text-emerald-600 border-emerald-200", review: 4 },
  { id: "#AM-939769", timeline: "LUNCH",  icon: "wb_sunny",  iconColor: "text-amber-500",  meal: "PREMIUM THALI",  sub: "Shahi Paneer, Pulao",           date: "OCT 22 • 13:08", status: "DELIVERED",         statusStyle: "bg-emerald-50 text-emerald-600 border-emerald-200", review: 4 },
];

/* ── StarRow ───────────────────────────────────────────────────────────────── */
const StarRow = ({ count, max = 5 }) => (
  <div className="flex items-center gap-0.5">
    {Array.from({ length: max }).map((_, i) => (
      <span key={i} className={`text-[13px] ${i < count ? "ms-fill text-amber-400" : "ms text-gray-200"}`}>star</span>
    ))}
  </div>
);

/* ── Score Ring ────────────────────────────────────────────────────────────── */
const ScoreRing = ({ score }) => (
  <div className="flex items-center gap-3 bg-gray-900 rounded-2xl px-5 py-3 shadow-lg">
    <div className="relative w-12 h-12 flex items-center justify-center">
      <div className="score-ring w-12 h-12 rounded-full flex items-center justify-center">
        <div className="w-9 h-9 rounded-full bg-gray-900 flex items-center justify-center">
          <span className="text-white text-sm font-black">{score}</span>
        </div>
      </div>
    </div>
    <div>
      <div className="text-gray-400 text-[9px] font-black uppercase tracking-widest">Score</div>
      <div className="text-white text-sm font-black flex items-center gap-1">
        {score}%
        <span className="ms text-blue-400 text-[14px]">trending_up</span>
      </div>
    </div>
  </div>
);

/* ── Subscriber List Item ──────────────────────────────────────────────────── */
const SubItem = ({ sub, active, onClick }) => {
  const scoreColor = sub.score >= 80 ? "text-emerald-500" : sub.score >= 60 ? "text-amber-500" : "text-rose-500";
  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-4 py-3 rounded-xl flex items-center justify-between transition-all ${
        active ? "bg-blue-600 text-white shadow-md shadow-blue-200" : "hover:bg-gray-100 text-gray-700"
      }`}
    >
      <div>
        <div className={`font-black text-sm ${active ? "text-white" : "text-gray-900"}`}>{sub.name}</div>
        <div className={`text-[10px] font-bold mt-0.5 ${active ? "text-blue-200" : "text-gray-400"}`}>
          {sub.code} •{" "}
          <span className={active ? "text-blue-100" : scoreColor}>{sub.score}%</span>
        </div>
      </div>
      <span className={`ms text-base ${active ? "text-blue-200" : "text-gray-300"}`}>chevron_right</span>
    </button>
  );
};

/* ── Main App ──────────────────────────────────────────────────────────────── */
export default function SuccessIntelligence6() {
  const [activeSub, setActiveSub] = useState(0);
  const [activeTab, setActiveTab] = useState("SUCCESS PROFILE");
  const TABS = ["SUCCESS PROFILE", "ENGAGEMENT HISTORY", "PLAN ANALYTICS"];

  return (
    <div className="min-h-screen pt-16 bg-gray-50 dot-grid">
      <G />

      {/* ── HEADER ── */}
      {/* <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-sm">
        <div className="max-w-[1200px] mx-auto px-8 h-16 flex items-center justify-between">
          <div className="shrink-0">
            <div className="text-xl font-black text-gray-900 tracking-tighter uppercase leading-none">AhaarMitra</div>
            <div className="h-0.5 w-full bg-gradient-to-r from-blue-500 to-transparent mt-0.5" />
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {["Insights", "Engagement", "Retention", "Subscribers"].map((item) => (
              <a
                key={item}
                href="#"
                className={`text-[11px] font-black uppercase tracking-widest transition-colors pb-0.5 ${
                  item === "Subscribers"
                    ? "text-gray-900 border-b-2 border-gray-900"
                    : "text-gray-400 hover:text-gray-700"
                }`}
              >
                {item}
              </a>
            ))}
          </nav>

          <a href="#" className="flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-gray-400 hover:text-gray-900 transition-colors">
            <span className="ms text-base">rocket_launch</span>
            Success Portal
          </a>
        </div>
      </header> */}

      {/* ── HERO TITLE BAR ── */}
      <div className="max-w-[1200px] mx-auto px-8 pt-10 pb-8 flex items-start justify-between">
        <div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 leading-tight">
            Success <span className="text-blue-600">Intelligence.</span>
          </h1>
          <p className="text-[11px] font-black uppercase tracking-[0.25em] text-gray-400 mt-2">
            Proactive Engagement Monitoring
          </p>
        </div>
        <ScoreRing score={82} />
      </div>

      {/* ── BODY ── */}
      <div className="max-w-[1200px] mx-auto px-8 pb-16 flex gap-6">

        {/* ── SIDEBAR ── */}
        <aside className="w-52 shrink-0">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            {/* Search */}
            <div className="p-3 border-b border-gray-100">
              <div className="flex items-center gap-2 bg-gray-50 rounded-xl px-3 py-2 border border-gray-100">
                <span className="ms text-gray-400 text-[16px]">search</span>
                <input
                  className="bg-transparent text-[11px] font-medium text-gray-500 placeholder-gray-400 outline-none w-full"
                  placeholder="Search subscribers..."
                />
              </div>
            </div>

            {/* Segment label */}
            <div className="px-4 py-2.5 flex items-center justify-between border-b border-gray-100">
              <span className="text-[9px] font-black uppercase tracking-widest text-gray-400">
                Segments (1,248)
              </span>
              <span className="ms text-gray-400 text-[15px]">filter_list</span>
            </div>

            {/* List */}
            <div className="p-2 space-y-1 sidebar-scroll overflow-y-auto max-h-72">
              {SUBSCRIBERS.map((sub, i) => (
                <SubItem
                  key={sub.id}
                  sub={sub}
                  active={activeSub === i}
                  onClick={() => setActiveSub(i)}
                />
              ))}
            </div>
          </div>
        </aside>

        {/* ── MAIN PANEL ── */}
        <div className="flex-1 min-w-0 space-y-6">

          {/* ── PROFILE CARD ── */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            {/* Top bar */}
            <div className="px-7 pt-6 pb-5 flex items-center justify-between border-b border-gray-100">
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white font-black text-lg shadow-md shadow-blue-200">
                  RK
                </div>
                {/* Name block */}
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-2xl font-black text-gray-900">Rajesh Kumar</h2>
                    <span className="px-2.5 py-0.5 bg-blue-50 text-blue-600 text-[9px] font-black uppercase tracking-widest rounded-full border border-blue-200">
                      Active Client
                    </span>
                  </div>
                  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mt-0.5">
                    Verified Subscriber • Registered Oct 2024
                  </p>
                </div>
              </div>
              {/* Actions */}
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-[11px] font-black uppercase tracking-widest px-5 py-2.5 rounded-xl transition-colors shadow-sm shadow-blue-200">
                  <span className="ms text-base">call</span>
                  +91 77478 49113
                </button>
                <button className="w-9 h-9 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors border border-gray-200">
                  <span className="ms text-gray-500 text-[18px]">flag</span>
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="px-7 border-b border-gray-100 flex gap-6">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 text-[10px] font-black uppercase tracking-widest border-b-2 transition-all ${
                    activeTab === tab
                      ? "text-gray-900 border-gray-900"
                      : "text-gray-400 border-transparent hover:text-gray-600"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="p-7 space-y-8">

              {/* ── DELIVERY ADDRESSES ── */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px flex-1 bg-gray-100" />
                  <span className="text-[9px] font-black uppercase tracking-[0.25em] text-gray-400">
                    Delivery Addresses
                  </span>
                  <div className="h-px flex-1 bg-gray-100" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {/* Lunch */}
                  <div className="border border-gray-200 rounded-2xl p-4 bg-gray-50/50 relative">
                    <span className="absolute top-3 right-3 text-[8px] font-black uppercase tracking-widest bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full border border-blue-200">
                      Primary
                    </span>
                    <div className="flex items-center gap-1.5 mb-2">
                      <span className="ms text-amber-500 text-[16px]">wb_sunny</span>
                      <span className="text-[9px] font-black uppercase tracking-widest text-gray-400">
                        Lunch Destination
                      </span>
                    </div>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-black text-gray-900 text-sm">Corporate HQ</p>
                        <p className="text-[11px] text-gray-400 font-medium mt-0.5 leading-snug">
                          124, 2nd Floor, Cyber City, Phase III, Gurgaon, Haryana 122002
                        </p>
                      </div>
                      <div className="w-9 h-9 shrink-0 rounded-xl bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                        <span className="ms text-gray-400 text-[18px]">business</span>
                      </div>
                    </div>
                  </div>

                  {/* Dinner */}
                  <div className="border border-gray-200 rounded-2xl p-4 bg-gray-50/50 relative">
                    <span className="absolute top-3 right-3 text-[8px] font-black uppercase tracking-widest bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full border border-gray-200">
                      Secondary
                    </span>
                    <div className="flex items-center gap-1.5 mb-2">
                      <span className="ms text-purple-500 text-[16px]">dark_mode</span>
                      <span className="text-[9px] font-black uppercase tracking-widest text-gray-400">
                        Dinner Destination
                      </span>
                    </div>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-black text-gray-900 text-sm">Residence</p>
                        <p className="text-[11px] text-gray-400 font-medium mt-0.5 leading-snug">
                          Flat 402, Emerald Towers, Sector 45, Gurgaon, Haryana 122003
                        </p>
                      </div>
                      <div className="w-9 h-9 shrink-0 rounded-xl bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                        <span className="ms text-gray-400 text-[18px]">home</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* ── CURRENT PLAN & UTILIZATION ── */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px flex-1 bg-gray-100" />
                  <span className="text-[9px] font-black uppercase tracking-[0.25em] text-gray-400">
                    Current Plan &amp; Utilization Metrics
                  </span>
                  <div className="h-px flex-1 bg-gray-100" />
                </div>

                <div className="border border-gray-200 rounded-2xl p-6 bg-gray-50/40">
                  {/* Active plan label */}
                  <div className="flex items-center gap-1.5 mb-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span className="text-[9px] font-black uppercase tracking-widest text-blue-600">Active Plan</span>
                  </div>

                  {/* Plan header row */}
                  <div className="flex items-start justify-between gap-6">
                    {/* Left — plan info */}
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center shadow-md shadow-blue-200">
                          <span className="ms-fill text-white text-[14px]">verified</span>
                        </div>
                        <span className="text-2xl font-black text-gray-900">Premium Feast</span>
                      </div>
                      <div className="text-blue-600 font-black text-sm">₹7,999/month</div>
                      <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">30-Day Periodic Cycle</div>

                      {/* Plan meta */}
                      <div className="pt-3 space-y-1.5">
                        {[
                          ["Start Date", "Oct 15, 2024"],
                          ["End Date",   "Nov 15, 2024"],
                          ["TXN ID",     "TXN_940282"],
                        ].map(([label, val]) => (
                          <div key={label} className="flex items-center gap-4">
                            <span className="text-[9px] font-black uppercase tracking-widest text-gray-400 w-20">{label}</span>
                            <span className={`text-sm font-black ${label === "TXN ID" ? "text-blue-500 font-mono" : "text-gray-900"}`}>{val}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right — progress */}
                    <div className="flex-1 space-y-4">
                      {/* Global progress */}
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-[9px] font-black uppercase tracking-widest text-gray-400">
                            Global Consumption Progress
                          </span>
                          <div className="flex items-baseline gap-0.5">
                            <span className="text-2xl font-black text-gray-900">42</span>
                            <span className="text-[10px] text-gray-400 font-bold">/82</span>
                          </div>
                        </div>
                        <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                          <div className="progress-bar-fill h-full rounded-full" style={{ width: "51%" }} />
                        </div>
                        <div className="text-right mt-1">
                          <span className="text-[9px] font-black text-blue-500 uppercase tracking-widest">70% Utilization</span>
                        </div>
                      </div>

                      {/* Tracking boxes */}
                      <div className="grid grid-cols-2 gap-3">
                        {/* Lunch */}
                        <div className="bg-white border border-gray-200 rounded-xl p-3 flex items-center gap-3 shadow-sm">
                          <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0">
                            <span className="ms text-amber-500 text-[16px]">wb_sunny</span>
                          </div>
                          <div>
                            <div className="text-[8px] font-black uppercase tracking-widest text-gray-400">Lunch Tracking</div>
                            <div className="flex items-baseline gap-1.5 mt-0.5">
                              <span className="text-xl font-black text-gray-900">22</span>
                              <span className="text-[9px] text-gray-400 font-bold">IN</span>
                              <span className="text-sm font-black text-gray-900">08</span>
                              <span className="text-[9px] text-gray-400 font-bold">LEFT</span>
                            </div>
                          </div>
                        </div>
                        {/* Dinner */}
                        <div className="bg-white border border-gray-200 rounded-xl p-3 flex items-center gap-3 shadow-sm">
                          <div className="w-8 h-8 rounded-lg bg-purple-50 border border-purple-200 flex items-center justify-center shrink-0">
                            <span className="ms text-purple-500 text-[16px]">dark_mode</span>
                          </div>
                          <div>
                            <div className="text-[8px] font-black uppercase tracking-widest text-gray-400">Dinner Tracking</div>
                            <div className="flex items-baseline gap-1.5 mt-0.5">
                              <span className="text-xl font-black text-gray-900">20</span>
                              <span className="text-[9px] text-gray-400 font-bold">IN</span>
                              <span className="text-sm font-black text-gray-900">10</span>
                              <span className="text-[9px] text-gray-400 font-bold">LEFT</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* ── CUSTOMER FEEDBACK ── */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px flex-1 bg-gray-100" />
                  <span className="text-[9px] font-black uppercase tracking-[0.25em] text-gray-400">
                    Customer Feedback
                  </span>
                  <div className="h-px flex-1 bg-gray-100" />
                </div>

                <div className="border border-gray-200 rounded-2xl p-5 bg-gray-50/40">
                  <div className="flex items-start gap-4">
                    {/* Quote icon */}
                    <div className="w-9 h-9 shrink-0 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center">
                      <span className="ms text-blue-500 text-[18px]">format_quote</span>
                    </div>
                    <div className="flex-1">
                      {/* Stars + date */}
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className="ms-fill text-amber-400 text-[16px]">star</span>
                          ))}
                        </div>
                        <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">
                          Last Updated: 2 Days Ago
                        </span>
                      </div>
                      {/* Quote */}
                      <p className="text-sm text-gray-600 leading-relaxed italic">
                        "The meal quality has been consistently excellent. I especially love the Premium Thali options for
                        lunch. The delivery is always on time, which is critical for my work schedule. Would appreciate a
                        bit more variety in dinner protein options, but overall very satisfied with the subscription."
                      </p>
                      {/* Tags */}
                      <div className="flex gap-2 mt-3">
                        <span className="px-3 py-1 bg-blue-50 text-blue-600 text-[8px] font-black uppercase tracking-widest rounded-full border border-blue-200">
                          Consistent Quality
                        </span>
                        <span className="px-3 py-1 bg-amber-50 text-amber-600 text-[8px] font-black uppercase tracking-widest rounded-full border border-amber-200">
                          Needs Variety
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* ── ENGAGEMENT REGISTRY ── */}
              <section>
                {/* Registry header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-px w-8 bg-gray-200" />
                    <span className="text-[9px] font-black uppercase tracking-[0.25em] text-gray-400">
                      Engagement Registry: Rajesh Kumar
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="flex items-center gap-1.5 bg-white border border-gray-200 text-gray-600 text-[9px] font-black uppercase tracking-widest px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
                      Export Report
                    </button>
                    <button className="flex items-center gap-1.5 bg-white border border-gray-200 text-gray-600 text-[9px] font-black uppercase tracking-widest px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
                      <span className="ms text-[14px]">filter_alt</span>
                      Filters
                    </button>
                  </div>
                </div>

                {/* Table */}
                <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-gray-100 bg-gray-50">
                          {["Order ID", "Timeline", "Details", "Timestamp", "Result State", "Review"].map((h) => (
                            <th key={h} className="px-5 py-4 text-[9px] font-black uppercase tracking-widest text-gray-400 whitespace-nowrap">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-50">
                        {ORDERS.map((o) => (
                          <tr key={o.id} className="hover:bg-gray-50/70 transition-colors">
                            {/* Order ID */}
                            <td className="px-5 py-4">
                              <span className="font-mono text-blue-500 font-bold text-xs">{o.id}</span>
                            </td>
                            {/* Timeline */}
                            <td className="px-5 py-4">
                              <div className="flex items-center gap-1.5">
                                <div className={`w-6 h-6 rounded-lg flex items-center justify-center ${
                                  o.timeline === "LUNCH"
                                    ? "bg-amber-50 border border-amber-200"
                                    : "bg-purple-50 border border-purple-200"
                                }`}>
                                  <span className={`ms text-[12px] ${o.iconColor}`}>{o.icon}</span>
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-wide text-gray-700">{o.timeline}</span>
                              </div>
                            </td>
                            {/* Details */}
                            <td className="px-5 py-4">
                              <div className="font-black text-gray-900 text-xs uppercase tracking-wide">{o.meal}</div>
                              <div className="text-[10px] text-gray-400 mt-0.5">{o.sub}</div>
                            </td>
                            {/* Timestamp */}
                            <td className="px-5 py-4 text-[11px] text-gray-500 font-bold whitespace-nowrap">{o.date}</td>
                            {/* Status */}
                            <td className="px-5 py-4">
                              <span className={`px-2.5 py-1 text-[8px] font-black uppercase tracking-wider rounded-lg border whitespace-nowrap ${o.statusStyle}`}>
                                {o.status}
                              </span>
                            </td>
                            {/* Review */}
                            <td className="px-5 py-4">
                              {o.review ? (
                                <StarRow count={o.review} />
                              ) : o.note ? (
                                <span className="text-[9px] font-black uppercase tracking-widest text-blue-500">{o.note}</span>
                              ) : (
                                <span className="text-[10px] font-bold text-gray-300 uppercase">N/A</span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Table footer */}
                  <div className="px-5 py-3 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">
                      Tracking 1,240 Activity Points • Scroll for More
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] font-black uppercase tracking-widest text-blue-600">
                        Continuous Data Stream
                      </span>
                      <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                    </div>
                  </div>
                </div>
              </section>

            </div>
          </div>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <footer className="border-t border-gray-200 bg-white mt-4">
        <div className="max-w-[1200px] mx-auto px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-8">
            {["Metrics Documentation", "Retention Playbooks", "Support"].map((l) => (
              <a key={l} href="#" className="text-[9px] font-bold uppercase tracking-widest text-gray-400 hover:text-gray-900 transition-colors">
                {l}
              </a>
            ))}
          </div>
          <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-gray-400">
            © 2024 AhaarMitra Success Analytics. Proactive Culinary Retention.
          </span>
        </div>
      </footer>
    </div>
  );
}
