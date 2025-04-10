let prompt = require('prompt-sync')();
let num = 0;

do {

console.log(" ________________");
console.log("|                |");
console.log("|    1- jogar    |");
console.log("|    2- config   |");
console.log("|    0-sair      |");
console.log("|                |");
console.log("|________________|");

num = Number(prompt("Digite um numero :"))

    
} while (num !== 0);

