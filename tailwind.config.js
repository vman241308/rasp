import withMT from "@material-tailwind/react/utils/withMT";

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "custom-gray": "#2A2A2A",
      "custom-gray-light": "#EDEFF5",
      "custom-gray-extra-light": "#F5F7FB",
      "custom-blue": "#4092F3",
      "custom-blue-light": "#6FC4FF",
      "custom-success-pressed": "#3CC784",
    },
  },
  plugins: [],
});
