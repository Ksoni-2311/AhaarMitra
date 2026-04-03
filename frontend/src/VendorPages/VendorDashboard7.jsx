import { useState } from "react";
import { Link } from "react-router-dom";

const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
const mealTabs = [
  { id: "breakfast", label: "Breakfast", icon: "☀️" },
  { id: "lunch", label: "Lunch", icon: "🍽️" },
  { id: "dinner", label: "Dinner", icon: "🌙" },
];

const initialMealTypes = [
  { id: 1, icon: "☀️", label: "Breakfast", color: "text-amber-500" },
  { id: 2, icon: "🍽️", label: "Lunch", color: "text-blue-500" },
  { id: 3, icon: "🌙", label: "Dinner", color: "text-violet-500" },
  { id: 4, icon: "🥐", label: "Snacks", color: "text-emerald-500" },
];

const initialHubs = [
  "H-Block, Sector 63, Noida, UP",
  "Block C, Sector 18, Noida, UP",
  "Sector 62, Electronic City, Noida",
  "Indirapuram, Habitat Centre, GZB",
  "Phase 2, Noida SEZ Main Road",
  "Crossing Republik, NH-24, GZB",
  "Sector 76, Metro Station Hub, Noida",
  "Sector 44, Golf Course Road, Noida",
  "A-Block, Sector 12, Noida, UP",
  "Gaur City Mall, Greater Noida West",
];

const initialCatalog = [
  {
    id: 1,
    name: "Mini Thali",
    desc: "2 Roti, 1 Sabzi (Primary), Rice",
    daily: 80,
    weekly: 500,
    monthly: 1800,
  },
  {
    id: 2,
    name: "Normal Thali",
    desc: "3 Roti, 2 Sabzis (Both), Dal, Rice",
    daily: 120,
    weekly: 750,
    monthly: 2800,
  },
  {
    id: 3,
    name: "Deluxe Thali",
    desc: "Roti, Paneer, Veg, Dal, Curd, Rice",
    daily: 180,
    weekly: 1100,
    monthly: 4000,
  },
];

const menuData = {
  mini: ["Paneer Butter Masala", "Phulka (2 pcs)", "Steamed Rice"],
  normal: [
    "Paneer Butter Masala",
    "Yellow Dal Tadka",
    "Phulka (3 pcs)",
    "Jeera Rice",
  ],
  deluxe: [
    "Paneer Butter Masala",
    "Mixed Vegetable Dry",
    "Butter Naan (2 pcs)",
    "Sweet Lassi / Curd",
  ],
};

const mealStatuses = [
  {
    id: "breakfast",
    label: "Breakfast",
    icon: "☀️",
    iconColor: "text-amber-500",
    time: "07:00 – 09:30",
    active: true,
  },
  {
    id: "lunch",
    label: "Lunch",
    icon: "🍽️",
    iconColor: "text-blue-500",
    time: "Manual cancellation applied",
    active: false,
  },
  {
    id: "dinner",
    label: "Dinner",
    icon: "🌙",
    iconColor: "text-violet-500",
    time: "19:30 – 21:30",
    active: true,
  },
  {
    id: "snacks",
    label: "Snacks",
    icon: "🥐",
    iconColor: "text-emerald-500",
    time: "16:30 – 18:00",
    active: true,
  },
];

function SectionLabel({ children }) {
  return (
    <p className="text-[9px] font-black uppercase tracking-[0.18em] text-gray-400 mb-3 flex items-center justify-between">
      {children}
    </p>
  );
}

function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-white border border-gray-100 rounded-2xl shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}

