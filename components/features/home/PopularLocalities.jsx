import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaHome } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import Heading from "@/components/ui/Heading";

const localities = [
  {
    name: "Bandra West",
    pricePerSqFt: "₹32,000",
    propertyCount: 450,
    trending: true,
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
  },
  {
    name: "Powai",
    pricePerSqFt: "₹28,500",
    propertyCount: 380,
    trending: true,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    name: "Andheri East",
    pricePerSqFt: "₹25,000",
    propertyCount: 520,
    trending: false,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
  },
  {
    name: "Worli",
    pricePerSqFt: "₹45,000",
    propertyCount: 290,
    trending: true,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
  },
  {
    name: "Juhu",
    pricePerSqFt: "₹38,000",
    propertyCount: 310,
    trending: false,
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
  },
  {
    name: "Malad West",
    pricePerSqFt: "₹22,000",
    propertyCount: 420,
    trending: false,
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
  },
];

const PopularLocalities = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <Heading
          center
          title="Popular Localities"
          subtitle="Discover the most sought-after neighborhoods with detailed insights on property prices and availability."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-12">
          {localities.map((locality, index) => (
            <motion.div
              key={locality.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64">
                <img
                  src={locality.image}
                  alt={locality.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white flex items-center">
                      <FaMapMarkerAlt className="mr-2" />
                      {locality.name}
                    </h3>
                    {locality.trending && (
                      <span className="bg-secondary text-white text-xs px-2 py-1 rounded-full">
                        Trending
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-white">
                    <div>
                      <p className="text-sm opacity-90">Price/sq.ft</p>
                      <p className="font-semibold">{locality.pricePerSqFt}</p>
                    </div>
                    <div>
                      <p className="text-sm opacity-90">Properties</p>
                      <p className="font-semibold flex items-center">
                        <FaHome className="mr-1" />
                        {locality.propertyCount}
                      </p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      className="bg-white/20 p-2 rounded-full backdrop-blur-sm"
                    >
                      <BsArrowRight className="text-white text-xl" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularLocalities;
