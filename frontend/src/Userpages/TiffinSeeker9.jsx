import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import useVendorStore from "../stores/vendor.store.js";
=======
import NavBar from "../components/NavBar.jsx";
import useVendorStore from "../stores/vendor.store.js";
const vendors = [
  {
    id: 1,
    name: "Shree Tiffin Services",
    // description:
    //   "Authentic home-style comfort crafted for the daily urban table using organic spices.",
    rating: "4.9",
    price: "₹99",
    subs: "1,248",
    lunch: "12:30 PM - 1:45 PM",
    dinner: "07:30 PM - 09:00 PM",
    lunchStatus: "On-Time",
    dinnerStatus: "Schedule",
    badges: [
      { label: "Top Rated", color: "bg-amber-500 text-black" },
      {
        label: "Pure Veg",
        color: "bg-zinc-800 text-white border border-zinc-600",
      },
    ],
    badgeBar: "bg-amber-500",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMBmIchnkIkoQGR77HPKNPe8Mi87AWVXdlxtSOo0_aqUzxSiao8g8wNuB6MLnue5hBiJqoCqYqYf_QwyAx8srHTmiWQLzDoSpBgjo79alSoDbXQZ1BxnJSwyVy8He4b-CbkpWuTgncU4YcUKtpcr-pZOyPo1hbVYNmqrmfArc3zZZuFPXAiqx6A5bpLRmZEtfGqskXEk_ur5KQcptvlknPuRIA86F4SmByElS4qXuo1rcrzcBC2SHCGJ1fTtaHQtFIc92CaW3sgiyX",
  },
  {
    id: 2,
    name: "Urban Nutri-Bowls",
    // description:
    //   "Macro-balanced, calorie-counted meals designed for high-performance lifestyles.",
    rating: "4.8",
    price: "₹149",
    subs: "842",
    lunch: "1:00 PM - 2:30 PM",
    dinner: "08:00 PM - 09:30 PM",
    lunchStatus: "On-Time",
    dinnerStatus: "Schedule",
    badges: [{ label: "Nutritionist Plus", color: "bg-blue-500 text-white" }],
    badgeBar: "bg-blue-500",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDK1tSZ-wBDTNCjK3U3eV-EuMtd2Cl4BRrx5feYW8Pfs8Bl576PyFGfiUmELvHa2DcAA0ASCPZH5rm6xkvI4VWEyveQtFW_HU-6WaVJhIecNa3nIEBWvPePZbqil-AqaPw_U4D03iHh6mX8U4qIdX2_-eQM0Yi_dfr2w8Pj6F662kJ14gBX9_W7bX1uqGyfRomUAqsC9fF9xIzr2nCfGeyS7-zawAHEF1FnS_ep-oVvA-kKbIodDQAMjaroBolce2E3nQzZ_aDltzmU",
  },
  {
    id: 3,
    name: "The Fit Kitchen",
    // description:
    //   "Premium non-vegetarian keto and high-protein bowls tailored for muscle gain.",
    rating: "4.7",
    price: "₹179",
    subs: "2,105",
    lunch: "12:00 PM - 1:30 PM",
    dinner: "07:00 PM - 08:30 PM",
    lunchStatus: "On-Time",
    dinnerStatus: "Schedule",
    badges: [{ label: "Fastest Delivery", color: "bg-green-600 text-white" }],
    badgeBar: "bg-green-600",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEzF78wTCqvV5dG62b6yhmGxmUuXcgVTIn7Q&s",
  },
  {
    id: 1,
    name: "Shree Tiffin Services",
    // description:
    //   "Authentic home-style comfort crafted for the daily urban table using organic spices.",
    rating: "4.9",
    price: "₹99",
    subs: "1,248",
    lunch: "12:30 PM - 1:45 PM",
    dinner: "07:30 PM - 09:00 PM",
    lunchStatus: "On-Time",
    dinnerStatus: "Schedule",
    badges: [
      { label: "Top Rated", color: "bg-amber-500 text-black" },
      {
        label: "Pure Veg",
        color: "bg-zinc-800 text-white border border-zinc-600",
      },
    ],
    badgeBar: "bg-amber-500",
    img: "https://content.jdmagicbox.com/v2/comp/bangalore/a9/080pxx80.xx80.240327200713.z7a9/catalogue/ulike-tiffin-service-homemade-north-indian-food-rt-nagar-bangalore-tiffin-services-1skkr97gae.jpg",
  },
  {
    id: 2,
    name: "Urban Nutri-Bowls",
    // description:
    //   "Macro-balanced, calorie-counted meals designed for high-performance lifestyles.",
    rating: "4.8",
    price: "₹149",
    subs: "842",
    lunch: "1:00 PM - 2:30 PM",
    dinner: "08:00 PM - 09:30 PM",
    lunchStatus: "On-Time",
    dinnerStatus: "Schedule",
    badges: [{ label: "Nutritionist Plus", color: "bg-blue-500 text-white" }],
    badgeBar: "bg-blue-500",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgdb80F71pp86M8wG07Gimw8nEpq_K_JXHKw&s",
  },
  {
    id: 3,
    name: "The Fit Kitchen",
    // description:
    //   "Premium non-vegetarian keto and high-protein bowls tailored for muscle gain.",
    rating: "4.7",
    price: "₹179",
    subs: "2,105",
    lunch: "12:00 PM - 1:30 PM",
    dinner: "07:00 PM - 08:30 PM",
    lunchStatus: "On-Time",
    dinnerStatus: "Schedule",
    badges: [{ label: "Fastest Delivery", color: "bg-green-600 text-white" }],
    badgeBar: "bg-green-600",
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
>>>>>>> be35023d6c371b5725d4ef7ae129dbab5c4eca60

function VendorCard({ vendor }) {
  const [liked, setLiked] = useState(false);

  const business = vendor.business || {};

  // ⭐ Stable rating
  const rating = (
    3.5 + (parseInt(vendor._id.slice(-2), 16) % 15) / 10
  ).toFixed(1);

  // 💰 Stable price (₹55–₹200)
  const price =
    55 + (parseInt(vendor._id.slice(-2), 16) % 146);

  return (
    <div className="bg-white rounded-[2rem] overflow-hidden flex flex-col border border-stone-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group w-105">
      
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={
            business.image?.url ||
            "https://via.placeholder.com/400"
          }
          alt={business.businessName || "Vendor"}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

        {/* ⭐ Rating */}
        <div className="absolute top-4 left-4 flex items-center gap-1 bg-white px-2 py-1 rounded-lg shadow border border-stone-200">
          <span
            className="material-symbols-outlined text-amber-500 text-sm"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            star
          </span>
          <span className="text-xs font-bold text-stone-900">
            {rating}
          </span>
        </div>

        {/* ❤️ Favourite */}
        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md border border-stone-200 flex items-center justify-center hover:bg-white transition-all shadow-sm"
        >
          <span
            className={`material-symbols-outlined text-xl ${
              liked ? "text-red-500" : "text-stone-400"
            }`}
          >
            favorite
          </span>
        </button>
      </div>

      {/* Content */}
      <div className="p-6 pt-4 flex flex-col flex-1">
        
        {/* Name */}
        <h3 className="text-xl font-black text-stone-900 leading-tight mb-4">
          {business.businessName || vendor.name}
        </h3>

        {/* Address + Price (FIXED ALIGNMENT) */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3 mb-4">

          {/* Address */}
          <div className="flex-1">
            <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400">
              Address
            </p>
            <p className="text-stone-600 text-sm font-medium">
              {business.address || "No address"}
            </p>
          </div>

          {/* Price */}
          <div className="lg:text-right">
            <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400">
              Starting Price
            </p>
            <p className="text-xl font-black text-stone-900">
              ₹{price}
              <span className="text-xs text-stone-400 ml-1">/ meal</span>
            </p>
          </div>

        </div>

        {/* Type */}
        <p className="text-xs font-bold uppercase text-amber-500 mb-4">
          {business.type || "General"}
        </p>

        {/* Button */}
        <Link to={`/vendor/${vendor._id}`}>
          <button className="mt-auto w-full bg-stone-900 text-white font-black py-4 rounded-2xl hover:bg-amber-500 transition-all uppercase tracking-widest text-xs">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}

const TiffinSeeker9 = () => {
  const { vendor, getAllVendors, loading } = useVendorStore();

  useEffect(() => {
    getAllVendors();
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 px-6 md:px-12">

      {/* Header */}
      <div className="pt-24 pb-10">
        <h1 className="text-4xl font-black mb-4">
          Daily Meal Vendors
        </h1>
        <p className="text-stone-500">
          Discover the best home kitchens near you
        </p>
      </div>

      {/* Vendor List */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

        {loading ? (
          <p>Loading vendors...</p>
        ) : Array.isArray(vendor) && vendor.length > 0 ? (
          vendor.map((v) => (
            <VendorCard key={v._id} vendor={v} />
          ))
        ) : (
          <p>No vendors found</p>
        )}

      </div>
    </div>
  );
};

export default TiffinSeeker9;