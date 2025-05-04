'use client'
import React from 'react';
import Banner from './Banner';
import Why4SFS from './Why4SFS';
import WhoCanJoin from './WhoCanJoin';
import HowItWorks from './HowItWorks';
import PartnerBenefits from './PartnerBenefits';
import PartnerForm from './PartnerForm';

const PartnerHomepage = ({title, content, ctaText, formTitle}) => {
  const handleFormSubmit = (formData) => {
    // Handle form submission
    console.log('Form submitted:', formData);
    // Add your API call or form submission logic here
  };

  return (
    <div className='flex flex-col lg:flex-row px-4 md:px-8 lg:px-12 xl:16 top-12'>
        <div className='lg:w-1/3 order-2 lg:sticky lg:top-16 lg:h-screen lg:overflow-y-scroll'>
          <PartnerForm onSubmit={handleFormSubmit} formTitle={formTitle} />
        </div>
        <div className='lg:w-2/3 order-1 py-12 space-y-8'>
          <Banner title={title} content={content} ctaText={ctaText} />
          <Why4SFS />
          <WhoCanJoin />
          <HowItWorks />
          <PartnerBenefits />
        </div>
      </div>
  );
};

export default PartnerHomepage;