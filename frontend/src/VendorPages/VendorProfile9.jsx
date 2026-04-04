import { useState } from "react";

// Icons as inline SVG components
const IconArrowBack = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5M12 5l-7 7 7 7" />
  </svg>
);
const IconEdit = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);
const IconBell = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" />
  </svg>
);
const IconCamera = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
    <circle cx="12" cy="13" r="4" />
  </svg>
);
const IconPerson = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" />
  </svg>
);
const IconStore = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);
const IconBank = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="22" x2="21" y2="22" />
    <line x1="6" y1="18" x2="6" y2="11" />
    <line x1="10" y1="18" x2="10" y2="11" />
    <line x1="14" y1="18" x2="14" y2="11" />
    <line x1="18" y1="18" x2="18" y2="11" />
    <polygon points="12 2 20 7 4 7" />
  </svg>
);
const IconCheck = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const IconEye = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);
const IconInfo = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);
const IconLogout = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" />
  </svg>
);
const IconHelp = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01" />
  </svg>
);

// Reusable field row
const ProfileField = ({ label, value, icon, iconClass = "text-gray-300 hover:text-blue-500" }) => (
  <div>
    <div className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-400 mb-1.5">{label}</div>
    <div className="flex items-center justify-between group">
      <span className="text-base font-bold text-gray-900">{value}</span>
      {icon === "verified" ? (
        <IconCheck className="w-4 h-4 text-emerald-500 shrink-0" />
      ) : icon === "eye" ? (
        <IconEye className={`w-4 h-4 shrink-0 cursor-pointer ${iconClass}`} />
      ) : (
        <IconEdit className={`w-3.5 h-3.5 shrink-0 cursor-pointer ${iconClass}`} />
      )}
    </div>
  </div>
);

