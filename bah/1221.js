var input = require("fs").readFileSync("./dev/stdin/file.txt", "utf8");
var lines = input.split("\n");

let times = +lines.shift();
let i = 0;

let values = +lines.shift();

while (i < times) {
  if (
    values % 2 === 0 ||
    values % 3 === 0 ||
    values % 5 === 0 ||
    values % 7 === 0
  ) {
    console.log("Not Prime");
  } else {
    console.log("Prime");
  }
  values = +lines.shift();
  i++
}
