var prompt = require('prompt-sync')();

let Senha = 12345;

let SenhaInformada = Number(prompt("Qual a senha?"))
if (SenhaInformada == Senha)     
{
    console.log("A senha esta correta")
} 
else {
    console.log("a senha informada esta incorreta")
}