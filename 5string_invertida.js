let string = "Escreva um programa que inverta os caracteres de um string.";
let stringInvertida = "";

for(let i = string.length - 1; i >= 0; i--) {
  stringInvertida += string[i];
}

console.log(stringInvertida); 