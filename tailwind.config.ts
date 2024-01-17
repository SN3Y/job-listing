import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      "Desaturated-Dark-Cyan" : "hsl(180, 29%, 50%)",
      "Light-Grayish-Cyan-(Background)" : "hsl(180, 52%, 92%)",
      "Light-Grayish-Cyan": "(Filter Tablets): hsl(180, 31%, 95%)",
      "Dark-Grayish-Cyan": "hsl(180, 8%, 52%)",
      "Very-Dark-Grayish-Cyan": "hsl(180, 14%, 20%)",
      "white": "#ffffff"
    }
  },
  plugins: [],
}
export default config
