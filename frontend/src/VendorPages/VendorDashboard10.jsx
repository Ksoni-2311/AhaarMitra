import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getServiceConfig,
  saveServiceConfig,
} from "../services/vendorServiceConfigApi.js";

/* ----------------------------- DEFAULT CONFIG ----------------------------- */

const mealMeta = {
  breakfast: { icon: "☀️", label: "Breakfast" },
  lunch: { icon: "🍽️", label: "Lunch" },
  dinner: { icon: "🌙", label: "Dinner" },
  snacks: { icon: "🥐", label: "Snacks" },
};

const createEmptyMealBlock = () => ({
  mini: [],
  normal: [],
  deluxe: [],
});

const createEmptyDayMenu = () => ({
  breakfast: createEmptyMealBlock(),
  lunch: createEmptyMealBlock(),
  dinner: createEmptyMealBlock(),
});

const defaultConfig = {
  mealTypes: [
    { name: "breakfast", isActive: true },
    { name: "lunch", isActive: true },
    { name: "dinner", isActive: true },
    { name: "snacks", isActive: false },
  ],

  zones: [
    {
      address: "H-Block, Sector 63",
      city: "Noida",
      state: "UP",
      pincode: "201301",
    },
  ],

  offerExpandedDelivery: false,
  globalMaxExtraDistanceKm: 5,

  serviceWindows: {
    lunch: {
      startTime: "12:00",
      endTime: "14:30",
      autoCutoffEnabled: true,
      cutoffMinutes: 300,
    },
    dinner: {
      startTime: "19:30",
      endTime: "21:30",
      autoCutoffEnabled: true,
      cutoffMinutes: 300,
    },
  },

  pricingVariants: [
    {
      variantName: "Mini Thali",
      dailyPrice: 80,
      weeklyPrice: 500,
      monthlyPrice: 1800,
      components: ["2 Roti", "1 Sabzi", "Rice"],
    },
    {
      variantName: "Normal Thali",
      dailyPrice: 120,
      weeklyPrice: 750,
      monthlyPrice: 2800,
      components: ["3 Roti", "2 Sabzi", "Dal", "Rice"],
    },
    {
      variantName: "Deluxe Thali",
      dailyPrice: 180,
      weeklyPrice: 1100,
      monthlyPrice: 4000,
      components: ["Roti", "Paneer", "Veg", "Dal", "Curd", "Rice"],
    },
  ],

  trialOffer: {
    enabled: true,
    standardTrialPrice: 49,
    onlyFirstOrder: true,
    lunchOnly: false,
    applicableVariants: ["Normal Thali"],
  },

  weeklyMenu: {
    monday: {
      breakfast: createEmptyMealBlock(),
      lunch: {
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
      },
      dinner: createEmptyMealBlock(),
    },
    tuesday: createEmptyDayMenu(),
    wednesday: createEmptyDayMenu(),
    thursday: createEmptyDayMenu(),
    friday: createEmptyDayMenu(),
    saturday: createEmptyDayMenu(),
    sunday: createEmptyDayMenu(),
  },
};

const days = [
  { short: "MON", key: "monday" },
  { short: "TUE", key: "tuesday" },
  { short: "WED", key: "wednesday" },
  { short: "THU", key: "thursday" },
  { short: "FRI", key: "friday" },
  { short: "SAT", key: "saturday" },
  { short: "SUN", key: "sunday" },
];

const mealTabs = [
  { id: "breakfast", label: "Breakfast", icon: "☀️" },
  { id: "lunch", label: "Lunch", icon: "🍽️" },
  { id: "dinner", label: "Dinner", icon: "🌙" },
];

const mealStatuses = [
  {
    id: "breakfast",
    label: "Breakfast",
    icon: "☀️",
    time: "07:00 – 09:30",
    active: true,
  },
  {
    id: "lunch",
    label: "Lunch",
    icon: "🍽️",
    time: "Manual cancellation applied",
    active: false,
  },
  {
    id: "dinner",
    label: "Dinner",
    icon: "🌙",
    time: "19:30 – 21:30",
    active: true,
  },
  {
    id: "snacks",
    label: "Snacks",
    icon: "🥐",
    time: "16:30 – 18:00",
    active: true,
  },
];

/* ------------------------------ MERGE HELPERS ----------------------------- */

