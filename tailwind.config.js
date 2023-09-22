/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      inter: ['Inter', 'sans'],
    },
    extend: {
      backgroundImage: {
        'auth-background': "url('/images/loginart.png')",
      },

      colors: {
        primaryPurple: '#701A75',
        blueGray: '#F1F5F9',
        'primary-gray': '#727272',
        'primary-red': '#D55015',
        'off-white': '#f4f4f4',
        'offed-white': '#F6F6F6',
        darkBlueBlack: '#0F172A',
        yellowbg: '#FACC15',
        lightGray: '#F8F8FC',
        lightGrayBlue: '#CCDDF0',
        darkishBlueGray: '#0F172A',
        gray: '#344054',
        ash: '#D0D5DD',
      },
    },
  },
  plugins: [],
};
