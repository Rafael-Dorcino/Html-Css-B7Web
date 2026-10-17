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

document.querySelector('button').addEventListener('click', () => exibirAviso('Conteúdo enviado com sucesso!'))