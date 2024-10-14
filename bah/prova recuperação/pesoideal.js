let sexo = 'M'
let altura = 1.78

let pesoIdeal = Number();

switch (sexo) {
  case 'M':
    pesoIdeal = (72.7 * altura) - 58;
    break;
  case 'F':
    pesoIdeal = (62.1 * altura) - 44.7;
    break;
}

console.log(`Peso ideal: ${pesoIdeal.toFixed(2)}`)