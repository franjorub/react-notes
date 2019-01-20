module.exports = {
  rules: {
    "no-console": 0
  },
  parser: "babel-eslint",
  extends: "airbnb",
  plugins: ["react", "import", "jsx-a11y"],
  env: {
    browser: true,
    node: true
  }
};
