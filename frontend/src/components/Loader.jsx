import React, { useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../../assets/AhaarMitraLogo.svg";

const Loader = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 3200);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-white z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div className="relative flex flex-col items-center justify-center">
        {/* LOGO */}
        <motion.img
          src={logo}
          alt="AhaarMitra Logo"
          className="w-[220px] md:w-[300px]"
          initial={{ scale: 0.6, opacity: 0, y: 0 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1], // smooth easeOutExpo feel
          }}
        />
        {/* UNDERLINE (CLEAN GROW) */}
        <motion.div
          className="h-[3px] w-[70%] bg-[#ff8c1a] origin-left rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 1.5,
            delay: 0.8,
            ease: [0.65, 0, 0.35, 1], // smooth professional easing
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Loader;
