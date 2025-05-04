'use client';
import React from 'react';
import { motion } from 'framer-motion';

const Heading = ({ title, subtitle, center, textColor }) => {
  const titleChars = title.split('');
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.2
      }
    }
  };

  const charVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      rotate: 20 
    },
    visible: { 
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100
      }
    }
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: { 
      scaleX: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className={`relative py-8 px-4 md:px-8 ${center ? 'text-center' : ''}`}>
      <div className="max-w-4xl mx-auto relative">
        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute -top-4 left-0 w-8 h-8 border-t-4 border-l-4 border-primary"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute -bottom-4 right-0 w-8 h-8 border-b-4 border-r-4 border-primary"
        />

        {/* Title Animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative z-10"
        >
          <div className="flex items-center justify-center mb-4 flex-wrap">
            {titleChars.map((char, index) => (
              <motion.span
                key={index}
                variants={charVariants}
                className={`text-3xl md:text-4xl lg:text-5xl font-bold ${textColor ? textColor : "text-primary"} inline-block`}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </div>

          {/* Animated Line */}
          <motion.div
            variants={lineVariants}
            className="h-1 w-16 md:w-24 bg-secondary mx-auto my-4"
          />

          {/* Subtitle with fade-up animation */}
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-base md:text-lg lg:text-xl text-primary/60 max-w-2xl mx-auto mt-4"
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Heading;
