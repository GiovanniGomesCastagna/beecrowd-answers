var input = require("fs").readFileSync("./dev/stdin/file.txt", "utf8");
var lines = input.split("\n");

let value = +lines.shift();
let finalValue = 2;

for (i = 0; i < 10000; i++) {
  if (i % value === 2) {
    console.log(i)
  }
}