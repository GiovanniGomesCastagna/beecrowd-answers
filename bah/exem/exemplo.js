let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n')

let x = +lines.shift();
let y = +lines.shift();

console.log(`X = ${x+y}`)
// let x = Number(linhas.shift())
// let z = +12
// let x = ('10 ');
// let y = ('20');

// console.log(x + y);
// console.log(z)