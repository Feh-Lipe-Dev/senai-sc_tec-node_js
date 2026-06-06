console.log('')
console.log('>> CONTADOR DE VOGAIS <<')
const contadorDeVogais = texto => {
    const resultado = texto.match(/[aeiouà-ú]/gi).length;
    return texto + ': ' + resultado
}
const arr01 = Array.from('Array from')
console.log(arr01.join('-'))
console.log(arr01.splice(1, 2, 'xXx'))
console.log(arr01)
console.log(contadorDeVogais('Desenvolvimento'));

console.log('')
console.log('x---------x---------x---------x---------x---------x')
console.log('')

console.log('>> CRIAR CONTADOR <<')
function criarContador() {
    let contador = 0;
    return {
        incremento: () => ++contador,
        decremento: () => --contador,
        resetar: () => contador = 0,
        valor: () => contador,
    }
}
const contar = criarContador();
console.log(contar.valor())
console.log(contar.incremento())
console.log(contar.incremento())
console.log(contar.incremento())
console.log(contar.decremento())
console.log(contar.resetar())
console.log(contar.valor())

console.log('')
console.log('x---------x---------x---------x---------x---------x')
console.log('')

console.log('     >> LISTAS (arrays) <<');
const list01 = [1, 3, 5, 2, 6, 8, 4, 7, 9];
console.log('lista 01: ' + list01);
console.log('Copiando a Lista01 com spred: [...list01]')
const list02 = [...list01]
console.log('lista 02: ' + list02);
console.log('Maior valor da lista: ' + Math.max(...list01));
console.log('Menor valor da lista: ' + Math.min(...list01));
console.log('Lista02 em ordem crescente: ' + list02.sort());
console.log('Lista02 em ordem decrescente: ' + list02.reverse());
console.log('x---------x---------x---------x---------x---------x')

console.log('')
console.log('Cópias de arrays')
console.log('´´´´´´´´´´´´´´´´')

const alunos = ['John', 'Ana', 'Steve']
const _alunosCopia = alunos //*Não é feito uma cópia, é duplicada
// As duas variáveis continuam com a mesma referência 

console.log('    alunos   -> ', alunos)
console.log('_alunosCopia -> ', _alunosCopia)

//para copiar, usar o método slice sem parâmetros ou operador Rest
//const alunosCopia = alunos.slice()
const alunosCopia = [...alunos]
alunosCopia.unshift('#Cópia de alunos: ')
console.log(alunosCopia)

// Mexer em uma altera as duas
_alunosCopia.push('José')
console.log('    alunos   -> ', alunos)
console.log('_alunosCopia -> ', _alunosCopia)

console.log('')
console.log('x---------x---------x---------x---------x---------x')
console.log('')

/*
MAP, FILTER, REDUCE
*/

console.log('>> MULTIPLICADOR DE ELEMENTOS <<')
const multiplicarElementos = (nums = [], num) => nums.map((n) => n * num);
console.log(multiplicarElementos([1, 2, 3], 2));