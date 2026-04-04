import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Star = ({ filled }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={filled ? "#F59E0B" : "none"}
    stroke="#F59E0B"
    strokeWidth={filled ? 0 : 1.5}
    className="w-4 h-4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
    />
  </svg>
);

const CheckCircle = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="#22C55E"
    className="w-4 h-4 shrink-0"
  >
    <path
      fillRule="evenodd"
      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
      clipRule="evenodd"
    />
  </svg>
);

export default function VendorDetails1() {
  const [activeTab, setActiveTab] = useState("explore");

  const ratings = [
    { label: "5 Stars", pct: "85%", w: "85%" },
    { label: "4 Stars", pct: "10%", w: "10%" },
    { label: "3 Stars", pct: "3%", w: "3%" },
    { label: "2 Stars", pct: "1.5%", w: "1.5%" },
    { label: "1 Star", pct: "0.5%", w: "0.5%" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <main className="pt-16">

        {/* HERO */}
        <section className="relative h-[520px] w-full overflow-hidden">
          <img
            src={business?.image?.url || "https://images.unsplash.com/photo-1504674900247-0877df9cc836"}
            alt="Gourmet Tiffin"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-transparent" />

          <div className="absolute bottom-10 left-8 right-8 flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
              <h1 className="text-4xl font-black">
                {business.businessName || "Vendor Name"}
              </h1>
              <p>{business.address}</p>
            </div>

            <div className="bg-white p-4 rounded-xl">
              <div className="text-4xl font-black">4.8</div>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} filled />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CONTENT WRAPPER */}
        <div className="max-w-7xl mx-auto px-6 pt-16">

          {/* THALI SECTION */}
          <section className="mb-10">

            {/* Mini */}
            <div className="bg-white p-6 rounded-xl mb-4">
              Mini Thali
            </div>

            {/* Executive */}
            <div className="bg-white p-6 rounded-xl">
              Executive Thali
            </div>

          </section>

        </div>

        {/* ✅ FIXED STRUCTURE HERE */}
        <div className="max-w-6xl mx-auto px-6 pb-16">

          <h2 className="text-3xl font-black mb-10">
            Thali & Meal Variants
          </h2>

          <div className="space-y-6">
            {pricing?.map((variant, index) => (
              <div key={index} className="bg-white p-6 rounded-xl">
                {variant.variantName}
              </div>
            ))}
          </div>

        </div>

        {/* DELIVERY */}
        <section className="mb-20 px-6">
          <h2 className="text-2xl font-black mb-4">Delivery Schedule</h2>
        </section>

        {/* FEEDBACK */}
        <section className="mb-20 px-6">
          {ratings.map((r) => (
            <div key={r.label}>{r.label}</div>
          ))}
        </section>

      </main>
    </div>
  );
}