//2-exercicio: escreva um programa onde você chama uma função 
// enviando um número (aceitar valores de 1 e 10) e escrever a tabuada 
// de 1 e 10 do valor lido


const table = (number) => {
    if (number > 10 || number < 1) {
        console.log("Aceitamos SOMENTE numeros de 1 e 10")
        return
    }
    for (let i = 1; i <= 10; i++) {
        console.log(`${i} x ${number} = ${i * number}`)
    }

}
table(9)
