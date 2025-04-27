import React from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiArrowUpRight } from "react-icons/fi";

const SmallCard = ({ 
  title = "Cathedral Heights", 
  image = "/images/hero-bg-2.png", 
  backgroundColor = "bg-gray-400/40",
  onClick
}) => {
  return (
    <motion.div
      className="w-full max-w-xs relative cursor-pointer group "
      onClick={onClick}
    >
      <div 
        className={`relative overflow-hidden backdrop-blur-xl shadow-lg ${backgroundColor} border-2 border-white transition-all duration-300 group-hover:shadow-xl`}
        style={{
          WebkitClipPath:
          "polygon(0 0, 83% 0, 83% 35%, 100% 35%, 100% 100%, 0% 100%)",
        clipPath:
          "polygon(0 0, 83% 0, 83% 35%, 100% 35%, 100% 100%, 0% 100%)",
          // borderRadius: '24px',
          padding: '6px'
        }}
      >
        <div className="flex gap-4 items-end">
          {/* Left side - Image */}
          <div className="w-28 h-36 rounded-3l overflow-hidden flex-shrink-0 shadow-md mr4">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/112x112?text=Location";
              }}
            />
          </div>
          
          {/* Right side - Location info - ensure it stays within clipPath */}
          <div className="flex-1 pr-8 pb-2">
            <div className="flex flex-col items-start">
              {/* Location marker circle with boundary */}
              <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center mb-2">
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>
              
              {/* Location name */}
              <h4 className="font-medium text-xl text-white">{title}</h4>
            </div>
          </div>
        </div>
      </div>
      
      {/* Arrow icon positioned in the cutout corner */}
      <div className="absolute top-0 right-0 w-12 h-12 border-2 border-white bg-white/20 backdrop-blur-md flex items-center justify-center shadow-lg transition-all duration-300 group-hover:bg-white/30">
        <FiArrowUpRight className="text-white" size={20} />
      </div>
    </motion.div>
  );
};

export default SmallCard;
