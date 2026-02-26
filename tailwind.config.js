/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class', // Optional: enables dark mode via class
    content: [
        './src/**/*.{js,jsx,ts,tsx}', // Scan all components for Tailwind classes
    ],
    theme: {
        extend: {
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(-10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeInDown: {
                    '0%': { opacity: 0, transform: 'translateY(-20px)' },
                    '100%': { opacity: 1, transform: 'translateY(0)' },
                },
                slideInLeft: {
                    '0%': { opacity: 0, transform: 'translateX(-50px)' },
                    '100%': { opacity: 1, transform: 'translateX(0)' },
                },
                slideInRight: {
                    '0%': { opacity: 0, transform: 'translateX(50px)' },
                    '100%': { opacity: 1, transform: 'translateX(0)' },
                },
                bounceInLeft: {
                    '0%': { transform: 'translateX(-150%) scale(0.1)', opacity: '0' },
                    '60%': { transform: 'translateX(30px) scale(1.05)', opacity: '1' },
                    '80%': { transform: 'translateX(-10px) scale(0.95)' },
                    '100%': { transform: 'translateX(0) scale(1)' },
                },

            },
            animation: {
                fadeIn: 'fadeIn 1s ease-out',
                slideUp: 'slideUp 1s ease-out',
                bounceInLeft: 'bounceInLeft 1s ease-out forwards',

            },

        },
    },
    plugins: [],
};