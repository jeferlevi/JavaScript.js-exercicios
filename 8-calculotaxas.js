//8- exercicio:calcule taxas: juros(valor atual do investimento-valor inicial do investimento * tempo)
//escreva um programa onde você crie uma função geradora de desconto. A função aceita 4 parametros
// (nome do cliente, valor total da compra, um booleando que diz se o cliente vai pagar avista ou não)
// os descontos funcionam da seguinte forma. Se é a primeira compra do cliente, pagar a vista,
// se a compra for maior que R$1000 30% de desconto

function calculateDiscount(name, value, isfirstPurchase, isCashpaument) {
    if (isfirstPurchase && isCashpaument) {
        if (value > 1000) { }
        else if (value < 500) { }
        else { }
    }
    if (isfirstPurchase && !isCashpaument) {
        if (value > 1000) { }
        else if (value < 500) { }
        else { }
    }
    if (!isfirstPurchase && isCashpaument) {
        if (value > 1000) { }
        else if (value < 500) { }
        else { }
    }
    if (!isfirstPurchase && !isCashpaument) {
        if (value > 1000) { }
        else if (value < 500) { }
        else { }
    }

}

