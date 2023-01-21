// 7-exercicio: Faça um programa onde, você chame uma função 
// que calcule a taxa mensal de juros de um investimento.
//você deve emviar como argumentos da função valor inicial investido
//valor atual do investimento e tempo em messes. Que valor esta sendo investido.
//a função deve retornar a taxa de juros já formatada ex:2,5%

function calculate(valorInicial, valorAtual, tempo){
    const juros = (valorAtual - valorInicial) / (valorInicial * tempo)
    console.log((juros * 100).toFixed(2) + `%`)
}
calculate(1000, 1200, 10)