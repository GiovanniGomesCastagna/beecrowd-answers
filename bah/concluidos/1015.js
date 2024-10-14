var input = require("fs").readFileSync("./dev/stdin/file.txt", "utf8");
var lines = input.split("\n");

let getValue = (line) => line.split(" ").map((a) => +a);

let [x1, y1] = getValue(lines.shift());

let [x2, y2] = getValue(lines.shift());

let distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

console.log(distance.toFixed(4));
