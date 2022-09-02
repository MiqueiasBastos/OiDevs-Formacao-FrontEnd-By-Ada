/**
 * O que é Algoritmo?
 * 
 * Ir até o mercado
 * Se tiver massa Dona Benta de chocolate
 *  - Comprar
 * Se não tiver massa Dona Benta de chocolate
 *  - Se tiver massa Dona Benta de baunilha
 *      - Comprar
 * Comprar 3 ovo
 * Comprar 1l leite
 * Comprar manteiga
 * Voltar pra casa
 * Preaquecer o forno à 180 graus
 * Pegar uma tijela
 * Colocar a massa Dona Benta na tijeta
 * Quebrar os 3 ovos
 * Colocar os ovos na tijela
 * Coloar 200ml de leite
 * Bater por 10 minutos
 * Passar manteiga na forma
 * Despejaria a massa na forma
 * Levaria ao forno por 30 min
 * Tirar o bolo do forno
 * Servir o bolo
 * 
 * Qual o problema? - Quero que meus clientes calculem o IMC sem a minha ajuda
 *  - Quais o dados de entrada?
 *      - Peso
 *      - Altura
 *  - O que preciso fazer com esses dados?
 *      - P/A²
 *  - Quais a regras e restrições para esse problema?
 *      - Os dados precisam ser numéricos
 *      - O peso deve ser em Kg
 *      - A altura deve ser em Metros
 *      - Não existe divisão por zero
 *  - Qual o resultado esperado?
 *      - O IMC
 *      - Grau de Obesidade
 *  - Quais os passos para alcançar esse resultado?
 *  
 * 
 * Inicio
 * 
 * Ler peso
 * Guardar peso
 * Se peso for diferente de "Numero" OU peso <= 0 
 *  Escreve "Dados inválidos"
 *  
 * Ler altura
 * Guardar altura
 * Se altura for diferente de "Numero" ou altura <= 0
 *  Escrever "Dados inválidos"
 * 
 * Guardar resultado peso/(altura * altura) 
 * 
 * Se resultado < 18.5
 *  Escrever "Seu IMC é: " + resultado + " - Você está abaixo do peso"
 *  // "Seu IMC é 17 - Você está abaixo do peso"
 * 
 * Se resultado >= 18.5 E resultado <= 24.9
 *  Escrever Escrever "Seu IMC é: " + resultado + " - Você está no peso ideal"
 *  
 * Se resultado >= 25 E resultado <= 29.9
 *  Escrever Escrever "Seu IMC é: " + resultado + " - Você está com pré-obeso"
 * 
 * Se resultado >= 30 E resultado <= 34.9
 *  Escrever Escrever "Seu IMC é: " + resultado + " - Você está com ovesidade grau 1"
 *
 * Se resultado >= 35 E resultado <= 39.9
 *  Escrever Escrever "Seu IMC é: " + resultado + " - Você está com ovesidade grau 2"
 * 
 * Se resultado >= 40
 *  Escrever Escrever "Seu IMC é: " + resultado + " - Você está com ovesidade grau 3"
 *
 * Analise Critica para solucionar o problema:
 * 
 */

 /**
  * Exercícios:
  *     Escreva um programa que mostre na tela EM FORMA DE TEXTO a sua biografia
  *     seu nome, idade, cidade, e uma curiosidade sobre você?
  * 
  *     Pesquisa: Concatenação de string em JavaScript
  * 
  *     const nome = Esdras
  *     const idade = 18
  *     console.log('Meu nome é ' + nome + 'e tenho ' + idade)
  */


const nome = 'Esdras'
const idade = 18
console.log('Meu nome é ' + nome + ' e tenho ' + idade + ' anos')
