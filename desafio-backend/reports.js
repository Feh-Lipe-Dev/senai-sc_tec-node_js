import orders from "./orders.js";

// Desafio #1 — Listar nomes dos clientes
export const listCustomerNames = (orders) => orders.map(order => order.cliente);

// Desafio #2 — Buscar pedido por ID
export const findOrderById = (ordersList, idNumber) => orders.find(order => order.id === idNumber);

// Desafio #3 — Filtrar pedidos entregues
export const filterDeliveredOrders = (orderList) => orders.filter(order => order.status === "entregue");

// Desafio #4 — Verificar status geral dos pedidos
export const allOrdersDelivered = (orderList) => orders.every(order => order.status ==="entregue");

// Desafio #5 — Calcular total de cada pedido
// export function revenuePerOrder(orderList) {
//     return orders.map((order) => {
//         const total = order.itens.reduce((acc, item) => acc + (item.preco * item.quantidade), 0);
//         return total;
// })}
export function revenuePerOrder(orderList) {
        return orders.map(order => {
        const total = order.itens.reduce((acc, item) => acc + (item.preco * item.quantidade), 0);
        return {cliente: order.cliente, total: total};
    })
}

// Desafio #6 — Calcular faturamento total
export function totalRevenue() {
    return orders.reduce((acc, order) => {
        const total = order.itens.reduce((acc, item) => acc + (item.preco * item.quantidade), 0);
        return acc + total;
    }, 0);
}
// export function totalRevenue(orders) {
//     return orders.reduce(
//         (revenue, order) => revenue + revenuePerOrder(order)
//         , 0)
// }

// Desafio #7 — Converter objeto para JSON
export const objectToJson = (ordersList) => JSON.stringify(ordersList, null, 2);

// Desafio #8 — Converter JSON novamente para objeto
export const jsonToObject = (json) => JSON.parse(json);

// Desafio 9 — Criar callbacks personalizados
// 9.1 listar clientes
export const listCustomerCallback = (ordersList) => listCustomerNames(ordersList);
// 9.2 calcular faturamento
export const totalRevenueCallback = (ordersList) => totalRevenue(ordersList);
// 9.3 filtrar pedidos pendentes
export function filterPendingOrders(ordersList) {
    return orders.filter(order => order.status === "pendente");
}