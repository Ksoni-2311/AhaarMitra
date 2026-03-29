import { useState } from "react";

const CheckoutConfirmation3 = () => {
  const [selectedPayment, setSelectedPayment] = useState("card");

  return (
    <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4 md:p-8">
      <div className="bg-white w-full max-w-6xl max-h-[921px] overflow-y-auto rounded-[2.5rem] shadow-2xl flex flex-col scrollbar-hide">

        {/* Header */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-xl px-8 py-5 border-b border-zinc-100 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-50 transition-colors">
              <svg className="w-4 h-4 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-xl font-black tracking-tight uppercase text-zinc-900" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Checkout &amp; Confirmation
            </h2>
          </div>
          <div className="flex items-center gap-2 text-emerald-600 bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-200">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span className="text-[10px] font-black uppercase tracking-widest">Secure 256-bit SSL</span>
          </div>
        </div>

        {/* Body */}
        <div className="p-8 md:p-12 grid grid-cols-12 gap-10">

          {/* Left column */}
          <div className="col-span-12 lg:col-span-7 space-y-12">

            {/* Delivery Address */}
            <section className="space-y-5">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-zinc-900 text-white flex items-center justify-center text-xs font-black">1</span>
                <h3 className="text-lg font-black tracking-tight text-zinc-900" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  Delivery Address
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Selected address */}
                <button className="text-left p-6 rounded-2xl border-2 border-zinc-900 bg-zinc-50 transition-all group relative">
                  <div className="absolute top-4 right-4 w-5 h-5 rounded-full bg-zinc-900 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="block text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-2">Home</span>
                  <p className="text-sm font-bold text-zinc-800 leading-relaxed pr-8">
                    42, Silver Oak Residency, Sector 15, HSR Layout, Bangalore - 560102
                  </p>
                </button>
                {/* Add new */}
                <button className="text-left p-6 rounded-2xl border-2 border-dashed border-zinc-200 hover:border-zinc-400 hover:bg-zinc-50 transition-all flex flex-col items-center justify-center gap-2 text-zinc-400 group">
                  <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-xs font-bold uppercase tracking-widest">Add New Address</span>
                </button>
              </div>
            </section>

            {/* Payment Method */}
            <section className="space-y-5">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-zinc-900 text-white flex items-center justify-center text-xs font-black">2</span>
                <h3 className="text-lg font-black tracking-tight text-zinc-900" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  Payment Method
                </h3>
              </div>
              <div className="space-y-3">

                {/* Credit/Debit Card */}
                <div
                  className={`p-5 border-2 rounded-2xl cursor-pointer transition-all ${selectedPayment === "card" ? "border-zinc-900 bg-zinc-50" : "border-zinc-200 hover:bg-zinc-50"}`}
                  onClick={() => setSelectedPayment("card")}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <svg className="w-5 h-5 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                        <line x1="1" y1="10" x2="23" y2="10" />
                      </svg>
                      <span className="font-bold text-sm text-zinc-800">Credit / Debit Card</span>
                    </div>
                    <div className="flex gap-2 opacity-60">
                      <div className="w-9 h-6 bg-zinc-100 border border-zinc-200 rounded flex items-center justify-center text-[8px] font-black italic text-zinc-600">VISA</div>
                      <div className="w-9 h-6 bg-zinc-100 border border-zinc-200 rounded flex items-center justify-center text-[8px] font-black italic text-zinc-600">MC</div>
                    </div>
                  </div>
                  {selectedPayment === "card" && (
                    <div className="grid grid-cols-12 gap-4">
                      <div className="col-span-12">
                        <input
                          className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-2.5 text-sm text-zinc-800 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent"
                          placeholder="Card Number"
                          type="text"
                        />
                      </div>
                      <div className="col-span-8">
                        <input
                          className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-2.5 text-sm text-zinc-800 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent"
                          placeholder="MM / YY"
                          type="text"
                        />
                      </div>
                      <div className="col-span-4">
                        <input
                          className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-2.5 text-sm text-zinc-800 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent"
                          placeholder="CVV"
                          type="password"
                        />
                      </div>
                      <div className="col-span-12 flex items-center gap-2 text-zinc-400">
                        <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                        <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">PCI-DSS Compliant Secure Storage</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* UPI / QR Code */}
                <div
                  className={`p-5 border-2 rounded-2xl cursor-pointer transition-all ${selectedPayment === "upi" ? "border-zinc-900 bg-zinc-50" : "border-zinc-200 hover:bg-zinc-50"}`}
                  onClick={() => setSelectedPayment("upi")}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <svg className="w-5 h-5 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 14h2v2h-2zM18 14h2v2h-2zM14 18h2v2h-2zM18 18h2v2h-2z" />
                      </svg>
                      <div>
                        <span className="font-bold text-sm text-zinc-800 block">UPI / QR Code</span>
                        <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">Google Pay, PhonePe, Paytm</span>
                      </div>
                    </div>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${selectedPayment === "upi" ? "border-zinc-900 bg-zinc-900" : "border-zinc-300"}`}>
                      {selectedPayment === "upi" && (
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>

                {/* Net Banking */}
                <div
                  className={`p-5 border-2 rounded-2xl cursor-pointer transition-all ${selectedPayment === "netbanking" ? "border-zinc-900 bg-zinc-50" : "border-zinc-200 hover:bg-zinc-50"}`}
                  onClick={() => setSelectedPayment("netbanking")}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <svg className="w-5 h-5 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21l18 0M3 10l18 0M5 6l7-3 7 3M4 10l0 11M20 10l0 11M8 10l0 11M12 10l0 11M16 10l0 11" />
                      </svg>
                      <div>
                        <span className="font-bold text-sm text-zinc-800 block">Net Banking</span>
                        <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">All Major Indian Banks Supported</span>
                      </div>
                    </div>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${selectedPayment === "netbanking" ? "border-zinc-900 bg-zinc-900" : "border-zinc-300"}`}>
                      {selectedPayment === "netbanking" && (
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>

                {/* Wallets */}
                <div
                  className={`p-5 border-2 rounded-2xl cursor-pointer transition-all ${selectedPayment === "wallet" ? "border-zinc-900 bg-zinc-50" : "border-zinc-200 hover:bg-zinc-50"}`}
                  onClick={() => setSelectedPayment("wallet")}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <svg className="w-5 h-5 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12V7H5a2 2 0 010-4h14v4" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5v14a2 2 0 002 2h16v-5" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 12h.01" />
                      </svg>
                      <div>
                        <span className="font-bold text-sm text-zinc-800 block">Wallets</span>
                        <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">Amazon Pay, Mobikwik &amp; more</span>
                      </div>
                    </div>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${selectedPayment === "wallet" ? "border-zinc-900 bg-zinc-900" : "border-zinc-300"}`}>
                      {selectedPayment === "wallet" && (
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>

                {/* Cash on Delivery */}
                <div
                  className={`p-5 border-2 rounded-2xl cursor-pointer transition-all ${selectedPayment === "cod" ? "border-zinc-900 bg-zinc-50" : "border-zinc-200 hover:bg-zinc-50"}`}
                  onClick={() => setSelectedPayment("cod")}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <svg className="w-5 h-5 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <div>
                        <span className="font-bold text-sm text-zinc-800 block">Cash on Delivery</span>
                        <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">Pay when your tiffin arrives</span>
                      </div>
                    </div>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${selectedPayment === "cod" ? "border-zinc-900 bg-zinc-900" : "border-zinc-300"}`}>
                      {selectedPayment === "cod" && (
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>

              </div>
            </section>
          </div>

          {/* Right column — Trial Summary */}
          <div className="col-span-12 lg:col-span-5">
            <div className="bg-zinc-50 border border-zinc-200 rounded-[2rem] p-8 sticky top-32">

              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-400 mb-6">
                Trial Summary
              </h3>

              {/* Delivery slot */}
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-500 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 16l2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-amber-600 mb-1">Confirmed Delivery Slot</p>
                    <h4 className="text-base font-black text-zinc-900 leading-tight">Dinner Service</h4>
                    <p className="text-sm font-bold text-zinc-500 mt-0.5">Nov 14th • 7:00 PM - 8:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Item */}
              <div className="flex items-center gap-4 pb-6 mb-6 border-b border-zinc-200">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border border-zinc-200 shrink-0">
                  <img
                    alt="Shree Tiffin Special"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMBmIchnkIkoQGR77HPKNPe8Mi87AWVXdlxtSOo0_aqUzxSiao8g8wNuB6MLnue5hBiJqoCqYqYf_QwyAx8srHTmiWQLzDoSpBgjo79alSoDbXQZ1BxnJSwyVy8He4b-CbkpWuTgncU4YcUKtpcr-pZOyPo1hbVYNmqrmfArc3zZZuFPXAiqx6A5bpLRmZEtfGqskXEk_ur5KQcptvlknPuRIA86F4SmByElS4qXuo1rcrzcBC2SHCGJ1fTtaHQtFIc92CaW3sgiyX"
                  />
                </div>
                <div>
                  <h4 className="font-black text-zinc-900 text-base">Shree Tiffin Special</h4>
                  <p className="text-xs text-zinc-400 font-bold uppercase tracking-wider mt-0.5">Trial Package • ₹99.00</p>
                </div>
              </div>

              {/* Price breakdown */}
              <div className="space-y-3 mb-8">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-zinc-400 font-bold">Base Price</span>
                  <span className="font-bold text-zinc-800">₹99.00</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-zinc-400 font-bold">Priority Delivery</span>
                  <span className="text-emerald-600 uppercase text-[10px] font-black tracking-widest">Free</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-zinc-400 font-bold">Taxes &amp; GST</span>
                  <span className="font-bold text-zinc-800">₹4.95</span>
                </div>
                <div className="flex justify-between items-center pt-5 border-t border-zinc-200">
                  <span className="text-lg font-black uppercase tracking-tight text-zinc-900">To Pay</span>
                  <span className="text-3xl font-black text-amber-500">₹103.95</span>
                </div>
              </div>

              {/* CTA */}
              <button className="w-full bg-zinc-900 text-white font-black py-5 rounded-2xl text-lg shadow-lg hover:bg-zinc-800 transition-all flex items-center justify-center gap-3">
                Confirm &amp; Pay
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </button>

              {/* Trust badges */}
              <div className="mt-6 flex items-center justify-center gap-4 py-4 px-6 bg-white rounded-xl border border-zinc-100">
                {[
                  { label: "Verified", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /> },
                  { label: "Encrypted", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /> },
                  { label: "Protected", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /> },
                ].map(({ label, icon }) => (
                  <div key={label} className="flex flex-col items-center gap-1 text-zinc-400 hover:text-zinc-700 transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>{icon}</svg>
                    <span className="text-[8px] font-black uppercase tracking-[0.1em]">{label}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CheckoutConfirmation3;
