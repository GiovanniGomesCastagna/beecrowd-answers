var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let a = +lines.shift();
let b = +lines.shift();

console.log(`X = ${a+b}`)