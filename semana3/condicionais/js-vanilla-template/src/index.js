//Exercícios de interpretação de código

//1./*Explique o que o código faz. Qual o teste que ele realiza? Para que tipos de números ele imprime no console "Passou no teste"? Para que tipos de números a mensagem é "Não passou no teste"?*/

// R = O código é reponsável por armazenar nas variaveis respostaDoUsuario e numero o valor que o usuário escolher e após isso ele analisa se o número é par ou ímpar, caso seja par ele retorna a mensagem:"Passou no teste", contundo se for ímpar retorna: "Não passou no teste". Isso se deve porque todo número par quando divido por dois resta zero, todavia, todo número ímpar que quando dividido por dois resta um. 

//2./* O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado. Veja abaixo:

//a)  R = Uma vez que o usuário digita a fruta que possui, o sistema analisa qual tipo é e enquanto não for ea fruta em questão ele continua rodando, mas quando chega na fruta selecionada o sistema para e retorna a mensagem com o nome da fruta e seu valor através da concatenação da mensagem com algumas variáveis. 

//b) R = "O preço da Maçã é R$ 2.25 "

//c) R = Ao retirar o elemento break o valor para a variável preço fica sendo o default uma vez que o programa continua rodando por não ter sido instruido a interromper a curso.

//3 /* Leia o código abaixo: */

//a) R = A primeira linha está pedindo para que o usuário digite um número e como por padrão a resposta do prompt vem como string já está sendo alterado o tipo que será atribuido à variável numero com o elemento Number.

//b) R = Nesse caso o console retornará com mensagem não definida, pois não está sendo atribuído uma outra codição else. 

//c) R = Sim, primeiramente a sintaxe está fora do padrão, além da variável ser declarada dentro do bloco, portanto ela é inexistente dora daquele bloco de código. 



//Exercícios de escrita de código

//4. /* Vamos criar programas que lidem com entradas do usuário! Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade). */

//1.  
//2.
// let idade = Number(prompt("Qual a sua idade? "))

// if (idade >= 18) {
//     console.log("O usuário pode dirigir.")
// } else {
//     console.log("O usuário não pode dirigir.")
// }

//3. 
// let idade = Number(prompt("Qual a sua idade? "))

// if (idade !== 18) {
//     console.log("O usuário não pode dirigir.")
// } else {
//     console.log("O usuário pode dirigir.")
// }

//5. Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

// let turno = prompt("Qual turno você estuda? Digite M (Matutino),  V (Vespertino), N (Noturno)")

// if (turno === "M") {
//     console.log("Bom Dia")
// } else if (turno === "V") {
//     console.log("Boa Tarde")
// } else if (turno === "N") {
//     console.log("Boa Noite")
// }

//6.

// let turno = prompt("Qual turno você estuda? Digite M (Matutino),  V (Vespertino), N (Noturno)")

// switch (turno) {
//     case 'M':
//         console.log("Bom Dia")
//         break;
//     case "V":
//         console.log("Boa Tarde")
//         break
//     case "N":
//         console.log("Boa Noite")
//         break
//     default:
//         console.log("Informe os valores pedidos")
//         break;
// }

//7. Considere a situação: você vai no cinema com um amigo ou amiga, porém ele/ela só assiste filme do gênero fantasia ****e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("

// let genderMovie = prompt("Qual gênero de filme você deseja assistir? ")

// let priceMovie = prompt("Qual o investimento para assistir o filme desejado? ")

// if (genderMovie === "Fantasia" && priceMovie <= 15) {
//     console.log("Bom filme!")
// } else {
//     console.log("Escolha outro filme")
// }

//DESAFIO

//1. 
// let genderMovie = prompt("Qual gênero de filme você deseja assistir? ")

// let priceMovie = prompt("Qual o investimento para assistir o filme desejado? ")

// let sellSnack = prompt("Qual Snack você gostaria de adquirir? ")


