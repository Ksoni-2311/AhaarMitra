import { useState, useRef, useEffect } from "react";

/* ─── Google Fonts & Material Icons injected once ──────────────────────────── */
const GlobalStyles = () => (
  <style>{`
    // @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800;900&display=swap');
    // @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
    // * { font-family: 'Manrope', sans-serif; box-sizing: border-box; }
    .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; user-select: none; }
    .mat-fill { font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
    .scrollbar-thin::-webkit-scrollbar { width: 5px; }
    .scrollbar-thin::-webkit-scrollbar-track { background: #f1f5f9; border-radius: 10px; }
    .scrollbar-thin::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
    .scrollbar-thin::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
  `}</style>
);

/* ─── DATA ──────────────────────────────────────────────────────────────────── */
const ORDERS = [
  {
    id: "#AM-9401",
    customer: "Rajesh Kumar",
    address: "124, 2nd Floor, Cyber City, Phase III, Gurgaon, Haryana 122002",
    meal: "Breakfast",
    mealIcon: "wb_sunny",
    mealColor: "text-amber-500",
    sub: "Mini Thali",
    trial: true,
    date: "Oct 24, 2024",
    time: "08:45 AM",
    rating: 4.8,
    status: "Delivered",
  },
  {
    id: "#AM-9398",
    customer: "Amit Sharma",
    address:
      "Apartment 402, Lotus Greens Tower A, Sector 150, Noida, UP 201310",
    meal: "Lunch",
    mealIcon: "restaurant",
    mealColor: "text-blue-500",
    sub: "Delux Thali",
    trial: false,
    date: "Oct 24, 2024",
    time: "01:15 PM",
    rating: 4.5,
    status: "Delivered",
  },
  {
    id: "#AM-9395",
    customer: "Sneha Reddy",
    address:
      "Villa 45, Golden Palms Residency, Sarjapur Road, Bangalore, Karnataka 560035",
    meal: "Dinner",
    mealIcon: "dark_mode",
    mealColor: "text-purple-500",
    sub: "Normal Thali",
    trial: true,
    date: "Oct 23, 2024",
    time: "08:30 PM",
    rating: 4.9,
    status: "Delivered",
  },
  {
    id: "#AM-9392",
    customer: "Vikram Singh",
    address: "H-12, Green Park Extension, New Delhi, Delhi 110016",
    meal: "Snacks",
    mealIcon: "bakery_dining",
    mealColor: "text-emerald-500",
    sub: "Mini Thali",
    trial: false,
    date: "Oct 23, 2024",
    time: "04:45 PM",
    rating: null,
    status: "Cancelled by Vendor",
  },
  {
    id: "#AM-9388",
    customer: "Priya Kapoor",
    address:
      "Flat 701, Marina Heights, Worli Sea Face, Mumbai, Maharashtra 400030",
    meal: "Dessert",
    mealIcon: "icecream",
    mealColor: "text-rose-400",
    sub: "Mini Thali",
    trial: false,
    date: "Oct 22, 2024",
    time: "09:15 PM",
    rating: 4.7,
    status: "Delivered",
  },
  {
    id: "#AM-9385",
    customer: "Aditya Gupta",
    address: "Building 10, DLF Cyber City, Phase II, Gurgaon 122008",
    meal: "Lunch",
    mealIcon: "restaurant",
    mealColor: "text-blue-500",
    sub: "Normal Thali",
    trial: false,
    date: "Oct 22, 2024",
    time: "01:30 PM",
    rating: 4.2,
    status: "Delivered",
  },
  {
    id: "#AM-9381",
    customer: "Rohan Das",
    address: "Sector 5, Salt Lake City, Block AB, Kolkata, WB 700091",
    meal: "Breakfast",
    mealIcon: "wb_sunny",
    mealColor: "text-amber-500",
    sub: "Mini Thali",
    trial: true,
    date: "Oct 21, 2024",
    time: "08:15 AM",
    rating: 4.6,
    status: "Delivered",
  },
  {
    id: "#AM-9378",
    customer: "Meera Nair",
    address: "Opp. Marine Drive, Sea Breeze Apts, Kochi, Kerala 682031",
    meal: "Dinner",
    mealIcon: "dark_mode",
    mealColor: "text-purple-500",
    sub: "Delux Thali",
    trial: false,
    date: "Oct 21, 2024",
    time: "09:00 PM",
    rating: 4.4,
    status: "Delivered",
  },
  {
    id: "#AM-9375",
    customer: "Karan Malhotra",
    address:
      "Suite 88, Brigade Road Commercial Complex, Bangalore, Karnataka 560001",
    meal: "Lunch",
    mealIcon: "restaurant",
    mealColor: "text-blue-500",
    sub: "Delux Thali",
    trial: false,
    date: "Oct 20, 2024",
    time: "12:45 PM",
    rating: 4.7,
    status: "Delivered",
  },
  {
    id: "#AM-9372",
    customer: "Ananya Iyer",
    address:
      "Tower 2, Godrej Garden City, SG Highway, Ahmedabad, Gujarat 382470",
    meal: "Breakfast",
    mealIcon: "wb_sunny",
    mealColor: "text-amber-500",
    sub: "Normal Thali",
    trial: false,
    date: "Oct 20, 2024",
    time: "08:00 AM",
    rating: null,
    status: "Cancelled by User",
  },
  {
    id: "#AM-9369",
    customer: "Sanjay Varma",
    address: "P-4, Gachibowli Flyover Road, Hyderabad, Telangana 500032",
    meal: "Dinner",
    mealIcon: "dark_mode",
    mealColor: "text-purple-500",
    sub: "Delux Thali",
    trial: false,
    date: "Oct 19, 2024",
    time: "09:30 PM",
    rating: 4.3,
    status: "Skipped by User",
  },
];

