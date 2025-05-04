import React from 'react';
import { FaSchool, FaHospital, FaShoppingCart, FaBus, FaMapMarkerAlt } from 'react-icons/fa';
import { MdRestaurant, MdPark } from 'react-icons/md';

const PropertyNearby = () => {
  const nearbyPlaces = [
    {
      category: 'Education',
      icon: FaSchool,
      places: [
        { name: 'International School', distance: '0.5 km', rating: 4.8 },
        { name: 'Public Library', distance: '1.2 km', rating: 4.5 },
      ]
    },
    {
      category: 'Healthcare',
      icon: FaHospital,
      places: [
        { name: 'City Hospital', distance: '2.1 km', rating: 4.7 },
        { name: 'Medical Clinic', distance: '0.8 km', rating: 4.4 },
      ]
    },
    {
      category: 'Shopping',
      icon: FaShoppingCart,
      places: [
        { name: 'Shopping Mall', distance: '1.5 km', rating: 4.6 },
        { name: 'Supermarket', distance: '0.3 km', rating: 4.3 },
      ]
    },
    {
      category: 'Transportation',
      icon: FaBus,
      places: [
        { name: 'Bus Station', distance: '0.4 km', rating: 4.2 },
        { name: 'Train Station', distance: '2.5 km', rating: 4.5 },
      ]
    },
    {
      category: 'Dining',
      icon: MdRestaurant,
      places: [
        { name: 'Restaurant Row', distance: '0.7 km', rating: 4.8 },
        { name: 'Food Court', distance: '1.0 km', rating: 4.4 },
      ]
    },
    {
      category: 'Recreation',
      icon: MdPark,
      places: [
        { name: 'Central Park', distance: '1.3 km', rating: 4.9 },
        { name: 'Sports Complex', distance: '1.8 km', rating: 4.6 },
      ]
    },
  ];

  return (
    <div id="nearby" className="scroll-mt-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-semibold text-primary">Nearby Places</h2>
        <span className="text-sm text-primary bg-secondary px-4 py-1.5 rounded-full">
          {nearbyPlaces.reduce((acc, cat) => acc + cat.places.length, 0)} Places
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {nearbyPlaces.map((category, index) => (
          <div 
            key={index} 
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-highlight flex items-center justify-center">
                <category.icon className="text-2xl text-secondary" />
              </div>
              <h3 className="text-lg font-medium text-primary">{category.category}</h3>
            </div>

            <div className="space-y-4">
              {category.places.map((place, placeIndex) => (
                <div 
                  key={placeIndex} 
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-quaternary transition-all duration-200"
                >
                  <div className="flex items-center gap-3">
                    <FaMapMarkerAlt className="text-secondary" />
                    <div>
                      <h4 className="text-tertiary font-medium">{place.name}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-muted">{place.distance}</span>
                        <span className="text-xs text-accent">★ {place.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyNearby; 