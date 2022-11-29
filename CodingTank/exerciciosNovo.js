const idades = [15, 22, 25, 16, 17, 65, 32, 12, 78, 11, 23, 45, 9, 55, 100]
/*
   1. Exiba quantas pessoas são maior de idade (18 anos) e quantas são menores
   2. Imprima apenas os valores impares
   3. Verifique qual é o maior número e exiba-o
   4. Calcule a média dos valores de um array.
   5. Faça um programa que leia um array e calcule quadrado de cada número.
*/

let maiorDeIdade = 0;
let menorDeIdade = 0;
let numeroMaior = 0;
let numerosImpar = [];

for (let i = 0; i < idades.length; i++) {
    if (idades[i] >= 18) {
        maiorDeIdade += 1;
    } else {
        menorDeIdade += 1;
    }
    if (idades[i] % 2 !== 0) {
        numerosImpar.push(idades[i]);
    }
    if (idades[i] > numeroMaior) {
        numeroMaior = idades[i];
    }
}

console.log("Maior de Idade: " + maiorDeIdade);
console.log("Menor de Idade: " + menorDeIdade);
console.log("Números impares: " + numerosImpar.join(", "));
console.log("Maior número: " + numeroMaior);
console.log("Média: " + calcularMedia(idades));
console.log("Quadrados: " + calcularQuadrados(idades));

function calcularMedia(array) {
    let somaTotal = 0;
    for (let i = 0; i < array.length; i++) {
        somaTotal += array[i];
    }
    return somaTotal / array.length;
}

function calcularQuadrados(array) {
    let quadradosArray = [];
    for (let i = 0; i < array.length; i++) {
        let numeroAoQuadrado = array[i]*array[i]
        quadradosArray.push(numeroAoQuadrado);
    }
    return quadradosArray;
}