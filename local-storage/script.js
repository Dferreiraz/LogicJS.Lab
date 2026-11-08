// Módulo de persistência com a Web Storage API.
// Mantém um array de objetos em localStorage e renderiza a lista com DOM seguro.

const CHAVE_STORAGE = "logicjs-lab:tarefas";

const form = document.getElementById("form-tarefa");
const input = document.getElementById("input-tarefa");
const lista = document.getElementById("lista-tarefas");
const estadoVazio = document.getElementById("estado-vazio");
const contador = document.getElementById("contador-tarefas");

// Array de objetos: { id, texto, concluida }
let tarefas = [];

// Gera um identificador único para cada tarefa.
function gerarId() {
    if (window.crypto && typeof window.crypto.randomUUID === "function") {
        return window.crypto.randomUUID();
    }

    return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

// Persiste o array no localStorage como JSON.
function salvarDados() {
    try {
        localStorage.setItem(CHAVE_STORAGE, JSON.stringify(tarefas));
    } catch (erro) {
        console.error("Não foi possível salvar as tarefas:", erro);
    }
}

// Lê o JSON do localStorage e devolve um array válido.
function carregarDados() {
    try {
        const dados = localStorage.getItem(CHAVE_STORAGE);

        if (!dados) return [];

        const parseado = JSON.parse(dados);

        if (!Array.isArray(parseado)) return [];

        const ids = new Set();

        // Descarta registros corrompidos e garante IDs únicos.
        return parseado
            .filter((tarefa) => tarefa && typeof tarefa.texto === "string" && tarefa.texto.trim())
            .map((tarefa) => {
                const idValido =
                    typeof tarefa.id === "string" && tarefa.id && !ids.has(tarefa.id);
                const id = idValido ? tarefa.id : gerarId();

                ids.add(id);

                return {
                    id,
                    texto: tarefa.texto.trim(),
                    concluida: Boolean(tarefa.concluida),
                };
            });
    } catch (erro) {
        console.error("Não foi possível carregar as tarefas:", erro);
        return [];
    }
}

// Cria um botão com ícone e listener, sem onclick inline.
function criarBotao(acao, id, rotulo, classes, icone) {
    const botao = document.createElement("button");
    botao.type = "button";
    botao.className = classes;
    botao.setAttribute("aria-label", rotulo);
    botao.dataset.acao = acao;
    botao.dataset.id = id;

    const iconeEl = document.createElement("i");
    iconeEl.className = icone;
    iconeEl.setAttribute("aria-hidden", "true");
    botao.appendChild(iconeEl);

    botao.addEventListener("click", () => {
        if (acao === "alternar") {
            alternarTarefa(id);
        } else {
            excluirTarefa(id);
        }
    });

    return botao;
}

// Atualiza o contador de tarefas.
function atualizarContador() {
    const total = tarefas.length;
    const concluidas = tarefas.filter((tarefa) => tarefa.concluida).length;

    if (total === 0) {
        contador.textContent = "Nenhuma tarefa cadastrada";
        return;
    }

    contador.textContent = `${concluidas} de ${total} ${total === 1 ? "tarefa concluída" : "tarefas concluídas"}`;
}

// Renderiza a lista inteira a partir do array.
function renderizarTarefas() {
    // Limpa os itens antigos sem usar innerHTML.
    lista.replaceChildren();

    tarefas.forEach((tarefa) => {
        const item = document.createElement("li");
        item.className =
            "flex items-center gap-3 bg-bg-primary border border-border-color rounded-xl p-3 sm:p-4 transition-colors";

        const botaoAlternar = criarBotao(
            "alternar",
            tarefa.id,
            tarefa.concluida ? "Marcar como pendente" : "Marcar como concluída",
            tarefa.concluida
                ? "shrink-0 inline-flex items-center justify-center w-11 h-11 min-h-[44px] rounded-lg border border-accent/60 bg-accent/10 text-accent hover:bg-accent/20 transition-colors"
                : "shrink-0 inline-flex items-center justify-center w-11 h-11 min-h-[44px] rounded-lg border border-border-color text-text-secondary hover:border-accent hover:text-accent transition-colors",
            tarefa.concluida ? "ph ph-check text-xl" : "ph ph-circle text-xl"
        );
        botaoAlternar.setAttribute("aria-pressed", String(tarefa.concluida));

        const texto = document.createElement("span");
        texto.className = "flex-1 min-w-0 break-words text-sm sm:text-base";

        if (tarefa.concluida) {
            texto.classList.add("line-through", "text-text-secondary");
        }

        // textContent trata o texto do usuário como texto puro (proteção contra XSS).
        texto.textContent = tarefa.texto;

        const botaoExcluir = criarBotao(
            "excluir",
            tarefa.id,
            "Excluir tarefa",
            "shrink-0 inline-flex items-center justify-center w-11 h-11 min-h-[44px] rounded-lg border border-red-500/30 text-red-400 hover:bg-red-500/20 transition-colors",
            "ph ph-trash text-xl"
        );

        item.append(botaoAlternar, texto, botaoExcluir);
        lista.appendChild(item);
    });

    estadoVazio.classList.toggle("hidden", tarefas.length > 0);
    atualizarContador();
}

// Adiciona uma tarefa ao array.
function adicionarTarefa(evento) {
    evento.preventDefault();

    const texto = input.value.trim();

    if (!texto) {
        input.focus();
        return;
    }

    tarefas.push({
        id: gerarId(),
        texto,
        concluida: false,
    });

    salvarDados();
    renderizarTarefas();

    input.value = "";
    input.focus();
}

// Alterna entre concluída e pendente.
function alternarTarefa(id) {
    tarefas = tarefas.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
    );

    salvarDados();
    renderizarTarefas();
}

// Remove uma tarefa do array.
function excluirTarefa(id) {
    tarefas = tarefas.filter((tarefa) => tarefa.id !== id);

    salvarDados();
    renderizarTarefas();
}

// Eventos
form.addEventListener("submit", adicionarTarefa);

// Carrega os dados persistidos ao iniciar a página.
tarefas = carregarDados();
renderizarTarefas();
