import Button from '@/components/ui/Button';
import Heading from '@/components/ui/Heading';
import { motion } from 'framer-motion';
import { BsBuilding, BsHouseDoor } from 'react-icons/bs';
import { FaLandmark, FaBuilding, FaHome, FaTools, FaCity } from 'react-icons/fa';
import { MdApartment, MdVilla } from 'react-icons/md';

const categories = [
  {
    name: 'Apartments',
    icon: MdApartment,
    count: '2,500+',
    description: 'Modern living spaces in prime locations',
    gradient: 'from-blue-500/20 to-blue-600/20',
    iconColor: 'text-blue-600',
  },
  {
    name: 'Independent Houses',
    icon: BsHouseDoor,
    count: '1,800+',
    description: 'Spacious homes for families',
    gradient: 'from-green-500/20 to-green-600/20',
    iconColor: 'text-green-600',
  },
  {
    name: 'Luxury Villas',
    icon: MdVilla,
    count: '500+',
    description: 'Premium living with exclusive amenities',
    gradient: 'from-purple-500/20 to-purple-600/20',
    iconColor: 'text-purple-600',
  },
  {
    name: 'Commercial',
    icon: FaBuilding,
    count: '900+',
    description: 'Prime office and retail spaces',
    gradient: 'from-red-500/20 to-red-600/20',
    iconColor: 'text-red-600',
  },
  {
    name: 'Plots & Land',
    icon: FaLandmark,
    count: '1,200+',
    description: 'Investment opportunities in growing areas',
    gradient: 'from-yellow-500/20 to-yellow-600/20',
    iconColor: 'text-yellow-600',
  },
  {
    name: 'Ready to Move',
    icon: FaHome,
    count: '3,000+',
    description: 'Immediate possession properties',
    gradient: 'from-pink-500/20 to-pink-600/20',
    iconColor: 'text-pink-600',
  },
];

const PropertyCategories = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Heading 
          title="Browse by Property Type" 
          subtitle="Discover your perfect property from our diverse range of categories" 
          center 
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative overflow-hidden"
            >
              <div className={`relative p-6 rounded-2xl bg-gradient-to-br ${category.gradient} backdrop-blur-sm`}>
                {/* Icon and Count */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl ${category.gradient.replace('/20', '')} flex items-center justify-center`}>
                    <category.icon className={`w-6 h-6 ${category.iconColor}`} />
                  </div>
                  <span className="text-sm font-semibold text-primary/80">{category.count} listings</span>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-primary">{category.name}</h3>
                  <p className="text-sm text-primary/60">{category.description}</p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300 rounded-2xl" />
                
                {/* Decorative Elements */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/10 rounded-full blur-xl" />
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-white/10 rounded-full blur-xl" />
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
          className="mt-12 text-center"
        >
          <Button variant="primary">View All Categories</Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PropertyCategories; 