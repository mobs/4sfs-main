import React from 'react';
import { FaWifi, FaParking, FaSwimmingPool, FaDumbbell } from 'react-icons/fa';
import { MdSecurity, MdLocalLaundryService, MdPets, MdElevator } from 'react-icons/md';
import { GiBarbecue } from 'react-icons/gi';
import { TbAirConditioning } from 'react-icons/tb';

const PropertyAmenities = () => {
  const amenities = [
    { 
      category: 'Technology & Comfort',
      icon: FaWifi,
      items: [
        { icon: FaWifi, label: 'Free WiFi' },
        { icon: TbAirConditioning, label: 'Air Conditioning'}
      ]
    },
    {
      category: 'Convenience',
      icon: FaParking,
      items: [
        { icon: FaParking, label: 'Parking' },
        { icon: MdElevator, label: 'Elevator'},
        { icon: MdLocalLaundryService, label: 'Laundry' }
      ]
    },
    {
      category: 'Recreation & Lifestyle',
      icon: FaSwimmingPool,
      items: [
        { icon: FaSwimmingPool, label: 'Swimming Pool'},
        { icon: FaDumbbell, label: 'Fitness Center' },
        { icon: GiBarbecue, label: 'BBQ Area'},
        { icon: MdPets, label: 'Pet Friendly' }
      ]
    },
    {
      category: 'Security',
      icon: MdSecurity,
      items: [
        { icon: MdSecurity, label: '24/7 Security'}
      ]
    }
  ];

  const totalAmenities = amenities.reduce((sum, category) => sum + category.items.length, 0);

  return (
    <div id="amenities" className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-primary">Property Amenities</h2>
        <span className="text-sm text-tertiary bg-quaternary px-3 py-1 rounded-full">
          {totalAmenities} Amenities
        </span>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-lightgray">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {amenities.map((category, idx) => (
            <div key={idx} className="space-y-4">
              <div className="flex items-center gap-3 pb-2 border-b border-lightgray">
                <div className="w-8 h-8 rounded-lg bg-quaternary flex items-center justify-center">
                  <category.icon className="text-lg text-primary" />
                </div>
                <h3 className="text-primary font-medium">{category.category}</h3>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {category.items.map((amenity, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 p-2 rounded-lg transition-colors duration-200 `}
                  >
                    <div className={`
                      w-7 h-7 rounded-lg flex items-center justify-center
                      
                    `}>
                      <amenity.icon className="text-sm" />
                    </div>
                    <span className={`text-sm `}>
                      {amenity.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyAmenities; 