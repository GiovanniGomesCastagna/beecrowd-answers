// var input = require("fs").readFileSync("./dev/stdin/file.txt", "utf8");
// var lines = input.split("\n");

let expression = 3;
let text = "!";

switch (expression) {
  case 1:
    text += "1";
    break
  case 2:
    text += "2";
    break
  default:
    text += "3";
    break
}

console.log(text)