const mergeConfig = (incoming = {}) => ({
  ...defaultConfig,
  ...incoming,

  mealTypes:
    incoming?.mealTypes?.length > 0
      ? incoming.mealTypes
      : defaultConfig.mealTypes,

  zones: incoming?.zones?.length > 0 ? incoming.zones : defaultConfig.zones,

  serviceWindows: {
    lunch: {
      ...defaultConfig.serviceWindows.lunch,
      ...(incoming?.serviceWindows?.lunch || {}),
    },
    dinner: {
      ...defaultConfig.serviceWindows.dinner,
      ...(incoming?.serviceWindows?.dinner || {}),
    },
  },

  pricingVariants:
    incoming?.pricingVariants?.length > 0
      ? incoming.pricingVariants
      : defaultConfig.pricingVariants,

  trialOffer: {
    ...defaultConfig.trialOffer,
    ...(incoming?.trialOffer || {}),
  },

  weeklyMenu: {
    monday: {
      ...defaultConfig.weeklyMenu.monday,
      ...(incoming?.weeklyMenu?.monday || {}),
      breakfast: {
        ...defaultConfig.weeklyMenu.monday.breakfast,
        ...(incoming?.weeklyMenu?.monday?.breakfast || {}),
      },
      lunch: {
        ...defaultConfig.weeklyMenu.monday.lunch,
        ...(incoming?.weeklyMenu?.monday?.lunch || {}),
      },
      dinner: {
        ...defaultConfig.weeklyMenu.monday.dinner,
        ...(incoming?.weeklyMenu?.monday?.dinner || {}),
      },
    },
    tuesday: {
      ...defaultConfig.weeklyMenu.tuesday,
      ...(incoming?.weeklyMenu?.tuesday || {}),
      breakfast: {
        ...defaultConfig.weeklyMenu.tuesday.breakfast,
        ...(incoming?.weeklyMenu?.tuesday?.breakfast || {}),
      },
      lunch: {
        ...defaultConfig.weeklyMenu.tuesday.lunch,
        ...(incoming?.weeklyMenu?.tuesday?.lunch || {}),
      },
      dinner: {
        ...defaultConfig.weeklyMenu.tuesday.dinner,
        ...(incoming?.weeklyMenu?.tuesday?.dinner || {}),
      },
    },
    wednesday: {
      ...defaultConfig.weeklyMenu.wednesday,
      ...(incoming?.weeklyMenu?.wednesday || {}),
      breakfast: {
        ...defaultConfig.weeklyMenu.wednesday.breakfast,
        ...(incoming?.weeklyMenu?.wednesday?.breakfast || {}),
      },
      lunch: {
        ...defaultConfig.weeklyMenu.wednesday.lunch,
        ...(incoming?.weeklyMenu?.wednesday?.lunch || {}),
      },
      dinner: {
        ...defaultConfig.weeklyMenu.wednesday.dinner,
        ...(incoming?.weeklyMenu?.wednesday?.dinner || {}),
      },
    },
    thursday: {
      ...defaultConfig.weeklyMenu.thursday,
      ...(incoming?.weeklyMenu?.thursday || {}),
      breakfast: {
        ...defaultConfig.weeklyMenu.thursday.breakfast,
        ...(incoming?.weeklyMenu?.thursday?.breakfast || {}),
      },
      lunch: {
        ...defaultConfig.weeklyMenu.thursday.lunch,
        ...(incoming?.weeklyMenu?.thursday?.lunch || {}),
      },
      dinner: {
        ...defaultConfig.weeklyMenu.thursday.dinner,
        ...(incoming?.weeklyMenu?.thursday?.dinner || {}),
      },
    },
    friday: {
      ...defaultConfig.weeklyMenu.friday,
      ...(incoming?.weeklyMenu?.friday || {}),
      breakfast: {
        ...defaultConfig.weeklyMenu.friday.breakfast,
        ...(incoming?.weeklyMenu?.friday?.breakfast || {}),
      },
      lunch: {
        ...defaultConfig.weeklyMenu.friday.lunch,
        ...(incoming?.weeklyMenu?.friday?.lunch || {}),
      },
      dinner: {
        ...defaultConfig.weeklyMenu.friday.dinner,
        ...(incoming?.weeklyMenu?.friday?.dinner || {}),
      },
    },
    saturday: {
      ...defaultConfig.weeklyMenu.saturday,
      ...(incoming?.weeklyMenu?.saturday || {}),
      breakfast: {
        ...defaultConfig.weeklyMenu.saturday.breakfast,
        ...(incoming?.weeklyMenu?.saturday?.breakfast || {}),
      },
      lunch: {
        ...defaultConfig.weeklyMenu.saturday.lunch,
        ...(incoming?.weeklyMenu?.saturday?.lunch || {}),
      },
      dinner: {
        ...defaultConfig.weeklyMenu.saturday.dinner,
        ...(incoming?.weeklyMenu?.saturday?.dinner || {}),
      },
    },
    sunday: {
      ...defaultConfig.weeklyMenu.sunday,
      ...(incoming?.weeklyMenu?.sunday || {}),
      breakfast: {
        ...defaultConfig.weeklyMenu.sunday.breakfast,
        ...(incoming?.weeklyMenu?.sunday?.breakfast || {}),
      },
      lunch: {
        ...defaultConfig.weeklyMenu.sunday.lunch,
        ...(incoming?.weeklyMenu?.sunday?.lunch || {}),
      },
      dinner: {
        ...defaultConfig.weeklyMenu.sunday.dinner,
        ...(incoming?.weeklyMenu?.sunday?.dinner || {}),
      },
    },
  },
});

/* ------------------------------- UI HELPERS ------------------------------- */

function SectionLabel({ children }) {
  return (
    <div className="text-[10px] font-black uppercase tracking-[0.18em] text-gray-400 mb-4 flex items-center justify-between">
      {children}
    </div>
  );
}

function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 ${className}`}
    >
      {children}
    </div>
  );
}

function Toggle({ active, onToggle, danger = false }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`w-11 h-6 rounded-full relative transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-1 flex-shrink-0 ${
        active
          ? danger
            ? "bg-rose-500 focus:ring-rose-300"
            : "bg-blue-500 focus:ring-blue-300"
          : "bg-gray-200 focus:ring-gray-300"
      }`}
      aria-checked={active}
      role="switch"
    >
      <span
        className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-all duration-300 ${
          active ? "right-1" : "left-1"
        }`}
      />
    </button>
  );
}

