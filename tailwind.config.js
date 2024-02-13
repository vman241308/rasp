import withMT from "@material-tailwind/react/utils/withMT";

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "custom-gray": "#2A2A2A",
      "custom-blue": "#4092F3",
      "custom-success-pressed": "#3CC784",
    },
    screens: {
      'xs': '430px'
    }
  },
  plugins: [],
});