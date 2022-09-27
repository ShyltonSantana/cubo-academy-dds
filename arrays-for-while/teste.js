const sequencia = "<>>>>>>>>"
let contador = 0;
for (let clicks of sequencia) {
    if (clicks === ">") {
        contador++;
        if (contador > 6) {
            contador = 0;
        }
    } else if (clicks === "<") {
        contador--;
        if (contador < 0) {
            contador = 6
        }
    }
} console.log(contador);

