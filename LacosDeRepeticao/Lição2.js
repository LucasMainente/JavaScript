//Somar números até que o usuário digite 0(Use o While)
let prompt = require('prompt-sync')();

let soma =0;


let num = Number(prompt("Digite um numero"));

while (num !== 0) {
soma += num;
num = Number(prompt("Digite um numero(caso queira sair digite 0)"));
}


console.log(soma);
