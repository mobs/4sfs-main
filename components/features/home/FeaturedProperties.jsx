'use client'
import { motion } from 'framer-motion';
import Circle from '../../ui/Circle';
import Heading from '@/components/ui/Heading';

const PropertyCard = ({ property }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className={`relative rounded-xl overflow-hidden ${property.className}`}
            style={{ gridArea: property.gridArea }}
        >
            <div className="relative h-full">
                <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2.5 ">
                    <Circle />
                    <div className="flex flex-col">
                        <span className="text-white text-sm font-medium">{property.title}</span>
                        <span className="text-white/70 text-xs">{property.category}</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const FeaturedProperties = () => {
    const properties = [
        // Column 1 - 2 properties (1 large, 1 small)
        {
            id: 1,
            title: 'Arizona Loft Building',
            category: '/Hotel/Architecture',
            image: '/images/properties/loft-interior.webp',
            gridArea: 'a1',
            className: 'h-full'
        },
        {
            id: 6,
            title: 'Apex Apartments',
            category: '/Offices/Architecture',
            image: '/images/properties/city-sunset.webp',
            gridArea: 'a6',
            className: 'h-full'
        },
        
        // Column 2 - 3 properties (2 large, 1 small)
        {
            id: 2,
            title: 'Metropolitan Lofts',
            category: '/Offices/Architecture',
            image: '/images/properties/modern-building.webp',
            gridArea: 'a2',
            className: 'h-full'
        },
        {
            id: 7,
            title: 'Spectra Heights',
            category: '/Towers/Architecture',
            image: '/images/properties/brick-building.webp',
            gridArea: 'a7',
            className: 'h-full'
        },
        {
            id: 11,
            title: 'Verdant Grove',
            category: '/Offices/Architecture',
            image: '/images/properties/pattern-building.webp',
            gridArea: 'a11',
            className: 'h-full'
        },
        
        // Column 3 - 2 properties (1 large, 1 small)
        {
            id: 3,
            title: 'Tranquil Estates',
            category: '/Hotel/Architecture',
            image: '/images/properties/glass-building.webp',
            gridArea: 'a3',
            className: 'h-full'
        },
        {
            id: 8,
            title: 'Eldorado Residences',
            category: '/Hotel/Architecture',
            image: '/images/properties/interior-arch.webp',
            gridArea: 'a8',
            className: 'h-full'
        },
        
        // Column 4 - 3 properties (2 large, 1 small)
        {
            id: 4,
            title: 'Prestige Residences',
            category: '/Offices/Architecture',
            image: '/images/properties/curved-building.webp',
            gridArea: 'a4',
            className: 'h-full'
        },
        {
            id: 10,
            title: 'Panorama Suites',
            category: '/Towers/Architecture',
            image: '/images/properties/luxury-house.webp',
            gridArea: 'a10',
            className: 'h-full'
        },
        
        // Column 5 - 2 properties (1 large, 1 small)
        {
            id: 5,
            title: 'Orbital Lofts',
            category: '/Towers/Architecture',
            image: '/images/properties/geometric-building.webp',
            gridArea: 'a5',
            className: 'h-full'
        },
        {
            id: 9,
            title: 'Opulence Tower',
            category: '/Hotel/Architecture',
            image: '/images/properties/modern-restaurant.webp',
            gridArea: 'a9',
            className: 'h-full'
        },
        {
            id: 12,
            title: 'Palazzo Royale',
            category: '/Hotel/Architecture',
            image: '/images/properties/grand-interior.webp',
            gridArea: 'a12',
            className: 'h-full'
        }
    ];

    return (
        <section className="py-12 px-4">
            <Heading title="Featured Properties" subtitle="Explore our latest and most popular properties" center />
            <div className="grid-masonry">
                {properties.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                ))}
            </div>
        </section>
    );
};

export default FeaturedProperties; 