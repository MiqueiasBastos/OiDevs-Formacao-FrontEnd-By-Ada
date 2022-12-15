# Aula 07

Link para o deploy do exercício: [Clique aqui](https://miqueiasbastos.github.io/OiDevs-Formacao-FrontEnd-By-Ada/Modulo-04--FrontEnd-Dinamico-JS-vanilla/aula-07/)

## Trefas

### Requisitos

Implementar Crud produtos

#### Listagem de produtos 

- Em cada item deve conter um botao `editar` e `deletar`
- Ao clicar clicar em `editar` devera abrir um modal para edicao dos dados
- No modal devera conter um botao para submeter as alteracoes a api no endpoint `/products/:id` utilizando o verbo `PUT` e um cancelar
- Aoclicar em cancelar devera limpar as alteracoes e fechar o modal
- Ao clicar em `deletar` devera abrir uma janela de confirmacao com a mensagem `Ao confirmar o item ${id - nome do produto} sera apagado completamente`
- Ao clicar em confirmar devera fazer uma chamada para a api `/products/:id` utilizando o verbo `DELETE` para apagar um registro

#### Barra de pesquisa

- Devera conter uma barra de pesquisa para pesquisar por `nome e categoria`
- Caso seja feita pesquisas > 1 em uma determinada categoria, devera salvar a consulta em um array no `localStorage`