import React from 'react'
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
       <div className="fixed top-0 w-full z-50 bg-white border-b border-gray-200 h-16 px-6 md:px-12 flex justify-between items-center">
        <div className="text-2xl font-black tracking-tighter">AhaarMitra</div>

        <div className="hidden md:flex items-center gap-8 font-bold">
          <a className="text-black transition"><Link to={'/'}>Explore
          </Link>   </a>
          <a className="text-black transition"><Link to={'/Subscription'}>Subscriptions
          </Link></a>
          <a className="text-black transition">Orders</a>
          <a className="text-black transition">Support</a>
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <div className="hidden sm:flex items-center bg-gray-100 rounded-full px-4 py-2 border">
            <span className="material-symbols-outlined text-gray-400 mr-2 text-xl">search</span>
            <input
              className="bg-transparent outline-none text-sm w-32 lg:w-48 placeholder:text-gray-400"
              placeholder="Search kitchen..."
              type="text"
            />
          </div>

          <button className="text-gray-500 hover:text-black">
            <span className="material-symbols-outlined">notifications</span>
          </button>

          <div className="w-10 h-10 rounded-full overflow-hidden border">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxDgB08kbHg4r0zUnel6GttGO-S_WADO-w39rZhmkQPeD79HasHrKA8oAcSftvGzC6oWsZv-3hHotK2rfgbjdQNkZqMa5FcXsDbZVFCEQoVtQ9a9zpeEfUxTW7eCHzfCeQaPfJ-PMY2ndmRCjf77328Z85PdHaoAjLcdRd3RFFqiwQAApTNkhBXUhMa453XBrKR-JtM3zUmkov1Nmp9X9J_3nspx3uueROaIDFzZhSepvqDnuU7HJlfrQcZiHVxo0o5fvUwKLJ2v7y"
              alt="User Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
  )
}

export default NavBar