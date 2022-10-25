/*
  Faça um programa com uma função chamada somaImposto. A função possui dois parâmetros formais: taxaImposto, que é a quantia de imposto sobre vendas expressa em porcentagem e custo, que é o custo de um item antes do imposto. A função “altera” o valor de custo para incluir o imposto sobre vendas.
*/

const produtos = [
    {
        nome: "Sapato",
        custo: 120,
        taxaImposto: 10,
    },
    {
        nome: "Bolsa",
        custo: 150,
        taxaImposto: 15,
    },
    {
        nome: "Cinto",
        custo: 80,
        taxaImposto: 5,
    },
];

function somaImposto(taxaImposto, custo) {
    return custo + custo * (taxaImposto / 100);
}

produtosVenda = produtos.map((produto) => ({
    nome: produto.nome,
    valor: somaImposto(produto.taxaImposto, produto.custo),
}));
console.log(produtosVenda);
