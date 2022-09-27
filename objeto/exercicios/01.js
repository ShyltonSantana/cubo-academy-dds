// criando objeto
const pessoa = {
    nome: "José",
    altura: 1.73,
    // peso: 60,
    idade: 30,
    CNH: false,
    apelidos: ["Jr", "Juninho", "J"]
};
// tenario
// let textoCNH = (condicao ? seVerdadeiro : seFalso);
let textoCNH = (pessoa.CNH ? "possui CNH" : "Não possui CNH");
// pessoa.nome = "Pedro"
// verificando se tem CNH
// if (pessoa.CNH) {
//     textoCNH = "possui CNH";
// } else {
//     textoCNH = "Não possui";
// }
// pessoa['altura'] = 1.80;
// pessoa['peso'] = 70;
console.log(`${pessoa.nome} tem ${pessoa.idade}anos
${pessoa.altura}m de altura possui ${textoCNH} e 
os seguintes apelidos`);
for (apelido of pessoa.apelidos) {
    console.log(`-${apelido}`);
}
// console.log(pessoa.apelidos);
// pessoa.apelidos = "Juninho"
// console.log(pessoa.apelidos);