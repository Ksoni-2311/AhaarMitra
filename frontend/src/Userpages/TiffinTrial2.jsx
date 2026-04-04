import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useVendorStore from "../stores/vendor.store";

/* ── tiny SVG icon helpers ── */
const StarFilled = ({ className = "w-3 h-3" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);
const StarHalf = ({ className = "w-3 h-3" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2v15.77l-6.18 3.25L7 14.14 2 9.27l8.91-1.01L12 2z" />
  </svg>
);

export default function TiffinTrial2() {
  const { id } = useParams();

  const {
    selectedVendor,
    vendorConfig,
    getVendorFullDetails,
    loading,
  } = useVendorStore();

  const [serviceChoice, setServiceChoice] = useState("dinner");
  const [selectedDay, setSelectedDay] = useState(14);

  useEffect(() => {
    getVendorFullDetails(id);
  }, [id]);

  if (loading) return <p className="p-10">Loading...</p>;

  const business = selectedVendor?.business || {};
  const config = vendorConfig || {};

  // ⭐ rating fallback
  const rating =
    selectedVendor?.rating ||
    (3.5 + (parseInt(selectedVendor?._id?.slice(-2), 16) % 15) / 10).toFixed(1);

  // 👥 subscribers fake but stable
  const subscribers =
    1000 +
    (parseInt(selectedVendor?._id?.slice(-3), 16) % 5000);

  return (
    <div className="min-h-screen bg-white text-zinc-900">

      {/* HERO */}
      <section className="relative h-[560px] w-full overflow-hidden">
        <img
          src={business.image?.url || "https://via.placeholder.com/1200"}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

        <div className="absolute bottom-10 left-10">
          <h1 className="text-5xl font-black text-white">
            {business.businessName}
          </h1>
          <p className="text-white/70">{business.address}</p>
          <p className="text-white/50 text-sm">
            {subscribers}+ subscribers
          </p>
        </div>
      </section>

      {/* BODY */}
      <div className="max-w-7xl mx-auto p-8 grid lg:grid-cols-12 gap-10">

        {/* LEFT */}
        <div className="lg:col-span-8 space-y-12">

          {/* RATING */}
          <div className="flex items-center gap-6">
            <div>
              <div className="text-4xl font-black">{rating}</div>
              <div className="flex text-amber-400">
                {[1,2,3,4].map(i => <StarFilled key={i} />)}
                <StarHalf />
              </div>
            </div>
          </div>

          {/* PRICING */}
          <section>
            <h2 className="text-2xl font-black mb-6">Meal Plans</h2>

            {config?.pricingVariants?.map((item, i) => (
              <div key={i} className="grid md:grid-cols-12 p-6 bg-white border rounded-xl mb-4">

                <div className="md:col-span-5">
                  <h3 className="font-bold">{item.variantName}</h3>
                  <p className="text-sm text-gray-500">
                    {item.components?.join(", ")}
                  </p>
                </div>

                <div className="md:col-span-2 text-center">
                  ₹{item.dailyPrice}
                </div>

                <div className="md:col-span-2 text-center">
                  ₹{item.weeklyPrice}
                </div>

                <div className="md:col-span-3 text-center font-bold text-amber-600">
                  ₹{item.monthlyPrice}
                </div>
              </div>
            ))}
          </section>

          {/* DELIVERY WINDOWS */}
          <section>
            <h2 className="text-2xl font-black mb-6">
              Delivery Schedule
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              <div className="bg-white p-6 border rounded-xl">
                <h3 className="font-bold">Lunch</h3>
                <p className="text-xl font-black">
                  {config?.serviceWindows?.lunch?.startTime} -{" "}
                  {config?.serviceWindows?.lunch?.endTime}
                </p>
              </div>

              <div className="bg-white p-6 border rounded-xl">
                <h3 className="font-bold">Dinner</h3>
                <p className="text-xl font-black">
                  {config?.serviceWindows?.dinner?.startTime} -{" "}
                  {config?.serviceWindows?.dinner?.endTime}
                </p>
              </div>

            </div>
          </section>

          {/* TODAY MENU */}
          <section>
            <h2 className="text-2xl font-black mb-4">Today Menu</h2>

            <ul className="list-disc pl-5">
              {config?.weeklyMenu?.monday?.lunch?.mini?.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

        </div>

        {/* RIGHT */}
        <div className="lg:col-span-4 space-y-6">

          {/* TRIAL */}
          <div className="p-6 border rounded-xl">
            <h2 className="font-bold mb-3">Trial</h2>
            <p className="text-2xl font-black">
              ₹{config?.trialOffer?.standardTrialPrice || 0}
            </p>

            <button className="w-full bg-black text-white py-3 rounded-xl mt-4">
              Order Trial
            </button>
          </div>

          {/* CONTACT */}
          <div className="p-6 border rounded-xl">
            <h3 className="font-bold mb-4">Contact</h3>

            <p>{selectedVendor?.phone}</p>
            <p>{selectedVendor?.email}</p>
          </div>

        </div>

      </div>
    </div>
  );
}