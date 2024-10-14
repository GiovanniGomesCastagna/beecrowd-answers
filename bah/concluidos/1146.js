var input = require("fs").readFileSync("./dev/stdin/file.txt", "utf8");
var lines = input.split("\n");

let valueTaker = +lines.shift();
let printer = "";

while (valueTaker != 0) {
  for (let i = 1; i <= valueTaker; i++) {
    if (i < valueTaker) {
      printer += i + " ";
    } else if (i == valueTaker) {
      printer += i;
    }
  }
  console.log(printer);
  valueTaker = +lines.shift();
  printer = "";
}