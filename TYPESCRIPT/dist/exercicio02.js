"use strict";
// ENUM + LITERAL TYPES
var StatusPedido;
(function (StatusPedido) {
    StatusPedido["Aguardando"] = "AGUARDANDO";
    StatusPedido["Pago"] = "PAGO";
    StatusPedido["EmSeparacao"] = "Em_SEPARACAO";
    StatusPedido["Enviado"] = "ENVIADO";
    StatusPedido["Entregue"] = "ENTREGUE";
    StatusPedido["Cancelado"] = "CANCELADO";
})(StatusPedido || (StatusPedido = {}));
function atualizarStatus(r, s) {
    return Object.assign(Object.assign({}, r), { status: s, atualizadoEm: new Date().toISOString() });
}
const pedido = {
    pedidoId: 1,
    status: StatusPedido.Aguardando,
    transportadora: 'CORREIOS',
    atualizadoEm: new Date().toDateString()
};
console.log('\nImprimindo pedido:');
console.log(pedido);
console.log('\nImprimindo atualizarStatus');
console.log(atualizarStatus(pedido, StatusPedido.EmSeparacao));
