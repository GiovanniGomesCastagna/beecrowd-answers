var input = require("fs").readFileSync("./dev/stdin/file.txt", "utf8");
var lines = input.split("\n");

const getValues = (line) => line.split(" ");
let count = +lines.shift();

let qtdCoelhos = Number();
let qtdRatos = Number();
let qtdSapos = Number();
let total = Number();

for (i = 0; i < count; i++) {
  let [ammount, type] = getValues(lines.shift());
  total += Number(ammount);

  switch (type) {
    case "C":
      qtdCoelhos += Number(ammount);
      break;
    case "R":
      qtdRatos += Number(ammount);
      break;
    case "S":
      qtdSapos += Number(ammount);
      break;
  }
}

console.log(`Total: ${total} cobaias
Total de coelhos: ${qtdCoelhos}
Total de ratos: ${qtdRatos}
Total de sapos: ${qtdSapos}
Percentual de coelhos: ${((qtdCoelhos * 100) / total).toFixed(2)} %
Percentual de ratos: ${((qtdRatos * 100) / total).toFixed(2)} %
Percentual de sapos: ${((qtdSapos * 100) / total).toFixed(2)} %`)
