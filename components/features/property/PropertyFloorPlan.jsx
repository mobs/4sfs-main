import React, { useState } from 'react';
import { FaBed, FaBath, FaRuler } from 'react-icons/fa';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const PropertyFloorPlan = () => {
  const [activeFloor, setActiveFloor] = useState(0);

  const floorPlans = [
    {
      name: 'First Floor',
      specs: {
        size: '1,200 sq ft',
        bedrooms: 2,
        bathrooms: 1,
        features: ['Living Room', 'Kitchen', 'Dining Area', 'Guest Bathroom']
      },
      image: '/placeholder-floor-plan.png',
    },
    {
      name: 'Second Floor',
      specs: {
        size: '1,100 sq ft',
        bedrooms: 2,
        bathrooms: 2,
        features: ['Master Bedroom', 'Guest Bedroom', 'Study Room', 'Balcony']
      },
      image: '/placeholder-floor-plan.png',
    },
    {
        name: 'Third Floor',
        specs: {
          size: '1,300 sq ft',
          bedrooms: 2,
          bathrooms: 2,
          features: ['Master Bedroom', 'Guest Bedroom', 'Study Room', 'Balcony']
        },
        image: '/placeholder-floor-plan.png',
      },
  ];

  return (
    <div id="floor-plan" className="scroll-mt-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-semibold text-primary">Floor Plans</h2>
        <span className="text-sm text-tertiary bg-primary/5 px-4 py-1.5 rounded-full">
          {floorPlans.length} Floors
        </span>
      </div>

      <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
        {/* Floor Selection Tabs */}
        <div className="flex border-b border-gray-100">
          {floorPlans.map((plan, index) => (
            <button
              key={index}
              onClick={() => setActiveFloor(index)}
              className={`flex-1 px-6 py-4 text-sm font-medium transition-colors duration-200
                ${activeFloor === index 
                  ? 'text-primary border-b-2 border-primary' 
                  : 'text-tertiary hover:text-primary'
                }`}
            >
              {plan.name}
            </button>
          ))}
        </div>

        {/* Active Floor Content */}
        <div className="p-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Floor Plan Image */}
            <div className="lg:w-2/3">
              <div className="aspect-[16/9] bg-gray-50 rounded-xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-gray-400">Floor Plan Image</span>
                </div>
              </div>
            </div>

            {/* Floor Details */}
            <div className="lg:w-1/3 space-y-6">
              {/* Specs */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-tertiary">
                  <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center">
                    <FaRuler className="text-xl text-primary" />
                  </div>
                  <span className="font-medium">Size: {floorPlans[activeFloor].specs.size}</span>
                </div>
                <div className="flex items-center gap-3 text-tertiary">
                  <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center">
                    <FaBed className="text-xl text-primary" />
                  </div>
                  <span className="font-medium">Bedrooms: {floorPlans[activeFloor].specs.bedrooms}</span>
                </div>
                <div className="flex items-center gap-3 text-tertiary">
                  <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center">
                    <FaBath className="text-xl text-primary" />
                  </div>
                  <span className="font-medium">Bathrooms: {floorPlans[activeFloor].specs.bathrooms}</span>
                </div>
              </div>

              {/* Features */}
              <div>
                <h4 className="text-sm font-medium text-gray-500 mb-3">Features</h4>
                <div className="space-y-2">
                  {floorPlans[activeFloor].specs.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-tertiary">
                      <MdOutlineKeyboardArrowRight className="text-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyFloorPlan; 