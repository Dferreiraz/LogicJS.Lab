// Módulo de consumo das APIs Advice Slip (conselhos) e MyMemory (tradução).
// Requisições assíncronas com Fetch API, async/await e try/catch.

const conselho = document.getElementById("conselho");
const btnRandom = document.getElementById("btn-random-advice");
const numberInput = document.getElementById("number");
const formAdvice = document.getElementById("form-advice");
const btnTraduzir = document.getElementById("btn-traduzir");
const textoTraduzir = document.getElementById("texto-traduzir");

const API_ADVICE = "https://api.adviceslip.com";
const API_TRADUCAO = "https://api.mymemory.translated.net/get";

// Guarda o texto original em inglês: evita traduzir uma tradução.
let textoOriginal = "";

// Invalida respostas de tradução que cheguem depois de um novo conselho.
let versaoTraducao = 0;

function exibirMensagem(mensagem) {
    textoOriginal = "";
    conselho.textContent = mensagem;
    btnTraduzir.disabled = true;
    textoTraduzir.textContent = "Traduzir";
}

function exibirConselho(texto) {
    textoOriginal = texto;
    conselho.textContent = texto;
    btnTraduzir.disabled = false;
    textoTraduzir.textContent = "Traduzir";
}

// Busca um conselho aleatório.
async function buscarConselhoAleatorio() {
    versaoTraducao++;
    exibirMensagem("Buscando conselho na internet...");

    try {
        // O parâmetro ?t= evita que o navegador reutilize uma resposta em cache.
        const resposta = await fetch(`${API_ADVICE}/advice?t=${Date.now()}`);

        if (!resposta.ok) {
            throw new Error(`Falha na requisição: HTTP ${resposta.status}`);
        }

        const dados = await resposta.json();
        exibirConselho(dados.slip.advice);
    } catch (erro) {
        exibirMensagem("Não foi possível buscar o conselho. Tente novamente.");
        console.error("Erro ao buscar conselho aleatório:", erro);
    }
}

// Busca um conselho pelo ID informado no formulário.
async function buscarConselhoPorId(evento) {
    evento.preventDefault();

    const idDigitado = numberInput.value.trim();
    const id = Number(idDigitado);

    if (!Number.isInteger(id) || id <= 0) {
        exibirMensagem("Digite um ID válido (número inteiro positivo).");
        return;
    }

    versaoTraducao++;
    exibirMensagem(`Buscando conselho n° ${id}...`);

    try {
        const resposta = await fetch(`${API_ADVICE}/advice/${id}`);

        if (!resposta.ok) {
            throw new Error(`Falha na requisição: HTTP ${resposta.status}`);
        }

        const dados = await resposta.json();

        if (dados.slip) {
            exibirConselho(dados.slip.advice);
        } else {
            exibirMensagem(`O conselho com o ID ${id} não existe!`);
        }
    } catch (erro) {
        exibirMensagem("Ocorreu um erro ao buscar o conselho por ID.");
        console.error("Erro ao buscar conselho por ID:", erro);
    }
}

// Traduz o conselho atual do inglês para o português (MyMemory).
async function traduzirConselho() {
    const texto = textoOriginal || conselho.textContent.trim();

    if (!texto) return;

    const versaoAtual = ++versaoTraducao;
    btnTraduzir.disabled = true;
    textoTraduzir.textContent = "Traduzindo...";

    try {
        const url = `${API_TRADUCAO}?q=${encodeURIComponent(texto)}&langpair=en%7Cpt-br`;
        const resposta = await fetch(url);

        if (!resposta.ok) {
            throw new Error(`Falha na requisição: HTTP ${resposta.status}`);
        }

        const dados = await resposta.json();

        // Descarta a resposta se um novo conselho foi buscado durante a tradução.
        if (versaoAtual !== versaoTraducao) return;

        if (Number(dados.responseStatus) !== 200) {
            throw new Error(dados.responseDetails || `Status ${dados.responseStatus}`);
        }

        const traducao = dados.responseData?.translatedText;

        if (!traducao) {
            throw new Error("Resposta de tradução inválida.");
        }

        conselho.textContent = traducao;
    } catch (erro) {
        if (versaoAtual === versaoTraducao) {
            conselho.textContent = "Não foi possível traduzir o conselho. Tente novamente.";
        }
        console.error("Erro ao traduzir conselho:", erro);
    } finally {
        if (versaoAtual === versaoTraducao) {
            btnTraduzir.disabled = false;
            textoTraduzir.textContent = "Traduzir";
        }
    }
}

btnRandom.addEventListener("click", buscarConselhoAleatorio);
formAdvice.addEventListener("submit", buscarConselhoPorId);
btnTraduzir.addEventListener("click", traduzirConselho);
