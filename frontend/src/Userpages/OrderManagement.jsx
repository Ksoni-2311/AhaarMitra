import React from "react";

const OrderManagement15 = () => {
  return (
    <div className="min-h-screen bg-white text-black font-[Manrope]">
      <main className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto w-full">

        {/* Header */}
        <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-3">
              Order Management
            </h1>
            <p className="text-gray-500 font-medium">
              Manage your active meal subscriptions and view full order history.
            </p>
          </div>

          <button className="px-6 py-3 bg-black text-white text-xs font-black uppercase tracking-widest rounded-full hover:bg-gray-800 transition-all flex items-center gap-2 shadow">
            <span className="material-symbols-outlined text-lg">
              calendar_add_on
            </span>
            New Subscription
          </button>
        </header>

        {/* Active Subscriptions */}
        <section className="mb-16">
          <h2 className="text-xl font-bold flex items-center gap-3 text-gray-800 mb-8">
            <span className="material-symbols-outlined text-amber-500">
              verified
            </span>
            Active Subscriptions (2)
          </h2>

          {/* Card */}
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 md:p-10 flex flex-col lg:flex-row gap-8">
            
            {/* Left */}
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gray-200 flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl text-amber-500">
                    lunch_dining
                  </span>
                </div>
                <div>
                  <h3 className="font-black text-2xl">
                    Shree Tiffin Services
                  </h3>
                  <p className="text-xs text-gray-400 font-bold">
                    ID: AM-2024-STS-0182
                  </p>
                </div>
              </div>

              {/* Slots */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">

                <div className="bg-white border rounded-xl p-5">
                  <p className="text-xs text-gray-400 mb-1">Lunch Slot</p>
                  <h4 className="text-lg font-bold">Today, 12:45 PM</h4>

                  <p className="text-sm mt-3 text-gray-600">
                    Paneer Bhurji, 4x Roti, Dal Tadka & Salad
                  </p>

                  <div className="mt-4 flex gap-2">
                    <button className="flex-1 py-2 rounded-lg bg-red-100 text-red-500 text-xs font-bold">
                      Skip
                    </button>
                    <button className="px-3 py-2 rounded-lg bg-gray-100 text-gray-600">
                      Edit
                    </button>
                  </div>
                </div>

                <div className="bg-white border rounded-xl p-5">
                  <p className="text-xs text-gray-400 mb-1">Dinner Slot</p>
                  <h4 className="text-lg font-bold">Today, 08:30 PM</h4>

                  <p className="text-sm mt-3 text-gray-600">
                    Mixed Veg Curry, 4x Roti, Curd & Pickle
                  </p>

                  <div className="mt-4 flex gap-2">
                    <button className="flex-1 py-2 rounded-lg bg-red-100 text-red-500 text-xs font-bold">
                      Skip
                    </button>
                    <button className="px-3 py-2 rounded-lg bg-gray-100 text-gray-600">
                      Edit
                    </button>
                  </div>
                </div>

              </div>

              <button className="w-full py-3 border rounded-xl font-bold hover:bg-gray-100 transition">
                Contact Vendor
              </button>
            </div>

            {/* Right Calendar */}
            <div className="w-full lg:w-80 mt-25">
              <div className="bg-white border rounded-2xl p-4">
                <div className="flex justify-between mb-4">
                  <span className="font-bold">May 2024</span>
                  <div className="flex gap-2 text-gray-500">
                    <span className="material-symbols-outlined cursor-pointer">
                      chevron_left
                    </span>
                    <span className="material-symbols-outlined cursor-pointer">
                      chevron_right
                    </span>
                  </div>
                </div>

                {/* Calendar */}
                <div className="grid grid-cols-7 gap-1 text-xs text-center">
                  {["M","T","W","T","F","S","S"].map((d,i)=>(
                    <div key={i} className="font-bold text-gray-400">{d}</div>
                  ))}
                </div>

                <div className="grid grid-cols-7 gap-1 mt-2 text-xs">
                  {[20,21,22,23,24,25,26,27,28,29,30].map((day)=>(
                    <div key={day} className="p-2 rounded bg-gray-100 text-center">
                      {day}
                    </div>
                  ))}
                </div>

                {/* Summary */}
                <div className="mt-6 border-t pt-4 text-sm">
                  <div className="flex justify-between">
                    <span>Meals Remaining</span>
                    <span className="font-bold">42</span>
                  </div>
                  <div className="flex justify-between mt-2">
                    <span>Days Left</span>
                    <span className="font-bold text-amber-500">21</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* History Table */}
        <section>
          <h2 className="text-xl font-bold mb-6">Past Orders History</h2>

          <div className="border rounded-2xl overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-gray-100 text-xs uppercase text-gray-500">
                <tr>
                  <th className="px-6 py-4">Order Date</th>
                  <th className="px-6 py-4">Vendor</th>
                  <th className="px-6 py-4">Meal</th>
                  <th className="px-6 py-4">Status</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-t">
                  <td className="px-6 py-4">May 24, 2024</td>
                  <td className="px-6 py-4">Tadka House</td>
                  <td className="px-6 py-4">Dinner</td>
                  <td className="px-6 py-4 text-green-600">Delivered</td>
                </tr>

                <tr className="border-t">
                  <td className="px-6 py-4">May 23, 2024</td>
                  <td className="px-6 py-4">Ocean Delights</td>
                  <td className="px-6 py-4">Lunch</td>
                  <td className="px-6 py-4 text-red-500">Cancelled</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

      </main>
    </div>
  );
};

export default OrderManagement15;