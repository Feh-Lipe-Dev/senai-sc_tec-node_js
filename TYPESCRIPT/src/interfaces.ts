//INTERFACE
//representa a estrutura, a forma, não valor, de um OBJETO, como um "contrato"
//definie as proriedades e os comportamentos, mas sem a lógica
//

// https://onecompiler.com/typescript/44rayk694

//MODELO
/*
interface NomeDaInterface {
  proriedade: Tipo;
  metodo(param: Tipo): retorno;
}
*/
//palavra reservada: 'interface'
//nomear no padrão PascalCase

console.log('=== Interfaces ===')
//exemplo
interface Usuario {
    readonly id: number;
    nome: string;
    email: string;
    ativo: boolean;
    telefone?: number; //OPCIONAL^
    bio?: string; //OPCIONAL^
}
/* ^OPCIONAIS: acessando com segurança 
-> verficação
if (u1.telefone) {
    console.log(u1.telefone);
}
-> operador ? (optional chain)
const t = u1.telefone?.lenght;
*/
console.log(' ');

//EXTENDS - extensão de interface
interface EntidadeBase {
    readonly id: number;
    nome: string;
}

interface Produto extends EntidadeBase {
    preco: number;
    estoque: number;
}

//readonly impedi reatribuição
//não é imutabilidade profunda, objetos ainhados podem ser mutados

//NA PRÁTICA
//variável anotada com a interface
const notebook01: Produto = {
    id: 1,
    nome: "Notebook Acer",
    preco: 4000,
    estoque: 10,
};
const notebook02: Produto = {
    id: 2,
    nome: "Notebook iMac",
    preco: 15000,
    estoque: 5,
};

//função tipada com a interface
function exibir(p: Produto): string {
    return `${p.nome} - R$ ${p.preco}`;
}
console.log(exibir(notebook01)); //saída: Notebook Acer - R$ 4000

//array tipada coma interface
const catalagos: Produto[] = [notebook01, notebook02];
console.log(catalagos); //saída: [ { id: 1, nome: 'Notebook Acer', preco: 4000, estoque: 10 }, { id: 2, nome: 'Notebook iMac', preco

//read-only ERRO
//notebook02.id = 3
//error TS2540: Cannot assign to 'id' because it is a read-only property.
console.log(" ");

//INTERFACE DE MÉTODOS
console.log('=== Interface de Métodos ===')
interface ConsultaProduto<T> {
    buscarPorId(id: number): T | null;
}

//implementação satisfaz a interface
class ExibirProduto implements ConsultaProduto<Produto> {
    buscarPorId(id: number): Produto | null {
        return catalagos.find((produto) => produto.id === id) || null;
    }
}
const exibirProduto = new ExibirProduto();
const produtoEncontrado = exibirProduto.buscarPorId(1);
console.log(produtoEncontrado);            // Saída: { id: 1, nome: 'Notebook Acer', preco: 4000, estoque: 10 }
console.log(exibirProduto.buscarPorId(2)); // Saída: { id: 2, nome: 'Notebook iMac', preco: 15000, estoque: 5 }
console.log(exibirProduto.buscarPorId(3)); // Saída: nullF