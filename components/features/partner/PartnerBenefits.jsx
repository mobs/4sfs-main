import React from 'react';
import { FaMoneyBillWave, FaHandshake, FaBullhorn, FaCalendarAlt, FaNewspaper } from 'react-icons/fa';
import Heading from '@/components/ui/Heading';

const PartnerBenefits = ({ benefits }) => {
  const defaultBenefits = [
    {
      icon: <FaMoneyBillWave className="text-4xl text-primary" />,
      title: "Zero Investment Model",
      description: "Start your journey without any upfront costs"
    },
    {
      icon: <FaHandshake className="text-4xl text-primary" />,
      title: "Transparent Commission Payouts",
      description: "Clear and timely commission structure"
    },
    {
      icon: <FaBullhorn className="text-4xl text-primary" />,
      title: "Branding and Marketing Support",
      description: "Get professional marketing materials and support"
    },
    {
      icon: <FaCalendarAlt className="text-4xl text-primary" />,
      title: "Exclusive Partner Events",
      description: "Network and learn at special partner events"
    },
    {
      icon: <FaNewspaper className="text-4xl text-primary" />,
      title: "Weekly Updates on New Projects",
      description: "Stay informed about the latest opportunities"
    }
  ];

  const displayBenefits = benefits || defaultBenefits;

  return (
    <div className="bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <Heading
            title="Partner Benefits"
            center={true}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayBenefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 p-4 bg-lightgray rounded-full">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerBenefits; 