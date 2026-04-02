import { useState } from "react";

/* ── tiny SVG icon helpers ── */
const Icon = ({ d, className = "w-5 h-5", stroke = true, fill = false }) => (
  <svg className={className} viewBox="0 0 24 24" fill={fill ? "currentColor" : "none"}
    stroke={stroke ? "currentColor" : "none"} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
  </svg>
);

const StarFilled = ({ className = "w-3 h-3" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);
const StarHalf = ({ className = "w-3 h-3" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2v15.77l-6.18 3.25L7 14.14 2 9.27l8.91-1.01L12 2z" />
    <path d="M12 2l2.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77V2z" fill="none" stroke="currentColor" strokeWidth={2} />
  </svg>
);

/* ── Calendar days ── */
const calDays = [
  { d: 11, past: true }, { d: 12, past: true }, { d: 13, past: true },
  { d: 14, selected: true }, { d: 15 }, { d: 16 }, { d: 17 },
];

export default function TiffinTrial2() {
  const [serviceChoice, setServiceChoice] = useState("dinner");
  const [selectedDay, setSelectedDay] = useState(14);

  const ratings = [
    { label: "5 Star", pct: 85, color: "bg-amber-500" },
    { label: "4 Star", pct: 10, color: "bg-amber-400" },
    { label: "3 Star", pct: 3,  color: "bg-zinc-400" },
    { label: "2 Star", pct: 1.5,color: "bg-zinc-300" },
    { label: "1 Star", pct: 0.5,color: "bg-zinc-200" },
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans antialiased">

      

      <main className="pt-16">

        {/* ── HERO ── */}
        <section className="relative h-[560px] w-full overflow-hidden">
          <img
            alt="Gourmet Burger Tiffin"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMBmIchnkIkoQGR77HPKNPe8Mi87AWVXdlxtSOo0_aqUzxSiao8g8wNuB6MLnue5hBiJqoCqYqYf_QwyAx8srHTmiWQLzDoSpBgjo79alSoDbXQZ1BxnJSwyVy8He4b-CbkpWuTgncU4YcUKtpcr-pZOyPo1hbVYNmqrmfArc3zZZuFPXAiqx6A5bpLRmZEtfGqskXEk_ur5KQcptvlknPuRIA86F4SmByElS4qXuo1rcrzcBC2SHCGJ1fTtaHQtFIc92CaW3sgiyX"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute bottom-10 left-8 md:left-12 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase border border-amber-500/30">3 Active Offers</span>
              <span className="bg-white/10 text-white/80 px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase backdrop-blur-sm border border-white/10">Premium Partner</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-white mb-2 leading-none">Shree Tiffin Services</h1>
            <p className="text-base text-white/70 font-medium">Authentic Home-Style Comfort, Elevated for Your Daily Table.</p>
          </div>
        </section>

        {/* ── BODY GRID ── */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-14 grid grid-cols-12 gap-10">

          {/* ── LEFT COL ── */}
          <div className="col-span-12 lg:col-span-8 space-y-14">

            {/* Stats bar */}
            <div className="flex items-center gap-10 border-b border-zinc-100 pb-10">
              <div className="flex flex-col">
                <span className="text-4xl font-black text-zinc-900">4.5</span>
                <div className="flex items-center text-amber-400 gap-0.5 mt-1">
                  {[1,2,3,4].map(i=><StarFilled key={i} />)}
                  <StarHalf />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mt-2">1.2k Reviews</span>
              </div>
              <div className="h-14 w-px bg-zinc-100" />
              <div className="flex flex-col">
                <span className="text-4xl font-black text-zinc-900">2.5<span className="text-xl text-zinc-400">km</span></span>
                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mt-2">Delivery Radius</span>
              </div>
              <div className="h-14 w-px bg-zinc-100" />
              <div className="flex flex-col">
                <span className="text-4xl font-black text-emerald-600">Pure Veg</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mt-2">Dietary Type</span>
              </div>
            </div>

            {/* Vendor Special Facilities */}
            <section>
              <div className="flex items-center justify-between mb-7">
                <h2 className="text-2xl font-black tracking-tight text-zinc-900">Vendor Special Facilities</h2>
                <span className="flex-1 h-px bg-zinc-100 ml-6" />
              </div>
              <div className="grid grid-cols-3 gap-5">
                {[
                  {
                    title: "1-hour cancellation",
                    desc: "Cancel up to an hour before scheduled delivery with no penalty.",
                    icon: <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>
                  },
                  {
                    title: "No-contact delivery",
                    desc: "Standard hygiene protocols with secure doorstep drops.",
                    icon: <><path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></>
                  },
                  {
                    title: "Subscription flexibility",
                    desc: "Easily pause or skip days via the app with instant credit.",
                    icon: <><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></>
                  },
                ].map(({ title, desc, icon }) => (
                  <div key={title} className="p-6 rounded-2xl border border-zinc-100 bg-zinc-50 flex flex-col items-center text-center group hover:border-amber-200 hover:bg-amber-50/40 transition-all cursor-default">
                    <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center mb-4 text-amber-500 group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">{icon}</svg>
                    </div>
                    <h4 className="font-bold text-sm text-zinc-900 mb-2">{title}</h4>
                    <p className="text-xs text-zinc-400 font-medium leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Delivery Windows */}
            <section>
              <h2 className="text-2xl font-black tracking-tight text-zinc-900 mb-7">Typical Delivery Windows</h2>
              <div className="grid grid-cols-2 gap-5">
                {[
                  {
                    label: "Lunch Service",
                    icon: <><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></>,
                    rows: [["Weekdays","12:00 PM – 01:00 PM"],["Weekends","12:30 PM – 01:30 PM"]],
                  },
                  {
                    label: "Dinner Service",
                    icon: <><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></>,
                    rows: [["Weekdays","07:00 PM – 08:00 PM"],["Weekends","07:30 PM – 08:30 PM"]],
                  },
                ].map(({ label, icon, rows }) => (
                  <div key={label} className="p-7 rounded-2xl border border-zinc-100 bg-zinc-50 hover:border-zinc-200 transition-all">
                    <svg className="w-7 h-7 text-zinc-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">{icon}</svg>
                    <h3 className="text-base font-bold text-zinc-900 mb-4">{label}</h3>
                    <div className="space-y-2">
                      {rows.map(([day, time]) => (
                        <div key={day} className="flex justify-between items-center text-sm">
                          <span className="text-zinc-400">{day}</span>
                          <span className="font-bold text-zinc-800">{time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Feedback Summary */}
            <section>
              <div className="flex justify-between items-end mb-7">
                <h2 className="text-2xl font-black tracking-tight text-zinc-900">Key Feedback Summary</h2>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-[10px] font-bold border border-emerald-100">Always Punctual</span>
                  <span className="bg-purple-50 text-purple-500 px-3 py-1 rounded-full text-[10px] font-bold border border-purple-100">Delicious Curries</span>
                  <span className="bg-amber-50 text-amber-500 px-3 py-1 rounded-full text-[10px] font-bold border border-amber-100">Hygienic</span>
                </div>
              </div>
              <div className="p-7 rounded-2xl border border-zinc-100 bg-zinc-50 space-y-4">
                {ratings.map(({ label, pct, color }) => (
                  <div key={label} className="flex items-center gap-4">
                    <span className="text-xs font-bold w-12 text-zinc-400">{label}</span>
                    <div className="flex-1 h-2 bg-zinc-200 rounded-full overflow-hidden">
                      <div className={`h-full ${color} rounded-full`} style={{ width: `${pct}%` }} />
                    </div>
                    <span className="text-xs font-bold w-10 text-right text-zinc-600">{pct}%</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Testimonials */}
            <section>
              <h2 className="text-2xl font-black tracking-tight text-zinc-900 mb-7">Customer Testimonials</h2>
              <div className="space-y-6">
                {[
                  {
                    initials: "AS", name: "Aarav Sharma", stars: 5, time: "2 days ago",
                    quote: "The quality of the Phulkas is just like home. They are soft even after 30 minutes of delivery. Highly recommend the Dal Tadka!",
                  },
                  {
                    initials: "PP", name: "Priya Patel", stars: 4, time: "1 week ago",
                    quote: "Solid service. Very consistent with timing. The spice levels are perfect for daily consumption. Not too oily.",
                  },
                ].map(({ initials, name, stars, time, quote }) => (
                  <div key={name} className="border-l-2 border-amber-400 pl-7 py-3">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-full bg-zinc-100 flex items-center justify-center font-black text-xs text-zinc-600">{initials}</div>
                      <div>
                        <h4 className="font-bold text-sm text-zinc-900">{name}</h4>
                        <div className="flex text-amber-400 mt-0.5">
                          {[1,2,3,4,5].map(i => (
                            <StarFilled key={i} className={`w-3 h-3 ${i > stars ? "opacity-20" : ""}`} />
                          ))}
                        </div>
                      </div>
                      <span className="ml-auto text-[10px] text-zinc-300 font-bold uppercase">{time}</span>
                    </div>
                    <p className="text-zinc-500 italic leading-relaxed text-sm">"{quote}"</p>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* ── RIGHT COL ── */}
          <div className="col-span-12 lg:col-span-4">
            <div className="sticky top-24 space-y-6">

              {/* Exclusive Offers */}
              <div>
                <h2 className="text-lg font-black tracking-tight text-zinc-900 mb-4">Exclusive Offers</h2>
                <div className="p-6 rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-500 block">Limited Time</span>
                      <h3 className="text-2xl font-black text-zinc-900 mt-1">50% OFF</h3>
                      <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest mt-1">Weekly Plan</p>
                    </div>
                    <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l1.5 4.5h4.5l-3.5 2.5 1.5 4.5-4-3-4 3 1.5-4.5L6 6.5h4.5z"/>
                    </svg>
                  </div>
                  <button className="w-full py-3 bg-amber-500 text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-amber-600 transition-colors shadow-sm italic">
                    Claim Deal
                  </button>
                </div>
              </div>

              {/* Trial Customization */}
              <div className="p-7 rounded-2xl border border-zinc-200 bg-white shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-black text-zinc-900">Trial Customization</h2>
                  <span className="text-amber-500 font-black text-lg">₹99</span>
                </div>

                {/* Select Trial Day */}
                <div className="mb-5">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 block mb-3">Select Trial Day</label>
                  <div className="bg-zinc-50 border border-zinc-200 p-4 rounded-xl">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-xs font-bold text-zinc-800">November 2024</span>
                      <div className="flex gap-2">
                        <button className="text-zinc-400 hover:text-amber-500 transition-colors">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path d="M15 18l-6-6 6-6"/></svg>
                        </button>
                        <button className="text-zinc-400 hover:text-amber-500 transition-colors">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path d="M9 18l6-6-6-6"/></svg>
                        </button>
                      </div>
                    </div>
                    {/* Day headers */}
                    <div className="grid grid-cols-7 text-center text-[10px] font-bold text-zinc-300 mb-2">
                      {["M","T","W","T","F","S","S"].map((d,i)=><span key={i}>{d}</span>)}
                    </div>
                    {/* Day cells */}
                    <div className="grid grid-cols-7 text-center text-[11px] font-medium gap-y-1">
                      {calDays.map(({ d, past, selected }) => (
                        <button
                          key={d}
                          onClick={() => !past && setSelectedDay(d)}
                          className={`py-1.5 rounded-lg transition-all font-bold
                            ${past ? "text-zinc-300 cursor-default" :
                              selectedDay === d ? "bg-amber-500 text-white shadow-sm" :
                              "text-zinc-700 hover:bg-zinc-100"}`}
                        >
                          {d}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Service Choice */}
                <div className="mb-7">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 block mb-3">Service Choice</label>
                  <div className="space-y-3">
                    {[
                      { id: "lunch", label: "Lunch Trial", desc: "Full meal including 3 Rotis, Dal, Sabzi, Rice & Salad." },
                      { id: "dinner", label: "Dinner Trial", desc: "Balanced evening meal with special side and choice of bread." },
                    ].map(({ id, label, desc }) => (
                      <div
                        key={id}
                        onClick={() => setServiceChoice(id)}
                        className={`border-2 p-4 rounded-xl cursor-pointer transition-all
                          ${serviceChoice === id
                            ? "border-amber-400 bg-amber-50"
                            : "border-zinc-200 hover:border-zinc-300"}`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`w-5 h-5 rounded-full border-2 mt-0.5 flex items-center justify-center shrink-0 transition-all
                            ${serviceChoice === id ? "border-amber-500" : "border-zinc-300"}`}>
                            {serviceChoice === id && <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />}
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-zinc-900">{label}</h4>
                            <p className="text-[11px] text-zinc-400 mt-1 leading-relaxed">{desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Selected + CTA */}
                <div className="space-y-4 pt-5 border-t border-zinc-100">
                  <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                    <span className="text-zinc-400">Selected</span>
                    <span className="text-zinc-900">Nov {selectedDay}th, {serviceChoice === "dinner" ? "Dinner" : "Lunch"}</span>
                  </div>
                  <button className="w-full bg-zinc-900 text-white font-black py-4 rounded-xl text-sm shadow-lg hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2">
                    Finalize Trial
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </button>
                  <button className="w-full text-zinc-300 text-[10px] font-bold uppercase tracking-[0.2em] hover:text-zinc-600 transition-colors py-1">
                    Back to Plans
                  </button>
                </div>
              </div>

              {/* Provider Contact */}
              <div className="p-7 rounded-2xl border border-zinc-100 bg-zinc-50">
                <h3 className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-5">Provider Contact</h3>
                <div className="space-y-4">
                  <a href="tel:+919876543210" className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center group-hover:border-zinc-300 transition-colors">
                      <svg className="w-4 h-4 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 011.1 3.18 2 2 0 013.07 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                      </svg>
                    </div>
                    <div>
                      <span className="block text-[10px] text-zinc-400 font-bold">Phone</span>
                      <span className="text-sm font-bold text-zinc-900">+91 98765 43210</span>
                    </div>
                  </a>
                  <a href="mailto:shreetiffin@ahaarmitra.com" className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center group-hover:border-zinc-300 transition-colors">
                      <svg className="w-4 h-4 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                      </svg>
                    </div>
                    <div>
                      <span className="block text-[10px] text-zinc-400 font-bold">Email</span>
                      <span className="text-sm font-bold text-zinc-900">shreetiffin@ahaarmitra.com</span>
                    </div>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>

      {/* ── FOOTER ── */}
      <footer className="w-full py-12 px-8 md:px-12 border-t border-zinc-100 bg-zinc-50">
        <div className="grid grid-cols-2 md:grid-cols-4 items-start gap-8 max-w-7xl mx-auto">
          <div className="flex flex-col gap-3">
            <div className="text-lg font-black text-zinc-900">AhaarMitra</div>
            <p className="text-[10px] text-zinc-400 uppercase tracking-widest leading-relaxed">The Premium Digital Hearth for Modern Nutrition.</p>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-zinc-900 text-[10px] font-black uppercase tracking-widest mb-1">Legal</h4>
            <a href="#" className="text-zinc-400 hover:text-zinc-700 transition-colors text-[10px] font-medium uppercase tracking-widest">Privacy Policy</a>
            <a href="#" className="text-zinc-400 hover:text-zinc-700 transition-colors text-[10px] font-medium uppercase tracking-widest">Terms of Service</a>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-zinc-900 text-[10px] font-black uppercase tracking-widest mb-1">Support</h4>
            <a href="#" className="text-zinc-400 hover:text-zinc-700 transition-colors text-[10px] font-medium uppercase tracking-widest">Contact Support</a>
            <a href="#" className="text-zinc-400 hover:text-zinc-700 transition-colors text-[10px] font-medium uppercase tracking-widest">Partner with Us</a>
          </div>
          <div className="flex flex-col gap-4 items-end">
            <div className="flex gap-4">
              {[
                <><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 011.1 3.18 2 2 0 013.07 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></>,
                <><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></>,
                <><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></>,
              ].map((icon, i) => (
                <button key={i} className="text-zinc-300 hover:text-zinc-600 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">{icon}</svg>
                </button>
              ))}
            </div>
            <div className="text-zinc-300 text-[10px] font-medium uppercase tracking-widest text-right">
              © 2024 AhaarMitra Editorial. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
