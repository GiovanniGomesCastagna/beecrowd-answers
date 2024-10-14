let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

let line = +lines.shift();
let operation = lines.shift();
let sum = Number();
let average = Number();
let matrix = [];

for (let i = 0; i < 12; i++) {
  for (let j = 0; j < 12; j++) {
    matrix[j] = +lines.shift();
    if (i === line) {
      sum += matrix[j];
      average += matrix[j];
    }
  }
}

if (operation === 'M') {
  console.log((average / 12).toFixed(1));
} else if (operation === 'S') {
  console.log(sum.toFixed(1));
}