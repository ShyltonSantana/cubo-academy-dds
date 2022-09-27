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
};
let totalApagar = 0;
for (let produto of produtosConsumidos) {
    totalApagar += produto.precounit * produto.quantidades;
}
const totalFormatado = (totalApagar / 100).toFixed(2);
console.log(`Sr(a) ${cartao.nome} o total a pagar é R$${totalFormatado}`);