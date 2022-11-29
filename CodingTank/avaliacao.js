const dadosPessoas = [
    ["Ana", "Paulo", "Márcia", "Pedro", "Beatriz"],
    [1.7, 1.72, 1.62, 1.9, 1.53],
    [80, 90, 61, 84, 49],
];

// Indice 0 = Nome
// Indice 1 = Altura
// Indice 2 = Peso

// a. A média de altura

/* 
    Criei uma variável para armazenar a soma;
    Depois montei um FOR para passar por todos os items do array de indice 1 dentro do array principal;
    Dentro do for, eu acrescento à variável soma o valor da altura da iteração atual;
    Após finalizar o loop, declaro uma variável para armazenar a média, e faço o calculo;
    Por fim, exibo no console o valor da média;
*/

let somaAltura = 0;
for (let i = 0; i < dadosPessoas[1].length; i++) {
    somaAltura += dadosPessoas[1][i];
}
const mediaAltura = somaAltura / dadosPessoas[1].length;
console.log("Média das alturas: ", mediaAltura.toFixed(2));

// b. A média de peso

/* 
    Criei uma variável para armazenar a soma;
    Depois montei um FOR para passar por todos os items do array de indice 2 dentro do array principal;
    Dentro do for, eu acrescento à variável soma o valor do peso da iteração atual;
    Após finalizar o loop, declaro uma variável para armazenar a média, e faço o calculo;
    Por fim, exibo no console o valor da média;
*/

let somaPeso = 0;
for (let i = 0; i < dadosPessoas[2].length; i++) {
    somaPeso += dadosPessoas[2][i];
}
const mediaPeso = somaPeso / dadosPessoas[2].length;
console.log("Média dos pesos: ", mediaPeso.toFixed(2));

// c. O nome e IMC de cada uma das pessoas

/* 
    Criei um array para armazenar os IMCs para uso posterior;
    Depois montei um FOR para passar por todos os items do array de indice 0 dentro do array principal;
    dentro do for, criei variaveis para facilitar a leitura, armazenando peso, altura, nome da pessoa e imc de cada uma delas;
    apriveito a iteração e exibo no console o imc de cada pesosa (Usei o toFixed para deixar apenas duas casas decimais)
    Adiciono no array criado o imc calulado
*/

const imc = [];
for (let i = 0; i < dadosPessoas[0].length; i++) {
    let peso = dadosPessoas[2][i];
    let altura = dadosPessoas[1][i];
    let nome = dadosPessoas[0][i];
    let imcCalculado = peso / (altura * altura);
    console.log("IMC de " + nome + ": " + imcCalculado.toFixed(2));
    imc.push(imcCalculado);
}

// d. O nome da pessoa mais alta e sua altura

/*
    Criei duas variaveis para armazenar a maior altura e o indice da pessoa mais alta;
    depois criei um FOR para passar por todos os items do array de indice 1 dentro do array principal;
    dentro do loop criei uma condição para saber se o valor da altura atual é maior que a armazenada, caso seja, ela substitue o valor da variável pelo valor atual, e também o indice;
    No final, ele exibe, baseado no indice o nome da pessoa mais alta e o valor da altura armazenada
*/

let maiorAltura = 0;
let indicePessoaMaisAlta;
for (let i = 0; i < dadosPessoas[1].length; i++) {
    if (dadosPessoas[1][i] > maiorAltura) {
        maiorAltura = dadosPessoas[1][i];
        indicePessoaMaisAlta = i;
    }
}
console.log("A pessoa mais alta é: " + dadosPessoas[0][indicePessoaMaisAlta] + " com " + maiorAltura + " metros");

// e. O nome da pessoa mais baixa e sua altura

/*
    Criei duas variaveis para armazenar a menor altura e o indice da pessoa mais baixa;
    depois criei um FOR para passar por todos os items do array de indice 1 dentro do array principal;
    dentro do loop criei uma condição que verifica se a a variavel menorAltura é undefined (se for verdadeiro, quer dizer que é a primeira iteração) ou o valor da altura atual é menor que a armazenada;
    Caso seja, ela substitue o valor da variável pelo valor atual, e também o indice;
    No final, ele exibe, baseado no indice o nome da pessoa mais baixa e o valor da altura armazenada
*/

