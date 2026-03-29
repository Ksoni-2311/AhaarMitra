import React from "react";

const RegisterProvider1 = () => {
  return (
    <div className="antialiased overflow-x-hidden min-h-screen bg-white text-black font-[Manrope]">


      {/* Main */}
      <main className="min-h-[calc(100vh-160px)] grid grid-cols-1 lg:grid-cols-2">

        {/* Left Section */}
        <section className="p-8 lg:p-20 flex flex-col justify-center bg-gradient-to-br from-blue-100 via-transparent to-transparent border-r border-black/5">
          <div className="max-w-xl mx-auto lg:mx-0">

            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              Partner Program
            </span>

            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-black mb-8 leading-[1.1]">
              Empower Your Kitchen,{" "}
              <span className="text-blue-600">
                Feed the Future.
              </span>
            </h1>

            <p className="text-black/60 text-lg mb-12 leading-relaxed font-medium">
              Join a community of local chefs and kitchens transforming the way
              students and professionals eat. We provide the tools; you provide
              the taste.
            </p>

            {/* Features */}
            <div className="space-y-8 mb-16">

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center border border-blue-200">
                  <span className="material-symbols-outlined text-blue-600">
                    trending_up
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black mb-1">
                    Scale your business
                  </h3>
                  <p className="text-black/50 text-sm leading-relaxed">
                    Reach hundreds of subscribers in your vicinity without worrying about marketing or delivery logistics.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center border border-blue-200">
                  <span className="material-symbols-outlined text-blue-600">
                    payments
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black mb-1">
                    Guaranteed Payments
                  </h3>
                  <p className="text-black/50 text-sm leading-relaxed">
                    Weekly payouts and transparent earnings dashboard.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center border border-blue-200">
                  <span className="material-symbols-outlined text-blue-600">
                    groups
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black mb-1">
                    Community Support
                  </h3>
                  <p className="text-black/50 text-sm leading-relaxed">
                    Access to vendor workshops and discounts.
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-black/5 border border-black/10 p-6 rounded-[2rem] relative overflow-hidden">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center border border-black/10">
                  <span className="material-symbols-outlined text-black/50">
                    person
                  </span>
                </div>
                <div>
                  <p className="font-bold text-sm text-black">
                    Aarti's Homestyle Kitchen
                  </p>
                  <p className="text-blue-600 text-[10px] font-black uppercase tracking-widest">
                    Partner since 2022
                  </p>
                </div>
              </div>

              <p className="text-black/60 text-sm italic leading-relaxed">
                "AhaarMitra helped me grow from cooking 10 meals a day to serving over 150 students daily."
              </p>

              <div className="absolute -right-4 -bottom-4 opacity-10">
                <span className="material-symbols-outlined text-8xl text-black">
                  format_quote
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Right Section */}
        <section className="p-8 lg:p-20  flex flex-col items-center justify-center mt-12 lg:mt-0">
          <div className="max-w-md w-full">

            <div className="mb-12">
              <h2 className="text-3xl font-black mb-1 text-black">
                Personal Details
              </h2>
              <p className="text-black/40 text-sm font-medium">
                Step 1 of 3: Owner Identification
              </p>
            </div>

            <form className="space-y-6 border-b border-gray-200 pb-12 mb-12">

              <div className="grid grid-cols-2 gap-4">
                <input className="w-full px-5 py-4 rounded-2xl text-sm bg-gray-100 border border-black/10 placeholder-black/30" placeholder="First Name" />
                <input className="w-full px-5 py-4 rounded-2xl text-sm bg-gray-100 border border-black/10 placeholder-black/30" placeholder="Last Name" />
              </div>

              <input className="w-full px-5 py-4 rounded-2xl text-sm bg-gray-100 border border-black/10 placeholder-black/30" placeholder="Email Address" />

              <div className="flex gap-3">
                <input className="w-full px-5 py-4 rounded-2xl text-sm bg-gray-100 border border-black/10 placeholder-black/30" placeholder="+91 9876543210" />
                <button className="px-6 py-4 rounded-2xl bg-gray-100 border border-black/10 text-[10px] font-black uppercase">
                  Send OTP
                </button>
              </div>

              <input className="w-full px-5 py-4 rounded-2xl text-sm bg-gray-100 border border-black/10 placeholder-black/30" placeholder="OTP" />

              <input className="w-full px-5 py-4 rounded-2xl text-sm bg-gray-100 border border-black/10 placeholder-black/30" placeholder="Aadhar Number" />

              <div className="border-2 border-dashed border-black/10 rounded-3xl p-8 flex flex-col items-center bg-gray-50">
                <span className="material-symbols-outlined text-blue-600 text-3xl">
                  cloud_upload
                </span>
                <p className="text-sm font-bold text-black">Upload Aadhaar</p>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-5 rounded-2xl font-black uppercase">
                Next Step
              </button>
            </form>
            <div className="text-center uppercase">
              Already a partner? <a href="#" className="text-blue-600 font-bold "><br />Log To Partner Portal</a>
            </div>

          </div>
        </section>
      </main>

     

    </div>
  );
};

export default RegisterProvider1;