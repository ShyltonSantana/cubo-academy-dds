// criando objeto
const pessoa = {
    nome: "José",
    altura: 1.73,
    peso: 60,
};
// modificando a propriedade em objeto 
pessoa.nome = "Pedro"
// Jeito diferente de modificar a o valor das 
// propriedade
pessoa['altura'] = 1.80;
pessoa['peso'] = 70;
console.log(`Meu nome é ${pessoa.nome},
tenho ${pessoa.altura}m e peso ${pessoa.peso}kg.`)