// Os logs usam a camada compartilhada shared/logger.js (LogJS.append).

// Estado inicial baseado no seu estudo
const bancoDeDados = [
    { nome: "Davi", idade: 18, email: "dferreiraz07@logicjs.lab" },
    { nome: "Nicolly", idade: 17, email: "nicollyviana09@logicjs.lab" }
];

const dbContainer = document.getElementById('db-container');
const totalRegistros = document.getElementById('total-registros');
const inputNome = document.getElementById('input-nome');
const inputIdade = document.getElementById('input-idade');
const inputEmail = document.getElementById('input-email');
const btnAddRegistro = document.getElementById('btn-add-registro');

// Regex simples para e-mail. No front-end ela serve como filtro inicial;
// a validação definitiva também deve acontecer no servidor.
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const IDADE_MINIMA = 1;
const IDADE_MAXIMA = 120;
const NOME_MAX_LENGTH = 80;

// Função para renderizar o array na tela
function renderDB() {
    // Limpa a lista antes de renderizar novamente
    dbContainer.innerHTML = '';

    if (bancoDeDados.length === 0) {
        const empty = document.createElement('div');
        empty.className = 'text-center text-text-secondary py-10 italic';
        empty.textContent = 'Nenhum registro encontrado.';
        dbContainer.appendChild(empty);
        totalRegistros.textContent = '0 registros';
        return;
    }

    totalRegistros.textContent = `${bancoDeDados.length} registro(s)`;

    bancoDeDados.forEach((item, index) => {
        // Em vez de interpolar dados do usuário em innerHTML (risco de XSS),
        // criamos os elementos e usamos textContent, que trata tudo como texto.
        const card = document.createElement('div');
        card.className = "bg-bg-secondary border border-border-color rounded-lg p-4 flex justify-between items-center group hover:border-accent transition";

        const info = document.createElement('div');
        info.className = "flex items-center gap-4";

        const badge = document.createElement('div');
        badge.className = "w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center font-bold text-sm";
        badge.textContent = String(index + 1);

        const dados = document.createElement('div');

        const nomeEl = document.createElement('h4');
        nomeEl.className = "font-bold text-text-primary";
        nomeEl.textContent = item.nome;

        const emailEl = document.createElement('p');
        emailEl.className = "text-xs text-text-secondary";
        emailEl.textContent = item.email;

        dados.append(nomeEl, emailEl);
        info.append(badge, dados);

        const idadeWrapper = document.createElement('div');
        idadeWrapper.className = "text-right";

        const idadeEl = document.createElement('span');
        idadeEl.className = "bg-bg-primary px-2 py-1 rounded text-xs border border-border-color";
        idadeEl.textContent = `${item.idade} anos`;

        idadeWrapper.appendChild(idadeEl);
        card.append(info, idadeWrapper);
        dbContainer.appendChild(card);
    });
}

// Função para adicionar novo registro
function addRegistro() {
    const nome = inputNome.value.trim();
    const idadeTexto = inputIdade.value.trim();
    const email = inputEmail.value.trim();

    if (!nome) {
        LogJS.append('console-log', "Erro: informe o nome!");
        return;
    }

    if (nome.length > NOME_MAX_LENGTH) {
        LogJS.append('console-log', `Erro: o nome deve ter no máximo ${NOME_MAX_LENGTH} caracteres!`);
        return;
    }

    // Number('') retorna 0, por isso validamos o texto antes da conversão.
    const idade = Number(idadeTexto);
    if (idadeTexto === '' || !Number.isInteger(idade) || idade < IDADE_MINIMA || idade > IDADE_MAXIMA) {
        LogJS.append('console-log', `Erro: a idade deve ser um número inteiro entre ${IDADE_MINIMA} e ${IDADE_MAXIMA}!`);
        return;
    }

    if (!EMAIL_REGEX.test(email)) {
        LogJS.append('console-log', "Erro: informe um e-mail válido (ex: nome@dominio.com)!");
        return;
    }

    // Cria o objeto e adiciona ao array
    const novoObjeto = { nome, idade, email };
    bancoDeDados.push(novoObjeto);

    LogJS.append('console-log', `Objeto criado: { nome: "${nome}", ... }`);
    LogJS.append('console-log', `Adicionado ao array no índice [${bancoDeDados.length - 1}]`);

    // Limpa inputs e atualiza tela
    inputNome.value = '';
    inputIdade.value = '';
    inputEmail.value = '';

    renderDB();
}

// Liga o botão ao evento (sem onclick inline, compatível com CSP)
btnAddRegistro.addEventListener('click', addRegistro);

// Inicializa a tela
renderDB();
