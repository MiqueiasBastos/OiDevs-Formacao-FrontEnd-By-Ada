/* Escreva um código que simule uma calculadora básica, provendo a leitura
   de um valor, seguido da operação (+, -, * e /) e do segundo valor. */

let number1 = prompt('Informe o primeiro número');
let operation = prompt("Informe a operação ('+' para adição, '-' para subtração, '*' para multiplicação ou '/' para divisão)");
let number2 = prompt('Informe o segundo número');

number1 = Number(number1)
number2 = Number(number2)

let out;

if(operation !== '+' && operation !== '-' && operation !== '*' && operation !== '/') {
    out = "Informe um operador válido";
}
else if(isNaN(number1) || isNaN(number2)) {
    out = "Informe números Válidos para fazer a operação";
} else {
    switch (operation) {
        case '+':
            out = `O resultado de ${number1}+${number2} é: ${number1 + number2}`;
            break;
        case '-':
            out = `O resultado de ${number1}-${number2} é: ${number1 - number2}`;
            break;
        case '*':
            out = `O resultado de ${number1}*${number2} é: ${number1 * number2}`;
            break;
        case '/':
            out = `O resultado de ${number1}/${number2} é: ${number1 / number2}`;
            break;
        default:
            out = "Desculpe, ocorreu um erro!"
            break;
    }
}
alert(out);
document.querySelector('p').textContent = out;