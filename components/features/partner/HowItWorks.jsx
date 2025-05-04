import React from 'react';
import { FaUserPlus, FaCheckCircle, FaShareAlt, FaMoneyBillWave } from 'react-icons/fa';
import Heading from '@/components/ui/Heading';

const HowItWorks = ({ steps }) => {
  const defaultSteps = [
    {
      icon: <FaUserPlus className="text-3xl text-primary" />,
      title: "Submit Your Details",
      description: "Fill out the partner form and tell us about your network."
    },
    {
      icon: <FaCheckCircle className="text-3xl text-primary" />,
      title: "Verification & Onboarding",
      description: "Our team will contact you for a quick KYC and onboarding."
    },
    {
      icon: <FaShareAlt className="text-3xl text-primary" />,
      title: "Start Referring Leads",
      description: "Use our CRM or WhatsApp to share verified leads."
    },
    {
      icon: <FaMoneyBillWave className="text-3xl text-primary" />,
      title: "Close Deals & Earn",
      description: "We handle backend sales, site visits, and documentation. You earn commissions."
    }
  ];

  const displaySteps = steps || defaultSteps;

  return (
    <div className="">
        <Heading
            title="How it Works"
            center={true}
        />
      <div className="max-w-5xl mx-auto px-4">
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-tertiary"></div>
          
          {displaySteps.map((step, index) => (
            <div key={index} className={`flex flex-col md:flex-row items-center mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className={`flex-1 w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-quaternary rounded-full mr-4">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-primary">{step.title}</h3>
                  </div>
                  <p className="text-muted ml-16">{step.description}</p>
                </div>
              </div>
              
              <div className="mx-4 my-4 md:my-0">
                <div className="w-12 h-12 bg-secondary text-primary rounded-full flex items-center justify-center text-lg font-bold">
                  {index + 1}
                </div>
              </div>
              
              <div className="flex-1 w-full md:w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks; 