import React from 'react';
import { FaBed, FaBath, FaRuler, FaCar } from 'react-icons/fa';
import { BsFillBuildingsFill } from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md';
import Container from './Container';

const PropertyDetails = () => {
  const overview = [
    { icon: FaBed, value: "3 Bedroom", color: "primary" },
    { icon: FaBath, value: "7 Bathroom", color: "secondary" },
    { icon: FaRuler, value: "3,943 ft", color: "primary" },
    { icon: BsFillBuildingsFill, value: "All Furniture", color: "secondary" },
    { icon: FaCar, value: "1 Car Garage", color: "primary" },
    { icon: FaCar, value: "1 Car Garage", color: "secondary" },
  ];
  const address = [
    { type: "City", value: "Ciawi" },
    { type: "State", value: "Bogor" },
    { type: "Country", value: "Indonesia" },
  ]
  const details = [
    { type: "Property ID", value: "63426" },
    { type: "Price", value: "$345,000.00" },
    { type: "Property Size", value: "1567 m" },
    { type: "Land Area", value: "15,570 m" },
    { type: "Bedrooms", value: "11" },
    { type: "Bathrooms", value: "11" },
    { type: "Year Built", value: "2012" },
    { type: "Property Type", value: "Residence" },
    { type: "Property Status", value: "For Sale" },
  ];

  const description = `Aruna Grandview Residences at Sinar Valley offers a stunning blend of modern luxury and natural beauty. Nestled in the heart of Puncak Bogor, this premium residential estate provides residents with panoramic mountain views, fresh air, and an upscale living experience. Each unit is meticulously designed to harmonize with the surrounding nature, offering a peaceful retreat while maintaining proximity to the vibrant city center. Aruna Grandview is perfect for families and individuals seeking a tranquil lifestyle without sacrificing convenience.

The opportunity to own this beautiful resort in this lush tropical rainforest is truly a once-in-a-lifetime investment.

Whether you're looking to continue its legacy as a renowned destination or shape it into your own vision, this property offers endless possibilities for success. Take advantage of this chance to own a slice of paradise.

If you'd like more information or want to see the resort, get in touch with us today.`;

  return (
    <div className="max-w-7xl mx-auto animate-fade-in">
      {/* Title Section */}
      <div className="mb-8 py-6 rounded-lg">
        <h1 className="text-3xl font-semibold mb-3 text-primary">Aruna GrandView Residences at Sinar Valley</h1>
        <div className="flex items-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <MdLocationOn className="text-secondary text-xl" />
            <span className="text-tertiary font-medium">Residence</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-accent text-xl">★</span>
            <span className="text-tertiary font-medium">4.5 Review</span>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <Container data={overview} />

      {/* Description Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-primary">Description</h2>
        <div className="text-tertiary space-y-4 leading-relaxed bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-lightgray">
          {description.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-tertiary">{paragraph}</p>
          ))}
        </div>
      </div>

      {/* Address Section */}
      <Container 
        data={address} 
        title="Address" 
      />

      {/* Details Section */}
      <Container 
        data={details} 
        title="Details" 
      />
    </div>
  );
};

export default PropertyDetails; 