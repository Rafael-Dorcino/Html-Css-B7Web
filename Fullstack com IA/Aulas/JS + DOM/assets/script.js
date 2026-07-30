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