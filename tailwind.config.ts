import type { Config } from "tailwindcss";
import animatePlugin from "tailwindcss-animate";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        width: "width",
      },
      fontFamily: {
        openSans: ["var(--font-open-sans)"],
        lato: ["var(--font-lato)"],
        sarabun: ["var(--font-sarabun)"],
        montserrat: ["var(--font-montserrat)"],
      },
      screens: {
        "2sm": "481px",
        "max-2sm": { raw: "(max-width: 480px)" },
        "2smh": { raw: "(max-height: 600px)" },
        smh: { raw: "(max-height: 680px)" },
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "max-sm": { raw: "(max-width: 640px)" },
        "max-md": { raw: "(max-width: 768px)" },
        "max-lg": { raw: "(max-width: 1024px)" },
        "max-xl": { raw: "(max-width: 1280px)" },
        "max-2xl": { raw: "(max-width: 1536px)" },
      },
      colors: {
        primary: "rgb(var(--primary))",
        "primary-foreground": "rgb(var(--primary-foreground))",
        secondary: "rgb(var(--secondary))",
        "secondary-foreground": "rgb(var(--secondary-foreground))",
        muted: "rgb(var(--muted))",
        "muted-foreground": "rgb(var(--muted-foreground))",
        accent: "rgb(var(--accent))",
        "accent-foreground": "rgb(var(--accent-foreground))",
        destructive: "rgb(var(--destructive))",
        "destructive-foreground": "rgb(var(--destructive-foreground))",
        border: "rgb(var(--border))",
        input: "rgb(var(--input))",
        ring: "rgb(var(--ring))",
        "chart-1": "rgb(var(--chart-1))",
        "chart-2": "rgb(var(--chart-2))",
        "chart-3": "rgb(var(--chart-3))",
        "chart-4": "rgb(var(--chart-4))",
        "chart-5": "rgb(var(--chart-5))",
        card: "rgb(var(--card))",
        "card-foreground": "rgb(var(--card-foreground))",
        popover: "rgb(var(--popover))",
        "popover-foreground": "rgb(var(--popover-foreground))",
        bg: {
          principal: "rgb(var(--var-background-principal))",
          marca50: "rgb(var(--var-marca-50))",
          marca65: "rgb(var(--var-marca-65))",
          marca80: "rgb(var(--var-marca-80))",
          marca100: "rgb(var( --var-marca-100))",
          marca200: "rgb(var(--var-marca-200))",
          marca300: "rgb(var(--var-marca-300))",
          marca400: "rgb(var(--var-marca-400))",
          marca500: "rgb(var(--var-marca-500))",
          marca600: "rgb(var(--var-marca-600))",
          marca700: "rgb(var(--var-marca-700))",
          marca800: "rgb(var(--var-marca-800))",
          marca900: "rgb(var(--var-marca-900))",
          marca950: "rgb(var(--var-marca-950))",
        },
        text: {
          branco: "rgb(var(--var-text-branco))",
          "cinza-claro": "rgb(var(--var-text-cinza-claro))",
          "cinza-escuro": "rgb(var(--var-text-cinza-escuro))",
          "verde-claro": "rgb(var(--var-text-verde-claro))",
          "verde-medio": "rgb(var(--var-text-verde-medio))",
          "verde-escuro": "rgb(var(--var-text-verde-escuro))",
        },
        var: {
          "accessibility-header-bg": "rgb(var(--var-accessibility-header-bg))",
          "accessibility-header-icon": "rgb(var(--var-accessibility-header-icon))",

          branco: {
            "100": "rgb(var(--var-branco-100))",
            "card-100": "rgb(var(--var-branco-card))",
          },

          cinza: {
            "150": "rgb(var(--var-cinza-150))",
            "400": "rgb(var(--var-cinza-400))",
            "500": "rgb(var(--var-cinza-500))",
            "600": "rgb(var(--var-cinza-600))",
          },

          verde: {
            "50": "rgb(var(--var-verde-50))",
            "300": "rgb(var(--var-verde-300))",
            "400": "rgb(var(--var-verde-400))",
            "600": "rgb(var(--var-verde-600))",
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        miniSectionBackgroundTexture: "url(/img/miniSectionBackgroundTexture.svg)",
        "edition-banner": "url('/img/capa.png')",
      },
      animation: {
        scroll: "scroll 40s linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-250px * 14))" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
    },
  },
  plugins: [
    animatePlugin,
    function ({ addUtilities }: any) {
      const newUtilities = {
        ".scrollbar-thin": {
          scrollbarWidth: "thin",
          scrollbarColor: "rgb(var(--rev-azul-principal))",
        },
        ".scrollbar-webkit": {
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgb(var(--rev-azul-principal))",
            borderRadius: "20px",
            border: "1px solid white",
          },
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
    require("tailwind-scrollbar-hide"),
  ],
};

export default config;
