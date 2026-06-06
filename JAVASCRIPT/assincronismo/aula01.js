/*
ASSINCRONISMO - callbacks, promisses, async/await
*/

console.log('ASSINCRONISMO');
console.log('´´´´´´´´´´´´´');

// console.log("Início da execução do código");
// setTimeout(() => {
//     console.log("Espera dois segundos. Simula assincronismo")
// }, 2000);
// console.log("Fim da execução");

console.log('')
console.log('PROMISES')
console.log('´´´´´´´´')
const promessa = new Promise((resolve, reject) => {
    const http = 200;

    http == 200 ? resolve("Conexão bem sucedida") : reject("Erro!");
})
//console.log(promessa)
promessa.then(
    resultado => {
        //console.log(resultado);
    }
).catch(
    erro => {
        //console.log(erro);
    }
)

console.log('')
console.log('async/await');
console.log('´´´´´´´´´´´');
function buscarDados() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve("Dados recebidos.");
        }, 2000)

    })
}
async function executar() {

    console.log("Buscando...");

    try {
        const resultado = await buscarDados();
        console.log(resultado);
    } catch (erro) {
        console.error("Erro: ", erro);
    }
}
executar();