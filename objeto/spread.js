// spread ..., espalha


const pessoa = {
    nome: "José",
    idade: 25,
    cidade: "Olinda",
    profissao: "Dev",
};

const endereco = {
    rua: "Recife",
    numero: 224,
    bairro: "Boa viagem",

};

const objetofundido = {
    ...pessoa,
    ...endereco,
};
console.log(objetofundido);