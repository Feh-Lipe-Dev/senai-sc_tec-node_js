import orders from "./orders.js";
import { listCustomerNames, findOrderById, filterDeliveredOrders, allOrdersDelivered,
    revenuePerOrder, totalRevenue, objectToJson, jsonToObject,
    listCustomerCallback, totalRevenueCallback, filterPendingOrders
} from "./reports.js";

console.log("- - - - - - - - - - - - - - - - - - - - - - - -")
console.log("RESULTADOS DO DESAFIO BACK-END: TESTES MANUAIS")
console.log("- - - - - - - - - - - - - - - - - - - - - - - -\n")

console.log("Desafio #1 — Resultados encontrados:");
console.log(listCustomerNames(orders), "\n");

console.log("Desafio #2 — Resultados encontrados:");
const idNumber = 2;
console.log(findOrderById(orders, idNumber), "\n");

console.log("Desafio #3 - Resultados encontrados:");
console.log(filterDeliveredOrders(orders), "\n");

console.log("Desafio #4 - Resultados encontrados:");
console.log(allOrdersDelivered(orders), "\n");

console.log("Desafio #5 - Resultados encontrados:");
console.log(revenuePerOrder(orders), "\n");

console.log("Desafio #6 - Resultados encontrados:");
console.log(totalRevenue(orders), "\n");

console.log("Desafio #7 - Resultados encontrados:");
console.log(objectToJson(orders),"\n");

console.log("Desafio #8 - Resultados encontrados:");
console.log(jsonToObject(objectToJson(orders)), "\n");

console.log("Desafio #9.1 - Resultados encontrados:");
console.log(listCustomerCallback(orders), "\n");

console.log("Desafio #9.2 - Resultados encontrados:");
console.log(totalRevenueCallback(orders), "\n");

console.log("Desafio #9.3 - Resultados encontrados:");
console.log(filterPendingOrders(orders), "\n");
