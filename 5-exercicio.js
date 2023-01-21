//5-exercicio: escreva um programa onde você chama uma função
// mandando dois argumentos, 2 números e a função diga qual o número é maior
const numbers = (numberOne, numberTwo) => {
    if(numberOne > numberTwo) console.log('O primeiro é maior')
    else console.log('O segundo é maior') 
}
numbers(4,5)