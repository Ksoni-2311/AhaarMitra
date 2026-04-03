import { useState } from "react";

// ── Material Symbol Icon ────────────────────────────────────────────────────
const Icon = ({ name, className = "" }) => (
  <span
    className={`material-symbols-outlined select-none ${className}`}
    style={{ fontVariationSettings: "'FILL' 0,'wght' 400,'GRAD' 0,'opsz' 24" }}
  >
    {name}
  </span>
);

// ── Toggle Switch ───────────────────────────────────────────────────────────
const Toggle = ({ active, onChange }) => (
  <button
    onClick={onChange}
    className={`w-11 h-6 rounded-full relative transition-all duration-200 flex-shrink-0 ${
      active ? "bg-blue-600 shadow-md shadow-blue-200" : "bg-gray-200"
    }`}
    aria-checked={active}
    role="switch"
  >
    <span
      className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-all duration-200 ${
        active ? "right-0.5" : "left-0.5"
      }`}
    />
  </button>
);

// ── Icon Grid Button ────────────────────────────────────────────────────────
const IconBtn = ({ iconName, selected, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full aspect-square rounded-2xl flex items-center justify-center border-2 transition-all duration-150 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-300
      ${selected
        ? "border-blue-500 bg-blue-50 text-blue-600 shadow-md shadow-blue-100"
        : "border-gray-100 bg-gray-50 text-gray-400 hover:border-blue-200 hover:bg-blue-50/50 hover:text-blue-500"
      }`}
  >
    <Icon name={iconName} className="text-2xl" />
  </button>
);

// ── Main Modal Component ────────────────────────────────────────────────────
export default function MealTypePopUp19({ onClose }) {
  const [selectedIcon, setSelectedIcon] = useState("brunch_dining");
  const [isActive, setIsActive] = useState(true);
  const [serviceName, setServiceName] = useState("");

  const icons = [
    "brunch_dining",
    "bakery_dining",
    "coffee",
    "icecream",
    "ramen_dining",
    "local_pizza",
    "lunch_dining",
    "egg_alt",
    "soup_kitchen",
    "restaurant",
  ];

  return (
    <>
      {/* Google Fonts + Material Symbols */}
      {/* <link
        href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        rel="stylesheet"
      /> */}

      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      >
        {/* Blurred overlay */}
        <div
          className="absolute inset-0 bg-gray-900/20 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal Card */}
        <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl shadow-gray-200/80 border border-gray-100 flex flex-col overflow-hidden z-10">

          {/* ── Header ── */}
          <div className="px-8 pt-8 pb-6 border-b border-gray-100 flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-black tracking-tight text-gray-900 uppercase leading-tight">
                Add New{" "}
                <span className="text-blue-600">Service</span>
              </h2>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">
                Configure meal type and frequency
              </p>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full flex items-center justify-center text-gray-300 hover:text-gray-600 hover:bg-gray-100 transition-all"
            >
              <Icon name="close" className="text-lg" />
            </button>
          </div>

          {/* ── Body ── */}
          <div className="px-8 py-8 space-y-8 overflow-y-auto">

            {/* Service Name */}
            <div className="space-y-3">
              <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
                Service Name
              </label>
              <input
                type="text"
                value={serviceName}
                onChange={e => setServiceName(e.target.value)}
                placeholder="e.g., Brunch, Midnight Snack, High Tea"
                className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-6 py-5 text-sm text-gray-800 placeholder:text-gray-300 focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50 transition-all"
              />
            </div>

            {/* Icon Selection */}
            <div className="space-y-3">
              <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
                Icon Selection
              </label>
              <div className="grid grid-cols-5 gap-3">
                {icons.map(icon => (
                  <IconBtn
                    key={icon}
                    iconName={icon}
                    selected={selectedIcon === icon}
                    onClick={() => setSelectedIcon(icon)}
                  />
                ))}
              </div>
            </div>

            {/* Is Active Toggle */}
            <div className="flex items-center justify-between p-5 bg-gray-50 rounded-2xl border-2 border-gray-100">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-black uppercase tracking-widest text-gray-800">
                  Is Active
                </span>
                <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-tighter">
                  Enable this service for subscribers
                </span>
              </div>
              <Toggle active={isActive} onChange={() => setIsActive(v => !v)} />
            </div>
          </div>

          {/* ── Footer Buttons ── */}
          <div className="px-8 pb-8 pt-2 flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 py-4 px-5 rounded-2xl border-2 border-gray-100 text-[11px] font-black uppercase tracking-widest text-gray-400 hover:bg-gray-50 hover:border-gray-200 hover:text-gray-600 transition-all"
            >
              Cancel
            </button>
            <button className="flex-[2] py-4 px-5 rounded-2xl bg-blue-600 text-white text-[11px] font-black uppercase tracking-widest hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all border border-blue-500/30">
              Save Service
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
