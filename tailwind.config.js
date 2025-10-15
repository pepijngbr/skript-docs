module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'l-nav-bg': '#f8f9fa',
        'd-nav-bg': '#212529',
        'l-sidebar-bg': '#e9ecef',
        'd-sidebar-bg': '#343a40',
        'l-content-bg': '#ffffff',
        'd-content-bg': '#121212',
        'l-text-primary': '#212529',
        'd-text-primary': '#f8f9fa',
        'l-text-secondary': '#6c757d',
        'd-text-secondary': '#adb5bd',
        'l-border': '#dee2e6',
        'd-border': '#495057',
      },
    },
  },
  plugins: [],
}
