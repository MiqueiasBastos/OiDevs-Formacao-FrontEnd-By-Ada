/*
  1 - Criar uma função que recebe um array de números e retorna o mesmo array, com os elementos ordenados em ordem crescente.
  2 - Fazer o mesmo da questão anterior, utilizando o método Array.prototype.sort().
*/
function ordenar(lista = []) {
    for(let i = 0; i < lista.length; i++){
        let indiceMenor = i;
        for(let j = i; j < lista.length; j++){
            if(lista[j] < lista[indiceMenor]){
                indiceMenor = j;
            }
        }
        let auxiliar;
        auxiliar = lista[i];
        lista[i] = lista[indiceMenor];
        lista[indiceMenor] = auxiliar;
    }
    return lista;
}

let array = [20, 66, 8, 1, 2, 22, 8, 9, 56];

console.log(ordenar(array));
console.log(array.sort((a, b) => {
    return a - b;
}));
