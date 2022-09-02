const nome = "Miquéias"
const idade = 25
const endereco = {
    cidade: "Itaberaba",
    uf: "BA"
}
const estadoCivil = "casado"
const nomeFilha = "Maria Sarah"
const formacao = {
    graduacao: "Sistemas de Informação",
    pos: "Segurança da Informação"
}
const hobby = [
    "assistir filmes e séries (principalmente da Marvel, rsrs)",
    "tocar contrabaixo",
    "ouvir música",
    "jogar video games"
]
const textoApresentacao = `Olá, meu nome é ${nome}, tenho ${idade} anos, moro na cidade de ${endereco.cidade}-${endereco.uf}, ${estadoCivil} e pai da princesa ${nomeFilha}.
Sou formado em ${formacao.graduacao}, e estou fazendo pós em ${formacao.pos}. Gosto de ${hobby.join(", ")} e sou apaixonado pelo mundo da tecnologia, em especial, a programação.`

console.log(textoApresentacao)
