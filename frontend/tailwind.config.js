/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkbg: "#121212",
        cardbg: "#1E1E1E",
        primary: "#2979FF",
        secondary: "#00BFA5"
      },
    },
  },
  plugins: [],
}

