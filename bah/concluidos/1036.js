var input = require("fs").readFileSync("./dev/stdin/file.txt", "utf8");
var lines = input.split("\n");

const getValues = (line) => line.split(" ").map((a) => +a);
let [a, b, c] = getValues(lines.shift());

const delta = b ** 2 - 4 * a * c;
let R1 = (-(b) + Math.sqrt(delta)) / (2 * a);
let R2 = (-(b) - Math.sqrt(delta)) / (2 * a);

if (a === 0 || delta < 0) {
  console.log("Impossivel calcular");
} else {
  console.log(`R1 = ${R1.toFixed(5)}
  R2 = ${R2.toFixed(5)}`);
}
