// verifica se é maior idade

function maiorIdade(idade) {
    if (idade >= 18) {
        // é maior de idade
        return true;
        // console.log(nunca vai ser exercutado esta apos o return)
    } else {
        // não é maior de idade
        return false;
    }
}
const verifica = maiorIdade(20);
console.log(verifica);