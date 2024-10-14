var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

let raio = lines.shift();
let n = 3.14159;
let calc = n * (raio ** 2);

console.log(`A=${calc.toFixed(4)}`);