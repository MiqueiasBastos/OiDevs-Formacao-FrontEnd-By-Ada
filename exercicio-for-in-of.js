//EXERCICIO
//Você é um professor, e tem uma lista com alguns alunos(sendo objetos),
//onde as tem-se, nome, nota 1 e nota2. Use o for para percorer esse array
//e calcular a média das duas notas de cada aluno

const alunos = [
    { nome: "Carlos", idade: 18, email: "email@email.com", nota1: 5, nota2: 8 },
    { nome: "Julia", idade: 28, email: "email@email.com", nota1: 9, nota2: 7 },
    { nome: "Pedro", idade: 19, email: "email@email.com", nota1: 6, nota2: 5 },
    { nome: "Aline", idade: 25, email: "email@email.com", nota1: 7, nota2: 2 },
    { nome: "Joana", idade: 32, email: "email@email.com", nota1: 4, nota2: 5 },
    { nome: "Maisa", idade: 30, email: "email@email.com", nota1: 8, nota2: 5 },
];

for (const { nome, nota1, nota2 } of alunos) {
    console.log(`O aluno ${nome} tem a média ${(nota1 + nota2) / 2}`)
}
