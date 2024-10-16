var input = require("fs").readFileSync("./dev/stdin/file.txt", "utf8");
var lines = input.split("\n");

const valueTaker = (line) => line.split(" ").map((a) => +a);

let goals = [];
let matchInput;

let interWins = 0;
let gremioWins = 0;
let draws = 0;
console.log("Novo grenal (1-sim 2-nao)");
let gameCounter = 1;

while (matchInput != 2) {
  goals = valueTaker(lines.shift());
  matchInput = +lines.shift();
  console.log("Novo grenal (1-sim 2-nao)");
  gameCounter++;
  if (goals[0] > goals[1]) {
    interWins++;
  } else if (goals[1] > goals[0]) {
    gremioWins++;
  } else if (goals[0] == goals[1]) {
    draws++;
  }
  console.log(interWins, gremioWins, draws);
}

console.log(`Inter:${interWins}`);
console.log(`Gremio:${gremioWins}`);
console.log(`Empates:${draws}`);
if (interWins > gremioWins) {
  console.log("Inter venceu mais");
} else {
  console.log("Gremio venceu mais");
}