// if (genderMovie === "Fantasia" && priceMovie <= 15) {
//     console.log("Bom filme" + "... com " + sellSnack)
// } else {
//     console.log("Escolha outro filme")
// }

//2. Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol. Para esta compra, o usuário deve fornecer algumas informações:

let completeName = prompt("Digite seu nome completo: ")
let gamerType = prompt("Digite o tipo de jogo desejado: ")
let gameStep = prompt("Digite a etapa em que o jogo se encontra: ")
let cat = Number(prompt("Escolha a categoria do jogo de 1 a 4: "))
let amount = Number(prompt("Digite a quantidade de ingressos: "))

//Preços Semi-Final 
let precoCatUmSf = amount * 1.320
let precoCatDoisSf = amount * 880
let precoCatTresSf = amount * 550
let precoCatQuatroSf = amount * 220

//Preços Decisão do 3° Lugar
let precoCatUmDt = amount * 660
let precoCatDoisDt = amount * 440
let precoCatTresDt = amount * 330
let precoCatQuatroDt = amount * 170

//Preços Final
let precoCatUmFi = amount * 1980
let precoCatDoisFi = amount * 1320
let precoCatTresFi = amount * 880
let precoCatQuatroFi = amount * Joa330



console.log("Nome do cliente: " + completeName)
console.log("Tipo de jogo: " + gamerType)
console.log("Etapa do jogo: " + gameStep)
console.log("Categoria: " + cat)
console.log("Quantidade de Ingressos: " + amount)

//Calculando o valor do ingresso

