import { defineConfig } from "windicss/helpers";
import colors from 'windicss/colors';

export default defineConfig({
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
        gray: colors.coolGray,
        blue: colors.lightBlue,
        red: colors.rose,
        pink: colors.fuchsia,
      },
    },
  },
  extract: {
    include: ["src/**/*.{ts,tsx}"],
    exclude: ["node_modules", ".git"],
  },
});
