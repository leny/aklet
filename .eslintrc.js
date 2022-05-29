/* leny/aklèt
 *
 * /.eslintrc.js - ESLint config
 *
 * coded by leny
 * started at 27/05/2022
 */

module.exports = {
    extends: "@leny",
    parser: "@babel/eslint-parser",
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
        babelOptions: {
            presets: ["@babel/preset-react"],
        },
    },
    rules: {
        "no-console": 0,
        "react/jsx-max-depth": 0,
        "react/no-array-index-key": 0,
    },
};
