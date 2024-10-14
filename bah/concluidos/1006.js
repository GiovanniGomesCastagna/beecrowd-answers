var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

let p1 = 2;
let p2 = 3;
let p3 = 5;

let a = +lines.shift();
let b = +lines.shift();
let c = +lines.shift();

let total = [(p1 * a) + (p2 * b) + (p3 * c)] / 10;

console.log(`MEDIA = ${total.toFixed(1)}`);