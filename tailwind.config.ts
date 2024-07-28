import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens:{
        "xs":"480px",
        "sm":"640px",
        "md":"768px",
        "lg":"1024"
      },
      fontFamily: {
        'segoe': ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
      },
      backgroundImage: {
        "form-bg": "url('/bg.jpg')", 
      },
    },
  },
  plugins: [],
};
export default config;
