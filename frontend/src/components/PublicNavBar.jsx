import React from "react";
import ahaarmitraLogo from "../../assets/ahaarMitraLogo.svg";

const PublicNavBar = () => {
  return (
    <div className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 h-16 px-6 md:px-12 flex items-center">
      {/* 🔹 LEFT: LOGO */}
      <div className="lg:w-60 md:w-40 w-32">
        <img src={ahaarmitraLogo} alt="AhaarMitra Logo" />
      </div>

      {/* 🔹 CENTER: SEARCH BAR */}
      <div className="flex-1 flex justify-center">
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 border border-gray-200 w-full max-w-[550px]">
          <span className="material-symbols-outlined text-gray-400 mr-2 text-xl">
            search
          </span>
          <input
            className="bg-transparent outline-none text-sm w-full placeholder:text-gray-400"
            placeholder="Search kitchens, meals..."
            type="text"
          />
        </div>
      </div>
      {/* 🔹 RIGHT: AUTH BUTTONS */}
      <div className="lg:w-60 md:w-40 w-32 flex items-center justify-end gap-12">
        {/* Login */}
        <button className="text-sm font-semibold text-gray-600 hover:text-black transition">
          Login
        </button>

        {/* Sign Up */}
        <button className="text-sm font-semibold bg-black text-white px-4 py-2 rounded-full hover:bg-amber-500 transition-all">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default PublicNavBar;