let menorAltura;
let indicePessoaMaisBaixa;
for (let i = 0; i < dadosPessoas[1].length; i++) {
    if (menorAltura === undefined || dadosPessoas[1][i] < menorAltura) {
        menorAltura = dadosPessoas[1][i];
        indicePessoaMaisBaixa = i;
    }
}
console.log("A pessoa mais baixa é: " + dadosPessoas[0][indicePessoaMaisBaixa] + " com " + menorAltura + " metros");

// f. O nome da pessoa mais pesada e seu peso

/*
    Criei duas variaveis para armazenar a maior peso e o indice da pessoa mais pesada;
    depois criei um FOR para passar por todos os items do array de indice 2 dentro do array principal;
    dentro do loop criei uma condição para saber se o valor do peso atual é maior que a armazenada, caso seja, ela substitue o valor da variável pelo valor atual, e também o indice;
    No final, ele exibe, baseado no indice o nome da pessoa mais baixa e o valor da altura armazenada
*/

let maiorPeso = 0;
let indicePessoaMaisPesada;
for (let i = 0; i < dadosPessoas[2].length; i++) {
    if (dadosPessoas[2][i] > maiorPeso) {
        maiorPeso = dadosPessoas[2][i];
        indicePessoaMaisPesada = i;
    }
}
console.log("A pessoa mais pesada é: " + dadosPessoas[0][indicePessoaMaisPesada] + " com " + maiorPeso + " quilos");

// g. O nome da pessoa mais leve e seu peso

/*
    Criei duas variaveis para armazenar a menor peso e o indice da pessoa mais leve;
    depois criei um FOR para passar por todos os items do array de indice 2 dentro do array principal;
    dentro do loop criei uma condição que verifica se a a variavel menorPeso é undefined (se for verdadeiro, quer dizer que é a primeira iteração) ou o valor da peso atual é menor que a armazenada;
    Caso seja, ela substitue o valor da variável pelo valor atual, e também o indice;
    No final, ele exibe, baseado no indice o nome da pessoa mais leve e o valor da peso armazenada
*/

let menorPeso;
let indicePessoaMaisLeve;
for (let i = 0; i < dadosPessoas[2].length; i++) {
    if (menorPeso === undefined || dadosPessoas[2][i] < menorPeso) {
        menorPeso = dadosPessoas[2][i];
        indicePessoaMaisLeve = i;
    }
}
console.log("A pessoa mais leve é: " + dadosPessoas[0][indicePessoaMaisLeve] + " com " + menorPeso + " quilos");

// h. O nome da pessoa com o maior IMC e seu valor

/*
    Criei duas variaveis para armazenar o maior IMC e seu indice;
    depois criei um FOR para passar por todos os items do array de IMC criado anteriormente;
    dentro do loop criei uma condição para saber se o valor do imc atual é maior que a armazenada, caso seja, ela substitue o valor da variável pelo valor atual, e também o indice;
    No final, ele exibe, baseado no indice o nome da pessoa e seu imc;
*/

let maiorIMC = 0;
let indiceMaior;

for (let i = 0; i < imc.length; i++) {
    if (imc[i] > maiorIMC) {
        maiorIMC = imc[i];
        indiceMaior = i;
    }
}
console.log("A pessoa com maior IMC é: " + dadosPessoas[0][indiceMaior] + " com " + maiorIMC.toFixed(2));


// i. O nome da pessoa com o menor IMC e seu valor

/*
    Criei duas variaveis para armazenar o menor IMC e seu indice;
    depois criei um FOR para passar por todos os items do array de IMC criado anteriormente;
    dentro do loop criei uma condição para saber se o valor do imc atual é menor que a armazenada, caso seja, ela substitue o valor da variável pelo valor atual, e também o indice;
    No final, ele exibe, baseado no indice o nome da pessoa e seu imc;
*/

let menorIMC;
let indiceMenorIMC;

for (let i = 0; i < imc.length; i++) {
    if (menorIMC === undefined || imc[i] < menorIMC) {
        menorIMC = imc[i];
        indiceMenorIMC = i;
    }
}
console.log("A pessoa com menor IMC é: " + dadosPessoas[0][indiceMenorIMC] + " com " + menorIMC.toFixed(2));