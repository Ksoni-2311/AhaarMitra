import { useState,useEffect } from "react";
import useVendorStore from "../stores/vendor.store.js";
import {useParams} from 'react-router-dom'

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

export default function TiffinTrial2() {
  // const [activeTab, setActiveTab] = useState("explore");
  const { id } = useParams();

  const {
    selectedVendor,
    vendorConfig,
    getVendorFullDetails,
    loading,
  } = useVendorStore();

  useEffect(() => {
    if (id) getVendorFullDetails(id);
  }, [id]);

  if (loading) return <div className="p-10">Loading...</div>;
const getTodayKey = () => {
  return new Date()
    .toLocaleDateString("en-US", { weekday: "long" })
    .toLowerCase();
};
const todayKey = "monday";
console.log(todayKey);

const business = selectedVendor?.business || {};
const config = vendorConfig || {};

const pricing = config?.pricingVariants || [];
const weeklyMenu = config?.weeklyMenu || {};
const todayMenu = weeklyMenu?.[todayKey];

  const ratings = [
    { label: "5 Stars", pct: "85%", w: "85%", opacity: "100" },
    { label: "4 Stars", pct: "10%", w: "10%", opacity: "80" },
    { label: "3 Stars", pct: "3%", w: "3%", opacity: "60" },
    { label: "2 Stars", pct: "1.5%", w: "1.5%", opacity: "40" },
    { label: "1 Star", pct: "0.5%", w: "0.5%", opacity: "20" },
  ];

  return (
    <div
      className="min-h-screen bg-gray-50 font-sans text-gray-900"
      style={{ fontFamily: "'Manrope', sans-serif" }}
    >
      {/* Google Fonts */}
      {/* <link
        href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      /> */}

      {/* NAV */}
      {/* <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm h-16 px-8 md:px-12 flex justify-between items-center">
        <div className="text-xl font-black text-gray-900 tracking-tighter">AhaarMitra</div>
        <div className="hidden md:flex items-center gap-8 font-bold">
          {["Explore", "Subscriptions", "Orders", "Support"].map((item) => (
            <a
              key={item}
              href="#"
              onClick={() => setActiveTab(item.toLowerCase())}
              className={`text-sm transition-colors pb-1 ${
                activeTab === item.toLowerCase()
                  ? "text-gray-900 border-b-2 border-amber-500"
                  : "text-gray-400 hover:text-gray-700"
              }`}
            >
              {item}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <div className="relative flex items-center bg-gray-100 rounded-full px-4 py-2 border border-gray-200">
            <svg className="w-4 h-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z" />
            </svg>
            <input
              className="bg-transparent border-none focus:outline-none text-sm text-gray-700 w-36 placeholder:text-gray-400"
              placeholder="Search cuisines..."
            />
          </div>
          <button className="text-gray-400 hover:text-gray-700 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
          <button className="text-gray-400 hover:text-gray-700 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>
          <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-amber-400">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxDgB08kbHg4r0zUnel6GttGO-S_WADO-w39rZhmkQPeD79HasHrKA8oAcSftvGzC6oWsZv-3hHotK2rfgbjdQNkZqMa5FcXsDbZVFCEQoVtQ9a9zpeEfUxTW7eCHzfCeQaPfJ-PMY2ndmRCjf77328Z85PdHaoAjLcdRd3RFFqiwQAApTNkhBXUhMa453XBrKR-JtM3zUmkov1Nmp9X9J_3nspx3uueROaIDFzZhSepvqDnuU7HJlfrQcZiHVxo0o5fvUwKLJ2v7y"
              alt="User"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </nav> */}

      <main className="pt-16">
        {/* HERO */}
        <section className="relative h-[520px] w-full overflow-hidden">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMBmIchnkIkoQGR77HPKNPe8Mi87AWVXdlxtSOo0_aqUzxSiao8g8wNuB6MLnue5hBiJqoCqYqYf_QwyAx8srHTmiWQLzDoSpBgjo79alSoDbXQZ1BxnJSwyVy8He4b-CbkpWuTgncU4YcUKtpcr-pZOyPo1hbVYNmqrmfArc3zZZuFPXAiqx6A5bpLRmZEtfGqskXEk_ur5KQcptvlknPuRIA86F4SmByElS4qXuo1rcrzcBC2SHCGJ1fTtaHQtFIc92CaW3sgiyX"
            alt="Gourmet Tiffin"
            className="w-full h-full object-cover"
          />
          {/* Light overlay instead of dark */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-transparent" />

          <div className="absolute bottom-10 left-8 md:left-12 right-8 md:right-12 flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase border border-amber-300">
                  Verified Vendor
                </span>
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase border border-gray-200">
                  Premium Partner
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-gray-900 mb-3">
                {business.businessName || "Vendor Name"}
              </h1>
              <div className="flex items-center gap-3 whitespace-nowrap text-gray-600 mb-4">
                <div className="flex items-center gap-1.5 shrink-0">
                  <svg
                    className="w-4 h-4 text-amber-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                  </svg>
                  <span className="text-sm font-medium">
                    {business.address || "Vendor Address"}
                  </span>
                </div>

                <span className="text-gray-300 shrink-0">•</span>

                <div className="flex items-center gap-1.5 shrink-0">
                  <svg
                    className="w-4 h-4 text-amber-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  <span className="text-sm font-medium">+91 {business.phone || ""}</span>
                </div>

                <span className="text-gray-300 shrink-0">•</span>

                <div className="flex items-center gap-1.5 shrink-0">
                  <svg
                    className="w-4 h-4 text-amber-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  <span className="text-sm font-medium">
                    shreetiffin@ahaarmitra.com
                  </span>
                </div>

                <span className="text-gray-300 shrink-0">•</span>

                <div className="flex items-center gap-1.5 shrink-0">
                  <svg
                    className="w-4 h-4 text-amber-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                  </svg>
                  <span className="text-sm font-bold text-gray-800">
                    2,450+ Active Subscribers
                  </span>
                </div>
              </div>
              <p className="text-base text-gray-500 font-medium italic">
                "Authentic Home-Style Comfort, Elevated for Your Daily Table."
              </p>
            </div>

            <div className="flex items-center gap-4 bg-white/80 backdrop-blur-md rounded-2xl px-6 py-4 border border-gray-200 shadow-sm shrink-0">
              <div className="text-right">
                <div className="text-4xl font-black text-gray-900">4.8</div>
                <div className="flex text-amber-400 mt-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} filled />
                  ))}
                </div>
              </div>
              <div className="h-12 w-px bg-gray-200" />
              <div className="text-right">
                <div className="text-xs font-bold uppercase tracking-widest text-gray-400">
                  Overall
                </div>
                <div className="text-xs font-bold text-gray-600">
                  Subscriber Rating
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-2">
          {/* THALI & MEAL VARIANTS */}
          <section className="mb-2">
            <div className="mb-10">
              <h2 className="text-3xl font-black tracking-tight text-gray-900 mb-2">
                Thali &amp; Meal Variants
              </h2>
              <p className="text-gray-400 text-sm font-bold uppercase tracking-widest">
                Compare and select your daily dining experience
              </p>
            </div>


