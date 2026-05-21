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
        const valorTotal = this.itens.reduce((total, item) =>
            total + (item.preco * item.quantidade), 0)
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(valorTotal);
    }
    atualizarStatus(){
        
    }
}

const pedido01 = new Pedido(1, "Fulano");
pedido01.adicionarItem("Pizza", 69.9, 1);
pedido01.adicionarItem("Guaraná Lata", 9, 2);
console.log(pedido01);
console.log(pedido01.calcularTotal())