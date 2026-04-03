import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useVendorStore from "../stores/vendor.store.js";

const BusinessDetails2 = () => {
  const navigate = useNavigate();
  const { saveBusiness, loading } = useVendorStore();

  const [formData, setFormData] = useState({
    businessName: "",
    type: "",
    address: "",
    gstNumber: "",
    fssaiNumber: "",
  });

  // 🔹 Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 🔹 Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await saveBusiness(formData);

    if (res?.success) {
      navigate("/v3"); // ✅ next step
    }
  };

  return (
    <div className="antialiased overflow-x-hidden min-h-screen bg-white text-black font-[Manrope]">

      {/* Header */}
      <header className="w-full pt-10 pb-6 px-8 flex justify-between items-center border-b border-black/5 bg-white/70 backdrop-blur-xl sticky top-0 z-50">
        <div>
          <div className="text-2xl font-black tracking-tighter uppercase">
            AhaarMitra
          </div>
          <div className="h-0.5 w-full bg-gradient-to-r from-blue-500 to-transparent"></div>
        </div>

        <button
          onClick={() => navigate("/v1")}
          className="text-sm font-bold text-black/40 hover:text-black transition-colors flex items-center gap-2"
        >
          ← Back to Personal Details
        </button>
      </header>

      {/* Main */}
      <main className="min-h-[calc(100vh-160px)] grid grid-cols-1 lg:grid-cols-2">

        {/* Left Section */}
        <section className="p-8 lg:p-20 flex flex-col justify-center bg-gradient-to-br from-blue-100 via-transparent to-transparent border-r border-black/5">
          <div className="max-w-xl">

            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              Partner Program
            </span>

            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-8 leading-[1.1]">
              Tell us about your{" "}
              <span className="text-blue-600">Culinary Hub.</span>
            </h1>

            <p className="text-black/60 text-lg mb-12">
              Setting up your professional presence helps us connect you with the right audience.
            </p>

          </div>
        </section>

        {/* Right Section */}
        <section className="p-8 lg:p-20 flex flex-col items-center justify-center">
          <div className="max-w-md w-full">

            <div className="mb-12">
              <h2 className="text-3xl font-black mb-1">Business Details</h2>
              <p className="text-black/40 text-sm">Step 2 of 3</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">

              <input
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-2xl bg-gray-100 border border-black/10"
                placeholder="Business Name"
                required
              />

              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-2xl bg-gray-100 border border-black/10"
                required
              >
                <option value="">Select business type</option>
                <option value="Home Kitchen">Home Kitchen</option>
                <option value="Restaurant">Restaurant</option>
                <option value="Cloud Kitchen">Cloud Kitchen</option>
              </select>

              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-2xl bg-gray-100 border border-black/10 min-h-[100px]"
                placeholder="Address"
                required
              />

              <input
                name="gstNumber"
                value={formData.gstNumber}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-2xl bg-gray-100 border border-black/10"
                placeholder="GST Number"
              />

              <input
                name="fssaiNumber"
                value={formData.fssaiNumber}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-2xl bg-gray-100 border border-black/10"
                placeholder="FSSAI Number"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black uppercase hover:bg-blue-700 transition disabled:opacity-50"
              >
                {loading ? "Saving..." : "Next Step"}
              </button>

            </form>

          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="w-full py-10 px-8 border-t border-black/5 bg-white text-center text-black/50 text-xs">
        © 2024 AhaarMitra
      </footer>

    </div>
  );
};

export default BusinessDetails2;