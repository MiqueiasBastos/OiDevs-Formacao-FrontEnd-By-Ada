// Crie um algoritmo usando o for que leia uma lista. 
// Mostre no console apenas os números pares. 
// Esta lista deve ser assim: [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Lista -> [1,2,3,4,5,6,7,8,9]
// [2, 4, 6,8] -> pares
// [1,3,5,7,9] -> impares


const lista = [1,2,3,4,5,6,7,8,9];
const pares = [];
const impares = []

for (let index = 0; index < lista.length; index++) {
    if(lista[index] % 2 == 0) {
        pares.push(lista[index]);
    }
    else {
        impares.push(lista[index]);
    }
}

console.log(`Os números pares são: ${pares.join(', ')}\n
Os números impares são: ${impares.join(', ')}
`)