/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', 'sans-serif'],
                display: ['Quicksand', 'sans-serif'],
            },
            colors: {
                brand: {
                    cream: '#FDF8F0',
                    dark: '#2D3B2D',
                    green: '#3A5A40',
                    lightGreen: '#A3B18A',
                    gold: '#E9C46A',
                    sage: '#DAD7CD',
                }
            }
        },
    },
    plugins: [],
}
