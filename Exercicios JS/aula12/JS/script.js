/*
Qual das seguintes opções descreve o uso da propriedade outerHTML?
Permite alterar ou acessar o conteúdo interno incluindo o próprio elemento HTML.

javascript createElement

Odocument.createElement() método em JavaScriptCria dinamicamente um elemento HTML específico na memória.

Implementação passo a passo
A criação de um elemento requer três fases padrão: criá-lo, configurar suas propriedades e inseri-lo no Modelo de Objeto de Documento (DOM).

1. Criar o elemento
Isso inicializa o elemento HTML na memória do navegador, mas ainda não o exibe.

const myPara = document.createElement('p');

2. Configurar propriedades e atributosVocê pode adicionar conteúdo de texto, classes, IDs, estilos ou ouvintes de eventos diretamente ao objeto.

// Add text content
myPara.textContent = 'This is a dynamically created paragraph!';

// Add classes and IDs
myPara.className = 'primary-text alert';
myPara.id = 'unique-paragraph-id';

// Add inline styles
myPara.style.color = 'blue';
myPara.style.fontWeight = 'bold';

3. Injete-o no DOM.Para tornar o elemento visível na sua página web, você deve adicioná-lo a um elemento pai já existente.


// Target an existing element (e.g., <div id="container">)
const container = document.getElementById('container');

// Append the new paragraph inside the container
container.appendChild(myPara);


Métodos Alternativos de Colocação
Embora appendChild()o método `position: fixed` coloque o novo elemento no final do contêiner pai, você pode usar outros métodos para um posicionamento preciso:

prepend(): Insere o novo elemento logo no início do elemento pai.

before()Insere o elemento imediatamente antes de um nó de destino de referência.

after()Insere o elemento imediatamente após um nó de destino de referência.

Exemplo prático completo
Este bloco de código demonstra como construir e inserir um botão clicável funcional em uma página:
*/
// 1. Crie um elemento de botão
const actionBtn = document.createElement('button');

// 2. Configurar o botão
actionBtn.textContent = 'Click Me!';
actionBtn.id = 'submit-action';
actionBtn.className = 'btn btn-success';

// 3. Anexe um ouvinte de eventos interativo
actionBtn.addEventListener('click', () => {
  alert('Button clicked successfully!');
});

// 4. Renderize-o diretamente no corpo da página web.
document.body.appendChild(actionBtn);

/*
Melhores práticas
Evite erros de concatenação de strings : Use métodos explícitos como element.setAttribute('attr', 'value')ou reatribuições diretas de propriedades ( element.id = 'val') em vez de construção manual de texto HTML.

Limpe os listeners : Se você planeja destruir ou substituir elementos dinâmicos posteriormente, continue rastreando as referências para evitar vazamentos inesperados de memória do navegador. */
/*---------------------------------------------------------------

javascript append

Os métodos append() e appendChild() são utilizados no JavaScript para inserir novos elementos (nós) dentro de um elemento pai no DOM. A principal diferença é que o append() é mais moderno e flexível, permitindo adicionar vários elementos e até textos simples, enquanto o appendChild() aceita exclusivamente objetos do tipo "nó" (Nodes).

Característica
-> append()
1.Nós (Nodes) e textos simples (Strings).
2.Sim, você pode passar vários itens separados por vírgula.
3.Não retorna nenhum valor.
4.Mais recente (requer polyfill em navegadores muito antigos).

-> appendChild()
1.Apenas objetos do tipo nó (como createElement).
2.Não, aceita apenas um único nó por vez.
3.Retorna o próprio nó que foi adicionado.
4.Método clássico, suportado por absolutamente todos os navegadores.
*/

function info(){
    const analise = document.querySelector('#listapecas')
    const ul = listapecas.querySelector('ul')

    let newli = document.createElement("li")
    newli.innerHTML = "Cooler Deepcool Ak400"

    ul.prepend(newli)

    //ul.innerHTML += "<li>Cooler Deepcool Ak400</li>"
}

function trocar() {
    const upgradepv = document.querySelector('#pecas')
    
    upgradepv.children[4].innerHTML = "Placa de Vídeo <strong>Asus TUF-RTX 5070 TI 16G </strong>"
    upgradepv.children[4].append("(Alterado)")

    console.log(pecas.outerHTML)
}

function cpuup(){
    const cpunova = document.getElementById('ryzen7')
    cpunova.innerText = "Processador Ryzen 7 5700X (Melhorado!)"

    console.log(cpunova)
}




let pente = 1

function mRam(){

    const memoriRam = listapecas.querySelector('ul')  
    let newpecas = document.createElement('li')
    
    newpecas.id = 'rampentes'

    const upram = document.getElementById('melhorRam')
    upram.innerText = 'Colocar mais um pente de memoria!'
    
    if(pente <= 4){
        newpecas.innerHTML = `Memoria RAM DDR4, ${pente} pente`
        pente ++
        memoriRam.append(newpecas)
    } else {
        alert('A placa mãe suporta só 4 pentes!')
    }

    console.log(newpecas)
}