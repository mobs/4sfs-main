import React from 'react';
import { FaUserTie, FaHandshake, FaBalanceScale, FaChartBar, FaBriefcase } from 'react-icons/fa';
import Heading from '@/components/ui/Heading';

const WhoCanJoin = ({ partners }) => {
  const defaultPartners = [
    {
      icon: <FaUserTie className="text-3xl text-primary" />,
      title: "Freelance Real Estate Agents",
      description: "Independent agents looking to expand their portfolio"
    },
    {
      icon: <FaHandshake className="text-3xl text-primary" />,
      title: "Channel Partners with Local Networks",
      description: "Professionals with strong local market presence"
    },
    {
      icon: <FaBalanceScale className="text-3xl text-primary" />,
      title: "CA/CS/Lawyers",
      description: "Legal and financial professionals with client networks"
    },
    {
      icon: <FaChartBar className="text-3xl text-primary" />,
      title: "Part Time Investors and Brokers",
      description: "Investment enthusiasts seeking additional opportunities"
    },
    {
      icon: <FaBriefcase className="text-3xl text-primary" />,
      title: "Ex-Bankers or Finance Professionals",
      description: "Experienced professionals in financial services"
    }
  ];

  const displayPartners = partners || defaultPartners;

  return (
    <div className="py-6 bg-quaternary rounded-3xl">
      <div className="max-w-6xl mx-auto px-4">
        <Heading
            title="Who Can Join Us?"
            center={true}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayPartners.map((partner, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-quaternary rounded-full mr-4">
                  {partner.icon}
                </div>
                <h3 className="text-lg font-semibold text-primary">{partner.title}</h3>
              </div>
              <p className="text-muted ml-16">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhoCanJoin; 