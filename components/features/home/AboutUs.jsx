import React from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiAward, FiHome, FiUsers } from 'react-icons/fi';
import Heading from '@/components/ui/Heading';
import Button from '@/components/ui/Button';

const AboutUs = () => {
    const stats = [
        { icon: FiHome, value: '10K+', label: 'Properties Listed' },
        { icon: FiUsers, value: '8K+', label: 'Happy Customers' },
        { icon: FiAward, value: '15+', label: 'Years Experience' },
    ];

    const features = [
        'Premium Property Listings',
        'Expert Real Estate Guidance',
        'Transparent Transactions',
        'Dedicated Support Team',
        'Verified Properties',
        'Market Analysis',
    ];

    return (
        <section className="py-16 md:py-20 lg:py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Column - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                            <img
                                src="/images/properties/curved-building.webp"
                                alt="About Us"
                                className="w-full h-full object-cover"
                            />
                            {/* Decorative Elements */}
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
                            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
                        </div>
                        
                        {/* Stats */}
                        <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                            <div className="grid grid-cols-3 gap-4">
                                {stats.map((stat, index) => (
                                    <motion.div
                                        key={stat.label}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="text-center"
                                    >
                                        <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                                        <div className="text-xl font-bold text-primary">{stat.value}</div>
                                        <div className="text-xs text-primary/60">{stat.label}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <Heading
                            title="Your Real Estate Partner"
                            subtitle="We're dedicated to making your property journey seamless and successful."
                            center
                        />

                        <p className="text-primary/70">
                            With years of experience in the real estate market, we've helped thousands of clients find their perfect properties. Our commitment to excellence and customer satisfaction sets us apart in the industry.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-center space-x-3"
                                >
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                                        <FiCheck className="w-4 h-4 text-secondary" />
                                    </div>
                                    <span className="text-primary/80">{feature}</span>
                                </motion.div>
                            ))}
                        </div>

                        <Button variant="primary">Learn More About Us</Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;