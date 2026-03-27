/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/app/**/*.{js,jsx,ts,tsx}',
        './src/components/**/*.{js,jsx,ts,tsx}',
        './src/pages/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    50: '#f5f9ff',
                    100: '#e6f0ff',
                    500: '#0f4aa6',
                    700: '#0b3b85',
                },
            },
            borderRadius: {
                '3xl': '1.5rem',
            },
        },
    },
    plugins: [],
};
