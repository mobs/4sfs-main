'use client'
import React, { useEffect, useState } from 'react';
import PropertyHeader from './PropertyHeader';
import PropertyDetails from './PropertyDetails';
import ContactForm from './ContactForm';
import PropertyNavigation from './PropertyNavigation';
import PropertyAmenities from './PropertyAmenities';
import PropertyFloorPlan from './PropertyFloorPlan';
import PropertyNearby from './PropertyNearby';

const PropertyHomepage = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY >= 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-bgGray">
      <PropertyNavigation />
        <div className="flex flex-col lg:flex-row ">
          {/* Left Column - Images and Contact Form - Fixed */}
          <div className="lg:w-[45%] bg-bgGray p-8 lg:sticky lg:top-16 lg:h-screen lg:overflow-y-scroll">
            <div className="max-w-xl mx-auto">
              <PropertyHeader />
              <div className='sticky top-16'>
                <ContactForm />
              </div>
            </div>
          </div>

          {/* Right Column - Property Details - Scrollable */}
          <div className="lg:w-[55%]">
            <div className="px-8 py-8 space-y-12">
              <div id="overview">
                <PropertyDetails />
              </div>
              <PropertyAmenities />
              <PropertyFloorPlan />
              <PropertyNearby />
            </div>
          </div>
        </div>
    </div>
  );
};

export default PropertyHomepage;