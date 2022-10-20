// Escreva um código que imprima um mês de acordo com o número digitado pelo usuário.

const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

let monthNumber = prompt('Insira o número do mês');
monthNumber = parseInt(monthNumber);

if (monthNumber >= 1 && monthNumber <= 12) {
    document.querySelector('p').textContent = `O mês ${monthNumber} é ${months[monthNumber - 1]}`;
} else {
    document.querySelector('p').textContent = `O valor informado não é um mês válido`;
}