export default function VendorProfile9() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div
      className="min-h-screen bg-gray-50 text-gray-900 antialiased overflow-x-hidden pt-16"
      style={{
        backgroundImage:
          "radial-gradient(circle at 2px 2px, rgba(0,0,0,0.04) 1px, transparent 0)",
        backgroundSize: "40px 40px",
      }}
    >
      {/* <link
        href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      /> */}

      {/* ── HEADER ── */}
      {/* <header className="w-full py-5 px-8 md:px-12 flex justify-between items-center border-b border-gray-200 bg-white/80 backdrop-blur-xl sticky top-0 z-50 shadow-sm">

        <div className="shrink-0">
          <div className="text-xl font-black text-gray-900 tracking-tighter uppercase">
            AhaarMitra
          </div>
          <div className="h-0.5 w-full bg-gradient-to-r from-blue-500 to-transparent" />
        </div>


        <nav className="hidden md:flex items-center gap-10">
          {["Order History", "Services", "Subscriber", "Finance"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-[11px] font-black uppercase tracking-widest text-gray-400 hover:text-gray-900 transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>


        <div className="flex items-center gap-5 shrink-0">

          <button className="relative text-gray-400 hover:text-gray-700 transition-colors">
            <IconBell className="w-5 h-5" />
            <span className="absolute -top-0.5 -right-0.5 block h-2 w-2 rounded-full bg-blue-500 ring-2 ring-white" />
          </button>


          <div className="relative">
            <button
              onClick={() => setDropdownOpen((v) => !v)}
              className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-200 bg-gray-100 hover:bg-blue-50 hover:border-blue-300 transition-all"
            >
              <span className="text-[10px] font-black text-gray-700">AM</span>
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 top-full mt-3 w-56 bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden z-60">
                <div className="px-5 py-4 border-b border-gray-100">
                  <div className="text-[9px] font-black uppercase tracking-widest text-gray-400">
                    Vendor Account
                  </div>
                  <div className="text-xs font-black text-gray-900 mt-1">
                    AhaarMitra Kitchen
                  </div>
                </div>
                {[
                  { label: "Profile Settings", Icon: IconPerson, active: true },
                  { label: "Help & Support", Icon: IconHelp },
                ].map(({ label, Icon, active }) => (
                  <a
                    key={label}
                    href="#"
                    className={`flex items-center gap-3 px-5 py-3.5 text-[10px] font-black uppercase tracking-widest border-b border-gray-100 transition-colors ${
                      active
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {label}
                  </a>
                ))}
                <a
                  href="#"
                  className="flex items-center gap-3 px-5 py-3.5 text-[10px] font-black uppercase tracking-widest text-red-500 hover:bg-red-50 transition-colors"
                >
                  <IconLogout className="w-4 h-4" />
                  Sign Out
                </a>
              </div>
            )}
          </div>
        </div>
      </header> */}

      {/* ── MAIN ── */}
      <main className="max-w-4xl mx-auto px-6 md:px-12 py-12">
        {/* Page title */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-3">
            <a href="#" className="text-gray-400 hover:text-gray-700 transition-colors">
              <IconArrowBack className="w-5 h-5" />
            </a>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 leading-none">
              Profile{" "}
              <span className="text-blue-600">Management.</span>
            </h1>
          </div>
          <p className="text-gray-500 text-base ml-9">
            Manage your personal, business, and financial credentials for AhaarMitra.
          </p>
        </div>

        <div className="space-y-6">
          {/* ── HERO BANNER ── */}
          <section className="relative h-64 md:h-80 rounded-2xl overflow-hidden border border-gray-200 shadow-sm group cursor-pointer">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAe4CVYZYgezRKPesqLBFTdukvCU85_OQvkG0XntkMPpo4ALDkZJOcVDykncXMXEPNxhI6quri0ZF2kU4b84KB2OrL6O-z-8PizI8Z0mOLU7Qj9-f4zrRIjE0fSCoUQ8SmWAZzrOYNhnwTEhY4hsHf2pzPZc_wPcF4XmTIO4MSKtdGaggbzb0Ms4VVM7-rGhvJWV32oicLaeLwGbcObHfS-2VOAWwFU5S5RCvck78ww00UtzvZUHUXOZOTYLb4Z0HVDt2zEa-OjH2SY"
              alt="AhaarMitra Kitchen"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Gradient overlay — lighter for white theme */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            <div className="absolute bottom-0 left-0 p-8 w-full flex items-end justify-between">
              <div>
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-300 mb-2">
                  Business Presence
                </div>
                <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white">
                  AhaarMitra Kitchen
                </h2>
              </div>
              <button className="bg-white/90 hover:bg-white p-3 rounded-full border border-white/60 shadow-md transition-all">
                <IconCamera className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </section>

          {/* ── PERSONAL DETAILS ── */}
          <section className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <IconPerson className="w-5 h-5 text-blue-500" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
                  Personal Details
                </span>
              </div>
              <button className="text-[9px] font-black text-blue-600 uppercase tracking-widest hover:text-blue-800 transition-colors">
                Edit All
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              <ProfileField label="Full Name" value="Arjun Mehra" />
              <ProfileField label="Contact Number" value="+91 98765 43210" />
              <ProfileField label="Email Address" value="arjun.kitchen@ahaarmitra.com" />
              <ProfileField label="Primary Address" value="Sector 45, Gurgaon, Haryana 122003" />
            </div>
          </section>

          {/* ── BUSINESS INFORMATION ── */}
          <section className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <IconStore className="w-5 h-5 text-amber-500" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
                  Business Information
                </span>
              </div>
              <button className="text-[9px] font-black text-blue-600 uppercase tracking-widest hover:text-blue-800 transition-colors">
                Update Business Info
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              <ProfileField label="Company/Outlet Name" value="AhaarMitra Kitchen (Main)" />
              <ProfileField label="Business Type" value="Cloud Kitchen / Catering" />
              <div className="md:col-span-2">
                <ProfileField
                  label="Business Address"
                  value="Suite 204, Cyber Hub, DLF Phase 2, Gurgaon, Haryana 122002"
                />
              </div>

              {/* Additional Identifiers */}
              <div className="md:col-span-2 mt-2 pt-6 border-t border-gray-100">
                <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-6">
                  Additional Identifiers
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                  <ProfileField
                    label="FSSAI Registration No."
                    value="23321008000456"
                    icon="verified"
                  />
                  <ProfileField label="GSTIN" value="07AAAAA0000A1Z5" />
                </div>
              </div>
            </div>
          </section>

          {/* ── FINANCIAL DETAILS ── */}
          <section className="bg-white border border-gray-200 border-l-4 border-l-emerald-500 rounded-2xl p-8 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <IconBank className="w-5 h-5 text-emerald-500" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
                  Financial Details
                </span>
              </div>
              <span className="px-2.5 py-1 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 text-[9px] font-black uppercase tracking-widest">
                KYC Verified
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              <ProfileField label="Account Holder Name" value="Arjun Mehra" />
              <ProfileField label="Bank Name" value="HDFC Bank Ltd." />
              <div>
                <div className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-400 mb-1.5">
                  Bank Account Number
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-base font-bold text-gray-900 tracking-widest">
                    •••• •••• •••• 4291
                  </span>
                  <IconEye className="w-4 h-4 text-gray-300 hover:text-blue-500 cursor-pointer transition-colors shrink-0" />
                </div>
              </div>
              <ProfileField label="IFSC Code" value="HDFC0001234" />
            </div>

            {/* Security notice */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <div className="flex items-start gap-2 text-[10px] text-gray-400 font-medium">
                <IconInfo className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                <span>
                  For security reasons, changing bank details requires a 24-hour verification
                  period and a one-time OTP.
                </span>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* ── FOOTER ── */}
      {/* <footer className="w-full py-10 px-8 md:px-12 border-t border-gray-200 bg-white mt-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-8">
            {["Privacy Policy", "Terms of Service", "Support Portal"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-gray-400 hover:text-gray-700 transition-colors text-[10px] font-bold uppercase tracking-widest"
              >
                {link}
              </a>
            ))}
          </div>
          <div className="text-gray-400 text-[10px] font-medium uppercase tracking-widest">
            © 2024 AhaarMitra Analytics. Precision in Service Management.
          </div>
        </div>
      </footer> */}
    </div>
  );
}
