// //length() => tamanho

// let frutas = ["Maça", "Banana", "Kiwi", "Carambola", "Morango", "Ameixa", "Abacaxi", "Abacate", "Jabiticaba", "Romã", "Seriguela", "Embu", "Caqui", "Uva verde", "Uva roxa"];
 
// console.log(frutas.length)

//------------------------------------------------------------------------------------------------------------

// // .reverse() => reverter

// let numeros = [70, 100, 120, 1000];

// numeros.reverse();

// console.log(numeros);

//------------------------------------------------------------------------------------------------------------

// //.push() => Adiciona no final 
// //.unshift() => Adiciona no início
// //.pop() => Remover no final 
// //.splice => Serve para remover um específico, dentro do () vem dois numeros, sendo o primeiro o numero no array e o segundo a quantidade que você quer apagar 
// //.shift => Remove no início

// let nomes = ["Valdemir", "Edson", "Anna", "Ana"];

// nomes.push("Matheus");

// nomes.unshift("Sophia");

// console.log(nomes);

//------------------------------------------------------------------------------------------------------------

// //.include() => Se existe no array, se existir ele retornará true, se não existir ele retornará false

// let nomesAnimais = ["Julie", "Meg", "Mel", "Kiara", "Lola", "Sol"];

// console.log(nomesAnimais.includes("Bob"));

//------------------------------------------------------------------------------------------------------------

// //.filter() => retorna elementos que se identificam a condição

// let valores = [30, 55, 90, 66];

// //quero os valores maiores que 50 

// let maiores = valores.filter(num => num > 50);

// console.log(maiores);

//------------------------------------------------------------------------------------------------------------

//.map() => O `.map()` é um método que percorre um array e retorna um **novo array** com os elementos 
// **transformados** de acordo com a função aplicada.

// let numeros = [2, 4, 6, 8, 10];

// let dobro = numeros.map(n => n * 2);

// console.log(dobro);

//-------------------------------------------------------------------------------------------------------------

//lista de alunos e notas

// let alunos = [
//     {nome:"Clara", nota:8},
//     {nome:"Laura", nota:10},
//     {nome:"Hiorhana",nota:9}
// ]

// //Lista de nomes dos alunos

// let alunosNomes = alunos.map(aluno => aluno.nome)
// let alunosNotas = alunos.map(aluno => aluno.nota)

// console.log(alunosNomes);
// console.log(alunosNotas);
//-------------------------------------------------------------------------------------------------------------
// let nomes = ["lucas","kaue","Emilly",]

// let inicialNomes = nomes.map(element => element[0])

// console.log(inicialNomes);
//-------------------------------------------------------------------------------------------------------------
let emails = ["pedro@gmail.com", "spada@outlook.com", "meneghetti@yahoo.com"]

let dominios = emails.map(element => element.split("@"[1]))

console.log(dominios);
