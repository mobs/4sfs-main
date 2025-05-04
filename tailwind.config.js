/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        modernline: ['Modernline', 'sans-serif'], 
        caslon: ['BigCaslon', 'serif']
      },
      colors: {
        primary: '#093819',
        secondary: '#35DEA4',
        tertiary: '#ADB4AF',
        quaternary: '#F6f6d0',
        accent: '#ED8936',
        lightgray: '#EDF2F7',
        darkgray: '#2D3748',
        bgGray: '#F9FAFB',
        success: '#48BB78',
        warning: '#ECC94B',
        error: '#F56565',
        muted: '#718096',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
        'border-top': 'borderTop 0.35s cubic-bezier(0.25, 0.1, 0.25, 1) forwards',
        'border-right': 'borderRight 0.35s cubic-bezier(0.25, 0.1, 0.25, 1) forwards',
        'border-bottom': 'borderBottom 0.35s cubic-bezier(0.25, 0.1, 0.25, 1) forwards',
        'border-left': 'borderLeft 0.35s cubic-bezier(0.25, 0.1, 0.25, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        borderTop: {
          '0%': { width: '0', opacity: '0.4' },
          '100%': { width: '100%', opacity: '1' },
        },
        borderRight: {
          '0%': { height: '0', opacity: '0.4' },
          '100%': { height: '100%', opacity: '1' },
        },
        borderBottom: {
          '0%': { width: '0', right: '0', left: 'auto', opacity: '0.4' },
          '100%': { width: '100%', right: 'auto', left: '0', opacity: '1' },
        },
        borderLeft: {
          '0%': { height: '0', bottom: '0', top: 'auto', opacity: '0.4' },
          '100%': { height: '100%', bottom: 'auto', top: '0', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    // require('flowbite/plugin'),
  ],
};
