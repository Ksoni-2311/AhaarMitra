import { useState, useRef } from "react";

export default function TiffinSeekerRegistration13() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const otpRefs = [useRef(), useRef(), useRef(), useRef()];

  const handleOtp = (i, val) => {
    if (!/^\d?$/.test(val)) return;
    const next = [...otp];
    next[i] = val;
    setOtp(next);
    if (val && i < 3) otpRefs[i + 1].current?.focus();
  };

  const handleOtpKey = (i, e) => {
    if (e.key === "Backspace" && !otp[i] && i > 0) otpRefs[i - 1].current?.focus();
  };

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />

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

        .otp-input {
          width: 100%;
          aspect-ratio: 1;
          background: #f9fafb;
          border: 1.5px solid #e5e7eb;
          color: #111827;
          border-radius: 0.75rem;
          text-align: center;
          font-size: 1.25rem;
          font-weight: 800;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
          font-family: 'Manrope', sans-serif;
          caret-color: #f59e0b;
        }
        .otp-input::placeholder { color: #d1d5db; }
        .otp-input:focus {
          border-color: #f59e0b;
          background: #fff;
          box-shadow: 0 0 0 3px rgba(245,158,11,0.12);
        }
        .otp-input.filled {
          border-color: #f59e0b;
          background: #fffbeb;
          color: #92400e;
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
        {/* ── TOP CONTENT ── */}
        <div className="max-w-md w-full text-center mb-10">

          {/* Wordmark */}
          <div className="text-2xl font-black text-stone-900 tracking-tighter mb-8 fade-up fu-1">
            AhaarMitra
          </div>

          {/* Step indicator */}
          <div className="fade-up fu-2 inline-flex items-center gap-4 bg-white border border-stone-200 shadow-sm px-6 py-2.5 rounded-full mb-10">
            {/* Step 1 — done */}
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-stone-200 text-stone-500 text-[10px] font-black flex items-center justify-center">
                <span className="material-symbols-outlined text-[13px]" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-widest text-stone-400">Role</span>
            </div>

            {/* Divider */}
            <div className="w-8 h-px bg-stone-200" />

            {/* Step 2 — active */}
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-500 text-white text-[10px] font-black flex items-center justify-center">
                2
              </span>
              <span className="text-[10px] font-black uppercase tracking-widest text-stone-900">Registration</span>
            </div>
          </div>

          {/* Page title */}
          <h1 className="text-3xl md:text-4xl font-black tracking-tight text-stone-900 mb-2 fade-up fu-3">
            Tiffin Seeker
          </h1>
          <p className="text-stone-400 text-sm font-medium fade-up fu-3">
            Enter your details to start your culinary journey.
          </p>
        </div>

        {/* ── FORM ── */}
        <div className="max-w-md w-full">
          <div className="space-y-5">

            {/* Full Name */}
            <div className="space-y-2 fade-up fu-4">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-400 ml-1 block">
                Full Name
              </label>
              <input className="form-input" placeholder="John Doe" type="text" />
            </div>

            {/* Email */}
            <div className="space-y-2 fade-up fu-4">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-400 ml-1 block">
                Email Address
              </label>
              <input className="form-input" placeholder="john@example.com" type="email" />
            </div>

            {/* Phone */}
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
                />
              </div>
            </div>

            {/* OTP */}
            <div className="space-y-2 fade-up fu-6">
              <div className="flex justify-between items-center px-1">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-500">
                  Verification Code
                </label>
                <button
                  type="button"
                  className="text-[10px] font-black uppercase tracking-widest text-stone-400 hover:text-amber-500 transition-colors"
                >
                  Resend OTP
                </button>
              </div>

              <div className="grid grid-cols-4 gap-3">
                {otp.map((digit, i) => (
                  <input
                    key={i}
                    ref={otpRefs[i]}
                    className={`otp-input${digit ? " filled" : ""}`}
                    maxLength={1}
                    placeholder="•"
                    type="text"
                    inputMode="numeric"
                    value={digit}
                    onChange={(e) => handleOtp(i, e.target.value)}
                    onKeyDown={(e) => handleOtpKey(i, e)}
                  />
                ))}
              </div>

              <p className="text-[10px] text-stone-400 mt-2 ml-1 font-medium">
                We sent a 4-digit code to your phone.
              </p>
            </div>

            {/* Submit */}
            <div className="fade-up fu-7 pt-2">
              <button
                type="button"
                className="submit-btn w-full bg-stone-900 text-white font-black py-5 rounded-2xl uppercase tracking-[0.2em] text-xs"
              >
                Complete Registration
              </button>
            </div>
          </div>

          {/* Legal + back */}
          <div className="mt-10 text-center fade-up fu-8">
            <p className="text-stone-400 text-[10px] font-bold uppercase tracking-[0.2em]">
              By continuing, you agree to our{" "}
              <a href="#" className="text-stone-900 font-black hover:text-amber-500 transition-colors border-b border-stone-300">
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

        {/* ── FOOTER ── */}
        <footer className="w-full py-8 px-6 border-t border-stone-200 mt-16">
          <div className="max-w-md mx-auto flex flex-col md:flex-row justify-between items-center gap-4 opacity-50">
            <div className="text-[10px] font-black tracking-widest uppercase text-stone-500">
              © 2024 AhaarMitra
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-[10px] font-black tracking-widest uppercase text-stone-500 hover:text-stone-900 transition-colors">
                Privacy
              </a>
              <a href="#" className="text-[10px] font-black tracking-widest uppercase text-stone-500 hover:text-stone-900 transition-colors">
                Help
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
