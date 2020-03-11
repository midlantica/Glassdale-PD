module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: "plugin:prettier/recommended",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    fetch: false,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["prettier"],
  rules: {
    // allow paren-less arrow functions
    "arrow-parens": 0,
    // INDENT DEFAULT AT 2 SPACES
    indent: ["error", 2],
    // allow async-await
    "generator-star-spacing": 0,
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
    "prettier/prettier": "error",
  },
}
