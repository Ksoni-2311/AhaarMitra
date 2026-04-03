import React from "react";
import { useNavigate } from "react-router-dom";

const AddTiffin22 = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 flex items-center justify-center p-6 overflow-y-auto">

      {/* CARD */}
      <div className="w-full max-w-xl bg-white border border-gray-200 rounded-3xl shadow-2xl flex flex-col">

        {/* HEADER */}
        <div className="p-8 border-b border-gray-100 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-black uppercase tracking-tight text-gray-900">
              Add New <span className="text-blue-600">Tiffin Variant</span>
            </h2>
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-1">
              Enter details for your tiffin offering
            </p>
          </div>

          <button
            onClick={() => navigate("/v7")}
            className="text-gray-400 hover:text-black text-xl"
          >
            ✕
          </button>
        </div>

        {/* BODY */}
        <div className="p-8 space-y-6">

          {/* MEAL NAME */}
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
              Meal Name
            </label>
            <input
              autoFocus
              type="text"
              placeholder="e.g., North Indian Thali"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none placeholder:text-gray-300"
            />
          </div>

          {/* MENU DESCRIPTION */}
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
              Menu Description
            </label>
            <input
              type="text"
              placeholder="e.g., Dal, Paneer, 2 Roti, Rice, Salad"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none placeholder:text-gray-300"
            />
          </div>

          {/* PHOTO UPLOAD */}
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
              Meal Photo
            </label>

            <div className="relative group cursor-pointer">
              <div className="w-full h-40 border-2 border-dashed border-gray-300 rounded-2xl bg-gray-50 flex flex-col items-center justify-center gap-3 hover:border-blue-400 hover:bg-blue-50 transition-all">

                <span className="text-3xl text-gray-400 group-hover:text-blue-500">
                  📷
                </span>

                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 group-hover:text-blue-500">
                  Upload Meal Photo
                </span>

                <input
                  type="file"
                  accept="image/*"
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* PRICING */}
          <div className="grid grid-cols-3 gap-4">

            {/* DAILY */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                Daily Price
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                  ₹
                </span>
                <input
                  type="number"
                  placeholder="0.00"
                  className="w-full border border-gray-300 rounded-xl pl-7 pr-4 py-3 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>

            {/* WEEKLY */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                Weekly Price
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                  ₹
                </span>
                <input
                  type="number"
                  placeholder="0.00"
                  className="w-full border border-gray-300 rounded-xl pl-7 pr-4 py-3 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>

            {/* MONTHLY */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                Monthly Price
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                  ₹
                </span>
                <input
                  type="number"
                  placeholder="0.00"
                  className="w-full border border-gray-300 rounded-xl pl-7 pr-4 py-3 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>

          </div>
        </div>

        {/* FOOTER */}
        <div className="p-6 bg-gray-50 flex gap-4">

          <button
            onClick={() => navigate("/v7")}
            className="flex-1 py-4 px-6 rounded-2xl border border-gray-300 text-[11px] font-black uppercase tracking-widest text-gray-500 hover:bg-gray-100 hover:text-gray-800 transition-all"
          >
            Cancel
          </button>

          <button className="flex-[2] py-4 px-6 rounded-2xl bg-blue-600 text-white text-[11px] font-black uppercase tracking-widest hover:bg-blue-500 shadow-lg transition-all">
            Create Variant
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTiffin22;