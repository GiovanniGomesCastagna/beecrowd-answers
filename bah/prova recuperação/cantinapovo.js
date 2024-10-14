let codLanche = 106
let qtde = 5

let total = Number();

switch (codLanche) {
  case 100:
    total = 7.50 * qtde;
    break;
  case 101:
    total = 15.30 * qtde;   
    break;
  case 102:
    total = 4.50 * qtde;
    break;
  case 103:
    total = 6.00 * qtde;
    break;
  case 104:
    total = 5.50 * qtde;
    break;
  case 105:
    total = 10.00 * qtde;
    break;
  case 106:
    total = 11.00 * qtde;
    break;
  case 107:
    total = 5.00 * qtde;
    break;
  case 108:
    total = 2.50 * qtde;
    break;
  case 109:
    total = 8.00 * qtde;
    break;
}

console.log(`R$ ${total.toFixed(2)}`);

// 100 - Cachorro quente 7,50
// 101 - Xis 15,30
// 102 - Esfira 4,50
// 103 - Mini Pizza 6,00
// 104 - Enroladinho 5,50
// 105 - Fandangos 10,00
// 106 - Doritos 11,00
// 107 - Suco 5,00
// 108 - Água 2,50
// 109 - Refrigerante (2L) 8,00