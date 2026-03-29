import React from 'react'

const MultiAddressDeliveryPage = () => {
    return (
    <div className="bg-white text-black font-[Manrope] antialiased overflow-x-hidden">

      {/* Main */}
      <main className="pt-32 pb-24 px-6 md:px-12 max-w-[1600px] mx-auto">

        {/* Locations */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="material-symbols-outlined text-amber-500">location_on</span>
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-gray-400">
              My Delivery Locations
            </h2>
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="bg-black text-white flex items-center gap-3 px-6 py-4 rounded-2xl border shadow">
              <span className="material-symbols-outlined text-xl">home</span>
              <div>
                <p className="text-xs font-black uppercase tracking-widest mb-1">Home</p>
                <p className="text-sm opacity-70">221B Baker Street, North Wing</p>
              </div>
            </div>

            <div className="bg-gray-100 text-gray-700 flex items-center gap-3 px-6 py-4 rounded-2xl border">
              <span className="material-symbols-outlined text-xl">school</span>
              <div>
                <p className="text-xs font-black uppercase tracking-widest mb-1 text-gray-500">University</p>
                <p className="text-sm">Tech Campus, Block C, Room 402</p>
              </div>
            </div>

            <button className="flex items-center gap-3 px-6 py-4 rounded-2xl border border-dashed text-gray-400 hover:text-black hover:border-black transition">
              <span className="material-symbols-outlined">add_circle</span>
              <span className="text-sm font-black uppercase tracking-widest">
                Add New Address
              </span>
            </button>
          </div>
        </section>

        {/* Header */}
        <header className="mb-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <span className="text-amber-500 font-black tracking-[0.2em] text-xs uppercase mb-3 block">
                Personalized Selection
              </span>
              <h1 className="text-5xl md:text-6xl font-black tracking-tighter">
                Daily Meal Plans
              </h1>
            </div>

            <div className="flex items-center gap-4 bg-gray-100 p-2 rounded-2xl border">
              <span className="text-xs font-bold text-gray-500">Sort:</span>
              <select className="bg-transparent text-xs font-bold outline-none">
                <option>Highest Rated</option>
                <option>Most Subscribers</option>
              </select>
            </div>
          </div>
        </header>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          <div className="bg-white rounded-[2rem] border shadow hover:shadow-lg transition overflow-hidden flex flex-col">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMBmIchnkIkoQGR77HPKNPe8Mi87AWVXdlxtSOo0_aqUzxSiao8g8wNuB6MLnue5hBiJqoCqYqYf_QwyAx8srHTmiWQLzDoSpBgjo79alSoDbXQZ1BxnJSwyVy8He4b-CbkpWuTgncU4YcUKtpcr-pZOyPo1hbVYNmqrmfArc3zZZuFPXAiqx6A5bpLRmZEtfGqskXEk_ur5KQcptvlknPuRIA86F4SmByElS4qXuo1rcrzcBC2SHCGJ1fTtaHQtFIc92CaW3sgiyX"
              alt="Shree Tiffin"
              className="h-64 w-full object-cover"
            />

            <div className="p-8 flex flex-col flex-1">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-black">Shree Tiffin Services</h3>
                <span className="text-amber-500 font-bold text-sm">★ 4.9</span>
              </div>

              <p className="text-gray-500 text-sm mb-6">
                Authentic home-style comfort crafted for the daily urban table.
              </p>

              <div className="flex justify-between mb-6 text-sm">
                <span className="font-bold">₹99 Starting</span>
                <span className="text-amber-500 font-bold">1,248 Subs</span>
              </div>

              <button className="mt-auto w-full bg-black text-white font-bold py-4 rounded-2xl hover:bg-amber-500 hover:text-black transition uppercase text-xs">
                View Meal Plans
              </button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default MultiAddressDeliveryPage


