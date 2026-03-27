let idade = 18

/*
Na programação com JavaScript, estrutura condicional é um bloco de código que permite executar ações com base em uma condição.

SE idade > 17
console.log("Você é maior de idade")
CASO CONTRÁRIO
console.log("Você é menor de idade")
*/

if (idade >= 18){
    console.log("Você é MAIOR de idade")
}else {
    console.log("Você é MENOR de idade")
}

    
/* Condicional == e ===

Principais diferenças:
== (Igualdade Aproximada/Abstrata): Verifica se os valores são iguais após converter o tipo (coerção de tipo).

5 == "5" --> true
0 == false --> true

----------------------------------------------------
=== (Igualdade Estrita): Verifica se os valores e os tipos são iguais, sem realizar conversão.

5 === "5" --> false (número vs string)
0 === false --> false (número vs booleano) 


Quando usar:
Use sempre === para garantir maior consistência, segurança e clareza no código, evitando bugs silenciosos. O == deve ser reservado para situações muito específicas onde a conversão de tipo é intencional.
*/

let idadee = "23"

if (idadee == 23){
    console.log("Você tem 23 anos")
}else {
    console.log("Você não tem 23 anos")
}

if (idadee === 23){
    console.log("Você tem 23 anos")
}else {
    console.log("Você não tem 23 anos")
}



idadee = 23

if (idadee === 23){
    console.log("Você tem 23 anos")
}else {
    console.log("Você não tem 23 anos")
}

/* [ == ] valida quando os falores são semelhantes, enquanto o [ === ] valida pelo tipo de dado da variavel, se e número, string, booleano ou objeto. */


/* Multi-condicionais (&& e ||)
Multi-condicionais, utilizando os operadores lógicos && (E) e || (OU), são fundamentais na programação para criar regras de negócio complexas e tomadas de decisão que dependem de mais de um fator. Eles permitem avaliar múltiplas expressões de comparação em um único bloco if.

(&&) - Conjunção
O operador && retorna verdadeiro (true) apenas se todas as condições testadas forem verdadeiras simultaneamente. Se pelo menos uma condição for falsa, o resultado total é falso. 

Lógica: Verdadeiro E Verdadeiro = Verdadeiro.
Lógica: Verdadeiro E Falso = Falso.
Exemplo: if (idade > 18 && temCarteira == true) (A pessoa precisa ter mais de 18 e ter carteira).

(||) - Disjunção
O operador || retorna verdadeiro (true) se pelo menos uma das condições testadas for verdadeira. Ele só retorna falso se todas as condições forem falsas. 

Lógica: Verdadeiro OU Falso = Verdadeiro.
Lógica: Falso OU Falso = Falso.
Exemplo: if (dia == "Sábado" || dia == "Domingo") (O dia pode ser Sábado ou Domingo).

--> RESUMO
&& (E): Se o primeiro operando for falso, o segundo não será executado, pois a expressão inteira já é falsa.
|| (OU): Se o primeiro operando for verdadeiro, o segundo não será executado, pois a expressão já é verdadeira, tambem  ao contrario a primeiro ser falso e o segundo verdadeiro a expressão é verdadeira.  
*/

let iidade = 73

/*
if (iidade >= 18){
    if (iidade < 60) {
        console.log("Você é um adulto")
    }
}
*/

if (iidade >= 18 && iidade < 60){
    console.log("Você é um adulto")
}



/* Condicional Dupla (if ... else if)
A estrutura if... else if ...else no JavaScript permite verificar múltiplas condições sequencialmente, executando o bloco de código correspondente à primeira condição verdadeira. Se a primeira condição (if) for falsa, o else if avalia uma nova condição, enquanto o else captura todos os outros casos. 

*/

let horas = 14 

if /*  (Se) */ (horas < 12){

    console.log("Bom dia!")
} else if /* (Senão Se) */ (horas < 18){

    console.log("Boa tarde!") // Este será executado
} else /* (Senão) */ {

    console.log("Boa noite!")
}

/*
Pontos Importantes
Quantidade Ilimitada: Você pode usar múltiplos else if para verificar várias condições.

Ordem Importa: O JavaScript avalia de cima para baixo e executa apenas o primeiro bloco verdadeiro.

else opcional: O bloco else não é obrigatório, mas serve como padrão caso nenhuma condição seja atendida.

Combinação de Condições: Pode-se usar operadores lógicos como && (E) e || (OU) dentro de um if ou else if.
*/



// A condicional IF verifica se a expressão retorna verdadeiro ou falso.
let anos = 14

let adulto = anos >= 18 && anos < 60

if (adulto){
    console.log("É adulto")
} else {
    console.log("Não é adulto")
}



/* Condicional Ternário
O operador condicional ternário é uma forma concisa de escrever estruturas if-else em uma única linha. Ele avalia uma condição booleana, retornando um valor se for verdadeira e outro se for falsa. A sintaxe padrão é condição ? expr1 : expr2 (verdadeiro : falso), comum em JavaScript, Java, C++, e C#.

Sintaxe Básica:
condição ? valor_se_verdadeiro : valor_se_falso 

Três operandos: A condição, o resultado para true e o resultado para false.
Uso: Ideal para atribuições simples, evitando blocos if-else extensos.
Aninhamento: É possível aninhar ternários, mas deve-se evitar para não prejudicar a legibilidade.
*/

let membro = (false);

let frete = (membro ? 2 : 10);

console.log(membro ? 'Você é membro' : 'Você não é membro');
console.log("Frete:" + frete)

/* switch
A instrução switch em JavaScript é uma estrutura condicional usada para comparar o valor de uma expressão com diferentes casos (case), executando o código correspondente ao primeiro valor que coincidir. 

Estrutura Básica
A sintaxe padrão do switch é composta pelos seguintes elementos:

switch(expressão): Define o valor ou variável que será testado.

case valor:: Especifica um valor para comparação. Se houver correspondência, o bloco de código abaixo é executado.

break;: Interrompe a execução e sai do switch. Sem ele, o código continua executando os casos seguintes mesmo sem coincidirem (comportamento chamado de fall-through).

default:: (Opcional) Define um código padrão para ser executado caso nenhum dos casos anteriores seja satisfeito.

--> Quando Usar
Múltiplas Opções: Quando você tem uma única variável que pode assumir vários valores discretos e fixos.

Legibilidade: Para evitar o "inferno de ifs" que torna o código difícil de manter.

Agrupamento: É possível agrupar vários casos que devem executar a mesma lógica, listando-os em sequência sem o break entre eles. 

*/

const fruta = 'Laranja';

switch (fruta) {
  case 'Laranja':
    console.log('O quilo da laranja custa R$ 5,00.');
    break;
  case 'Maçã':
    console.log('O quilo da maçã custa R$ 8,00.');
    break;
  default:
    console.log('Desculpe, não temos essa fruta.');
}

let profissao = "bombeiro"

console.log("Profissão: " + profissao)

switch (profissao) {
    case 'fiscal':
        console.log('Sua camisa será VERDE')
    break;
    case 'bombeiro':
        console.log('Sua camisa será VERMELHO')
    break;
    case 'policial':
        console.log('Sua camisa será PRETO')
    break;
    case 'medico':
        console.log('Sua camisa será BRANCO')
    break;
    default:
        console.log('Sua camisa será AZUL')
    break;
}