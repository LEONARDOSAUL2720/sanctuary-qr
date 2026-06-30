/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{js,html}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#081534",
        "navy-mid": "#1e2a4a",
        "navy-lt": "#2d3f6e",
        gold: "#c8a84b",
        "gold-dim": "#a8882e",
        "gold-bg": "#fffbeb",
        surface: "#f9f9ff",
        "surf-lo": "#f0f3ff",
        "surf-card": "#ffffff",
        "outline-v": "#e5e7eb",
        "on-surf": "#111c2c",
        muted: "#6b7280"
      },
      fontFamily: {
        sans: ["Manrope", "system-ui", "sans-serif"],
        label: ["Inter", "system-ui", "sans-serif"]
      },
      maxWidth: {
        content: "1200px"
      }
    }
  },
  plugins: []
}