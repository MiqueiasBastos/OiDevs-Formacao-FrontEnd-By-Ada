/*
Crie um código que recebe 3 notas de um aluno entre 0 e 10 e calcule a média.
   • Se a média for menor que 5 exiba na tela que esse aluno está reprovado, caso a nota seja maior ou igual a 5 exiba que ele foi aprovado.
   • Coloque validação se o usuário preencheu todas as notas e se elas estão entre 0-10, se uma dessas regras de validação não for cumprida, peça para ele começar novamente
*/

const notas = [];
const totalNotas = 3;

function inserirNotas(totalNotas) {
    while (notas.length < totalNotas) {
        let nota = prompt(`Insira a nota ${notas.length + 1}`);

        if (nota < 0 || nota > 10) {
            notas.push(null);
        } else if (nota === "") {
            notas.push(NaN);
        } else {
            notas.push(Number(nota));
        }
    }
    if (notas.includes(NaN) || notas.includes(null)) {
        alert("Por favor, insira notas válidas!");
        while (notas.length) {
            notas.pop();
        }
        inserirNotas(totalNotas);
    }
}

inserirNotas(totalNotas);

let somaTotal = 0;

for (let nota of notas) {
    somaTotal += nota;
}

const media = somaTotal / notas.length;

let estaAprovado;

if (media < 5) {
    estaAprovado = false;
} else if (media >= 5) {
    estaAprovado = true;
}

alert(`Aluno ${estaAprovado ? "aprovado" : "reprovado"}!`);
document.querySelector("p").textContent = `Aluno ${estaAprovado ? "aprovado" : "reprovado"}, média de ${media.toFixed(1)}`;
