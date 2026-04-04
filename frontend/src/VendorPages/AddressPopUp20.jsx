import React from "react";
import { Link } from "react-router-dom";
import { saveServiceConfig } from "../services/vendorServiceConfigApi";


const AddressPopUp20 = () => {
  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-md flex items-center justify-center p-6 z-50">
      
      {/* Card */}
      <div className="w-full max-w-lg bg-white border border-gray-200 rounded-3xl shadow-xl overflow-hidden">

        {/* Header */}
        <div className="p-8 border-b border-gray-200 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-black tracking-tight text-gray-900 uppercase">
              Add New <span className="text-blue-600">Service Hub</span>
            </h2>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">
              Enter the complete physical address for your operational zone
            </p>
          </div>
            <Link to="/v7">
              <button className="text-gray-400 hover:text-gray-700 transition">
                ✕
              </button>
            </Link>
        </div>

        {/* Form */}
        <div className="p-8 space-y-6">

          {/* Street */}
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
              Street Address
            </label>
            <input
              type="text"
              placeholder="e.g., H-Block, Sector 63"
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-sm text-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-gray-300"
            />
          </div>

          {/* City */}
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
              City
            </label>
            <input
              type="text"
              placeholder="e.g., Noida"
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-sm text-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-gray-300"
            />
          </div>

          {/* State + Postal */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
                State/Province
              </label>
              <input
                type="text"
                placeholder="e.g., UP"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-sm text-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-gray-300"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
                Postal Code
              </label>
              <input
                type="text"
                placeholder="e.g., 201301"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-sm text-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-gray-300"
              />
            </div>
          </div>

          {/* Country */}
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
              Country
            </label>
            <input
              type="text"
              placeholder="e.g., India"
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-sm text-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-gray-300"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="p-8 bg-gray-50 flex gap-4">
            <Link to="/v7">
              <button className="flex-1 py-4 px-6 rounded-2xl border border-gray-300 text-[11px] font-black uppercase tracking-widest text-gray-500 hover:bg-gray-100 hover:text-gray-800 transition-all">
                Cancel
              </button>
            </Link>
            <button
            onClick={handlechange}
            className="flex-[2] py-4 px-6 rounded-2xl bg-blue-600 text-white text-[11px] font-black uppercase tracking-widest hover:bg-blue-500 shadow-lg transition-all border border-blue-500/30">
              Add Hub
            </button>
        </div>

      </div>
    </div>
  );
};

export default AddressPopUp20;