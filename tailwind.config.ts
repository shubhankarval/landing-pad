import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // mode: 'jit',
  // purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // backgroundImage: {
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      backgroundImage: {
        "tech": "url('/hydra/tech-image.svg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "analytics-top": "url('/analytics/background-top.svg')",
        "analytics-bottom": "url('/analytics/background-bottom.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