if (cat === 1 && gamerType === "Semi Final") {
    console.log("Valor do ingresso: R$ " + precoCatUmSf)
} else if (cat === 1 && gamerType === "Decisão") {
    console.log("Valor do ingresso: R$ " + precoCatUmDt)
} else if (cat === 1 && gamerType === Final) {
    console.log("Valor do ingresso: R$ " + precoCatUmFi)
} else if (cat === 2 && gamerType === "Semi Final") {
    console.log("Valor do ingresso: R$ " + precoCatUmSf)
} else if (cat === 2 && gamerType === "Decisão") {
    console.log("Valor do ingresso: R$ " + precoCatUmDt)
} else if (cat === 2 && gamerType === "Final") {
    console.log("Valor do ingresso: R$ " + precoCatUmFi)
} else if (cat === 3 && gamerType === "Semi Final") {
    console.log("Valor do ingresso: R$ " + precoCatUmSf)
} else if (cat === 3 && gamerType === "Decisão") {
    console.log("Valor do ingresso: R$ " + precoCatUmDt)
} else if (cat === 3 && gamerType === "Final") {
    console.log("Valor do ingresso: R$ " + precoCatUmFi)
} else if (cat === 4 && gamerType === "Semi Final") {
    console.log("Valor do ingresso: R$ " + precoCatUmSf)
} else if (cat === 4 && gamerType === "Decisão") {
    console.log("Valor do ingresso: R$ " + precoCatUmDt)
} else if (cat === 4 && gamerType === "Final") {
    console.log("Valor do ingresso: R$ " + precoCatUmFi)
} else if (cat === 1 && gamerType === 'Semi Final') {
    console.log("Valor do ingresso: R$ " + precoCatDoisSf)
} else if (cat === 1 && gamerType === "Decisão") {
    console.log("Valor do ingresso: R$ " + precoCatDoisDt)
} else if (cat === 1 && gamerType === "Final") {
    console.log("Valor do ingresso: R$ " + precoCatDoisFi)
} else if (cat === 2 && gamerType === 'Semi Final') {
    console.log("Valor do ingresso: R$ " + precoCatDoisSf)
} else if (cat === 2 && gamerType === "Decisão") {
    console.log("Valor do ingresso: R$ " + precoCatDoisDt)
} else if (cat === 2 && gamerType === "Final") {
    console.log("Valor do ingresso: R$ " + precoCatDoisFi)
} else if (cat === 3 && gamerType === 'Semi Final') {
    console.log("Valor do ingresso: R$ " + precoCatDoisSf)
} else if (cat === 3 && gamerType === "Decisão") {
    console.log("Valor do ingresso: R$ " + precoCatDoisDt)
} else if (cat === 3 && gamerType === "Final") {
    console.log("Valor do ingresso: R$ " + precoCatDoisFi)
} else if (cat === 4 && gamerType === 'Semi Final') {
    console.log("Valor do ingresso: R$ " + precoCatDoisSf)
} else if (cat === 4 && gamerType === "Decisão") {
    console.log("Valor do ingresso: R$ " + precoCatDoisDt)
} else if (cat === 4 && gamerType === "Final") {
    console.log("Valor do ingresso: R$ " + precoCatDoisFi)
} else if (cat === 1 && gamerType === 'Semi Final') {
    console.log("Valor do ingresso: R$ " + precoCatTresSf)
} else if (cat === 1 && gamerType === "Decisão") {
    console.log("Valor do ingresso: R$ " + precoCatTresDt)
} else if (cat === 1 && gamerType === "Final") {
    console.log("Valor do ingresso: R$ " + precoCatTresFi)
} else if (cat === 2 && gamerType === "Semi Final") {
    console.log("Valor do ingresso: R$ " + precoCatTresSf)
} else if (cat === 2 && gamerType === "Decisão") {
    console.log("Valor do ingresso: R$ " + precoCatTresDt)
} else if (cat === 2 && gamerType === "Final") {
    console.log("Valor do ingresso: R$ " + precoCatTresFi)
} else if (cat === 3 && gamerType === "Semi Final") {
    console.log("Valor do ingresso: R$ " + precoCatTresSf)
} else if (cat === 3 && gamerType === "Decisão") {
    console.log("Valor do ingresso: R$ " + precoCatTresDt)
} else if (cat === 3 && gamerType === "Final") {
    console.log("Valor do ingresso: R$ " + precoCatTresFi)
} else if (cat === 4 && gamerType === "Semi Final") {
    console.log("Valor do ingresso: R$ " + precoCatTresSf)
} else if (cat === 4 && gamerType === "Decisão") {
    console.log("Valor do ingresso: R$ " + precoCatTresDt)
} else if (cat === 4 && gamerType === "Final") {
    console.log("Valor do ingresso: R$ " + precoCatTresFi)
} else if (cat === 1 && gamerType === "Semi Final") {
    console.log("Valor do ingresso: R$ " + precoCatQuatroSf)
} else if (cat === 1 && gamerType === "Decisão") {
    console.log("Valor do ingresso: R$ " + precoCatQuatroDt)
} else if (cat === 1 && gamerType === "Final") {
    console.log("Valor do ingresso: R$ " + precoCatQuatroFi)
} else if (cat === 2 && gamerType === "Semi Final") {
    console.log("Valor do ingresso: R$ " + precoCatQuatroSf)
} else if (cat === 2 && gamerType === "Decisão") {
    console.log("Valor do ingresso: R$ " + precoCatQuatroDt)
} else if (cat === 2 && gamerType === "Final") {
    console.log("Valor do ingresso: R$ " + precoCatQuatroFi)
} else if (cat === 3 && gamerType === "Semi Final") {
    console.log("Valor do ingresso: R$ " + precoCatQuatroSf)
} else if (cat === 3 && gamerType === "Decisão") {
    console.log("Valor do ingresso: R$ " + precoCatQuatroDt)
} else if (cat === 3 && gamerType === "Final") {
    console.log("Valor do ingresso: R$ " + precoCatQuatroFi)
} else if (cat === 4 && gamerType === "Semi Final") {
    console.log("Valor do ingresso: R$ " + precoCatQuatroSf)
} else if (cat === 4 && gamerType === "Decisão") {
    console.log("Valor do ingresso: R$ " + precoCatQuatroDt)
} else if (cat === 4 && gamerType === "Final") {
    console.log("Valor do ingresso: R$ " + precoCatQuatroFi)
}