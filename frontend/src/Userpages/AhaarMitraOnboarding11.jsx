import { Link } from "react-router-dom";

export default function AhaarMitraOnboarding11() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        rel="stylesheet"
      />

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.6s cubic-bezier(0.165,0.84,0.44,1) both; }
        .fade-up-1 { animation-delay: 0.05s; }
        .fade-up-2 { animation-delay: 0.15s; }
        .fade-up-3 { animation-delay: 0.28s; }
        .fade-up-4 { animation-delay: 0.38s; }
        .fade-up-5 { animation-delay: 0.48s; }

        .bg-dot {
          background-image: radial-gradient(circle at 1.5px 1.5px, rgba(0,0,0,0.06) 1px, transparent 0);
          background-size: 36px 36px;
        }

        .role-card {
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        .role-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 60px -12px rgba(0,0,0,0.12);
        }

        .seeker-card:hover { border-color: rgba(245,158,11,0.5); }
        .seeker-card:hover .card-icon-ring { border-color: rgba(245,158,11,0.4); background-color: rgba(254,243,199,0.6); }
        .seeker-card:hover .card-icon { color: #d97706; }
        .seeker-card:hover .card-btn { background-color: #f59e0b; color: white; }

        .provider-card:hover { border-color: rgba(59,130,246,0.5); }
        .provider-card:hover .card-icon-ring { border-color: rgba(59,130,246,0.4); background-color: rgba(219,234,254,0.6); }
        .provider-card:hover .card-icon { color: #2563eb; }
        .provider-card:hover .card-btn { background-color: #2563eb; color: white; }

        .signin-link:hover .signin-label { color: #f59e0b; border-color: #f59e0b; }
        .signin-link:hover .signin-sub  { color: #78716c; }
      `}</style>

      <div
        className="min-h-screen flex flex-col bg-stone-50 bg-dot text-stone-900 antialiased overflow-x-hidden"
        style={{ fontFamily: "'Manrope', sans-serif" }}
      >
        {/* ── HEADER ─────────────────────────────────────────── */}
        <header className="w-full pt-12 pb-8 px-6 text-center">
          {/* Wordmark */}
          <div className="inline-block mb-8 fade-up fade-up-1">
            <div className="text-3xl font-black text-stone-900 tracking-tighter uppercase">
              AhaarMitra
            </div>
            <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-amber-500 to-transparent mt-1 rounded-full" />
          </div>

          {/* Hero headline */}
          <div className="max-w-4xl mx-auto fade-up fade-up-2">
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-stone-900 mb-6 leading-tight">
              How do you want to experience{" "}
              <span className="text-amber-500">AhaarMitra?</span>
            </h1>
            <p className="text-stone-400 text-sm font-bold uppercase tracking-[0.3em]">
              Choose your role to get started
            </p>
          </div>
        </header>

        {/* ── MAIN ───────────────────────────────────────────── */}
        <main className="flex-grow flex flex-col items-center justify-center px-6 py-12">
          <div className="max-w-6xl w-full">

            {/* Role cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 fade-up fade-up-3">

              {/* ── SEEKER CARD ── */}
              <div className="role-card seeker-card group relative overflow-hidden bg-white border-2 border-stone-200 rounded-[2.5rem] p-10 flex flex-col items-center text-center cursor-pointer shadow-sm">
                {/* Hover glow overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-amber-50/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem]" />

                {/* Icon */}
                <div className="card-icon-ring relative w-24 h-24 rounded-full bg-stone-100 flex items-center justify-center mb-8 border-2 border-stone-200 transition-all duration-300">
                  <span className="card-icon material-symbols-outlined text-5xl text-stone-500 transition-colors duration-300">
                    restaurant
                  </span>
                </div>

                {/* Title */}
                <h2 className="relative text-3xl font-black mb-4 text-stone-900">Tiffin Seeker</h2>

                {/* Description */}
                <p className="relative text-stone-500 mb-10 leading-relaxed font-medium">
                  Enjoy healthy, home-cooked meals delivered to multiple locations like your university or home. Subscribe to local kitchens and manage your daily diet with ease.
                </p>

                {/* Feature list */}
                <div className="relative space-y-3 w-full mb-10">
                  {["Multi-address delivery support", "Personalized meal preferences"].map((feat) => (
                    <div
                      key={feat}
                      className="flex items-center gap-3 text-sm font-bold text-stone-700 bg-stone-50 px-6 py-3 rounded-2xl border border-stone-200"
                    >
                      <span
                        className="material-symbols-outlined text-amber-500 text-lg"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        check_circle
                      </span>
                      {feat}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  to="/13"
                  className="card-btn relative mt-auto w-full bg-black hover:bg-orange-600 text-white font-black py-5 rounded-2xl transition-all duration-300 uppercase tracking-widest text-sm text-center block"
                >
                  SELECT AS SEEKER
                </Link>
              </div>

              {/* ── PROVIDER CARD ── */}
              <div className="role-card provider-card group relative overflow-hidden bg-white border-2 border-stone-200 rounded-[2.5rem] p-10 flex flex-col items-center text-center cursor-pointer shadow-sm">
                {/* Hover glow overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-blue-50/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem]" />

                {/* Icon */}
                <div className="card-icon-ring relative w-24 h-24 rounded-full bg-stone-100 flex items-center justify-center mb-8 border-2 border-stone-200 transition-all duration-300">
                  <span className="card-icon material-symbols-outlined text-5xl text-stone-500 transition-colors duration-300">
                    storefront
                  </span>
                </div>

                {/* Title */}
                <h2 className="relative text-3xl font-black mb-4 text-stone-900">Tiffin Provider</h2>

                {/* Description */}
                <p className="relative text-stone-500 mb-10 leading-relaxed font-medium">
                  Transform your kitchen into a business. Reach students and professionals in your area, manage subscribers, and grow your culinary brand.
                </p>

                {/* Feature list */}
                <div className="relative space-y-3 w-full mb-10">
                  {["Advanced order management", "Dynamic delivery zoning"].map((feat) => (
                    <div
                      key={feat}
                      className="flex items-center gap-3 text-sm font-bold text-stone-700 bg-stone-50 px-6 py-3 rounded-2xl border border-stone-200"
                    >
                      <span
                        className="material-symbols-outlined text-blue-500 text-lg"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        check_circle
                      </span>
                      {feat}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button className="card-btn relative mt-auto w-full bg-stone-900 text-white font-black py-5 rounded-2xl transition-all duration-300 uppercase tracking-widest text-sm">
                  Register as Vendor
                </button>
              </div>
            </div>

            {/* ── Sign-in link ── */}
            <div className="text-center mt-16 fade-up fade-up-4">
              <a href="#" className="signin-link inline-flex flex-col items-center group">
                <span className="signin-sub text-stone-400 transition-colors uppercase font-bold tracking-[0.2em] text-xs mb-2">
                  Already have an account?
                </span>
                <span className="signin-label text-stone-900 text-lg font-black transition-colors border-b-2 border-stone-300 pb-1">
                  Sign In to your Dashboard
                </span>
              </a>
            </div>

          </div>
        </main>

        {/* ── FOOTER ─────────────────────────────────────────── */}
        <footer className="w-full py-12 px-6 border-t border-stone-200 bg-white fade-up fade-up-5">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-8">
              {["Privacy Policy", "Terms of Service", "Contact Support"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-stone-400 hover:text-stone-900 transition-colors text-[10px] font-bold uppercase tracking-widest"
                >
                  {link}
                </a>
              ))}
            </div>
            <div className="text-stone-400 text-[10px] font-medium uppercase tracking-[0.2em]">
              © 2024 AhaarMitra Digital. All rights reserved.
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}
