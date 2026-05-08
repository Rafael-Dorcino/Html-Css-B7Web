let fruta = [
    'maça',
    'uva',
    'melão',
    'melancia',
    'laranja',
    'morango',
    'maracuja',
    'banana',
    'acerola',
    'pêssego',
    'kiwi'
]

fruta[3] = 'ameixa'

fruta.length

fruta.push('goiaba')

if (fruta.includes('banana', 'maça', 'mamão')){
    console.log('Tem as frutas pra fazer vitamina.')
} else {
    console.log('Não tem as frutas pra fazer a vitamina!')
}

fruta.sort()// colocar em ordem alfabetica
console.log(fruta)

fruta.reverse()// Inverte a ordem do array
console.log(fruta)

console.log(fruta.length)

console.log(fruta.join(',  '))



let cars = [
    {marca: 'mercedes', ano: 2025},
    {marca: 'vw', ano: 2020},
    {marca: 'chevrolet', ano: 2022},
    {marca: 'ford', ano: 1970}
]

cars.sort((a, b) => a.ano - b.ano)
/*if(a.ano > b.ano){
        return 1
    } else if(a.ano < b.ano) {
        return -1
    } else {
        return 0
    }*/

console.log(cars)


