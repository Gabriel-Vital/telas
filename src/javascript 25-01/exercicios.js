// console.log('hello, World');

// String: "texto" 'texto'
// number: 1 2 3 4.5
// boolean: true or false
// array: [1, 2, 3, 4] ["a", "b", "c"]
// object: {
// nome: 'fabio'
// idade: 22
// cidade: 'Fortaleza'
// }

// variaveis: let: variavel que ser alterado ao decorrer
// const: variavel que não poder ser alterada
// var: armazenamento que pode colocar qualquer dado (não é mais utilizado)

//Exercicio 1:
// let idade = 25;

// idade = 30;

// console.log(idade);

// console.log(30);
//-------------------------------------------------------------------------------------------------------------------------------------------------
// function:
// function soma(n1, n2) {
//     return n1 + n2;
// }

// // arrow function
// const subtrair = (n1, n2) => {
//     return n1 - n2
// }

// // call back:
// const lista = ["maça", "banana", "laranja", "manga", "morango"];

// lista.map((item, indice) => {
//     console.log(`Meu item é ${item} e meu índice é ${indice}`)
// })

//-------------------------------------------------------------------------------------------------------------------------------------------------
// estrutura condicional
// estrutura if: if (condição) {
//
// }
// exemplo:
// let idade = 25;

// if (idade >= 18) {
//     console.log('Você é maior de idade')
// }

//exercicio 2 Média (professor):
// let aluno = "Gabriel";

// let n1 = 9;
// let n2 = 5;
// let n3 = 7;

// const media = (n1+n2+n3) / 3;

// console.log("A média do(a) " + aluno + " foi de: " + media);

// exercicio 2  calcular area de um retângulo:
// largura = 10
// altura = 20

// let largura = 10;
// let altura = 20;

// const area = largura*altura;

// console.log("A área do retângulo é igual a: " + area);

// =====================================================================================

// laços de repetição: basicamente um loop para ficar um código mais legivel e dinâmico.
// EX:
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// while: mudança de sintaxe mas o uso é parecido com o for
// Ex:
// let i = 1;
// while (i <= 5) {
//     console.log(i);
//     i++;
// }

// console.log("Jogo de advinhação");

// let valorDigitado;

// while (valorDigitado !== 3) {
//     valorDigitado = Number(prompt("Digite um número de 1 á 10:"))

//     if (valorDigitado !== 3) {
//         console.log("Tente novamente!")
//     }
// }

// console.log("Parabéns, você acertou o número secreto!")

// Do... While: usa pelo menos uma vez

// let i = 1;
// do {
//     console.log(i)
//     i++;
// } while (i <= 3);

// for...of

// const lista = ["maça", "banana", "laranja", "manga", "morango"];

// for (let item of lista) {
//     console.log(item)
// }

// =====================================================================================

// Array:
// trocar item da lista conforme índice:
// const lista = ["maça", "banana", "laranja", "manga", "morango"];

// lista[1] = "uva";

// console.log(lista[1]);
// console.log(lista);

// ==

// adicionar itens a lista:
// const lista = ["maça", "banana", "laranja", "manga", "morango"];

// lista.push("abacaxi");
// console.log(lista);

// ==

// remover o ultimo elemento
// const lista = ["maça", "banana", "laranja", "manga", "morango"];

// lista.pop();
// console.log(lista)

// ==

// remover o primeiro elemento e adciona um item no primeiro elemento:
// const lista = ["maça", "banana", "laranja", "manga", "morango"];

// lista.shift();
// console.log(lista);

// lista.unshift("melancia");
// console.log(lista)

// =====================================================

// encontrar o index de um array:
// const lista = ["maça", "banana", "laranja", "manga", "morango"];

// console.log(lista.indexOf("banana"));

// ==

// checar se um item esta na lista:
// const lista = ["maça", "banana", "laranja", "manga", "morango"];

// console.log(lista.includes("morango"));

// ==
// mapeando os elementos da lista
// const lista = ["maça", "banana", "laranja", "manga", "morango"];
// const mapLista = lista.map((fruta, indice) => {
//   return fruta + " tem o indice " + indice;
// })

// console.log(mapLista)

// ==

// filtrando elementos
// const lista = ["maça", "banana", "laranja", "manga", "morango"];

// // filtrar acima de 4 caracteres

// const filterFruits = lista.filter((fruta) => {
//   return fruta.length > 4;
// });
// console.log(filterFruits)

// ==

// Find (encontrar um elemento no array)
// encontrar uma fruta que comece com a letra "a"
// const lista = [
//   "maça",
//   "banana",
//   "laranja",
//   "manga",
//   "morango",
//   "abacaxi",
//   "amora",
// ];
// const findFruit = lista.find((fruit) => {
//   return fruit[0] === "a";
// });
// console.log(findFruit);

// ==
// reduce (reduzir o array a um unico valor)
// const pagamentos = [4000, 2000, 7000, 3735];

// // somar elementos
// const totalPagamentos = pagamentos.reduce((acumulador, atual) => {
//   return acumulador + atual
// }, 0)
// console.log(totalPagamentos)
// ==

// ========================================

// copia e retorna uma parte do array:
// const lista = ["maça", "banana", "laranja", "manga", "morango"];

// // slice tem que terminar um numero depois do indice do elemento

// let lista2 = lista.slice(0, 3);
// console.log(lista2);

// ==

// Juntando elementos da lista:

// const lista = ["maça", "banana", "laranja", "manga", "morango"];

// let listaJunta = lista.join(" / ")
// console.log(listaJunta)

// ==

// revertendo a lista:

// const lista = ["maça", "banana", "laranja", "manga", "morango"];
// console.log(lista)
// const listainvertida = lista.reverse();
// console.log(listainvertida)

// ==

// concatenar 2 ou mais listas:
// const lista = ["maça", "banana", "laranja", "manga", "morango"];
// const lista2 = ["Manga", "Uva", "Melancia"];

// let listaComplet = lista.concat(lista2)
// console.log(listaComplet)

// Exercicios
// 1. Crie uma lista com 5 nomes dos alunos da turma e adicione um novo aluno no final da lista.
// const alunos = ["Daniel", "Menires", "Ana", "Bruno", "Andre"];

// alunos.push("Gabriel");

// console.log(alunos);

// // 2. Remova o último aluno da lista.

// alunos.pop();
// console.log(alunos);

// // 3. Crie uma lista com numeros acima de 10

// const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// const filternumeros = numeros2.filter((num) => {
//   return num > 10;
// });

// console.log(filternumeros);

// // 4. some os numeros da lista acima

// const somanumeros = numeros2.reduce((acumulador, total) => {
//   return acumulador + total;
// }, 0);

// console.log(somanumeros);

// // 5. use o metodo map para dobra os valores da lista de numeros acima

// const dobrarnumeros = numeros2.map((num) => {
//   return num * 2;
// });

// console.log(dobrarnumeros);