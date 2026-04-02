import { useState } from "react";

// Inject Poppins + Material Symbols
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
      // * { font-family: 'Poppins', sans-serif; }
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
      .order-card { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
      .order-card:hover { border-color: rgba(0,0,0,0.15) !important; box-shadow: 0 8px 32px rgba(0,0,0,0.08); }
      ::-webkit-scrollbar { width: 6px; }
      ::-webkit-scrollbar-track { background: transparent; }
      ::-webkit-scrollbar-thumb { background: #e5e5e5; border-radius: 10px; }
      ::-webkit-scrollbar-thumb:hover { background: #d4d4d4; }
      .calendar-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 4px; }
      .calendar-day {
        aspect-ratio: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 10px;
        font-weight: 700;
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.2s;
        font-family: 'Poppins', sans-serif;
      }
      .day-completed { background: rgba(34,197,94,0.1); color: #16a34a; border: 1px solid rgba(34,197,94,0.3); }
      .day-upcoming { background: rgba(0,0,0,0.03); color: #a3a3a3; border: 1px solid rgba(0,0,0,0.08); }
      .day-skipped { background: rgba(239,68,68,0.06); color: #ef4444; border: 1px dashed rgba(239,68,68,0.35); text-decoration: line-through; }
      .day-active { border: 1.5px solid #111; color: #111; background: rgba(0,0,0,0.07); }
      .summary-panel { background: linear-gradient(145deg, rgba(0,0,0,0.03) 0%, rgba(0,0,0,0.01) 100%); }
      .glass-card { background: rgba(255,255,255,0.7); backdrop-filter: blur(12px); border: 1px solid rgba(0,0,0,0.07); }
    `}</style>
  </>
);

const Icon = ({ name, className = "" }) => (
  <span className={`material-symbols-outlined ${className}`}>{name}</span>
);

// --- Navbar ---
const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-black/8 shadow-sm h-20 px-6 md:px-12 flex justify-between items-center">
    <div className="text-2xl font-black text-gray-900 tracking-tighter">AhaarMitra</div>
    <div className="hidden md:flex items-center gap-8 font-bold tracking-tight">
      <a className="text-gray-400 hover:text-gray-900 transition-colors" href="#">Explore</a>
      <a className="text-gray-400 hover:text-gray-900 transition-colors" href="#">Subscriptions</a>
      <a className="text-gray-900 border-b-2 border-gray-900 pb-1" href="#">Orders</a>
      <a className="text-gray-400 hover:text-gray-900 transition-colors" href="#">Support</a>
    </div>
    <div className="flex items-center gap-4 md:gap-6">
      <div className="relative hidden sm:flex items-center bg-gray-100 rounded-full px-4 py-2 border border-gray-200">
        <Icon name="search" className="text-gray-400 mr-2 text-xl" />
        <input
          className="bg-transparent border-none outline-none focus:ring-0 text-sm text-gray-700 w-40 lg:w-48 placeholder:text-gray-400"
          placeholder="Search..."
          type="text"
        />
      </div>
      <button className="text-gray-400 hover:text-gray-700 transition-all duration-300">
        <Icon name="notifications" />
      </button>
      <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-200">
        <img
          alt="User Profile"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxDgB08kbHg4r0zUnel6GttGO-S_WADO-w39rZhmkQPeD79HasHrKA8oAcSftvGzC6oWsZv-3hHotK2rfgbjdQNkZqMa5FcXsDbZVFCEQoVtQ9a9zpeEfUxTW7eCHzfCeQaPfJ-PMY2ndmRCjf77328Z85PdHaoAjLcdRd3RFFqiwQAApTNkhBXUhMa453XBrKR-JtM3zUmkov1Nmp9X9J_3nspx3uueROaIDFzZhSepvqDnuU7HJlfrQcZiHVxo0o5fvUwKLJ2v7y"
        />
      </div>
    </div>
  </nav>
);

// --- Calendar ---
const calendarDays1 = [
  { day: 20, type: "day-completed" }, { day: 21, type: "day-completed" },
  { day: 22, type: "day-completed" }, { day: 23, type: "day-completed" },
  { day: 24, type: "day-completed" }, { day: 25, type: "day-skipped" },
  { day: 26, type: "day-skipped" }, { day: 27, type: "day-completed" },
  { day: 28, type: "day-active" }, { day: 29, type: "day-upcoming" },
  { day: 30, type: "day-upcoming" }, { day: 31, type: "day-upcoming" },
  { day: 1, type: "day-upcoming opacity-30" }, { day: 2, type: "day-upcoming opacity-30" },
];

const calendarDays2 = [
  { day: 20, type: "day-completed" }, { day: 21, type: "day-completed" },
  { day: 22, type: "day-completed" }, { day: 23, type: "day-completed" },
  { day: 24, type: "day-completed" }, { day: 25, type: "day-completed" },
  { day: 26, type: "day-completed" }, { day: 27, type: "day-completed" },
  { day: 28, type: "day-active" }, { day: 29, type: "day-upcoming" },
  { day: 30, type: "day-upcoming" }, { day: 31, type: "day-upcoming" },
  { day: 1, type: "day-upcoming opacity-30" }, { day: 2, type: "day-upcoming opacity-30" },
];

const CalendarWidget = ({ days, mealsLeft, daysLeft, daysLeftColor, summaryItems }) => (
  <div className="w-full lg:w-80 shrink-0">
    <div className="flex flex-col mb-4">
      <h4 className="text-[11px] font-black uppercase tracking-[0.15em] text-gray-700 mb-2">
        Schedule: May 2024 - Aug 2024
      </h4>
      <div className="flex gap-2">
        <button className="px-3 py-1.5 rounded-lg bg-gray-900 text-white text-[10px] font-black uppercase tracking-widest hover:bg-gray-700 transition-all">
          Start: May 1
        </button>
        <button className="px-3 py-1.5 rounded-lg bg-gray-100 border border-gray-200 text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-gray-800 hover:bg-gray-200 transition-all">
          Ends: Aug 31
        </button>
      </div>
    </div>
    <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200">
      <div className="flex justify-between items-center mb-4 px-1">
        <span className="text-xs font-bold text-gray-700">May 2024</span>
        <div className="flex gap-2">
          <Icon name="chevron_left" className="text-lg text-gray-300 cursor-pointer hover:text-gray-600" />
          <Icon name="chevron_right" className="text-lg text-gray-300 cursor-pointer hover:text-gray-600" />
        </div>
      </div>
      <div className="calendar-grid mb-1">
        {["M","T","W","T","F","S","S"].map((d,i) => (
          <div key={i} className="text-[9px] font-black text-gray-300 text-center uppercase">{d}</div>
        ))}
      </div>
      <div className="calendar-grid">
        {days.map((d, i) => (
          <div key={i} className={`calendar-day ${d.type}`}>{d.day}</div>
        ))}
      </div>
      <div className="mt-6 pt-4 border-t border-gray-200 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-0.5">Meals Remaining</span>
            <span className="text-xl font-black text-gray-900">{mealsLeft}</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-0.5">Days Left</span>
            <span className={`text-xl font-black ${daysLeftColor}`}>{daysLeft}</span>
          </div>
        </div>
        <div className="summary-panel rounded-xl border border-gray-200 p-3 space-y-3">
          {summaryItems.map((item, i) => (
            <div key={i} className={`flex items-center gap-3 ${item.opacity ? "opacity-30" : ""}`}>
              <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
                <Icon name={item.icon} className={`text-base ${item.iconColor}`} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-black text-gray-700">{item.label}</span>
                <span className="text-[8px] font-bold text-gray-400 uppercase tracking-widest">{item.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// --- Delivery Slot Card ---
const SlotCard = ({ slot, time, icon, menu, disabled }) => (
  <div className={`bg-gray-50 rounded-xl p-5 border border-gray-200 relative group overflow-hidden ${disabled ? "opacity-50 grayscale" : ""}`}>
    <div className="flex justify-between items-start mb-4">
      <div>
        <div className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-1">{slot}</div>
        <div className="text-xl font-black text-gray-900">{time.main} <span className="text-xs font-bold text-gray-400 uppercase">{time.ampm}</span></div>
      </div>
      <Icon name={icon} className="text-gray-300 text-2xl" />
    </div>
    <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Menu Preview</div>
    <div className="text-sm font-bold text-gray-700 leading-snug">{menu}</div>
    <div className="mt-4 pt-4 border-t border-gray-200 flex gap-2">
      {disabled ? (
        <button className="w-full py-2 rounded-lg bg-gray-100 text-gray-400 text-[9px] font-black uppercase tracking-widest cursor-not-allowed border border-gray-200">
          Slot Inactive
        </button>
      ) : (
        <>
          <button className="flex-1 py-2 rounded-lg bg-red-50 text-red-500 text-[9px] font-black uppercase tracking-widest hover:bg-red-100 transition-all flex items-center justify-center gap-1.5 border border-red-200">
            <Icon name="block" className="text-sm" /> Skip
          </button>
          <button className="px-3 py-2 rounded-lg bg-gray-100 text-gray-500 text-[9px] font-black uppercase tracking-widest hover:bg-gray-200 transition-all border border-gray-200">
            <Icon name="edit" className="text-sm" />
          </button>
        </>
      )}
    </div>
  </div>
);

// --- Active Subscription Card ---
const SubscriptionCard = ({ vendor, id, badge, badgeColor, planLabel, iconName, iconColor, slots, summaryProps }) => (
  <div className="order-card bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
    <div className="p-6 md:p-10 flex flex-col lg:flex-row gap-8 lg:gap-12">
      <div className="flex-1 flex flex-col">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 rounded-2xl bg-gray-100 border border-gray-200 flex items-center justify-center">
            <Icon name={iconName} className={`text-3xl ${iconColor}`} />
          </div>
          <div>
            <h3 className="font-black text-2xl tracking-tight text-gray-900">{vendor}</h3>
            <div className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">ID: {id}</div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-2 py-0.5 border border-gray-200 rounded">
                {planLabel}
              </span>
              <span className={`text-[10px] font-black uppercase tracking-widest ${badgeColor}`}>{badge}</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {slots.map((slot, i) => (
            <SlotCard key={i} {...slot} />
          ))}
        </div>
        <div className="flex">
          <button className="w-full py-4 bg-gray-50 border border-gray-200 rounded-xl text-[11px] font-black uppercase tracking-[0.2em] hover:bg-gray-100 transition-colors flex items-center justify-center gap-3 text-gray-600">
            <Icon name="chat" className="text-xl" /> Contact Vendor
          </button>
        </div>
      </div>
      <CalendarWidget {...summaryProps} />
    </div>
  </div>
);

// --- Subscription 1: Shree Tiffin ---
const sub1 = {
  vendor: "Shree Tiffin Services",
  id: "AM-2024-STS-0182",
  badge: "Active",
  badgeColor: "text-green-600",
  planLabel: "Standard Veg Plan",
  iconName: "lunch_dining",
  iconColor: "text-amber-500",
  slots: [
    { slot: "Lunch Slot", time: { main: "Today, 12:45", ampm: "PM" }, icon: "light_mode", menu: "Paneer Bhurji, 4x Roti, Dal Tadka & Salad" },
    { slot: "Dinner Slot", time: { main: "Today, 08:30", ampm: "PM" }, icon: "dark_mode", menu: "Mixed Veg Curry, 4x Roti, Curd & Pickle" },
  ],
  summaryProps: {
    days: calendarDays1,
    mealsLeft: 42,
    daysLeft: 21,
    daysLeftColor: "text-amber-500",
    summaryItems: [
      { icon: "light_mode", iconColor: "text-amber-500", label: "21 Lunch Meals Left", sub: "Until Jun 18" },
      { icon: "dark_mode", iconColor: "text-blue-400", label: "21 Dinner Meals Left", sub: "Until Jun 18" },
    ],
  },
};

// --- Subscription 2: Morning Brews ---
const sub2 = {
  vendor: "Morning Brews",
  id: "AM-2024-MBR-9941",
  badge: "Next delivery soon",
  badgeColor: "text-amber-500",
  planLabel: "Daily Espresso Bundle",
  iconName: "local_cafe",
  iconColor: "text-blue-500",
  slots: [
    { slot: "Morning Slot", time: { main: "Today, 08:15", ampm: "AM" }, icon: "coffee", menu: "Double Shot Latte & Oat Cookie" },
    { slot: "Evening Slot", time: { main: "Today, 04:30", ampm: "PM" }, icon: "bakery_dining", menu: "N/A - Weekly Plan Only", disabled: true },
  ],
  summaryProps: {
    days: calendarDays2,
    mealsLeft: 12,
    daysLeft: 12,
    daysLeftColor: "text-blue-500",
    summaryItems: [
      { icon: "coffee", iconColor: "text-blue-400", label: "12 Morning Meals Left", sub: "Until Jun 09" },
      { icon: "bakery_dining", iconColor: "text-gray-400", label: "0 Evening Meals Left", sub: "Not Subscribed", opacity: true },
    ],
  },
};

// --- Past Orders Table ---
const pastOrders = [
  {
    date: "May 24, 2024", orderId: "AM-ORD-2024-5512",
    vendorIcon: "restaurant", vendor: "Tadka House", items: "Paneer Tikka, Garlic Naan x2",
    mealIcon: "dark_mode", meal: "Dinner",
    statusIcon: "check_circle", statusColor: "text-green-600", status: "Delivered",
    time: "08:42 PM",
    stars: 4,
  },
  {
    date: "May 23, 2024", orderId: "AM-ORD-2024-5489",
    vendorIcon: "set_meal", vendor: "Ocean Delights", items: "Grilled Sea Bass, Asparagus",
    mealIcon: "light_mode", meal: "Lunch",
    statusIcon: "cancel", statusColor: "text-red-400", status: "Cancelled",
    time: "01:15 PM",
    stars: 0,
  },
];

const Stars = ({ count }) => (
  <div className="flex items-center gap-0.5">
    {[1,2,3,4,5].map(n => (
      <Icon key={n} name="star" className={`text-sm ${n <= count ? "text-amber-400" : "text-gray-200"}`} />
    ))}
  </div>
);

const PastOrdersSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "Delivered", "Cancelled", "Skipped"];
  const filterColors = { Delivered: "text-green-600 border-green-500", Cancelled: "text-red-500 border-red-500", Skipped: "text-gray-500 border-gray-400" };

  return (
    <section>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <h2 className="text-xl font-bold text-gray-900">Past Orders History</h2>
        <div className="flex items-center gap-6">
          <div className="flex items-center bg-gray-100 px-2 py-1 rounded-full border border-gray-200">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-5 py-2 text-[10px] font-black uppercase tracking-widest transition-all
                  ${activeFilter === f
                    ? f === "All"
                      ? "text-gray-900 border-b-2 border-gray-900"
                      : `border-b-2 ${filterColors[f]}`
                    : "text-gray-400 hover:text-gray-700"
                  }`}
              >
                {f}
              </button>
            ))}
          </div>
          <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-gray-700 px-2 transition-all">
            <Icon name="tune" className="text-lg" />
          </button>
        </div>
      </div>
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                {["Order Date","Vendor & Items","Meal Type","Status","Timestamp","Rating"].map(h => (
                  <th key={h} className="px-6 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {pastOrders.map((o, i) => (
                <tr key={i} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-5">
                    <div className="text-sm font-bold text-gray-800">{o.date}</div>
                    <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-0.5">ID: {o.orderId}</div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center shrink-0">
                        <Icon name={o.vendorIcon} className="text-sm text-gray-400" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-gray-800">{o.vendor}</div>
                        <div className="text-[10px] text-gray-400 font-medium truncate max-w-[200px]">{o.items}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-gray-100">
                      <Icon name={o.mealIcon} className="text-xs text-gray-400" />
                      <span className="text-[9px] font-black uppercase tracking-widest text-gray-600">{o.meal}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className={`inline-flex items-center gap-1.5 ${o.statusColor}`}>
                      <Icon name={o.statusIcon} className="text-[14px]" />
                      <span className="text-[9px] font-black uppercase tracking-widest">{o.status}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="text-[11px] font-bold text-gray-500">{o.time}</div>
                  </td>
                  <td className="px-6 py-5">
                    {o.stars > 0
                      ? <Stars count={o.stars} />
                      : <span className="text-[9px] font-black uppercase tracking-widest text-gray-300 italic">N/A</span>
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Page 1 of 4</span>
          <div className="flex gap-2">
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-400 hover:text-gray-700 transition-colors">
              <Icon name="chevron_left" className="text-lg" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-900 text-white text-[10px] font-black">1</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-[10px] font-black hover:bg-gray-100 text-gray-700">2</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-400 hover:text-gray-700 transition-colors">
              <Icon name="chevron_right" className="text-lg" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Footer ---
const Footer = () => (
  <footer className="w-full py-12 px-6 md:px-12 mt-auto border-t border-gray-200 bg-gray-50">
    <div className="grid grid-cols-2 md:grid-cols-4 items-start gap-8 w-full max-w-7xl mx-auto">
      <div className="flex flex-col gap-4">
        <div className="text-lg font-bold text-gray-900">AhaarMitra</div>
        <p className="text-[10px] text-gray-400 uppercase tracking-widest leading-relaxed">
          The Premium Digital Hearth for Modern Nutrition.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <h4 className="text-gray-700 text-[10px] font-bold uppercase tracking-widest mb-1">Legal</h4>
        <a className="text-gray-400 hover:text-gray-800 transition-colors text-[10px] font-medium uppercase tracking-widest" href="#">Privacy Policy</a>
        <a className="text-gray-400 hover:text-gray-800 transition-colors text-[10px] font-medium uppercase tracking-widest" href="#">Terms of Service</a>
      </div>
      <div className="flex flex-col gap-3">
        <h4 className="text-gray-700 text-[10px] font-bold uppercase tracking-widest mb-1">Support</h4>
        <a className="text-gray-400 hover:text-gray-800 transition-colors text-[10px] font-medium uppercase tracking-widest" href="#">Contact Support</a>
        <a className="text-gray-400 hover:text-gray-800 transition-colors text-[10px] font-medium uppercase tracking-widest" href="#">Partner with Us</a>
      </div>
      <div className="flex flex-col gap-4 items-end">
        <div className="flex gap-4">
          <Icon name="brand_awareness" className="text-gray-300 hover:text-gray-700 cursor-pointer transition-colors text-xl" />
          <Icon name="share" className="text-gray-300 hover:text-gray-700 cursor-pointer transition-colors text-xl" />
          <Icon name="public" className="text-gray-300 hover:text-gray-700 cursor-pointer transition-colors text-xl" />
        </div>
        <div className="text-gray-400 text-[9px] font-medium uppercase tracking-widest text-right">
          © 2024 AhaarMitra Editorial. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
);

// --- Root ---
export default function AhaarMitraOrders15() {
  return (
    <div className="antialiased min-h-screen flex flex-col bg-white text-gray-900">
      <GlobalStyles />
      <main className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto w-full">
        {/* Page Header */}
        <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-3 text-gray-900">Order Management</h1>
            <p className="text-gray-400 font-medium">Manage your active meal subscriptions and view full order history.</p>
          </div>
          <div className="flex gap-3">
            <button className="px-6 py-3 bg-gray-900 text-white text-xs font-black uppercase tracking-widest rounded-full hover:bg-gray-700 transition-all flex items-center gap-2 shadow-lg shadow-gray-900/10">
              <Icon name="calendar_add_on" className="text-lg" /> New Subscription
            </button>
          </div>
        </header>

        {/* Active Subscriptions */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold flex items-center gap-3 text-gray-700">
              <Icon name="verified" className="text-amber-500" />
              Active Subscriptions (2)
            </h2>
          </div>
          <div className="flex flex-col gap-6">
            <SubscriptionCard {...sub1} />
            <SubscriptionCard {...sub2} />
          </div>
        </section>

        {/* Past Orders */}
        <PastOrdersSection />
      </main>
      <Footer />
    </div>
  );
}
