import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import LandingImage from "../assets/LandingImage.png";
import ahaarmitraLogo from "../../assets/AhaarMitraLogo.png";
import LandingNav from "../components/LandingNav";
import Footer from "../components/Footer";

const vendors = [
  {
    id: 1,
    name: "Shree Tiffin Services",
    rating: "4.9",
    price: "₹99",
    subs: "1,248",
    badges: [
      { label: "Top Rated", color: "bg-amber-500 text-black" },
      { label: "Pure Veg", color: "bg-black text-white" },
    ],
    img: "https://t4.ftcdn.net/jpg/09/14/04/91/360_F_914049154_beKtlm5YbwsysvupFSQoNvEI9FuVq1hC.jpg",
  },
  {
    id: 2,
    name: "Urban Nutri-Bowls",
    rating: "4.8",
    price: "₹149",
    subs: "842",
    badges: [{ label: "Nutritionist Plus", color: "bg-blue-500 text-white" }],
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ3JZIL2VyoUmdoQ-pqft4aLQl0MjVCq8jVA&s",
  },
  {
    id: 3,
    name: "Gharam Rasoi",
    rating: "4.7",
    price: "₹179",
    subs: "2,105",
    badges: [{ label: "Fastest Delivery", color: "bg-green-500 text-white" }],
    img: LandingImage,
  },
  {
    id: 3,
    name: "Swaad Ghar Tiffins",
    rating: "4.7",
    price: "₹179",
    subs: "1,105",
    badges: [{ label: "Fastest Delivery", color: "bg-green-500 text-white" }],
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvBP2wpne32lKxUkchKIe3u_9DhtQ5iGchfA&s",
  },
];

