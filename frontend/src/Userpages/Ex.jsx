import { useState } from "react";

const vendors = [
  {
    id: 1,
    name: "Shree Tiffin Services",
    rating: 4.9,
    description:
      "Authentic home-style comfort crafted for the daily urban table using organic spices.",
    price: "₹99",
    subs: "1,248",
    badge: { label: "Top Rated", color: "bg-amber-500 text-black" },
    badge2: {
      label: "Pure Veg",
      color: "bg-zinc-100 text-zinc-700 border border-zinc-200",
    },
    lunchWindow: "12:30 PM – 1:45 PM",
    dinnerWindow: "07:30 PM – 09:00 PM",
    lunchStatus: "On-Time",
    dinnerStatus: "Schedule",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMBmIchnkIkoQGR77HPKNPe8Mi87AWVXdlxtSOo0_aqUzxSiao8g8wNuB6MLnue5hBiJqoCqYqYf_QwyAx8srHTmiWQLzDoSpBgjo79alSoDbXQZ1BxnJSwyVy8He4b-CbkpWuTgncU4YcUKtpcr-pZOyPo1hbVYNmqrmfArc3zZZuFPXAiqx6A5bpLRmZEtfGqskXEk_ur5KQcptvlknPuRIA86F4SmByElS4qXuo1rcrzcBC2SHCGJ1fTtaHQtFIc92CaW3sgiyX",
  },
  {
    id: 2,
    name: "Urban Nutri-Bowls",
    rating: 4.8,
    description:
      "Macro-balanced, calorie-counted meals designed for high-performance lifestyles.",
    price: "₹149",
    subs: "842",
    badge: { label: "Nutritionist Plus", color: "bg-blue-500 text-white" },
    badge2: null,
    lunchWindow: "1:00 PM – 2:30 PM",
    dinnerWindow: "08:00 PM – 09:30 PM",
    lunchStatus: "On-Time",
    dinnerStatus: "Schedule",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDK1tSZ-wBDTNCjK3U3eV-EuMtd2Cl4BRrx5feYW8Pfs8Bl576PyFGfiUmELvHa2DcAA0ASCPZH5rm6xkvI4VWEyveQtFW_HU-6WaVJhIecNa3nIEBWvPePZbqil-AqaPw_U4D03iHh6mX8U4qIdX2_-eQM0Yi_dfr2w8Pj6F662kJ14gBX9_W7bX1uqGyfRomUAqsC9fF9xIzr2nCfGeyS7-zawAHEF1FnS_ep-oVvA-kKbIodDQAMjaroBolce2E3nQzZ_aDltzmU",
  },
  {
    id: 3,
    name: "The Fit Kitchen",
    rating: 4.7,
    description:
      "Premium non-vegetarian keto and high-protein bowls tailored for muscle gain.",
    price: "₹179",
    subs: "2,105",
    badge: { label: "Fastest Delivery", color: "bg-green-500 text-white" },
    badge2: null,
    lunchWindow: "12:00 PM – 1:30 PM",
    dinnerWindow: "07:00 PM – 08:30 PM",
    lunchStatus: "On-Time",
    dinnerStatus: "Schedule",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxDgB08kbHg4r0zUnel6GttGO-S_WADO-w39rZhmkQPeD79HasHrKA8oAcSftvGzC6oWsZv-3hHotK2rfgbjdQNkZqMa5FcXsDbZVFCEQoVtQ9a9zpeEfUxTW7eCHzfCeQaPfJ-PMY2ndmRCjf77328Z85PdHaoAjLcdRd3RFFqiwQAApTNkhBXUhMa453XBrKR-JtM3zUmkov1Nmp9X9J_3nspx3uueROaIDFzZhSepvqDnuU7HJlfrQcZiHVxo0o5fvUwKLJ2v7y",
  },
  {
    id: 3,
    name: "The Fit Kitchen",
    rating: 4.7,
    description:
      "Premium non-vegetarian keto and high-protein bowls tailored for muscle gain.",
    price: "₹179",
    subs: "2,105",
    badge: { label: "Fastest Delivery", color: "bg-green-500 text-white" },
    badge2: null,
    lunchWindow: "12:00 PM – 1:30 PM",
    dinnerWindow: "07:00 PM – 08:30 PM",
    lunchStatus: "On-Time",
    dinnerStatus: "Schedule",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxDgB08kbHg4r0zUnel6GttGO-S_WADO-w39rZhmkQPeD79HasHrKA8oAcSftvGzC6oWsZv-3hHotK2rfgbjdQNkZqMa5FcXsDbZVFCEQoVtQ9a9zpeEfUxTW7eCHzfCeQaPfJ-PMY2ndmRCjf77328Z85PdHaoAjLcdRd3RFFqiwQAApTNkhBXUhMa453XBrKR-JtM3zUmkov1Nmp9X9J_3nspx3uueROaIDFzZhSepvqDnuU7HJlfrQcZiHVxo0o5fvUwKLJ2v7y",
  },
];

