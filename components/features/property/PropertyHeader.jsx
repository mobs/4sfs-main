import React, { useState } from 'react';
import { FaHeart, FaShare } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

const PropertyHeader = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const images = [
    'https://placehold.co/1200x800/333/FFF?text=Modern+House',
    'https://placehold.co/1200x800/444/FFF?text=Living+Room',
    'https://placehold.co/1200x800/555/FFF?text=Kitchen',
    'https://placehold.co/1200x800/666/FFF?text=Bedroom',
  ];

  return (
    <div>
      {/* Main Image with Overlay Buttons */}
      <div className="relative rounded-2xl overflow-hidden">
        <img
          src={images[selectedImage]}
          alt="Property View"
          className="w-full h-[480px] object-cover"
        />
        
        {/* Overlay Buttons */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <button className="bg-white bg-opacity-90 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
            <MdLocationOn />
            Sinar Valley, Puncak Bogor
          </button>
        </div>
        
        <div className="absolute top-4 right-4 flex gap-2">
          <button className="bg-white bg-opacity-90 p-2 rounded-full hover:bg-opacity-100 transition-all">
            <FaShare className="text-darkgray" />
          </button>
          <button className="bg-white bg-opacity-90 p-2 rounded-full hover:bg-opacity-100 transition-all">
            <FaHeart className="text-darkgray" />
          </button>
        </div>
      </div>

      {/* Thumbnail Images */}
      <div className="grid grid-cols-4 gap-3 mt-3">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`relative rounded-xl overflow-hidden ${
              selectedImage === index 
                ? 'ring-2 ring-primary ring-offset-2' 
                : 'opacity-70 hover:opacity-100'
            }`}
          >
            <img
              src={img}
              alt={`View ${index + 1}`}
              className="w-full h-24 object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default PropertyHeader; 