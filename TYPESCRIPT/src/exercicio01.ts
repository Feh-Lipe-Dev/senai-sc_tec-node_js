
type Preco = number;

type Moeda = 'BRL' | 'USD' | 'EUR';

type ValorMonetario = {
    valor: Preco,
    moeda: Moeda
}

const simbolos = {BRL: 'R$', USD: '$', EUR: '€'}

function formatarValor(v: ValorMonetario): string {
    return `${simbolos[v.moeda]} ${v.valor.toFixed(2)}`;
}

const valorBR: ValorMonetario = { valor: 149.99, moeda: 'BRL' }
const valorUSD: ValorMonetario = { valor: 100, moeda: 'USD' }
const valorEUR: ValorMonetario = { valor: 99, moeda: 'EUR' }
//const valorTeste: ValorMonetario = { valor: 149.99, moeda: 'SS' }
console.log(formatarValor(valorBR));
console.log(formatarValor(valorUSD));
console.log(formatarValor(valorEUR));
// console.log(formatarValor(valorTeste)); ERRO
//The expected type comes from property 'moeda' which is declared here on type 'ValorMonetario'

type EntradaConversao = ValorMonetario | number;