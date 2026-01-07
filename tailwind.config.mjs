const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ibm: ["var(--font-ibm)"],
      },
      colors: {
        /* =========================
           Brand – Umako
        ========================= */

        primary: {
          DEFAULT: "#62475C", // brand anchor
          soft: "#A78B9E", // hover / focus / subtle UI
          accent: "#A6A5C4", // highlights, AI signals
        },

        /* =========================
           Backgrounds
        ========================= */

        background: {
          soft: "#F8F2F4", // light sections
          muted: "#E3D2D8", // alternating sections
        },

        /* =========================
           Text
        ========================= */

        text: {
          primary: "#2B1F26", // main headings
          secondary: "#5F4A52", // body text
          muted: "#8C7A82", // helper text
        },

        /* =========================
           Borders & Dividers
        ========================= */

        border: {
          subtle: "#E4D2D8",
          muted: "#D1BCC3",
        },
      },
    },
  },
  plugins: [],
};

export default config;
