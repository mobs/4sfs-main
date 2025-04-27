import React from "react";
import { motion } from 'framer-motion';
import { FiMapPin, FiDollarSign } from 'react-icons/fi';
import Input from '../../ui/Input';
import Select from '../../ui/Select';
import Button from '../../ui/Button';

const HeroSectionLeft = () => {
    const fadeInUp = {
        initial: { y: 60, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.6 }
    };

    const priceRangeOptions = [
        { value: '0-1000', label: '$0 - $1,000' },
        { value: '1000-2000', label: '$1,000 - $2,000' },
        { value: '2000+', label: '$2,000+' }
    ];

    const propertyTypeOptions = [
        { value: 'apartment', label: 'Apartment' },
        { value: 'house', label: 'House' },
        { value: 'villa', label: 'Villa' }
    ];
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="md:h-full w-full lg:w-1/2 rounded-xl overflow-hidden shadow-lg relative"
      style={{
        backgroundImage: "url(/images/hero-bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />

      {/* Left Content */}
      <motion.div
        initial="initial"
        animate="animate"
        className="relative h-full w-full flex flex-col justify-center items-center lg:items-start space-y-8 text-center lg:text-left p-8 lg:p-12"
      >
        <motion.h1
          {...fadeInUp}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] max-w-xl"
        >
          Find Your Dream Home With Us
        </motion.h1>

        <motion.p {...fadeInUp} className="text-lg text-white/80 max-w-xl">
          Your journey to the perfect home starts here. We help you find your
          dream property with exceptional service and expertise.
        </motion.p>

        {/* Search Box */}
        <motion.div
          {...fadeInUp}
          className="w-full max-wxl mt-8 p-5 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg relative"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-5">
              <Input
                icon={<FiMapPin size={20} className="text-black" />}
                placeholder="Search location..."
              />
            </div>
            <div className="md:col-span-3 relative" style={{ zIndex: 50 }}>
              <Select
                icon={<FiDollarSign size={20} className="text-black" />}
                placeholder="Range"
                options={priceRangeOptions}
              />
            </div>
            <div className="md:col-span-4">
              <Button
                variant="secondary"
                className="w-full h-full flex items-center justify-center gap-2 !rounded-xl !text-base"
              >
                Find Properties
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div {...fadeInUp} className="flex flex-wrap gap-4 mt-6">
          <Button variant="white" className="!py-2.5">
            View All Properties
          </Button>

          {/* <Button variant="secondary" className="!py-2.5">
            Learn More
          </Button> */}
        </motion.div>

        {/* Trusted Clients */}
        <motion.div {...fadeInUp} className="mt-12 w-full max-w-xl">
          <p className="text-sm text-white/70 mb-4">
            Trusted by 10,000+ happy clients
          </p>
          <div className="flex">
            {/* Client Avatars */}
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden"
                >
                  <img
                    src={`/avatar-${i}.png`}
                    alt={`Client ${i}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://ui-avatars.com/api/?name=User+${i}&background=random`;
                    }}
                  />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-white bg-secondary flex items-center justify-center text-xs font-medium text-white">
                +99
              </div>
            </div>
            <div className="ml-4">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-xs text-white/80">4.9 out of 5 stars</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HeroSectionLeft;
