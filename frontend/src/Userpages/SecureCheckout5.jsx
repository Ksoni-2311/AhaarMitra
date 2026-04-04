import { useState } from "react";
import { Link } from "react-router-dom";
const paymentMethods = [
  {
    id: "upi",
    label: "UPI Transfer",
    subtitle: "Google Pay, PhonePe, Paytm",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 10h20" />
        <circle cx="8" cy="15" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    id: "card",
    label: "Credit / Debit Card",
    subtitle: "Visa, Mastercard, RuPay",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 10h20" />
        <path d="M6 15h4" />
      </svg>
    ),
  },
  {
    id: "netbanking",
    label: "Net Banking",
    subtitle: "All major Indian banks",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M3 21h18" />
        <path d="M3 10h18" />
        <path d="M5 6l7-3 7 3" />
        <path d="M7 10v11" />
        <path d="M11 10v11" />
        <path d="M13 10v11" />
        <path d="M17 10v11" />
      </svg>
    ),
  },
];

export default function SecureCheckout5() {
  const [selected, setSelected] = useState("upi");

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Google Font import */}
      <style>{`
        // @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800;900&display=swap');

        .payment-card {
          transition: all 0.25s ease;
        }
        .payment-card:hover {
          border-color: rgba(217, 119, 6, 0.35);
          background-color: rgba(245, 158, 11, 0.02);
        }
        .payment-card.selected {
          border-color: #D97706;
          background-color: rgba(245, 158, 11, 0.04);
        }
        .radio-inner {
          transform: scale(0);
          transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          background-color: #D97706;
          border-radius: 9999px;
        }
        .radio-inner.active {
          transform: scale(1);
        }
        .pay-btn {
          transition: all 0.2s ease;
        }
        .pay-btn:hover {
          background-color: #B45309;
        }
        .pay-btn:active {
          transform: scale(0.99);
        }
      `}</style>

      {/* Navbar */}
      {/* <nav
        className="fixed top-0 w-full z-50 border-b h-20 px-6 flex justify-between items-center"
        style={{
          backgroundColor: "rgba(255,255,255,0.85)",
          backdropFilter: "blur(12px)",
          borderColor: "rgba(0,0,0,0.08)",
        }}
      >
        <div className="flex items-center gap-4">
          <button className="md:hidden text-zinc-800">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
          </button>
          <div className="text-2xl font-black text-zinc-900 tracking-tighter uppercase">
            AhaarMitra
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 font-bold tracking-tight">
          <a href="#" className="text-zinc-400 hover:text-zinc-800 transition-colors text-sm">
            Support
          </a>
          <div className="w-px h-6 bg-zinc-200" />
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-amber-500">
              <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clipRule="evenodd" />
            </svg>
            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">
              Secure Checkout
            </span>
          </div>
        </div>
      </nav> */}

      {/* Main */}
      <main className="flex-1 pt-10 pb-20 px-6">
        <div className="max-w-xl mx-auto">
          {/* Header */}
          <div className="mb-6">
            <Link
              to="/4"
              className="inline-flex items-center gap-2 text-sm font-bold text-zinc-500 hover:text-zinc-900 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back
            </Link>
          </div>
          <div className="text-center mb-10">
            <h1 className="text-4xl font-black tracking-tight mb-3 text-zinc-900">
              Express Checkout
            </h1>
            <p className="text-[11px] font-black uppercase tracking-widest text-zinc-400">
              Select payment method
            </p>
          </div>

          {/* Amount box */}
          <div
            className="rounded-lg p-6 mb-6 text-center border"
            style={{
              backgroundColor: "rgba(0,0,0,0.025)",
              borderColor: "rgba(0,0,0,0.07)",
            }}
          >
            <div className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] mb-1">
              Total Amount
            </div>
            <div className="text-3xl font-black text-zinc-900">₹3,500.00</div>
          </div>

          {/* Payment options */}
          <div className="space-y-3">
            {paymentMethods.map((method) => {
              const isSelected = selected === method.id;
              return (
                <label
                  key={method.id}
                  className={`payment-card block relative cursor-pointer rounded-lg p-5 border ${isSelected ? "selected" : "border-zinc-200 bg-white"}`}
                  onClick={() => setSelected(method.id)}
                >
                  <input
                    type="radio"
                    name="payment"
                    className="hidden"
                    checked={isSelected}
                    onChange={() => setSelected(method.id)}
                  />
                  <div className="flex items-center justify-between">
                    {/* Icon + text */}
                    <div className="flex items-center gap-4">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center border"
                        style={{
                          backgroundColor: isSelected
                            ? "rgba(245, 158, 11, 0.07)"
                            : "rgba(0,0,0,0.03)",
                          borderColor: isSelected
                            ? "rgba(217,119,6,0.25)"
                            : "rgba(0,0,0,0.07)",
                          color: isSelected ? "#D97706" : "#71717a",
                        }}
                      >
                        {method.icon}
                      </div>
                      <div>
                        <h3 className="text-base font-black tracking-tight leading-tight text-zinc-900">
                          {method.label}
                        </h3>
                        <p className="text-[11px] font-bold uppercase tracking-widest mt-0.5 text-zinc-400">
                          {method.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Radio */}
                    <div
                      className="w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0"
                      style={{
                        borderColor: isSelected ? "#D97706" : "#d4d4d8",
                      }}
                    >
                      <div
                        className={`radio-inner w-2.5 h-2.5 ${isSelected ? "active" : ""}`}
                      />
                    </div>
                  </div>
                </label>
              );
            })}
          </div>

          {/* CTA + trust section */}
          <div className="mt-8 space-y-6">
            <button
              className="pay-btn w-full text-white font-black py-5 rounded-lg text-[13px] uppercase tracking-[0.2em] flex items-center justify-center gap-3"
              style={{
                backgroundColor: "#D97706",
                boxShadow: "0 8px 24px rgba(217,119,6,0.25)",
              }}
            >
              Pay ₹3,500 Securely
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* Trust indicators */}
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-2 text-zinc-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-[10px] font-black uppercase tracking-widest">
                  PCI-DSS Compliant Encryption
                </span>
              </div>

              {/* Card brand logos (text placeholder — same grayscale treatment) */}
              <div className="flex gap-5 opacity-30 grayscale">
                {/* Visa wordmark */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 60 20"
                  className="h-3.5 fill-zinc-900"
                >
                  <text
                    x="0"
                    y="16"
                    fontFamily="Manrope,sans-serif"
                    fontWeight="900"
                    fontSize="16"
                    letterSpacing="1"
                  >
                    VISA
                  </text>
                </svg>
                {/* Mastercard circles */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 36 22"
                  className="h-3.5"
                >
                  <circle cx="12" cy="11" r="11" fill="#EB001B" />
                  <circle cx="24" cy="11" r="11" fill="#F79E1B" />
                  <path
                    d="M18 4.8a11 11 0 0 1 0 12.4A11 11 0 0 1 18 4.8Z"
                    fill="#FF5F00"
                  />
                </svg>
                {/* UPI text */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 40 20"
                  className="h-3.5 fill-zinc-900"
                >
                  <text
                    x="0"
                    y="15"
                    fontFamily="Manrope,sans-serif"
                    fontWeight="900"
                    fontSize="14"
                    letterSpacing="0.5"
                  >
                    UPI
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      {/* <footer
        className="w-full py-8 px-6 md:px-12 border-t"
        style={{ borderColor: "rgba(0,0,0,0.07)", backgroundColor: "#fafafa" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-300">
            © 2024 AhaarMitra Secure Gateway
          </div>
          <div className="flex gap-8">
            {["Privacy", "Terms", "Help"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-zinc-800 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer> */}
    </div>
  );
}
