var input = require("fs").readFileSync("./dev/stdin/file.txt", "utf8");
var lines = input.split("\n");


let [x, y] = lines.shift().split(" ");
let X = parseInt(x), Y = parseInt(y);
let i, text = "", sum = 0;

while (true) {
  if (X <= 0 || Y <= 0) break;
  if (X > Y) {
    for (i = Y; i <= X; i++) {
      text += (i === Y ? "" : " ") + i;
      sum += i;
    }
    console.log(text + " Sum=" + sum);
  } else if (Y > X) {
    for (i = X; i <= Y; i++) {
      text += (i === X ? "" : " ") + i;
      sum += i;
    }
    console.log(text + " Sum=" + sum);
  } else {
    console.log(X + " Sum=" + X);
  }

  [x, y] = lines.shift().split(" ");
  X = parseInt(x);
  Y = parseInt(y);
  text = "";
  sum = 0;
}