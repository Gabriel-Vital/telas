// função: uma função é um bloco de código projetado para executar uma tarefa específica.
// serve para: Modulação do código - aprática de dividir um sistema grande e complexo em partes menores e independentes. 
// - reutilização do código - usar novamente um código já existente em novas partes do software.
// - facilita a manutenção e o entendimento - envolve práticas que tornam o código mais fácil de ler.

// function hello() {
//     console.log("How i can help you?");
// }

// hello();

// function exibirNome(nome) {
//     console.log ("Bom dia,", nome);
// }

// exibirNome("Gabriel");

// function somar(n1, n2) {
//     console.log(n1 + n2);
// }

// const valor1 = Number(prompt("Digite o primeiro valor: "));
// const valor2 = Number(prompt("Digite o segundo valor: "));

// somar(valor1, valor2);

// function somar(n1, n2) {
//     const n1Int = Number(n1);
//     const n2Int = Number(n2);
//     return n1Int + n2Int;

//     // a palavra-chave return em javascript é usada dentro de uma função para especificar o valor que deve ser retornado ao local onde a função foi chamada. Quando o return é executado a função para de executar e o controle é devolvido ao ponto de chamada, junto com o valor especificado.
// }

// const valor1 = Number(prompt("Digite o primeiro valor: "));
// const valor2 = Number(prompt("Digite o segundo valor: "));

// let resultado = somar(valor1, valor2)

// console.log(resultado)

// função para verificar se o numero é impar ou par

// function verificaParOuImpar (numero) {
//     const num = Number(numero);

//     if(num % 2 === 0) {
//         return "O numero é par";
//     } else {
//         return "O numero é impar";
//     }
// }

// const n1 = prompt("Digite um número: ")

// console.log(verificaParOuImpar(n1))

// ------------------------------------------------------------------------------------------------------------------------------------------------------

// - Variaveis global: variável declarada fora de qualquer função pode ser usada de forma global
// - Variaveis locais: variáveis declaradas dentro de uma função são usadas somente dentro da função e não podem ser chamadas fora da função

// ------------------------------------------------------------------------------------------------------------------------------------------------------

// Oque é DOM: Document Object Model ou DOM é uma interface de programação para documentos HTML E XML. Ele representa a estrutura de documento como uma arvore de nós, onde cada nó é um objeto que representa uma parte do documento. O DOM permite que linguagens de ScriptProcessorNode, como js, acessem e o estilo de um documento de maneira dinâmica.
// - Importância: Permite a manipulação dinâmica do conteúdo.

// Caracteristicas: estrura em arvore/hieraquica
// manipulação de elementos 
// eventos dinâmicos com o usuário, como cliques movimentos do mouse e/ou teclas pressionadas.

// ------------------------------------------------------------------------------------------------------------------------------------------------------

// manipulação do DOM com js

// let titulo = document.getElementById("titulo");
// let nomeUsuario = document.getElementById("nome")

// function alterarTitulo() {
//     let nome = nomeUsuario.value

//     if (nome === "") {
//         alert("Digite o seu nome")
//         return
//     }
//         titulo.innerHTML = "Bom dia, "+ nome;
// }

// function retornarTitulo() {
//     titulo.innerHTML = "Olá mundo";
// }

