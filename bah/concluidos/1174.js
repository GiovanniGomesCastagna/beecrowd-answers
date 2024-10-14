var input = require("fs").readFileSync("./dev/stdin/file.txt", "utf8");
var lines = input.split("\n");

let values = [];

for (i = 0; i < 100; i++) {
  values[i] = lines.shift();
  values[i] = parseFloat(values[i]).toFixed(1)
  if (values[i] <= 10) {
    console.log(`A[${i}] = ${values[i]}`)
  }
}