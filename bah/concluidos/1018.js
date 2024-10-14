var input = require("fs").readFileSync("./dev/stdin/file.txt", "utf8");
var lines = input.split("\n");

let value = lines.shift();
let ced = [100, 50, 20, 10, 5, 2, 1];

console.log(value)
// .forEach -> realizará uma ação para cada valor/variável de um array/vetor

ced.forEach(money => {
  // Math.floor -> arredonda valores pelo menor número divisível possível, 
  // se há outro valor (Ex.: 100 / 25), então será feito a divisão até o último número inteiro possível.  
  let count = Math.floor(value / money);
  console.log(`${count} nota(s) de R$ ${money},00`);
  value = value % money;
});