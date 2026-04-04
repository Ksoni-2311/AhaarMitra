import { useState } from "react";

export default function tempr() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div
      className="min-h-screen bg-white font-sans antialiased overflow-x-hidden"
      style={{
        fontFamily: "'Manrope', sans-serif",
        backgroundImage:
          "radial-gradient(circle at 2px 2px, rgba(0,0,0,0.04) 1px, transparent 0)",
        backgroundSize: "40px 40px",
      }}
    >
      {/* Google Fonts */}
      <style>{`
        .text-glow-blue { text-shadow: 0 0 28px rgba(59,130,246,0.25); }
        .input-field {
          background-color: #F8FAFF;
          border: 1.5px solid #E8EDF5;
          color: #0A0A0A;
          transition: all 0.25s ease;
          outline: none;
        }
        .input-field::placeholder { color: #B0BACE; }
        .input-field:focus {
          border-color: #3B82F6;
          background-color: #EFF6FF;
          box-shadow: 0 0 0 3px rgba(59,130,246,0.1);
        }
        .btn-next {
          background: linear-gradient(135deg, #2563EB, #3B82F6);
          transition: all 0.25s ease;
          box-shadow: 0 8px 24px rgba(59,130,246,0.25);
        }
        .btn-next:hover {
          background: linear-gradient(135deg, #1D4ED8, #2563EB);
          box-shadow: 0 12px 32px rgba(59,130,246,0.35);
          transform: translateY(-1px);
        }
        .btn-next:active { transform: translateY(0); }
        .arrow-icon { display: inline-block; transition: transform 0.2s; }
        .btn-next:hover .arrow-icon { transform: translateX(4px); }
        .step-dot-active {
          background: #2563EB;
          width: 2rem;
          height: 6px;
          border-radius: 9999px;
        }
        .step-dot-inactive {
          background: #E2E8F0;
          width: 2rem;
          height: 6px;
          border-radius: 9999px;
        }
        .left-panel {
          background: linear-gradient(160deg, #EFF6FF 0%, #F0F9FF 40%, #FAFAFA 100%);
          border-right: 1.5px solid #EEF2FF;
        }
        .footer-link {
          color: #94A3B8;
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          transition: color 0.2s;
        }
        .footer-link:hover { color: #1E40AF; }
        .header-blur {
          background: rgba(255,255,255,0.85);
          backdrop-filter: blur(16px);
          border-bottom: 1.5px solid rgba(226,232,240,0.7);
        }
        .login-link { color: #1D4ED8; font-weight: 700; transition: color 0.2s; }
        .login-link:hover { color: #1E3A8A; }
        .vis-btn { color: #B0BACE; transition: color 0.2s; }
        .vis-btn:hover { color: #64748B; }
        .label-text {
          font-size: 10px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: #94A3B8;
        }
      `}</style>


      {/* Main Content */}
      <main
        className="grid grid-cols-1 lg:grid-cols-2"
        style={{ minHeight: "calc(100vh - 160px)" }}
      >
        {/* Left Panel */}
        <section className="left-panel p-8 lg:p-20 flex flex-col justify-center min-h-full">
          <div className="max-w-xl mx-auto lg:mx-0 flex flex-col justify-center">
            <div className="py-12">
              {/* Badge */}
              <span
                className="inline-block px-4 py-1.5 rounded-full text-blue-600 font-black mb-8"
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

              {/* Hero heading */}
              <h1
                className="font-black tracking-tight mb-12 leading-none"
                style={{
                  fontSize: "clamp(3rem, 6vw, 5rem)",
                  lineHeight: 1.05,
                  color: "#0A0A0A",
                }}
              >
                Empower Your Kitchen,{" "}
                <span className="text-blue-500 text-glow-blue">
                  Feed the Future.
                </span>
              </h1>

              {/* Subtext */}
              <p
                className="text-xl leading-relaxed font-medium"
                style={{ color: "#64748B" }}
              >
                Join a community of local chefs and kitchens transforming the
                way students and professionals eat. We provide the tools; you
                provide the taste.
              </p>
            </div>
          </div>
        </section>

        {/* Right Panel — Form */}
        <section className="p-8 lg:p-20 flex flex-col items-center justify-center bg-white">
          <div className="max-w-md w-full">
            {/* Step header */}
            <div className="mb-10">
              <div className="flex justify-between items-end mb-4">
                <div>
                  <h2
                    className="text-3xl font-black mb-1"
                    style={{ color: "#0A0A0A" }}
                  >
                    Personal Details
                  </h2>
                  <p
                    className="text-sm font-medium"
                    style={{ color: "#94A3B8" }}
                  >
                    Step 1 of 3: Owner Identification
                  </p>
                </div>
                {/* Step indicators */}
                <div className="flex gap-1.5 pb-1">
                  <div className="step-dot-active" />
                  <div className="step-dot-inactive" />
                  <div className="step-dot-inactive" />
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="space-y-5">
              {/* First + Last Name */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="label-text block ml-1">First Name</label>
                  <input
                    className="input-field w-full px-5 py-5 rounded-2xl text-sm"
                    type="text"
                    name="firstName"
                    placeholder="e.g. Rahul"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <label className="label-text block ml-1">Last Name</label>
                  <input
                    className="input-field w-full px-5 py-5 rounded-2xl text-sm"
                    type="text"
                    name="lastName"
                    placeholder="e.g. Sharma"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="label-text block ml-1">Email Address</label>
                <input
                  className="input-field w-full px-5 py-5 rounded-2xl text-sm"
                  type="email"
                  name="email"
                  placeholder="rahul@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="label-text block ml-1">Contact Number</label>
                <div className="relative">
                  <span
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-sm font-bold"
                    style={{ color: "#94A3B8" }}
                  >
                    +91
                  </span>
                  <input
                    className="input-field w-full pl-14 pr-5 py-5 rounded-2xl text-sm"
                    type="tel"
                    name="phone"
                    placeholder="98765-43210"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label className="label-text block ml-1">Password</label>
                <div className="relative">
                  <input
                    className="input-field w-full px-5 py-5 rounded-2xl text-sm pr-12"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <button
                    className="vis-btn absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer bg-transparent border-0 p-0"
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94" />
                        <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19" />
                        <line x1="1" y1="1" x2="23" y2="23" />
                      </svg>
                    )}
                  </button>
                </div>
                <p
                  className="ml-1 uppercase"
                  style={{
                    fontSize: "10px",
                    color: "#B0BACE",
                    letterSpacing: "0.1em",
                  }}
                >
                  Minimum 8 characters, 1 uppercase, 1 number
                </p>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  className="btn-next w-full text-white font-black py-5 rounded-2xl uppercase flex items-center justify-center gap-2"
                  style={{ letterSpacing: "0.14em", fontSize: "13px" }}
                  type="button"
                >
                  Next Step: Business Details
                  <span className="arrow-icon">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>

            {/* Login link */}
            <div
              className="text-center mt-10 pt-8"
              style={{ borderTop: "1.5px solid #F1F5F9" }}
            >
              <p
                className="font-bold uppercase"
                style={{
                  color: "#B0BACE",
                  fontSize: "10px",
                  letterSpacing: "0.2em",
                }}
              >
                Already a partner?
              </p>
              <a href="#" className="login-link inline-block mt-2 font-bold">
                Login to Provider Portal
              </a>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}
