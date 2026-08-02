console.log("Está funcionando! Eba!");
console.error("Código com erro de continuidade!")
console.warn("Atenção na lógica!")

let nomecliente = null
console.log(nomecliente)
nomecliente = "Osmarina"
console.log(nomecliente)
console.log(typeof nomecliente)


function limparEmail(email){
    let emailLimpo = email.trim().toLowerCase()
    return emailLimpo
}

let email = '     SUPORTE@B7WEB.COM.BR     '

console.log(email)
console.log(limparEmail(email))



let idade = parseInt("34")
console.log(idade)
console.log(typeof idade)

let altura = parseFloat("1.89")
console.log(altura)
console.log(typeof altura)

let numero = 1.7
let arredondado = Math.ceil(numero)
console.log(arredondado)

let aleatorio = Math.floor(Math.random() * 10)
console.log(aleatorio)




function calcularDesconto(precoTexto, percentual){
    let num = parseFloat(precoTexto)
    let desconto = (percentual / 100) * num
    let final = num - desconto
    return final.toFixed(2)
}

console.log(calcularDesconto("215", 10))



//Aula sobre loops e buscas em arrays com forEach, includes e find
let listaBolo = ['farinha', 'ovos', 'manteiga', 'chocolate', 'fermento', 'açucar', 'leite', 'óleo', 'sal']

for (let i = 0; i < listaBolo.length; i++) {
    console.log(listaBolo[i])
}

console.log('----------------------')

function auxiliar(item){
    console.log(item)
}
listaBolo.forEach(auxiliar)

console.log('----------------------')

listaBolo.forEach(function (item){
    console.log(item)
})

console.log('----------------------')

listaBolo.forEach((item) => {
    console.log(item)
})


console.log(listaBolo.includes('ovos'))
console.log(listaBolo.includes('agua'))

let chocolate = listaBolo.find((item) => {
    if(item == 'chocolate') {
        return true
    } else {
        return false
    }
})

console.log(chocolate)

console.log('----------------------')
//Aula ensina funções map e filter em arrays JavaScript
let listaBolo2 = listaBolo.map((item) =>{
    return item.toUpperCase()
})

console.log(listaBolo2)

listaBolo2.forEach((item) => {
    console.log(item)
})

console.log('----------------------')

let listaBolo3 = listaBolo.filter((item) =>{

    return item.length >= 4
    
    /* if(item.length >= 4){
        return true
    } else {
        return false
    }*/
})

console.log(listaBolo3)

listaBolo3 = listaBolo.filter(item => item.length >= 4)
listaBolo2 = listaBolo3.map(item => item.toUpperCase())

console.log(listaBolo3)
console.log(listaBolo2)

//Introdução ao DOM e seleção de elementos com querySelector
let titulo = document.querySelector('h1')
titulo.style = ('color: blue; display: flex; justify-content: center;')



/*
inputEmail.getAt
undefined
inputEmail.getAttribute('type')
'email'
inputEmail.getAttribute('name')
'email'
inputEmail.getAttribute('id')
'email'
inputEmail.setAttribute('type', 'number')
undefined
inputEmail.getAttribute('type')
*/
const input = document.querySelector('#email')
const botao = document.querySelector('button')
const label = document.querySelector('label')

function trocar_contato() {
    
    if(input.type === 'email'){
        input.type = 'tel'
        input.placeholder = "Telefone"
        label.innerText = 'Digite seu Telefone:'
        botao.innerText = 'Mudar para E-mail'
    } else {
        input.type = 'email'
        input.placeholder= "E-mail"
        label.innerText = 'Digite seu E-mail:'
        botao.innerText = 'Mudar para Telefone'
        
    }
}

let divBolo = document.querySelector('.bolo')
let listaHtml = document.getElementById('minhaLista')
let textBoss = document.createElement('h3')

function listaEngre(){
    listaHtml.innerHTML = '';
    listaBolo.forEach((item) => {
        const itemLi = document.createElement('li')
        itemLi.textContent = item
        listaHtml.appendChild(itemLi);
    })
    textBoss.innerText = "Mão na MASSA! Boa sorte."
    divBolo.appendChild(textBoss)
}

let cobertura = [
    {ing:'Leite', qtd: 50},
    {ing:'Chocolate', qtd: 100 },
    {ing:'Manteiga', qtd: 25},
    {ing:'Açúcar', qtd: 75}
]


const listaCobertura = document.querySelector('#listaCobertura')
const coberturaBotao = document.getElementById('cobertura')

coberturaBotao.addEventListener('click', function() {
    listaCobertura.innerHTML = '';
    cobertura.forEach((cobert) => {
        const cobLi = document.createElement('li')
        cobLi.innerHTML = `<strong>${cobert.ing}</strong> - ${cobert.qtd}ml`
        listaCobertura.appendChild(cobLi)
    })
})

//Explicação do conceito de callback com exemplo no forEach
//CALLBACK =  Te ligo de volta ou chamar de volta

/*
Um callback é uma função passada como argumento para outra função, que será executada mais tarde após a conclusão de uma tarefa. Os pontos principais são: execução posterior, assincronismo e reutilização de código.
O que é um Callback?
Função argumento: Você envia uma função dentro de outra função.
Espera o evento: O código roda quando o processo principal termina.
Muito usado em: Requisições de rede, cliques de botão e leitura de arquivos.

Como funciona na prática
O chamador: A função principal faz o trabalho pesado.
O chamado: O callback avisa quando o trabalho acaba.
Ordem: Garante que algo só aconteça depois que outra coisa estiver pronta.
*/

let form = document.querySelector('form')
let forinput = document.querySelector('#nome')
let enviar = document.querySelector('#enviar')
let erro = document.querySelector('#erro')

function clearInput(){
    forinput.value = ''
    forinput.focus()
    forinput.classList.remove('erro')
    erro.innerText = ''
}

function sendMessage(text){
    let textSanitized = text.trim()
    if(textSanitized.length > 2){
        console.log(textSanitized)
        clearInput()
    } else {
        forinput.classList.add('erro')
        erro.innerText = 'Digitou errado, camarada!'
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault()
    sendMessage(forinput.value)
})