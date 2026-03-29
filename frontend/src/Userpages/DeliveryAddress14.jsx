import { useState } from "react";

const TAGS = ["Home", "University", "Office", "Other"];

const TAG_ICONS = {
  Home: "home",
  University: "school",
  Office: "business",
  Other: "location_on",
};

export default function DeliveryAddress14() {
  const [savedAddresses, setSavedAddresses] = useState([
    { id: 1, tag: "Home", line: "402, Skyline Towers, Bengaluru..." },
  ]);

  const deleteAddress = (id) =>
    setSavedAddresses((prev) => prev.filter((a) => a.id !== id));

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fu { animation: fadeUp 0.55s cubic-bezier(0.165,0.84,0.44,1) both; }
        .fu-1{animation-delay:.04s} .fu-2{animation-delay:.11s} .fu-3{animation-delay:.18s}
        .fu-4{animation-delay:.25s} .fu-5{animation-delay:.32s} .fu-6{animation-delay:.39s}
        .fu-7{animation-delay:.46s} .fu-8{animation-delay:.53s} .fu-9{animation-delay:.60s}

        .bg-dot {
          background-image: radial-gradient(circle at 1.5px 1.5px, rgba(0,0,0,0.055) 1px, transparent 0);
          background-size: 32px 32px;
        }

        /* shared input styles */
        .fi {
          width: 100%;
          background: #f9fafb;
          border: 1.5px solid #e5e7eb;
          color: #111827;
          border-radius: 0.75rem;
          padding: 1rem 1.5rem;
          font-weight: 600;
          font-size: 0.875rem;
          outline: none;
          transition: border-color .2s, box-shadow .2s, background .2s;
          font-family: 'Manrope', sans-serif;
        }
        .fi::placeholder { color: #9ca3af; font-weight: 500; }
        .fi:focus {
          border-color: #f59e0b;
          background: #fff;
          box-shadow: 0 0 0 3px rgba(245,158,11,.12);
        }
        .fi-select { appearance: none; cursor: pointer; }
        .fi-ta { resize: none; min-height: 140px; }

        /* map grid pattern */
        .map-grid {
          background-color: #f1f5f9;
          background-image:
            linear-gradient(rgba(148,163,184,.25) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148,163,184,.25) 1px, transparent 1px);
          background-size: 24px 24px;
        }

        /* address card hover */
        .addr-card { transition: border-color .2s, background .2s; }
        .addr-card:hover { border-color: #fcd34d; background: #fffbeb; }

        /* dashed add button */
        .add-btn { transition: border-color .2s, color .2s, background .2s; }
        .add-btn:hover { border-color: #f59e0b; color: #d97706; background: #fffbeb; }

        /* CTAs */
        .save-btn { transition: background .25s, color .25s, transform .15s, box-shadow .2s; }
        .save-btn:hover { background: #f59e0b !important; color: #fff !important; transform: translateY(-1px); box-shadow: 0 8px 24px -4px rgba(245,158,11,.35); }

        .continue-btn { transition: background .25s, color .25s, transform .15s, box-shadow .2s; }
        .continue-btn:hover { background: #d97706 !important; transform: translateY(-1px); box-shadow: 0 12px 28px -6px rgba(245,158,11,.45); }

        .delete-btn { transition: color .2s, background .2s; }
        .delete-btn:hover { color: #ef4444; }

        .back-link { transition: color .2s; }
        .back-link:hover { color: #111827; }
        .back-link:hover .back-arrow { transform: translateX(-3px); }
        .back-arrow { transition: transform .2s; }
      `}</style>

      <div
        className="min-h-screen flex flex-col bg-stone-50 bg-dot text-stone-900"
        style={{ fontFamily: "'Manrope', sans-serif" }}
      >
        <div className="flex-grow flex flex-col items-center py-12 lg:py-16 px-6">

          {/* ── TOP ── */}
          <div className="max-w-6xl w-full text-center mb-12">

            {/* Wordmark */}
            <div className="text-2xl font-black text-stone-900 tracking-tighter mb-8 fu fu-1">
              AhaarMitra
            </div>

            {/* 3-step progress pill */}
            <div className="fu fu-2 inline-flex items-center gap-3 bg-white border border-stone-200 shadow-sm px-6 py-2.5 rounded-full mb-10">
              {/* Step 1 */}
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-stone-200 text-stone-500 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[13px]" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest text-stone-400">Role</span>
              </div>
              <div className="w-8 h-px bg-stone-200" />
              {/* Step 2 */}
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-stone-200 text-stone-500 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[13px]" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest text-stone-400">Registration</span>
              </div>
              <div className="w-8 h-px bg-stone-200" />
              {/* Step 3 — active */}
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-500 text-white text-[10px] font-black flex items-center justify-center">3</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-stone-900">Addresses</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-black tracking-tight text-stone-900 mb-2 fu fu-3">
              Delivery Address
            </h1>
            <p className="text-stone-400 text-sm font-medium fu fu-3">
              Where should we deliver your delicious meals?
            </p>
          </div>

          {/* ── BODY ── */}
          <div className="max-w-6xl w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

              {/* ── LEFT: Form ── */}
              <div className="space-y-8">
                <section className="space-y-5 fu fu-4">
                  <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-500 mb-1">
                    Add Your First Address
                  </h2>

                  {/* Street */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-400 ml-1 block">
                      Street / Apartment / Door No.
                    </label>
                    <input
                      className="fi"
                      placeholder="e.g. 402, Skyline Towers, Tech Park Road"
                      type="text"
                    />
                  </div>

                  {/* City + State */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-400 ml-1 block">City</label>
                      <input className="fi" placeholder="Bengaluru" type="text" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-400 ml-1 block">State</label>
                      <input className="fi" placeholder="Karnataka" type="text" />
                    </div>
                  </div>

                  {/* Pincode + Tag */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-400 ml-1 block">Pincode</label>
                      <input className="fi" placeholder="560100" inputMode="numeric" type="text" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-400 ml-1 block">Tag Address As</label>
                      <div className="relative">
                        <select className="fi fi-select pr-10">
                          {TAGS.map((t) => <option key={t} value={t.toLowerCase()}>{t}</option>)}
                        </select>
                        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-stone-400 text-sm">
                          expand_more
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Instructions */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-400 ml-1 block">
                      Detailed Delivery Instructions / Landmarks
                    </label>
                    <textarea
                      className="fi fi-ta"
                      placeholder="e.g. Near the big oak tree, opposite Metro Station, leave at gate..."
                    />
                  </div>

                  {/* Save button */}
                  <button className="save-btn w-full bg-stone-900 text-white font-black py-5 rounded-2xl uppercase tracking-[0.2em] text-xs mt-2">
                    Save This Address
                  </button>
                </section>

                {/* Back link */}
                <div className="fu fu-5">
                  <a href="#" className="back-link inline-flex items-center gap-2 text-stone-400 text-[10px] font-black uppercase tracking-widest">
                    <span className="material-symbols-outlined text-sm back-arrow">arrow_back</span>
                    Back to Registration
                  </a>
                </div>
              </div>

              {/* ── RIGHT: Map + Saved ── */}
              <div className="space-y-10 fu fu-5">

                {/* Map preview */}
                <section className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-500 block">
                    Review Your Delivery Spot
                  </label>

                  <div className="relative w-full h-64 map-grid rounded-2xl border border-stone-200 overflow-hidden shadow-sm">
                    {/* Subtle vignette */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-stone-100/40 pointer-events-none" />

                    {/* Pin */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        <div className="absolute -top-11 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-[10px] font-black px-3 py-1 rounded-full whitespace-nowrap uppercase tracking-widest shadow-md">
                          Delivery Point
                        </div>
                        <span
                          className="material-symbols-outlined text-amber-500 text-5xl drop-shadow-[0_4px_12px_rgba(245,158,11,0.4)]"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          location_on
                        </span>
                        {/* Pin shadow */}
                        <div className="w-3 h-1 bg-stone-400/30 blur-sm rounded-full mx-auto -mt-1" />
                      </div>
                    </div>

                    {/* Border overlay */}
                    <div className="absolute inset-0 pointer-events-none border border-stone-200 rounded-2xl" />
                  </div>

                  <p className="text-[9px] text-stone-400 uppercase tracking-widest text-center font-medium">
                    Pin automatically placed based on address details
                  </p>
                </section>

                {/* Saved addresses */}
                <section className="space-y-4">
                  <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-400">
                    Saved Addresses
                  </h2>

                  <div className="space-y-3">
                    {savedAddresses.map((addr) => (
                      <div
                        key={addr.id}
                        className="addr-card bg-white border border-stone-200 p-4 rounded-2xl flex items-center justify-between shadow-sm"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-500">
                            <span className="material-symbols-outlined text-lg">
                              {TAG_ICONS[addr.tag] ?? "location_on"}
                            </span>
                          </div>
                          <div>
                            <div className="text-[10px] font-black uppercase tracking-widest text-amber-500 mb-0.5">
                              {addr.tag}
                            </div>
                            <p className="text-xs text-stone-500 font-medium leading-tight">{addr.line}</p>
                          </div>
                        </div>
                        <button
                          onClick={() => deleteAddress(addr.id)}
                          className="delete-btn text-stone-300 ml-4 p-1 rounded-lg"
                        >
                          <span className="material-symbols-outlined text-lg">delete</span>
                        </button>
                      </div>
                    ))}

                    {/* Add another */}
                    <button className="add-btn w-full border-2 border-dashed border-stone-200 text-stone-400 font-black py-4 rounded-2xl uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined text-sm">add</span>
                      Add Another Address
                    </button>
                  </div>
                </section>
              </div>
            </div>

            {/* ── Continue button ── */}
            <div className="mt-16 fu fu-9">
              <button className="continue-btn w-full bg-amber-500 text-white font-black py-5 rounded-2xl uppercase tracking-[0.2em] text-sm shadow-xl shadow-amber-500/20">
                Continue to Dashboard
              </button>
            </div>
          </div>
        </div>

        {/* ── FOOTER ── */}
        <footer className="w-full py-8 px-6 border-t border-stone-200 mt-auto">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 opacity-40">
            <div className="text-[10px] font-black tracking-widest uppercase text-stone-500">
              © 2024 AhaarMitra
            </div>
            <div className="flex gap-6">
              {["Privacy", "Help"].map((l) => (
                <a key={l} href="#" className="text-[10px] font-black tracking-widest uppercase text-stone-500 hover:text-stone-900 transition-colors">
                  {l}
                </a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
