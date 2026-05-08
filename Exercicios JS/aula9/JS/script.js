/*
Em JavaScript, os loops sãoEstruturas de controle fundamentais usadas para repetir um bloco de código várias vezes.São essenciais para automatizar tarefas repetitivas, como processar cada item em uma matriz ou executar um cálculo até que um resultado específico seja alcançado.

Loops comuns em JavaScript
Os loops mais frequentemente utilizados incluem:

forLoop : Ideal para executar um código um número específico de vezes.

    Sintaxe: for (initialização; condicional; incrementação) { ... } .
    Exemplo: for (let i = 0; i < 5; i++) { console.log(i); } .

while Loop : Executa enquanto uma condição específica for verdadeira. A condição é verificada antes da execução do bloco de código.

do...while Loop : Semelhante a while, mas executa o bloco de código pelo menos uma vez antes de verificar a condição.

for...of Loop : Introduzido no ES6, ele fornece uma maneira clara de iterar sobre os valores de objetos iteráveis, como arrays, strings, mapas e conjuntos.

for...in Loop : Usado para iterar sobre as chaves (propriedades enumeráveis) de um objeto. Geralmente, recomenda-se evitar o uso deste tipo de loop em arrays se a ordem dos elementos for importante.



Tabela de comparação

for-/-Número conhecido de iterações (ex.: contadores)-/-Antes da execução

while-/-O número de iterações é desconhecido.-/-Antes da execução

do...while-/-O código deve ser executado pelo menos uma vez.-/-Após a execução

for...of-/-Iterando pelos valores de um array/coleção-/-Início de cada item

for...in-/-Iterando pelas propriedades do objeto-/-Início de cada propriedade



*/

for(let n = 1; n <= 4; n++){
    console.log(n)
    console.log('Bom dia!')
    console.log('Boa tarde!')
    console.log('Boa noite!')
    console.log('Proximo dia ...')
}

let num = 2;

for (let t = 0; t <= 10; t++) {
    let res = num * t;
    console.log(`${num} x ${t} = ${res}`);
}

let cores = ['preto', 'branco', 'azul', 'vermelho']
cores.push('verde')

for(let c = 0; c < cores.length; c++){
    console.log(cores[c])
}

for (let i in cores) {
    cores[i] = cores[i].toUpperCase()
    console.log(cores[i])
}

for (let cor of cores){
    console.log(cor)
}

let pecas = [
    {nome: 'placa de video', marca: 'redeon rx5500xt 8gb', valor: 670.83},
    {nome: 'placa mãe', marca: 'tuf gaming b550m', valor: 790.67},
    {nome: 'processador', marca: 'Ryzen 5 5500', valor: 435.00 },
    {nome: 'memoria ram', marca: 'kingston 2x16gb', valor: 1017.55},
    {nome: 'fonte', marca: 'corsair cx750', valor: 339.96},
    {nome: 'cooler', marca: 'Deepcool ak400', valor: 163.87},
    {nome: 'monitor', marca: 'lg ultragear', valor: 583.43},
    {nome: 'ssd', marca: 'goldenfier 1t', valor: 238.12},
    {nome: 'mouse', marca: 'logitech g403 hero', valor: 169.99},
    {nome: 'adaptador', marca: 'bluetooth', valor: 18.90},
    {nome: 'ventoinha', marca: 'rise mode x3', valor: 31.58},
    {nome: 'teclado', marca: 'fortrek mecânico', valor: 277.02},
    {nome: 'filtro de linha', marca: 'iclamper', valor: 44.90},
    {nome: 'suporte de monitor', marca: 'elg f80n', valor: 159.90},
    {nome: 'cadeira', marca: 'escritorio ergonomica', valor: 584.90},
    {nome: 'mousepad', marca: 'preto', valor: 29.90},
]


for (let pc of pecas) {
    console.log(`Tipo de peça: ${pc.nome} ${pc.marca}, esta saindo no valor de R$:${pc.valor.toFixed(2)}.`)
}

/*
for(let h in pecas){
    pecas[h] = pecas[h].marca.toUpperCase()
    console.log(pecas[h])
}
*/

let val = 0

for(let v = 0; v < pecas.length; v++){
    val = val + pecas[v].valor
}

console.log(`O valor total gasto na compra do computador foi de R$:${val.toFixed(2)}`)



let numero = 0

while(numero <= 10){
    console.log(`O número da vez é ${numero}`)
    numero++
}