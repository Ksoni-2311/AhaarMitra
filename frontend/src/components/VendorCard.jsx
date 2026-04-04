import React from "react";
import { Star } from "lucide-react";

const VendorCard = () => {
  return (
    <div className="w-full sm:w-[260px] md:w-[300px] bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      
      {/* IMAGE */}
      <div className="relative h-40 w-full">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUuO_ub5HAUesE2mFjBnHLj2Flh0phmb2vXA&s"
          alt="Auntie's Kitchen"
          className="w-full h-full object-cover"
        />

        {/* Rating */}
        <div className="absolute top-3 right-3 flex items-center gap-1 bg-white px-2 py-1 rounded-full shadow text-xs font-bold">
          <Star className="w-3 h-3 text-orange-500 fill-orange-500" />
          4.8
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-4 flex flex-col gap-3">
        
        {/* Title + Tag */}
        <div className="flex justify-between items-center">
          <h3 className="text-base font-bold text-gray-900">
            Auntie's Kitchen
          </h3>
          <span className="text-[10px] font-bold bg-orange-100 text-orange-500 px-2 py-0.5 rounded-full">
            PURE VEG
          </span>
        </div>

        {/* Description */}
        <p className="text-xs text-gray-500 leading-relaxed">
          Specializes in North Indian comfort food with minimal spices and lots of love.
        </p>

        {/* Divider */}
        <div className="border-t border-gray-100 pt-3 flex items-center justify-between">
          
          {/* Price */}
          <div>
            <p className="text-[10px] text-gray-400 font-bold uppercase">
              Starts at
            </p>
            <p className="text-lg font-black text-gray-900">
              ₹120<span className="text-xs font-medium text-gray-500">/day</span>
            </p>
          </div>

          {/* Button */}
          <button className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold px-4 py-2 rounded-full transition">
            View Plans
          </button>

        </div>
      </div>
    </div>
  );
};

export default VendorCard;