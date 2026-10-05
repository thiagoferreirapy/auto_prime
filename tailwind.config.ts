import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: { display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'] },
      borderRadius: { lg: '6px', xl: '8px', '2xl': '12px' },
      colors: {
        brand: {
          DEFAULT: '#33691E',
          dark: '#2E5D1B',
          soft: '#EEF5EA'
        },
        ink: '#202124',
        muted: '#6B7280',
        surface: '#F7F7F7',
        line: '#E5E7EB'
      },
      boxShadow: {
        soft: '0 1px 3px rgba(0,0,0,.06)',
        float: '0 2px 8px rgba(0,0,0,.08)'
      }
    }
  },
  plugins: []
};

export default config;
