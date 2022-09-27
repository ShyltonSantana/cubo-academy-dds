const pessoa = {
    nome: "José",
    idade: 25,
    cidade: "Olinda",
    profissao: "Dev",
};

// const nome = pessoa.nome;
// const idade = pessoa.idade;

const { nome, idade, ...outros } = pessoa;
// desestruração 

console.log(nome, idade);
console.log(outros);