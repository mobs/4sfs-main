'use client'
import React from 'react';

const Button = ({ 
    children, 
    variant = 'primary', 
    className = '', 
    onClick,
    ...props 
}) => {
    const baseClasses = 'group relative px-6 py-3 text-sm tracking-wide font-medium transition-all duration-300 overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';
    
    const variants = {
        primary: 'bg-primary text-white hover:bg-primary/90 focus-visible:ring-primary',
        secondary: 'bg-secondary text-white hover:bg-secondary/90 focus-visible:ring-secondary',
        white: 'bg-transparent text-white border border-white/50 hover:bg-white/10 hover:border-white focus-visible:ring-white',
        dark: 'bg-transparent text-gray-800 border border-gray-800/50 hover:bg-gray-800/10 hover:border-gray-800 focus-visible:ring-gray-800',
        outline: 'bg-transparent border border-current hover:bg-current/10 focus-visible:ring-current',
        ghost: 'bg-quaternary text-gray-800 '
    };

    let animationColorClass = 'text-white';
    if (variant === 'white') animationColorClass = 'text-white';
    else if (variant === 'dark' || variant === 'ghost') animationColorClass = 'text-gray-800';
    else if (variant === 'outline') animationColorClass = '';

    return (
        <button
            className={`${baseClasses} ${variants[variant]} ${className}`}
            onClick={onClick}
            {...props}
        >
            <span className={`absolute inset-0 pointer-events-none overflow-hidden rounded-[inherit] ${animationColorClass}`}> 
                <span 
                    className="absolute top-0 left-0 h-[2px] bg-current w-0 transition-all duration-200 ease-out group-hover:w-full group-hover:delay-[0.6s]" 
                    aria-hidden="true"
                ></span>
                
                <span 
                    className="absolute top-0 right-0 w-[1px] bg-current h-0 transition-all duration-200 ease-out group-hover:h-full group-hover:delay-[0s]" 
                    aria-hidden="true"
                ></span>
                
                <span 
                    className="absolute bottom-0 right-0 h-[1px] bg-current w-0 transition-all duration-200 ease-out group-hover:w-full group-hover:delay-[0.2s]" 
                    aria-hidden="true"
                ></span>
                
                <span 
                    className="absolute bottom-0 left-0 w-[1px] bg-current h-0 transition-all duration-200 ease-out group-hover:h-full group-hover:delay-[0.4s]" 
                    aria-hidden="true"
                ></span>
            </span>
            
            <span className="relative z-10 inline-block"> 
                {children}
            </span>
        </button>
    );
};

export default Button; 