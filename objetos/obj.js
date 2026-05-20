//Declaração dos objetos
const pessoa = {
    nome: "Davi",
    idade: 30,
    profissao: "Professor"
}

const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2014,
    ligado: false
}

// Acessando os atributos do objeto
console.log(pessoa.nome)
console.log(carro.modelo)

console.log(pessoa["profissao"])
console.log(carro["marca"])

console.log("cpf" in pessoa)
console.log(Object.hasOwn(pessoa, "data_nascimento"))
console.log(Object.hasOwn(pessoa, "idade"))

pessoa.cpf = "000.000.000-01"

console.log("cpf" in pessoa)

pessoa.idade = 25

console.log(pessoa.idade)

delete pessoa.profissao

console.log("profissao" in pessoa)

Object.freeze(pessoa)

pessoa.idade = 28

console.log(pessoa.idade)

pessoa.rg = "N/A"

console.log(pessoa.rg)

Object.seal(carro)

carro.ligado = true

console.log(carro.ligado)

carro.velocidade = 150

console.log(carro.velocidade)

// Object.defineProperty(pessoa, "nome", {
//     value: "João",
//     writable: true
// })

pessoa.nome = "Maria"

console.log(pessoa.nome)

const produto = {}

Object.defineProperty(produto, "codigoInterno", {
    value: 123,
    enumerable: false
})

console.log(Object.keys(produto))

// Object.defineProperty(usuario, "cpf", {
//     value: "123.456.789-00",
//     configurable: false
// })

// delete usuario.cpf

// console.log(usuario.cpf)

/* Exemplos de Situações */

// writable
const config = {}

Object.defineProperty(config, "API_URL", {
    value: "https://api.minhaapi.com",
    writable: false
})

// enumerable
const usuario = {
    nome: "João",
    email: "joao@email.com"
}

Object.defineProperty(usuario, "_idInterno", {
    value: 123,
    enumerable: false
})

console.log(usuario.nome)
console.log(usuario.email)
console.log(usuario._idInterno)
console.log(Object.keys(usuario))

//configurable
const conta = {}

Object.defineProperty(conta, "saldo", {
    value: 1000,
    configurable: false
})
console.log(conta.saldo)
delete conta.salario

const pedido = {
    id: '12345',
    data: '2026-01-01',
    cliente: {
        id: 1,
        nome: 'Paulo',
        cpf: '000.000.000.-00'
    },
    valor: 1998.89
}

console.log(Object.entries(pedido))

for (const [chave, valor] of Object.entries(pedido)) {
    console.log(`${chave}: ${valor}`)
}