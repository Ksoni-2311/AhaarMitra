import { useState } from "react";

// ── Inline SVG icons ──────────────────────────────────────────────────────────

const IconArrowBack = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const IconEyeOff = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
);

const IconEye = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const IconLogin = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
    <polyline points="10 17 15 12 10 7" />
    <line x1="15" y1="12" x2="3" y2="12" />
  </svg>
);

// ── Shared input class ────────────────────────────────────────────────────────
const inputCls =
  "w-full px-5 rounded-2xl text-sm border-[1.5px] border-slate-200 bg-slate-50 " +
  "text-slate-900 placeholder-slate-300 transition-all duration-200 " +
  "focus:outline-none focus:border-blue-500 focus:bg-blue-50/40 focus:ring-2 focus:ring-blue-500/10";

// ─────────────────────────────────────────────────────────────────────────────
export default function VendorLogin10() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div
      className="min-h-screen bg-white antialiased overflow-x-hidden"
      style={{
        backgroundImage:
          "radial-gradient(circle at 2px 2px, rgba(0,0,0,0.04) 1px, transparent 0)",
        backgroundSize: "40px 40px",
      }}
    >
      <style>{`

        .text-glow-blue { text-shadow: 0 0 30px rgba(59,130,246,0.28); }

        .header-blur {
          background: rgba(255,255,255,0.88);
          backdrop-filter: blur(18px);
          border-bottom: 1.5px solid rgba(226,232,240,0.7);
        }

        .left-panel {
          background: linear-gradient(160deg, #EFF6FF 0%, #F0F9FF 45%, #FAFAFA 100%);
          border-right: 1.5px solid #EEF2FF;
        }

        /* CTA button */
        .btn-signin {
          background: linear-gradient(135deg, #2563EB, #3B82F6);
          box-shadow: 0 8px 24px rgba(59,130,246,0.22);
          transition: all 0.22s ease;
        }
        .btn-signin:hover {
          background: linear-gradient(135deg, #1D4ED8, #2563EB);
          box-shadow: 0 12px 32px rgba(59,130,246,0.32);
          transform: translateY(-1px);
        }
        .btn-signin:active { transform: translateY(0); }
        .btn-signin:hover .login-icon { transform: translateX(4px); }
        .login-icon { transition: transform 0.2s; }

        /* Forgot password link */
        .forgot-link {
          font-size: 10px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: #3B82F6;
          text-decoration: underline;
          text-underline-offset: 3px;
          text-decoration-color: rgba(59,130,246,0.3);
          transition: color 0.2s;
        }
        .forgot-link:hover { color: #1D4ED8; }

        /* Show/hide password button */
        .vis-btn {
          color: #CBD5E1;
          background: none;
          border: none;
          cursor: pointer;
          transition: color 0.2s;
          padding: 0;
        }
        .vis-btn:hover { color: #64748B; }

        /* Register link */
        .register-link {
          color: #1D4ED8;
          font-weight: 700;
          transition: color 0.2s;
          text-decoration: none;
        }
        .register-link:hover { color: #1E3A8A; }

        /* Back to selection */
        .back-sel { color: #94A3B8; transition: color 0.2s; text-decoration: none; }
        .back-sel:hover { color: #1D4ED8; }

        /* Footer links */
        .footer-link {
          color: #94A3B8;
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-link:hover { color: #1E40AF; }
      `}</style>


      {/* ── Main ───────────────────────────────────────────────────────────── */}
      <main
        className="grid grid-cols-1 lg:grid-cols-2"
        style={{ minHeight: "calc(100vh - 160px)" }}
      >
        {/* Left — Hero panel */}
        <section className="left-panel p-8 lg:p-20 flex flex-col justify-center items-center lg:items-start min-h-full">
          <div className="max-w-xl w-full text-center lg:text-left flex flex-col justify-center" style={{ minHeight: "400px" }}>

            {/* Badge */}
            <div className="mb-4">
              <span
                className="inline-block px-4 py-1.5 rounded-full text-blue-600 font-black"
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  background: "rgba(59,130,246,0.1)",
                  border: "1px solid rgba(59,130,246,0.2)",
                }}
              >
                Partner Program
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-black tracking-tight mb-10"
              style={{
                fontSize: "clamp(3rem,6vw,5rem)",
                lineHeight: 1.05,
                color: "#0A0A0A",
              }}
            >
              Welcome Back!{" "}
              <br />
              <span className="text-blue-500 text-glow-blue">
                Continue Empowering.
              </span>
            </h1>

            {/* Subtext */}
            <p
              className="text-xl leading-relaxed font-medium"
              style={{ color: "#64748B" }}
            >
              Welcome back! Continue empowering your kitchen and reaching new
              customers.
            </p>
          </div>
        </section>

        {/* Right — Login form */}
        <section className="p-8 lg:p-20 flex flex-col items-center justify-center bg-white">
          <div className="max-w-md w-full">

            {/* Heading */}
            <div className="mb-10">
              <h2
                className="text-3xl font-black mb-2"
                style={{ color: "#0A0A0A" }}
              >
                Partner Login
              </h2>
              <p
                className="text-sm font-medium uppercase"
                style={{ color: "#94A3B8", letterSpacing: "0.12em" }}
              >
                Sign in to manage your kitchen
              </p>
            </div>

            {/* Form */}
            <div className="space-y-5">

              {/* ── Email ───────────────────────────────────────────────── */}
              <div className="space-y-2">
                <label
                  className="block ml-1 font-black uppercase text-slate-400"
                  style={{ fontSize: "10px", letterSpacing: "0.18em" }}
                >
                  Email Address
                </label>
                <input
                  className={`${inputCls} py-5`}
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              {/* ── Password ────────────────────────────────────────────── */}
              <div className="space-y-2">
                {/* Label row with Forgot Password */}
                <div className="flex justify-between items-center mb-1">
                  <label
                    className="block ml-1 font-black uppercase text-slate-400"
                    style={{ fontSize: "10px", letterSpacing: "0.18em" }}
                  >
                    Password
                  </label>
                  <a href="#" className="forgot-link">
                    Forgot Password?
                  </a>
                </div>

                {/* Input with show/hide toggle */}
                <div className="relative">
                  <input
                    className={`${inputCls} py-5 pr-12`}
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <button
                    className="vis-btn absolute right-5 top-1/2 -translate-y-1/2"
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <IconEye /> : <IconEyeOff />}
                  </button>
                </div>
              </div>

              {/* ── Sign In CTA ─────────────────────────────────────────── */}
              <div className="pt-6">
                <button
                  className="btn-signin w-full text-white font-black py-5 rounded-2xl uppercase flex items-center justify-center gap-2"
                  style={{ letterSpacing: "0.14em", fontSize: "13px" }}
                  type="button"
                >
                  Sign In to Portal
                  <span className="login-icon">
                    <IconLogin />
                  </span>
                </button>
              </div>
            </div>

            {/* ── Register link ──────────────────────────────────────────── */}
            <div
              className="text-center mt-10 pt-8"
              style={{ borderTop: "1.5px solid #F1F5F9" }}
            >
              <p
                className="font-bold uppercase"
                style={{ color: "#B0BACE", fontSize: "10px", letterSpacing: "0.2em" }}
              >
                New to the program?
              </p>
              <a href="#" className="register-link inline-block mt-2">
                Register as a Provider
              </a>
            </div>

          </div>
        </section>
      </main>

    </div>
  );
}
