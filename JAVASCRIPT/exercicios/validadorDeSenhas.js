/*
  VALIDADOR DE SENHAS
*/
console.log('<< VALIDADOR DE SENHAS >>')
function passwordCheck(password) {
    if (typeof password !== 'string') {
        return {
            inputTest: `${password} = ${typeof password}`,
            ok: false,
            msg: 'Deve ser "String"'
        };
    }

    const minLen = password.length >= 8;
    const maxLen = password.length <= 64;
    const checkUpperCase = /[A-Z]/.test(password);
    const checkLowerCase = /[a-z]/.test(password);
    const checkNumber = /[0-9]/.test(password);
    const checkSpecialChars = /[!@#$%&/*+]/.test(password);
    const checkSpace = !/\s/.test(password);

    const okPassword = minLen && maxLen && checkUpperCase && checkLowerCase && checkNumber && checkSpecialChars && checkSpace;

    return {
        inputTest: password,
        okPassword: okPassword,
        msg: okPassword ? 'Senha forte!' : 'Senha fraca...',
    }
}
console.log(passwordCheck(5784455));
console.log(passwordCheck(null));
console.log(passwordCheck('Fehgon'));
console.log(passwordCheck('Fehgon12@$*&'));


/*,
const prompt = require("prompt-sync")();
let senha = prompt('Insira a senha:');
while(senha.length < 8){
  console.log('A senha de ter no mínimo 8 caracteres.')
  senha = prompt('Insira a senha:');
}
console.log('Senha OK. ✅')
*/