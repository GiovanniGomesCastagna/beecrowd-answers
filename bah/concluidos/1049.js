var input = require("fs").readFileSync("./dev/stdin/file.txt", "utf8");
var lines = input.split("\n");

let type = lines.shift();
let family = lines.shift();
let diet = lines.shift();

if (type === "vertebrado") {
  if (family === "ave") {
    if (diet === "carnivoro") {
      console.log("aguia");
    } else if (diet === "onivoro") {
      console.log("pomba");
    }
  } else if (family === "mamifero") {
    if (diet === "onivoro") {
      console.log("homem");
    } else if (diet === "herbivoro") {
      console.log("vaca");
    }
  }
} else if (type === "invertebrado") {
  if (family === "inseto") {
    if (diet === "hematofago") {
      console.log("pulga");
    } else if (diet === "herbivoro") {
      console.log("lagarta");
    }
  } else if (family === "anelideo") {
    if (diet === "hematofago") {
      console.log("sanguessuga");
    } else if (diet === "onivoro") {
      console.log("minhoca");
    }
  }
}
