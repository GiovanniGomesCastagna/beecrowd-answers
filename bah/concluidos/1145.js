var input = require("fs").readFileSync("./dev/stdin/file.txt", "utf8");
var lines = input.split(" ");

let columns = +lines.shift();
let amount = +lines.shift();

let printer = "";

let j = 0;
let counter = 0;

while (j < amount) {
  for (let i = 1; i <= columns; i++) {
    j++;
    if (j < amount && i < columns) {
      printer += j + " ";
    } else if (j == amount) {
      printer += j;
    } else {
      printer += j;
    }
  } 
  counter++;
  console.log(printer)
  printer = "";
}