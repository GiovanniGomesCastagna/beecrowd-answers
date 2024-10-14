var input = require("fs").readFileSync("./dev/stdin/file.txt", "utf8");
var lines = input.split("\n");

let age = +lines.shift();
let days = [365, 30, 1];
let name = ['ano(s)', 'mes(es)', 'dia(s)']
let time = [];

for (let i = 0; i < days.length; i++) {
  let count = Math.floor(age / days[i]);
  console.log(count, name[i])
  age = age % days[i];
}