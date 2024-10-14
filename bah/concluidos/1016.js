var input = require("fs").readFileSync("./dev/stdin/file.txt", "utf8");
var lines = input.split("\n");

let distance = parseFloat(lines.shift());
let soma = distance * 2;

console.log(soma + ' minutos');
