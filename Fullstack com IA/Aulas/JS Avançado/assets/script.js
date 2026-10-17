/*
O método setTimeout() em JavaScript é usado para executar uma função ou trecho de código após um período de tempo específico (definido em milissegundos). Ao contrário do setInterval(), que repete o código continuamente, o setTimeout() roda apenas uma vez.
*/

function exibirAviso(text) {
    let avisoElement = document.querySelector('.aviso')
    avisoElement.innerText = text
    //avisoElement.style.display = 'block'
    avisoElement.classList.add('mostrar')

    setTimeout(() => {
        //avisoElement.style.display = 'none'
        avisoElement.classList.remove('mostrar')
        avisoElement.innerText = ''
    }, 3000)
}

document.querySelector('.clique-aviso').addEventListener('click', () => exibirAviso('Conteúdo enviado com sucesso!'))

//--------------------------------------------------------------

/*
O método setInterval() em JavaScript é usado para executar uma função repetidamente em intervalos fixos de tempo. O tempo é definido em milissegundos (1 segundo = 1000 milissegundos).
*/


let botao = document.querySelector('.reenvio')

botao.addEventListener('click', () => {
    let numero = 10;
    botao.setAttribute('disabled', 'disabled')

    function timercallback(){
        if (numero >= 0){
            console.log(numero)
            botao.innerText = `Reenviar código em ${numero}`
            numero--;
        } else {
            alert('Código enviado no seu E-mail!')
            botao.innerText = `Reenviar o código!`
            clearInterval(time)
            botao.removeAttribute('disabled')
        }
    }

    timercallback()
    let time = setInterval(timercallback, 1000); 
} )

