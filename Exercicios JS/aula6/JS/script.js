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
console.log(local); // Erro: 'local' não está definida fora da função