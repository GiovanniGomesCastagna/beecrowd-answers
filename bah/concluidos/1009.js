var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

let name = lines.shift(String);
let [salary, bonus] = lines.map(Number);
let total = (bonus * 0.15) + salary;

console.log(`TOTAL = R$ ${total.toFixed(2)}`)