module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'inconsolata': ['Inconsolata', 'cursive'],
        'zen-dots': ['Zen dots'],

      },
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
        gery: "var(--gery)",
        darkgrey: "var(--darkgrey)",
        lightgrey: "var(--lightgrey)",
        white: "var(--white)",
        background: "var(--background)",
        header: "var(--header)",
      }
    },
  },
  plugins: [],
}
