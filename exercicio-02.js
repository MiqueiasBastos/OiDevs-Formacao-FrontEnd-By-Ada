// 1. Escreva um algoritmo para ler as dimensões de um retângulo (base e altura), calcular e escrever a área do retângulo.

function calcularAreaRetangulo(base, altura) {
    if (typeof base !== "number" || typeof altura !== "number") {
        return "Dados incorretos";
    }
    return `A área é: ${base*altura}`
}

console.log(calcularAreaRetangulo(10, 20));

// Verficação das condicionais
console.log(calcularAreaRetangulo('base', 20));
console.log(calcularAreaRetangulo(10, 'altura'));
console.log(calcularAreaRetangulo('base', 'altura'));
