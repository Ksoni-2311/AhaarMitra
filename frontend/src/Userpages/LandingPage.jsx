import React from 'react'
import VendorCard from '../components/VendorCard.jsx'
import IllustrationImg from '../../assets/WhyAaharmitra.png'

const LandingPage = () => {
  return (
    <div className="flex flex-col gap-10 p-4 md:p-8 mt-6">

      {/* 🔹 Header / Search Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 w-[90%] lg:w-2/3 mx-auto my-10">

        {/* 🔍 Search Bar */}
        <div className="flex items-center w-full md:w-[40%] bg-white border border-gray-200 rounded-xl px-4 py-2 shadow-sm hover:shadow-md transition">
          <span className="material-symbols-outlined text-gray-500 text-xl mr-2">
            search
          </span>

          <input
            className="bg-transparent outline-none text-sm w-full placeholder:text-gray-400"
            placeholder="Search kitchens, dishes..."
            type="text"
          />

          <span className="material-symbols-outlined text-gray-400 text-lg cursor-pointer hover:text-black">
            close
          </span>
        </div>

        {/* ⚙️ Filters + Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-end w-full md:w-auto">

          {/* Dropdowns */}
          <div className="flex flex-wrap gap-3">
            <select className="px-3 py-2 text-sm border rounded-lg bg-white hover:border-gray-400 transition">
              <option>Sort By</option>
              <option>Rating</option>
              <option>Price Low → High</option>
              <option>Price High → Low</option>
            </select>

            <select className="px-3 py-2 text-sm border rounded-lg bg-white hover:border-gray-400 transition">
              <option>Dietary</option>
              <option>Veg</option>
              <option>Non-Veg</option>
              <option>Vegan</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button className="px-4 py-2 text-sm border rounded-lg hover:bg-gray-100 transition flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">tune</span>
              Filters
            </button>

            <button className="px-4 py-2 text-sm border rounded-lg hover:bg-gray-100 transition flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">map</span>
              Map
            </button>
          </div>

        </div>
      </div>

      {/* 🔹 Vendor Grid */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6 w-[90%] mx-auto">
        <VendorCard />
        <VendorCard />
        <VendorCard />
        <VendorCard />
      </div>

      {/* 🔹 Explore Button */}
      <div className="flex justify-center">
        <button className="px-8 py-4 rounded-full bg-amber-500 text-white font-semibold hover:bg-amber-600 transition shadow-md hover:shadow-xl">
          Explore Mode
        </button>
      </div>

      {/* 🔹 Why Choose Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mt-10 w-[90%] mx-auto">

        {/* Left */}
        <div className="w-full lg:w-2/3 grid gap-6 text-center lg:text-left">

          <span className="text-2xl md:text-3xl font-bold">
            Why choose AhaarMitra vendors?
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="flex flex-col gap-3 items-center lg:items-start bg-gray-50 p-6 rounded-2xl border">
              <span className="text-xl font-bold">1-hour cancellation</span>
              <span className="text-sm text-gray-600">
                Flexible planning with quick cancellation policy.
              </span>
            </div>

            <div className="flex flex-col gap-3 items-center lg:items-start bg-gray-50 p-6 rounded-2xl border">
              <span className="text-xl font-bold">No-contact delivery</span>
              <span className="text-sm text-gray-600">
                Safe doorstep delivery with hygiene standards.
              </span>
            </div>

            <div className="flex flex-col gap-3 items-center lg:items-start bg-gray-50 p-6 rounded-2xl border">
              <span className="text-xl font-bold">Subscription flexibility</span>
              <span className="text-sm text-gray-600">
                Pause or modify plans anytime via dashboard.
              </span>
            </div>

          </div>
        </div>

        {/* Right */}
        <div className="w-full lg:w-1/3 h-40 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400 overflow-hidden">
          <img src={IllustrationImg} alt="illustration" className="border-amber-400" />
        </div>

      </div>

      {/* 🔹 AhaarMitra Standard */}
      <div className="mt-16 w-[90%] mx-auto">

        <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-10">
          The AhaarMitra Standard
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="p-8 rounded-2xl border hover:border-amber-500/40 transition shadow-sm hover:shadow-lg">
            <div className="w-14 h-14 rounded-xl bg-amber-100 flex items-center justify-center mb-6 text-amber-500">
              <span className="material-symbols-outlined text-3xl">schedule</span>
            </div>
            <h4 className="font-bold text-lg mb-2">Instant Flex</h4>
            <p className="text-sm text-gray-600">
              Cancel or pause meals up to 60 minutes before delivery.
            </p>
          </div>

          <div className="p-8 rounded-2xl border hover:border-amber-500/40 transition shadow-sm hover:shadow-lg">
            <div className="w-14 h-14 rounded-xl bg-amber-100 flex items-center justify-center mb-6 text-amber-500">
              <span className="material-symbols-outlined text-3xl">restaurant</span>
            </div>
            <h4 className="font-bold text-lg mb-2">Hygiene Verified</h4>
            <p className="text-sm text-gray-600">
              Kitchens undergo regular safety inspections.
            </p>
          </div>

          <div className="p-8 rounded-2xl border hover:border-amber-500/40 transition shadow-sm hover:shadow-lg">
            <div className="w-14 h-14 rounded-xl bg-amber-100 flex items-center justify-center mb-6 text-amber-500">
              <span className="material-symbols-outlined text-3xl">eco</span>
            </div>
            <h4 className="font-bold text-lg mb-2">Zero Waste</h4>
            <p className="text-sm text-gray-600">
              Eco-friendly packaging with minimal food waste.
            </p>
          </div>

        </div>
      </div>

      {/* 🔹 User Sentiment */}
      <div className="mt-16 w-[90%] mx-auto">

        <h2 className="text-2xl md:text-3xl font-black mb-8 flex items-center gap-3">
          <span className="w-10 h-1 bg-amber-500"></span>
          User Community Sentiment
        </h2>

        <div className="bg-gray-50 p-8 rounded-2xl border space-y-6">

          {[
            { label: "Exceptional", value: 78 },
            { label: "High Quality", value: 15 },
            { label: "Consistent", value: 7 }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4">

              <span className="text-xs font-semibold w-24 uppercase text-gray-500">
                {item.label}
              </span>

              <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-amber-500"
                  style={{ width: `${item.value}%` }}
                ></div>
              </div>

              <span className="text-sm font-bold w-10 text-right">
                {item.value}%
              </span>

            </div>
          ))}

        </div>
      </div>

    </div>
  )
}

export default LandingPage