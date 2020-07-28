// Exercício de Interpretação de Código

/*1.
   R = a. true

       b. true

       c. false

       d. boolean
   
   
   2.  
    R = a. array

        b. null

        c. 11

        d. 0

        e. undefined

        f. undefined
*/

//Exercício de escrita de código

//1.


// //a)
let idade = prompt("Qual a sua idade?")

// //b)
let idadeAmigoAmiga = prompt("Qual a idade de sua melhor amiga(o)?")

// //DICA
let convert = Number(idade)
let toConvert = Number(idadeAmigoAmiga)

//b)

console.log("Sua idade é maior do que a da sua melhor amiga(o) ")

// //c)
console.log(idade > idadeAmigoAmiga)

// //d)
let difference = idade - idadeAmigoAmiga
console.log(difference)

//2. 

// //a)
let evenNumber = prompt("Por gentileza, insira um número par!")
let convert = Number(evenNumber)

//b)
console.log(convert % 2)

//c)
/*Todos os número pares quando divididos por 2 constituem ua divisão exata, retorando sempre o resto = zero.*/

//d)
/*Se por ventura for adicionado o numero 1 o resto da divisão é 1, assim podemos identificar se um número pé ar ou ímpar.*/

//3.
//a) 
let listaDeTarefas = Array()

//b)
window.confirm("Cite três tarefas que você realiza no dia a dia!")
let firstQuestion = prompt("Escreva a primeira tarefa!")
let secondQuestion = prompt("Escreva a segunda tarefa!")
let ThirdQuestion = prompt("Escreva a terceira tarefa!")

listaDeTarefas.push(firstQuestion)
listaDeTarefas.push(secondQuestion)
listaDeTarefas.push(ThirdQuestion)

//c)
console.log(listaDeTarefas)

//d)
let fourthQuestion = prompt("Digite o índice de umas das tarefas! Lembrando que começa em zero!!")

//e)
listaDeTarefas.splice(fourthQuestion, 1)

//f)
console.log(listaDeTarefas)

//4.
let userName = prompt("Olá! Qual o seu nome?")
let userMail = prompt(userName + ", qual seu melhor email?")

console.log("O e-mail " + userMail + " foi cadastrado com sucesso. Seja bem-vinda(o)", +userName)

//DESAFIOS EXTRAS

//1.

//Declarando as variaveis das unidades de medida
let k = prompt("Digite o valor em Kelvin")
let f = prompt("Digite o valor em Fahrenheit")
let c = prompt("Digite o valor em Celsius")

Declarando as variáveis com as fórmulas
let convertOne = (f - 32) * 273.705556
let convertTwo = f - 32 * 1.84

//a)
let f = prompt("Digite o valor em Fahrenheit")
let kelvin = (f - 32) * 5 / 9 + 273.15
console.log("O valor em Kelvin é: " + kelvin)

// //b)
let c = prompt("Digite o valor em Celsius")
let fahrenheit = (c * 9 / 5) + 32
console.log("O valor em Fahrenheit é: " + fahrenheit)

//c)
let c = prompt("Digite o valor em Celsius")
let fahrenheit = (c * 9 / 5) + 32
let kelvin = (fahrenheit - 32) * 5 / 9 + 273.15

console.log("O valor em Fahrenheit é: " + fahrenheit + "      E o valor em Kelvin é: " + kelvin)

//2. 
//a)
let wattHora = prompt("Digite o valor em quilowatt-hora: ")
let calc = wattHora * 0.05
console.log("O valor da conta é de: R$ " + calc)

//O valor da conta da residência é de R$ 14.00

//b)
let wattHora = prompt("Digite o valor em quilowatt-hora: ")
let calc = wattHora * 0.05
let desconto = calc - calc * 15 / 100
console.log("O valor da conta é de: R$ " + desconto)

//3.

//a)
let pound = 20
let transform = pound / 2.20462
console.log(pound + " lb equivalem a " + transform + " kg")

//b)
let oz = 10.5
let transform = oz / 0.0283495
console.log(oz + " oz equivalem a " + transform + " kg")

//c)
let mi = 100
let transform = mi * 1609.34
console.log(mi + " mi equivalem a " + transform + " m")

//d)
let ft = 50
let transform = ft * 0.3048
console.log(ft + " ft equivalem a " + transform + " m")

//
let gal = 103.56
let transform = gal * 4.546
console.log(gal + " gal equivalem a " + transform + " l")

//f)
let xic = 450
let transform = xic * 0.24
console.log(xic + " xic equivalem a " + transform + " l")

//g)