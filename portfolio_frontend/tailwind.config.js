/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#38bdf8",
        primary: "#64748b",
        secondary: "#e5e7eb",
      },
      boxShadow: {
        subtle: "0 8px 30px rgba(0,0,0,0.06)",
      },
      backgroundImage: {
        "subtle-radial":
          "radial-gradient(1200px 600px at 50% -10%, rgba(56,189,248,0.08), transparent 60%)",
      },
    },
  },
  plugins: [],
};
