var input = require("fs").readFileSync("./dev/stdin/file.txt", "utf8");
var lines = input.split("\n");

let value = lines.shift();
let cedulas = [100, 50, 20, 10, 5, 2];
let coins = [1, 0.5, 0.25, 0.1, 0.05, 0.01];

console.log("NOTAS:");
cedulas.forEach((money) => {
  let count = Math.floor(value / money);
  console.log(`${count.toFixed(0)} nota(s) de R$ ${money.toFixed(2)}`);
  value = value % money;
});

console.log("MOEDAS:");
coins.forEach((dinheiros) => {
  let count = Math.ceil(value / dinheiros);
  console.log(`${count.toFixed(0)} moeda(s) de R$ ${dinheiros.toFixed(2)}`);
  value = value % dinheiros;
});
