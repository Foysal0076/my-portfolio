/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          md: '2rem',
        },
      },
      fontFamily: {
        overlock: ['Overlock', 'sans-serif'],
        unbounded: ['Unbounded', 'sans-serif'],
      },
      fontSize: {
        'btn-1': [
          '1rem',
          {
            lineHeight: '1.5rem',
            fontWeight: '400',
          },
        ],
        'btn-2': [
          '.875rem',
          {
            lineHeight: '1rem',
            fontWeight: '400',
          },
        ],
        'subtitle-1': [
          '1.125rem',
          {
            lineHeight: '1.75rem',
            fontWeight: '500',
          },
        ],
      },
      colors: {
        primary: '#FEBD02',
        'primary-contrast': '#1a1a1a',
        'primary-50': '#fff8e6',
        'primary-100': '#ffebb1',
        'primary-200': '#ffe18b',
        'primary-300': '#fed355',
        'primary-400': '#feca35',
        'primary-500': '#febd02',
        'primary-600': '#e7ac02',
        'primary-700': '#b48601',
        'primary-800': '#8c6801',
        'primary-900': '#6b4f01',
        'neutral-0': '#ffffff',
        'neutral-10': '#fafafa',
        'neutral-20': '#f6f6f6',
        'neutral-30': '#ededed',
        'neutral-40': '#e1e1e1',
        'neutral-50': '#c6c6c6',
        'neutral-60': '#b8b8b8',
        'neutral-70': '#adadad',
        'neutral-80': '#9f9f9f',
        'neutral-90': '#919191',
        'neutral-100': '#838383',
        'neutral-200': '#767676',
        'neutral-300': '#686868',
        'neutral-400': '#5c5c5c',
        'neutral-500': '#4f4f4f',
        'neutral-600': '#434343',
        'neutral-700': '#333333',
        'neutral-800': '#252525',
        'neutral-900': '#1a1a1a',
      },
      backgroundImage: {
        doodle: "url('/assets/images/background-doodle.png')",
      },
      textColor: {
        primary: '#ffffff',
        link: '#febd02',
        accent: '#febd02',
      },
    },
  },
  plugins: [],
}
