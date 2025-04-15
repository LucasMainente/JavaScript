# JavaScript
# 📘 Projeto de Estudo: Métodos do JavaScript

Este repositório tem como objetivo explorar e praticar **os principais métodos disponíveis na linguagem JavaScript**, com foco em manipulação de arrays, objetos, strings e outros recursos importantes da linguagem.

## 📚 Objetivo

Aprender, testar e documentar o uso de métodos nativos do JavaScript de forma prática, criando exemplos e desafios para cada categoria de método.

---

## 📂 Estrutura do Projeto

- `arrayMethods.js` - Métodos de arrays (como `.map()`, `.filter()`, `.reduce()`, `.forEach()`, `.some()`, `.every()`, etc.)
- `stringMethods.js` - Métodos de strings (como `.toUpperCase()`, `.includes()`, `.slice()`, `.replace()`, etc.)
- `objectMethods.js` - Métodos e manipulação de objetos (`Object.keys()`, `Object.values()`, `Object.entries()`, etc.)
- `mathMethods.js` - Métodos da biblioteca Math (`Math.floor()`, `Math.random()`, `Math.max()`, etc.)
- `dateMethods.js` - Métodos de manipulação de datas (`Date()`, `.getFullYear()`, `.toLocaleDateString()`, etc.)
- `desafios/` - Pasta com pequenos desafios práticos usando os métodos estudados.
- `README.md` - Arquivo explicativo (este aqui!).

---

## 🛠️ Tecnologias

- JavaScript (versão ES6+)
- Node.js para rodar os arquivos via terminal

---

## 🚀 Como Executar

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/js-metodos


const numeros = [1, 2, 3, 4, 5];
const dobro = numeros.map(n => n * 2); // [2, 4, 6, 8, 10]


const texto = "Aprendendo JavaScript!";
console.log(texto.toUpperCase()); // "APRENDENDO JAVASCRIPT!"


const pessoa = { nome: "João", idade: 25 };
console.log(Object.keys(pessoa)); // ["nome", "idade"]
