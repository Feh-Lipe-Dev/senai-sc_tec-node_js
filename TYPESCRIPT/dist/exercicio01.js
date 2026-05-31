"use strict";
const simbolos = { BRL: 'R$', USD: '$', EUR: '€' };
function formatarValor(v) {
    return `${simbolos[v.moeda]} ${v.valor.toFixed(2)}`;
}
const valorBR = { valor: 149.99, moeda: 'BRL' };
const valorUSD = { valor: 100, moeda: 'USD' };
const valorEUR = { valor: 99, moeda: 'EUR' };
//const valorTeste: ValorMonetario = { valor: 149.99, moeda: 'SS' }
console.log(formatarValor(valorBR));
console.log(formatarValor(valorUSD));
console.log(formatarValor(valorEUR));
