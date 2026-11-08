// Estado inicial baseado no seu estudo
let bancoDeDados = [
    { nome: "Davi", idade: 18, email: "dferreiraz07@logicjs.lab" },
    { nome: "Nicolly", idade: 17, email: "nicollyviana09@logicjs.lab" }
];

const dbContainer = document.getElementById('db-container');
const consoleLog = document.getElementById('console-log');
const totalRegistros = document.getElementById('total-registros');

// Função para renderizar o array na tela
function renderDB() {
    dbContainer.innerHTML = '';
    
    if (bancoDeDados.length === 0) {
        dbContainer.innerHTML = '<div class="text-center text-text-secondary py-10 italic">Nenhum registro encontrado.</div>';
        totalRegistros.textContent = '0 registros';
        return;
    }

    totalRegistros.textContent = `${bancoDeDados.length} registro(s)`;

    bancoDeDados.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = "bg-bg-secondary border border-border-color rounded-lg p-4 flex justify-between items-center group hover:border-accent transition";
        
        card.innerHTML = `
            <div class="flex items-center gap-4">
                <div class="w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center font-bold text-sm">
                    ${index + 1}
                </div>
                <div>
                    <h4 class="font-bold text-text-primary">${item.nome}</h4>
                    <p class="text-xs text-text-secondary">${item.email}</p>
                </div>
            </div>
            <div class="text-right">
                <span class="bg-bg-primary px-2 py-1 rounded text-xs border border-border-color">${item.idade} anos</span>
            </div>
        `;
        dbContainer.appendChild(card);
    });
}

// Função auxiliar de log
function log(msg) {
    const p = document.createElement('p');
    p.textContent = `> ${msg}`;
    consoleLog.appendChild(p);
    consoleLog.scrollTop = consoleLog.scrollHeight;
}

// Função para adicionar novo registro
function addRegistro() {
    const nome = document.getElementById('input-nome').value.trim();
    const idade = Number(document.getElementById('input-idade').value);
    const email = document.getElementById('input-email').value.trim();

    if (!nome || !idade || !email) {
        log("Erro: Preencha todos os campos!");
        return;
    }

    // Cria o objeto e adiciona ao array
    const novoObjeto = { nome, idade, email };
    bancoDeDados.push(novoObjeto);
    
    log(`Objeto criado: { nome: "${nome}", ... }`);
    log(`Adicionado ao array no índice [${bancoDeDados.length - 1}]`);
    
    // Limpa inputs e atualiza tela
    document.getElementById('input-nome').value = '';
    document.getElementById('input-idade').value = '';
    document.getElementById('input-email').value = '';
    
    renderDB();
}

// Inicializa a tela
renderDB();