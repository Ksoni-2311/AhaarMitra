import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TiffinSeekerRegistration13() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async () => {
    try {
      setLoading(true);
      setMessage("");

      const token = localStorage.getItem("token");

      if (!token) {
        setMessage("Token not found. Please select role first.");
        setLoading(false);
        return;
      }

      if (
        !formData.name ||
        !formData.email ||
        !formData.phone ||
        !formData.password
      ) {
        setMessage("Please fill all fields");
        setLoading(false);
        return;
      }

      const res = await fetch("http://localhost:8080/api/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log("REGISTER RESPONSE:", data);

      if (!res.ok) {
        throw new Error(data.message || data.error || "Registration failed");
      }

      localStorage.setItem("registrationStep", data.step);

      setMessage("Registration completed successfully");

      setTimeout(() => {
        navigate("/14");
      }, 1000);
    } catch (err) {
      console.log("REGISTER ERROR:", err);
      setMessage(err.message || "Something went wrong");
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
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.55s cubic-bezier(0.165,0.84,0.44,1) both; }
        .fu-1 { animation-delay: 0.05s; }
        .fu-2 { animation-delay: 0.12s; }
        .fu-3 { animation-delay: 0.2s;  }
        .fu-4 { animation-delay: 0.28s; }
        .fu-5 { animation-delay: 0.36s; }
        .fu-6 { animation-delay: 0.44s; }
        .fu-7 { animation-delay: 0.52s; }
        .fu-8 { animation-delay: 0.60s; }

        .form-input {
          width: 100%;
          background: #f9fafb;
          border: 1.5px solid #e5e7eb;
          color: #111827;
          border-radius: 0.75rem;
          padding: 1rem 1.5rem;
          font-weight: 600;
          font-size: 0.9rem;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
          font-family: 'Manrope', sans-serif;
        }
        .form-input::placeholder { color: #9ca3af; font-weight: 500; }
        .form-input:focus {
          border-color: #f59e0b;
          background: #ffffff;
          box-shadow: 0 0 0 3px rgba(245,158,11,0.12);
        }

        .bg-dot {
          background-image: radial-gradient(circle at 1.5px 1.5px, rgba(0,0,0,0.05) 1px, transparent 0);
          background-size: 32px 32px;
        }

        .submit-btn {
          transition: background 0.25s, color 0.25s, transform 0.15s, box-shadow 0.2s;
        }
        .submit-btn:hover {
          background: #f59e0b !important;
          color: #fff !important;
          transform: translateY(-1px);
          box-shadow: 0 8px 24px -4px rgba(245,158,11,0.35);
        }
        .submit-btn:active { transform: translateY(0); }
      `}</style>

      <div
        className="min-h-screen flex flex-col items-center justify-center bg-stone-50 bg-dot py-20 px-6 text-stone-900"
        style={{ fontFamily: "'Manrope', sans-serif" }}
      >
        <div className="max-w-md w-full text-center mb-10">
          <div className="text-2xl font-black text-stone-900 tracking-tighter mb-8 fade-up fu-1">
            AhaarMitra
          </div>

          <div className="fade-up fu-2 inline-flex items-center gap-4 bg-white border border-stone-200 shadow-sm px-6 py-2.5 rounded-full mb-10">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-stone-200 text-stone-500 text-[10px] font-black flex items-center justify-center">
                <span
                  className="material-symbols-outlined text-[13px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check
                </span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-widest text-stone-400">
                Role
              </span>
            </div>
            <div className="w-8 h-px bg-stone-200" />
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-500 text-white text-[10px] font-black flex items-center justify-center">
                2
              </span>
              <span className="text-[10px] font-black uppercase tracking-widest text-stone-900">
                Registration
              </span>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-black tracking-tight text-stone-900 mb-2 fade-up fu-3">
            Tiffin Seeker
          </h1>
          <p className="text-stone-400 text-sm font-medium fade-up fu-3">
            Enter your details to start your culinary journey.
          </p>
        </div>

        <div className="max-w-md w-full">
          <div className="space-y-5">
            <div className="space-y-2 fade-up fu-4">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-400 ml-1 block">
                Full Name
              </label>
              <input
                className="form-input"
                placeholder="John Doe"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2 fade-up fu-4">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-400 ml-1 block">
                Email Address
              </label>
              <input
                className="form-input"
                placeholder="john@example.com"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2 fade-up fu-5">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-400 ml-1 block">
                Phone Number
              </label>
              <div className="relative">
                <span className="absolute left-5 top-1/2 -translate-y-1/2 text-stone-400 font-bold text-sm select-none">
                  +91
                </span>
                <input
                  className="form-input"
                  style={{ paddingLeft: "3.5rem" }}
                  placeholder="9876543210"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="space-y-2 fade-up fu-6">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-500 ml-1 block">
                Security Password
              </label>
              <input
                className="form-input"
                placeholder="••••••••"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <p className="text-[10px] text-stone-400 mt-2 ml-1 font-medium">
                Ensure your password is at least 8 characters long.
              </p>
            </div>

            {message && (
              <p className="text-sm font-semibold text-center text-amber-600">
                {message}
              </p>
            )}

            <div className="fade-up fu-7 pt-2">
              <button
                type="button"
                onClick={handleRegister}
                disabled={loading}
                className="submit-btn w-full bg-stone-900 text-white font-black py-5 rounded-2xl uppercase tracking-[0.2em] text-xs disabled:opacity-60"
              >
                {loading ? "Processing..." : "Complete Registration"}
              </button>
            </div>
          </div>

          <div className="mt-10 text-center fade-up fu-8">
            <p className="text-stone-400 text-[10px] font-bold uppercase tracking-[0.2em]">
              By continuing, you agree to our{" "}
              <a
                href="#"
                className="text-stone-900 font-black hover:text-amber-500 transition-colors border-b border-stone-300"
              >
                Terms of Service
              </a>
            </p>
            <div className="mt-6">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-stone-400 hover:text-stone-900 transition-all text-[10px] font-black uppercase tracking-widest group"
              >
                <span className="material-symbols-outlined text-sm group-hover:-translate-x-0.5 transition-transform">
                  arrow_back
                </span>
                Back to Role Selection
              </a>
            </div>
          </div>
        </div>

        <footer className="w-full py-8 px-6 border-t border-stone-200 mt-16">
          <div className="max-w-md mx-auto flex flex-col md:flex-row justify-between items-center gap-4 opacity-50">
            <div className="text-[10px] font-black tracking-widest uppercase text-stone-500">
              © 2024 AhaarMitra
            </div>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-[10px] font-black tracking-widest uppercase text-stone-500 hover:text-stone-900 transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-[10px] font-black tracking-widest uppercase text-stone-500 hover:text-stone-900 transition-colors"
              >
                Help
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}