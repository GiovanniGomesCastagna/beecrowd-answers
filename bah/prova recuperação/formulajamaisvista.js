let inicial = 3
let maximo = 1000
let decrem = 2

let i = Number();

while (inicial <= maximo) {
  inicial += inicial - decrem
  i++
}
console.log(i)