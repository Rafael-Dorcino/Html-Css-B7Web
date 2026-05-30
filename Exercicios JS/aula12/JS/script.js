/*
Qual das seguintes opções descreve o uso da propriedade outerHTML?
Permite alterar ou acessar o conteúdo interno incluindo o próprio elemento HTML.


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

    ul.appendChild(newli)

    //ul.innerHTML += "<li>Cooler Deepcool Ak400</li>"
}

function trocar() {
    const upgradepv = document.querySelector('#pecas')
    
    upgradepv.children[4].innerHTML = "<li>Placa de Vídeo <strong>Asus TUF-RTX 5070 TI 16G </strong></li>"
    upgradepv.children[4].append("Alterado")
    console.log(pecas.outerHTML)

    
}