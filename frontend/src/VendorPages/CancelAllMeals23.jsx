import React from "react";
import { Link } from "react-router-dom";

export default function CancelAllMeals23() {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-extrabold uppercase tracking-tight text-gray-900">
              Cancel <span className="text-blue-600">All Meals</span>
            </h2>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">
              For <span className="text-gray-700">December 24, 2024</span>
            </p>
          </div>

          {/* Close */}
          <Link to="/v7">
            <button className="text-gray-400 hover:text-gray-700 transition">
              ✕
            </button>
          </Link>
        </div>

        {/* Body */}
        <div className="p-10 flex flex-col items-center text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center border border-red-200">
            <span className="text-red-500 text-3xl">⚠️</span>
          </div>

          <p className="text-xl font-extrabold text-red-600 uppercase leading-tight max-w-xs">
            Warning: This action is irreversible and cannot be undone.
          </p>

          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
            All scheduled meal deliveries for this date will be terminated.
          </p>
        </div>

        {/* Footer */}
        <div className="p-6 bg-gray-50 flex gap-4">
          <Link to="/v7" className="flex-1">
            <button className="w-full py-3 rounded-xl border border-gray-300 text-[11px] font-extrabold uppercase tracking-widest text-gray-600 hover:bg-gray-100 transition">
              Keep Meals
            </button>
          </Link>

          <button className="flex-[2] py-3 rounded-xl bg-red-600 text-white text-[11px] font-extrabold uppercase tracking-widest hover:bg-red-500 shadow-lg transition">
            Confirm Cancellation
          </button>
        </div>
      </div>
    </div>
  );
}
