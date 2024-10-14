var input = require("fs").readFileSync("./dev/stdin/file.txt", "utf8");
var lines = input.split(" ");

let [a, b, c] = lines.map((a) => +a);
const pi = 3.14159;
let tri = (a * c) / 2;
let cir = pi * (c ** 2);
let trap = ((a + b) * c) / 2;
let quad = b * b;
let ret = a * b;

console.log(
  `TRIANGULO: ${tri.toFixed(3)}
CIRCULO: ${cir.toFixed(3)}
TRAPEZIO: ${trap.toFixed(3)}
QUADRADO: ${quad.toFixed(3)}
RETANGULO: ${ret.toFixed(3)}`
);