function Toggle({ active, onToggle, danger = false }) {
  return (
    <button
      onClick={onToggle}
      className={`w-10 h-5 rounded-full relative transition-all duration-200 focus:outline-none flex-shrink-0 ${
        active ? (danger ? "bg-rose-500" : "bg-blue-500") : "bg-gray-200"
      }`}
    >
      <span
        className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow-sm transition-all duration-200 ${
          active ? "right-0.5" : "left-0.5"
        }`}
      />
    </button>
  );
}

function IconBtn({ title, icon, danger = false, onClick }) {
  return (
    <button
      title={title}
      onClick={onClick}
      className={`text-xs p-1.5 rounded-lg transition-all ${
        danger
          ? "text-gray-300 hover:text-rose-500 hover:bg-rose-50"
          : "text-gray-300 hover:text-gray-600 hover:bg-gray-100"
      }`}
    >
      {icon}
    </button>
  );
}

// ─── Meal Types ───────────────────────────────────────────────────────────────
function MealTypesCard() {
  const [meals, setMeals] = useState(initialMealTypes);
  return (
    <Card className="p-6 flex flex-col h-full">
      <SectionLabel>
        <span>Meal Types &amp; Frequency</span>
        <span className="text-gray-300">•••</span>
      </SectionLabel>
      <div className="flex flex-col gap-3 flex-1">
        {meals.map((m) => (
          <div
            key={m.id}
            className="group flex items-center justify-between px-4 py-3.5 bg-gray-50 hover:bg-gray-100 rounded-xl border border-gray-100 transition-all"
          >
            <div className="flex items-center gap-3">
              <span className="text-xl">{m.icon}</span>
              <span className="text-xs font-bold uppercase tracking-wider text-gray-700">
                {m.label}
              </span>
            </div>
            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <IconBtn title="Edit" icon="✏️" />
              <IconBtn
                title="Delete"
                icon="🗑️"
                danger
                onClick={() => setMeals(meals.filter((x) => x.id !== m.id))}
              />
            </div>
          </div>
        ))}
      </div>
      <Link
        to="/19"
        className="mt-3 w-full py-3 flex items-center justify-center gap-2 border border-dashed border-gray-200 rounded-xl text-[9px] font-black uppercase tracking-widest text-gray-400 hover:border-blue-400 hover:text-blue-500 transition-all"
      >
        <span className="text-sm">📍+</span> Add Hub Address
      </Link>
    </Card>
  );
}

// ─── Service Zones ────────────────────────────────────────────────────────────
function ServiceZonesCard() {
  const [hubs, setHubs] = useState(initialHubs);
  return (
    <Card className="p-6 flex flex-col h-full">
      <SectionLabel>
        <span>Service Reach &amp; Zones</span>
        <span className="text-gray-300 text-sm">📍</span>
      </SectionLabel>
      <p className="text-[8px] font-black uppercase tracking-widest text-gray-400 mb-2">
        Configured Service Hubs
      </p>
      <div className="flex-1 overflow-y-auto space-y-1.5 pr-1 custom-scroll">
        {hubs.map((hub, i) => (
          <div
            key={i}
            className="group flex items-center gap-2.5 px-3 py-2 rounded-lg bg-gray-50 hover:bg-gray-100 border border-gray-100 transition-all"
          >
            <span
              className={`text-sm ${i === 0 ? "text-blue-500" : "text-gray-300"}`}
            >
              📍
            </span>
            <span className="text-[11px] font-medium text-gray-600 truncate flex-1">
              {hub}
            </span>
            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <IconBtn title="Edit" icon="✏️" />
              <IconBtn
                title="Delete"
                icon="🗑️"
                danger
                onClick={() => setHubs(hubs.filter((_, j) => j !== i))}
              />
            </div>
          </div>
        ))}
      </div>
      <button className="mt-3 w-full py-3 flex items-center justify-center gap-2 border border-dashed border-gray-200 rounded-xl text-[9px] font-black uppercase tracking-widest text-gray-400 hover:border-blue-400 hover:text-blue-500 transition-all">
        <span className="text-sm">📍+</span> Add Hub Address
      </button>
    </Card>
  );
}

// ─── Service Windows ──────────────────────────────────────────────────────────
function ServiceWindowsCard() {
  const [cutoffEnabled, setCutoffEnabled] = useState(true);
  const [cutoffHours, setCutoffHours] = useState(5);
  return (
    <Card className="p-6 flex flex-col h-full">
      <SectionLabel>
        <span>Service Windows &amp; Logistics</span>
        <span className="text-gray-300 text-sm">⏱</span>
      </SectionLabel>
      <div className="space-y-4 flex-1">
        {/* Lunch */}
        <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
          <p className="text-[9px] font-black text-blue-500 uppercase tracking-widest mb-3">
            Lunch Delivery
          </p>
          <div className="flex gap-3">
            {[
              { label: "Start Time", val: "12:00" },
              { label: "End Time", val: "14:30" },
            ].map((t) => (
              <div key={t.label} className="flex-1 space-y-1">
                <label className="text-[8px] uppercase tracking-tighter text-gray-400">
                  {t.label}
                </label>
                <input
                  type="time"
                  defaultValue={t.val}
                  className="w-full bg-white border border-blue-200 rounded-lg px-2 py-1.5 text-xs text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400/30 focus:border-blue-400 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
        {/* Dinner */}
        <div className="p-4 bg-violet-50 rounded-xl border border-violet-100">
          <p className="text-[9px] font-black text-violet-500 uppercase tracking-widest mb-3">
            Dinner Delivery
          </p>
          <div className="flex gap-3">
            {[
              { label: "Start Time", val: "19:30" },
              { label: "End Time", val: "21:30" },
            ].map((t) => (
              <div key={t.label} className="flex-1 space-y-1">
                <label className="text-[8px] uppercase tracking-tighter text-gray-400">
                  {t.label}
                </label>
                <input
                  type="time"
                  defaultValue={t.val}
                  className="w-full bg-white border border-violet-200 rounded-lg px-2 py-1.5 text-xs text-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-400/30 focus:border-violet-400 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
        {/* Auto cutoff */}
        <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-[9px] font-black text-blue-500 uppercase tracking-widest">
              Global Auto-Cutoff
            </p>
            <Toggle
              active={cutoffEnabled}
              onToggle={() => setCutoffEnabled(!cutoffEnabled)}
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] font-bold text-gray-700 uppercase">
                Hours Before Delivery Start
              </p>
              <p className="text-[8px] text-gray-400 uppercase tracking-tighter mt-0.5">
                Applies to all windows
              </p>
            </div>
            <input
              type="number"
              value={cutoffHours}
              onChange={(e) => setCutoffHours(Number(e.target.value))}
              className="bg-white border border-blue-200 rounded-lg px-2 py-1.5 text-xs text-gray-700 font-bold w-16 text-center focus:outline-none focus:ring-2 focus:ring-blue-400/30 focus:border-blue-400"
            />
          </div>
        </div>
      </div>
      <div className="mt-4 p-4 bg-gray-50 border border-gray-100 rounded-xl">
        <p className="text-[10px] leading-relaxed text-gray-400 italic text-center">
          A 5-hour auto-cutoff is recommended to maximize user satisfaction and
          optimize logistics flow.
        </p>
      </div>
    </Card>
  );
}

// ─── Tiffin Catalog ───────────────────────────────────────────────────────────
function TiffinCatalogCard() {
  const [catalog, setCatalog] = useState(initialCatalog);
  const update = (id, field, val) =>
    setCatalog(catalog.map((c) => (c.id === id ? { ...c, [field]: val } : c)));

  return (
    <Card className="p-6">
      <SectionLabel>
        <span>Tiffin Catalog &amp; Pricing</span>
        <div className="flex gap-3">
          <span className="text-gray-300 cursor-pointer hover:text-gray-600">
            🔍
          </span>
          <span className="text-gray-300 cursor-pointer hover:text-gray-600">
            ≡
          </span>
        </div>
      </SectionLabel>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-[9px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-100">
              <th className="pb-3 text-left">Tiffin Variant</th>
              <th className="pb-3 text-left">Daily (₹)</th>
              <th className="pb-3 text-left">Weekly (₹)</th>
              <th className="pb-3 text-left">Monthly (₹)</th>
              <th className="pb-3" />
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {catalog.map((item) => (
              <tr key={item.id}>
                <td className="py-3.5">
                  <p className="text-xs font-bold text-gray-800">{item.name}</p>
                  <p className="text-[9px] text-gray-400 uppercase tracking-tight mt-0.5">
                    {item.desc}
                  </p>
                </td>
                {["daily", "weekly", "monthly"].map((f) => (
                  <td className="py-3.5 pr-4" key={f}>
                    <input
                      type="number"
                      value={item[f]}
                      onChange={(e) =>
                        update(item.id, f, Number(e.target.value))
                      }
                      className="w-20 bg-gray-50 border border-gray-200 rounded-lg px-2 py-1.5 text-xs text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400/30 focus:border-blue-400 transition-all"
                    />
                  </td>
                ))}
                <td className="py-3.5 text-right">
                  <button className="text-gray-300 hover:text-gray-600 text-sm transition-colors p-1.5 rounded-lg hover:bg-gray-100">
                    ⚙️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="mt-4 w-full py-2.5 flex items-center justify-center gap-2 border border-dashed border-gray-200 rounded-xl text-[10px] font-black uppercase tracking-widest text-gray-400 hover:border-blue-400 hover:text-blue-500 transition-all">
        <span>+</span> Add New Tiffin Variant
      </button>
    </Card>
  );
}

// ─── Trial Offer ──────────────────────────────────────────────────────────────
function TrialOfferCard() {
  const [price, setPrice] = useState(49);
  const [selectedTier, setSelectedTier] = useState("Normal");
  const [refund, setRefund] = useState(true);
  const [limitMeals, setLimitMeals] = useState(false);

  return (
    <Card className="p-6">
      <SectionLabel>
        <span>Trial Offer Configuration</span>
        <span className="text-gray-300">⭐</span>
      </SectionLabel>
      <div className="space-y-5">
        <div className="p-4 bg-blue-50 border border-blue-200 rounded-2xl">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h4 className="text-xs font-black uppercase text-blue-500 mb-1">
                Standard Trial Price
              </h4>
            </div>
            <div className="text-2xl font-black text-gray-800">₹{price}</div>
          </div>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            placeholder="Set price (e.g. 49)"
            className="w-full bg-white border border-blue-200 rounded-lg px-3 py-2 text-sm text-gray-700 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400/30 focus:border-blue-400 transition-all"
          />
          <div className="flex flex-wrap gap-2">
            {["Mini", "Normal", "Deluxe"].map((t) => (
              <button
                key={t}
                onClick={() => setSelectedTier(t)}
                className={`px-3 py-1 rounded-full text-[8px] font-black uppercase transition-all ${
                  selectedTier === t
                    ? "bg-blue-500 text-white border border-blue-500"
                    : "bg-white text-gray-400 border border-gray-200 hover:border-blue-300"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">
            Promotion Logic
          </p>
          {[
            {
              label: "Refund on 1st Order",
              state: refund,
              toggle: () => setRefund(!refund),
            },
            {
              label: "Limit to Breakfast/Lunch",
              state: limitMeals,
              toggle: () => setLimitMeals(!limitMeals),
            },
          ].map((opt) => (
            <div
              key={opt.label}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100"
            >
              <span className="text-[10px] uppercase font-bold text-gray-600">
                {opt.label}
              </span>
              <Toggle active={opt.state} onToggle={opt.toggle} />
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

// ─── Weekly Menu ──────────────────────────────────────────────────────────────
function WeeklyMenuCard() {
  const [activeDay, setActiveDay] = useState("WED");
  const [activeMeal, setActiveMeal] = useState("lunch");
  const [menus, setMenus] = useState(menuData);

  const removeItem = (tier, idx) =>
    setMenus({ ...menus, [tier]: menus[tier].filter((_, i) => i !== idx) });

  const tierConfig = [
    {
      key: "mini",
      label: "Mini Thali Components",
      tag: "Fixed Menu",
      accent: "emerald",
      border: "border-emerald-200",
      ring: "border-emerald-400",
    },
    {
      key: "normal",
      label: "Normal Thali Components",
      tag: "Standard",
      accent: "blue",
      border: "border-blue-200",
      ring: "border-blue-400",
    },
    {
      key: "deluxe",
      label: "Deluxe Thali Components",
      tag: "Premium",
      accent: "violet",
      border: "border-violet-200",
      ring: "border-violet-400",
    },
  ];

  const accentText = {
    emerald: "text-emerald-500",
    blue: "text-blue-500",
    violet: "text-violet-500",
  };
  const accentBg = {
    emerald: "bg-emerald-50",
    blue: "bg-blue-50",
    violet: "bg-violet-50",
  };
  const accentLeft = {
    emerald: "border-l-emerald-400",
    blue: "border-l-blue-400",
    violet: "border-l-violet-400",
  };

  return (
    <Card className="p-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <p className="text-[9px] font-black uppercase tracking-[0.18em] text-gray-400">
          Weekly Menu Customizer
        </p>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200">
            <span className="text-blue-500 text-sm">📅</span>
            <span className="text-[9px] font-black uppercase text-gray-500">
              Oct 21 – Oct 27
            </span>
          </div>
          <button className="text-gray-400 hover:text-gray-600 text-sm transition-colors p-1.5 rounded-lg hover:bg-gray-100">
            ⬇️
          </button>
        </div>
      </div>

      {/* Day Chips */}
      <div className="flex gap-1.5 mb-6 overflow-x-auto pb-2 border-b border-gray-100">
        {days.map((d) => (
          <button
            key={d}
            onClick={() => setActiveDay(d)}
            className={`flex-1 min-w-[2.5rem] text-center py-2 rounded-lg text-[10px] font-bold border transition-all ${
              activeDay === d
                ? "bg-blue-500 text-white border-blue-500 shadow-sm shadow-blue-200"
                : "bg-gray-50 text-gray-400 border-gray-100 hover:bg-gray-100"
            }`}
          >
            {d}
          </button>
        ))}
      </div>

      {/* Meal Tab */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex items-center bg-gray-50 p-1.5 rounded-full border border-gray-200 gap-1">
          {mealTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveMeal(tab.id)}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all border ${
                activeMeal === tab.id
                  ? "bg-white text-gray-800 border-gray-200 shadow-sm"
                  : "bg-transparent text-gray-400 border-transparent hover:text-gray-600"
              }`}
            >
              <span className="text-sm">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tierConfig.map((tier, ti) => (
          <div key={tier.key} className="space-y-3">
            <div className="flex items-center justify-between">
              <div
                className={`flex items-center gap-2 ${accentText[tier.accent]}`}
              >
                <span className="text-lg">
                  {ti === 0 ? "🌿" : ti === 1 ? "🍽️" : "✨"}
                </span>
                <h5 className="text-[9px] font-black uppercase tracking-[0.15em]">
                  {tier.label}
                </h5>
              </div>
              <span className="text-[8px] font-bold text-gray-300 uppercase tracking-tight">
                {tier.tag}
              </span>
            </div>
            <div className="space-y-1.5">
              {menus[tier.key].map((item, idx) => (
                <div
                  key={idx}
                  className={`group flex items-center justify-between p-3 bg-gray-50 rounded-xl border transition-all ${
                    idx === 0
                      ? `border-l-2 ${accentLeft[tier.accent]} border-t-0 border-r-0 border-b-0 bg-${tier.accent}-50 ${tier.border}`
                      : "border-gray-100 hover:border-gray-200"
                  }`}
                  style={idx === 0 ? { borderLeftWidth: "2px" } : {}}
                >
                  <span className="text-xs font-semibold text-gray-700">
                    {item}
                  </span>
                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <IconBtn
                      title="Delete"
                      icon="🗑️"
                      danger
                      onClick={() => removeItem(tier.key, idx)}
                    />
                    <button className="text-gray-200 hover:text-gray-400 text-xs p-1 transition-colors">
                      ⠿
                    </button>
                  </div>
                </div>
              ))}
              <button className="w-full py-2 flex items-center justify-center gap-1.5 border border-dashed border-gray-200 rounded-xl text-[10px] font-black uppercase tracking-widest text-gray-400 hover:border-blue-400 hover:text-blue-500 transition-all">
                <span>+</span> Add Item
              </button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

// ─── Cancellation Panel ───────────────────────────────────────────────────────
function CancellationCard() {
  const [statuses, setStatuses] = useState(mealStatuses);
  const [selectedDate, setSelectedDate] = useState("2024-10-23");

  const toggleMeal = (id) =>
    setStatuses(
      statuses.map((m) => (m.id === id ? { ...m, active: !m.active } : m)),
    );

  return (
    <Card className="p-6">
      <SectionLabel>
        <span>Meal Cancellation &amp; Outage Control</span>
        <span className="text-gray-300 text-sm">📅</span>
      </SectionLabel>

      {/* Date picker */}
      <div className="max-w-xl mx-auto mb-8">
        <div className="bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden">
          <div className="p-6 pb-3">
            <p className="text-[9px] font-black uppercase tracking-[0.18em] text-gray-400 mb-3 text-center">
              Step 1: Select Target Date
            </p>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500 text-sm z-10">
                📅
              </span>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full bg-white border border-gray-200 rounded-xl pl-10 pr-4 py-3.5 text-base font-black text-gray-800 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 outline-none transition-all cursor-pointer"
              />
            </div>
          </div>
          <div className="px-6 pb-6 pt-3 bg-white/60 border-t border-gray-100">
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1 bg-rose-50 rounded-full border border-rose-200">
                <span className="text-rose-500 text-xs">⚠️</span>
                <p className="text-[9px] font-black text-rose-500 uppercase tracking-widest">
                  Step 2: Instant Global Overwrite
                </p>
              </div>
              <button className="w-full bg-rose-500 hover:bg-rose-600 text-white text-[11px] font-black py-4 px-8 rounded-xl transition-all uppercase tracking-[0.15em] flex items-center justify-center gap-3 group border border-rose-400">
                <span className="text-lg group-hover:scale-110 transition-transform inline-block">
                  🚫
                </span>
                Cancel All Meals for Selected Day
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Meal status grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statuses.map((meal) => (
          <div
            key={meal.id}
            className={`p-5 rounded-2xl border transition-all ${
              !meal.active
                ? "border-rose-300 bg-rose-50 ring-1 ring-rose-200"
                : "border-gray-100 bg-gray-50 hover:border-gray-200"
            }`}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <span
                  className={`text-2xl block ${!meal.active ? "opacity-40" : ""}`}
                >
                  {meal.icon}
                </span>
                <h4
                  className={`text-xs font-black uppercase tracking-widest mt-2 ${!meal.active ? "text-gray-400" : "text-gray-800"}`}
                >
                  {meal.label}
                </h4>
              </div>
              <span
                className={`text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded-full border ${
                  meal.active
                    ? "bg-emerald-50 border-emerald-200 text-emerald-600"
                    : "bg-rose-100 border-rose-300 text-rose-500"
                }`}
              >
                {meal.active ? "Active" : "Inactive"}
              </span>
            </div>
            <p
              className={`text-[10px] mb-4 uppercase tracking-tighter font-medium ${
                !meal.active ? "text-rose-400" : "text-gray-400"
              }`}
            >
              {meal.active ? `Service Window: ${meal.time}` : meal.time}
            </p>
            <button
              onClick={() => toggleMeal(meal.id)}
              className={`w-full py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2 border ${
                meal.active
                  ? "bg-white text-gray-400 border-gray-200 hover:bg-rose-50 hover:border-rose-300 hover:text-rose-500"
                  : "bg-white text-gray-400 border-gray-200 hover:bg-emerald-50 hover:border-emerald-300 hover:text-emerald-600"
              }`}
            >
              <span className="text-sm">{meal.active ? "🚫" : "↩️"}</span>
              {meal.active ? `Cancel ${meal.label}` : `Resume ${meal.label}`}
            </button>
          </div>
        ))}
      </div>
    </Card>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function AhaarMitraOrders15() {
  const navItems = [
    { label: "Finance", active: false },
    { label: "Order History", active: false },
    { label: "Services", active: true },
    { label: "Subscriber", active: false },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <style>{`
        .custom-scroll::-webkit-scrollbar { width: 3px; }
        .custom-scroll::-webkit-scrollbar-track { background: transparent; }
        .custom-scroll::-webkit-scrollbar-thumb { background: #e5e7eb; border-radius: 10px; }
        .custom-scroll::-webkit-scrollbar-thumb:hover { background: #d1d5db; }
        input[type='date']::-webkit-calendar-picker-indicator { cursor: pointer; opacity: 0.5; }
        .uniform-card-height { height: 560px; }
      `}</style>

      {/* Header */}
      {/* <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between gap-4">
          <div className="shrink-0">
            <div className="text-xl font-black tracking-tighter uppercase text-gray-900">AhaarMitra</div>
            <div className="h-0.5 w-full bg-gradient-to-r from-blue-500 to-transparent rounded-full" />
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((n) => (
              <a
                key={n.label}
                href="#"
                className={`text-[11px] font-black uppercase tracking-widest transition-colors ${
                  n.active
                    ? "text-gray-900 border-b-2 border-blue-500 pb-0.5"
                    : "text-gray-400 hover:text-gray-700"
                }`}
              >
                {n.label}
              </a>
            ))}
          </nav>

          <a href="#" className="text-sm font-bold text-gray-400 hover:text-gray-700 transition-colors flex items-center gap-1.5 shrink-0">
            <span className="text-base">⚙️</span>
            <span className="hidden sm:inline">Settings</span>
          </a>
        </div>
      </header> */}

      {/* Main */}
      <main className="max-w-7xl mx-auto px-6 md:px-10 py-10 pt-24">
        {/* Hero */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 mb-3">
              Service <span className="text-blue-500">Manager.</span>
            </h1>
            <p className="text-gray-400 text-base max-w-xl">
              Configure your meal offerings, pricing schedules, and service
              windows.
            </p>
          </div>
          <button className="shrink-0 bg-blue-500 hover:bg-blue-600 text-white text-[10px] font-black py-3 px-8 rounded-xl transition-all uppercase tracking-widest shadow-md shadow-blue-200">
            Save All Changes
          </button>
        </div>

        {/* Top 3 cards - equal height */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          <div className="uniform-card-height flex flex-col">
            <MealTypesCard />
          </div>
          <div className="uniform-card-height flex flex-col">
            <ServiceZonesCard />
          </div>
          <div className="uniform-card-height flex flex-col">
            <ServiceWindowsCard />
          </div>
        </div>

        {/* Catalog + Trial */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mb-5">
          <div className="md:col-span-7">
            <TiffinCatalogCard />
          </div>
          <div className="md:col-span-5">
            <TrialOfferCard />
          </div>
        </div>

        {/* Weekly Menu */}
        <div className="mb-5">
          <WeeklyMenuCard />
        </div>

        {/* Cancellation */}
        <div>
          <CancellationCard />
        </div>
      </main>

      {/* Footer */}
      {/* <footer className="w-full py-8 px-6 md:px-10 border-t border-gray-100 bg-white mt-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-8">
            {["Privacy Policy", "Terms of Service", "Support Portal"].map((l) => (
              <a key={l} href="#" className="text-gray-400 hover:text-gray-700 transition-colors text-[10px] font-bold uppercase tracking-widest">
                {l}
              </a>
            ))}
          </div>
          <p className="text-gray-300 text-[10px] font-medium uppercase tracking-[0.2em]">
            © 2024 AhaarMitra Analytics. Precision in Service Management.
          </p>
        </div>
      </footer> */}
    </div>
  );
}
