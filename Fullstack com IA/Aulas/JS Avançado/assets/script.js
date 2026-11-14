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



clearInterval javascript

O método clearInterval() em JavaScript serve para parar a execução de um temporizador repetitivo que foi previamente criado com a função setInterval().
Quando você inicia um intervalo, o navegador (ou ambiente de execução) gera um ID numérico exclusivo para aquele temporizador. Para interromper a repetição, você deve passar esse ID como argumento dentro do clearInterval().
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


/*
Promises: o que são e seus três estados

Uma Promise (promessa) em JavaScript é um objeto que representa o resultado futuro de uma operação assíncrona — como uma requisição a uma API ou a leitura de um arquivo. Em vez de passar funções de retorno (callbacks) aninhadas, você lida com o sucesso ou a falha de forma mais limpa.

Estados de uma Promise
Uma Promise pode estar em um destes três estados:

pending (pendente): Estado inicial; a operação ainda não terminou.

fulfilled (cumprida/resolvida): A operação terminou com sucesso.

rejected (rejeitada): A operação falhou.
*/


const minhaPromise = new Promise((resolve, reject) => {
  let sucesso = true;

  if (sucesso) {
    resolve("Operação concluída com sucesso!");
  } else {
    reject("Ocorreu um erro na operação.");
  }
});

console.log(minhaPromise)


/*
Consumindo uma Promise
Promise em JavaScript significa lidar com o resultado de uma operação assíncrona (como uma requisição a uma API ou a leitura de um arquivo) quando ela for concluída.

Para lidar com o resultado ou o erro de uma Promise, usamos os métodos .then(), .catch() e .finally():

.then(): Executado quando a Promise é cumprida (fulfilled).

.catch(): Executado quando a Promise é rejeitada (rejected).

.finally(): Executado sempre, independentemente de ter dado certo ou errado (ótimo para limpeza de dados ou fechar loadings).
*/


function darCerto() {
    let promessa = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Deu certo!")
        }, 10000);
    })
    return promessa
}

darCerto()
    .then((resultado) => {
        console.log("Sucesso:", resultado); // "Operação concluída com sucesso!"
    })
    .catch((erro) => {
        console.error("Ocorreu um erro:", erro); // Captura qualquer erro do fluxo
    })
    .finally(() => {
        console.log("Operação finalizada (com sucesso ou erro).");
    });


// https://api.github.com/users/Rafael-Dorcino

let apiGit = document.querySelector('.apiGit')

/*

function buscarUsuario(username){
    fetch(`https://api.github.com/users/${username}`)
    .then((Response) => {
        if(Response.status === 200){
            return Response.json()
        }
    })
    .then((data)=> {
        if(data.name){
            document.querySelector('#name').innerText = data.name
            document.querySelector('#imagem').setAttribute('src', data.avatar_url)
            document.querySelector('#imagem').setAttribute('alt', data.name)
        }
    })
    .catch((reason) => {
        alert('Usuário não encontrado!')
    })
}

apiGit.addEventListener('click', () => {
    buscarUsuario('Rafael-Dorcino')
})

*/


/*
-> async/await

O async/await é uma sintaxe do JavaScript (introduzida no ES2017) construída em cima das Promises. Ele serve para escrever código assíncrono de um jeito que parece síncrono (lido de cima para baixo), eliminando o encadeamento excessivo de .then() e .catch() (conhecido como callback hell ou pirâmide da desgraça).

Como funciona na prática

1. async (na declaração da função)

- Ao colocar async antes de uma função, você avisa ao JavaScript que ela sempre retornará uma Promise.

- • Se você retornar um valor direto dentro dela, o JS o envolve automaticamente em uma Promise resolvida.

2. await (dentro da função)

- A palavra-chave await só pode ser usada dentro de funções marcadas com async.

- Ela pausa a execução daquela função específica até que a Promise seja resolvida (ou rejeitada), devolvendo o valor final como se fosse uma atribuição normal de variável.

=> Importante: Ela pausa apenas a função assíncrona, sem travar a thread principal ou congelar a interface do usuário.
*/

let apiErro = document.querySelector('.apiErro')
let nameField = document.querySelector('#name')
let imgField = document.querySelector('#imagem')

async function buscarUsuario(username){
    apiGit.innerText = 'Carregando...'
    apiGit.setAttribute('disablad', 'disabled')
    apiErro.innerText = ''
    apiErro.style.display = 'none'
    nameField.innerText = ''
    imgField.removeAttribute('src')
    imgField.removeAttribute('alt')

    try {
        let response = await fetch(`https://api.github.com/users/${username}`)
        if (response.status === 200){
            let data = await response.json()
            if(data.name){
                nameField.innerText = data.name
                imgField.setAttribute('src', data.avatar_url)
                nameField.setAttribute('alt', data.name)
            }
        } else if (response.status === 404) {
            apiErro.innerText = 'Usuário não encontrado!'
            apiErro.style.display = 'block'
        } else {
            throw new Error()
        }
    } catch (error) {
        console.log('Usuário não encontrado!', error)
        apiErro.innerText = 'Deu erro na requisição! Tente novmente mais tarde.'
        apiErro.style.display = 'block'
    }
    apiGit.removeAttribute('disabled')
    apiGit.innerText = 'Informações do usuário do GitHub'
}

apiGit.addEventListener('click', () => {
    buscarUsuario('Rafael-Dorcino')
})

/*
A estrutura try...catch em JavaScript é usada para capturar e tratar erros em tempo de execução, impedindo que o programa trave abruptamente quando algo dá errado.

Você envolve o código que pode falhar dentro do bloco try e define como o programa deve reagir no bloco catch.

Como cada bloco funciona

- try. Contém as instruções que você deseja testar e executar normalmente. Se um erro ocorrer em qualquer linha aqui dentro, a execução para imediatamente e pula para o catch.

- catch (erro). Recebe um objeto contendo detalhes sobre a falha (como erro.name e erro.message) para que você possa exibir um aviso, registrar um log ou executar um plano B.

- finally. Bloco opcional que roda após o try (e o catch, se houver erro), independente do resultado. É muito útil para ações de limpeza, como fechar conexões ou esconder um ícone de carregamento (loading).
*/