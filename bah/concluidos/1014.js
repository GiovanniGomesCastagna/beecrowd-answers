var input = require("fs").readFileSync("./dev/stdin/file.txt", "utf8");
var lines = input.split("\n");

let km = paseFloat(lines.shift());
let litter = parseFloat(lines.shift());
let consume = km / litter;

console.log(consume.toFixed(3) + ' km/l');