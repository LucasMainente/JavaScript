var prompt = require('prompt-sync')();

let MediaDoAluno = Number(prompt("Qual a media do aluno"));

if (MediaDoAluno < 5) {
    console.log("O aluno esta Retido");
} else {
    console.log("O aluno foi aprovado");
}