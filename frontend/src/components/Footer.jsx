import React from 'react'

const Footer = () => {
    return (
        <div className="w-full py-24 px-12 border-t border-white/5 bg-black mt-2" >
            <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-4 items-start gap-16">
                <div className="flex flex-col gap-8">
                    <div className="text-3xl font-black text-white tracking-tighter">AhaarMitra</div>
                    <p className="text-xs text-zinc-600 uppercase tracking-[0.2em] leading-loose max-w-xs">A premium digital hearth for modern nutrition. Empowering local kitchens, feeding urban futures.</p>
                </div>
                <div className="flex flex-col gap-6">
                    <h4 className="text-white text-xs font-black uppercase tracking-[0.3em] mb-4">Legal Framework</h4>
                    <a className="text-zinc-600 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest" href="#">Privacy &amp; Data Security</a>
                    <a className="text-zinc-600 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest" href="#">Editorial Guidelines</a>
                    <a className="text-zinc-600 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest" href="#">Vendor Terms</a>
                </div>
                <div className="flex flex-col gap-6">
                    <h4 className="text-white text-xs font-black uppercase tracking-[0.3em] mb-4">Ecosystem</h4>
                    <a className="text-zinc-600 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest" href="#">Kitchen Partnership</a>
                    <a className="text-zinc-600 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest" href="#">Investor Relations</a>
                    <a className="text-zinc-600 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest" href="#">Careers</a>
                </div>
                <div className="flex flex-col gap-8 items-end">
                    <div className="flex gap-8">
                        <span className="material-symbols-outlined text-zinc-600 hover:text-white cursor-pointer transition-colors text-2xl">language</span>
                        <span className="material-symbols-outlined text-zinc-600 hover:text-white cursor-pointer transition-colors text-2xl">public</span>
                    </div>
                    <div className="text-zinc-600 font-['Manrope'] text-[10px] font-black uppercase tracking-[0.2em] text-right">
                        © 2024 AhaarMitra Editorial. Global Nutrition Standards.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer