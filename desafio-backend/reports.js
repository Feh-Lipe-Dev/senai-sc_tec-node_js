import orders from "./orders.js";

// Desafio #1 — Listar nomes dos clientes
export const listCustomerNames = (orders) => orders.map(order => order.cliente);

// Desafio #2 — Buscar pedido por ID
export const findOrderById = (orders, idNumber) => orders.find(order => order.id === idNumber);

// Desafio #3 — Filtrar pedidos entregues
export const filterDeliveredOrders = (orders) => orders.filter(order => order.status === "entregue");

// Desafio #4 — Verificar status geral dos pedidos
export const allOrdersDelivered = (orders) => orders.every(order => order.status ==="entregue");

// Desafio #5 — Calcular total de cada pedido
export function revenuePerOrder(orders) {
        return orders.map(order => {
        const total = order.itens.reduce((acc, item) => acc + (item.preco * item.quantidade), 0);
        return {cliente: order.cliente, total: total};
    })
}

// Desafio #6 — Calcular faturamento total
export function totalRevenue() {
    return orders.reduce((revenue, order) => {
        const total = order.itens.reduce((acc, item) => acc + (item.preco * item.quantidade), 0);
        return revenue + total;
    }, 0);
}

// Desafio #7 — Converter objeto para JSON
export const objectToJson = (orders) => JSON.stringify(orders, null, 2);

// Desafio #8 — Converter JSON novamente para objeto
export const jsonToObject = (json) => JSON.parse(json);

// Desafio 9 — Criar callbacks personalizados
// 9.1 listar clientes
export const listCustomerCallback = (ordersList) => listCustomerNames(ordersList);
// 9.2 calcular faturamento
export const totalRevenueCallback = (ordersList) => totalRevenue(ordersList);
// 9.3 filtrar pedidos pendentes
export const filterPendingOrders = (ordersList) => ordersList.filter(order => order.status === "pendente");

// EXTRA #1. Qual produto foi mais vendido ?
export function mostSoldProduct(orders) {
    const productSales = {};
    let mostSold = null;
    let maxSales = 0;

    orders.forEach(order => {
        order.itens.forEach(item => {
            if (!productSales[item.produto]) {
                productSales[item.produto] = 0;
            }
            productSales[item.produto] += item.quantidade;
        });
        for (const product in productSales) {
            if (productSales[product] > maxSales) {
                mostSold = product;
                maxSales = productSales[product];
            } else if (productSales[product] === maxSales) {
                mostSold = `${mostSold} e ${product}`;
            }
        }
    });
    const uniqueBest = [...new Set(mostSold.split(" e "))];
    return { produto: uniqueBest.join(" / "), quantidade: maxSales };
}
console.log(mostSoldProduct(orders));