const standards = [
  {
    icon: "schedule",
    title: "Instant Flex",
    desc: "Cancel or pause your meal up to 60 minutes before the window starts.",
  },
  {
    icon: "restaurant",
    title: "Hygiene Verified",
    desc: "Every kitchen undergoes a weekly 45-point health and safety inspection.",
  },
  {
    icon: "eco",
    title: "Zero Waste",
    desc: "Compostable packaging and optimized portions to eliminate food waste.",
  },
];

function VendorCard({ vendor }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="bg-white rounded-3xl overflow-hidden flex flex-col border border-zinc-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
      {/* Image */}
      <div className="relative h-60 overflow-hidden bg-zinc-100">
        <img
          src={vendor.img}
          alt={vendor.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
          <span
            className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${vendor.badge.color}`}
          >
            {vendor.badge.label}
          </span>
          {vendor.badge2 && (
            <span
              className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${vendor.badge2.color}`}
            >
              {vendor.badge2.label}
            </span>
          )}
        </div>
        {/* Favorite */}
        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md border border-zinc-200 flex items-center justify-center hover:bg-white transition-all shadow-sm"
        >
          <span
            className="material-symbols-outlined text-xl"
            style={{
              fontVariationSettings: liked ? "'FILL' 1" : "'FILL' 0",
              color: liked ? "#ef4444" : "#a1a1aa",
            }}
          >
            favorite
          </span>
        </button>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        {/* Title & Rating */}
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-black tracking-tight text-zinc-900">
            {vendor.name}
          </h3>
          <div className="flex items-center gap-1 bg-amber-50 px-2 py-0.5 rounded-lg border border-amber-200 shrink-0 ml-2">
            <span
              className="material-symbols-outlined text-amber-500 text-sm"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              star
            </span>
            <span className="text-xs font-black text-amber-600">
              {vendor.rating}
            </span>
          </div>
        </div>

        {/* <p className="text-zinc-400 text-sm mb-5 line-clamp-2 font-medium">
          {vendor.description}
        </p> */}

        {/* Price / Subs */}
        <div className="grid grid-cols-2 gap-3 mb-4 border-y border-zinc-100 py-3">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">
              Price / Meal
            </p>
            <p className="text-lg font-black text-zinc-900">
              {vendor.price}{" "}
              <span className="text-[10px] text-zinc-400 uppercase font-bold">
                Starting
              </span>
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">
              Active Now
            </p>
            <p className="text-lg font-black text-amber-500">
              {vendor.subs}{" "}
              <span className="text-[10px] text-zinc-400 uppercase font-bold">
                Subs
              </span>
            </p>
          </div>
        </div>

        {/* Windows */}
        <div className="mb-4 flex justify-between">
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-1">
              Lunch
            </p>
            <p className="text-sm font-bold text-zinc-800">
              {vendor.lunchWindow}
            </p>
          </div>

          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-1">
              Dinner
            </p>
            <p className="text-sm font-bold text-zinc-800 text-right">
              {vendor.dinnerWindow}
            </p>
          </div>
        </div>

        <button className="mt-auto w-full bg-zinc-900 text-white font-black py-4 rounded-2xl hover:bg-amber-500 transition-all duration-300 uppercase tracking-widest text-xs">
          View Meal Plans
        </button>
      </div>
    </div>
  );
}

