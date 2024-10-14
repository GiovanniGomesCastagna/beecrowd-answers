var input = require("fs").readFileSync("./dev/stdin/file.txt", "utf8");
var lines = input.split("\n");

let prices = [0, 4.0, 4.5, 5.0, 2.0, 1.5];

const pegarValores = (line) => line.split(" ").map(a => +a);
let [ord1, ord2] = pegarValores(lines.shift());

let bill = prices[ord1] * ord2;

console.log(`Total: R$ ${bill.toFixed(2)}`);