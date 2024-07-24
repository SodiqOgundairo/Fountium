import withMT from "@material-tailwind/react/utils/withMT";
/** @type {import('tailwindcss').Config} */
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: '#0b88ee',
        accent: '#0260AD',
        dark: '#010101',
        light: '#f1f1f1',
      }
    },
  },
  plugins: [],
})