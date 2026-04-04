import React from "react";

const VendorAllInfo = () => {
  return (
    <div className="bg-white text-gray-900 font-sans">
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white border-b shadow-sm h-20 px-10 flex justify-between items-center">
        <div className="text-2xl font-extrabold">AhaarMitra</div>

        <div className="hidden md:flex gap-8 font-semibold">
          <a className="border-b-2 border-black pb-1">Explore</a>
          <a className="text-gray-500 hover:text-black">Subscriptions</a>
          <a className="text-gray-500 hover:text-black">Orders</a>
          <a className="text-gray-500 hover:text-black">Support</a>
        </div>

        <div className="flex items-center gap-4">
          <input
            className="border rounded-full px-4 py-2 text-sm outline-none"
            placeholder="Search cuisines..."
          />
          <div className="w-10 h-10 rounded-full bg-gray-200" />
        </div>
      </nav>

      <main className="pt-20">

        {/* Hero Section */}
        <section className="relative h-[500px]">
          <img
            src="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d"
            alt="Tiffin"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute bottom-10 left-10 text-white max-w-3xl">
            <h1 className="text-5xl font-extrabold mb-3">
              Shree Tiffin Services
            </h1>

            <p className="text-sm mb-2">
              📍 Noida • 📞 +91 98765 43210
            </p>

            <p className="italic text-white/80">
              "Authentic Home-Style Comfort, Elevated."
            </p>
          </div>
        </section>

        {/* Thali Section */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-8">
            Thali & Meal Variants
          </h2>

          <div className="space-y-6">

            {/* Card */}
            <div className="flex justify-between items-center border rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <div className="flex gap-4">
                <img
                  src="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d"
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div>
                  <h3 className="font-semibold text-lg">Mini Thali</h3>
                  <p className="text-sm text-gray-500">
                    2 Roti, Rice, Dal, Sabzi
                  </p>
                </div>
              </div>

              <div className="text-right">
                <p className="font-bold">₹85</p>
                <p className="text-sm text-gray-500">Daily</p>
              </div>
            </div>

            {/* Card */}
            <div className="flex justify-between items-center border rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <div className="flex gap-4">
                <img
                  src="https://images.unsplash.com/photo-1617196038431-8c2d4a4d2e1d"
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div>
                  <h3 className="font-semibold text-lg">Executive Thali</h3>
                  <p className="text-sm text-gray-500">
                    Full meal with Paneer & Curd
                  </p>
                </div>
              </div>

              <div className="text-right">
                <p className="font-bold">₹140</p>
                <p className="text-sm text-gray-500">Daily</p>
              </div>
            </div>
          </div>
        </section>

        {/* Delivery */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-6">
              Delivery Schedule
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-white rounded-xl shadow">
                <h3 className="font-semibold mb-2">Lunch</h3>
                <p>12:00 PM - 3:00 PM</p>
              </div>

              <div className="p-6 bg-white rounded-xl shadow">
                <h3 className="font-semibold mb-2">Dinner</h3>
                <p>8:00 PM - 10:00 PM</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-5xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Subscribe?
          </h2>

          <p className="text-gray-500 mb-6">
            Customize your meal plan easily.
          </p>

          <button className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
            Build My Plan
          </button>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t py-10 text-center text-gray-500 text-sm">
        © 2026 AhaarMitra
      </footer>
    </div>
  );
};

export default VendorAllInfo;