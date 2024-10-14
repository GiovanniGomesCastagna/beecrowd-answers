var input = require("fs").readFileSync("./dev/stdin/file.txt", "utf8");
var lines = input.split(" ");

let [a, b, c] = lines.map((a) => +a);
// Math.abs -> transforma o valor da conta em absoluto (positivo), independente de seu resultado.
let maiorAB = (a + b + Math.abs(a - b)) / 2;

let maiorC = (maiorAB + c + Math.abs(maiorAB - c)) / 2;

console.log(`${maiorC} eh o maior`);
