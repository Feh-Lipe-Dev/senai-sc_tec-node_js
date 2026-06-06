// PEDIDOS

// A coleção de dados representa os pedidos feitos por clientes em um restaurante.
// Os dados seriam recebidos via API, mas para fins de desenvolvimento, eles estão sendo simulados como um array de objetos em JavaScript, representando um arquivo JSON.

const orders = [
    {
        "id": 1,
        "cliente": "Maria",
        "itens": [
            {
                "produto": "Pizza",
                "quantidade": 2,
                "preco": 50
            },
            {
                "produto": "Refrigerante",
                "quantidade": 1,
                "preco": 8
            }
        ],
        "status": "entregue",
        "pagamento": "pix"
    },
    {
        "id": 2,
        "cliente": "João",
        "itens": [
            {
                "produto": "Hamburguer",
                "quantidade": 3,
                "preco": 25
            }
        ],
        "status": "pendente",
        "pagamento": "cartao"
    },
    {
        "id": 3,
        "cliente": "Ana",
        "itens": [
            {
                "produto": "Pizza",
                "quantidade": 1,
                "preco": 50
            },
            {
                "produto": "Suco",
                "quantidade": 2,
                "preco": 10
            }
        ],
        "status": "entregue",
        "pagamento": "dinheiro"
    }
]

export default orders;