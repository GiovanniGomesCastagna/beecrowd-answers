var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

let p1 = 3.5
let p2 = 7.5

let a = +lines.shift();
let b = +lines.shift();

let TOTAL = [(a * p1) + (b * p2)] / 11;

console.log(`MEDIA = ${TOTAL.toFixed(5)}`);