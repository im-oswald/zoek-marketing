/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-purple-primary': 'var(--brand-purple-primary)',
        'brand-purple-secondary': 'var(--brand-purple-secondary)',
        'brand-purple-tertiary': 'var(--brand-purple-tertiary)',
        'brand-orange-primary': 'var(--brand-orange-primary)',
        'brand-orange-secondary': 'var(--brand-orange-secondary)',
        'brand-off-white': 'var(--brand-off-white)',
        'brand-yellow': 'var(--brand-yellow)',
        'brand-green-primary': 'var(--brand-green-primary)',
        'brand-green-secondary': 'var(--brand-green-secondary)',
        'brand-blue-primary': 'var(--brand-blue-primary)',
        'brand-blue-secondary': 'var(--brand-blue-secondary)',
        'brand-black': 'var(--brand-black)',
        'brand-red': 'var(--brand-red)',
        'brand-background': 'var(--brand-background)'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        newake: ['Newake', 'sans-serif'],
        centuryGothic: ['CenturyGothic', 'sans-serif']
      }
    }
  },
  plugins: []
};
