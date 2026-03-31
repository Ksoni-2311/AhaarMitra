import { useState } from "react";

const METHODS = [
  {
    id: "card",
    icon: "credit_card",
    title: "Credit / Debit Card",
    sub: "Visa, Mastercard, RuPay, Amex",
  },
  {
    id: "upi",
    icon: "account_balance_wallet",
    title: "UPI Transfer",
    sub: "Google Pay, PhonePe, Paytm, Any UPI ID",
  },
  {
    id: "netbanking",
    icon: "account_balance",
    title: "Net Banking",
    sub: "All Major Indian Banks Supported",
  },
];

/* ── shared input class ─────────────────────────────────── */
const fi =
  "w-full bg-stone-50 border border-stone-200 rounded-xl py-3 px-4 text-stone-900 font-medium placeholder:text-stone-300 text-sm outline-none transition-all focus:border-amber-400 focus:bg-white focus:ring-2 focus:ring-amber-400/20";

export default function SecureCheckout5() {
  const [selected, setSelected] = useState("card");

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        rel="stylesheet"
      />

      <style>{`
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(16px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .fu  { animation: fadeUp .5s cubic-bezier(.165,.84,.44,1) both; }
        .fu1 { animation-delay:.04s } .fu2 { animation-delay:.11s }
        .fu3 { animation-delay:.18s } .fu4 { animation-delay:.25s }
        .fu5 { animation-delay:.32s } .fu6 { animation-delay:.39s }

        .method-card { transition: border-color .2s, box-shadow .2s, background .2s; }
        .method-card.active  { border-color:#f59e0b; box-shadow:0 0 0 3px rgba(245,158,11,.12); background:#fff; }
        .method-card.inactive:hover { border-color:#d1d5db; background:#fafafa; }

        .pay-btn { transition: background .22s, transform .15s, box-shadow .2s; }
        .pay-btn:hover { background:#1c1917 !important; transform:translateY(-1px); box-shadow:0 10px 28px -6px rgba(0,0,0,.3); }
        .pay-btn:active { transform:translateY(0); }
        .pay-btn:hover .lock-icon { transform:translateX(3px); }
        .lock-icon { transition: transform .2s; }

        .badge-discount { background:rgba(254,243,199,.7); }
      `}</style>

      <div
        className="min-h-screen flex flex-col bg-stone-50 text-stone-900"
        style={{ fontFamily: "'Manrope', sans-serif" }}
      >

     

        {/* ── MAIN ── */}
        <main className="pt-32 pb-20 px-6 md:px-8 max-w-[1920px] mx-auto w-full grid grid-cols-12 gap-10">

          {/* ── LEFT col ── */}
          <div className="col-span-12 lg:col-span-8 space-y-10">

            {/* Header */}
            <header className="space-y-2 fu fu1">
              <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-stone-900">
                Select Payment Method
              </h1>
              <p className="text-stone-500 text-lg max-w-2xl font-medium">
                Choose your preferred way to pay and start your gourmet journey.
              </p>
            </header>

            {/* Payment method cards */}
            <section className="space-y-4 fu fu2">
              {METHODS.map((m) => {
                const active = selected === m.id;
                return (
                  <div
                    key={m.id}
                    onClick={() => setSelected(m.id)}
                    className={`method-card border-2 rounded-2xl p-6 cursor-pointer ${
                      active ? "active" : "inactive border-stone-200 bg-white"
                    }`}
                  >
                    {/* Row */}
                    <div className="flex justify-between items-center mb-0">
                      <div className="flex items-center gap-4">
                        <span
                          className={`material-symbols-outlined text-3xl transition-colors ${
                            active ? "text-amber-500" : "text-stone-400"
                          }`}
                        >
                          {m.icon}
                        </span>
                        <div>
                          <h3 className="text-lg font-black uppercase tracking-tight text-stone-900">
                            {m.title}
                          </h3>
                          <p className="text-[10px] text-stone-400 font-bold uppercase tracking-widest">
                            {m.sub}
                          </p>
                        </div>
                      </div>
                      {/* Check indicator */}
                      <span
                        className={`material-symbols-outlined text-amber-500 transition-opacity ${
                          active ? "opacity-100" : "opacity-0"
                        }`}
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        check_circle
                      </span>
                    </div>

                    {/* Card fields — only when active & card */}
                    {active && m.id === "card" && (
                      <div className="mt-6 space-y-4 max-w-xl">
                        <div>
                          <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-stone-400 mb-2">
                            Card Number
                          </label>
                          <input className={fi} placeholder="xxxx xxxx xxxx xxxx" type="text" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-stone-400 mb-2">
                              Expiry Date
                            </label>
                            <input className={fi} placeholder="MM / YY" type="text" />
                          </div>
                          <div>
                            <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-stone-400 mb-2">
                              CVV
                            </label>
                            <input className={fi} placeholder="•••" type="password" />
                          </div>
                        </div>
                        <div>
                          <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-stone-400 mb-2">
                            Cardholder Name
                          </label>
                          <input className={fi} placeholder="Full Name as on card" type="text" />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </section>

            {/* Security notice */}
            <div className="fu fu3 flex items-center gap-4 p-5 bg-white border border-stone-200 rounded-2xl shadow-sm">
              <span className="material-symbols-outlined text-amber-500 shrink-0">shield</span>
              <p className="text-sm text-stone-500 font-medium leading-relaxed">
                Your transaction is secured with industry-standard 256-bit encryption. We do not store your full card details.
              </p>
            </div>
          </div>

          {/* ── RIGHT col (aside) ── */}
          <aside className="col-span-12 lg:col-span-4 fu fu4">
            <div className="sticky top-28 space-y-5">

              {/* Plan Summary card */}
              <div className="bg-stone-900 text-white p-8 rounded-2xl shadow-2xl shadow-stone-900/20">
                <h3 className="text-2xl font-black tracking-tighter uppercase italic border-b border-white/10 pb-4 mb-6">
                  Plan Summary
                </h3>

                <div className="space-y-5">
                  {/* Selected plan */}
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-0.5">Selected Plan</p>
                      <p className="font-bold text-white">Premium Tier (60 Meals)</p>
                    </div>
                    <span className="text-lg font-black text-white">₹4,200</span>
                  </div>

                  {/* Add-ons */}
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-0.5">Add-ons</p>
                      <p className="font-bold text-white">Dual-Location Delivery</p>
                    </div>
                    <span className="text-lg font-black text-white">₹150</span>
                  </div>

                  {/* Discount */}
                  <div className="pt-2 border-t border-white/10">
                    <div className="flex justify-between items-center badge-discount px-3 py-2.5 rounded-xl">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-amber-700 text-sm">loyalty</span>
                        <p className="text-[10px] font-black uppercase text-amber-700">Bundle Discount (15% OFF)</p>
                      </div>
                      <span className="font-black text-amber-700">-₹1,500</span>
                    </div>
                  </div>

                  {/* Grand total */}
                  <div className="pt-5 mt-2 border-t-4 border-white/20 border-double">
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-1">Grand Total</p>
                        <p className="text-5xl font-black tracking-tighter text-white">₹2,850</p>
                      </div>
                      <p className="text-xs font-bold text-white/30 mb-2">/MONTH</p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <button className="pay-btn w-full mt-8 bg-white text-stone-900 py-5 rounded-xl font-black uppercase tracking-[0.2em] text-sm shadow-xl flex items-center justify-center gap-3 group">
                  Complete Payment
                  <span className="material-symbols-outlined lock-icon text-lg">lock</span>
                </button>
                <p className="text-center mt-3 text-[10px] font-bold text-white/30 uppercase tracking-widest">
                  Secured by Stripe &amp; Razorpay
                </p>
              </div>

              {/* Buyer Protection */}
              <div className="fu fu5 bg-white border border-stone-200 p-6 rounded-2xl shadow-sm flex gap-4 items-start">
                <span
                  className="material-symbols-outlined text-amber-500 shrink-0 mt-0.5"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  verified
                </span>
                <div>
                  <p className="text-sm font-black uppercase tracking-wide text-stone-900 mb-1">Buyer Protection</p>
                  <p className="text-xs text-stone-500 leading-relaxed font-medium">
                    Get full refund if meals are not delivered as scheduled within the first 3 days.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </main>
      </div>
    </>
  );
}
