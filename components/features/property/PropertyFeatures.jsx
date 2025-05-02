import React from 'react';
import { FaCheck } from 'react-icons/fa';

const PropertyFeatures = () => {
  const features = [
    "Air Conditioning",
    "Swimming Pool",
    "Garden",
    "Security System",
    "High-Speed Internet",
    "Modern Kitchen",
    "Hardwood Floors",
    "Walk-in Closet",
    "Smart Home Features",
    "Home Theater",
    "Wine Cellar",
    "Fitness Center"
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Property Features</h2>
        <div className="grid grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-2">
              <FaCheck className="text-primary" />
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyFeatures; 