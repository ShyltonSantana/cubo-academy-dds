const valorDaCompra = 1200;
const quantidadEDeParcela = 12;
if (quantidadEDeParcela === 1) {
    //a vista - 10% 
    const avista = valorDaCompra * 10 / 100;
    const valorAPagar = valorDaCompra - avista;
    console.log(`Você vai pagar R$${valorAPagar}`);
} else if (quantidadEDeParcela >= 2 && quantidadEDeParcela <= 6) {
    // parcelado em até 6 vezes sem juros
    const parcelado = valorDaCompra / quantidadEDeParcela;
    console.log(`Você vai pagar R$${parcelado.toFixed(2)} em ${quantidadEDeParcela} vezes sem juros`)
} else if (quantidadEDeParcela >= 7 && quantidadEDeParcela <= 12) {
    // parcelas com juros
    const valorAPagarComJuros = valorDaCompra * (1 + 1 / 100) ** quantidadEDeParcela;
    const parcelado = valorAPagarComJuros / quantidadEDeParcela;
    console.log(`Você vai pagar R$${parcelado.toFixed(2)} em ${quantidadEDeParcela} vezes com juros no total de ${valorAPagarComJuros.toFixed(2)}`)
} else {
    console.log("Números de parcelas inválido");
}