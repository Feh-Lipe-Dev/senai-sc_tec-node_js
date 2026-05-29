"use strict";
// PASSO 2: TIPOS PRIMITIVOS
//2.1 STRING
let linguagem = 'Typescript';
let versao = '5.4';
//Template literals continuam funcionando normalmente
let apresentacao = `Seja Bem-Vindo ao ${linguagem} vs. ${versao}`;
//Métodos de string 
let maiuscula = linguagem.toLocaleUpperCase();
let tamanho = linguagem.length;
console.log('\n=== 2.1 String ===');
console.log(apresentacao);
console.log('Maiúscula:', maiuscula, "| Tamanho:", tamanho);
//2.2 NUMBER
//Typescript usa um único tipo 'number' para inteiros e decimais
let inteiro = 42;
let decimal = 3.14;
let negativo = -100;
let hexadecimal = 0xff;
let binario = 0b1010;
let octal = 0o17;
let grandeNumero = 1000000;
console.log('\n=== 2.2 NUMBER ===');
console.log('Inteiro:', inteiro);
console.log('Decimal:', decimal);
console.log('Negativo:', negativo);
console.log('Hexadecimal:', hexadecimal);
console.log('Binário:', binario);
console.log('Octal:', octal);
console.log('Grande Número:', grandeNumero);
//2.3 BOOLEAN
let estaLogado = true;
let temPermissao = false;
let modoEscuro = false;
function verificarAcesso(usuario, logado) {
    if (logado) {
        return `Acesso liberado para: ${usuario}`;
    }
    return `Acesso negado. Faça login.`;
}
console.log('=== 2.3 Boolean ===');
console.log(verificarAcesso("Ana", temPermissao));
console.log(verificarAcesso("José", estaLogado));
//2.4 NULL e UNDEFINED
//undefined: variável está declarada mas não nenhum valor atribuído
let endereco = undefined;
//null: ausência intencional de valor
let usuarioDeletado = null;
function buscarUsuario(id) {
    if (id === 1)
        return 'Ana';
    return null;
}
console.log('\n=== 2.4 Null e Undefined ===');
console.log('Buscar id=1: ', buscarUsuario(1));
console.log('Buscar id=2: ', buscarUsuario(2));
//2.4 ANY
// any desativa completamente a verificação de tipos
let dadosExternos = 'pode ser qualquer coisa';
dadosExternos = 42;
dadosExternos = true;
dadosExternos = { nome: 'Davi' };
console.log('\n=== 2.5 Any ===');
console.log('Dados Externos: ', dadosExternos);
//2.4 UNKNOWN
//unknown aceitar qualquer valor, mas exige uma verificação antes de usar
//Use quando não souber o tipo
let respostaApi = JSON.parse('{"status": 200}');
// Erro - sem verificação
//console.log(respostaApi.status)
console.log('\n=== 2.5 Unknow ===');
if (typeof respostaApi === 'object' && respostaApi !== null) {
    console.log("Resposta API: ", respostaApi);
}
function processarEntrada(valor) {
    if (typeof valor === "string")
        return `Texto: ${valor}`;
    if (typeof valor === "number")
        return `Número: ${valor}`;
    if (typeof valor === "boolean")
        return `Boolean: ${valor}`;
    return `Tipo Desconhecido`;
}
console.log(processarEntrada(`Typescript`));
console.log(processarEntrada(2026));
console.log(processarEntrada(true));
