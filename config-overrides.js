const { override, useBabelRc } = require("customize-cra");
const path = require("path");

module.exports = override(
    useBabelRc() //su dung babelrc de ghi de
);
