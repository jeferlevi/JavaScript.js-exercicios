//6-exercicio:A prefeitura de uma cidade fez uma pesquisa entre seus abtantes,
//coletando dados sobre o salário e o número de filhos. A prefeitura deseja saber
//média de salario da população, média de números de filhos e maior salário.
//O final da leitura de dados se dado a entrada de um salário negativo faça isso usando uma função.
const people = [
    {
        numberOfChildren: 2,
        salary: 2000
    },
    {
        numberOfChildren: 5,
        salary: 3000
    },
    {
        numberOfChildren: 0,
        salary: 2500
    },
    {
        numberOfChildren: 2,
        salary: 1000
    },
    {
        numberOfChildren: 3,
        salary: 2300
    },
    {
        numberOfChildren: 1,
        salary: 200
    },
    {
        numberOfChildren: 0,
        salary: -2000
    },



]
function findAverageAndHighestSalary(peopleInformation) {
    let averageSalary = 0
    let averageChildren = 0
    let highestSalary = 0

    for (let i = 0; i < peopleInformation.length; i++) {
        const salary = peopleInformation[i].salary
        const children = peopleInformation[i].numberOfChildren

        if (salary > highestSalary) highestSalary = salary


        if (salary < 0) {
            console.log(`Média de salário R$${(averageSalary / i ).toFixed(0)}`)
            console.log(`Média de filhos ${(averageChildren / i ).toFixed(0)}`)
            console.log(`maior salário R$${highestSalary}`)
            break
        } else {
            averageSalary = averageSalary + salary;
            averageChildren += children
        }



    }




}
findAverageAndHighestSalary(people)
