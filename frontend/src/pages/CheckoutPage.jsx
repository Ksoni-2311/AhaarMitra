import React from "react";

const CheckoutPage = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white text-gray-900 font-[Manrope]">

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/40 backdrop-blur-sm">
        <div className="bg-white w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl flex flex-col">

          {/* Header */}
          <div className="sticky top-0 bg-white border-b px-8 py-5 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <button className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100">
                ✕
              </button>
              <h2 className="text-lg font-black uppercase">
                Checkout & Confirmation
              </h2>
            </div>

            <div className="flex items-center gap-2 text-green-600 bg-green-100 px-4 py-1.5 rounded-full text-xs font-bold">
              🔒 Secure Payment
            </div>
          </div>

          {/* Content */}
          <div className="p-8 grid grid-cols-12 gap-10">

            {/* LEFT */}
            <div className="col-span-7 space-y-10">

              {/* Address */}
              <section>
                <h3 className="font-black mb-4">Delivery Address</h3>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-5 rounded-xl border-2 border-black shadow-sm bg-gray-50">
                    <p className="text-xs font-bold text-gray-500 mb-2">HOME</p>
                    <p className="text-sm font-semibold">
                      42, Silver Oak Residency, Bangalore
                    </p>
                  </div>

                  <div className="p-5 rounded-xl border border-dashed text-center text-gray-400 hover:bg-gray-50 cursor-pointer">
                    + Add Address
                  </div>
                </div>
              </section>

              {/* Payment */}
              <section>
                <h3 className="font-black mb-4">Payment Method</h3>

                <div className="space-y-3">
                  {[
                    "Card Payment",
                    "UPI / QR",
                    "Net Banking",
                    "Wallet",
                    "Cash on Delivery"
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="p-5 border rounded-xl hover:shadow-md transition cursor-pointer"
                    >
                      <p className="font-semibold">{item}</p>
                    </div>
                  ))}
                </div>
              </section>

            </div>

            {/* RIGHT */}
            <div className="col-span-5">

              <div className="bg-gray-50 p-6 rounded-2xl shadow-md space-y-6">

                {/* Summary */}
                <div>
                  <h4 className="text-sm text-gray-500 mb-2">
                    Trial Summary
                  </h4>

                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <p className="text-xs text-amber-600 font-bold">
                      CONFIRMED SLOT
                    </p>
                    <h3 className="font-black">Dinner Service</h3>
                    <p className="text-sm text-gray-500">
                      Nov 14 • 7:00 PM
                    </p>
                  </div>
                </div>

                {/* Price */}
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Base Price</span>
                    <span>₹99</span>
                  </div>

                  <div className="flex justify-between text-green-600">
                    <span>Delivery</span>
                    <span>Free</span>
                  </div>

                  <div className="flex justify-between">
                    <span>GST</span>
                    <span>₹4.95</span>
                  </div>

                  <div className="flex justify-between pt-3 border-t font-bold text-lg">
                    <span>Total</span>
                    <span className="text-amber-600">₹103.95</span>
                  </div>
                </div>

                {/* Button */}
                <button className="w-full bg-black text-white py-4 rounded-xl font-bold hover:bg-gray-800 transition">
                  Confirm & Pay →
                </button>

              </div>

            </div>

          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white border-b px-12 h-20 flex items-center justify-between shadow-sm">
        <h1 className="font-black text-lg">AhaarMitra</h1>
        <div className="flex gap-8 text-sm">
          <span className="border-b-2 border-black">Explore</span>
          <span className="text-gray-500">Subscriptions</span>
          <span className="text-gray-500">Orders</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="h-[500px] mt-20 relative">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMBmIchnkIkoQGR77HPKNPe8Mi87AWVXdlxtSOo0_aqUzxSiao8g8wNuB6MLnue5hBiJqoCqYqYf_QwyAx8srHTmiWQLzDoSpBgjo79alSoDbXQZ1BxnJSwyVy8He4b-CbkpWuTgncU4YcUKtpcr-pZOyPo1hbVYNmqrmfArc3zZZuFPXAiqx6A5bpLRmZEtfGqskXEk_ur5KQcptvlknPuRIA86F4SmByElS4qXuo1rcrzcBC2SHCGJ1fTtaHQtFIc92CaW3sgiyX"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

        <div className="absolute bottom-10 left-12 text-white">
          <h1 className="text-5xl font-black">
            Shree Tiffin Services
          </h1>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t text-center text-gray-500 text-sm">
        © 2024 AhaarMitra
      </footer>
    </div>
  );
};

export default CheckoutPage;