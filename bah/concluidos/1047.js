var input = require("fs").readFileSync("./dev/stdin/file.txt", "utf8");
var lines = input.split(" ");

let [firstHour, firstMinute, secondHour, secondMinute] = lines.map(a => +a);

// variáveis utilizadas para calcular horas e minutos;
let countH;
let countM;

// cálculo de horas
// -------------------
// se a hora inicial for menor
if (firstHour < secondHour) {
  countH = secondHour - firstHour;
// se a hora final for menor
} else if (firstHour > secondHour) {
  countH = 24 - firstHour + secondHour;
// se a 
} else if (firstHour === secondHour) {
  countH = 0;
}

// cálculo de minutos;
if (firstMinute < secondMinute) {
  countM = secondMinute - firstMinute;
} else if (firstMinute > secondMinute) {
  countM = 60 - firstMinute + secondMinute
  if (countH === 1 && countM !== 0) {
    countH = 0;
  } else if (countH === 0 && countM !== 0) {
    countH = 23;
  }
} else if (firstMinute === secondMinute) {
  countM = 0;
  countH = 24;
}

console.log(`O JOGO DUROU ${countH} HORA(S) E ${countM} MINUTO(S)`)