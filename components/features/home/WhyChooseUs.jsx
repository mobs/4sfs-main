import { motion } from "framer-motion";
import { FaCheckCircle, FaHeadset, FaShieldAlt, FaGlobe } from "react-icons/fa";
import Heading from "@/components/ui/Heading";

const features = [
  {
    icon: FaCheckCircle,
    title: "Verified Properties",
    description:
      "Every property listing undergoes thorough verification to ensure authenticity and reliability.",
    color: "from-blue-400 to-blue-600",
  },
  {
    icon: FaHeadset,
    title: "Expert Support",
    description:
      "24/7 dedicated support from real estate experts to guide you through your property journey.",
    color: "from-green-400 to-green-600",
  },
  {
    icon: FaShieldAlt,
    title: "Secure Transactions",
    description:
      "Advanced security measures to protect your transactions and personal information.",
    color: "from-purple-400 to-purple-600",
  },
  {
    icon: FaGlobe,
    title: "Wide Property Range",
    description:
      "Extensive collection of properties across all categories and price ranges.",
    color: "from-red-400 to-red-600",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-quaternary">
      <div className="container mx-auto px-4">
        <Heading
          center
          title="Why Choose Us"
          subtitle="We're committed to providing the best real estate experience with our comprehensive services and trusted platform."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-12"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              className={`relative group rounded-xl bg-gradient-to-r ${feature.color}`}
            >
              <div className="absolute inset-0 bg-white rounded-xl opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="relative p-6 text-center">
                <div
                  className={`w-16 h-16 mx-auto mb-6 rounded-full border border-${feature.color}  flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="text-3xl text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
