'use client'
import { motion } from 'framer-motion';
import { FiMapPin, FiDollarSign, FiHome, FiArrowRight } from 'react-icons/fi';
import HeroSectionLeft from './HeroSection.left';
import HeroSectionRight from './HeroSection.right';

const HeroSection = () => {


    return (
        <div className="relative md:h-screen h-full w-full md:max-h-[calc(100vh-5rem)] overflow-hidden p-2">
            <div className="h-full w-full flex flex-col lg:flex-row gap-2">
                {/* Left Container */}
                <HeroSectionLeft />

                {/* Right Container */}
                <HeroSectionRight />
            </div>
        </div>
    );
};

export default HeroSection; 