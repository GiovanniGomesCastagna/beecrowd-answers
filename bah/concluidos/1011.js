var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

let R = lines.shift();
const pi = 3.14159;
let total = (4/3.0) * pi * R**3;

console.log(`VOLUME = ${total.toFixed(3)}`);