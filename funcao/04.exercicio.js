const pessoaObj = {
    nome: "José",
    idade: 15,
    altura: 1.4,
    profissao: "estudante"
}
function apresentar(pessoa) {
    console.log(`Olá! Meu nome ${pessoa.nome},
    sou um jovem de ${pessoa.idade} anos,
    ${pessoa.altura}m e sou ${pessoa.profissao}`)
}
apresentar(pessoaObj);