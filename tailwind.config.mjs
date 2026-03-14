/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ns: {
          bg: '#060911',
          'bg-deep': '#030508',
          surface: '#0c1220',
          elevated: '#121a2b',
          text: '#e8e2d9',
          'text-secondary': '#7a8494',
          accent: '#c8a55c',
          'accent-hover': '#d4b87a',
          border: '#1a2235',
          'border-light': '#243049',
        },
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'Georgia', '"Times New Roman"', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        '7xl': ['5rem', { lineHeight: '1.05' }],
        '8xl': ['6.5rem', { lineHeight: '1' }],
      },
      letterSpacing: {
        'widest-plus': '0.2em',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
