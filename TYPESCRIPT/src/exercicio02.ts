// ENUM + LITERAL TYPES

enum StatusPedido {
    Aguardando = 'AGUARDANDO',
    Pago = 'PAGO',
    EmSeparacao = 'Em_SEPARACAO',
    Enviado = 'ENVIADO',
    Entregue = 'ENTREGUE',
    Cancelado = 'CANCELADO'
}

type Transportadora = 'CORREIOS' | 'JADLOG' | 'SEQUOIA' | 'RETIRADA_LOJA';

type Rastreamento = {
    pedidoId:        number,
    status:          StatusPedido,
    transportadora:  Transportadora,
    atualizadoEm:    string,
    codigoRastreio?: string 
}

function atualizarStatus(r: Rastreamento, s: StatusPedido): Rastreamento{
    return {...r, status: s,  atualizadoEm: new Date().toISOString()};
}

const pedido: Rastreamento = {
    pedidoId: 1,
    status: StatusPedido.Aguardando,
    transportadora: 'CORREIOS',
    atualizadoEm: new Date().toDateString()
}

console.log('\nImprimindo pedido:')
console.log(pedido)
console.log('\nImprimindo atualizarStatus')
console.log(atualizarStatus(pedido, StatusPedido.EmSeparacao));
