import React from "react";

const mealItems = [
  { icon: "wb_sunny", iconColor: "text-amber-500", label: "Breakfast" },
  { icon: "restaurant", iconColor: "text-blue-500", label: "Lunch" },
  { icon: "dark_mode", iconColor: "text-violet-500", label: "Dinner" },
  { icon: "bakery_dining", iconColor: "text-emerald-500", label: "Snacks" },
];

const hubs = [
  { active: true, text: "H-Block, Sector 63, Noida, UP" },
  { active: false, text: "Block C, Sector 18, Noida, UP" },
];

export default function AddressPopUp20() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Modal */}
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/20 backdrop-blur-sm p-4">
        <div className="w-full max-w-md overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
          <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
            <div>
              <h3 className="text-lg font-black tracking-tight uppercase text-slate-900">
                Add New Service Hub
              </h3>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                Direct Hub Entry
              </p>
            </div>
            <button className="text-2xl leading-none text-slate-400 transition-colors hover:text-slate-900">
              ×
            </button>
          </div>

          <div className="space-y-4 p-6">
            {[
              ["Street / Area", "H-Block, Sector 63", "Enter street address"],
              ["City", "Noida", "Enter city"],
              ["State", "Uttar Pradesh", "Enter state"],
              ["Pincode", "201301", "Enter pincode"],
            ].map(([label, value, placeholder]) => (
              <div key={label} className="space-y-1">
                <label className="text-[8px] font-black uppercase tracking-tighter text-slate-400">
                  {label}
                </label>
                <input
                  className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20"
                  type="text"
                  placeholder={placeholder}
                  defaultValue={value}
                />
              </div>
            ))}

            <div className="space-y-1 pt-2">
              <label className="text-[8px] font-black uppercase tracking-tighter text-blue-600">
                Hub Alias (Editable)
              </label>
              <input
                className="w-full rounded-lg border border-blue-300 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20"
                type="text"
                placeholder="Give this hub a name"
                defaultValue="Noida Head Hub"
              />
            </div>

            <div className="flex gap-3 border-t border-slate-200 pt-4">
              <button className="flex-1 rounded-xl bg-slate-100 py-3 text-[10px] font-black uppercase tracking-widest text-slate-600 transition-all hover:bg-slate-200">
                Cancel
              </button>
              <button className="flex-[2] rounded-xl bg-blue-600 py-3 text-[10px] font-black uppercase tracking-widest text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-500">
                Add Hub Address
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 px-6 py-5 backdrop-blur-xl md:px-12">
        <div className="flex items-center justify-between gap-6">
          <div className="shrink-0">
            <div className="text-2xl font-black tracking-tighter uppercase text-slate-900">
              AhaarMitra
            </div>
            <div className="h-0.5 w-full bg-gradient-to-r from-blue-600 to-transparent" />
          </div>

          <nav className="hidden items-center gap-10 md:flex">
            {["Finance", "Order History", "Services", "Subscriber"].map((item) => (
              <a
                key={item}
                href="#"
                className={`text-[11px] font-black uppercase tracking-widest transition-colors ${
                  item === "Services"
                    ? "border-b-2 border-slate-900 pb-1 text-slate-900"
                    : "text-slate-400 hover:text-slate-900"
                }`}
              >
                {item}
              </a>
            ))}
          </nav>

          <a
            href="#"
            className="flex shrink-0 items-center gap-2 text-sm font-bold text-slate-500 transition-colors hover:text-slate-900"
          >
            <span className="material-symbols-outlined text-base">settings</span>
            Settings
          </a>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-7xl p-6 md:p-12">
        <div className="mb-12">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h1 className="mb-4 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
                Service <span className="text-blue-600">Manager.</span>
              </h1>
              <p className="max-w-2xl text-lg text-slate-500">
                Configure your meal offerings, pricing schedules, and service windows.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button className="rounded-xl bg-blue-600 px-8 py-3 text-[10px] font-black uppercase tracking-widest text-white shadow-xl shadow-blue-600/20 transition-all hover:bg-blue-500">
                Save All Changes
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          {/* Card 1 */}
          <div className="flex h-[580px] flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:col-span-4">
            <div className="mb-4 flex items-center justify-between text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
              <span>Meal Types &amp; Frequency</span>
              <span className="material-symbols-outlined text-sm">more_horiz</span>
            </div>

            <div className="flex h-full flex-col justify-between">
              <div className="mt-2 space-y-6">
                {mealItems.map((item) => (
                  <div
                    key={item.label}
                    className="group flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-5 transition-all hover:border-slate-300 hover:bg-slate-100"
                  >
                    <div className="flex items-center gap-4">
                      <span className={`material-symbols-outlined text-2xl ${item.iconColor}`}>
                        {item.icon}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        {item.label}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined cursor-pointer text-lg text-slate-300 transition-colors hover:text-slate-700">
                        edit
                      </span>
                      <span className="material-symbols-outlined cursor-pointer text-lg text-slate-300 transition-colors hover:text-rose-500">
                        delete
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-slate-300 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400 transition-all hover:border-slate-500 hover:text-slate-700">
                <span className="material-symbols-outlined text-base">add</span>
                Add New Service
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex h-[580px] flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:col-span-4">
            <div className="mb-4 flex items-center justify-between text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
              <span>Service Reach &amp; Zones</span>
              <span className="material-symbols-outlined text-sm">map</span>
            </div>

            <div className="flex h-full flex-col overflow-hidden">
              <label className="mb-3 text-[8px] font-black uppercase tracking-widest text-slate-400">
                Configured Service Hubs
              </label>

              <div className="mb-4 flex-grow space-y-2 overflow-y-auto pr-2">
                {hubs.map((hub) => (
                  <div
                    key={hub.text}
                    className="group flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 p-2.5 transition-all hover:border-slate-300 hover:bg-slate-100"
                  >
                    <span
                      className={`material-symbols-outlined text-lg ${
                        hub.active ? "text-blue-600" : "text-slate-300"
                      }`}
                    >
                      location_on
                    </span>
                    <span className="flex-1 truncate text-[11px] font-medium text-slate-700">
                      {hub.text}
                    </span>
                    <div className="flex items-center gap-1.5 opacity-0 transition-opacity group-hover:opacity-100">
                      <span className="material-symbols-outlined text-base text-slate-400 hover:text-slate-700">
                        edit
                      </span>
                      <span className="material-symbols-outlined text-base text-slate-400 hover:text-rose-500">
                        delete
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <button className="mt-auto flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 py-4 text-[9px] font-black uppercase tracking-widest text-slate-500 transition-all hover:border-slate-500 hover:text-slate-900">
                <span className="material-symbols-outlined text-sm">add_location</span>
                Add Hub Address
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex h-[580px] flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:col-span-4">
            <div className="mb-4 flex items-center justify-between text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
              <span>Service Windows &amp; Logistics</span>
              <span className="material-symbols-outlined text-sm">timer</span>
            </div>

            <div className="flex h-full flex-col justify-between">
              <div className="space-y-5">
                <div className="space-y-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-[9px] font-black uppercase tracking-widest text-blue-600">
                    Lunch Delivery
                  </p>
                  <div className="flex gap-3">
                    <div className="flex-1 space-y-1">
                      <label className="text-[8px] uppercase tracking-tighter text-slate-400">
                        Start Time
                      </label>
                      <input
                        className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                        type="time"
                        defaultValue="12:00"
                      />
                    </div>
                    <div className="flex-1 space-y-1">
                      <label className="text-[8px] uppercase tracking-tighter text-slate-400">
                        End Time
                      </label>
                      <input
                        className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                        type="time"
                        defaultValue="14:30"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-[9px] font-black uppercase tracking-widest text-violet-600">
                    Dinner Delivery
                  </p>
                  <div className="flex gap-3">
                    <div className="flex-1 space-y-1">
                      <label className="text-[8px] uppercase tracking-tighter text-slate-400">
                        Start Time
                      </label>
                      <input
                        className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                        type="time"
                        defaultValue="19:30"
                      />
                    </div>
                    <div className="flex-1 space-y-1">
                      <label className="text-[8px] uppercase tracking-tighter text-slate-400">
                        End Time
                      </label>
                      <input
                        className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                        type="time"
                        defaultValue="21:30"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
                <p className="px-2 text-center text-[10px] leading-relaxed italic text-slate-500">
                  A 5-hour auto-cutoff is recommended to maximize user satisfaction and optimize
                  logistics flow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-slate-200 bg-white/80 px-6 py-10 backdrop-blur-sm md:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-8">
            {["Privacy Policy", "Terms of Service", "Support Portal"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[10px] font-bold uppercase tracking-widest text-slate-400 transition-colors hover:text-slate-900"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400">
            © 2024 AHAARMITRA ANALYTICS. PRECISION IN SERVICE MANAGEMENT.
          </div>
        </div>
      </footer>
    </div>
  );
}