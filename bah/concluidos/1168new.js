var input = require("fs").readFileSync("./dev/stdin/file.txt", "utf8");
var lines = input.split("\n");

let prompt = function(text) {return lines.shift()};

const table = new Map()
  table.set('0', 6);
  table.set('1', 2);
  table.set('2', 5);
  table.set('3', 5);
  table.set('4', 4);
  table.set('5', 5);
  table.set('6', 6);
  table.set('7', 3);
  table.set('8', 7);
  table.set('9', 6);
  
const cases = parseInt(prompt())
let num, leds;

for (let i = 0; i < cases; i++) {
  num = prompt();
  leds = 0;
  
  for (let char of num) {;
    leds += table.get(char);
  }

  console.log(`${leds} leds`);
}