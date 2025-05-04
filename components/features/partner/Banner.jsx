import Button from '@/components/ui/Button';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Banner = ({ title, content, ctaText }) => {
  return (
    <div className="relative overflow-hidden bg-primary text-white py-20 px-8 rounded-3xl">
      <div className="relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          {title || "JOIN 4SFS as a Channel Partner & Grow with Us"}
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl opacity-90">
          {content || "Partner with us to unlock exclusive opportunities and grow your business with India's leading real estate investment platform."}
        </p>
        <Button variant="secondary">Join Now</Button>
      </div>
      {/* Abstract shapes for background */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
        <div className="absolute transform rotate-45 bg-white w-48 h-48 rounded-full -right-20 -top-20"></div>
        <div className="absolute transform -rotate-45 bg-white w-96 h-96 rounded-full -right-40 -bottom-40"></div>
      </div>
    </div>
  );
};

export default Banner; 