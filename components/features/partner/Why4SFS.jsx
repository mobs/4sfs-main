import Heading from '@/components/ui/Heading';
import React from 'react';
import { FaChartLine, FaProjectDiagram, FaHeadset, FaUsers } from 'react-icons/fa';

const Why4SFS = ({ benefits }) => {
  const defaultBenefits = [
    {
      icon: <FaChartLine className="text-4xl text-primary" />,
      title: "High payouts",
      description: "Earn competitive commissions on every successful deal"
    },
    {
      icon: <FaProjectDiagram className="text-4xl text-primary" />,
      title: "Access to Premium projects",
      description: "Get exclusive access to high-value investment opportunities"
    },
    {
      icon: <FaHeadset className="text-4xl text-primary" />,
      title: "Dedicated support team and training",
      description: "Comprehensive training and round-the-clock support"
    },
    {
      icon: <FaUsers className="text-4xl text-primary" />,
      title: "Private Community Access",
      description: "Join an exclusive network of successful partners"
    }
  ];

  const displayBenefits = benefits || defaultBenefits;

  return (
    <div className="">
        <Heading
            title="Why 4SFS?"
            center={true}
        />
      {/* <h2 className="text-3xl font-bold text-center mb-4 text-primary">Why 4SFS?</h2> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {displayBenefits.map((benefit, index) => (
          <div 
            key={index}
            className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border border-tertiary"
          >
            <div className="mb-4">
              {benefit.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-primary">{benefit.title}</h3>
            <p className="text-muted">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Why4SFS; 