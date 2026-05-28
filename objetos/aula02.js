class Pedido{
    constructor(id, cliente){
        this.id = id,
        this.cliente = cliente,
        this.itens = [],
        this.status = "Pendente"
    }
    adicionarItem(nome, preco, quantidade){
        this.itens.push({ nome, preco, quantidade });
    }
    calcularTotal(){
        return this.itens.reduce((total, item) =>
            total + (item.preco * item.quantidade), 0)
    }
    atualizarStatus(novoStatus){
        const statusValidos = ["Pendente", "Em produção", "Saiu para entrega", "Entregue", "Cancelado"];
        if(statusValidos.includes(novoStatus)){
            this.status = novoStatus;
        } else {
            throw new Error(`Status INVÁLIDO! Pedido nº ${this.id}`);
        }
    }
    resumoPedido(){
        const total = new Intl.NumberFormat('pt-BR',
            { style: 'currency', currency: 'BRL' }).format(this.calcularTotal());
        console.log(`Pedido nº: ${this.id}`);
        console.log(`Cliente: ${this.cliente}`);
        console.log(`Status: ${this.status}`);
        console.log(`Total: ${total}`);
        console.log(`--------------------------------------`);
    }
}

console.log(`--------------------------------------`);

const pedido01 = new Pedido(1, "Fulano da Silva");
pedido01.adicionarItem("Pizza", 69.9, 1);
pedido01.adicionarItem("Guaraná Lata", 9, 2);
pedido01.atualizarStatus("Em produção")
pedido01.resumoPedido();

const pedido02 = new Pedido(2, "Ciclano dos Santos");
pedido02.adicionarItem("X-Tudo", 34.45, 1);
pedido02.adicionarItem("Suco de Abacaxi", 11.2, 1);
pedido02.adicionarItem("Mouse de chocolate", 7.99, 1);
pedido02.atualizarStatus("Saiu para entrega");
pedido02.resumoPedido();