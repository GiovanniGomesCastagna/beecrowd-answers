let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')
// Padrão, sempre fica no início

const pegarValores = (line) => line.split(" ").map(a => +a)
// Utilizado para calcular múltiplos valores de uma linha
const [a,b,c] = pegarValores(lines.shift())
// Utiliza para atribuir os valores anteriores à variáveis

let x = +lines.shift()