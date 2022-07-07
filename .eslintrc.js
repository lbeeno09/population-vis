/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
    root: true,
    extends: [
        "plugin:vue/vue3-essential",
        "eslint:recommended",
        "plugin:prettier/recommended",
        "prettier/vue"
        "@vue/eslint-config-typescript/recommended",
        "@vue/eslint-config-prettier",
    ],
};
