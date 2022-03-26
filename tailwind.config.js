module.exports = {
  theme: {
    colors: {
      white: '#ffffff',
      background: '#01204C',
      primary: {
        light: '#FFB1EE',
        DEFAULT: '#FF56F6',
      },
      secondary: '#44AAEB',
      red: '#FC6B6B',
    },
  },
  variants: {},
  plugins: [],
  content: [
    'components/**/*.vue',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'plugins/**/*.js',
    'nuxt.config.js',
    // TypeScript
    'plugins/**/*.ts',
    'nuxt.config.ts',
  ],
}
