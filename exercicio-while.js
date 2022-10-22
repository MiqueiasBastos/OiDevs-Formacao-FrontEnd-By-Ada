// Você tem um array que está vazio, e precisa preencher o mesmo com 5 numeros aleatórios de 0 a 10

const aleatorios = [];

while(aleatorios.length < 5) {
    let aleatorio = Math.round(Math.random() * 10);

    if(aleatorios.indexOf(aleatorio) === -1) {
        aleatorios.push(aleatorio)
    }
}

console.log(aleatorios)
