import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useVendorStore from "../stores/vendor.store.js";

const PayoutSetup3 = () => {
  const navigate = useNavigate();
  const { saveBank, loading } = useVendorStore();

  const [formData, setFormData] = useState({
    accountHolder: "",
    bankName: "",
    accountNumber: "",
    ifsc: "",
  });

  // 🔹 Handle Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 🔹 Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await saveBank(formData);

    if (res?.success) {
      navigate("/v4"); // ✅ final step
    }
  };

  return (
    <div className="antialiased min-h-screen bg-white text-black font-[Manrope]">

      {/* Header */}
      <header className="w-full pt-10 pb-6 px-8 flex justify-between items-center border-b">
        <div>
          <div className="text-2xl font-black uppercase">AhaarMitra</div>
        </div>

        <button
          onClick={() => navigate("/v2")}
          className="text-sm font-bold text-black/40 hover:text-black"
        >
          ← Back to Business Details
        </button>
      </header>

      {/* Main */}
      <main className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-100px)]">

        {/* Left */}
        <section className="p-8 lg:p-20 flex flex-col justify-center bg-blue-50">
          <h1 className="text-5xl font-black mb-6">
            Get paid <span className="text-blue-600">seamlessly.</span>
          </h1>
          <p className="text-black/60">
            Link your bank account to start receiving earnings securely.
          </p>
        </section>

        {/* Right */}
        <section className="p-8 lg:p-20 flex items-center justify-center">
          <div className="max-w-md w-full">

            <h2 className="text-3xl font-black mb-6">Payout Account</h2>

            <form onSubmit={handleSubmit} className="space-y-6">

              <input
                name="accountHolder"
                value={formData.accountHolder}
                onChange={handleChange}
                placeholder="Account Holder Name"
                className="w-full px-5 py-4 rounded-2xl bg-gray-100 border"
                required
              />

              <input
                name="bankName"
                value={formData.bankName}
                onChange={handleChange}
                placeholder="Bank Name"
                className="w-full px-5 py-4 rounded-2xl bg-gray-100 border"
                required
              />

              <input
                name="accountNumber"
                value={formData.accountNumber}
                onChange={handleChange}
                placeholder="Account Number"
                className="w-full px-5 py-4 rounded-2xl bg-gray-100 border"
                required
              />

              <input
                name="ifsc"
                value={formData.ifsc}
                onChange={handleChange}
                placeholder="IFSC Code"
                className="w-full px-5 py-4 rounded-2xl bg-gray-100 border"
                required
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black uppercase hover:bg-blue-700 disabled:opacity-50"
              >
                {loading ? "Saving..." : "Securely Finish Setup"}
              </button>

            </form>

          </div>
        </section>

      </main>
    </div>
  );
};

export default PayoutSetup3;