const proper = require("proper-upper-case");
const now = require("./second.js");
const result = proper("nischal MAINALI");
console.log(result + "" + now.now());
