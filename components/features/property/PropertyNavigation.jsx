import React from 'react';
import { FaHome, FaBed, FaMapMarkerAlt } from 'react-icons/fa';
import { MdDescription, MdLocationOn } from 'react-icons/md';
import { GiStairs } from 'react-icons/gi';
import { BiSolidCity } from 'react-icons/bi';

const PropertyNavigation = () => {
  const navigationItems = [
    { icon: FaHome, label: 'Overview', sectionId: 'overview' },
    { icon: MdDescription, label: 'Description', sectionId: 'description' },
    { icon: FaBed, label: 'Amenities', sectionId: 'amenities' },
    { icon: GiStairs, label: 'Floor Plan', sectionId: 'floor-plan' },
    { icon: BiSolidCity, label: 'Nearby Areas', sectionId: 'nearby' },
    { icon: MdLocationOn, label: 'Location', sectionId: 'location' },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 bg-white rounded-full shadow-lg p-6">
      <div className="flex flex-col gap-6">
        {navigationItems.map((item, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(item.sectionId)}
            className="group relative flex items-center"
          >
            <item.icon className="text-2xl text-gray-600 hover:text-primary transition-colors" />
            <span className="absolute left-10 bg-white px-2 py-1 rounded shadow-md text-sm text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PropertyNavigation; 