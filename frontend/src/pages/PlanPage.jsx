import React from "react";

const PlanPage = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white text-gray-900 font-[Manrope] min-h-screen">

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white border-b h-20 px-12 flex justify-between items-center shadow-sm z-50">
        <h1 className="text-xl font-black">AhaarMitra</h1>

        <button className="text-gray-500 hover:text-black text-sm font-bold">
          Exit Setup ✕
        </button>
      </nav>

      {/* Main */}
      <main className="pt-28 px-12 max-w-7xl mx-auto flex gap-12">

        {/* LEFT */}
        <div className="flex-1 space-y-12">

          {/* Header */}
          <div>
            <p className="text-amber-500 text-xs font-bold uppercase mb-2">
              Family Organizer Mode
            </p>
            <h1 className="text-4xl font-black">
              Configure Your Plan
            </h1>
            <p className="text-gray-500 mt-2">
              Customizing for <span className="font-bold text-black">Shree Tiffin</span>
            </p>
          </div>

          {/* Meal Selection */}
          <section>
            <h2 className="font-bold mb-4">Select Meal Service</h2>

            <div className="grid grid-cols-3 gap-6">
              {["Lunch Only", "Dinner Only", "Both Meals"].map((item, i) => (
                <div
                  key={i}
                  className="p-6 border rounded-xl hover:shadow-md cursor-pointer text-center transition"
                >
                  <p className="font-bold">{item}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {i === 0 && "12:00 PM - 01:30 PM"}
                    {i === 1 && "07:00 PM - 08:30 PM"}
                    {i === 2 && "Lunch & Dinner"}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Delivery */}
          <section>
            <h2 className="font-bold mb-4">Delivery Logistics</h2>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="text-xs text-gray-500 mb-1 block">
                  Lunch Address
                </label>
                <input
                  placeholder="Enter address..."
                  className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-400 outline-none"
                />
              </div>

              <div>
                <label className="text-xs text-gray-500 mb-1 block">
                  Dinner Address
                </label>
                <input
                  placeholder="Enter address..."
                  className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-400 outline-none"
                />
              </div>
            </div>
          </section>

          {/* Packages */}
          <section>
            <h2 className="font-bold mb-4">Meal Packages</h2>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-5 border rounded-xl hover:shadow-md cursor-pointer transition">
                <p className="font-bold">Standard Tiffin</p>
                <p className="text-xs text-gray-500">3 Roti, 1 Dal, 1 Sabzi</p>
                <p className="text-amber-600 font-bold mt-2">₹50 / meal</p>
              </div>

              <div className="p-5 border rounded-xl hover:shadow-md cursor-pointer transition">
                <p className="font-bold">Deluxe Tiffin</p>
                <p className="text-xs text-gray-500">4 Roti, 2 Sabzi, Curd</p>
                <p className="text-amber-600 font-bold mt-2">₹70 / meal</p>
              </div>
            </div>
          </section>

          {/* Duration */}
          <section>
            <h2 className="font-bold mb-4">Subscription Duration</h2>

            <div className="grid grid-cols-3 gap-6">
              {["Weekly", "3-Weekly", "Monthly"].map((item, i) => (
                <div
                  key={i}
                  className="p-5 border rounded-xl hover:shadow-md cursor-pointer transition"
                >
                  <p className="font-bold">{item}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {i === 0 && "7 Days"}
                    {i === 1 && "21 Days"}
                    {i === 2 && "30 Days"}
                  </p>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* RIGHT */}
        <aside className="w-96">

          <div className="bg-gray-50 p-6 rounded-2xl shadow-md space-y-6">

            <h2 className="font-bold text-lg">Plan Summary</h2>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Lunch Package</span>
                <span>₹50</span>
              </div>

              <div className="flex justify-between">
                <span>Dinner Package</span>
                <span>₹70</span>
              </div>

              <div className="flex justify-between pt-3 border-t font-bold">
                <span>Total</span>
                <span className="text-amber-600">₹2,499</span>
              </div>
            </div>

            {/* Button (no navigation) */}
            <button className="w-full bg-black text-white py-4 rounded-xl font-bold hover:bg-gray-800 transition">
              Initialize Subscription
            </button>

          </div>

        </aside>

      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm border-t mt-10">
        © 2024 AhaarMitra
      </footer>
    </div>
  );
};

export default PlanPage;