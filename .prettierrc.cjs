module.exports = {
  arrowParens: "always",
  printWidth: 80,
  singleQuote: true,
  jsxSingleQuote: true,
  semi: false,
  trailingComma: "all",
  tabWidth: 2,
  plugins: [require.resolve('prettier-plugin-astro')],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
