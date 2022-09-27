let dadospurificado = '';
for (let caractere of stringcorrompida) {
    if (caractere === '!' || caractere === '@' || caractere === '#' || caractere === '$' || caractere === '%' || caractere === '&' || caractere === '*' || caractere === '(' || caractere === '.') {

    } else {
        dadospurificado = dadospurificado + caractere;
    }
}