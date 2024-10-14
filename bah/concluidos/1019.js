var input = require("fs").readFileSync("./dev/stdin/file.txt", "utf8");
var lines = input.split("\n");

let number = parseInt(linse.shift());

let hours = Math.floor(number/3600);
let minutes = Math.floor((number % 3600) / 60);
let seconds = number % 60;

console.log(`${hours}:${minutes}:${seconds}`);