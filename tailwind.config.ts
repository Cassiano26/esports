import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          90: '#1A0524',
          80: '#3C0B54',
          70: '#5E1185',
          60: '#8017B5',
          50: '#AA1EF1',
          40: '#AA1EF1D9', 
          30: '#AA1EF1A6',
          20: '#AA1EF173',
          10: '#AA1EF140', 
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
