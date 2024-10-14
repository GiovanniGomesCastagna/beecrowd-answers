var input = require("fs").readFileSync("./dev/stdin/file.txt", "utf8");
var lines = input.split(" ");

let [firstHour, secondHour] = lines.map((a) => +a);
let count;

if (firstHour > secondHour) {
  count = 24 - firstHour;
  count = count + secondHour;
} else if (secondHour > firstHour) {
  count = secondHour - firstHour;
} else if (firstHour == secondHour) {
  count = 24;
}

console.log(`O JOGO DUROU ${count} HORA(S)`)