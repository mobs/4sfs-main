import React from 'react';
import Link from 'next/link';
import { FiMapPin, FiPhone, FiMail, FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
    const quickLinks = [
        { label: 'About Us', href: '/about' },
        { label: 'Properties', href: '/properties' },
        { label: 'Agents', href: '/agents' },
        { label: 'Blog', href: '/blog' },
        { label: 'Contact', href: '/contact' },
    ];

    const propertyTypes = [
        { label: 'Apartments', href: '/properties/apartments' },
        { label: 'Houses', href: '/properties/houses' },
        { label: 'Villas', href: '/properties/villas' },
        { label: 'Commercial', href: '/properties/commercial' },
        { label: 'Land', href: '/properties/land' },
    ];

    const socialLinks = [
        { icon: FiFacebook, href: '#', label: 'Facebook' },
        { icon: FiTwitter, href: '#', label: 'Twitter' },
        { icon: FiInstagram, href: '#', label: 'Instagram' },
        { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
    ];

    return (
        <footer className="bg-white border-t">
            <div className="container mx-auto lg:px-16 md:px-12 px-4 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Company Info */}
                    <div className="space-y-6">
                        <Link href="/">
                            <img src="/logo-black.png" alt="Logo" className="h-8" />
                        </Link>
                        <p className="text-sm text-primary/70">
                            Your trusted partner in finding the perfect property. We make real estate simple and accessible for everyone.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <FiMapPin className="text-primary/60" />
                                <span className="text-sm text-primary/70">DLF Towers, DSM-725, Shivaji Marg, Moti Nagar, New Delhi-110015</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <FiPhone className="text-primary/60" />
                                <span className="text-sm text-primary/70">+91 9958150128</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <FiMail className="text-primary/60" />
                                <span className="text-sm text-primary/70">sales@4sfs.in</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-primary mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <Link 
                                        href={link.href}
                                        className="text-sm text-primary/70 hover:text-primary transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Property Types */}
                    <div>
                        <h3 className="text-lg font-semibold text-primary mb-6">Property Types</h3>
                        <ul className="space-y-4">
                            {propertyTypes.map((type) => (
                                <li key={type.label}>
                                    <Link 
                                        href={type.href}
                                        className="text-sm text-primary/70 hover:text-primary transition-colors"
                                    >
                                        {type.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-semibold text-primary mb-6">Newsletter</h3>
                        <p className="text-sm text-primary/70 mb-4">
                            Subscribe to our newsletter for the latest updates and exclusive offers.
                        </p>
                        <form className="space-y-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                            />
                            <button
                                type="submit"
                                className="w-full px-4 py-2 text-sm text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-gray-100">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-sm text-primary/60">
                            © {new Date().getFullYear()} Real Estate. All rights reserved.
                        </p>
                        <div className="flex space-x-6">
                            {socialLinks.map((social) => (
                                <Link
                                    key={social.label}
                                    href={social.href}
                                    className="text-primary/60 hover:text-primary transition-colors"
                                    aria-label={social.label}
                                >
                                    <social.icon size={20} />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 