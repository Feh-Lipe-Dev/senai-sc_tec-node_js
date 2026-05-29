console.log("Numeric Enum (padrão)");
console.log("Cada valor passado é representado por um inteiro.")

enum Nivel {
    Vistante,
    Usuario,
    Moderador,
    Admin,
}
console.log('Nivel.Visitante:', Nivel.Vistante)  //0
console.log('Nivel.Usuario:', Nivel.Usuario)     //1
console.log('Nivel.Moderador:', Nivel.Moderador) //2
console.log('Nivel.Admin:', Nivel.Admin, '\n')   //3

console.log("String Enum (padrão para API's)");
enum SituacaoPedido {
    Aguardando = 'AGUARDANDO',
    Pago = 'PAGO',
    EmSeparacao = 'Em_SEPARACAO',
    Enviado = 'ENVIADO',
    Entregue = 'ENTREGUE',
    Cancelado = 'CANCELADO'
}
console.log(SituacaoPedido.Aguardando)
console.log(SituacaoPedido.Entregue)
console.log(SituacaoPedido.Cancelado)