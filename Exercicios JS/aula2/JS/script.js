/* 
No JavaScript, o termo "concatenar" refere-se à união de dois ou mais itens para formar um novo. Isso é aplicado principalmente a Strings (textos) e Arrays (listas).

String e Template String: Utiliza crases (`) e a sintaxe ${}. É a forma mais moderna e legível, facilitando a inclusão de variáveis e quebras de linha. 
*/

let nome = "Rafael"
let sobrenome = "Dorcino"

//Operador de Adição (+): A maneira mais clássica e direta de somar strings.
//let nomecompleto = nome + ' ' + sobrenome --> metodo antigo

let nomecompleto = `${nome} ${sobrenome}` // metodo moderno

console.log(nomecompleto)

let idade = 23
let idadestring = `${idade} anos`

console.log(idadestring)

let valor = 100
let valordesconto = `Valar total com desconto R$: ${valor - 20} `

console.log("Custo total R$:", valor)
console.log(valordesconto)