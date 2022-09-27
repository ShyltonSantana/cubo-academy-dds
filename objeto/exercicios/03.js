const produtosConsumidos = [
    {
        nome: "Pão de alho",
        precounit: 1500,
        quantidades: 3,
    },
    {
        nome: "Cerveja",
        precounit: 800,
        quantidades: 4,
    },
    {
        nome: "Camarão com frita",
        precounit: 2500,
        quantidades: 1,
    },
]

const cartao = {
    nome: "Pedro",
    idade: 45,
    produtosConsumidos
};
console.log(cartao.nome);
console.log(cartao.idade);
cartao.idade = 46;
console.log(cartao.idade);
console.log(cartao.produtosConsumidos[0].nome);
console.log(cartao.produtosConsumidos[produtosConsumidos.length - 1].precounit);