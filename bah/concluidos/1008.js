var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

const [id,hours,salary] = lines.map(Number);

console.log(`NUMBER = ${id}\nSALARY = U$ ${(hours * salary).toFixed(2)}`);