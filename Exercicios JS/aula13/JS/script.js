/* javascript attributes

Em JavaScript , os atributos referem-se aos valores iniciais definidos diretamente na marcação HTML, que você pode manipular usando métodos nativos do DOM.

Embora estejam intimamente relacionados às propriedades de objetos JavaScript, eles se comportam de maneira diferente, pois os atributos representam o estado inicial do HTML e são sempre strings, enquanto as propriedades representam o estado atual e em tempo real do nó DOM.

Métodos de atributos principais
Você pode ler, modificar ou remover atributos de elementos HTML usando quatro métodos fundamentais fornecidos pela API Web de Elementos da MDN :

-> getAttribute(name)Recupera o valor atual em formato de string de um atributo especificado. Retorna `null` nullse o atributo não existir.

-> setAttribute(name, value)Adiciona um novo atributo ou atualiza o valor de um atributo existente.

->removeAttribute(name)Remove completamente o atributo especificado do elemento HTML.

->hasAttribute(name)Retorna um valor booleano indicando se o elemento possui o atributo especificado.

*/


function clicou() {
    const input = document.querySelector('input')
    const botao = document.querySelector('.botao')

    if(input.getAttribute('type') === 'text'){
        input.setAttribute('type' , 'password')
        botao.innerText = 'Mostrar senha!'
    } else {
        input.setAttribute('type' , 'text')
        botao.innerText = 'Esconder senha!'
    }

    console.log(input.getAttribute('placeholder'))
}


/*
Para manipular estilos CSS usando JavaScript, você deve converter as propriedades que contêm hifens (-) para o padrão camelCase, pois o hífen é o operador de subtração no JS. Em vez de background-color, por exemplo, você usa backgroundColor.

Manipulação direta com a propriedade style
A maneira mais comum de aplicar estilos diretamente é acessar a propriedade .style do elemento selecionado.
*/

function acao() {
    const li = document.querySelector('li')

    li.style.backgroundColor = 'blue'
    li.style.fontSize = '20px'

    console.log(li)
}

/*
Aelement.classList propriedade em JavaScript é uma propriedade somente leitura que retorna uma coleção dinâmica ( DOMTokenList) dos atributos de classe CSS de um elemento HTML. Ela fornece uma maneira limpa e moderna de adicionar, remover ou alternar classes CSS dinamicamente, sem lidar com as manipulações de strings antigas e propensas a erros exigidas por element.className.

Métodos Essenciais
A página Element.classList da documentação da MDN Web destaca os principais métodos disponíveis para modificar ou verificar as classes dos seus elementos:

-> add(className1, className2, ...)— Adiciona uma ou mais classes especificadas ao elemento. Se uma classe já existir, ela será automaticamente ignorada.

-> remove(className1, className2, ...)— Remove uma ou mais classes especificadas do elemento. Se uma classe não existir, ela será ignorada com segurança, sem gerar erros.

-> toggle(className, forceBoolean)— Ativa ou desativa uma classe. Se a classe existir, ela será removida; se não existir, será adicionada. O segundo parâmetro opcional força a adição ( true) ou a remoção ( false).

-> contains(className)— Retorna um valor booleano (true trueou false false) indicando se o elemento possui a classe especificada.

-> replace(oldClass, newClass)— Substitui uma classe existente por uma classe completamente nova.

*/

function info(){
    const classelista = document.querySelector('p')
    if(classelista.classList.contains('importante')){
        classelista.classList.add('destaque')
        classelista.classList.remove('importante')
    } else {
        classelista.classList.add('importante')
        classelista.classList.remove('destaque')
    }
    
    classelista.classList.toggle('centro')
    
    console.log(classelista.classList)
}



/*
Eventos de teclado em JavaScript permitem capturar e responder à interação do usuário com o teclado (como pressionar, segurar ou soltar uma tecla). Os três principais eventos são keydown, keyup e keypress (obsoleto), sendo o keydown e o keyup os mais utilizados para construir formulários e jogos.

Principais Eventos

keydown: Disparado no momento em que uma tecla é pressionada. Ele continua disparando repetidamente se a tecla for mantida pressionada.

keyup: Disparado quando o usuário solta a tecla.
*/

function apertou(){
    console.log('Apertou!')
}

function segurou(){
    console.log('Segurou!')
}

function soltou(e){
    console.log('TECLA APERTADA: '+e.code)
    console.log('SHIFT? ' + e.shiftKey)
    console.log('--')
    //console.log(e.key)
    //console.log(e.code)
    //console.log('Soltou!')
}

const interacao = document.getElementById('eventos')

//console.log(interacao)
interacao.addEventListener('keyup', soltou)