/*
Qual das seguintes opções descreve o uso da propriedade outerHTML?
Permite alterar ou acessar o conteúdo interno incluindo o próprio elemento HTML.

*/

function info(){
    const analise = document.querySelector('#listapecas')
    const ul = listapecas.querySelector('ul')

    ul.innerHTML += "<li>Cooler Deepcool Ak400</li>"
}

function trocar() {
    const upgradepv = document.querySelector('#pecas')
    
    upgradepv.children[4].innerHTML = "<li>Placa de Vídeo <strong>Asus TUF-RTX 5070 TI 16G </strong></li>"



    console.log(pecas.outerHTML)
}