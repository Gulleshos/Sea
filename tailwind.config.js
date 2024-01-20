/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
      colors: {
          primary: "#3C3D41",
          secondary: "#B8D8E0",
          lightGray: "#E9E9E9",
          white: "#ffffff",
          error: "#FF7235",
          phantom: "rgba(60, 61, 65, 0.60)",
      },
      boxShadow: {
          section: "5px 5px 10px 0px rgba(22, 27, 29, 0.23), -5px -5px 10px 0px #FAFBFF",
          standart: "10px 10px 30px 0px rgba(0, 0, 0, 0.15)",
          menuItem: "0px -2px 10px 0px rgba(0, 0, 0, 0.45), 0px 4px 4px 0px rgba(0, 0, 0, 0.25);",
      },
      extend: {
          dropShadow: {
              standart: '0px 20px 30px rgba(138, 149, 158, 0.20)',
              menuItem: "0px -2px 10px 0px rgba(0, 0, 0, 0.45), 0px 4px 4px 0px rgba(0, 0, 0, 0.25);"
          },
          keyframes: {
              slideIn: {
                  from: {
                      transform: "translateY(50%)",
                  },
                  to: {
                      transform: "translateY(0)",
                  },
              },
              slideOut: {
                  from: {
                      transform: "translateY(0)",
                  },
                  to: {
                      transform: "translateY(100%)",
                  },
              },
          },
          animation: {
              "slide-in-out": "slideIn 0.5s, slideOut 0.5s 4.5s",
          },
      },
  },
  plugins: [],
};
