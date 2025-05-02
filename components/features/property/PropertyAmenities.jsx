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
        { icon: FaWifi, label: 'Free WiFi', isPrimary: true },
        { icon: TbAirConditioning, label: 'Air Conditioning', isPrimary: false }
      ]
    },
    {
      category: 'Convenience',
      icon: FaParking,
      items: [
        { icon: FaParking, label: 'Parking', isPrimary: true },
        { icon: MdElevator, label: 'Elevator', isPrimary: false },
        { icon: MdLocalLaundryService, label: 'Laundry', isPrimary: true }
      ]
    },
    {
      category: 'Recreation & Lifestyle',
      icon: FaSwimmingPool,
      items: [
        { icon: FaSwimmingPool, label: 'Swimming Pool', isPrimary: false },
        { icon: FaDumbbell, label: 'Fitness Center', isPrimary: true },
        { icon: GiBarbecue, label: 'BBQ Area', isPrimary: false },
        { icon: MdPets, label: 'Pet Friendly', isPrimary: true }
      ]
    },
    {
      category: 'Security',
      icon: MdSecurity,
      items: [
        { icon: MdSecurity, label: '24/7 Security', isPrimary: false }
      ]
    }
  ];

  const totalAmenities = amenities.reduce((sum, category) => sum + category.items.length, 0);

  return (
    <div id="amenities" className="scroll-mt-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-semibold text-primary">Property Amenities</h2>
        <span className="text-sm text-tertiary bg-primary/5 px-4 py-1.5 rounded-full">
          {totalAmenities} Amenities
        </span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {amenities.map((category, idx) => (
          <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center">
                <category.icon className="text-2xl text-primary" />
              </div>
              <h3 className="text-lg font-medium text-primary">{category.category}</h3>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {category.items.map((amenity, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className={amenity.isPrimary ? 
                    "flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center" : 
                    "flex-shrink-0 w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center"
                  }>
                    <amenity.icon className={amenity.isPrimary ? "text-xl text-primary" : "text-xl text-secondary"} />
                  </div>
                  <span className="text-tertiary font-medium">{amenity.label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyAmenities; 