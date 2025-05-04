import React from "react";
import { motion } from "framer-motion";
import SmallCard from "../../layout/SmallCard";

const HeroSectionRight = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="md:h-[calc(100vh-6rem)] h-[70vh] w-full lg:w-1/2 rounded-xl overflow-hidden shadow-2xl relative group"
      style={{
        backgroundImage: "url(/images/hero-bg-2.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40" />

      {/* Floating Text Elements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
        className="absolute top-24 md:top-32 right-6 md:right-12 max-w-[280px] transform hover:scale-105 transition-transform duration-300"
      >
        <div className="bg-white/10 md:block hidden backdrop-blur-md rounded-2xl p-5 shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-white/20">
          <p className="text-white font-semibold text-lg md:text-xl leading-snug">
            Your Real Estate Investment Partner
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
        className="absolute bottom-32 md:bottom-40 right-6 md:right-12 max-w-[240px] transform hover:scale-105 transition-transform duration-300"
      >
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-white/20">
          <p className="text-white font-semibold text-lg leading-snug">
            Building Dreams Since 2010
          </p>
        </div>
      </motion.div>

      {/* Property Feature Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="absolute top-6 left-6 md:top-8 md:left-8 transform hover:scale-105 transition-transform duration-300"
      >
        <SmallCard />
      </motion.div>
    </motion.div>
  );
};

export default HeroSectionRight;
