/*
O que é uma função javascript?
Uma função JavaScript é um bloco de código projetado para realizar uma tarefa específica, que pode ser reutilizado várias vezes no programa. Ela atua como um procedimento ou "receita" que só executa quando é chamado, ajudando a organizar o código e evitar repetição desnecessária.

Principais Características:
Reutilização: Defina uma vez e use quantas vezes precisar.

Parâmetros (Entrada): Podem receber dados para processar.

Retorno (Saída): Podem calcular e devolver um valor usando a palavra-chave return.

Declaração: Geralmente criada com a palavra-chave function.

Como Funciona
Para usar uma função, você passa por duas etapas principais:
Definição (Declaração): Você cria a função usando a palavra-chave function, dá um nome a ela e define o código que será executado entre chaves { }.

Invocação (Chamada): O código dentro da função só é executado quando você a "chama" pelo nome seguido de parênteses ().

// Definindo a função
function saudacao(nome) {
    return "Olá, " + nome + "!";
}

// Chamando a função
console.log(saudacao("Maria")); // Saída: Olá, Maria!

Formas de Criar Funções:
Declaração de função (Function Declaration): function nome() { ... }.

Expressão de função (Function Expression): const nome = function() { ... }.

Arrow functions: const nome = () => { ... } (forma moderna e concisa). 

As funções são fundamentais para estruturar programas, tornando-os mais legíveis e fáceis de manter.

*/

function gravidade() {
    console.log(`A gravidade do planeta é:`);
    console.log(9.8);
}
gravidade()

function somar(n1, n2) {
    let resultado = n1 + n2
    console.log("Resultado: " + resultado)
}
somar(10, 15)

function nomecompleto(nome, sobrenome) {
    console.log(`${nome} ${sobrenome}`)
}
nomecompleto("Rafael", "dorcino")




// ENTRADA -> PROCESSAMENTO -> SAIDA
function calcularDesconto(preco, desconto) {
  return preco - (preco * (desconto / 100)); // Retorna o preço final
}

// O valor que a função "cospe" é guardado na variável 'valorFinal'
let valorFinal = calcularDesconto(100, 10); 

console.log("O preço com desconto é: R$" + valorFinal); 
// Saída: O preço com desconto é: R$90


function contascasa(agua, energia, aluguel) {
    return agua + energia + aluguel
}

let total = contascasa(100, 200, 700)
console.log(`Total de contas a pagar é: R$ ${total}`)




//Função com retorno condicional
let anos = 19

function maiordeidade(idade) {
    if (idade >= 18) {
        return true
    } else {
        return false
    }
}

let maior = maiordeidade(anos)

if(maior === true) {
    console.log(`Você tem ${anos}, já é MAIOR de idade.`)
} else {
    console.log(`Você tem ${anos}, é MENOR de idade.`)
}