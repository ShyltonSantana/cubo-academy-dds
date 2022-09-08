const teMIngreso = false;
const censura = 16;
const idade = 18;

if (teMIngreso === true) {
    if (idade >= censura) {
        console.log("Pode entrar");
    } else {
        console.log("barrada");
    }
} else {
    console.log("barrada");
}

