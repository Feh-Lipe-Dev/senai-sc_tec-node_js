console.log(' >> POO <<')
console.log('```````````')

const person = {
    nome: "Felipe",
    idade: 40,
    cidade: "JLLE",
}
console.log("person (original): ", person);

// const copyPerson = Object.assign({}, person)
// Copiando o objeto person para copyPerson usando spread operator
// é criado um novo objeto com as mesmas propriedades e valores, porém são objetos distintos na memória (referências diferentes).
const copyPerson = { ...person }
copyPerson.telefone = "(47) 98888-7777";
console.log("copyPerson: ", copyPerson);

const adress = {
    rua: "Dona Francisca"
}
const mergeObj = {
    ...copyPerson,
    ...adress
}
console.log("mergeObj: ", mergeObj);
console.log("Object.keys(person): ", Object.keys(person));
console.log("Object.values(person): ", Object.values(person));
console.log("Object.entries(person): ", Object.entries(person));
for (const [chave, valor] of Object.entries(person)) {
    console.log(`${chave}: ${valor}`)
}

console.log(' ')
class Car {
    constructor(nome, marca, ano) {
        this.nome = nome
        this.marca = marca
        this.ano = ano
    }
    mostrar() {
        console.log(`Nome: ${this.nome}\nMarca: ${this.marca}\nAno: ${this.ano}`)
    }
}
const car1 = new Car('Gol', 'VW', 2015)
car1.mostrar()
const car2 = new Car('Palio', 'Fiat', 2020)
const car3 = new Car('Gol', 'VW', 2021)
const car4 = new Car('Palio', 'Fiat', 2017)
let carsList = []
carsList.push(car1, car2, car3, car4);

function mapFilterReduce() {
    let carName = carsList.map(car => car.nome);
    let carYear = carsList.filter(c => c.ano < 2020);
    let ocorrencia = carsList.reduce((acc, c) => {
        acc[c.marca] = (acc[c.marca] || 0) + 1;
        return acc;
    }, {})
    console.log(`Carros por nome: ${carName.join(', ')}.`)
    console.log({ message: 'Ano menor de 2020', carYear })
    console.log({ message: 'Quantos de cada marca?', ocorrencia })
}
mapFilterReduce()
