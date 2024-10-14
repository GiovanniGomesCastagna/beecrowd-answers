var input = require("fs").readFileSync("./dev/stdin/file.txt", "utf8");
var lines = input.split("\n");

// retorna os valores das notas e calcula a média.
const getValues = (line) => line.split(" ").map((a) => +a);
let [first, second, third, fourth] = getValues(lines.shift());
let average = (first * 2 + second * 3 + third * 4 + fourth * 1) / 10;

console.log(`Media: ${average.toFixed(1)}`);

if (average >= 7.0) {
  console.log("Aluno aprovado.");
} else if (average < 5.0) {
  console.log("Aluno reprovado.");
} else if (average >= 5.0 || average < 7.0) {
  console.log("Aluno em exame.");
  let exam = +lines.shift();
  let examResult = (exam + average) / 2;
  console.log(`Nota do exame: ${exam.toFixed(1)}`);
  console.log(examResult <= 4.9 ? "Aluno reprovado." : "Aluno aprovado.");
  console.log(`Media final: ${examResult.toFixed(1)}`);
}
