import { useState, useEffect } from "react";

// ── helpers ────────────────────────────────────────────────────────────────────
const MEAL_STYLES = {
  veg:    { dot: "bg-emerald-500", text: "text-emerald-600", badge: "bg-emerald-50 border-emerald-300 text-emerald-700", bar: "bg-emerald-500" },
  nonveg: { dot: "bg-blue-500",    text: "text-blue-600",    badge: "bg-blue-50 border-blue-300 text-blue-700",       bar: "bg-blue-500"    },
  diet:   { dot: "bg-amber-500",   text: "text-amber-600",   badge: "bg-amber-50 border-amber-300 text-amber-700",    bar: "bg-amber-500"   },
};

function MealBadge({ type, label, count }) {
  const s = MEAL_STYLES[type];
  return (
    <span className={`${s.badge} border px-3 py-1.5 rounded-lg text-[10px] font-black uppercase flex items-center gap-1.5 tracking-tight`}>
      {label}{count !== undefined ? `: ${count}` : ""}
    </span>
  );
}

function ProgressBar({ type, label, current, total }) {
  const s = MEAL_STYLES[type];
  const pct = total ? Math.round((current / total) * 100) : 0;
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-end">
        <span className={`text-sm font-bold ${s.text}`}>{label}</span>
        <span className={`text-sm font-black ${s.text}`}>{current} / {total} Meals</span>
      </div>
      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
        <div className={`h-full ${s.bar} transition-all`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

// ── DeliveryRow ────────────────────────────────────────────────────────────────
function DeliveryRow({ order }) {
  const [delivered, setDelivered] = useState(order.delivered ?? false);
  const s = MEAL_STYLES[order.mealType];
  const now = new Date();
  const deliveredTime = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;

  return (
    <tr
      className={`transition-colors rounded-xl ${
        delivered
          ? "bg-emerald-50 border border-emerald-200"
          : "bg-gray-50 hover:bg-gray-100 border border-transparent"
      }`}
    >
      {/* Order ID */}
      <td className="px-4 py-5">
        <div className="flex flex-col gap-1">
          <span className={`font-mono text-xs font-bold ${delivered ? "text-emerald-600" : "text-blue-500"}`}>
            {order.id}
          </span>
          {order.trial && (
            <span className="w-fit px-1 py-0.5 bg-amber-100 text-amber-700 text-[9px] font-black uppercase rounded leading-none">
              TRIAL
            </span>
          )}
        </div>
      </td>

      {/* Delivered At */}
      <td className="px-4 py-5">
        {delivered ? (
          <div className="font-bold text-gray-500 bg-white px-3 py-1 rounded-lg border border-gray-200 w-fit text-sm shadow-sm">
            {order.deliveredAt || deliveredTime}
          </div>
        ) : (
          <div className="font-bold text-gray-300 italic text-sm">Awaiting Record</div>
        )}
      </td>

      {/* Customer */}
      <td className="px-4 py-5">
        <div className="font-black text-gray-900 text-base">{order.name}</div>
        <div className="text-[11px] font-bold text-gray-400 mt-1">{order.location}</div>
      </td>

      {/* Contact */}
      <td className="px-4 py-5">
        <button
          className={`transition-colors cursor-pointer ${delivered ? "text-gray-300 cursor-default" : "text-gray-400 hover:text-gray-700"}`}
          disabled={delivered}
        >
          <span className="material-symbols-outlined text-lg">call</span>
        </button>
      </td>

      {/* Meal Type */}
      <td className="px-4 py-5">
        <div className="flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full ${s.dot}`} />
          <span className={`font-bold ${s.text}`}>{order.mealLabel}</span>
        </div>
      </td>

      {/* Confirm */}
      <td className="px-4 py-5">
        <div className="flex flex-col items-center justify-center gap-1.5">
          <input
            type="checkbox"
            checked={delivered}
            onChange={() => setDelivered(!delivered)}
            className="w-4 h-4 rounded border border-gray-300 bg-white cursor-pointer appearance-none
              checked:bg-emerald-500 checked:border-emerald-400 transition-all
              focus:outline-none focus:ring-2 focus:ring-emerald-400/30"
            style={{ accentColor: "#10b981" }}
          />
          {delivered ? (
            <span className="px-2 py-0.5 text-[9px] font-black uppercase tracking-tighter text-emerald-600">
              DELIVERED
            </span>
          ) : (
            <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[9px] font-black uppercase rounded-md tracking-tighter border border-blue-200">
              Dispatch
            </span>
          )}
        </div>
      </td>
    </tr>
  );
}

// ── DeliveryStop ───────────────────────────────────────────────────────────────
function DeliveryStop({ stop, index, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen ?? false);
  const isActive = index === 0;

  return (
    <div className={`border rounded-2xl overflow-hidden transition-colors ${
      open ? "border-gray-300 bg-white shadow-sm" : "border-gray-200 bg-gray-50/60"
    }`}>
      {/* Summary */}
      <button
        className="w-full text-left cursor-pointer p-6 hover:bg-gray-50 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <div className={`z-10 w-10 h-10 rounded-xl flex items-center justify-center text-sm font-black shrink-0 ${
            isActive
              ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
              : "bg-gray-100 text-gray-400"
          }`}>
            {String(index + 1).padStart(2, "0")}
          </div>
          <div className="flex-grow">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div>
                <h4 className="font-black text-gray-900 text-lg leading-tight">{stop.name}</h4>
                <p className="text-gray-400 text-xs font-bold mt-1 uppercase tracking-widest">{stop.address}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex flex-wrap gap-2">
                  {stop.veg   && <MealBadge type="veg"    label="Standard Veg Thali"       count={stop.veg}    />}
                  {stop.nonveg && <MealBadge type="nonveg" label="Premium Non-Veg Special"  count={stop.nonveg} />}
                  {stop.diet  && <MealBadge type="diet"   label="Diet/Keto Bowl"            count={stop.diet}   />}
                </div>
                <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
                  <span className="text-xl font-black text-gray-900">{stop.total}</span>
                  <span
                    className={`material-symbols-outlined transition-transform text-gray-400 ${open ? "rotate-180" : ""}`}
                  >expand_more</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </button>

      {/* Expanded rows */}
      {open && (
        <div className="px-6 pb-6 pt-2 border-t border-gray-100 bg-white">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-separate border-spacing-y-2">
              <thead>
                <tr className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                  <th className="px-4 py-3 w-28">Order ID</th>
                  <th className="px-4 py-3 w-40">Actual Delivered At</th>
                  <th className="px-4 py-3">Customer Details</th>
                  <th className="px-4 py-3 w-20">Contact</th>
                  <th className="px-4 py-3">Meal Type</th>
                  <th className="px-4 py-3 text-center w-32">Confirm Delivery</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {stop.orders.map(order => (
                  <DeliveryRow key={order.id} order={order} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Countdown ──────────────────────────────────────────────────────────────────
function Countdown({ initialSeconds }) {
  const [secs, setSecs] = useState(initialSeconds);
  useEffect(() => {
    const t = setInterval(() => setSecs(s => Math.max(0, s - 1)), 1000);
    return () => clearInterval(t);
  }, []);
  const h = String(Math.floor(secs / 3600)).padStart(2, "0");
  const m = String(Math.floor((secs % 3600) / 60)).padStart(2, "0");
  const s = String(secs % 60).padStart(2, "0");
  return <span>{h}:{m}:{s}</span>;
}

// ── DATA ───────────────────────────────────────────────────────────────────────
const STOPS = [
  {
    name: "Hitech City Tech Park",
    address: "Tower C, Gate 4 Drop-off",
    veg: 15, nonveg: 6, diet: 3, total: 24,
    orders: [
      { id: "#AM-9401", trial: true,  name: "Rajesh Kumar", location: "Floor 12", mealType: "veg",    mealLabel: "Standard Veg Thali",      delivered: false, deliveredAt: "13:42" },
      { id: "#AM-9412", trial: false, name: "Amit Sharma",  location: "Floor 08", mealType: "nonveg", mealLabel: "Premium Non-Veg Special", delivered: false, deliveredAt: "13:45" },
      { id: "#AM-9413", trial: false, name: "Sneha Reddy",  location: "Floor 08", mealType: "diet",   mealLabel: "Diet/Keto Bowl",          delivered: true,  deliveredAt: "13:00" },
    ],
  },
  {
    name: "Skyline Apartments",
    address: "Main Lobby / Security Desk",
    veg: 12, nonveg: 6, diet: 0, total: 18,
    orders: [
      { id: "#AM-9528", trial: true, name: "Vikram Singh", location: "Block A", mealType: "nonveg", mealLabel: "Premium Non-Veg Special", delivered: false, deliveredAt: "13:58" },
    ],
  },
  {
    name: "DLF Cyber City",
    address: "Ph 2, Building 10 Entrance",
    veg: 15, nonveg: 6, diet: 9, total: 30,
    orders: [
      { id: "#AM-9602", trial: false, name: "Anjali Mehta", location: "Conf B", mealType: "veg", mealLabel: "Standard Veg Thali", delivered: false, deliveredAt: "14:12" },
    ],
  },
];

// ── App ────────────────────────────────────────────────────────────────────────
export default function AhaarMitraTracker4() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased overflow-x-hidden"
      style={{ fontFamily: "'Manrope', sans-serif",
        backgroundImage: "radial-gradient(circle at 2px 2px, rgba(0,0,0,0.04) 1px, transparent 0)",
        backgroundSize: "40px 40px" }}>

      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
        input[type="checkbox"]:checked { background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e"); }
        input[type="checkbox"] { background-size: 100% 100%; background-position: center; background-repeat: no-repeat; }
      `}</style>

      {/* Header */}
      <header className="w-full pt-8 pb-5 px-8 flex justify-between items-center border-b border-gray-200 bg-white/80 backdrop-blur-xl sticky top-0 z-50 shadow-sm">
        <div className="inline-block">
          <div className="text-2xl font-black text-gray-900 tracking-tighter uppercase">AhaarMitra</div>
          <div className="h-0.5 w-full bg-gradient-to-r from-blue-500 to-transparent" />
        </div>
        <a href="#" className="text-sm font-bold text-gray-400 hover:text-gray-900 transition-colors flex items-center gap-2">
          <span className="material-symbols-outlined text-base">dashboard</span>
          Vendor Dashboard
        </a>
      </header>

      {/* Main */}
      <main className="max-w-7xl mx-auto p-6 md:p-12">

        {/* Hero */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 mb-4">
            Daily Task &amp; <span className="text-blue-600">Progress.</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl">
            Manage your daily kitchen operations and delivery logistics.
          </p>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">

          {/* Lunch */}
          <div className="lg:col-span-6">
            <div className="bg-white border border-gray-200 rounded-3xl p-8 relative overflow-hidden h-full shadow-sm">
              <div className="absolute top-0 right-0 p-4">
                <span className="px-3 py-1 rounded-full bg-red-50 text-red-500 text-[10px] font-black uppercase tracking-widest border border-red-200">
                  Window Closed
                </span>
              </div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center border border-blue-200">
                  <span className="material-symbols-outlined text-blue-600">lunch_dining</span>
                </div>
                <div>
                  <h2 className="text-xl font-black text-gray-900">Lunch Preparation</h2>
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">Confirmed Quantities</p>
                </div>
              </div>
              <div className="space-y-6">
                <ProgressBar type="veg"    label="Standard Veg Thali"      current={42} total={42} />
                <ProgressBar type="nonveg" label="Premium Non-Veg Special" current={18} total={18} />
                <ProgressBar type="diet"   label="Diet/Keto Bowl"          current={12} total={12} />
              </div>
              <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center">
                <div className="text-xs font-bold text-gray-500">Total Lunch Tiffins</div>
                <div className="text-2xl font-black text-gray-900">72</div>
              </div>
            </div>
          </div>

          {/* Dinner */}
          <div className="lg:col-span-6">
            <div className="bg-white border border-gray-200 rounded-3xl p-8 h-full relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 p-4">
                <span className="px-3 py-1 rounded-full bg-yellow-50 text-yellow-600 text-[10px] font-black uppercase tracking-widest border border-yellow-200">
                  Window Open
                </span>
              </div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-yellow-50 flex items-center justify-center border border-yellow-200">
                  <span className="material-symbols-outlined text-yellow-600">dark_mode</span>
                </div>
                <div>
                  <h2 className="text-xl font-black text-gray-900">Dinner Forecast</h2>
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">Pending Confirmations</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Current Estimate</p>
                  <p className="text-3xl font-black text-gray-900">~58</p>
                </div>
                <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Ends In</p>
                  <p className="text-3xl font-black text-yellow-500">
                    <Countdown initialSeconds={9912} />
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed italic">
                * Final quantities for dinner will be locked once the timer hits zero.
              </p>
            </div>
          </div>
        </div>

        {/* Delivery board */}
        <div className="bg-white border border-gray-200 rounded-[2rem] p-8 lg:p-10 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gray-100 border border-gray-200 flex items-center justify-center">
                <span className="material-symbols-outlined text-gray-700 text-3xl">local_shipping</span>
              </div>
              <div>
                <h2 className="text-2xl font-black text-gray-900 tracking-tight">Rapid Delivery Confirmation</h2>
                <p className="text-gray-400 text-[11px] font-black uppercase tracking-[0.2em]">Kitchen &amp; Dispatch Board</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="bg-gray-50 hover:bg-gray-100 text-gray-700 text-[10px] font-black py-3 px-6 rounded-xl transition-all uppercase tracking-widest flex items-center gap-2 border border-gray-200">
                Print Manifest
                <span className="material-symbols-outlined text-sm">print</span>
              </button>
              <button className="bg-gray-900 hover:bg-gray-700 text-white text-[10px] font-black py-3 px-6 rounded-xl transition-all uppercase tracking-widest flex items-center gap-2">
                Map Overview
                <span className="material-symbols-outlined text-sm">map</span>
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {STOPS.map((stop, i) => (
              <DeliveryStop key={stop.name} stop={stop} index={i} defaultOpen={i === 0} />
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-10 px-8 border-t border-gray-200 bg-white mt-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-8">
            <a href="#" className="text-gray-400 hover:text-gray-700 transition-colors text-[10px] font-bold uppercase tracking-widest">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-gray-700 transition-colors text-[10px] font-bold uppercase tracking-widest">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-gray-700 transition-colors text-[10px] font-bold uppercase tracking-widest">Contact Support</a>
          </div>
          <div className="text-gray-400 text-[10px] font-medium uppercase tracking-[0.2em]">
            © 2024 AHAARMITRA DIGITAL. EMPOWERING CULINARY ENTREPRENEURSHIP.
          </div>
        </div>
      </footer>
    </div>
  );
}
