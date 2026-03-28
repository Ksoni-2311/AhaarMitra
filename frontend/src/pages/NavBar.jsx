import React from 'react'

const NavBar = () => {
  return (
    <div>
      <nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-white/10 shadow-2xl h-20 px-12 flex justify-between items-center w-full mx-auto">
        <div className="text-2xl font-black text-white tracking-tighter">AhaarMitra</div>
        <div className="hidden md:flex items-center gap-8 font-['Manrope'] font-bold tracking-tight">
          <a className="text-white border-b-2 border-white pb-1" href="#">Explore</a>
          <a className="text-white/60 hover:text-white transition-colors" href="#">Subscriptions</a>
          <a className="text-white/60 hover:text-white transition-colors" href="#">Orders</a>
          <a className="text-white/60 hover:text-white transition-colors" href="#">Support</a>
        </div>
        <div className="flex items-center gap-6">
          <div className="relative flex items-center bg-white/5 rounded-full px-4 py-2 border border-white/10">
            <span className="material-symbols-outlined text-white/50 mr-2">search</span>
            <input className="bg-transparent border-none focus:ring-0 text-sm text-white w-48 placeholder:text-white/30"
              placeholder="Search cuisines..." type="text" />
          </div>
          <button className="text-white/60 hover:text-white transition-all duration-300">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="text-white/60 hover:text-white transition-all duration-300">
            <span className="material-symbols-outlined">shopping_cart</span>
          </button>
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/20">
            <img alt="User Profile"
              data-alt="professional headshot of a person with friendly expression, clean lighting, minimalist background"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxDgB08kbHg4r0zUnel6GttGO-S_WADO-w39rZhmkQPeD79HasHrKA8oAcSftvGzC6oWsZv-3hHotK2rfgbjdQNkZqMa5FcXsDbZVFCEQoVtQ9a9zpeEfUxTW7eCHzfCeQaPfJ-PMY2ndmRCjf77328Z85PdHaoAjLcdRd3RFFqiwQAApTNkhBXUhMa453XBrKR-JtM3zUmkov1Nmp9X9J_3nspx3uueROaIDFzZhSepvqDnuU7HJlfrQcZiHVxo0o5fvUwKLJ2v7y" />
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar