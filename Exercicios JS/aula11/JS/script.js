/*
O DOM (Document Object Model) é uma interface que transforma o seu código HTML em uma estrutura de objetos que o JavaScript consegue entender e modificar. Quando o navegador carrega um site, ele cria essa "árvore de objetos" (DOM Tree), onde cada tag, texto ou atributo do seu HTML se torna um "nó" que você pode manipular em tempo real.

Principais Formas de Manipulação
Para interagir com a página, você geralmente segue três passos: selecionar o elemento, alterar seu conteúdo/estilo e reagir a eventos.

Seleção de Elementos: Use métodos como o document.getElementById() para buscar pelo ID ou o document.querySelector() para usar seletores CSS.

Alteração de Conteúdo: Propriedades como innerText ou innerHTML permitem mudar o texto ou o código dentro de uma tag.

Estilização: Você pode acessar o estilo diretamente via element.style.background = 'red' para criar efeitos dinâmicos sem recarregar a página.

Eventos: O método addEventListener() "escuta" ações do usuário, como cliques ou movimentos do mouse, e executa uma função em resposta.

Estrutura Hierárquica
Tudo começa no objeto global window, que representa a janela do navegador. Dentro dele, o objeto document é o ponto de entrada principal para toda a estrutura do seu site.

1- Raiz: document
2- Elemento Pai: <html>Elementos 
3- Filhos: <head> (metadados) e <body> (conteúdo visível).

Essa conexão é o que permite criar experiências modernas onde elementos aparecem, mudam de cor ou validam dados instantaneamente conforme você interage com eles.
*/


/*
O evento onclick em JavaScript serve para executar um bloco de código ou uma função quando o usuário clica em um elemento HTML. Ele é uma das formas mais comuns de criar interatividade em páginas web.

Existem três maneiras principais de implementar essa funcionalidade. Veja os exemplos práticos abaixo:

1. Diretamente no HTML (Atributo em linha)
Você define o atributo onclick diretamente na tag HTML e passa o código ou a função que deseja executar.
*/

let num = 0

function clicou() {
    num = num + 1
    
    console.log(`Clicou no botão ${num} vezes!`)
}

/*
2. Propriedade do Elemento via JavaScript
Esta abordagem é mais limpa porque separa a estrutura HTML da lógica do JavaScript. Você seleciona o elemento no script e atribui uma função à propriedade .onclick.
*/
// Seleciona o elemento pelo ID
const botao = document.getElementById('meuBotao');

// Atribui a função ao evento onclick
botao.onclick = function() {
    console.log('O evento foi disparado pelo JavaScript!');
};


/*
3. Usando addEventListener (Recomendado)
Para projetos modernos e escaláveis, o método addEventListener('click', ...) é a melhor prática. Ele permite adicionar múltiplos ouvintes ao mesmo evento sem sobrescrever funções anteriores.

O addEventListener() métodoAtribui um manipulador de eventos a um elemento específico, como um botão ou o próprio documento, sem sobrescrever os manipuladores de eventos existentes.É a maneira recomendada de gerenciar a interatividade no JavaScript moderno, pois permite vários ouvintes para o mesmo evento e oferece controle preciso sobre como os eventos se propagam pelo DOM .

Sintaxe
A sintaxe básica para adicionar um ouvinte de eventos é:target.addEventListener(type, listener, options);

alvo : O elemento DOM que você deseja monitorar (por exemplo, document.getElementById("btn")).

tipo : Uma string representando o nome do evento, como "click", "keydown", ou "submit".

ouvinte : A função (callback) que é executada quando o evento ocorre.

opções / useCapture (Opcional) : Um valor booleano ou objeto que especifica configurações avançadas, como once: trueou se deve usar a fase de captura em vez de propagação.

Casos de uso comuns
Cliques em botões : Executar código quando um usuário clica em uma parte específica da página.

Envio de formulário : Validação dos dados antes do envio do formulário para o servidor.

Entradas de teclado : Responder a teclas específicas, como a tecla "Enter".

Redimensionamento da janela : Ajusta os layouts dinamicamente quando a janela do navegador muda de tamanho.



Principais benefícios
Múltiplos manipuladores : Ao contrário de métodos mais antigos (como onclick), você pode adicionar várias funções diferentes ao mesmo evento em um único elemento.

Remoção dinâmica : Você pode facilmente parar de ouvir eventos usando o método removeEventListener() .

Separação de responsabilidades : mantém seu HTML limpo, movendo toda a lógica interativa para seus arquivos JavaScript.

O Objeto de Evento : A função ouvinte recebe automaticamente um event objeto contendo detalhes úteis, como a posição do mouse ou qual tecla foi pressionada.
*/

let escute = 0

function escuta() {
    escute = escute + 1
    console.log(`O escutador escutou ${escute} eventos!`)
}

let escutando = document.querySelector('.escutador');

// Adiciona o ouvinte de clique de forma limpa
escutando.addEventListener("click", () => {
    escuta();
})