export default function Ex() {
  return (
    <div className="min-h-screen bg-zinc-50 antialiased overflow-x-hidden">
      {/* Google Fonts */}
      {/* <style>{`
        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; font-family: 'Material Symbols Outlined'; }
      `}</style> */}

      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-zinc-100 h-20 px-6 md:px-12 flex justify-between items-center shadow-sm">
        <div className="text-2xl font-black text-zinc-900 tracking-tighter">
          AhaarMitra
        </div>

        <div className="hidden md:flex items-center gap-8 font-bold tracking-tight">
          <a
            href="#"
            className="text-zinc-900 border-b-2 border-amber-500 pb-1"
          >
            Explore
          </a>
          <a
            href="#"
            className="text-zinc-400 hover:text-zinc-900 transition-colors"
          >
            Subscriptions
          </a>
          <a
            href="#"
            className="text-zinc-400 hover:text-zinc-900 transition-colors"
          >
            Orders
          </a>
          <a
            href="#"
            className="text-zinc-400 hover:text-zinc-900 transition-colors"
          >
            Support
          </a>
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <div className="hidden sm:flex items-center bg-zinc-100 rounded-full px-4 py-2 border border-zinc-200">
            <span className="material-symbols-outlined text-zinc-400 mr-2 text-xl">
              search
            </span>
            <input
              className="bg-transparent border-none focus:outline-none text-sm text-zinc-700 w-32 lg:w-48 placeholder:text-zinc-400"
              placeholder="Search..."
              type="text"
            />
          </div>
          <button className="text-zinc-400 hover:text-zinc-900 transition-all">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-zinc-200">
            <img
              alt="User Profile"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxDgB08kbHg4r0zUnel6GttGO-S_WADO-w39rZhmkQPeD79HasHrKA8oAcSftvGzC6oWsZv-3hHotK2rfgbjdQNkZqMa5FcXsDbZVFCEQoVtQ9a9zpeEfUxTW7eCHzfCeQaPfJ-PMY2ndmRCjf77328Z85PdHaoAjLcdRd3RFFqiwQAApTNkhBXUhMa453XBrKR-JtM3zUmkov1Nmp9X9J_3nspx3uueROaIDFzZhSepvqDnuU7HJlfrQcZiHVxo0o5fvUwKLJ2v7y"
            />
          </div>
        </div>
      </nav>

      {/* MAIN */}
      <main className="pt-32 pb-24 px-6 md:px-12 max-w-[1800px] mx-auto">
        {/* Vendor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-[1500px] mx-auto">
          {vendors.map((v) => (
            <VendorCard key={v.id} vendor={v} />
          ))}
        </div>

        {/* AhaarMitra Standard */}
        <div className="mt-32 grid grid-cols-12 gap-12 pt-24 border-t border-zinc-200">
          <div className="col-span-12 lg:col-span-8">
            <h2 className="text-3xl font-black tracking-tighter text-zinc-900 mb-12">
              The AhaarMitra Standard
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {standards.map((s) => (
                <div
                  key={s.title}
                  className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm group hover:border-amber-300 hover:shadow-md transition-all"
                >
                  <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center mb-6 text-amber-500 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-3xl">
                      {s.icon}
                    </span>
                  </div>
                  <h4 className="font-black text-lg mb-3 text-zinc-900">
                    {s.title}
                  </h4>
                  <p className="text-sm text-zinc-400 font-medium leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="col-span-12 lg:col-span-4 space-y-6">
            {/* AI Matchmaker */}
            <div className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-amber-100 rounded-full blur-3xl -mr-16 -mt-16 opacity-60" />
              <h3 className="text-xl font-black mb-3 text-zinc-900 relative">
                Personalized Discovery
              </h3>
              <p className="text-sm text-zinc-400 mb-8 font-medium relative leading-relaxed">
                Not sure which kitchen aligns with your palate? Our AI finds
                your perfect match.
              </p>
              <button className="w-full bg-zinc-900 text-white font-black py-4 rounded-2xl text-xs hover:bg-amber-500 transition-all flex items-center justify-center gap-2 uppercase tracking-widest">
                <span className="material-symbols-outlined text-lg">
                  auto_awesome
                </span>{" "}
                Start AI Matchmaker
              </button>
            </div>

            {/* Service Hub */}
            <div className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse inline-block" />
                Your Service Hub
              </h3>
              <div className="space-y-4">
                <div className="flex gap-4 p-4 bg-zinc-50 rounded-2xl border border-zinc-100">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-500 shrink-0">
                    <span className="material-symbols-outlined">
                      location_on
                    </span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900">
                      Indiranagar Sector 2
                    </h4>
                    <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest mt-1">
                      12 Vendors Live Now
                    </p>
                  </div>
                </div>
                <button className="w-full py-4 border border-zinc-200 rounded-2xl text-[10px] font-black uppercase tracking-widest text-zinc-500 hover:bg-zinc-50 hover:border-zinc-300 transition-colors">
                  Change Delivery Hub
                </button>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
