var input = require("fs").readFileSync("./dev/stdin/file.txt", "utf8");
var lines = input.split("\n");

let values = [];

for (i = 0; i < 20; i++) {
  values[i] = +lines.shift()
}
values.reverse();

for (i = 0; i < 20; i++) {
  console.log(`N[${i}] = ${values[i]}`)
}