export default function HomePage() {
  return (
    <>
      <LandingNav />
      <ScrollZoomHero />
      <WhyChoose />

      {/* 🔥 Popular Kitchens Header */}
      <section className="bg-white px-6 pt-16 pb-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900">
            Popular Kitchens
          </h2>
          <Link to="/explore">
            <button className="flex items-center gap-1 text-sm font-bold text-gray-600 hover:text-amber-500 transition">
              Explore More
              <span className="material-symbols-outlined text-lg">
                arrow_forward
              </span>
            </button>
          </Link>
        </div>
      </section>

      {/* 🔥 Vendor Cards */}
      <section className="bg-white py-6 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 justify-items-center">
          {vendors.map((v) => (
            <VendorCard key={v.id} vendor={v} />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

/* ================= HERO ================= */

function ScrollZoomHero() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1.6]);
  const blur = useTransform(scrollYProgress, [0, 1], ["0px", "8px"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.3, 0.7]);

  const textOpacity = useTransform(
    scrollYProgress,
    [0.1, 0.5, 0.65],
    [1, 0.2, 0],
    { clamp: true },
  );

  const textY = useTransform(scrollYProgress, [0, 0.7], [0, -320], {
    clamp: true,
  });

  return (
    <section ref={ref} className="h-[200vh] relative">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background */}
        <motion.img
          src={LandingImage}
          alt="tiffin"
          className="absolute w-full h-full object-cover"
          style={{
            scale,
            filter: blur,
            rotate: "1.5deg",
          }}
        />

        {/* Overlay */}
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-black"
        />

        {/* Content */}
        <motion.div
          style={{
            opacity: textOpacity,
            y: textY,
          }}
          className="absolute inset-0 flex flex-col items-center justify-center -translate-y-16 md:-translate-y-24 text-center px-4 top-32"
        >
          <img
            src={ahaarmitraLogo}
            alt="Ahaar Mitra"
            className="w-[610px] md:w-[810px] lg:w-[930px] object-contain"
          />
          <div className="h-40"></div>
          <div className="mt-4 px-6 py-4 rounded-xl bg-[#FFE0B2]/60 backdrop-blur-md text-center">
            {/* Text */}
            <p className="text-white text-sm md:text-base max-w-xl mx-auto leading-tight font-semibold">
              Har din ghar jaisa swaad — connecting home chefs with people who
              crave authentic meals.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mt-4 justify-center items-center">
              <button className="px-6 py-3 bg-white text-black font-bold rounded-xl text-sm uppercase tracking-widest hover:bg-amber-500 transition-all">
                Login
              </button>
              <Link to="/11">
                <button className="px-6 py-3 bg-white text-black font-bold rounded-xl text-sm uppercase tracking-widest hover:bg-amber-500 transition-all">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ================= WHY CHOOSE ================= */

function WhyChoose() {
  const points = [
    {
      title: "Flexibility",
      desc: "Choice of plans, meals, and delivery preferences",
    },
    {
      title: "Trust ",
      desc: "Verified vendors and transparent system for both sides",
    },
    {
      title: "Scalability ",
      desc: "Supports growth for vendors and long-term usage for customers",
    },
    {
      title: "Efficiency",
      desc: "Saves time for users and simplifies operations for vendors",
    },
    {
      title: "Accessibility ",
      desc: "Available anytime, anywhere with simple platform access",
    },
  ];

  const [centerIndex, setCenterIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCenterIndex((prev) => (prev + 1) % points.length);
    }, 2250); // 🔥 10% faster (2500 → 2250)

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-16 pb-5 px-6 text-center overflow-hidden">
      <div>
        <h2 className="text-3xl md:text-4xl font-black text-gray-900">
          Why Choose Ahaar Mitra?
        </h2>

        <p className="text-gray-500 text-sm md:text-base mt-3">
          Bringing home-style meals closer to you — fresh, affordable, and made
          with care.
        </p>
      </div>

      <div className="relative flex justify-center items-center h-[240px]">
        {points.map((item, index) => {
          let position = index - centerIndex;

          if (position < -2) position += points.length;
          if (position > 2) position -= points.length;

          const isCenter = position === 0;

          return (
            <motion.div
              key={index}
              animate={{
                x: position * 400, // 🔥 increased gap (350 → 400)
                scale: isCenter ? 1.1 : 0.88,
                opacity: Math.abs(position) > 1 ? 0 : 0.5,
              }}
              transition={{
                type: "spring",
                stiffness: 140, // 🔥 slightly faster animation
                damping: 16,
              }}
              className="absolute w-[310px] md:w-[350px] p-7 rounded-2xl border border-gray-200 bg-white shadow-md"
            >
              <h3
                className={`text-xl font-black mb-2 ${
                  isCenter ? "text-black" : "text-gray-400"
                }`}
              >
                {item.title}
              </h3>

              <p
                className={`text-sm ${
                  isCenter ? "text-gray-700" : "text-gray-400"
                }`}
              >
                {item.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

/* ================= TEXT SCROLL (optional) ================= */

function VendorCard({ vendor }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="bg-white rounded-[1rem] overflow-hidden flex flex-col border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group w-full max-w-[300px]">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={vendor.img}
          alt={vendor.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
          {vendor.badges?.map((b) => (
            <span
              key={b.label}
              className={`${b.color} px-2.5 py-1 rounded-full text-[10px] font-black uppercase`}
            >
              {b.label}
            </span>
          ))}
        </div>

        {/* Favourite */}
        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/80 backdrop-blur border border-gray-200 flex items-center justify-center"
        >
          <span
            className={`material-symbols-outlined text-lg ${
              liked ? "text-red-500" : "text-gray-400"
            }`}
            style={liked ? { fontVariationSettings: "'FILL' 1" } : {}}
          >
            favorite
          </span>
        </button>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Name + Rating */}
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-black text-black leading-tight">
            {vendor.name}
          </h3>

          <div className="flex items-center gap-1 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
            <span className="material-symbols-outlined text-amber-500 text-sm">
              star
            </span>
            <span className="text-xs font-bold text-amber-600">
              {vendor.rating}
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 border-y border-gray-100 py-4 mb-4">
          <div>
            <p className="text-[10px] font-bold uppercase text-gray-400">
              Price / Meal
            </p>
            <p className="text-lg font-black text-black">{vendor.price}</p>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase text-gray-400">
              Active Now
            </p>
            <p className="text-lg font-black text-amber-500">{vendor.subs}</p>
          </div>
        </div>

        {/* Button */}
        <Link to="/1">
          <button className="w-full bg-black text-white font-bold py-3 rounded-xl hover:bg-amber-500 transition-all text-xs uppercase tracking-widest">
            View Meal Plans
          </button>
        </Link>
      </div>
    </div>
  );
}

function TextScroll() {
  const ref = useRef(null);
  const { scrollY } = useScroll();

  const lines = [
    { text: "CREATIVE", reverse: false },
    { text: "DESIGN", reverse: true },
  ];

  return (
    <section ref={ref} className="bg-white py-16 overflow-hidden">
      <div className="flex flex-col gap-4">
        {lines.map((line, index) => {
          const direction = line.reverse ? 1 : -1;
          const x = useTransform(scrollY, [0, 1000], [0, direction * 250]);

          return (
            <div key={index} className="overflow-hidden">
              <motion.div
                style={{ x }}
                className="flex items-center gap-8 py-2 will-change-transform"
              >
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="flex items-center gap-8 shrink-0">
                    <span className="text-[6vw] md:text-[4.5vw] font-black text-orange-500 whitespace-nowrap">
                      {line.text}
                    </span>

                    <span className="text-[6vw] md:text-[4.5vw] font-black text-black whitespace-nowrap">
                      {line.text}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
