import { Link, useNavigate } from "react-router-dom";
import AhaarMitraLogo from "../../assets/AhaarMitraLogo.png";
import { useState } from "react";

export default function AhaarMitraOnboarding11() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSeekerSelect = async () => {
  try {
    setLoading(true);

    const res = await fetch("http://localhost:8080/api/user/role", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log("ROLE STATUS:", res.status);
    console.log("ROLE RESPONSE:", data);

    if (!res.ok) {
      throw new Error(data.error || data.message || "Role selection failed");
    }

    localStorage.setItem("token", data.token);
    localStorage.setItem("registrationStep", data.step);

    navigate("/13");
  } catch (err) {
    console.log("ROLE ERROR:", err);
    alert(err.message || "Something went wrong while selecting role");
  } finally {
    setLoading(false);
  }
};

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
        <header className="w-full px-6 text-center">
          <div className="inline-block mb-4 fade-up fade-up-1">
            <div className="text-3xl font-black text-stone-900 tracking-tighter uppercase">
              <img className="h-30" src={AhaarMitraLogo} alt="AHAARMITRA" />
            </div>
            <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-amber-500 to-transparent rounded-full" />
          </div>
        </header>

        <main className="flex flex-col items-center px-6 md:px-12 fade-up fade-up-3">
          <div className="max-w-4xl w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 fade-up fade-up-3">
              <div className="role-card seeker-card group relative overflow-hidden bg-white border-2 border-stone-200 rounded-[2.5rem] p-10 flex flex-col items-center text-center cursor-pointer shadow-sm">
                <div className="absolute inset-0 bg-gradient-to-b from-amber-50/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem]" />

                <div className="card-icon-ring relative w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center mb-2 border-2 border-stone-200 transition-all duration-300">
                  <span className="card-icon material-symbols-outlined text-5xl text-stone-500 transition-colors duration-300">
                    restaurant
                  </span>
                </div>

                <h2 className="relative text-3xl font-black mb-4 text-stone-900">
                  Tiffin Seeker
                </h2>

                <p className="relative text-stone-500 mb-10 leading-relaxed font-medium">
                  Enjoy healthy, home-cooked meals delivered to multiple locations like your university or home. Subscribe to local kitchens and manage your daily diet with ease.
                </p>

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

                <button
                  onClick={handleSeekerSelect}
                  disabled={loading}
                  className="card-btn relative mt-auto w-full bg-black hover:bg-orange-600 text-white font-black py-5 rounded-2xl transition-all duration-300 uppercase tracking-widest text-sm disabled:opacity-60"
                >
                  {loading ? "Please wait..." : "SELECT AS SEEKER"}
                </button>
              </div>

              <div className="role-card provider-card group relative overflow-hidden bg-white border-2 border-stone-200 rounded-[2.5rem] p-10 flex flex-col items-center text-center cursor-pointer shadow-sm">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-50/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem]" />

                <div className="card-icon-ring relative w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center mb-2 border-2 border-stone-200 transition-all duration-300">
                  <span className="card-icon material-symbols-outlined text-5xl text-stone-500 transition-colors duration-300">
                    storefront
                  </span>
                </div>

                <h2 className="relative text-3xl font-black mb-4 text-stone-900">
                  Tiffin Provider
                </h2>

                <p className="relative text-stone-500 mb-10 leading-relaxed font-medium">
                  Transform your kitchen into a business. Reach students and professionals in your area, manage subscribers, and grow your culinary brand.
                </p>

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

                <Link
                  to="/v1"
                  className="card-btn relative mt-auto w-full bg-stone-900 hover:bg-blue-600 text-white font-black py-5 rounded-2xl transition-all duration-300 uppercase tracking-widest text-sm text-center block"
                >
                  Register as Vendor
                </Link>
              </div>
            </div>

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
      </div>
    </>
  );
}