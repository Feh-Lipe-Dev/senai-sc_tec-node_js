"use strict";
console.log('#1 - TIPOS PRIMITIVOS: POR DECLARAÇÃO ###');
const produto = 'Pão francês';
let qtde = 10;
let valor = 1.05;
const ativo = true;
console.log('produto:string =', produto);
console.log('qtde:number =', qtde);
console.log('valor:number =', valor);
console.log('ativo:boolean =', ativo);
console.log(' ');
console.log('#1.1 - TIPOS PRIMITIVOS: POR INFERÊNCIA DE TIPO ###');
const item = 'Pão francês';
let quantidade = 10;
let preco = 1.05;
const cadastro = false;
console.log('item =', item);
console.log('quantidade =', quantidade);
console.log('preco = ', preco);
console.log('cadastro =', cadastro);
console.log(' ');
console.log('#1.2 - ERRO DE TIPO ###');
let num = 2;
//num = 'dois';
//console.log(num); =>error TS2322: Type 'string' is not assignable to type 'number'.
console.log('#1.3 - TIPAGEM EM FUNÇÕES ###');
function somar(a, b) {
    return a + b;
}
console.log('soma =', somar(2, 5));
//somar(2,'5'); ERRO DE TIPAGEM
console.log(' ');
console.log('#1.4 PARÂMETROS OPCIONAIS ###');
function saudar(nome, sobrenome) {
    if (sobrenome)
        return `Olá, ${nome} ${sobrenome}!`;
    return `Olá ${nome}!`;
}
console.log(saudar('Fulano'));
console.log(saudar('Fulano', 'de Oliveira'));
console.log(' ');
console.log('#1.5 VALORES DEFAULT ###');
function desconto(valor, desconto = 10) {
    return valor - (valor * desconto) / 100;
}
console.log('Preco com desconto padrão:', desconto(200));
console.log('Preco com desconto de 20%:', desconto(200, 20));
console.log(' ');
console.log('#1.6 RETORNO COM void & never ###');
console.log('void: retorno de função vazio');
function registrarLog(msg) {
    console.log(`[LOG] ${new Date().toISOString()} - ${msg}`);
}
registrarLog('Aula iniciada com sucesso!');
console.log('\nnever: função que NUNCA termina, que lança erro ou loop infinito.');
//função lancaErro(msg: string): never{
//throw new Error(msg); }
//lancaErro('deu erro!');
