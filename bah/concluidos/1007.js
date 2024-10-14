var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

let a = +lines.shift();
let b = +lines.shift();
let c = +lines.shift();
let d = +lines.shift();

let diff = +[(a * b) - (c * d)];
console.log(`DIFERENCA = ${diff}`)