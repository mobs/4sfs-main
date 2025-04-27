'use client'
import { motion } from 'framer-motion';

const Input = ({ 
    icon,
    placeholder, 
    className = '', 
    type = 'text',
    onChange,
    value,
    ...props 
}) => {
    return (
        <div className="relative w-full">
            {icon && (
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 z-50">
                    {icon}
                </div>
            )}
            <motion.input
                whileFocus={{ scale: 1.01 }}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`w-full px-4 py-3 ${icon ? 'pl-12' : 'pl-4'} rounded-xl bg-white/80 backdrop-blur-sm border border-gray-100 focus:outline-none focus:border-secondary focus:ring-0 transition-all duration-300 ${className}`}
                {...props}
            />
        </div>
    );
};

export default Input; 