/* ─── STATUS BADGE ──────────────────────────────────────────────────────────── */
const STATUS_STYLES = {
  Delivered: "bg-emerald-50 text-emerald-600 border-emerald-200",
  "Cancelled by Vendor": "bg-rose-50 text-rose-600 border-rose-200",
  "Cancelled by User": "bg-rose-50 text-rose-600 border-rose-200",
  "Skipped by User": "bg-amber-50 text-amber-600 border-amber-200",
};
const StatusBadge = ({ status }) => (
  <span
    className={`px-3 py-1 text-[9px] font-black uppercase rounded-lg border whitespace-nowrap ${STATUS_STYLES[status] ?? "bg-gray-100 text-gray-500 border-gray-200"}`}
  >
    {status}
  </span>
);

/* ─── RATING ────────────────────────────────────────────────────────────────── */
const Rating = ({ value }) =>
  value ? (
    <div className="flex items-center gap-1.5">
      <span className="material-symbols-outlined mat-fill text-[16px] text-amber-400">
        star
      </span>
      <span className="text-sm font-extrabold tracking-tight text-gray-900">
        {value}
      </span>
    </div>
  ) : (
    <div className="flex items-center gap-1.5 text-gray-300">
      <span className="material-symbols-outlined text-[16px]">star</span>
      <span className="text-sm font-extrabold tracking-tight">--</span>
    </div>
  );

