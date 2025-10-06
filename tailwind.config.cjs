module.exports = {
  content: ["./src/**/*.{astro,js,ts,jsx,tsx,md,mdx,html}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#DCE8F5",
          500: "#266AA6",
          600: "#1E578B",
          700: "#17436F",
          800: "#113156",
          900: "#0B1F3A",
        },
        neutral: {
          100: "#F1F5F9",
          300: "#CBD5E1",
          500: "#64748B",
          700: "#334155",
          900: "#0F172A",
        },
        accent: {
          100: "#D6F5F8",
          500: "#14A3B8",
          700: "#0E7C86",
        },
        status: {
          success: "#1F7A5B",
          warning: "#B45309",
          error:   "#9F1239",
          info:    "#155E75",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
        ],
      },
      boxShadow: {
        card: "0 1px 2px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.10)",
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
      },
    },
  },
  plugins: [],
};
