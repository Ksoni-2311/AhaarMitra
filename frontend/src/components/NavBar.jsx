import React from "react";
import { Link, useLocation } from "react-router-dom";
import ahaarmitraLogo from "../../assets/ahaarMitraLogo.svg";
const NavBar = () => {
  const location = useLocation();
  const navItems = [
    { name: "Explore", path: "/explore" },
    { name: "Subscriptions", path: "/subscription" },
    { name: "Orders", path: "/orders" },
    { name: "Support", path: "/support" },
  ];
  return (
    <div className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 h-16 px-50 md:px-12 flex justify-between items-center">
      <div className="lg:w-56 md:w-36 w-28">
        <img src={ahaarmitraLogo} alt="" />
      </div>

      {/* <div className="hidden md:flex items-center gap-8">
        <Link to={"/"} className="text-black transition">
          Explore
        </Link>
        <Link to={"/Subscription"} className="text-black transition">
          Subscriptions
        </Link>
        <Link to={"/Orders"} className="text-black transition">
          Orders
        </Link>
        <Link to={"/Support"} className="text-black transition">
          Support
        </Link>
      </div> */}

      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <Link key={item.name} to={item.path} className="relative group">
              {/* Text */}
              <span
                className={`transition-all duration-300 ${
                  isActive
                    ? "text-black font-semibold"
                    : "text-gray-500 group-hover:text-black"
                }`}
              >
                {item.name}
              </span>

              {/* Underline */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-black w-full origin-center transform transition-transform duration-300 ease-in-out ${
                  isActive ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </Link>
          );
        })}
      </div>

      <div className="flex items-center gap-4 md:gap-6">
        <div className="hidden sm:flex items-center bg-gray-100 rounded-full px-4 py-2 border">
          <span className="material-symbols-outlined text-gray-400 mr-2 text-xl">
            search
          </span>
          <input
            className="bg-transparent outline-none text-sm w-32 lg:w-48 placeholder:text-gray-400"
            placeholder="Search kitchen..."
            type="text"
          />
        </div>

        <button className="text-gray-500 hover:text-black">
          <span className="material-symbols-outlined">notifications</span>
        </button>

        <Link to="/Account">
          <div className="w-10 h-10 rounded-full overflow-hidden border cursor-pointer">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxDgB08kbHg4r0zUnel6GttGO-S_WADO-w39rZhmkQPeD79HasHrKA8oAcSftvGzC6oWsZv-3hHotK2rfgbjdQNkZqMa5FcXsDbZVFCEQoVtQ9a9zpeEfUxTW7eCHzfCeQaPfJ-PMY2ndmRCjf77328Z85PdHaoAjLcdRd3RFFqiwQAApTNkhBXUhMa453XBrKR-JtM3zUmkov1Nmp9X9J_3nspx3uueROaIDFzZhSepvqDnuU7HJlfrQcZiHVxo0o5fvUwKLJ2v7y"
              alt="User Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
