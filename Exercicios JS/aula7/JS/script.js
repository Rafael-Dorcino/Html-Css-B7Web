/* 
Um Array em JavaScript é um objeto global utilizado para armazenar coleções de elementos em uma única variável. Diferente de variáveis simples, ele permite guardar múltiplos valores (como strings, números ou objetos) que podem ser acessados através de um índice numérico. 

Criando e Acessando um Array
A maneira mais comum de criar um array é usando a sintaxe literal com colchetes [].

Criação: const frutas = ["Maçã", "Banana", "Laranja"];
Acesso: O primeiro item sempre começa no índice 0.
frutas[0] retorna "Maçã".
frutas[1] retorna "Banana". 
*/

let colors = ['blue', ' red', 'green', 'yelow']

console.log(colors[0])

let lista = [
    'Rafael', 'Andre', 
    [
        23, 24
    ]
];

console.log(lista[0])

console.log(lista[0], lista [2][0])

/*
Principais Métodos de Manipulação
O JavaScript oferece diversos métodos nativos para alterar ou iterar sobre os dados: 

push(): Adiciona um item ao final do array.

pop(): Remove o último item.

shift(): Remove o primeiro item.

unshift(): Adiciona um item no início.

length: Retorna a quantidade total de elementos no array. 

*/

let ingredientes = [
    'farinha',
    'manteiga',
    'ovo',
    'fermento',
    'óleo',
    'açúcar',
    'leite'
]

ingredientes.shift()

ingredientes.unshift('fuba')

console.log(ingredientes)

console.log(`Total de ingredientes: ${ingredientes.length}`)