/* ─── FILTER CHIP ───────────────────────────────────────────────────────────── */
const FilterChip = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest transition-all cursor-pointer border ${
      active
        ? "bg-gray-900 text-white border-gray-900 shadow-md"
        : "bg-white text-gray-400 border-gray-200 hover:border-gray-400 hover:text-gray-600"
    }`}
  >
    {label}
  </button>
);

/* ─── ADVANCED FILTERS PANEL ────────────────────────────────────────────────── */
const TIMELINES = ["All Time", "2024", "2023"];
const MEAL_TYPES = ["Breakfast", "Lunch", "Dinner", "Snacks", "Dessert"];
const REV_TIERS = ["Any", "₹1k+", "₹5k+"];

function AdvancedPanel({ onClose }) {
  const [timeline, setTimeline] = useState("All Time");
  const [meals, setMeals] = useState(["Breakfast"]);
  const [tier, setTier] = useState("Any");

  const toggleMeal = (m) =>
    setMeals((prev) =>
      prev.includes(m) ? prev.filter((x) => x !== m) : [...prev, m],
    );

  return (
    <div className="absolute right-0 top-full mt-2 w-[440px] bg-white border border-gray-200 rounded-3xl shadow-2xl shadow-gray-200/60 z-[60] p-6">
      <div className="space-y-5">
        {/* Timeline */}
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-3">
            Timeline
          </p>
          <div className="flex gap-2 flex-wrap">
            {TIMELINES.map((t) => (
              <FilterChip
                key={t}
                label={t}
                active={timeline === t}
                onClick={() => setTimeline(t)}
              />
            ))}
          </div>
        </div>
        {/* Meal Type */}
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-3">
            Meal Type
          </p>
          <div className="flex flex-wrap gap-2">
            {MEAL_TYPES.map((m) => (
              <FilterChip
                key={m}
                label={m}
                active={meals.includes(m)}
                onClick={() => toggleMeal(m)}
              />
            ))}
          </div>
        </div>
        {/* Revenue Tier */}
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-3">
            Revenue Tier
          </p>
          <div className="flex gap-2 flex-wrap">
            {REV_TIERS.map((r) => (
              <FilterChip
                key={r}
                label={r}
                active={tier === r}
                onClick={() => setTier(r)}
              />
            ))}
          </div>
        </div>
        {/* Actions */}
        <div className="pt-4 border-t border-gray-100 flex gap-3">
          <button
            className="flex-1 bg-gray-900 text-white text-[10px] font-black py-3 rounded-xl uppercase tracking-widest hover:bg-gray-700 transition-colors"
            onClick={onClose}
          >
            Apply Selection
          </button>
          <button
            className="flex-1 bg-gray-50 text-gray-400 text-[10px] font-black py-3 rounded-xl uppercase tracking-widest border border-gray-200 hover:bg-gray-100 transition-colors"
            onClick={() => {
              setTimeline("All Time");
              setMeals(["Breakfast"]);
              setTier("Any");
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── STATUS DROPDOWN ───────────────────────────────────────────────────────── */
const ALL_STATUSES = [
  "Delivered",
  "Cancelled by Vendor",
  "Cancelled by User",
  "Skipped by User",
];

function StatusDropdown({ checked, setChecked }) {
  const toggle = (s) =>
    setChecked((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s],
    );

  return (
    <div className="absolute top-full right-0 mt-2 w-60 bg-white border border-gray-200 rounded-2xl shadow-2xl shadow-gray-200/60 z-[60] py-3 overflow-hidden">
      <div className="px-5 pb-3 mb-1 border-b border-gray-100">
        <p className="text-[9px] font-black uppercase tracking-widest text-gray-400">
          Filter Status
        </p>
      </div>
      {ALL_STATUSES.map((s) => (
        <label
          key={s}
          className="flex items-center gap-3 px-5 py-2.5 hover:bg-gray-50 transition-colors cursor-pointer text-gray-500 hover:text-gray-900"
        >
          <input
            type="checkbox"
            checked={checked.includes(s)}
            onChange={() => toggle(s)}
            className="w-4 h-4 rounded border-gray-300 text-blue-500 focus:ring-blue-400 focus:ring-offset-0"
          />
          <span className="text-[11px] font-bold uppercase tracking-wide whitespace-nowrap">
            {s}
          </span>
        </label>
      ))}
      <div className="mt-2 px-5 pt-3 border-t border-gray-100 flex gap-2">
        <button className="flex-1 py-1.5 rounded-lg bg-blue-500 text-white text-[9px] font-black uppercase tracking-widest hover:bg-blue-600 transition-colors">
          Apply
        </button>
        <button
          className="flex-1 py-1.5 rounded-lg bg-gray-100 text-gray-500 text-[9px] font-black uppercase tracking-widest hover:bg-gray-200 transition-colors"
          onClick={() => setChecked([])}
        >
          Clear
        </button>
      </div>
    </div>
  );
}

/* ─── TABLE ROW ─────────────────────────────────────────────────────────────── */
const OrderRow = ({ order }) => (
  <tr className="hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
    <td className="px-6 py-5">
      <span className="font-mono text-blue-500 font-bold text-sm">
        {order.id}
      </span>
    </td>
    <td className="px-6 py-5 font-bold text-gray-900">{order.customer}</td>
    <td className="px-6 py-5 text-gray-400 text-sm whitespace-normal min-w-[200px]">
      {order.address}
    </td>
    <td className="px-6 py-5">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-0">
          <div className="flex items-center gap-2">
            <span
              className={`material-symbols-outlined text-lg ${order.mealColor}`}
            >
              {order.mealIcon}
            </span>
            <span className="text-[11px] font-black uppercase tracking-wider text-gray-900">
              {order.meal}
            </span>
          </div>
          {order.trial && (
            <span className="inline-flex items-center bg-amber-50 text-amber-600 text-[7px] font-black uppercase px-2 py-0.5 rounded-full tracking-[0.1em] ml-2 border border-amber-200">
              TRIAL
            </span>
          )}
        </div>
        {/* <span className="text-[10px] text-gray-400 font-medium uppercase tracking-widest ml-7">{order.sub}</span> */}
      </div>
    </td>
    <td className="px-6 py-5 text-gray-400 text-sm">{order.date}</td>
    {/* <td className="px-6 py-5 text-gray-400 text-sm">{order.time}</td> */}
    {/* <td className="px-6 py-5"><Rating value={order.rating} /></td> */}
    <td className="px-6 py-5">
      <StatusBadge status={order.status} />
    </td>
  </tr>
);

/* ─── SORT BUTTON ───────────────────────────────────────────────────────────── */
const SortBtn = ({ label, icon, active, className = "" }) => (
  <div
    className={`flex items-center gap-1 cursor-pointer whitespace-nowrap select-none transition-colors ${active ? "text-gray-900" : "text-gray-400 hover:text-gray-700"} ${className}`}
  >
    {label}
    <span className="material-symbols-outlined text-[14px]">{icon}</span>
  </div>
);

/* ─── MAIN PAGE ─────────────────────────────────────────────────────────────── */
export default function CulinaryTrends5() {
  const [advancedOpen, setAdvancedOpen] = useState(false);
  const [statusDropOpen, setStatusDropOpen] = useState(false);
  const [statusFilters, setStatusFilters] = useState(["Delivered"]);
  const advRef = useRef(null);
  const statusRef = useRef(null);

  /* Close dropdowns on outside click */
  useEffect(() => {
    const handler = (e) => {
      if (advRef.current && !advRef.current.contains(e.target))
        setAdvancedOpen(false);
      if (statusRef.current && !statusRef.current.contains(e.target))
        setStatusDropOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div
      className="min-h-screen pt-16 bg-gray-50 antialiased overflow-x-hidden"
      style={{
        backgroundImage:
          "radial-gradient(circle at 2px 2px, rgba(0,0,0,0.04) 1px, transparent 0)",
        backgroundSize: "40px 40px",
      }}
    >
      <GlobalStyles />

      {/* ── MAIN ── */}
      <main className="max-w-7xl mx-auto p-6 md:p-12">
        {/* Title + Controls */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 mb-4">
                Culinary <span className="text-blue-600">Trends.</span>
              </h1>
              <p className="text-gray-500 text-lg max-w-2xl">
                Specialized analysis of meal preferences and order dynamics.
              </p>
            </div>

            {/* Buttons + Advanced Panel */}
            <div className="flex items-center gap-3 relative" ref={advRef}>
              <button
                onClick={() => setAdvancedOpen(!advancedOpen)}
                className={`flex items-center gap-2 text-[10px] font-black py-3 px-6 rounded-xl transition-all uppercase tracking-widest border ${
                  advancedOpen
                    ? "bg-gray-900 text-white border-gray-900"
                    : "bg-white hover:bg-gray-50 text-gray-700 border-gray-200"
                }`}
              >
                <span className="material-symbols-outlined text-base">
                  tune
                </span>
                Advanced Filters
              </button>
              <button className="bg-white hover:bg-gray-50 text-gray-700 text-[10px] font-black py-3 px-6 rounded-xl transition-all uppercase tracking-widest border border-gray-200">
                Export Analyst Report
              </button>
              {advancedOpen && (
                <AdvancedPanel onClose={() => setAdvancedOpen(false)} />
              )}
            </div>
          </div>
        </div>

        {/* Table Card */}
        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-[2rem] overflow-hidden shadow-sm">
            <div className="max-h-[70vh] overflow-y-auto scrollbar-thin">
              <table className="w-full text-left border-collapse">
                {/* THEAD */}
                <thead className="sticky top-0 z-10">
                  <tr className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] border-b border-gray-100 bg-white">
                    <th className="px-6 py-6">
                      <SortBtn label="Order ID" icon="arrow_downward" active />
                    </th>
                    <th className="px-6 py-6 text-gray-400">Customer</th>
                    <th className="px-6 py-6 text-gray-400">
                      Delivery Address
                    </th>
                    <th className="px-6 py-6">
                      <SortBtn label="Meal Type" icon="unfold_more" />
                    </th>
                    <th className="px-6 py-6">
                      <SortBtn label="Date" icon="unfold_more" />
                    </th>
                    {/* <th className="px-6 py-6">
                      <SortBtn label="Delivery Time" icon="unfold_more" />
                    </th> 
                    <th className="px-6 py-6">
                      <SortBtn label="Rating" icon="unfold_more" />
                    </th> */}

                    {/* Status col with filter dropdown */}
                    <th className="px-6 py-6 relative" ref={statusRef}>
                      <button
                        onClick={() => setStatusDropOpen(!statusDropOpen)}
                        className={`flex items-center gap-1.5 text-[10px] font-black px-3 py-1.5 rounded-lg border transition-all uppercase tracking-widest ${
                          statusDropOpen
                            ? "bg-blue-50 text-blue-600 border-blue-300"
                            : "bg-gray-50 text-blue-500 border-gray-200 hover:border-blue-300 hover:bg-blue-50"
                        }`}
                      >
                        Status
                        <span className="material-symbols-outlined text-[16px] leading-none">
                          filter_alt
                        </span>
                      </button>
                      {statusDropOpen && (
                        <StatusDropdown
                          checked={statusFilters}
                          setChecked={setStatusFilters}
                        />
                      )}
                    </th>
                  </tr>
                </thead>

                {/* TBODY */}
                <tbody>
                  {ORDERS.map((order) => (
                    <OrderRow key={order.id} order={order} />
                  ))}
                </tbody>
              </table>
            </div>

            {/* Footer */}
            <div className="p-8 border-t border-gray-100 bg-gray-50/60 flex flex-col items-center gap-6">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                Showing 11 of 1,248 Culinary Records
              </p>
              <button className="bg-white hover:bg-gray-100 text-gray-700 text-[10px] font-black py-4 px-10 rounded-full transition-all uppercase tracking-widest border border-gray-200 shadow-sm">
                View All Records
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* ── FOOTER ── */}
      {/* <footer className="w-full py-10 px-12 border-t border-gray-200 bg-white mt-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-8">
            {["Privacy Policy", "Terms of Service", "Analyst Support"].map(link => (
              <a key={link} href="#" className="text-gray-400 hover:text-gray-900 transition-colors text-[10px] font-bold uppercase tracking-widest">
                {link}
              </a>
            ))}
          </div>
          <div className="text-gray-400 text-[10px] font-medium uppercase tracking-[0.2em]">
            © 2024 AHAARMITRA ANALYTICS. PRECISION IN CULINARY TRENDS.
          </div>
        </div>
      </footer> */}
    </div>
  );
}
