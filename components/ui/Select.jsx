'use client'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

const Select = ({ 
    icon,
    placeholder = 'Select option', 
    options = [],
    value,
    onChange,
    className = '',
    ...props 
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(value || null);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
        if (onChange) onChange(option);
    };

    return (
        <div className="relative w-full">
            {icon && (
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-gray-400">
                    {icon}
                </div>
            )}
            
            <motion.button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full flex items-center justify-between px-4 py-3 ${icon ? 'pl-12' : 'pl-4'} rounded-xl bg-white/80 backdrop-blur-sm border border-gray-100 text-left focus:outline-none focus:border-secondary transition-all duration-300 ${className}`}
                {...props}
            >
                <span className={selectedOption ? 'text-gray-900' : 'text-gray-400'}>
                    {selectedOption ? selectedOption.label : placeholder}
                </span>
                <FiChevronDown 
                    className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                    size={16} 
                />
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute z-50 w-full mt-1 bg-white rounded-xl shadow-lg border border-gray-100 max-h-60 overflow-auto"
                    >
                        {options.map((option) => (
                            <div
                                key={option.value}
                                onClick={() => handleOptionClick(option)}
                                className="px-4 py-2 hover:bg-gray-50 cursor-pointer transition-colors"
                            >
                                {option.label}
                            </div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Select; 