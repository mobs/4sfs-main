'use client'
import React from 'react';
import PropertyHeader from './PropertyHeader';
import PropertyDetails from './PropertyDetails';
import ContactForm from './ContactForm';
import PropertyNavigation from './PropertyNavigation';
import PropertyAmenities from './PropertyAmenities';
import PropertyFloorPlan from './PropertyFloorPlan';
import PropertyNearby from './PropertyNearby';

const PropertyHomepage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <PropertyNavigation />
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row relative">
          {/* Left Column - Images and Contact Form - Fixed */}
          <div className="lg:w-[40=5%] lg:sticky lg:h-screen bg-gray-50 p-8 overflow-">
            <div className="max-w-xl mx-auto">
              <PropertyHeader />
              <div className="mt-6">
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
              <div className='px-4 sm:px-6 lg:px-8'>
              <PropertyAmenities />
              <PropertyFloorPlan />
              <PropertyNearby />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyHomepage;