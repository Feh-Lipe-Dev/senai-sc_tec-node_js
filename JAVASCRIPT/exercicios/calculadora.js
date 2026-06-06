
console.log(' << CALCULADORA >>')

const sumOp = '+';
const subOp = '-';
const multOp = 'x';
const divOp = '/';
const restOp = '%';

function calculator(operator, array = []) {
    for (let i = 0; i < array.length; i++) {
        if (!(Number.isFinite(array[i]))) {
            return 'Erro! Valores inválidos!';
        }

    }

    function sub() {
        let t = array[0]
        for (let i = 1; i < array.length; i++) {
            t -= array[i]
        }
        return t
    }
    switch (operator) {
        case '+': return array.join(' + ') + ' = ' + array.reduce((acum, value) => acum + value, 0);
            break;
        case '-': return array.join(' - ') + ' = ' + sub();
            break;
        case 'x': return array.join(' x ') + ' = ' + array.reduce((acum, value) => acum * value, 1);
            break;
        case '/': return array.join(' / ') + ' = ' + array.reduce((acum, value) => acum / value, (array[0] * 10));
            break;
        case '%': return `(${array.join(' + ')}) % 2 = ${array.reduce((acum, value) => acum + value, 0) % 2}`;
            break;

        default:
            return 'Operação inválida.'
    }
}
console.log(calculator(sumOp, [5, 10, '1']))
console.log(calculator(subOp, [10, 5, 1]))
console.log(calculator(multOp, [10, 5, 1]))
console.log(calculator(divOp, [10, 5, 1]))
console.log(calculator(restOp, [10, 5, 1]))
console.log(calculator('_', [10, 5, 1]))