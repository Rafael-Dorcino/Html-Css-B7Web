/*
As Arrow Functions (ou funções de seta) são uma forma compacta e moderna de escrever funções em JavaScript, introduzidas no ES6 (2015). Elas são amplamente utilizadas por tornarem o código mais limpo e por possuírem comportamentos específicos de escopo que facilitam o desenvolvimento. 


function somar(x, y) {
    return x + y;
}

const somar = (x, y) => {
    return x + y;
}

Retorno Implícito: Se a função tiver apenas uma linha e não usar chaves { }, ela retorna o resultado dessa expressão automaticamente, sem precisar da palavra-chave return.

const somar = (x, y) => x + y

*/

const somar = (x, y) => x + y


console.log(somar(10, 5))

// Essas são todas as maneira de usar uma Arrow para escrever funções uma versão usando function e quatro variações usando Arrow (vai depender do problema pra usar cada variação do Arrow)

function sobrenome(sob) {
    return 'Rafael ' + sob;
}


const sobrenome = sob => 'Rafael ' + sob;

const sobrenome = (sob) => 'Rafael ' + sob;

const sobrenome = (sob) => {
    return 'Rafael ' + sob;
}

const sobrenome = (sob) => {
    let nomeCompleto = 'Rafael ' + sob;
    return nomeCompleto
}

console.log(sobrenome('Dorcino'))