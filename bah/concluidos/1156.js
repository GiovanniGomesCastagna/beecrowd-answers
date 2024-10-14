let S = 0;
let odds = 1;
let evens = 1;

for (let i = 0; i < 19; i++) {
  S += odds / evens;
  odds += 2;
  evens *= 2;
}
console.log(S.toFixed(2))