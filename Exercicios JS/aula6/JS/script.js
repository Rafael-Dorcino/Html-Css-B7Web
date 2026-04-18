/* 
As variáveis declaradas dentro de uma função em JavaScript operam sob o conceito de escopo local. Isso significa que elas são criadas quando a função começa a ser executada e destruídas assim que ela termina, tornando-as inacessíveis para o código que está fora da função. 

Aqui estão os pontos principais para entender como elas funcionam:
1. Escopo de Função (Local)
Qualquer variável definida dentro de uma função pertence exclusivamente a esse "ambiente". 

Isolamento: Se você criar uma variável dentro de uma função, não conseguirá usá-la no escopo global ou em outras funções diferentes.

Conflitos: Você pode usar o mesmo nome de variável em funções diferentes sem que uma interfira na outra. 

2. Diferenças entre var, let e const
A forma como você declara a variável muda seu comportamento dentro da função: 

var: Tem escopo de função. Se declarada dentro de um bloco (como um if) dentro da função, ela ainda será visível em toda a extensão daquela função.

let e const: Têm escopo de bloco. Se você as declarar dentro de um if ou for dentro da função, elas só existirão dentro desse par de chaves {}.

const: Além do escopo de bloco, impede que o valor da variável seja reatribuído. 


3. Acesso a Variáveis Externas
Enquanto o código externo não vê o que está dentro da função, a função pode ver o que está fora dela: 

Escopo Global: Uma função pode acessar e até modificar variáveis definidas no escopo global (fora de qualquer função).

Funções Aninhadas (Closures): Uma função criada dentro de outra pode acessar as variáveis da função "pai". 

Como "tirar" um valor de dentro da função?
Para usar um valor gerado dentro de uma função em outro lugar, você deve usar a palavra-chave return. Isso envia o valor de volta para quem chamou a função.
*/
let count = 10;

function add(){
    let count = 2;
    count ++;
}

add()
add()

console.log(count)

let global = "Sou global"; // Visível em qualquer lugar

function minhaFuncao() {
    let local = "Sou local"; // Só existe aqui dentro
    console.log(global);     // Funciona: acessa a externa
    console.log(local);      // Funciona: acessa a interna
}

minhaFuncao();
//console.log(local); // Erro: 'local' não está definida fora da função




/*
Trabalhar com funções dentro de funções (também conhecidas como funções aninhadas ou nested functions) é um dos pilares mais poderosos do JavaScript. Isso abre portas para conceitos como Escopo, Closures e Encapsulamento.

Uma função interna é visível apenas dentro da função que a contém. Ela pode acessar as variáveis da função "pai", mas o contrário não é verdade.

Por que usar funções aninhadas?
Organização: Se uma lógica só faz sentido dentro de uma função específica, não há motivo para deixá-la "solta" no código global.

Encapsulamento (Privacidade): Você esconde detalhes de implementação. Quem chama a função principal não tem acesso direto às funções internas.

Closures (Fechamentos): Este é o "superpoder". Uma função interna lembra do ambiente onde foi criada, mesmo depois que a função pai já terminou de executar.

O conceito de Closure
Quando a função pai retorna a função interna, a interna leva consigo uma "mochila" com as variáveis do pai.
*/

function criarContador() {
    let contador = 0; // Variável privada

    return function() {
        contador++;
        return contador;
    };
}

const meuContador = criarContador();
console.log(meuContador()); // 1
console.log(meuContador()); // 2
/*
No exemplo acima, não há como alterar a variável contador diretamente de fora. Ela está protegida pela função.

Escopo: Quem vê o quê?
O JavaScript utiliza o Lexical Scoping (Escopo Léxico). Isso significa que a resolução de variáveis segue uma hierarquia:

Escopo Local: Variáveis dentro da própria função interna.

Escopo Externo: Variáveis da função que a envolve.

Escopo Global: Variáveis definidas fora de tudo.


*/

function addSquares(a, b) {
    /* function square(x) {
        return x * x;
    } */

    const square = (x) => x * x

    let sqrA = square(a);
    let sqrB = square(b);
    return sqrA + sqrB
}

console.log(addSquares(2, 4))