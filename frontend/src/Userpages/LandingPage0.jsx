import React from "react";

export default function LandingPage0() {
  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* HEADER */}
      {/* <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur shadow-sm">
        <div className="flex justify-between items-center px-6 md:px-12 h-20 max-w-7xl mx-auto">
          <h1 className="text-2xl font-extrabold text-[#fe8627]">
            AhaarMitra
          </h1>

          <nav className="hidden md:flex gap-8 font-medium">
            <span className="text-[#fe8627] border-b-2 border-[#fe8627]">
              Find Meals
            </span>
            <span className="text-gray-500 hover:text-[#fe8627]">
              How it Works
            </span>
            <span className="text-gray-500 hover:text-[#fe8627]">
              Meal Plans
            </span>
            <span className="text-gray-500 hover:text-[#fe8627]">
              Become a Vendor
            </span>
          </nav>

          <div className="flex gap-4 items-center">
            <button className="hidden sm:block text-gray-500">
              Login
            </button>
            <button className="bg-[#fe8627] text-white px-6 py-2 rounded-full font-semibold">
              Join Now
            </button>
          </div>
        </div>
      </header> */}

      {/* HERO */}
      <section className="pt-24 px-6 md:px-12 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div className="space-y-6">
          <span className="bg-orange-100 text-[#fe8627] px-4 py-1 rounded-full text-xs font-bold">
            AUTHENTIC HOME COOKING
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Ghar jaisa khana, <span className="text-[#fe8627]">ab har din</span>
          </h1>

          <p className="text-gray-500 text-lg">
            Affordable tiffin & meal plans near you. Experience the warmth of
            home-style food delivered fresh to your doorstep.
          </p>

          {/* SEARCH */}
          <div className="flex bg-white border rounded-full shadow p-2 max-w-md">
            <input
              placeholder="Enter your location..."
              className="flex-1 px-4 outline-none"
            />
            <button className="bg-[#fe8627] text-white px-6 py-2 rounded-full">
              Find Meals
            </button>
          </div>

          {/* USERS */}
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <div className="flex -space-x-2">
              <div
                className="w-8 h-8 rounded-full"></div>
                src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"
              <div/>
              <img
                className="w-8 h-8 rounded-full"
                src="https://i.pravatar.cc/100?img=2"
              />
              <img
                className="w-8 h-8 rounded-full bg-gray-100"
                src="https://i.pravatar.cc/100?img=3"
              />
            </div>
            <span>Joined by 10,000+ happy eaters</span>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hidden lg:block">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeBEHR26Mhbnm5yiG_SgFaAR_60prKNmUt_8bdSJrucr82pdeEYmo4peiKBjaJezRa8LhiNIZShc_hFdBpHoxDH4Uh1zmJ1n2HLWsb3dKWVsWgoO-UQLCU5wOgEqCMrr6_GdN7VdMhOblfT417Z14NqFYcuaA1PqTWxRbN9zkxnOqvEgLciQBFo916e30qqWyTY90Ha9tlRaduILazFf74rwKDcrMjkCQ_s8Icu-bKDbUSJbpvW4u2NlxYChxZUZ_iWqrTLRXJZnEd"
            alt="Meal"
            className="rounded-3xl shadow-xl w-full h-full object-cover"
          />
        </div>
      </section>

      {/* WHY SECTION */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why choose AhaarMitra?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#fe8627] text-white p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-2">Home-style food</h3>
            <p className="opacity-90">
              No preservatives, fresh ingredients, just like mom's cooking.
            </p>
          </div>

          <div className="border p-8 rounded-2xl">
            <h3 className="font-bold text-lg mb-2">Affordable pricing</h3>
            <p className="text-gray-500">Save more with subscription plans.</p>
          </div>

          <div className="border p-8 rounded-2xl">
            <h3 className="font-bold text-lg mb-2">Reliable delivery</h3>
            <p className="text-gray-500">
              Fast and on-time delivery every day.
            </p>
          </div>
        </div>
      </section>

      {/* POPULAR KITCHENS */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Popular Kitchens</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Auntie's Kitchen", price: "₹120/day" },
            { name: "Healthy Tiffins", price: "₹180/day" },
            { name: "Ghar Ki Rasoi", price: "₹140/day" },
          ].map((item, i) => (
            <div key={i} className="border rounded-2xl overflow-hidden">
              <img
                src={`https://picsum.photos/400/300?random=${i}`}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">{item.name}</h3>
                <p className="text-gray-500 text-sm mb-4">
                  Home-style meals with authentic taste.
                </p>

                <div className="flex justify-between items-center">
                  <span className="font-bold">{item.price}</span>
                  <button className="bg-[#fe8627] text-white px-4 py-2 rounded-full text-sm">
                    View Plans
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto pb-20">
        <div className="bg-black text-white rounded-3xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to taste the{" "}
            <span className="text-[#fe8627]">home comfort?</span>
          </h2>

          <p className="text-gray-400 mb-8">
            Join thousands enjoying home-style meals daily.
          </p>

          <div className="flex justify-center gap-4">
            <button className="bg-[#fe8627] px-6 py-3 rounded-full">
              Browse Meals
            </button>
            <button className="border px-6 py-3 rounded-full">
              Join as Vendor
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t py-10 text-center text-gray-500 text-sm">
        © 2024 AhaarMitra. All rights reserved.
      </footer>
    </div>
  );
}
