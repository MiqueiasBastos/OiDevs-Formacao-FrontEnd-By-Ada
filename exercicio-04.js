// 3. Escreva um programa que leia um número e imprima se este número é ou não par.

function verificaParOuImpar(numero) {
    if (typeof numero !== "number") {
        return "O valor informado não é numérico";
    }
    if (numero % 2 === 0) {
        return `O número ${numero} é par`
    } else {
        return `O número ${numero} é impar`
    }
}

console.log(verificaParOuImpar(2));
console.log(verificaParOuImpar(3));
console.log(verificaParOuImpar('0'));
