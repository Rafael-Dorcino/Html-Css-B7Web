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
document.getElementById()