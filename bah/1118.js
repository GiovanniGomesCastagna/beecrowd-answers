var input = require("fs").readFileSync("./dev/stdin/file.txt", "utf8");
var lines = input.split("\n");

let grades = [];
grades[0] = -1;
grades[1] = -1;
let sum = 0;
let calcAnalyzer = 0;

for (let i = 0; i < lines.length; i++) {
  if (sum != 0) {
    grades[10] = calcAnalyzer;
    // console.log(grades[10]) 
    if (calcAnalyzer == 1) {
      console.log("novo calculo (1-sim 2-nao)");
      sum = 0;
    } else if (calcAnalyzer == 2) {
      console.log("novo calculo (1-sim 2-nao)");
    } else if (calcAnalyzer != 1 && calcAnalyzer != 2) {
      console.log("novo calculo (1-sim 2-nao)");
      calcAnalyzer = lines[i + 1];
    }
  } else {
    if (lines[i] < 0 || lines[i] > 10) {
      console.log("nota invalida");
    } else if (lines[i] >= 0 && lines[i] <= 10 && grades[0] == -1) {
      grades[0] = Number(lines[i]);
    } else if (lines[i] >= 0 && lines[i] <= 10 && grades[0] != -1) {
      grades[1] = Number(lines[i]);
    }
    if (grades[0] > 0 && grades[1] > 0) {
      sum = (grades[0] + grades[1]) / 2;
      grades[0] = -1;
      grades[1] = -1;
      console.log(`media = ${sum.toFixed(2)}`);
    }
  }
}
