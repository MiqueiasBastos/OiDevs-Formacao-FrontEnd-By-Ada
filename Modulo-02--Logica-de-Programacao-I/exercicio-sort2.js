let pessoas = [
    { nome: "Joao", idade: 25 },
    { nome: "Maria", idade: 39 },
    { nome: "Jose", idade: 20 },
];

console.log(
    "Mais Velhos: " +
        pessoas.sort((a, b) => {
            return b.idade - a.idade;
        })
);
console.log(
    "Ordem Alfabetica: " +
        pessoas.sort((a, b) => {
            if (a.nome < b.nome) {
                return -1;
            }
            return 1;
        })
);
