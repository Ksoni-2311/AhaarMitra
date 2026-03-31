import React from "react";
import { Link } from "react-router-dom";

const VendorDetails1 = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white text-gray-900 font-[Manrope]">

      {/* Hero */}
      <section className="relative h-[300px] mt-16 overflow-hidden">
        <img
          src="https://assets.gqindia.com/photos/6086c49078866ae25e37741e/1:1/w_1080,h_1080,c_limit/Tiffin%20Service%20COVID.jpeg"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        <div className="absolute bottom-12 left-12 text-white max-w-2xl">
          <div className="flex gap-3 mb-4">
            <span className="bg-amber-500 text-white px-3 py-1 text-xs rounded-full font-semibold shadow">
              3 ACTIVE OFFERS
            </span>
            <span className="bg-white/20 px-3 py-1 text-xs rounded-full backdrop-blur-md">
              PREMIUM PARTNER
            </span>
          </div>

          <h1 className="text-6xl font-black tracking-tight leading-tight">
            Shree Tiffin Services
          </h1>

          <p className="text-white/80 mt-3 text-lg">
            Authentic Home-Style Comfort, Elevated for Your Daily Table.
          </p>
        </div>
      </section>

      {/* Main */}
      <div className="max-w-7xl mx-auto px-12 py-14 grid grid-cols-12 gap-12">

        {/* LEFT */}
        <div className="col-span-8 space-y-12">

          {/* Stats */}
          <div className="flex gap-12 border-b border-gray-200 pb-10">
            <div>
              <h2 className="text-4xl font-black">4.5 ⭐</h2>
              <p className="text-xs text-gray-500 mt-1">1.2K REVIEWS</p>
            </div>

            <div>
              <h2 className="text-4xl font-black">2.5km</h2>
              <p className="text-xs text-gray-500 mt-1">DELIVERY RADIUS</p>
            </div>

            <div>
              <h2 className="text-4xl font-black text-green-600">
                Pure Veg
              </h2>
              <p className="text-xs text-gray-500 mt-1">DIETARY TYPE</p>
            </div>
            <div>
              <button className="px-6 py-2 bg-[#FE9A00] text-white rounded-lg font-semibold uppercase hover:bg-[#e88a00] transition">
                Menu
              </button>
              <p className="text-xs uppercase text-gray-500 mt-1">See Menu</p>
            </div>
          </div>

          {/* Facilities */}
          <div>
            <h2 className="text-2xl font-black mb-6">
              Vendor Special Facilities
            </h2>

            <div className="grid grid-cols-3 gap-6">
              {[
                "1-hour cancellation",
                "No-contact delivery",
                "Subscription flexibility"
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center border border-gray-100"
                >
                  <div className="mb-3 text-amber-500 text-2xl">⚡</div>
                  <h4 className="font-semibold text-lg">{item}</h4>
                  <p className="text-sm text-gray-500 mt-2">
                    Standard premium service feature
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Delivery */}
          <div>
            <h2 className="text-2xl font-black mb-6">
              Typical Delivery Windows
            </h2>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition">
                <h3 className="font-bold text-lg mb-3">Lunch Service</h3>
                <p className="text-sm text-gray-500">
                  Weekdays: 12:00 PM - 01:00 PM
                </p>
                <p className="text-sm text-gray-500">
                  Weekends: 12:30 PM - 01:30 PM
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition">
                <h3 className="font-bold text-lg mb-3">Dinner Service</h3>
                <p className="text-sm text-gray-500">
                  Weekdays: 07:00 PM - 08:00 PM
                </p>
                <p className="text-sm text-gray-500">
                  Weekends: 07:30 PM - 08:30 PM
                </p>
              </div>
            </div>
          </div>

          {/* Feedback */}
          <div>
            <h2 className="text-2xl font-black mb-6">
              Key Feedback Summary
            </h2>

            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 space-y-4">
              {[
                ["5 Star", "85%"],
                ["4 Star", "10%"],
                ["3 Star", "3%"],
                ["2 Star", "1.5%"],
                ["1 Star", "0.5%"]
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <span className="text-xs w-16 text-gray-500">
                    {item[0]}
                  </span>
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-black to-gray-600 w-[80%]" />
                  </div>
                  <span className="text-xs font-semibold">{item[1]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div>
            <h2 className="text-2xl font-black mb-6">
              Customer Testimonials
            </h2>

            <div className="space-y-6">
              <div className="bg-white p-5 rounded-xl shadow border border-gray-100">
                <p className="font-semibold mb-2">Aarav Sharma ⭐⭐⭐⭐⭐</p>
                <p className="text-sm text-gray-600 italic">
                  "The quality of Phulkas is just like home..."
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow border border-gray-100">
                <p className="font-semibold mb-2">Priya Patel ⭐⭐⭐⭐</p>
                <p className="text-sm text-gray-600 italic">
                  "Very consistent service and perfect spice level."
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT */}
        <div className="col-span-4 space-y-6">

          <div className="bg-white p-6 rounded-2xl shadow-lg border border-amber-200">
            <p className="text-xs text-amber-600 font-semibold">LIMITED TIME</p>
            <h2 className="text-3xl font-black mt-1">50% OFF</h2>
            <button className="mt-4 w-full bg-amber-500 text-white py-3 rounded-lg font-bold hover:bg-amber-600 transition shadow">
              CLAIM DEAL
            </button>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
            <h2 className="font-bold mb-4">
              Trial Customization ₹99
            </h2>

            <Link to={"/2"}>
            <button className="w-full bg-black text-white py-3 rounded-lg font-bold hover:bg-gray-800 transition">
              Customize Trial →
            </button>
              </Link>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
            <h2 className="font-bold mb-4">
              Subscribe ₹2999/month
            </h2>
    
            <Link to={"/4"}>
            <button className="w-full bg-black text-white py-3 rounded-lg font-bold hover:bg-gray-800 transition">
              Subscribe Now →
            </button></Link>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
            <h3 className="font-bold mb-3">Contact</h3>
            <p className="text-sm">📞 +91 98765 43210</p>
            <p className="text-sm">📧 shreetiffin@ahaarmitra.com</p>
          </div>

        </div>

      </div>

     
    </div>
  );
};

export default VendorDetails1;