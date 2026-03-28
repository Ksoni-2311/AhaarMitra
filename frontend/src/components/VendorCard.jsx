import React from 'react'

const VendorCard = () => {
    return (<a className="vendor-card group flex flex-col surface-container border border-white/10 rounded-2xl overflow-hidden hover:border-amber-600/50 transition-all duration-500 shadow-2xl" href="#">
        <div className="relative h-64 overflow-hidden">
            <img alt="Shree Tiffin" className="w-full h-full object-cover hero-zoom transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMBmIchnkIkoQGR77HPKNPe8Mi87AWVXdlxtSOo0_aqUzxSiao8g8wNuB6MLnue5hBiJqoCqYqYf_QwyAx8srHTmiWQLzDoSpBgjo79alSoDbXQZ1BxnJSwyVy8He4b-CbkpWuTgncU4YcUKtpcr-pZOyPo1hbVYNmqrmfArc3zZZuFPXAiqx6A5bpLRmZEtfGqskXEk_ur5KQcptvlknPuRIA86F4SmByElS4qXuo1rcrzcBC2SHCGJ1fTtaHQtFIc92CaW3sgiyX" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 flex gap-2">
                <span className="bg-green-600 text-white px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider">Top Rated</span>
                <span className="bg-amber-600 text-white px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider">Offer</span>
            </div>
        </div>
        <div className="p-6 flex-1 flex flex-col">
            <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-black tracking-tight text-black group-hover:text-amber-500 transition-colors">Shree Tiffin Services</h3>
                <div className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded border border-white/10">
                    <span className=" text-amber-500 text-xs" style={{ fontVariationSettings: "FILL' 1" }}>star</span>
                    <span className="text-xs font-bold">4.5</span>
                </div>
            </div>
            <p className="text-sm text-black font-medium mb-6 line-clamp-1">Authentic home-style comfort for daily table.</p>
            <div className="mt-auto pt-6 border-t border-white/5 grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold text-black tracking-widest mb-1">Dietary</span>
                    <span className="text-xs font-bold text-black flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span> Pure Veg
                    </span>
                </div>
                <div className="flex flex-col text-right">
                    <span className="text-[10px] uppercase font-bold text-black tracking-widest mb-1">Price Range</span>
                    <span className="text-sm font-black text-amber-500">₹2700 - ₹3500</span>
                </div>
            </div>
        </div>
    </a>
        // <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

        // </div>
    )
}

export default VendorCard