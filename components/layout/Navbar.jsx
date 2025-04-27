'use client'
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX } from 'react-icons/fi';
import Button from '../ui/Button';
import { NAV_ITEMS } from '../../constants/navigation';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
            }`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 md:h-20">
                    {/* Logo (Left on mobile, Center on desktop) */}
                    <div className="flex-shrink-0 md:hidden">
                        <Link href="/" className="flex items-center">
                            <img src="/logo-black.png" alt="Logo" className="h-8" />
                        </Link>
                    </div>

                    {/* Nav Items (Hidden on mobile) */}
                    <div className="hidden md:flex items-center space-x-1">
                        {NAV_ITEMS.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className={`relative px-4 py-2 text-sm font-medium text-gray-800 hover:text-primary transition-colors rounded-full hover:bg-gray-50`}
                                >
                                    <div className="flex items-center">
                                        {isActive && (
                                            <span className="absolute -left-0.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary"></span>
                                        )}
                                        <span className={`ml-${isActive ? '4' : '2'}`}>{item.label}</span>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>

                    {/* Logo (Center on desktop) */}
                    <div className="hidden md:flex justify-center flex-1">
                        <Link href="/" className="flex items-center">
                            <img src="/logo-black.png" alt="Logo" className="h-10" />
                        </Link>
                    </div>

                    {/* Auth Button and Mobile Menu Button */}
                    <div className="flex items-center space-x-4">
                        <div className="hidden md:block">
                            <Button variant="ghost" className="!py-2 !px-6">
                                Get Started
                            </Button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden bg-white border-t"
                    >
                        <div className="container mx-auto px-4 py-4 space-y-2">
                            {NAV_ITEMS.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                                            isActive 
                                                ? 'bg-quaternary text-primary' 
                                                : 'text-gray-800 hover:bg-gray-50'
                                        }`}
                                    >
                                        <div className="flex items-center">
                                            {isActive && (
                                                <span className="mr-2 w-1.5 h-1.5 rounded-full bg-primary"></span>
                                            )}
                                            {item.label}
                                        </div>
                                    </Link>
                                );
                            })}
                            <div className="pt-2">
                                <Button variant="primary" className="w-full !py-3">
                                    Get Started
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar; 