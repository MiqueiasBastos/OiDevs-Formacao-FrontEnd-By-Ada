/*
  Faça um programa que recebe três números do usuário, e identifica o maior através de uma função e o menor número através de outra função.
*/

function maiorNumero(numeros) {
    let maior;
    numeros.forEach((numero) => {
        if (maior === undefined || numero > maior) {
            maior = numero;
        }
    });
    return maior;
}
function menorNumero(numeros) {
    let menor;
    numeros.forEach((numero) => {
        if (menor === undefined || numero < menor) {
            menor = numero;
        }
    });
    return menor;
}
const numeros = [33, 22, 90];
console.log(`O maior número entre ${numeros.join(', ')} é ${maiorNumero(numeros)}`);
console.log(`O menor número entre ${numeros.join(', ')} é ${menorNumero(numeros)}`);