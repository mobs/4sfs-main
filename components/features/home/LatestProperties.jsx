import { motion } from 'framer-motion';
import { FaBed, FaBath, FaRulerCombined, FaRegHeart } from 'react-icons/fa';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { useRef } from 'react';
import Heading from '@/components/ui/Heading';
import Button from '@/components/ui/Button';

const properties = [
  {
    id: 1,
    title: 'Luxury Apartment with Sea View',
    type: 'New Project',
    price: '₹2.5 Cr',
    location: 'Worli, Mumbai',
    bedrooms: 3,
    bathrooms: 2,
    area: '1,850 sq.ft',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
  },
  {
    id: 2,
    title: 'Modern Villa in Premium Location',
    type: 'Ready to Move',
    price: '₹4.8 Cr',
    location: 'Bandra West, Mumbai',
    bedrooms: 4,
    bathrooms: 4,
    area: '3,200 sq.ft',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea',
  },
  {
    id: 3,
    title: 'Spacious 2BHK with Garden',
    type: 'New Project',
    price: '₹1.2 Cr',
    location: 'Andheri East, Mumbai',
    bedrooms: 2,
    bathrooms: 2,
    area: '1,100 sq.ft',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3',
  },
  {
    id: 4,
    title: 'Premium Office Space',
    type: 'Ready to Move',
    price: '₹3.5 Cr',
    location: 'BKC, Mumbai',
    bedrooms: null,
    bathrooms: 2,
    area: '2,500 sq.ft',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
  },
];

const LatestProperties = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-quaternary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 md:px-8">
        <div className="flex flex-col items-center">
          <Heading 
            center 
            title="Latest Properties" 
            subtitle="We're committed to providing the best real estate experience with our comprehensive services and trusted platform."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 w-full">
            {properties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Property Type Badge */}
                    <span className="absolute top-4 left-4 bg-secondary/90 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                      {property.type}
                    </span>
                    
                    {/* Favorite Button */}
                    <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                      <FaRegHeart className="text-primary w-4 h-4" />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-primary line-clamp-1">
                        {property.title}
                      </h3>
                      <div className="flex items-center text-sm text-primary/60">
                        <span className="font-semibold text-primary">{property.price}</span>
                        <span className="mx-2">•</span>
                        <span>{property.location}</span>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <div className="flex items-center justify-between text-sm text-primary/60">
                        {property.bedrooms && (
                          <div className="flex items-center gap-2">
                            <FaBed className="w-4 h-4" />
                            <span>{property.bedrooms} Beds</span>
                          </div>
                        )}
                        <div className="flex items-center gap-2">
                          <FaBath className="w-4 h-4" />
                          <span>{property.bathrooms} Baths</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaRulerCombined className="w-4 h-4" />
                          <span>{property.area}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <Button variant="primary">View All Properties</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LatestProperties; 