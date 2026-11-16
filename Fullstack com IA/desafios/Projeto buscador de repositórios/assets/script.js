const formularioBusca = document.querySelector("#formulario-busca");
const entradaBusca = document.querySelector("#entrada-busca");
const botaoBusca = formularioBusca.querySelector("button");
const mensagemStatus = document.querySelector("#mensagem-status");
const contagemResultados = document.querySelector("#contagem-resultados");
const recipienteResultados = document.querySelector("#resultados");

formularioBusca.addEventListener("submit", buscarRepositorios);

async function buscarRepositorios(evento) {
    evento.preventDefault();

    const termo = entradaBusca.value.trim();
    if (!termo) {
        entradaBusca.focus();
        return;
    }

    definirStatus("Buscando repositórios...");
    contagemResultados.textContent = "";
    recipienteResultados.replaceChildren();
    botaoBusca.disabled = true;

    try {
        const endereco = new URL("https://api.github.com/search/repositories");
        endereco.search = new URLSearchParams({
            q: termo,
            sort: "stars",
            per_page: "10"
        });

        const resposta = await fetch(endereco);
        if (!resposta.ok) {
            throw new Error(`A busca falhou com status ${resposta.status}.`);
        }

        const dados = await resposta.json();
        if (dados.items.length === 0) {
            definirStatus("Nenhum repositório encontrado. Tente buscar por outro termo.");
            return;
        }

        contagemResultados.textContent = `${dados.items.length} resultado${dados.items.length === 1 ? "" : "s"}`;
        recipienteResultados.append(...dados.items.map(criarCartaoRepositorio));
        definirStatus("");
    } catch (erro) {
        console.error("Erro ao buscar repositórios:", erro);
        definirStatus("Não foi possível concluir a busca. Verifique sua conexão e tente novamente.");
    } finally {
        botaoBusca.disabled = false;
    }
}

function criarCartaoRepositorio(repositorio) {
    const cartao = document.createElement("article");
    cartao.className = "cartao-repositorio";

    const avatar = document.createElement("img");
    avatar.className = "avatar-proprietario";
    avatar.src = repositorio.owner.avatar_url;
    avatar.alt = `Foto de ${repositorio.owner.login}`;
    avatar.loading = "lazy";

    const conteudo = document.createElement("div");
    conteudo.className = "conteudo-repositorio";

    const proprietario = document.createElement("p");
    proprietario.className = "nome-proprietario";
    proprietario.textContent = repositorio.owner.login;

    const link = document.createElement("a");
    link.className = "link-repositorio";
    link.href = repositorio.html_url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = repositorio.full_name;

    const descricao = document.createElement("p");
    descricao.className = "descricao-repositorio";
    descricao.textContent = repositorio.description || "";

    const metadados = document.createElement("div");
    metadados.className = "metadados-repositorio";

    if (repositorio.language) {
        const linguagem = document.createElement("span");
        const pontoLinguagem = document.createElement("span");
        pontoLinguagem.className = "ponto-linguagem";
        pontoLinguagem.setAttribute("aria-hidden", "true");
        linguagem.append(pontoLinguagem, document.createTextNode(repositorio.language));
        metadados.append(linguagem);
    }

    const estrelas = document.createElement("span");
    estrelas.textContent = `★ ${repositorio.stargazers_count.toLocaleString("pt-BR")} estrelas`;
    metadados.append(estrelas);

    const acao = document.createElement("a");
    acao.className = "acao-repositorio";
    acao.href = repositorio.html_url;
    acao.target = "_blank";
    acao.rel = "noopener noreferrer";
    acao.textContent = "Ver repositório";

    conteudo.append(proprietario, link, descricao, metadados, acao);
    cartao.append(avatar, conteudo);
    return cartao;
}

function definirStatus(mensagem) {
    mensagemStatus.textContent = mensagem;
}
