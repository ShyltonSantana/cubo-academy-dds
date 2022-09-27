function verificaFaixaEtari(idade) {
    if (idade < 21) {
        return "Jovem";
    } else if (idade < 66) {
        return "Adulto (a)";
    } else {
        return "Idoso";
    }
}

const verificaValorRetornado = verificaFaixaEtari(18);
console.log(verificaValorRetornado);