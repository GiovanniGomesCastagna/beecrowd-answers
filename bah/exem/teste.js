var input = require("fs").readFileSync("./dev/stdin/file.txt", "utf8");
var lines = input.split("\n");

let a = 10
let b = '10';

if (a !== +b) {
  console.log('Diferentes');
} else {
  console.log('Iguais');
};