var input = require("fs").readFileSync("./dev/stdin/file.txt", "utf8");
var lines = input.split("\n");

let [a, b, c, d] = lines.shift().trim().split(" ").map((x) => parseInt(x));

if (b > c && d > a && c + d > a + b && c > 0 && d > 0 && a % 2 === 0) {
  console.log("Valores aceitos");
} else {
  console.log("Valores nao aceitos");
}