function IconBtn({ title, icon, danger = false, onClick }) {
  return (
    <button
      type="button"
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

function Badge({ children, color = "gray" }) {
  const colors = {
    gray: "bg-gray-100 text-gray-500",
    blue: "bg-blue-50 text-blue-600 border border-blue-100",
    emerald: "bg-emerald-50 text-emerald-600 border border-emerald-100",
    rose: "bg-rose-50 text-rose-500 border border-rose-100",
    violet: "bg-violet-50 text-violet-600 border border-violet-100",
  };
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest ${colors[color]}`}>
      {children}
    </span>
  );
}

/* ------------------------------- COMPONENTS ------------------------------- */

function MealTypesCard({ meals, setConfig }) {
  const availableMeals = ["breakfast", "lunch", "dinner", "snacks"];

  const toggleMeal = (mealName) => {
    setConfig((prev) => ({
      ...prev,
      mealTypes: prev.mealTypes.map((meal) =>
        meal.name === mealName
          ? { ...meal, isActive: !meal.isActive }
          : meal
      ),
    }));
  };

  const removeMeal = (mealName) => {
    setConfig((prev) => ({
      ...prev,
      mealTypes: prev.mealTypes.filter((meal) => meal.name !== mealName),
    }));
  };

  const addMissingMeal = (mealName) => {
    setConfig((prev) => ({
      ...prev,
      mealTypes: [
        ...prev.mealTypes,
        { name: mealName, isActive: true },
      ],
    }));
  };

  const missingMeals = availableMeals.filter(
    (mealName) => !meals.some((meal) => meal.name === mealName)
  );

  const activeCount = meals.filter((m) => m.isActive).length;

  return (
    <Card className="p-5 flex flex-col h-full">
      <SectionLabel>
        <span>Meal Types &amp; Frequency</span>
        <Badge color="blue">{activeCount} Active</Badge>
      </SectionLabel>

      <div className="flex flex-col gap-2.5 flex-1">
        {meals.map((m) => {
          const meta = mealMeta[m.name] || { icon: "🍴", label: m.name };

          return (
            <div
              key={m.name}
              className={`group flex items-center justify-between px-4 py-3 rounded-xl border transition-all duration-200 ${
                m.isActive
                  ? "bg-blue-50/50 border-blue-100 hover:border-blue-200"
                  : "bg-gray-50 border-gray-100 hover:border-gray-200 opacity-60"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-lg ${
                  m.isActive ? "bg-white shadow-sm" : "bg-gray-100"
                }`}>
                  {meta.icon}
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800">{meta.label}</p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">
                    {m.isActive ? "Serving" : "Paused"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Toggle active={m.isActive} onToggle={() => toggleMeal(m.name)} />
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <IconBtn title="Remove" icon="✕" danger onClick={() => removeMeal(m.name)} />
                </div>
              </div>
            </div>
          );
        })}

        {missingMeals.length > 0 && (
          <div className="mt-3 pt-3 border-t border-gray-100 space-y-2">
            <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-2">
              Add Meal Type
            </p>
            {missingMeals.map((mealName) => {
              const meta = mealMeta[mealName] || { icon: "🍴", label: mealName };
              return (
                <button
                  key={mealName}
                  type="button"
                  onClick={() => addMissingMeal(mealName)}
                  className="w-full py-2.5 px-3 flex items-center justify-center gap-2 border border-dashed border-gray-200 rounded-xl text-[10px] font-black uppercase tracking-widest text-gray-500 hover:border-blue-400 hover:text-blue-500 hover:bg-blue-50/50 transition-all"
                >
                  <span>{meta.icon}</span> + Add {meta.label}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </Card>
  );
}

function ServiceZonesCard({ hubs, setConfig }) {
  const addZone = () => {
    setConfig((prev) => ({
      ...prev,
      zones: [...prev.zones, { address: "", city: "", state: "", pincode: "" }],
    }));
  };

  const updateZoneField = (index, field, value) => {
    setConfig((prev) => ({
      ...prev,
      zones: prev.zones.map((zone, i) =>
        i === index ? { ...zone, [field]: value } : zone
      ),
    }));
  };

  const removeZone = (index) => {
    setConfig((prev) => ({
      ...prev,
      zones: prev.zones.filter((_, i) => i !== index),
    }));
  };

  return (
    <Card className="p-5 flex flex-col h-full">
      <SectionLabel>
        <span>Service Reach &amp; Zones</span>
        <Badge color="blue">{hubs.length} Hub{hubs.length !== 1 ? "s" : ""}</Badge>
      </SectionLabel>

      <div className="flex-1 overflow-y-auto space-y-3 pr-0.5 custom-scroll">
        {hubs.map((hub, i) => (
          <div
            key={i}
            className="group rounded-xl border border-gray-100 bg-gray-50 hover:bg-white hover:border-blue-100 hover:shadow-sm transition-all duration-200 overflow-hidden"
          >
            {/* Hub header */}
            <div className={`px-4 py-2 flex items-center justify-between ${i === 0 ? "bg-blue-500" : "bg-gray-200"}`}>
              <div className="flex items-center gap-2">
                <span className="text-xs">{i === 0 ? "🏠" : "📍"}</span>
                <span className={`text-[9px] font-black uppercase tracking-widest ${i === 0 ? "text-white" : "text-gray-600"}`}>
                  {i === 0 ? "Primary Hub" : `Hub ${i + 1}`}
                </span>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  type="button"
                  onClick={() => removeZone(i)}
                  className={`text-[10px] px-2 py-0.5 rounded-md transition-all ${
                    i === 0
                      ? "text-white/70 hover:text-white hover:bg-white/20"
                      : "text-gray-400 hover:text-rose-500 hover:bg-rose-50"
                  }`}
                >
                  Remove
                </button>
              </div>
            </div>

            {/* Hub inputs */}
            <div className="p-3 space-y-2">
              <input
                type="text"
                placeholder="Street address…"
                value={hub.address}
                onChange={(e) => updateZoneField(i, "address", e.target.value)}
                className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400/30 focus:border-blue-400 transition-all"
              />

              <div className="grid grid-cols-3 gap-2">
                {[
                  ["city", "City", hub.city],
                  ["state", "State", hub.state],
                  ["pincode", "PIN", hub.pincode],
                ].map(([field, placeholder, value]) => (
                  <input
                    key={field}
                    type="text"
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => updateZoneField(i, field, e.target.value)}
                    className="w-full bg-white border border-gray-200 rounded-lg px-2.5 py-2 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400/30 focus:border-blue-400 transition-all"
                  />
                ))}
              </div>

              {hub.address && (
                <p className="text-[10px] text-gray-500 font-medium px-1">
                  📍 {hub.address}, {hub.city}, {hub.state} – {hub.pincode}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={addZone}
        className="mt-3 w-full py-3 flex items-center justify-center gap-2 border border-dashed border-gray-200 rounded-xl text-[10px] font-black uppercase tracking-widest text-gray-400 hover:border-blue-400 hover:text-blue-500 hover:bg-blue-50/50 transition-all"
      >
        📍 + Add Service Hub
      </button>
    </Card>
  );
}

function ServiceWindowsCard({ serviceWindows, setConfig }) {
  const { lunch, dinner } = serviceWindows;

  const updateWindow = (meal, field, value) => {
    setConfig((prev) => ({
      ...prev,
      serviceWindows: {
        ...prev.serviceWindows,
        [meal]: {
          ...prev.serviceWindows[meal],
          [field]:
            field === "cutoffMinutes"
              ? Number(value)
              : field === "autoCutoffEnabled"
                ? Boolean(value)
                : value,
        },
      },
    }));
  };

  const WindowBlock = ({ meal, data, accent }) => {
    const accents = {
      blue: {
        bg: "bg-blue-50",
        border: "border-blue-100",
        label: "text-blue-600",
        input: "border-blue-200 focus:ring-blue-400/30 focus:border-blue-400",
        dot: "bg-blue-500",
      },
      violet: {
        bg: "bg-violet-50",
        border: "border-violet-100",
        label: "text-violet-600",
        input: "border-violet-200 focus:ring-violet-400/30 focus:border-violet-400",
        dot: "bg-violet-500",
      },
    };
    const s = accents[accent];

    return (
      <div className={`p-4 ${s.bg} rounded-xl border ${s.border}`}>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${s.dot}`} />
            <p className={`text-[10px] font-black uppercase tracking-widest ${s.label}`}>
              {meal === "lunch" ? "🍽️ Lunch Window" : "🌙 Dinner Window"}
            </p>
          </div>
          <span className="text-[9px] text-gray-400 font-semibold">
            {data.startTime} – {data.endTime}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2 mb-3">
          {[["startTime", "Opens"], ["endTime", "Closes"]].map(([field, label]) => (
            <div key={field} className="space-y-1">
              <label className="text-[9px] font-bold uppercase tracking-wider text-gray-500 block">{label}</label>
              <input
                type="time"
                value={data[field]}
                onChange={(e) => updateWindow(meal, field, e.target.value)}
                className={`w-full bg-white border rounded-lg px-2 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 transition-all ${s.input}`}
              />
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between py-2.5 px-3 bg-white rounded-lg border border-gray-100 mb-2">
          <div>
            <p className="text-[10px] font-bold text-gray-700 uppercase tracking-wider">Auto Cutoff</p>
            <p className="text-[9px] text-gray-400">{data.autoCutoffEnabled ? "Enabled" : "Disabled"}</p>
          </div>
          <Toggle
            active={data.autoCutoffEnabled}
            onToggle={() => updateWindow(meal, "autoCutoffEnabled", !data.autoCutoffEnabled)}
          />
        </div>

        <div className="space-y-1">
          <label className="text-[9px] font-bold uppercase tracking-wider text-gray-500 block">
            Cutoff (minutes before)
          </label>
          <input
            type="number"
            value={data.cutoffMinutes}
            onChange={(e) => updateWindow(meal, "cutoffMinutes", e.target.value)}
            className={`w-full bg-white border rounded-lg px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 transition-all ${s.input}`}
          />
        </div>
      </div>
    );
  };

  return (
    <Card className="p-5 flex flex-col h-full">
      <SectionLabel>
        <span>Service Windows &amp; Logistics</span>
        <span className="text-gray-300">⏱</span>
      </SectionLabel>

      <div className="space-y-4 flex-1">
        <WindowBlock meal="lunch" data={lunch} accent="blue" />
        <WindowBlock meal="dinner" data={dinner} accent="violet" />
      </div>
    </Card>
  );
}

function TiffinCatalogCard({ catalog, setConfig }) {
  const update = (index, field, val) => {
    setConfig((prev) => ({
      ...prev,
      pricingVariants: prev.pricingVariants.map((c, i) =>
        i === index ? { ...c, [field]: val } : c
      ),
    }));
  };

  const variantColors = ["emerald", "blue", "violet"];
  const colorMap = {
    emerald: { dot: "bg-emerald-400", badge: "bg-emerald-50 text-emerald-600 border-emerald-100", ring: "focus:ring-emerald-400/20 focus:border-emerald-300" },
    blue: { dot: "bg-blue-400", badge: "bg-blue-50 text-blue-600 border-blue-100", ring: "focus:ring-blue-400/20 focus:border-blue-300" },
    violet: { dot: "bg-violet-400", badge: "bg-violet-50 text-violet-600 border-violet-100", ring: "focus:ring-violet-400/20 focus:border-violet-300" },
  };

  return (
    <Card className="p-5">
      <SectionLabel>
        <span>Tiffin Catalog &amp; Pricing</span>
        <Badge color="blue">{catalog.length} Variants</Badge>
      </SectionLabel>

      <div className="overflow-x-auto -mx-1">
        <table className="w-full min-w-[480px]">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="pb-3 text-left pl-1">
                <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Variant</span>
              </th>
              {["Daily (₹)", "Weekly (₹)", "Monthly (₹)"].map((h) => (
                <th key={h} className="pb-3 text-left pl-3">
                  <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">{h}</span>
                </th>
              ))}
              <th className="pb-3 w-8" />
            </tr>
          </thead>

          <tbody>
            {catalog.map((item, index) => {
              const color = variantColors[index % variantColors.length];
              const c = colorMap[color];
              return (
                <tr key={`${item.variantName}-${index}`} className="group border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors">
                  <td className="py-4 pl-1">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${c.dot}`} />
                      <div>
                        <p className="text-sm font-bold text-gray-800">{item.variantName}</p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {(item.components || []).map((comp, ci) => (
                            <span key={ci} className={`text-[8px] font-semibold px-1.5 py-0.5 rounded border ${c.badge}`}>
                              {comp}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </td>

                  {[
                    ["dailyPrice", item.dailyPrice],
                    ["weeklyPrice", item.weeklyPrice],
                    ["monthlyPrice", item.monthlyPrice],
                  ].map(([f, value]) => (
                    <td className="py-4 pl-3" key={f}>
                      <div className="relative w-24">
                        <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs font-bold">₹</span>
                        <input
                          type="number"
                          value={value}
                          onChange={(e) => update(index, f, Number(e.target.value))}
                          className={`w-full bg-gray-50 border border-gray-200 rounded-lg pl-6 pr-2 py-2 text-sm font-semibold text-gray-800 focus:outline-none focus:ring-2 focus:bg-white transition-all ${c.ring}`}
                        />
                      </div>
                    </td>
                  ))}

                  <td className="py-4 text-right pr-1">
                    <button
                      type="button"
                      title="Settings"
                      className="opacity-0 group-hover:opacity-100 text-gray-300 hover:text-gray-600 text-sm transition-all p-1.5 rounded-lg hover:bg-gray-100"
                    >
                      ⚙️
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <Link to="/22" className="w-full block mt-4">
        <button
          type="button"
          className="w-full py-2.5 flex items-center justify-center gap-2 border border-dashed border-gray-200 rounded-xl text-[10px] font-black uppercase tracking-widest text-gray-400 hover:border-blue-400 hover:text-blue-500 hover:bg-blue-50/40 transition-all"
        >
          + Add New Tiffin Variant
        </button>
      </Link>
    </Card>
  );
}

function TrialOfferCard({ trialOffer, setConfig, pricingVariants }) {
  const updateTrialOffer = (field, value) => {
    setConfig((prev) => ({
      ...prev,
      trialOffer: { ...prev.trialOffer, [field]: value },
    }));
  };

  const currentVariant = trialOffer.applicableVariants?.[0] || "Normal Thali";

  return (
    <Card className="p-5">
      <SectionLabel>
        <span>Trial Offer Configuration</span>
        <Badge color={trialOffer.enabled ? "emerald" : "gray"}>
          {trialOffer.enabled ? "Live" : "Off"}
        </Badge>
      </SectionLabel>

      <div className="space-y-4">
        {/* Enable toggle row */}
        <div className="flex items-center justify-between p-3.5 bg-gray-50 rounded-xl border border-gray-100">
          <div>
            <p className="text-sm font-bold text-gray-800">Trial Offer</p>
            <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold mt-0.5">
              {trialOffer.enabled ? "Currently active for new users" : "Disabled"}
            </p>
          </div>
          <Toggle
            active={trialOffer.enabled}
            onToggle={() => updateTrialOffer("enabled", !trialOffer.enabled)}
          />
        </div>

        {/* Price hero block */}
        <div className={`p-4 rounded-2xl border transition-all ${trialOffer.enabled ? "bg-gradient-to-br from-blue-50 to-blue-50/30 border-blue-200" : "bg-gray-50 border-gray-100 opacity-50"}`}>
          <p className="text-[9px] font-black text-blue-500 uppercase tracking-widest mb-3">
            Trial Price Per Meal
          </p>

          <div className="flex items-end gap-2 mb-4">
            <div className="relative flex-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-2xl font-black text-gray-400">₹</span>
              <input
                type="number"
                value={trialOffer.standardTrialPrice}
                onChange={(e) => updateTrialOffer("standardTrialPrice", Number(e.target.value))}
                disabled={!trialOffer.enabled}
                className="w-full bg-white border border-blue-200 rounded-xl pl-8 pr-3 py-3 text-2xl font-black text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400/30 focus:border-blue-400 transition-all disabled:cursor-not-allowed"
              />
            </div>
            <div className="text-right pb-1">
              <p className="text-[9px] text-gray-400 font-semibold uppercase tracking-wider">instead of</p>
              <p className="text-lg font-black text-gray-300 line-through">
                ₹{pricingVariants.find(v => v.variantName === currentVariant)?.dailyPrice || "—"}
              </p>
            </div>
          </div>

          {/* Variant selector */}
          <div>
            <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-2">Apply to variant</p>
            <div className="flex flex-wrap gap-2">
              {pricingVariants.map((variant) => (
                <button
                  type="button"
                  key={variant.variantName}
                  onClick={() => updateTrialOffer("applicableVariants", [variant.variantName])}
                  disabled={!trialOffer.enabled}
                  className={`px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-wider transition-all border disabled:cursor-not-allowed ${
                    currentVariant === variant.variantName
                      ? "bg-blue-500 text-white border-blue-500 shadow-sm shadow-blue-200"
                      : "bg-white text-gray-500 border-gray-200 hover:border-blue-300 hover:text-blue-500"
                  }`}
                >
                  {variant.variantName}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

function WeeklyMenuCard({ weeklyMenu, setConfig }) {
  const [activeDay, setActiveDay] = useState("wednesday");
  const [activeMeal, setActiveMeal] = useState("lunch");
  const [newItems, setNewItems] = useState({ mini: "", normal: "", deluxe: "" });

  const menus = weeklyMenu?.[activeDay]?.[activeMeal] || createEmptyMealBlock();

  const removeItem = (tier, idx) => {
    setConfig((prev) => ({
      ...prev,
      weeklyMenu: {
        ...prev.weeklyMenu,
        [activeDay]: {
          ...prev.weeklyMenu[activeDay],
          [activeMeal]: {
            ...prev.weeklyMenu[activeDay][activeMeal],
            [tier]: prev.weeklyMenu[activeDay][activeMeal][tier].filter((_, i) => i !== idx),
          },
        },
      },
    }));
  };

  const addItem = (tier) => {
    const value = newItems[tier].trim();
    if (!value) return;

    setConfig((prev) => ({
      ...prev,
      weeklyMenu: {
        ...prev.weeklyMenu,
        [activeDay]: {
          ...prev.weeklyMenu[activeDay],
          [activeMeal]: {
            ...prev.weeklyMenu[activeDay][activeMeal],
            [tier]: [...prev.weeklyMenu[activeDay][activeMeal][tier], value],
          },
        },
      },
    }));

    setNewItems((prev) => ({ ...prev, [tier]: "" }));
  };

  const tierConfig = [
    { key: "mini", label: "Mini Thali", tag: "Budget", emoji: "🌿", accent: "emerald",
      colors: { bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-600", pill: "bg-emerald-100 text-emerald-600", inputBorder: "focus:border-emerald-400 focus:ring-emerald-400/20", btn: "border-emerald-300 text-emerald-600 hover:bg-emerald-50" } },
    { key: "normal", label: "Normal Thali", tag: "Standard", emoji: "🍽️", accent: "blue",
      colors: { bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-600", pill: "bg-blue-100 text-blue-600", inputBorder: "focus:border-blue-400 focus:ring-blue-400/20", btn: "border-blue-300 text-blue-600 hover:bg-blue-50" } },
    { key: "deluxe", label: "Deluxe Thali", tag: "Premium", emoji: "✨", accent: "violet",
      colors: { bg: "bg-violet-50", border: "border-violet-200", text: "text-violet-600", pill: "bg-violet-100 text-violet-600", inputBorder: "focus:border-violet-400 focus:ring-violet-400/20", btn: "border-violet-300 text-violet-600 hover:bg-violet-50" } },
  ];

  const totalItems = tierConfig.reduce((sum, t) => sum + (menus[t.key]?.length || 0), 0);

  return (
    <Card className="p-5">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
        <div>
          <p className="text-[9px] font-black uppercase tracking-[0.18em] text-gray-400 mb-1">Weekly Menu Customizer</p>
          <p className="text-xs text-gray-500">
            {totalItems > 0 ? `${totalItems} items planned for this slot` : "No items set for this slot yet"}
          </p>
        </div>
        <Badge color="blue">📅 Weekly Planner</Badge>
      </div>

      {/* Day selector */}
      <div className="flex gap-1.5 mb-5 overflow-x-auto pb-1">
        {days.map((d) => (
          <button
            type="button"
            key={d.key}
            onClick={() => setActiveDay(d.key)}
            className={`flex-1 min-w-[2.5rem] text-center py-2.5 rounded-xl text-[10px] font-black uppercase tracking-wider border transition-all ${
              activeDay === d.key
                ? "bg-blue-500 text-white border-blue-500 shadow-sm shadow-blue-200/60"
                : "bg-gray-50 text-gray-500 border-gray-100 hover:bg-gray-100 hover:border-gray-200"
            }`}
          >
            {d.short}
          </button>
        ))}
      </div>

      {/* Meal selector */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex items-center bg-gray-100 p-1 rounded-full gap-0.5">
          {mealTabs.map((tab) => (
            <button
              type="button"
              key={tab.id}
              onClick={() => setActiveMeal(tab.id)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-wider transition-all ${
                activeMeal === tab.id
                  ? "bg-white text-gray-800 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <span>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tier columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {tierConfig.map((tier) => {
          const items = menus[tier.key] || [];
          return (
            <div key={tier.key} className={`rounded-xl border ${tier.colors.border} ${tier.colors.bg} p-4`}>
              {/* Tier header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-base">{tier.emoji}</span>
                  <div>
                    <p className={`text-[10px] font-black uppercase tracking-widest ${tier.colors.text}`}>{tier.label}</p>
                    <p className="text-[8px] text-gray-400 font-semibold uppercase">{tier.tag}</p>
                  </div>
                </div>
                <span className={`text-[9px] font-black px-2 py-0.5 rounded-full ${tier.colors.pill}`}>
                  {items.length} items
                </span>
              </div>

              {/* Items list */}
              <div className="space-y-1.5 mb-3 min-h-[60px]">
                {items.length === 0 && (
                  <p className="text-[10px] text-gray-400 text-center py-4 italic">No items added</p>
                )}
                {items.map((item, idx) => (
                  <div
                    key={idx}
                    className="group flex items-center justify-between px-3 py-2.5 bg-white rounded-lg border border-white/80 shadow-sm hover:shadow transition-all"
                  >
                    <span className="text-sm text-gray-700 font-medium">{item}</span>
                    <button
                      type="button"
                      onClick={() => removeItem(tier.key, idx)}
                      className="opacity-0 group-hover:opacity-100 text-gray-300 hover:text-rose-500 transition-all ml-2 flex-shrink-0 text-xs"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>

              {/* Add input */}
              <div className="flex gap-1.5">
                <input
                  type="text"
                  value={newItems[tier.key]}
                  onChange={(e) => setNewItems((prev) => ({ ...prev, [tier.key]: e.target.value }))}
                  onKeyDown={(e) => e.key === "Enter" && addItem(tier.key)}
                  placeholder="Add item…"
                  className={`flex-1 bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 transition-all ${tier.colors.inputBorder}`}
                />
                <button
                  type="button"
                  onClick={() => addItem(tier.key)}
                  className={`px-3 py-2 bg-white border rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${tier.colors.btn}`}
                >
                  Add
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

function CancellationCard() {
  const [statuses, setStatuses] = useState(mealStatuses);
  const [selectedDate, setSelectedDate] = useState("2024-10-23");

  const toggleMeal = (id) =>
    setStatuses((prev) =>
      prev.map((m) => (m.id === id ? { ...m, active: !m.active } : m))
    );

  const activeCount = statuses.filter((m) => m.active).length;

  return (
    <Card className="p-5">
      <SectionLabel>
        <span>Meal Cancellation &amp; Outage Control</span>
        <Badge color={activeCount === statuses.length ? "emerald" : activeCount === 0 ? "rose" : "blue"}>
          {activeCount}/{statuses.length} Active
        </Badge>
      </SectionLabel>

      {/* Date selector + bulk cancel */}
      <div className="bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden mb-6">
        <div className="p-5 grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
          <div>
            <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-2">
              Step 1 — Select Date
            </p>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400">📅</span>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full bg-white border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm font-bold text-gray-800 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 outline-none transition-all"
              />
            </div>
          </div>

          <div>
            <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-2">
              Step 2 — Bulk Action
            </p>
            <Link to="/23">
              <button
                type="button"
                className="w-full bg-rose-500 hover:bg-rose-600 active:scale-[0.98] text-white text-[10px] font-black py-3.5 px-6 rounded-xl transition-all uppercase tracking-widest flex items-center justify-center gap-2 border border-rose-400 shadow-sm shadow-rose-200"
              >
                🚫 Cancel All Meals for This Day
              </button>
            </Link>
          </div>
        </div>

        {selectedDate && (
          <div className="px-5 pb-4">
            <p className="text-[10px] text-gray-500">
              Changes will apply to <span className="font-bold text-gray-700">{new Date(selectedDate).toLocaleDateString("en-IN", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</span>
            </p>
          </div>
        )}
      </div>

      {/* Individual meal toggles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {statuses.map((meal) => (
          <div
            key={meal.id}
            className={`p-4 rounded-2xl border transition-all ${
              !meal.active
                ? "border-rose-200 bg-rose-50/60 ring-1 ring-rose-100"
                : "border-gray-100 bg-white hover:border-gray-200 hover:shadow-sm"
            }`}
          >
            {/* Top row */}
            <div className="flex items-start justify-between mb-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl ${
                meal.active ? "bg-gray-50" : "bg-rose-100/60"
              }`}>
                <span className={meal.active ? "" : "opacity-50"}>{meal.icon}</span>
              </div>
              <span className={`text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-full ${
                meal.active
                  ? "bg-emerald-50 text-emerald-600 border border-emerald-100"
                  : "bg-rose-100 text-rose-500 border border-rose-200"
              }`}>
                {meal.active ? "Active" : "Cancelled"}
              </span>
            </div>

            <h4 className={`text-sm font-bold mb-0.5 ${meal.active ? "text-gray-800" : "text-gray-500"}`}>
              {meal.label}
            </h4>
            <p className={`text-[10px] font-medium mb-4 ${meal.active ? "text-gray-400" : "text-rose-400"}`}>
              {meal.active ? meal.time : "Cancelled for day"}
            </p>

            <button
              type="button"
              onClick={() => toggleMeal(meal.id)}
              className={`w-full py-2.5 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-1.5 border ${
                meal.active
                  ? "bg-white text-gray-500 border-gray-200 hover:bg-rose-50 hover:border-rose-200 hover:text-rose-500"
                  : "bg-white text-gray-500 border-gray-200 hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-600"
              }`}
            >
              {meal.active ? `🚫 Cancel` : `↩️ Resume`}
            </button>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ---------------------------------- PAGE ---------------------------------- */

export default function VendorDashboard7() {
  const [config, setConfig] = useState(defaultConfig);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const handleSaveAll = async () => {
    try {
      setSaving(true);
      setMessage("");

      const payload = {
        ...config,
        globalMaxExtraDistanceKm: Number(config.globalMaxExtraDistanceKm || 0),
        pricingVariants: config.pricingVariants.map((item) => ({
          ...item,
          dailyPrice: Number(item.dailyPrice || 0),
          weeklyPrice: Number(item.weeklyPrice || 0),
          monthlyPrice: Number(item.monthlyPrice || 0),
          components: Array.isArray(item.components) ? item.components : [],
        })),
        trialOffer: {
          ...config.trialOffer,
          standardTrialPrice: Number(config.trialOffer.standardTrialPrice || 0),
        },
        zones: config.zones.map((z) => ({
          address: z.address || "",
          city: z.city || "",
          state: z.state || "",
          pincode: z.pincode || "",
        })),
      };

      const res = await saveServiceConfig(payload);
      setConfig(mergeConfig(res?.data || {}));
      setMessage(res?.message || "Saved successfully");
    } catch (error) {
      console.error(error);
      setMessage(error.message || "Failed to save service config");
    } finally {
      setSaving(false);
    }
  };

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        setLoading(true);
        setMessage("");

        const res = await getServiceConfig();

        if (res?.data) {
          setConfig(mergeConfig(res.data));
        } else {
          setConfig(defaultConfig);
        }
      } catch (error) {
        console.error(error);
        setMessage(error.message || "Failed to fetch service config");
      } finally {
        setLoading(false);
      }
    };

    fetchConfig();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50/70">
      <style>{`
        .custom-scroll::-webkit-scrollbar { width: 3px; }
        .custom-scroll::-webkit-scrollbar-track { background: transparent; }
        .custom-scroll::-webkit-scrollbar-thumb { background: #e5e7eb; border-radius: 10px; }
        .custom-scroll::-webkit-scrollbar-thumb:hover { background: #d1d5db; }
        input[type='date']::-webkit-calendar-picker-indicator { cursor: pointer; opacity: 0.4; }
        input[type='time']::-webkit-calendar-picker-indicator { cursor: pointer; opacity: 0.4; }
        .uniform-card-height { height: 560px; }
      `}</style>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-8 pt-24">

        {/* Status bar */}
        {(loading || message) && (
          <div className={`mb-5 px-4 py-3 rounded-xl border text-sm font-semibold flex items-center gap-2 ${
            loading
              ? "bg-blue-50 border-blue-100 text-blue-600"
              : message.toLowerCase().includes("fail") || message.toLowerCase().includes("error")
                ? "bg-rose-50 border-rose-100 text-rose-600"
                : "bg-emerald-50 border-emerald-100 text-emerald-600"
          }`}>
            <span>{loading ? "⏳" : message.toLowerCase().includes("fail") ? "❌" : "✅"}</span>
            {loading ? "Loading service config…" : message}
          </div>
        )}

        {/* Page header */}
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-5">
          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.22em] text-blue-400 mb-2">Service Configuration</p>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 leading-none">
              Service <span className="text-blue-500">Manager.</span>
            </h1>
            <p className="text-gray-400 text-sm mt-3 max-w-md">
              Configure meal offerings, pricing schedules, delivery zones, and service windows — all in one place.
            </p>
          </div>

          <button
            type="button"
            onClick={handleSaveAll}
            disabled={saving}
            className="shrink-0 bg-blue-500 hover:bg-blue-600 active:scale-[0.98] text-white text-[10px] font-black py-3.5 px-8 rounded-xl transition-all uppercase tracking-widest shadow-md shadow-blue-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {saving ? (
              <>
                <span className="inline-block w-3.5 h-3.5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                Saving…
              </>
            ) : (
              <>💾 Save All Changes</>
            )}
          </button>
        </div>

        {/* Row 1: Meal types | Zones | Windows */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="uniform-card-height flex flex-col">
            <MealTypesCard meals={config.mealTypes} setConfig={setConfig} />
          </div>
          <div className="uniform-card-height flex flex-col">
            <ServiceZonesCard hubs={config.zones} setConfig={setConfig} />
          </div>
          <div className="uniform-card-height flex flex-col">
            <ServiceWindowsCard serviceWindows={config.serviceWindows} setConfig={setConfig} />
          </div>
        </div>

        {/* Row 2: Catalog | Trial */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-4">
          <div className="md:col-span-7">
            <TiffinCatalogCard catalog={config.pricingVariants} setConfig={setConfig} />
          </div>
          <div className="md:col-span-5">
            <TrialOfferCard
              trialOffer={config.trialOffer}
              pricingVariants={config.pricingVariants}
              setConfig={setConfig}
            />
          </div>
        </div>

        {/* Row 3: Weekly menu */}
        <div className="mb-4">
          <WeeklyMenuCard weeklyMenu={config.weeklyMenu} setConfig={setConfig} />
        </div>

        {/* Row 4: Cancellation */}
        <div>
          <CancellationCard />
        </div>
      </main>
    </div>
  );
}
