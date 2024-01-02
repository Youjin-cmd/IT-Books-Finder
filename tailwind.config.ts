import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      white: "#FFFFFF",
      mattBlack: "#393939",
      black: "#000000",
      lightGrey: "#F5F5F5",
      grey: "#D9D9D9",
      darkGrey: "#B1B1B1",
      yellow: "#F4F0CD",
      red: "#D33434",
      redHover: "#DB7474",
      blue: "#4285F4",
      blueHover: "#679df5",
    },
  },
  plugins: [],
}
export default config
