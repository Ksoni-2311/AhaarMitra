import React from "react";

const PayoutSetup3 = () => {
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
          Back to Business Details
        </a>
      </header>

      {/* Main */}
      <main className="min-h-[calc(100vh-160px)] grid grid-cols-1 lg:grid-cols-2">

        {/* Left */}
        <section className="p-8 lg:p-20 flex flex-col justify-center bg-gradient-to-br from-blue-100 via-transparent to-transparent border-r border-black/5">
          <div className="max-w-xl mx-auto lg:mx-0">

            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              Security First
            </span>

            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-8 leading-[1.1]">
              Get paid <span className="text-blue-600">seamlessly.</span>
            </h1>

            <p className="text-black/60 text-lg mb-12 leading-relaxed font-medium">
              Link your bank account to start receiving earnings securely.
            </p>

            <div className="space-y-8 mb-16">

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 border border-blue-200 flex items-center justify-center">
                  <span className="material-symbols-outlined text-blue-600">encrypted</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">AES-256 Encryption</h3>
                  <p className="text-black/50 text-sm">
                    Your bank details are encrypted securely.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 border border-blue-200 flex items-center justify-center">
                  <span className="material-symbols-outlined text-blue-600">schedule_send</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Direct Deposits</h3>
                  <p className="text-black/50 text-sm">
                    Payments are settled directly to your account.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 p-6 rounded-[2rem]">
              <p className="text-[10px] font-black uppercase text-blue-600 mb-2">
                Secure Protocol
              </p>
              <p className="text-black/60 text-sm">
                We partner with certified payment gateways.
              </p>
            </div>
          </div>
        </section>

        {/* Right */}
        <section className="p-8 lg:p-20 flex flex-col items-center justify-center">
          <div className="max-w-md w-full">

            <div className="mb-12">
              <h2 className="text-3xl font-black mb-1">Payout Account</h2>
              <p className="text-black/40 text-sm">Step 3 of 3</p>
            </div>

            <form className="space-y-8">

              {/* Account Holder */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-black/50 ml-1">
                  Account Holder Name
                </label>
                <input
                  className="w-full px-5 py-4 rounded-2xl bg-gray-100 border border-black/10 placeholder-black/30"
                  placeholder="As per bank records"
                />
              </div>

              {/* Bank */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-black/50 ml-1">
                  Bank Name
                </label>
                <input
                  className="w-full px-5 py-4 rounded-2xl bg-gray-100 border border-black/10 placeholder-black/30"
                  placeholder="HDFC / SBI"
                />
              </div>

              {/* Account + IFSC */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <input
                  className="px-5 py-4 rounded-2xl bg-gray-100 border border-black/10"
                  placeholder="Account Number"
                />

                <input
                  className="px-5 py-4 rounded-2xl bg-gray-100 border border-black/10"
                  placeholder="IFSC Code"
                />
              </div>

              <p className="text-[10px] text-black/40 italic">
                Account will be verified via penny drop test.
              </p>

              {/* Button */}
              <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-5 rounded-2xl uppercase">
                Securely Finish Setup
              </button>

              {/* Security Box */}
              <div className="bg-gray-50 border border-black/10 rounded-2xl p-4 flex gap-3">
                <span className="material-symbols-outlined text-blue-600">
                  verified_user
                </span>
                <p className="text-[10px] text-black/60">
                  Your information is encrypted with SSL technology.
                </p>
              </div>

            </form>

            {/* Footer note */}
            <div className="text-center mt-12 pt-8 border-t border-black/5">
              <p className="text-black/30 text-[10px] font-bold uppercase">
                Partnering for your security
              </p>
            </div>

          </div>
        </section>

      </main>



    </div>
  );
};

export default PayoutSetup3;