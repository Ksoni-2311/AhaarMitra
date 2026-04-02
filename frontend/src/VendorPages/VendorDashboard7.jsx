import { useState } from "react";

// Google Fonts & Material Symbols loaded via index.html or global CSS
// Add to your index.html:
// <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
// <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet">

const Icon = ({ name, className = "" }) => (
  <span className={`material-symbols-outlined ${className}`}>{name}</span>
);

// ─── Reusable primitives ────────────────────────────────────────────────────

const Card = ({ children, className = "" }) => (
  <div
    className={`bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm ${className}`}
  >
    {children}
  </div>
);

const WidgetTitle = ({ label, right }) => (
  <div className="flex items-center justify-between mb-4">
    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
      {label}
    </span>
    {right}
  </div>
);

const Toggle = ({ active }) => (
  <div
    className={`w-10 h-5 rounded-full relative transition-all cursor-pointer ${
      active ? "bg-blue-600" : "bg-gray-200"
    }`}
  >
    <div
      className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-all ${
        active ? "right-0.5" : "left-0.5"
      }`}
    />
  </div>
);

const BtnAdd = ({ icon, label }) => (
  <button className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-dashed border-gray-300 text-gray-400 text-[10px] font-black uppercase tracking-widest hover:border-gray-500 hover:text-gray-600 transition-all">
    {icon && <Icon name={icon} className="text-base" />}
    {label}
  </button>
);

const ActionIcon = ({ name, danger = false }) => (
  <Icon
    name={name}
    className={`text-lg cursor-pointer transition-colors ${
      danger
        ? "text-gray-300 hover:text-rose-500"
        : "text-gray-300 hover:text-gray-700"
    }`}
  />
);

// ─── Meal Types Widget ───────────────────────────────────────────────────────

const mealTypes = [
  { icon: "wb_sunny", label: "Breakfast", color: "text-amber-500" },
  { icon: "restaurant", label: "Lunch", color: "text-blue-500" },
  { icon: "dark_mode", label: "Dinner", color: "text-purple-500" },
  { icon: "bakery_dining", label: "Snacks", color: "text-emerald-500" },
];

const MealTypesWidget = () => (
  <Card className="p-6 self-stretch">
    <WidgetTitle
      label="Meal Types & Frequency"
      right={<Icon name="more_horiz" className="text-sm text-gray-400" />}
    />
    <div className="space-y-3">
      {mealTypes.map(({ icon, label, color }) => (
        <div
          key={label}
          className="group flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100 hover:border-gray-200 transition-all"
        >
          <div className="flex items-center gap-3">
            <Icon name={icon} className={`${color}`} />
            <span className="text-xs font-bold uppercase tracking-wider text-gray-800">
              {label}
            </span>
          </div>
          <div className="flex items-center gap-3 opacity-30 group-hover:opacity-100 transition-opacity">
            <ActionIcon name="edit" />
            <ActionIcon name="delete" danger />
          </div>
        </div>
      ))}
      <BtnAdd icon="add" label="Add New Service" />
    </div>
  </Card>
);

// ─── Service Reach Widget ────────────────────────────────────────────────────

const hubs = [
  { address: "H-Block, Sector 63, Noida, UP", active: true },
  { address: "Block C, Sector 18, Noida, UP", active: false },
];

const ServiceReachWidget = () => {
  const [distance, setDistance] = useState(15);

  return (
    <Card className="p-6 self-stretch">
      <WidgetTitle
        label="Service Reach & Zones"
        right={<Icon name="map" className="text-sm text-gray-400" />}
      />
      <div className="space-y-6">
        <div className="space-y-3">
          <label className="text-[8px] uppercase font-black tracking-widest text-gray-400">
            Configured Service Hubs
          </label>
          <div className="space-y-2">
            {hubs.map(({ address, active }) => (
              <div
                key={address}
                className="group flex items-center gap-3 p-2 bg-gray-50 rounded-lg border border-gray-100 hover:border-gray-200 transition-all"
              >
                <Icon
                  name="location_on"
                  className={`text-lg ${
                    active ? "text-blue-500" : "text-gray-300"
                  }`}
                />
                <span className="text-[11px] font-medium text-gray-700 truncate flex-1">
                  {address}
                </span>
                <div className="flex items-center gap-1.5 opacity-30 group-hover:opacity-100 transition-opacity">
                  <ActionIcon name="edit" />
                  <ActionIcon name="delete" danger />
                </div>
              </div>
            ))}
          </div>
          <BtnAdd icon="add_location" label="Add Hub Address" />
        </div>

        <div className="pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-bold text-gray-800">
                Offer Expanded Delivery
              </span>
              <span className="text-[8px] text-gray-400 uppercase tracking-tight">
                Applies to all configured hubs
              </span>
            </div>
            <Toggle active={true} />
          </div>

          <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-[9px] font-black text-blue-500 uppercase tracking-widest">
                Global Max. Extra Distance
              </label>
              <span className="text-xs font-black text-gray-800">
                {distance} KM
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="50"
              step="1"
              value={distance}
              onChange={(e) => setDistance(Number(e.target.value))}
              className="w-full h-1.5 rounded-full bg-gray-200 appearance-none cursor-pointer accent-blue-500"
            />
            <div className="flex justify-between text-[8px] font-bold text-gray-400 uppercase">
              <span>+1 KM</span>
              <span>+50 KM</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

// ─── Service Windows Widget ──────────────────────────────────────────────────

const ServiceWindowsWidget = () => (
  <Card className="p-6 self-stretch">
    <WidgetTitle
      label="Service Windows & Logistics"
      right={<Icon name="timer" className="text-sm text-gray-400" />}
    />
    <div className="space-y-4">
      {/* Lunch */}
      <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 space-y-4">
        <p className="text-[9px] font-black text-blue-500 uppercase tracking-widest">
          Lunch Delivery
        </p>
        <div className="flex gap-3">
          <div className="flex-1 space-y-1">
            <label className="text-[8px] uppercase tracking-tighter text-gray-400">
              Start Time
            </label>
            <input
              type="time"
              defaultValue="12:00"
              className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-200 transition-all"
            />
          </div>
          <div className="flex-1 space-y-1">
            <label className="text-[8px] uppercase tracking-tighter text-gray-400">
              End Time
            </label>
            <input
              type="time"
              defaultValue="14:30"
              className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-200 transition-all"
            />
          </div>
        </div>
        <div className="pt-2 flex items-center justify-between">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="w-3 h-3 rounded border-gray-300 text-blue-500 focus:ring-0"
            />
            <span className="text-[10px] text-gray-500 uppercase">
              Enable Auto-cutoff
            </span>
          </label>
          <input
            type="time"
            defaultValue="10:00"
            className="bg-white border border-gray-200 rounded px-2 py-0.5 text-[10px] text-gray-700 focus:outline-none focus:border-blue-400 w-16"
          />
        </div>
      </div>

      {/* Dinner */}
      <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 space-y-4">
        <p className="text-[9px] font-black text-purple-500 uppercase tracking-widest">
          Dinner Delivery
        </p>
        <div className="flex gap-3">
          <div className="flex-1 space-y-1">
            <label className="text-[8px] uppercase tracking-tighter text-gray-400">
              Start Time
            </label>
            <input
              type="time"
              defaultValue="19:30"
              className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-200 transition-all"
            />
          </div>
          <div className="flex-1 space-y-1">
            <label className="text-[8px] uppercase tracking-tighter text-gray-400">
              End Time
            </label>
            <input
              type="time"
              defaultValue="21:30"
              className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-200 transition-all"
            />
          </div>
        </div>
        <div className="pt-2 flex items-center justify-between">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              defaultChecked
              className="w-3 h-3 rounded border-gray-300 text-blue-500 focus:ring-0"
            />
            <span className="text-[10px] text-gray-500 uppercase">
              Enable Auto-cutoff
            </span>
          </label>
          <input
            type="time"
            defaultValue="16:00"
            className="bg-white border border-gray-200 rounded px-2 py-0.5 text-[10px] text-gray-700 focus:outline-none focus:border-blue-400 w-16"
          />
        </div>
      </div>
    </div>
  </Card>
);

// ─── Tiffin Catalog Widget ───────────────────────────────────────────────────

const tiffins = [
  {
    name: "Mini Thali",
    desc: "2 Roti, 1 Sabzi (Primary), Rice",
    daily: 80,
    weekly: 500,
    monthly: 1800,
  },
  {
    name: "Normal Thali",
    desc: "3 Roti, 2 Sabzis (Both), Dal, Rice",
    daily: 120,
    weekly: 750,
    monthly: 2800,
  },
  {
    name: "Deluxe Thali",
    desc: "Roti, Paneer, Veg, Dal, Curd, Rice",
    daily: 180,
    weekly: 1100,
    monthly: 4000,
  },
];

const CatalogInput = ({ defaultValue }) => (
  <input
    type="number"
    defaultValue={defaultValue}
    className="w-20 py-1 bg-gray-50 border border-gray-200 rounded-lg px-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-all"
  />
);

const TiffinCatalogWidget = () => (
  <Card className="p-6">
    <WidgetTitle
      label="Tiffin Catalog & Pricing"
      right={
        <div className="flex gap-2">
          <Icon
            name="search"
            className="text-sm cursor-pointer text-gray-400 hover:text-gray-700 transition-colors"
          />
          <Icon
            name="filter_list"
            className="text-sm cursor-pointer text-gray-400 hover:text-gray-700 transition-colors"
          />
        </div>
      }
    />
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
        <tbody className="divide-y divide-gray-100">
          {tiffins.map(({ name, desc, daily, weekly, monthly }) => (
            <tr key={name}>
              <td className="py-4">
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-gray-800">{name}</span>
                  <span className="text-[8px] text-gray-400 uppercase tracking-tighter">
                    {desc}
                  </span>
                </div>
              </td>
              <td className="py-4">
                <CatalogInput defaultValue={daily} />
              </td>
              <td className="py-4">
                <CatalogInput defaultValue={weekly} />
              </td>
              <td className="py-4">
                <CatalogInput defaultValue={monthly} />
              </td>
              <td className="py-4 text-right">
                <ActionIcon name="settings" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <BtnAdd icon="post_add" label="Add New Tiffin Variant" />
  </Card>
);

// ─── Trial Offer Widget ──────────────────────────────────────────────────────

const TrialOfferWidget = () => (
  <Card className="p-6">
    <WidgetTitle
      label="Trial Offer Configuration"
      right={<Icon name="stars" className="text-sm text-gray-400" />}
    />
    <div className="space-y-6">
      <div className="p-4 bg-blue-50 border border-blue-100 rounded-2xl">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h4 className="text-xs font-black uppercase text-blue-500 mb-1">
              Standard Trial Price
            </h4>
            <p className="text-[9px] text-gray-400">&nbsp;</p>
          </div>
          <div className="text-2xl font-black text-gray-800">₹49</div>
        </div>
        <div className="space-y-4">
          <input
            type="number"
            defaultValue={49}
            placeholder="Set price (e.g. 49)"
            className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-200 transition-all"
          />
          <div className="flex flex-wrap gap-2">
            {["Mini", "Normal", "Deluxe"].map((t) => (
              <span
                key={t}
                className={`px-3 py-1 rounded-full text-[8px] font-black uppercase transition-all cursor-pointer ${
                  t === "Normal"
                    ? "bg-blue-100 border border-blue-300 text-blue-700"
                    : "bg-gray-100 border border-gray-200 text-gray-400 hover:bg-gray-200"
                }`}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
          Promotion Logic
        </p>
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100">
          <span className="text-[10px] uppercase font-bold text-gray-700">
            Refund on 1st Order
          </span>
          <Toggle active={true} />
        </div>
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100">
          <span className="text-[10px] uppercase font-bold text-gray-700">
            Limit to Breakfast/Lunch
          </span>
          <Toggle active={false} />
        </div>
      </div>
    </div>
  </Card>
);

// ─── Weekly Menu Customizer ──────────────────────────────────────────────────

const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
const mealTabs = [
  { icon: "wb_sunny", label: "Breakfast" },
  { icon: "restaurant", label: "Lunch" },
  { icon: "dark_mode", label: "Dinner" },
];

const ComponentItem = ({ name, accent }) => (
  <div
    className={`p-3 bg-gray-50 rounded-xl border flex items-center justify-between group relative overflow-hidden ${
      accent ? `border-${accent}-200` : "border-gray-100"
    }`}
  >
    {accent && (
      <div className={`absolute left-0 top-0 h-full w-0.5 bg-${accent}-500`} />
    )}
    <span className="text-xs font-bold text-gray-700">{name}</span>
    <div className="flex items-center gap-2 opacity-30 group-hover:opacity-100 transition-opacity">
      <ActionIcon name="delete" danger />
      <ActionIcon name="drag_indicator" />
    </div>
  </div>
);

const thaliColumns = [
  {
    color: "text-emerald-500",
    icon: "eco",
    title: "Mini Thali Components",
    badge: "Fixed Menu",
    accent: null,
    items: ["Paneer Butter Masala", "Phulka (2 pcs)", "Steamed Rice"],
  },
  {
    color: "text-blue-500",
    icon: "restaurant",
    title: "Normal Thali Components",
    badge: "Standard",
    accent: "blue",
    items: [
      "Paneer Butter Masala",
      "Yellow Dal Tadka",
      "Phulka (3 pcs)",
      "Jeera Rice",
    ],
  },
  {
    color: "text-purple-500",
    icon: "auto_awesome",
    title: "Deluxe Thali Components",
    badge: "Premium",
    accent: "purple",
    items: [
      "Paneer Butter Masala",
      "Mixed Vegetable Dry",
      "Butter Naan (2 pcs)",
      "Sweet Lassi / Curd",
    ],
  },
];

const WeeklyMenuWidget = () => {
  const [activeDay, setActiveDay] = useState("WED");
  const [activeMeal, setActiveMeal] = useState("Lunch");

  return (
    <Card className="p-6">
      <WidgetTitle
        label="Weekly Menu Customizer"
        right={
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-lg border border-gray-200">
              <Icon name="calendar_month" className="text-sm text-blue-500" />
              <span className="text-[9px] font-black uppercase text-gray-500">
                OCT 21 – OCT 27
              </span>
            </div>
            <Icon
              name="download"
              className="text-sm cursor-pointer text-gray-400 hover:text-gray-700 transition-colors"
            />
          </div>
        }
      />

      {/* Day chips */}
      <div className="flex gap-2 mb-8 overflow-x-auto pb-2 border-b border-gray-100">
        {days.map((d) => (
          <button
            key={d}
            onClick={() => setActiveDay(d)}
            className={`flex-1 text-center py-2 rounded-xl text-[10px] font-bold border transition-all cursor-pointer ${
              activeDay === d
                ? "bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-200"
                : "bg-gray-50 text-gray-400 border-gray-100 hover:bg-gray-100"
            }`}
          >
            {d}
          </button>
        ))}
      </div>

      {/* Meal tabs */}
      <div className="flex justify-center gap-4 mb-10">
        {mealTabs.map(({ icon, label }) => (
          <button
            key={label}
            onClick={() => setActiveMeal(label)}
            className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all cursor-pointer border flex items-center gap-2 ${
              activeMeal === label
                ? "bg-gray-900 text-white border-gray-900"
                : "bg-gray-50 text-gray-400 border-gray-200 hover:border-gray-300"
            }`}
          >
            <Icon name={icon} className="text-sm" />
            {label}
          </button>
        ))}
      </div>

      {/* Thali columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {thaliColumns.map(({ color, icon, title, badge, accent, items }) => (
          <div key={title} className="space-y-4">
            <div className="flex items-center justify-between mb-2">
              <div className={`flex items-center gap-2 ${color}`}>
                <Icon name={icon} className="text-lg" />
                <h5 className="text-[10px] font-black uppercase tracking-[0.2em]">
                  {title}
                </h5>
              </div>
              <span className="text-[8px] font-bold text-gray-300 uppercase tracking-tighter">
                {badge}
              </span>
            </div>
            <div className="space-y-2">
              {items.map((item, i) => (
                <ComponentItem
                  key={item}
                  name={item}
                  accent={i === 0 && accent ? accent : null}
                />
              ))}
              <BtnAdd label="Add Component" />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

// ─── Main Dashboard ──────────────────────────────────────────────────────────

export default function VendorDashboard7() {
  return (
    <div
      className="antialiased overflow-x-hidden min-h-screen bg-gray-50 pt-12"
    >
      {/* Background dot grid */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, rgba(0,0,0,0.04) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Header */}
      {/* <header className="w-full pt-8 pb-6 px-12 flex justify-between items-center border-b border-gray-100 bg-white/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="inline-block shrink-0">
          <div className="text-2xl font-black text-gray-900 tracking-tighter uppercase">
            AhaarMitra
          </div>
          <div className="h-0.5 w-full bg-gradient-to-r from-blue-500 to-transparent" />
        </div>

        <nav className="hidden md:flex items-center gap-10">
          {["Finance", "Order History", "Services", "Subscriber"].map((item) => (
            <a
              key={item}
              href="#"
              className={`text-[11px] font-black uppercase tracking-widest transition-colors ${
                item === "Services"
                  ? "text-gray-900 border-b-2 border-gray-300 pb-1"
                  : "text-gray-400 hover:text-gray-900"
              }`}
            >
              {item}
            </a>
          ))}
        </nav>

        <a
          href="#"
          className="text-sm font-bold text-gray-400 hover:text-gray-800 transition-colors flex items-center gap-2 shrink-0"
        >
          <Icon name="settings" className="text-base" />
          Settings
        </a>
      </header> */}
      {/* Main content */}
      <main className="max-w-7xl mx-auto p-6 md:p-12 relative">
        {/* Hero */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 mb-4">
                Service{" "}
                <span className="text-blue-600">Manager.</span>
              </h1>
              <p className="text-gray-500 text-lg max-w-2xl">
                Configure your meal offerings, pricing schedules, and service
                windows.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button className="bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-black py-3 px-8 rounded-xl transition-all uppercase tracking-widest shadow-lg shadow-blue-200">
                Save All Changes
              </button>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          <div className="col-span-12 md:col-span-4">
            <MealTypesWidget />
          </div>
          <div className="col-span-12 md:col-span-4">
            <ServiceReachWidget />
          </div>
          <div className="col-span-12 md:col-span-4">
            <ServiceWindowsWidget />
          </div>
          <div className="col-span-12 md:col-span-7">
            <TiffinCatalogWidget />
          </div>
          <div className="col-span-12 md:col-span-5">
            <TrialOfferWidget />
          </div>
          <div className="col-span-12">
            <WeeklyMenuWidget />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-10 px-12 border-t border-gray-100 bg-white/60 backdrop-blur-sm mt-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-8">
            {["Privacy Policy", "Terms of Service", "Support Portal"].map(
              (link) => (
                <a
                  key={link}
                  href="#"
                  className="text-gray-400 hover:text-gray-800 transition-colors text-[10px] font-bold uppercase tracking-widest"
                >
                  {link}
                </a>
              )
            )}
          </div>
          <div className="text-gray-400 text-[10px] font-medium uppercase tracking-[0.2em]">
            © 2024 AHAARMITRA ANALYTICS. PRECISION IN SERVICE MANAGEMENT.
          </div>
        </div>
      </footer>
    </div>
  );
}
