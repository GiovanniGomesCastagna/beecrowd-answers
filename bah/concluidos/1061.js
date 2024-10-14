var input = require("fs").readFileSync("./dev/stdin/file.txt", "utf8");
var lines = input.split("\n");

const getValues = (line) => line.split(' ');
const getTime = (line) => line.split(' : ').map(Number);

//retira horário inicial
let removeFirst = [] = getValues(lines.shift());
removeFirst[1] = Number(removeFirst[1])
let timerFirst = [] = getTime(lines.shift());

// retira horário final
let removeLast = [] = getValues(lines.shift());
removeLast[1] = Number(removeLast[1]);
let timerLast = [] = getTime(lines.shift());

let conversionFirst = (timerFirst[0] * 3600) + (timerFirst[1] * 60) + timerFirst[2];
let conversionLast = (timerLast[0] * 3600) + (timerLast[1] * 60) + timerLast[2];

let differenceDays = removeLast[1] - removeFirst[1];
if (conversionLast <= conversionFirst) {
 differenceDays -= 1
  
}

function difference (first, last) {
  if (last >= first) {
    return last - first;
  } else if (first > last){
    return 24 * 3600 - first + last;
  }
}

let differenceTime = difference(conversionFirst, conversionLast);
let hours = Math.floor(differenceTime / 3600);
let minutes = Math.floor((differenceTime % 3600) / 60);
let seconds = differenceTime % 60;


console.log(
  `${differenceDays} dia(s)
${hours} hora(s)
${minutes} minuto(s)
${seconds} segundo(s)`)