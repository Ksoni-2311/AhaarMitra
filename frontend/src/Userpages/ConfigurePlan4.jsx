import React from 'react'
import { Link } from 'react-router-dom';

const ConfigurePlan4 = () => {
   return (
    <>
      {/* Google fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        rel="stylesheet"
      />

      {/* Tailwind CDN (JIT compiler) */}
      <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>

      {/* Custom Tailwind extensions */}
      <style type="text/tailwindcss">{`
        body { background-color: #ffffff; color: #111111; font-family: 'Manrope', sans-serif; }
        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
        .glass-card { background: rgba(255, 255, 255, 0.6); backdrop-filter: blur(12px); border: 1px solid rgba(0, 0, 0, 0.1); }
        .custom-radio:checked + label { @apply border-gray-300 bg-gray-100 ring-2 ring-gray-200; }
        .input-dark { @apply bg-gray-100 border-gray-300 rounded-lg text-sm text-gray-700 focus:ring-gray-200 focus:border-gray-200; }
      `}</style>

      <div className="antialiased min-h-screen flex flex-col bg-white text-gray-900">
       

        {/* Main Page */}
        <main className="pt-32 pb-20 px-12 max-w-[1600px] mx-auto w-full flex gap-12 flex-1">
          <div className="flex-1 space-y-12">
            {/* Header */}
            <header>
              <div className="flex items-center gap-4 mb-2 text-amber-500">
                <span className="material-symbols-outlined">family_restroom</span>
                <span className="text-xs font-black uppercase tracking-[0.2em]">Family Organizer Mode</span>
              </div>
              <h1 className="text-4xl font-black tracking-tight">Configure Your Modular Plan</h1>
              <p className="text-gray-600 mt-2 font-medium">
                Customizing for <span className="text-gray-900 font-bold">Shree Tiffin Services</span>
              </p>
            </header>

            {/* Section 1: Meal Service */}
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-black text-sm">1</span>
                <h2 className="text-xl font-bold">Select Meal Service</h2>
              </div>
              <div className="grid grid-cols-3 gap-6">
                <input className="hidden peer/lunch" id="lunch_only" name="service_type" type="radio" />
                <label
                  htmlFor="lunch_only"
                  className="flex flex-col items-center p-8 border border-gray-200 rounded-2xl cursor-pointer hover:border-gray-300 transition-all peer-checked/lunch:border-gray-300 peer-checked/lunch:bg-gray-100 group"
                >
                  <span className="material-symbols-outlined text-4xl mb-4 text-gray-400 group-hover:text-amber-500 transition-colors">light_mode</span>
                  <span className="font-black uppercase tracking-widest text-sm">Lunch Only</span>
                  <span className="text-gray-600 mt-1 uppercase">12:00 PM - 01:30 PM</span>
                </label>

                <input className="hidden peer/dinner" id="dinner_only" name="service_type" type="radio" />
                <label
                  htmlFor="dinner_only"
                  className="flex flex-col items-center p-8 border border-gray-200 rounded-2xl cursor-pointer hover:border-gray-300 transition-all peer-checked/dinner:border-gray-300 peer-checked/dinner:bg-gray-100 group"
                >
                  <span className="material-symbols-outlined text-4xl mb-4 text-gray-400 group-hover:text-blue-400 transition-colors">dark_mode</span>
                  <span className="font-black uppercase tracking-widest text-sm">Dinner Only</span>
                  <span className="text-gray-600 mt-1 uppercase">07:00 PM - 08:30 PM</span>
                </label>

                <input className="hidden peer/both" id="both_meals" name="service_type" type="radio" defaultChecked />
                <label
                  htmlFor="both_meals"
                  className="flex flex-col items-center p-8 border border-gray-200 rounded-2xl cursor-pointer hover:border-gray-300 transition-all peer-checked/both:border-gray-300 peer-checked/both:bg-gray-100 group relative"
                >
                  <div className="absolute top-4 right-4 bg-amber-600 text-[8px] font-black px-2 py-0.5 rounded text-white uppercase">Best Value</div>
                  <span className="material-symbols-outlined text-4xl mb-4 text-gray-400 group-hover:text-purple-400 transition-colors">routine</span>
                  <span className="font-black uppercase tracking-widest text-sm">Both Meals</span>
                  <span className="text-gray-600 mt-1 uppercase">Lunch & Dinner</span>
                </label>
              </div>
            </section>

            {/* Section 2: Delivery Logistics */}
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-black text-sm">2</span>
                <h2 className="text-xl font-bold">Delivery Logistics</h2>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label className="block text-xs font-black uppercase tracking-widest text-gray-600">Lunch Delivery Location</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-3 text-gray-400">location_on</span>
                    <input className="input-dark w-full pl-10 py-3" placeholder="Enter home or office address..." type="text"/>
                  </div>
                  <div className="aspect-video w-full rounded-xl bg-gray-200 border border-gray-200/5 flex items-center justify-center relative overflow-hidden group">
                    <img
                      alt="Map Preview"
                      className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 transition-all"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDydlzRflOpdloVx4bUOIVNLALd2INt0zHYUMuLn_UTvudiWHQvBYdThIGahPpl5CdPG4uNvo2Q7h4xh1fK6yxINSiYGsEcBCFmHTlfeJZbPKh_T73Gyemo35diJbdPh6DZfn3h7Ch4ogYm5H96ID-E6GuuQ80IiWfLNxJDSigfliVsPNzJznn8-68x57H36bSOEBnOKtuSCPLHPTK7Yst4IoP9pFAaMleHUgWSnaa_-vWxcordOE7C66fIvsZEO7mmMB57Qz7HUJC"
                    />
                    <div className="relative z-10 text-[10px] font-bold uppercase tracking-widest text-gray-600 bg-gray-100 px-3 py-1 rounded backdrop-blur">Map Preview</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="block text-xs font-black uppercase tracking-widest text-gray-600">Dinner Delivery Location</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-3 text-gray-400">home</span>
                    <input className="input-dark w-full pl-10 py-3" placeholder="Enter residential address..." type="text"/>
                  </div>
                  <div className="aspect-video w-full rounded-xl bg-gray-200 border border-gray-200/5 flex items-center justify-center relative overflow-hidden group">
                    <img
                      alt="Map Preview"
                      className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 transition-all"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9K_WJuJnsbZdHixTAWWuLFQclBbTZYfcqnEN-AHmDIx3XciJRbDInJf6H_WRHZiMyG9H1RWxq9IeugcPly3YMPkOlmG9CxPD2x4kCDDhkZB_I2IXoo5uvC9tHccON6JN30h-loF2LMavl_7g_Z6Gkd4MkkgcW-GpxFh2v06riHrN9BFa0zNi_-YSkik6hvka5NZV6h2pOMc11cIM_PNlekXAWH0Bed03ofAF6b28IVFRTSTXRJfOxX_t-ojl4f6nGybfuyeRBWxxB"
                    />
                    <div className="relative z-10 text-[10px] font-bold uppercase tracking-widest text-gray-600 bg-gray-100 px-3 py-1 rounded backdrop-blur">Map Preview</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Meal Package Tiers */}
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-black text-sm">3</span>
                <h2 className="text-xl font-bold">Meal Package Tiers</h2>
              </div>
              <div className="grid grid-cols-2 gap-12">
                {/* Lunch */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="material-symbols-outlined text-amber-500">lunch_dining</span>
                    <h3 className="font-bold text-sm uppercase tracking-widest">Lunch Options</h3>
                  </div>
                  <div className="space-y-3">
                    <label className="flex items-center justify-between p-4 rounded-xl border border-gray-200 hover:border-gray-300 bg-gray-100 cursor-pointer group transition-all">
                      <div className="flex items-center gap-4">
                        <input checked className="w-4 h-4 text-amber-600 focus:ring-amber-600 border-gray-200/20 bg-gray-100" name="lunch_tier" type="radio" />
                        <div>
                          <p className="text-sm font-bold">Standard Tiffin</p>
                          <p className="text-[10px] text-gray-600 uppercase">3 Roti, 1 Dal, 1 Sabzi</p>
                        </div>
                      </div>
                      <span className="text-sm font-black text-amber-500">₹50/meal</span>
                    </label>
                    <label className="flex items-center justify-between p-4 rounded-xl border border-gray-200 hover:border-gray-300 bg-gray-100 cursor-pointer group transition-all">
                      <div className="flex items-center gap-4">
                        <input className="w-4 h-4 text-amber-600 focus:ring-amber-600 border-gray-200/20 bg-gray-100" name="lunch_tier" type="radio" />
                        <div>
                          <p className="text-sm font-bold">Deluxe Tiffin</p>
                          <p className="text-[10px] text-gray-600 uppercase">4 Roti, 1 Dal, 2 Sabzi, Curd</p>
                        </div>
                      </div>
                      <span className="text-sm font-black text-amber-500">₹70/meal</span>
                    </label>
                  </div>
                </div>

                {/* Dinner */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="material-symbols-outlined text-blue-400">dinner_dining</span>
                    <h3 className="font-bold text-sm uppercase tracking-widest">Dinner Options</h3>
                  </div>
                  <div className="space-y-3">
                    <label className="flex items-center justify-between p-4 rounded-xl border border-gray-200 hover:border-gray-300 bg-gray-100 cursor-pointer group transition-all">
                      <div className="flex items-center gap-4">
                        <input className="w-4 h-4 text-amber-600 focus:ring-amber-600 border-gray-200/20 bg-gray-100" name="dinner_tier" type="radio" />
                        <div>
                          <p className="text-sm font-bold">Standard Tiffin</p>
                          <p className="text-[10px] text-gray-600 uppercase">3 Roti, 1 Dal, 1 Sabzi</p>
                        </div>
                      </div>
                      <span className="text-sm font-black text-amber-500">₹50/meal</span>
                    </label>
                    <label className="flex items-center justify-between p-4 rounded-xl border border-gray-200 hover:border-gray-300 bg-gray-100 cursor-pointer group transition-all">
                      <div className="flex items-center gap-4">
                        <input checked className="w-4 h-4 text-amber-600 focus:ring-amber-600 border-gray-200/20 bg-gray-100" name="dinner_tier" type="radio" />
                        <div>
                          <p className="text-sm font-bold">Deluxe Tiffin</p>
                          <p className="text-[10px] text-gray-600 uppercase">4 Roti, 1 Dal, 2 Sabzi, Salad</p>
                        </div>
                      </div>
                      <span className="text-sm font-black text-amber-500">₹70/meal</span>
                    </label>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: Subscription Duration */}
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-black text-sm">4</span>
                <h2 className="text-xl font-bold">Select Your Subscription Duration</h2>
              </div>
              <div className="grid grid-cols-3 gap-6">
                {/* Weekly */}
                <input className="hidden peer/weekly" id="weekly_plan" name="duration" type="radio" />
                <label
                  htmlFor="weekly_plan"
                  className="flex flex-col items-start p-6 border border-gray-200 rounded-2xl cursor-pointer hover:border-gray-300 transition-all peer-checked/weekly:border-gray-300 peer-checked/weekly:bg-gray-100 group"
                >
                  <div className="flex justify-between w-full mb-3">
                    <span className="material-symbols-outlined text-gray-400 group-hover:text-white transition-colors">calendar_view_week</span>
                    <div className="w-4 h-4 rounded-full border border-gray-200/30 group-hover:border-gray-200 peer-checked/weekly:bg-gray-100 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-gray-800 opacity-0 group-peer-checked/weekly:opacity-100"></div>
                    </div>
                  </div>
                  <span className="font-bold text-base">Weekly Plan</span>
                  <span className="text-[10px] text-gray-600 mt-1 uppercase">7 Days Duration</span>
                </label>

                {/* 3-Weekly */}
                <input className="hidden peer/three-weekly" id="three_weekly_plan" name="duration" type="radio" defaultChecked />
                <label
                  htmlFor="three_weekly_plan"
                  className="flex flex-col items-start p-6 border border-gray-200 rounded-2xl cursor-pointer hover:border-gray-300 transition-all peer-checked/three-weekly:border-gray-300 peer-checked/three-weekly:bg-gray-100 group relative"
                >
                  <div className="absolute -top-3 left-4 bg-gray-200 text-[8px] font-black px-2 py-0.5 rounded border border-gray-200/30 text-gray-600 uppercase">Recommended</div>
                  <div className="flex justify-between w-full mb-3">
                    <span className="material-symbols-outlined text-gray-400 group-hover:text-white transition-colors">event_repeat</span>
                    <div className="w-4 h-4 rounded-full border border-gray-200/30 group-hover:border-gray-200 peer-checked/three-weekly:bg-gray-100"></div>
                  </div>
                  <span className="font-bold text-base">3-Weekly Plan</span>
                  <span className="text-[10px] text-gray-600 mt-1 uppercase">21 Days Duration</span>
                </label>

                {/* Monthly */}
                <input className="hidden peer/monthly" id="monthly_plan" name="duration" type="radio" />
                <label
                  htmlFor="monthly_plan"
                  className="flex flex-col items-start p-6 border border-gray-200 rounded-2xl cursor-pointer hover:border-gray-300 transition-all peer-checked/monthly:border-gray-300 peer-checked/monthly:bg-gray-100 group relative"
                >
                  <div className="absolute top-4 right-4 bg-green-600 text-[8px] font-black px-2 py-0.5 rounded text-white uppercase">15% Off</div>
                  <div className="flex justify-between w-full mb-3">
                    <span className="material-symbols-outlined text-gray-400 group-hover:text-white transition-colors">calendar_month</span>
                    <div className="w-4 h-4 rounded-full border border-gray-200/30 group-hover:border-gray-200 peer-checked/monthly:bg-gray-100"></div>
                  </div>
                  <span className="font-bold text-base">Monthly Plan</span>
                  <span className="text-[10px] text-gray-600 mt-1 uppercase">30 Days Duration</span>
                </label>
              </div>
            </section>
          </div>

          {/* Aside – Summary */}
          <aside className="w-96">
            <div className="sticky top-32 glass-card rounded-2xl p-8 border border-gray-200">
              <h2 className="text-xl font-black mb-8 border-b border-gray-200 pb-4">Your Plan Summary</h2>
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-gray-600 mb-1">Lunch Service</p>
                      <p className="text-sm font-bold">Standard Package</p>
                    </div>
                    <span className="text-sm font-bold">₹50</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-gray-600 mb-1">Dinner Service</p>
                      <p className="text-sm font-bold">Deluxe Package</p>
                    </div>
                    <span className="text-sm font-bold">₹70</span>
                  </div>
                  <div className="flex justify-between items-start pt-2 border-t border-gray-200 mt-2">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-gray-600 mb-1">Subscription</p>
                      <p className="text-sm font-bold">3-Weekly Plan (21 Days)</p>
                    </div>
                    <span className="text-xs font-medium text-gray-600 italic">Selected</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-medium text-gray-600">
                    <span className="material-symbols-outlined text-sm">near_me</span>
                    Lunch: <span className="text-gray-900">Crystal Office Tower</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-gray-600">
                    <span className="material-symbols-outlined text-sm">home</span>
                    Dinner: <span className="text-gray-900">Skyline Heights Apt</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <hr className="border-gray-200" />
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-gray-600 mb-2">Promo Code</label>
                    <div className="flex gap-2">
                      <input className="input-dark flex-1 px-3 py-2 text-xs" placeholder="ENTER CODE" type="text" />
                      <button className="px-4 py-2 border border-gray-200/20 rounded-lg text-[10px] font-bold uppercase hover:bg-gray-100 transition-colors">Apply</button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between px-3 py-2 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-green-500 text-sm">local_offer</span>
                      <span className="text-[10px] font-bold text-green-400 uppercase tracking-wider">Active: WELCOME15</span>
                    </div>
                    <span className="text-[10px] font-black text-green-400">-₹441</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-gray-600 text-xs font-bold uppercase">
                    <span>Daily Subtotal</span>
                    <span>₹120</span>
                  </div>
                  <div className="flex justify-between text-gray-600 text-xs font-bold uppercase">
                    <span>Total Duration (21d)</span>
                    <span>₹2,520</span>
                  </div>
                  <div className="flex justify-between text-gray-600 text-xs font-bold uppercase">
                    <span>Delivery Fees</span>
                    <span>₹420</span>
                  </div>
                  <div className="flex justify-between items-end pt-4">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-500">Estimated Total</p>
                      <p className="text-4xl font-black tracking-tighter">₹2,499</p>
                    </div>
                    <span className="text-xs font-bold text-gray-600 italic">/ total</span>
                  </div>
                </div>

                <Link to={"/5"}>
                <button className="mt-4 w-full bg-amber-500 text-white py-3 rounded-lg font-bold hover:bg-amber-600 transition shadow ">
                  Initialize Subscription
                </button>
                </Link>
                <div className="bg-amber-600/10 border border-amber-600/20 rounded-lg p-4 flex gap-3">
                  <span className="material-symbols-outlined text-amber-500 text-lg">info</span>
                  <p className="text-[10px] leading-relaxed text-black font-medium">
                    Prices include current offers. Monthly billing will be adjusted based on holidays or skipped meals.
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

export default ConfigurePlan4