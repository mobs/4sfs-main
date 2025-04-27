import { motion } from 'framer-motion';
import { FaChartLine, FaNewspaper, FaMapMarkedAlt } from 'react-icons/fa';
import Heading from '@/components/ui/Heading';
import Button from '@/components/ui/Button';

const insights = [
  {
    title: 'Price Trends',
    icon: FaChartLine,
    items: [
      {
        heading: 'South Mumbai Prices Up by 12%',
        description: 'Luxury properties in South Mumbai show significant appreciation in Q1 2024.',
        trend: '+12%',
        isPositive: true,
      },
      {
        heading: 'Suburban Growth Continues',
        description: 'Western suburbs record steady price growth due to infrastructure development.',
        trend: '+8%',
        isPositive: true,
      },
    ],
  },
  {
    title: 'Market News',
    icon: FaNewspaper,
    items: [
      {
        heading: 'New Metro Line Impact',
        description: 'Property prices near upcoming metro corridors expected to rise by 15-20%.',
        date: 'March 15, 2024',
      },
      {
        heading: 'Real Estate Reforms',
        description: 'Government announces new policies to boost affordable housing sector.',
        date: 'March 10, 2024',
      },
    ],
  },
  {
    title: 'Investment Hotspots',
    icon: FaMapMarkedAlt,
    items: [
      {
        heading: 'Thane West',
        description: 'Emerging IT hub with excellent connectivity and modern infrastructure.',
        roi: '15-18% p.a.',
      },
      {
        heading: 'Navi Mumbai',
        description: 'Growing commercial district with upcoming international airport.',
        roi: '12-15% p.a.',
      },
    ],
  },
];

const MarketInsights = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <Heading center title="Market Insights" subtitle="Stay informed with the latest real estate market trends, news, and investment opportunities." />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-12">
          {insights.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-quaternary rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <category.icon className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-semibold ml-4 text-gray-800">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-6 flex-grow">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.heading}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: (index + itemIndex) * 0.1 }}
                    className="border-l-4 border-secondary pl-4"
                  >
                    <div className="flex items-start justify-between">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">
                        {item.heading}
                      </h4>
                      {item.trend && (
                        <span className={`text-sm font-bold ${item.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                          {item.trend}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                    {item.date && (
                      <p className="text-xs text-gray-500">
                        Published: {item.date}
                      </p>
                    )}
                    {item.roi && (
                      <p className="text-sm font-semibold text-primary">
                        Expected ROI: {item.roi}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="mt-8">
                <Button
                  whileHover={{ scale: 1.02 }}
                  className="!py-2.5 w-full"
                  variant="secondary"
                >
                  View More
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketInsights; 