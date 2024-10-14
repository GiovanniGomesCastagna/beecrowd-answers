var input = require("fs").readFileSync("./dev/stdin/file.txt", "utf8");
var lines = input.split("\n");

let times = +lines.shift();
let speaker = "Ho";

for (let i = 0; i < times; i++) {
  if (i === times - 1){
    speaker = speaker + "!";
  } else {    
    speaker = speaker + " Ho";
  }
}

console.log(speaker)