// Estado inicial do array baseado no seu estudo
let nomes = ["Davi", "Felipe", "Anderson", "Kauã", "Gabriel", "Pedro", "Matheus"];

const arrayDisplay = document.getElementById('array-display');
const consoleOutput = document.getElementById('console-output');

// Função para atualizar a visualização do array na tela
function updateView() {
    // Mostra o array formatado como código
    arrayDisplay.innerHTML = `[ ${nomes.map(n => `"${n}"`).join(', ')} ]`;
}

// Função auxiliar para logs no console virtual
function log(msg) {
    const p = document.createElement('p');
    p.textContent = `> ${msg}`;
    consoleOutput.appendChild(p);
    consoleOutput.scrollTop = consoleOutput.scrollHeight;
}

// Inicializa a tela
updateView();

// --- Métodos de Manipulação ---

function addFim() {
    nomes.push("Banana"); // Usando fruta como exemplo ou outro nome se preferir
    log(`Adicionado "Banana" ao final.`);
    updateView();
}

function removeFim() {
    if (nomes.length > 0) {
        const removed = nomes.pop();
        log(`Removido "${removed}" do final.`);
    } else {
        log("Array vazio!");
    }
    updateView();
}

function addInicio() {
    nomes.unshift("Abacaxi");
    log(`Adicionado "Abacaxi" ao início.`);
    updateView();
}

function removeInicio() {
    if (nomes.length > 0) {
        const removed = nomes.shift();
        log(`Removido "${removed}" do início.`);
    } else {
        log("Array vazio!");
    }
    updateView();
}

function forEachTest() {
    log("--- Iniciando forEach ---");
    nomes.forEach((elemento) => {
        log(`Bom dia, ${elemento}!`);
    });
}