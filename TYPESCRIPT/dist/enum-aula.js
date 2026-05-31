"use strict";
console.log("Numeric Enum (padrão)");
console.log("Cada valor passado é representado por um inteiro.");
var Nivel;
(function (Nivel) {
    Nivel[Nivel["Vistante"] = 0] = "Vistante";
    Nivel[Nivel["Usuario"] = 1] = "Usuario";
    Nivel[Nivel["Moderador"] = 2] = "Moderador";
    Nivel[Nivel["Admin"] = 3] = "Admin";
})(Nivel || (Nivel = {}));
console.log('Nivel.Visitante:', Nivel.Vistante); //0
console.log('Nivel.Usuario:', Nivel.Usuario); //1
console.log('Nivel.Moderador:', Nivel.Moderador); //2
console.log('Nivel.Admin:', Nivel.Admin, '\n'); //3
console.log("String Enum (padrão para API's)");
var SituacaoPedido;
(function (SituacaoPedido) {
    SituacaoPedido["Aguardando"] = "AGUARDANDO";
    SituacaoPedido["Pago"] = "PAGO";
    SituacaoPedido["EmSeparacao"] = "Em_SEPARACAO";
    SituacaoPedido["Enviado"] = "ENVIADO";
    SituacaoPedido["Entregue"] = "ENTREGUE";
    SituacaoPedido["Cancelado"] = "CANCELADO";
})(SituacaoPedido || (SituacaoPedido = {}));
console.log(SituacaoPedido.Aguardando);
console.log(SituacaoPedido.Entregue);
console.log(SituacaoPedido.Cancelado);
