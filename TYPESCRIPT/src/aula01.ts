console.log('=== UNION TYPE / símbolo: | (pipe) ===')

type Entrada = string | number | boolean;

let testeUnion: any = 'texto';
console.log(testeUnion)
testeUnion = 9;
console.log(testeUnion)
testeUnion = true;
console.log(testeUnion)

console.log(' ')
console.log('=== ITERSERCTION TYPE / símbolo: & (e comercial) ===')
type Pessoa = { nome: string, cpf: string}
type Funcionario001 = { cargo: string, salario: number}
type Colaborador = Pessoa & Funcionario001
const colaborador001: Colaborador = {
    nome: 'Ciclano',
    cpf: '001.002.003-04',
    cargo: 'Analista',
    salario: 2789
}
console.log(colaborador001)