import React from "react";

const BusinessDetails2 = () => {
  return (
    <div className="antialiased overflow-x-hidden min-h-screen bg-white text-black font-[Manrope]">

      {/* Header */}
      <header className="w-full pt-10 pb-6 px-8 flex justify-between items-center border-b border-black/5 bg-white/70 backdrop-blur-xl sticky top-0 z-50">
        <div className="inline-block">
          <div className="text-2xl font-black tracking-tighter uppercase">
            AhaarMitra
          </div>
          <div className="h-0.5 w-full bg-gradient-to-r from-blue-500 to-transparent"></div>
        </div>

        <a className="text-sm font-bold text-black/40 hover:text-black transition-colors flex items-center gap-2" href="#">
          <span className="material-symbols-outlined text-base">arrow_back</span>
          Back to Personal Details
        </a>
      </header>

      {/* Main */}
      <main className="min-h-[calc(100vh-160px)] grid grid-cols-1 lg:grid-cols-2">

        {/* Left */}
        <section className="p-8 lg:p-20 flex flex-col justify-center bg-gradient-to-br from-blue-100 via-transparent to-transparent border-r border-black/5">
          <div className="max-w-xl mx-auto lg:mx-0">

            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              Partner Program
            </span>

            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-8 leading-[1.1]">
              Tell us about your{" "}
              <span className="text-blue-600">Culinary Hub.</span>
            </h1>

            <p className="text-black/60 text-lg mb-12 leading-relaxed font-medium">
              Setting up your professional presence helps us connect you with the right audience.
            </p>

            <div className="space-y-8 mb-16">

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 border border-blue-200 flex items-center justify-center">
                  <span className="material-symbols-outlined text-blue-600">storefront</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Brand Identity</h3>
                  <p className="text-black/50 text-sm">
                    Your business name is how customers recognize you.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 border border-blue-200 flex items-center justify-center">
                  <span className="material-symbols-outlined text-blue-600">location_on</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Precision Logistics</h3>
                  <p className="text-black/50 text-sm">
                    Accurate location helps optimize deliveries.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-black/5 border border-black/10 p-6 rounded-[2rem]">
              <p className="text-[10px] font-black uppercase text-blue-600 mb-2">Pro Tip</p>
              <p className="text-black/60 text-sm">
                Registered businesses with GSTIN often enjoy higher trust scores.
              </p>
            </div>
          </div>
        </section>

        {/* Right */}
        <section className="p-8 lg:p-20 flex flex-col items-center justify-center">
          <div className="max-w-md w-full">

            <div className="mb-12">
              <h2 className="text-3xl font-black mb-1">Business Details</h2>
              <p className="text-black/40 text-sm">Step 2 of 3</p>
            </div>

            <form className="space-y-6">

              <input className="w-full px-5 py-4 rounded-2xl bg-gray-100 border border-black/10 placeholder-black/30" placeholder="Business Name" />

              <select className="w-full px-5 py-4 rounded-2xl bg-gray-100 border border-black/10">
                <option>Select business type</option>
                <option>Home Kitchen</option>
                <option>Restaurant</option>
                <option>Cloud Kitchen</option>
              </select>

              <textarea className="w-full px-5 py-4 rounded-2xl bg-gray-100 border border-black/10 min-h-[100px]" placeholder="Address"></textarea>

              <input className="w-full px-5 py-4 rounded-2xl bg-gray-100 border border-black/10" placeholder="GST Number" />

              <input className="w-full px-5 py-4 rounded-2xl bg-gray-100 border border-black/10" placeholder="FSSAI Number" />

              <button className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black uppercase">
                Next Step
              </button>

            </form>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="w-full py-10 px-8 border-t border-black/5 bg-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-8 text-[10px] uppercase text-black/50">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
            <a href="#">Support</a>
          </div>
          <div className="text-black/50 text-[10px] uppercase">
            © 2024 AhaarMitra
          </div>
        </div>
      </footer>

    </div>
  );
};

export default BusinessDetails2;