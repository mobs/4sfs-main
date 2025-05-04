'use client'
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import Button from '../ui/Button';
import { NAV_ITEMS } from '../../constants/navigation';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleMouseEnter = (label) => {
        setActiveDropdown(label);
    };

    const handleMouseLeave = () => {
        setActiveDropdown(null);
    };

    const dropdownVariants = {
        hidden: { 
            opacity: 0,
            y: -5,
            transition: {
                duration: 0.2
            }
        },
        visible: { 
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.2
            }
        }
    };

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
                            const isActive = pathname === item.href || 
                                           (item.children?.some(child => child.href === pathname));
                            return (
                                <div
                                    key={item.label}
                                    className="relative"
                                    onMouseEnter={() => handleMouseEnter(item.label)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <Link
                                        href={item.href}
                                        className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-full flex items-center group
                                            ${isActive 
                                                ? 'text-primary bg-quaternary' 
                                                : 'text-gray-800 hover:text-primary hover:bg-gray-50'}`}
                                    >
                                        <div className="flex items-center">
                                            {isActive && (
                                                <span className="absolute -left-0.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary"></span>
                                            )}
                                            <span className={`ml-${isActive ? '4' : '2'}`}>{item.label}</span>
                                            {item.children && (
                                                <FiChevronDown 
                                                    className={`ml-1 transition-transform duration-200 ${
                                                        activeDropdown === item.label ? 'rotate-180' : ''
                                                    }`} 
                                                    size={14} 
                                                />
                                            )}
                                        </div>
                                    </Link>
                                    <AnimatePresence>
                                        {item.children && activeDropdown === item.label && (
                                            <motion.div
                                                initial="hidden"
                                                animate="visible"
                                                exit="hidden"
                                                variants={dropdownVariants}
                                                className="absolute top-full left-0 mt-2 py-2 w-56 bg-white rounded-xl shadow-lg border border-gray-100 backdrop-blur-sm"
                                            >
                                                {item.children.map((child) => {
                                                    const isChildActive = pathname === child.href;
                                                    return (
                                                        <Link
                                                            key={child.label}
                                                            href={child.href}
                                                            className={`block px-4 py-2.5 text-sm transition-all duration-200
                                                                ${isChildActive 
                                                                    ? 'text-primary bg-quaternary font-medium' 
                                                                    : 'text-gray-700 hover:text-primary hover:bg-gray-50'}`}
                                                        >
                                                            <div className="flex items-center">
                                                                {isChildActive && (
                                                                    <span className="mr-2 w-1.5 h-1.5 rounded-full bg-primary"></span>
                                                                )}
                                                                {child.label}
                                                            </div>
                                                        </Link>
                                                    );
                                                })}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
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
                        <div className="hidden md:flex gap-3">
                            <Button variant="ghost" className="!py-2 !px-6">
                                Get Loan
                            </Button>
                            <Button variant="primary" className="!py-2 !px-6">
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
                                const isActive = pathname === item.href || 
                                               (item.children?.some(child => child.href === pathname));
                                return (
                                    <div key={item.label}>
                                        <div
                                            onClick={() => {
                                                if (item.children) {
                                                    setActiveDropdown(activeDropdown === item.label ? null : item.label);
                                                } else {
                                                    setIsMobileMenuOpen(false);
                                                }
                                            }}
                                            className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
                                                isActive 
                                                    ? 'bg-quaternary text-primary' 
                                                    : 'text-gray-800 hover:bg-gray-50'
                                            }`}
                                        >
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center">
                                                    {isActive && (
                                                        <span className="mr-2 w-1.5 h-1.5 rounded-full bg-primary"></span>
                                                    )}
                                                    {item.label}
                                                </div>
                                                {item.children && (
                                                    <FiChevronDown
                                                        className={`transform transition-transform duration-200 ${
                                                            activeDropdown === item.label ? 'rotate-180' : ''
                                                        }`}
                                                    />
                                                )}
                                            </div>
                                        </div>
                                        <AnimatePresence>
                                            {item.children && activeDropdown === item.label && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -10 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="pl-4 mt-1 space-y-1"
                                                >
                                                    {item.children.map((child) => {
                                                        const isChildActive = pathname === child.href;
                                                        return (
                                                            <Link
                                                                key={child.label}
                                                                href={child.href}
                                                                onClick={() => setIsMobileMenuOpen(false)}
                                                                className={`block px-4 py-2.5 text-sm transition-all duration-200 rounded-lg
                                                                    ${isChildActive 
                                                                        ? 'bg-quaternary text-primary font-medium' 
                                                                        : 'text-gray-700 hover:bg-gray-50 hover:text-primary'}`}
                                                            >
                                                                <div className="flex items-center">
                                                                    {isChildActive && (
                                                                        <span className="mr-2 w-1.5 h-1.5 rounded-full bg-primary"></span>
                                                                    )}
                                                                    {child.label}
                                                                </div>
                                                            </Link>
                                                        );
                                                    })}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            })}
                            <div className="pt-2 space-y-2">
                                <Button variant="ghost" className="w-full !py-3">
                                    Get Loan
                                </Button>
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