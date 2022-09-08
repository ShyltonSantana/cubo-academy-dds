const teMIngreso = true;
const censura = 16;
const idade = 18;
const estAComOSpais = true;

if (teMIngreso) {
    if (idade >= censura || estAComOSpais) {
        console.log("Pode entrar");
    } else {
        console.log("barrado");
    }
} else {
    console.log("barrado");
}