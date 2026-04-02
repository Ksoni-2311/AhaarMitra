import React, { useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../../assets/AhaarMitraLogo.svg";

const Loader = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2720); // synced with animation

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-white z-50"
      
      // 🔥 smooth entry
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}

      // 🔥 smooth exit (main fix)
      exit={{ 
        opacity: 0,
        scale: 1.02,
        filter: "blur(6px)"
      }}

      transition={{ 
        duration: 0.6,
        ease: "easeInOut"
      }}
    >
      <motion.div className="relative flex flex-col items-center justify-center">
        
        {/* LOGO */}
        <motion.img
          src={logo}
          alt="AhaarMitra Logo"
          className="w-[220px] md:w-[300px]"
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.85,
            ease: [0.22, 1, 0.36, 1],
          }}
        />

        {/* UNDERLINE */}
        <motion.div
          className="h-[3px] w-[70%] bg-[#ff8c1a] origin-left rounded-full mt-3"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 1.275,
            delay: 0.68,
            ease: [0.65, 0, 0.35, 1],
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Loader;