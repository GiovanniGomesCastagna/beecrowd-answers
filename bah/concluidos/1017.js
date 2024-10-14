var input = require("fs").readFileSync("./dev/stdin/file.txt", "utf8");
var lines = input.split("\n");

const [hours, kmh] = lines.map(Number);

let liters = (hours * kmh) / 12;

console.log(liters.toFixed(3));
