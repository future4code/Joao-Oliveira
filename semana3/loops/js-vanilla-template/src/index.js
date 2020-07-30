// //Exercícios de Interpretação de código

// //1.O que o código abaixo está fazendo? Qual o resultado impresso no console?

// // let valor = 0
// // for (let i = 0; i < 5; i++) {
// //     valor += i
// // }

// // console.log(valor)

// /* R = O código determina uma ação de contagem contínua que vai de zero a cinco, de forma que assim que o valor de i seja igual a cinco o mesmo interrompe sua execução. */

// //2. Leia o código abaixo:

// // const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// // for (let numero of lista) {
// //     if (numero > 10 && numero < 12 ) {
// //         console.log(numero)
// //     }
// // }

// //a) O console irá imprimir todos os números da lista que sejam maiores que 18, no caso sendo do 19 ao 30.

// //b) O for..of ... será suficiente para acessar qualquer um dos índices desde que no bloco if alteremos e/ou acresentemos alguns operadores como "<", "&&", "||".   


// //DESAFIO 1 - Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?

// // const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// // let quantidadeAtual = 0
// // while (quantidadeAtual < quantidadeTotal) {
// //     let linha = ""
// //     for (let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++) {
// //         linha += "0"
// //     }
// //     4
// //     console.log(linha)
// //     quantidadeAtual++
// // }

// // O resultado seria quatro linhas com a quantidade de zeros correspondentes ao número de cada linha, tendo a primeira um zero e a última quatro zeros. O número de linhas é determinado pelo laço whilw, enquanto os zeros são acrescentados pelo laço for.

// //Exercícios de escrita de código

// //3. Nas perguntas abaixo, considere que você tenha acesso a um array  (chamado de 'array original') que seja composto somente de números. Após o enunciado, há um exemplo de qual deve ser a resposta final de cada programa individualmente.

//const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103]

//a)
// for (let i = 0; i < 10; i++) {
//     const elemento = arrayOriginal[i]
//     console.log(elemento)
// }

//b)
// for (let i = 0; i < 10; i++) {
//     const elemento = arrayOriginal[i]
//     console.log(elemento / 10)
// }

//c)
for (let i = 1; i < 11; i++) {
    if ((i % 2) === 0) {
        console.log(i)
    }
}

d) //Não Solucionada
let frase = ["O elemento do índex ", i, "é: ", numero]
let msgCompleta = ""
for (let elemento of frase) {
    msgCompleta += elemento
}
console.log(msgCompleta)

//e)

// //Maior
const arrayNumeros = [11, 15, 18, 14, 12, 13]
let big = 0
for (let num of arrayNumeros) {
    if (num > big) {
        big = num
    }
    console.log(big)
}


// //DESAFIO 2

let numUm = prompt("Digite o primeiro número: ")
window.alert("Vamos Jogar!")

let numDois = prompt("Digite o número até acertar: ")
window.alert("O número chutado foi: " + numDois)

let tentativas = ""

while (numDois !== numUm) {
    if (numDois > numUm) {
        window.alert("Errou. O número escolhido é maior")
    } else if (numDois < numUm) {
        window.alert("Errou. O número escolhido é menor")
    } else {
        window.alert("Acertou" / n + "O número de tentativas foi de: " + tentativas)
    }
}

// Hoje percebi a necessidade de desenvolver meu pensamento lógico para que eu possa evoluir na programação. É muito simples repetir os exemplos e achar que está tudo bem, mas a verdade é que para ganhar autonomia na programação é necessário saber resolver o mesmo problema de diversas formas. E isso só é possível com uma lógica bem desenvolvida e bastante prática.