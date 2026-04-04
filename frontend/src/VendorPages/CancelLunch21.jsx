import React from "react";
import { useNavigate } from "react-router-dom";

const CancelLunch21 = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 flex items-center justify-center p-6">

      {/* CARD */}
      <div className="w-full max-w-lg bg-white border border-gray-200 rounded-3xl shadow-2xl overflow-hidden">

        {/* HEADER */}
        <div className="p-8 border-b border-gray-100 flex flex-col items-center text-center">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-red-100 mb-5">
            <span className="text-red-600 text-3xl font-bold">!</span>
          </div>

          <h2 className="text-2xl font-black uppercase tracking-tight text-gray-900">
            Confirm <span className="text-red-600">Lunch</span> Cancellation
          </h2>

          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-red-500 mt-3">
            This action cannot be undone.
          </p>
        </div>

        {/* BODY */}
        <div className="p-10 text-center">
          <p className="text-gray-500 text-sm leading-relaxed max-w-sm mx-auto">
            Are you sure you want to cancel this specific meal? The{" "}
            <span className="text-gray-900 font-semibold">Lunch</span> schedule
            will be permanently removed for this day and cannot be recovered.
          </p>
        </div>

        {/* FOOTER */}
        <div className="p-6 bg-gray-50 flex gap-4">

          {/* GO BACK */}
          <button
            onClick={() => navigate(-1)}
            className="flex-1 py-4 px-6 rounded-2xl border border-gray-300 text-[11px] font-black uppercase tracking-widest text-gray-500 hover:bg-gray-100 hover:text-gray-800 transition-all"
          >
            Go Back
          </button>

          {/* CANCEL */}
          <button
            onClick={() => {
              // TODO: cancel logic
              navigate("/orders");
            }}
            className="flex-[2] py-4 px-6 rounded-2xl bg-red-600 text-white text-[11px] font-black uppercase tracking-widest hover:bg-red-500 shadow-lg transition-all"
          >
            Cancel Lunch
          </button>
        </div>
      </div>
    </div>
  );
};

export default CancelLunch21;