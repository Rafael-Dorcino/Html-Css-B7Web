/*
Objetos em JavaScript

São estruturas de dados fundamentais que organizam informações em pares de chave: valor. Eles funcionam como contêineres para propriedades (dados) e métodos (funções), permitindo criar coleções complexas e flexíveis. Objetos podem ser criados via literais {}, construtores ou classes, sendo essenciais para a manipulação de dados na linguagem.



Fundamentos de Objetos JavaScript:

Estrutura: Compostos por pares chave-valor. As chaves são strings ou símbolos, e os valores podem ser qualquer tipo de dado (strings, números, arrays, outros objetos ou funções).

Criação: A forma mais comum é a sintaxe literal: const pessoa = { nome: "Ana", idade: 30 };.

Acesso: Pode ser feito via notação de ponto (pessoa.nome) ou colchetes (pessoa["nome"]).

Métodos: Funções armazenadas dentro de objetos, representando comportamentos.



Principais Maneiras de Criar Objetos:

Objeto Literal: const obj = { a: 1 };

Palavra-chave new Object(): const obj = new Object();

Funções Construtoras: function Pessoa(nome) { this.nome = nome; }.
A palavra-chave 'this' dentro de um método de um objeto em JavaScript, representa o próprio objeto onde o método está sendo definido.


Classes ES6: class Pessoa { constructor(nome) { this.nome = nome; } }



Manipulação de Objetos:

Adicionar/Alterar: carro.ano = 2022;.

Remover: delete carro.modelo;.

Comparação: Objetos são tipos de referência, portanto, dois objetos só são iguais se referirem ao mesmo local na memória.
*/

let personagem = {
    nome: 'Rafael' ,
    idade: 23 ,
    sexo: 'Masculino',

    pets : [
        'Mel' ,
        'Perola' ,
        'Sofia' ,
        'Patovisk',
    ],

    localizacao: {
    pais: 'Brasil',
    estado: 'Goias',
    cidade: 'Trindade'
    }
}

console.log(personagem)

console.log(personagem.nome)

console.log(`${personagem.nome} tem ${personagem.idade} anos.`)
console.log(`E ele mora no estado de ${personagem.localizacao.estado}`)
console.log(`Na casa do ${personagem.nome} tem ${personagem.pets.length} Pets, e a mais velha é a ${personagem.pets[0]}`)



let pessoa = {
    nome: 'Rafael',
    sobrenome: 'Dorcino',
    idade: 23,
    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}`
    }
}

// Funções normais definidas dentro de objetos podem ter acesso às propriedades do mesmo através de 'this'.

console.log(pessoa.nomeCompleto())