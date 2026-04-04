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
    <div className="text-[9px] font-black uppercase tracking-[0.18em] text-gray-400 mb-3 flex items-center justify-between">
      {children}
    </div>
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
      type="button"
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
        {
          name: mealName,
          isActive: true,
        },
      ],
    }));
  };

  const missingMeals = availableMeals.filter(
    (mealName) => !meals.some((meal) => meal.name === mealName)
  );

  return (
    <Card className="p-6 flex flex-col h-full">
      <SectionLabel>
        <span>Meal Types &amp; Frequency</span>
        <span className="text-gray-300">•••</span>
      </SectionLabel>

      <div className="flex flex-col gap-3 flex-1">
        {meals.map((m) => {
          const meta = mealMeta[m.name] || { icon: "🍴", label: m.name };

          return (
            <div
              key={m.name}
              className="group flex items-center justify-between px-4 py-3.5 bg-gray-50 hover:bg-gray-100 rounded-xl border border-gray-100 transition-all"
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">{meta.icon}</span>
                <span className="text-xs font-bold uppercase tracking-wider text-gray-700">
                  {meta.label}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Toggle
                  active={m.isActive}
                  onToggle={() => toggleMeal(m.name)}
                />

                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <IconBtn
                    title="Delete"
                    icon="🗑️"
                    danger
                    onClick={() => removeMeal(m.name)}
                  />
                </div>
              </div>
            </div>
          );
        })}

        {missingMeals.length > 0 && (
          <div className="mt-2 space-y-2">
            <p className="text-[8px] font-black uppercase tracking-widest text-gray-400">
              Add Missing Meal Types
            </p>

            {missingMeals.map((mealName) => {
              const meta = mealMeta[mealName] || {
                icon: "🍴",
                label: mealName,
              };

              return (
                <button
                  key={mealName}
                  type="button"
                  onClick={() => addMissingMeal(mealName)}
                  className="w-full py-2.5 px-3 flex items-center justify-center gap-2 border border-dashed border-gray-200 rounded-xl text-[9px] font-black uppercase tracking-widest text-gray-400 hover:border-blue-400 hover:text-blue-500 transition-all"
                >
                  <span className="text-sm">{meta.icon}</span>
                  Add {meta.label}
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
      zones: [
        ...prev.zones,
        {
          address: "",
          city: "",
          state: "",
          pincode: "",
        },
      ],
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
    <Card className="p-6 flex flex-col h-full">
      <SectionLabel>
        <span>Service Reach &amp; Zones</span>
        <span className="text-gray-300 text-sm">📍</span>
      </SectionLabel>

      <p className="text-[8px] font-black uppercase tracking-widest text-gray-400 mb-2">
        Configured Service Hubs
      </p>

      <div className="flex-1 overflow-y-auto space-y-3 pr-1 custom-scroll">
        {hubs.map((hub, i) => (
          <div
            key={i}
            className="group p-3 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-100 transition-all"
          >
            <div className="flex items-start gap-2">
              <span
                className={`text-sm mt-2 ${
                  i === 0 ? "text-blue-500" : "text-gray-300"
                }`}
              >
                📍
              </span>

              <div className="flex-1 space-y-2">
                <input
                  type="text"
                  placeholder="Address"
                  value={hub.address}
                  onChange={(e) =>
                    updateZoneField(i, "address", e.target.value)
                  }
                  className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-xs text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400/30 focus:border-blue-400 transition-all"
                />

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <input
                    type="text"
                    placeholder="City"
                    value={hub.city}
                    onChange={(e) => updateZoneField(i, "city", e.target.value)}
                    className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-xs text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400/30 focus:border-blue-400 transition-all"
                  />

                  <input
                    type="text"
                    placeholder="State"
                    value={hub.state}
                    onChange={(e) =>
                      updateZoneField(i, "state", e.target.value)
                    }
                    className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-xs text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400/30 focus:border-blue-400 transition-all"
                  />

                  <input
                    type="text"
                    placeholder="Pincode"
                    value={hub.pincode}
                    onChange={(e) =>
                      updateZoneField(i, "pincode", e.target.value)
                    }
                    className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-xs text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400/30 focus:border-blue-400 transition-all"
                  />
                </div>

                {hub.address && (
                  <p className="text-[10px] text-gray-500 font-medium">
                    {hub.address}, {hub.city}, {hub.state} - {hub.pincode}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <IconBtn
                  title="Delete"
                  icon="🗑️"
                  danger
                  onClick={() => removeZone(i)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={addZone}
        className="mt-3 w-full py-3 flex items-center justify-center gap-2 border border-dashed border-gray-200 rounded-xl text-[9px] font-black uppercase tracking-widest text-gray-400 hover:border-blue-400 hover:text-blue-500 transition-all"
      >
        <span className="text-sm">📍+</span> Add Hub Address
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

  return (
    <Card className="p-6 flex flex-col h-full">
      <SectionLabel>
        <span>Service Windows &amp; Logistics</span>
        <span className="text-gray-300 text-sm">⏱</span>
      </SectionLabel>

      <div className="space-y-4 flex-1">
        <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
          <p className="text-[9px] font-black text-blue-500 uppercase tracking-widest mb-3">
            Lunch Delivery
          </p>

          <div className="flex gap-3 mb-3">
            <div className="flex-1 space-y-1">
              <label className="text-[8px] uppercase tracking-tighter text-gray-400">
                Start Time
              </label>
              <input
                type="time"
                value={lunch.startTime}
                onChange={(e) =>
                  updateWindow("lunch", "startTime", e.target.value)
                }
                className="w-full bg-white border border-blue-200 rounded-lg px-2 py-1.5 text-xs text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400/30 focus:border-blue-400 transition-all"
              />
            </div>

            <div className="flex-1 space-y-1">
              <label className="text-[8px] uppercase tracking-tighter text-gray-400">
                End Time
              </label>
              <input
                type="time"
                value={lunch.endTime}
                onChange={(e) =>
                  updateWindow("lunch", "endTime", e.target.value)
                }
                className="w-full bg-white border border-blue-200 rounded-lg px-2 py-1.5 text-xs text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400/30 focus:border-blue-400 transition-all"
              />
            </div>
          </div>

          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] font-bold text-gray-700 uppercase">
              Auto Cutoff
            </span>
            <Toggle
              active={lunch.autoCutoffEnabled}
              onToggle={() =>
                updateWindow(
                  "lunch",
                  "autoCutoffEnabled",
                  !lunch.autoCutoffEnabled
                )
              }
            />
          </div>

          <div className="space-y-1">
            <label className="text-[8px] uppercase tracking-tighter text-gray-400">
              Cutoff Minutes
            </label>
            <input
              type="number"
              value={lunch.cutoffMinutes}
              onChange={(e) =>
                updateWindow("lunch", "cutoffMinutes", e.target.value)
              }
              className="w-full bg-white border border-blue-200 rounded-lg px-2 py-1.5 text-xs text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400/30 focus:border-blue-400 transition-all"
            />
          </div>
        </div>

        <div className="p-4 bg-violet-50 rounded-xl border border-violet-100">
          <p className="text-[9px] font-black text-violet-500 uppercase tracking-widest mb-3">
            Dinner Delivery
          </p>

          <div className="flex gap-3 mb-3">
            <div className="flex-1 space-y-1">
              <label className="text-[8px] uppercase tracking-tighter text-gray-400">
                Start Time
              </label>
              <input
                type="time"
                value={dinner.startTime}
                onChange={(e) =>
                  updateWindow("dinner", "startTime", e.target.value)
                }
                className="w-full bg-white border border-violet-200 rounded-lg px-2 py-1.5 text-xs text-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-400/30 focus:border-violet-400 transition-all"
              />
            </div>

            <div className="flex-1 space-y-1">
              <label className="text-[8px] uppercase tracking-tighter text-gray-400">
                End Time
              </label>
              <input
                type="time"
                value={dinner.endTime}
                onChange={(e) =>
                  updateWindow("dinner", "endTime", e.target.value)
                }
                className="w-full bg-white border border-violet-200 rounded-lg px-2 py-1.5 text-xs text-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-400/30 focus:border-violet-400 transition-all"
              />
            </div>
          </div>

          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] font-bold text-gray-700 uppercase">
              Auto Cutoff
            </span>
            <Toggle
              active={dinner.autoCutoffEnabled}
              onToggle={() =>
                updateWindow(
                  "dinner",
                  "autoCutoffEnabled",
                  !dinner.autoCutoffEnabled
                )
              }
            />
          </div>

          <div className="space-y-1">
            <label className="text-[8px] uppercase tracking-tighter text-gray-400">
              Cutoff Minutes
            </label>
            <input
              type="number"
              value={dinner.cutoffMinutes}
              onChange={(e) =>
                updateWindow("dinner", "cutoffMinutes", e.target.value)
              }
              className="w-full bg-white border border-violet-200 rounded-lg px-2 py-1.5 text-xs text-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-400/30 focus:border-violet-400 transition-all"
            />
          </div>
        </div>
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
            {catalog.map((item, index) => (
              <tr key={`${item.variantName}-${index}`}>
                <td className="py-3.5">
                  <p className="text-xs font-bold text-gray-800">
                    {item.variantName}
                  </p>
                  <p className="text-[9px] text-gray-400 uppercase tracking-tight mt-0.5">
                    {(item.components || []).join(", ")}
                  </p>
                </td>

                {[
                  ["dailyPrice", item.dailyPrice],
                  ["weeklyPrice", item.weeklyPrice],
                  ["monthlyPrice", item.monthlyPrice],
                ].map(([f, value]) => (
                  <td className="py-3.5 pr-4" key={f}>
                    <input
                      type="number"
                      value={value}
                      onChange={(e) => update(index, f, Number(e.target.value))}
                      className="w-20 bg-gray-50 border border-gray-200 rounded-lg px-2 py-1.5 text-xs text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400/30 focus:border-blue-400 transition-all"
                    />
                  </td>
                ))}

                <td className="py-3.5 text-right">
                  <button
                    type="button"
                    className="text-gray-300 hover:text-gray-600 text-sm transition-colors p-1.5 rounded-lg hover:bg-gray-100"
                  >
                    ⚙️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Link to="/22" className="w-full">
        <button
          type="button"
          className="mt-4 w-full py-2.5 flex items-center justify-center gap-2 border border-dashed border-gray-200 rounded-xl text-[10px] font-black uppercase tracking-widest text-gray-400 hover:border-blue-400 hover:text-blue-500 transition-all"
        >
          <span>+</span> Add New Tiffin Variant
        </button>
      </Link>
    </Card>
  );
}

function TrialOfferCard({ trialOffer, setConfig, pricingVariants }) {
  const updateTrialOffer = (field, value) => {
    setConfig((prev) => ({
      ...prev,
      trialOffer: {
        ...prev.trialOffer,
        [field]: value,
      },
    }));
  };

  const currentVariant =
    trialOffer.applicableVariants?.[0] || "Normal Thali";

  return (
    <Card className="p-6">
      <SectionLabel>
        <span>Trial Offer Configuration</span>
        <span className="text-gray-300">⭐</span>
      </SectionLabel>

      <div className="space-y-5">
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100">
          <span className="text-[10px] uppercase font-bold text-gray-600">
            Trial Enabled
          </span>
          <Toggle
            active={trialOffer.enabled}
            onToggle={() => updateTrialOffer("enabled", !trialOffer.enabled)}
          />
        </div>

        <div className="p-4 bg-blue-50 border border-blue-200 rounded-2xl">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h4 className="text-xs font-black uppercase text-blue-500 mb-1">
                Standard Trial Price
              </h4>
            </div>
            <div className="text-2xl font-black text-gray-800">
              ₹{trialOffer.standardTrialPrice}
            </div>
          </div>

          <input
            type="number"
            value={trialOffer.standardTrialPrice}
            onChange={(e) =>
              updateTrialOffer("standardTrialPrice", Number(e.target.value))
            }
            className="w-full bg-white border border-blue-200 rounded-lg px-3 py-2 text-sm text-gray-700 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400/30 focus:border-blue-400 transition-all"
          />

          <div className="flex flex-wrap gap-2">
            {pricingVariants.map((variant) => (
              <button
                type="button"
                key={variant.variantName}
                onClick={() =>
                  updateTrialOffer("applicableVariants", [variant.variantName])
                }
                className={`px-3 py-1 rounded-full text-[8px] font-black uppercase transition-all ${
                  currentVariant === variant.variantName
                    ? "bg-blue-500 text-white border border-blue-500"
                    : "bg-white text-gray-400 border border-gray-200 hover:border-blue-300"
                }`}
              >
                {variant.variantName}
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
              label: "Only First Order",
              state: trialOffer.onlyFirstOrder,
              toggle: () =>
                updateTrialOffer("onlyFirstOrder", !trialOffer.onlyFirstOrder),
            },
            {
              label: "Lunch Only",
              state: trialOffer.lunchOnly,
              toggle: () =>
                updateTrialOffer("lunchOnly", !trialOffer.lunchOnly),
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

function WeeklyMenuCard({ weeklyMenu, setConfig }) {
  const [activeDay, setActiveDay] = useState("wednesday");
  const [activeMeal, setActiveMeal] = useState("lunch");
  const [newItems, setNewItems] = useState({
    mini: "",
    normal: "",
    deluxe: "",
  });

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
            [tier]: prev.weeklyMenu[activeDay][activeMeal][tier].filter(
              (_, i) => i !== idx
            ),
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
    {
      key: "mini",
      label: "Mini Thali Components",
      tag: "Fixed Menu",
      accent: "emerald",
      border: "border-emerald-200",
    },
    {
      key: "normal",
      label: "Normal Thali Components",
      tag: "Standard",
      accent: "blue",
      border: "border-blue-200",
    },
    {
      key: "deluxe",
      label: "Deluxe Thali Components",
      tag: "Premium",
      accent: "violet",
      border: "border-violet-200",
    },
  ];

  const accentText = {
    emerald: "text-emerald-500",
    blue: "text-blue-500",
    violet: "text-violet-500",
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
              Weekly Planner
            </span>
          </div>
        </div>
      </div>

      <div className="flex gap-1.5 mb-6 overflow-x-auto pb-2 border-b border-gray-100">
        {days.map((d) => (
          <button
            type="button"
            key={d.key}
            onClick={() => setActiveDay(d.key)}
            className={`flex-1 min-w-[2.5rem] text-center py-2 rounded-lg text-[10px] font-bold border transition-all ${
              activeDay === d.key
                ? "bg-blue-500 text-white border-blue-500 shadow-sm shadow-blue-200"
                : "bg-gray-50 text-gray-400 border-gray-100 hover:bg-gray-100"
            }`}
          >
            {d.short}
          </button>
        ))}
      </div>

      <div className="flex justify-center mb-8">
        <div className="inline-flex items-center bg-gray-50 p-1.5 rounded-full border border-gray-200 gap-1">
          {mealTabs.map((tab) => (
            <button
              type="button"
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
              {(menus[tier.key] || []).map((item, idx) => (
                <div
                  key={idx}
                  className={`group flex items-center justify-between p-3 bg-gray-50 rounded-xl border transition-all ${
                    idx === 0
                      ? `border-l-2 ${accentLeft[tier.accent]} border-t-0 border-r-0 border-b-0 ${tier.border}`
                      : "border-gray-100 hover:border-gray-200"
                  }`}
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
                  </div>
                </div>
              ))}

              <div className="flex gap-2">
                <input
                  type="text"
                  value={newItems[tier.key]}
                  onChange={(e) =>
                    setNewItems((prev) => ({
                      ...prev,
                      [tier.key]: e.target.value,
                    }))
                  }
                  placeholder="Add item"
                  className="flex-1 bg-white border border-gray-200 rounded-xl px-3 py-2 text-xs text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400/30 focus:border-blue-400"
                />
                <button
                  type="button"
                  onClick={() => addItem(tier.key)}
                  className="px-3 py-2 border border-dashed border-gray-200 rounded-xl text-[10px] font-black uppercase tracking-widest text-gray-400 hover:border-blue-400 hover:text-blue-500 transition-all"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
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

  return (
    <Card className="p-6">
      <SectionLabel>
        <span>Meal Cancellation &amp; Outage Control</span>
        <span className="text-gray-300 text-sm">📅</span>
      </SectionLabel>

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

              <Link to="/23">
                <button
                  type="button"
                  className="w-full bg-rose-500 hover:bg-rose-600 text-white text-[11px] font-black py-4 px-8 rounded-xl transition-all uppercase tracking-[0.15em] flex items-center justify-center gap-3 group border border-rose-400"
                >
                  <span className="text-lg group-hover:scale-110 transition-transform inline-block">
                    🚫
                  </span>
                  Cancel All Meals for Selected Day
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

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
                  className={`text-xs font-black uppercase tracking-widest mt-2 ${
                    !meal.active ? "text-gray-400" : "text-gray-800"
                  }`}
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
              type="button"
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
    <div className="min-h-screen bg-gray-50">
      <style>{`
        .custom-scroll::-webkit-scrollbar { width: 3px; }
        .custom-scroll::-webkit-scrollbar-track { background: transparent; }
        .custom-scroll::-webkit-scrollbar-thumb { background: #e5e7eb; border-radius: 10px; }
        .custom-scroll::-webkit-scrollbar-thumb:hover { background: #d1d5db; }
        input[type='date']::-webkit-calendar-picker-indicator { cursor: pointer; opacity: 0.5; }
        .uniform-card-height { height: 560px; }
      `}</style>

      <main className="max-w-7xl mx-auto px-6 md:px-10 py-10 pt-24">
        {loading && (
          <div className="mb-4 text-sm font-semibold text-gray-500">
            Loading service config...
          </div>
        )}

        {message && (
          <div className="mb-4 text-sm font-semibold text-blue-500">
            {message}
          </div>
        )}

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

          <button
            type="button"
            onClick={handleSaveAll}
            disabled={saving}
            className="shrink-0 bg-blue-500 hover:bg-blue-600 text-white text-[10px] font-black py-3 px-8 rounded-xl transition-all uppercase tracking-widest shadow-md shadow-blue-200 disabled:opacity-50"
          >
            {saving ? "Saving..." : "Save All Changes"}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          <div className="uniform-card-height flex flex-col">
            <MealTypesCard meals={config.mealTypes} setConfig={setConfig} />
          </div>

          <div className="uniform-card-height flex flex-col">
            <ServiceZonesCard hubs={config.zones} setConfig={setConfig} />
          </div>

          <div className="uniform-card-height flex flex-col">
            <ServiceWindowsCard
              serviceWindows={config.serviceWindows}
              setConfig={setConfig}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mb-5">
          <div className="md:col-span-7">
            <TiffinCatalogCard
              catalog={config.pricingVariants}
              setConfig={setConfig}
            />
          </div>

          <div className="md:col-span-5">
            <TrialOfferCard
              trialOffer={config.trialOffer}
              pricingVariants={config.pricingVariants}
              setConfig={setConfig}
            />
          </div>
        </div>

        <div className="mb-5">
          <WeeklyMenuCard weeklyMenu={config.weeklyMenu} setConfig={setConfig} />
        </div>

        <div>
          <CancellationCard />
        </div>
      </main>
    </div>
  );
}