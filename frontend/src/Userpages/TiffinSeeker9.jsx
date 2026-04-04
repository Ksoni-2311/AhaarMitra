import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useVendorStore from "../stores/vendor.store.js";

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