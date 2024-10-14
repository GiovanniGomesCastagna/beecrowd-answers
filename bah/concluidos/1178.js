var input = require("fs").readFileSync("./dev/stdin/file.txt", "utf8");
var lines = input.split("\n");

let value = +lines.shift();
value = value.toFixed(6)
let values = [];
values[0] = parseFloat(value).toFixed(4);
console.log(`N[0] = ${values[0]}`)

function formatting(num) {
  var decimalValues = (num.toString().split('.')[1]);
  if (decimalValues[4] <= 5 && decimalValues[5] == 0) {
    return num.toString().split('.')[0] + '.' + decimalValues[0] + decimalValues[1] + decimalValues[2] + decimalValues[3];
  }
  return parseFloat(num).toFixed(4);
}

for (i = 1; i < 100; i++) {
  values[i] = values[i - 1] / 2;
  values[i] = values[i].toFixed(6)
  console.log(`N[${i}] = ${formatting(values[i])}`)
}