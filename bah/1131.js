const { match } = require("assert");

var input = require("fs").readFileSync("./dev/stdin/file.txt", "utf8");
var lines = input.split("\n");

const valueTaker = (line) => line.split(" ").map((a) => +a);

let goals = ([] = valueTaker(lines.shift()));
let matchInput = +lines.shift();

let interWins = 0;
let gremioWins = 0;
let draws = 0;

while (matchInput == 1) {
  if (goals[0] > goals[1]) {
    interWins++;
  } else if (goals[1] > goals[0]) {
    gremioWins++;
  } else if (goals[0] == goals[1]) {
    draws++;
  }
  goals = valueTaker(lines.shift());
  matchInput = +lines.shift();
}
