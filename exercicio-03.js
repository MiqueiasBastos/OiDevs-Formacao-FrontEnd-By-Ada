// 2. Ler um valor e escrever se é positivo, negativo ou zero

function verificarNumero(numero) {
    if (typeof numero !== "number") {
        return "O valor informado não é numérico";
    }
    if (numero > 0) {
        return `O número ${numero} é positivo`
    }
    if (numero < 0) {
        return `O número ${numero} é negativo`
    }
    if (numero === 0) {
        return `O número ${numero} é igual a zero`
    }
}

console.log(verificarNumero(10));
console.log(verificarNumero(-10));
console.log(verificarNumero(0));
console.log(verificarNumero('0'));
