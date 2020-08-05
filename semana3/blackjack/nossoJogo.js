/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

window.alert("Bem vindo ao Jogo BlackJack ")
if (window.confirm("Quer iniciar uma nova rodada?")) {
    const carta1 = comprarCarta();
    const carta2 = comprarCarta();
    const carta3 = comprarCarta();
    const carta4 = comprarCarta();
    const cartaR = comprarCarta();

    const cartaTextoU1 = carta1.texto
    const cartaTextoU2 = carta2.texto
    const cartaValorU1 = carta1.valor
    const cartaValorU2 = carta2.valor
    const cartaTextoC1 = carta3.texto
    const cartaTextoC2 = carta4.texto
    const cartaValorC1 = carta3.valor
    const cartaValorC2 = carta4.valor
    const cartaRtexto = carta.texto
    const cartaRvalor = carta.valor
    const resultadoU = cartaValorU1 + cartaValorU2
    const resultadoC = cartaValorC1 + cartaValorC2
    const resultadoR = cartaRvalor

    if (window.confirm("Suas cartas são: " + cartaTextoU1 + " e " + cartaTextoU2 + ". A carta revelada do computador é: " + cartaTextoC1 + ". Deseja comprar mais uma carta?") === true) {
        window.alert("Suas cartas são: " + cartaTextoU1 + cartaTextoU2 + cartaRtexto + ". Sua pontuação é " + (resultadoU + resultadoR))
    } else if (resultadoC < 21) {
        resultadoC += 1
    } else {
        resultadoGeral
    }



} else {
    console.log("Fim de Jogo")
}