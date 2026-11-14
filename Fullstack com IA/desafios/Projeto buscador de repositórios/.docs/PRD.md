# PRD — Buscador de repositórios do GitHub

## Visão geral

Criar uma página que permita pesquisar repositórios públicos do GitHub por palavra-chave e consultar rapidamente suas principais informações.

## Funcionalidades

### Busca

- O usuário informa um termo no campo de busca e inicia a pesquisa pressionando **Enter**.
- A aplicação exibe até 10 repositórios correspondentes, ordenados pelo número de estrelas.

### Resultados

Cada resultado apresenta:

- Nome e foto do autor.
- Nome do repositório.
- Descrição, quando disponível.
- Linguagem principal, quando disponível.
- Número de estrelas.
- Link direto para o repositório no GitHub.

### Estados da interface

- **Carregamento:** indicar que a busca está em andamento.
- **Sem resultados:** informar que nenhum repositório foi encontrado.
- **Erro:** mostrar uma mensagem amigável caso a busca falhe.

## Decisões técnicas

- Consultar a API de busca de repositórios do GitHub:
  `https://api.github.com/search/repositories?q={PALAVRA-CHAVE}&sort=stars&per_page=10`
- Substituir `{PALAVRA-CHAVE}` pelo termo informado pelo usuário.
- Fazer a requisição com `fetch`, usando `async/await` dentro de um bloco `try/catch`.
- Verificar o status da resposta HTTP antes de processar os resultados.
- Definir todos os eventos no JavaScript; não usar manipuladores de eventos diretamente no HTML.

## Diretrizes visuais

- Centralizar o conteúdo da página, limitando sua largura a 700 px.
- Usar um fundo mais escuro que os cards.
- Exibir o campo de busca e os resultados em cards com bordas arredondadas.
- Usar a paleta: `#0B0B10`, `#23102F`, `#4A1F6F`, `#7B3FA6` e `#E7D8FF`.
