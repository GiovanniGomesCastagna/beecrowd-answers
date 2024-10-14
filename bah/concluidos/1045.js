var input = require("fs").readFileSync("./dev/stdin/file.txt", "utf8");
var lines = input.split(" ");

let [a, b, c] = lines
  // .shift()
  // .split(" ")
  .map((a) => +a)
  .sort((a, b) => b - a);

if (a >= b + c) {
  console.log("NAO FORMA TRIANGULO");
  return false
}
if (a ** 2 === b ** 2 + c ** 2) {
  console.log("TRIANGULO RETANGULO");
}
if (a ** 2 > b ** 2 + c ** 2) {
  console.log("TRIANGULO OBTUSANGULO");
}
if (a ** 2 < b ** 2 + c ** 2) {
  console.log("TRIANGULO ACUTANGULO");
}
if (a === b && b === c && a === c) {
  console.log("TRIANGULO EQUILATERO");
}
if ((a === b && c !== a) || (b === c && a !== b) || (c === a && a !== b)) {
  console.log("TRIANGULO ISOSCELES");
}
