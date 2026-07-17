/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0D1B2A",
        panel: "#132A40",
        panel2: "#0F2135",
        gridline: "rgba(151,187,219,0.12)",
        gridStrong: "rgba(151,187,219,0.22)",
        paper: "#EAF0F6",
        slate: {
          DEFAULT: "#8FA6BD",
          dim: "#5C7590",
        },
        amber: {
          DEFAULT: "#E8A33D",
        },
        cyanAccent: "#5FD1CC",
      },
      fontFamily: {
        mono: [
          '"IBM Plex Mono"',
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
        sans: [
          '"IBM Plex Sans"',
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "sans-serif",
        ],
      },
      backgroundImage: {
        "blueprint-grid":
          "linear-gradient(rgba(151,187,219,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(151,187,219,0.12) 1px, transparent 1px)",
        "blueprint-glow":
          "radial-gradient(ellipse 80% 55% at 50% 0%, rgba(95,209,204,0.08), transparent 60%)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
      keyframes: {
        draw: {
          to: { strokeDashoffset: "0" },
        },
      },
      animation: {
        draw: "draw 1.6s ease forwards",
      },
    },
  },
  plugins: [],
};
