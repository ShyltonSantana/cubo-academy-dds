const array = [1, 2, 3, 4, 5, 6, 7];

// const a = array[0];
// const b = array[1];// jeito dificil de fazer

// const [a, ...resto,b] = array; //nao funciona =(
const [a, b, ...resto] = array;
console.log(a, b, resto);