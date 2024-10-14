// var input = require("fs").readFileSync("./dev/stdin/file.txt", "utf8");
// var lines = input.split("\n");

// let expression = 2;
// let text = "!";

// switch (expression) {
//   case 1:
//     text = "1";
//     break;
//   case 2:
//     text = "2";
//     break;
//   default:
//     text = "3";
//     break;
// }

// console.log(text);

// let vList = ["banana", "maçã", "pera", "laranja", "abacate"];

// for (let i = 0; i < 5; i++) {
//   console.log(vList[i]);
// }
// // vList.lenght --> "tamanho" do vetor/matriz

// for (const key in vList) {
//   console.log(key);
// }

// for (const iterator of vList) {
//   console.log(iterator);
// }

// function mult (a,b) {
//   return a * b
// }

// function add (a,b) {
//   return a + b
// }

// function calculator (a, b, fn) {
//   return fn (a,b);
// }
// console.log(calculator(10, 5, add))
// console.log(calculator(20,54, (i, j) => (i - j)))
// console.log(calculator(20,5, function(x,y){
//   return x / y
// }))

//Declaração de classe/tipo novo
class Automovel {
  constructor(name) {this.name = name}
  andar() {
    console.log(`Meu ${this.name} está andando. . . . . .`);
  }
}

//declaração de nova função utilizando a nova classe
Automovel.prototype.freiar = function () {
  console.log(`Meu ${this.name} está freiando . . . . . . parou!`)
}

let carro = new Automovel('Volkswagen Polo 2013')
carro.andar()
carro.freiar()