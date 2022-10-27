function fibonacci (posicao) {
    let numero;
    if(posicao === 1) {
        numero = 0;
    }
    else if(posicao === 2 ) {
        numero = 1;
    }
    else {
        numero = fibonacci (posicao - 1) + fibonacci (posicao - 2);
    }
    return numero;
}
console.log(fibonacci(11));

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55