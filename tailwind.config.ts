import type { Config } from 'tailwindcss'

const h1 = 64;

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        'h1': `${h1}px`,
        'h2': `${h1 / 1.3}px`,
        'h3': `${h1 / 2.6}px`,
        'h4': `${h1 / 3.9}px`,
      },
    },
  },
  plugins: [],
}
export default config
