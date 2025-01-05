import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#008073",
        // primary: "#E94343",
        accent: "#64998D",
        // accent: "#bd5b5b",
      },
    },
  },
  plugins: [daisyui],
};
