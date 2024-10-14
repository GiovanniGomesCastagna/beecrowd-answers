var input = require("fs").readFileSync("./dev/stdin/file.txt", "utf8");
var lines = input.split(" ");

let [valueF, valueS, valueT] = lines.map((a) => +a);

let menor = Math.min(valueF, valueS, valueT);
let maior = Math.max(valueF, valueS, valueT);
let mediana;
if (valueF > menor && valueF < maior) {
  mediana = valueF;
} else if (valueS > menor && valueS < maior) {
  mediana = valueS;
} else if (valueT > menor && valueT < maior) {
  mediana = valueT;
}

console.log(`${menor}\n${mediana}\n${maior}\n\n${valueF}\n${valueS}\n${valueT}`)