<div className="max-w-7xl mx-auto px-6 md:px-12 pb-16">

  <h2 className="text-3xl font-black mb-10">
    Today’s Menu
  </h2>

  {!todayMenu ? (
    <p>No menu available for today</p>
  ) : (
    Object.entries(todayMenu).map(([mealType, variants]) => (
      <div key={mealType} className="mb-8">

        {/* MEAL TITLE */}
        <h3 className="text-xl font-bold capitalize mb-4 text-gray-800">
          {mealType}
        </h3>

        {/* VARIANTS */}
        <div className="grid md:grid-cols-3 gap-6">

          {Object.entries(variants).map(([type, items]) => (
            <div
              key={type}
              className="bg-white p-5 border border-gray-200 rounded-xl shadow-sm"
            >

              <h4 className="font-bold capitalize mb-3 text-gray-900">
                {type}
              </h4>

              {items && items.length > 0 ? (
                <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                  {items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-400 text-sm">
                  No items available
                </p>
              )}

            </div>
          ))}

        </div>
      </div>
    ))
  )}

</div>
          </section>

<div className="max-w-6xl mx-auto px-6 pb-16">

  <h2 className="text-3xl font-black mb-10">
    Thali & Meal Variants
  </h2>

  <div className="space-y-6">

    {pricing?.map((variant, index) => (
      <div
        key={index}
        className="bg-white border rounded-2xl p-6 shadow-sm flex flex-col md:flex-row justify-between gap-6"
      >
        {/* LEFT SIDE */}
        <div className="flex gap-4">

          {/* IMAGE (optional placeholder) */}
          <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 text-sm">
            Img
          </div>

          <div>
            <h3 className="text-xl font-bold">
              {variant.variantName}
            </h3>

            {/* COMPONENTS */}
            <p className="text-gray-500 text-sm mt-1">
              {variant.components?.join(", ")}
            </p>
          </div>
        </div>

        {/* RIGHT SIDE PRICING */}
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-end">

          {/* DAILY */}
          <div className="text-center">
            <p className="text-xs text-gray-400 uppercase">Trial</p>
            <p className="text-lg font-bold">
              ₹{variant.dailyPrice}
            </p>
          </div>

          {/* WEEKLY */}
          <div className="text-center">
            <p className="text-xs text-gray-400 uppercase">Weekly</p>
            <p className="text-lg font-bold">
              ₹{variant.weeklyPrice}
            </p>
          </div>

          {/* MONTHLY (Highlighted) */}
          <div className="bg-orange-50 border border-orange-200 px-6 py-3 rounded-xl text-center">
            <p className="text-2xl font-black text-orange-600">
              ₹{variant.monthlyPrice}
            </p>
            <p className="text-xs text-orange-500 font-bold uppercase">
              Recommended
            </p>
          </div>

        </div>
      </div>
    ))}

  </div>
</div>


          {/* DELIVERY SCHEDULE */}
          <section className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl font-black tracking-tight text-gray-900">
                Delivery Schedule
              </h2>
              <span className="h-px flex-1 bg-gray-200" />
            </div>

            {/* Cancellation warning */}
            <div className="mb-8 w-full p-5 bg-red-50 border border-red-200 rounded-xl flex items-center gap-4">
              <div className="bg-red-500 p-2 rounded-lg shrink-0">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                </svg>
              </div>
              <div>
                <h4 className="text-red-600 text-xs font-black uppercase tracking-widest mb-1">
                  Single Cancellation Policy
                </h4>
                <p className="text-base font-bold text-gray-800 tracking-tight">
                  Cancellation Deadline: 3 hours prior to any service start
                  time.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Lunch */}
              <div className="bg-white p-8 rounded-xl">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-4xl">☀️</span>
                  <div className="text-right">
                    <span className="text-xs font-black text-amber-600 uppercase tracking-widest">
                      Lunch Service
                    </span>
                    <div className="text-2xl font-black text-gray-900">
                      12:00 PM - 03:00 PM
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 text-sm font-medium">
                  Daily fresh hot meals delivered to your doorstep.
                </p>
              </div>

              {/* Dinner */}
              <div className="bg-white p-8 rounded-xl">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-4xl">🌙</span>
                  <div className="text-right">
                    <span className="text-xs font-black text-indigo-500 uppercase tracking-widest">
                      Dinner Service
                    </span>
                    <div className="text-2xl font-black text-gray-900">
                      08:00 PM - 10:00 PM
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 text-sm font-medium">
                  Relax with a wholesome home-cooked dinner experience.
                </p>
              </div>
            </div>
          </section>

          {/* KEY FEEDBACK SUMMARY */}
          <section className="mb-20">
            <div className="flex flex-wrap justify-between items-end gap-4 mb-8">
              <h2 className="text-2xl font-black tracking-tight text-gray-900">
                Key Feedback Summary
              </h2>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-50 text-green-600 px-4 py-1.5 rounded-full text-xs font-bold border border-green-200">
                  Always Punctual
                </span>
                <span className="bg-purple-50 text-purple-600 px-4 py-1.5 rounded-full text-xs font-bold border border-purple-200">
                  Delicious Curries
                </span>
                <span className="bg-amber-50 text-amber-600 px-4 py-1.5 rounded-full text-xs font-bold border border-amber-200">
                  Hygienic
                </span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm space-y-4 mb-8">
              {ratings.map(({ label, pct, w }) => (
                <div key={label} className="flex items-center gap-4">
                  <span className="text-xs font-bold w-14 text-gray-400">
                    {label}
                  </span>
                  <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-amber-400 rounded-full transition-all"
                      style={{ width: w }}
                    />
                  </div>
                  <span className="text-xs font-bold w-12 text-right text-gray-700">
                    {pct}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-gray-900 text-white font-black py-5 rounded-xl text-sm uppercase tracking-widest shadow-lg hover:bg-amber-500 transition-all flex items-center justify-center gap-3">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Order a Trial
              </button>

              <Link
                to="/4"
                className="flex-1 bg-gray-900 text-white font-black py-5 rounded-xl text-sm uppercase tracking-widest shadow-lg hover:bg-amber-500 transition-all flex items-center justify-center gap-3"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                Build My Plan
              </Link>
            </div>
          </section>

          {/* SUBSCRIBE SECTION */}
          {/* <section className="mb-8">
            <div className="bg-white p-8 md:p-10 rounded-2xl border border-gray-200 shadow-sm relative overflow-hidden">
              <div className="absolute -top-16 -right-16 w-64 h-64 bg-amber-100 rounded-full opacity-40 blur-3xl pointer-events-none" />
              <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1">
                  <div className="inline-block px-3 py-1 bg-amber-100 text-amber-600 rounded-full text-xs font-black uppercase tracking-widest mb-4 border border-amber-200">
                    Limited Offer
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black mb-5 tracking-tighter text-gray-900">
                    Ready to Subscribe?{" "}
                    <br />
                    <span className="text-amber-500">Customize Your Journey</span>
                  </h2>
                  <p className="text-gray-500 mb-8 max-w-md text-sm leading-relaxed">
                    Tailor your meals, delivery timings, and subscription period for a hassle-free home-style dining experience.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      "2 Meals per Day",
                      "Stainless Steel Tiffins",
                      "Pause Anytime",
                      "Weekly Menu Flip",
                    ].map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                        <CheckCircle />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="w-full md:w-80 bg-gray-50 p-8 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center">
                  <div className="text-center mb-8">
                    <span className="text-xs font-black text-gray-400 uppercase tracking-widest block mb-2">
                      Standard Plan Starts At
                    </span>
                    <div className="flex items-end justify-center gap-2">
                      <span className="text-5xl font-black text-gray-900 tracking-tighter">₹2700</span>
                      <span className="text-sm text-gray-400 font-bold mb-1">/ Month</span>
                    </div>
                    <div className="mt-2 text-green-600 text-xs font-bold uppercase tracking-widest">
                      Save 15% on subscriptions
                    </div>
                  </div>
                  <button className="w-full bg-amber-500 text-white font-black py-4 rounded-lg text-base shadow-md shadow-amber-200 hover:bg-amber-600 hover:scale-[1.02] transition-all flex items-center justify-center gap-3 mb-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Build My Plan
                  </button>
                  <p className="text-xs text-center text-gray-400 uppercase font-black tracking-widest">
                    No commitments • Cancel anytime
                  </p>
                </div>
              </div>
            </div>
          </section> */}
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 pb-10">
          <div className="w-full p-4 bg-red-50 border border-red-200 rounded-xl text-center">
            <p className="text-sm font-semibold text-red-600">
              Note: Trial tiffins contain approximately half the quantity of a
              regular daily meal.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
