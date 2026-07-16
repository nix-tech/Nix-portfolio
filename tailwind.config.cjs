/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primaryBg: 'var(--background)',
        secondaryBg: 'var(--secondary-bg)',
        violet: 'var(--primary)',
        violetLight: 'var(--primary-light)',
        textSecondary: 'var(--text-secondary)'
      },
      borderRadius: {
        'xl-20': '20px'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      }
    }
  },
  plugins: []
};
