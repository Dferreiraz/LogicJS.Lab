// Os logs usam a camada compartilhada shared/logger.js (LogJS.append).

// Estado inicial do array baseado no seu estudo
let nomes = ["Davi", "Felipe", "Anderson", "Kauã", "Gabriel", "Pedro", "Matheus"];

const arrayDisplay = document.getElementById('array-display');

// Função para atualizar a visualização do array na tela
function updateView() {
    // Mostra o array formatado como código.
    // textContent evita interpretar o conteúdo como HTML (proteção contra XSS).
    arrayDisplay.textContent = `[ ${nomes.map(n => `"${n}"`).join(', ')} ]`;
}

// Inicializa a tela
updateView();

// --- Métodos de Manipulação ---

function addFim() {
    nomes.push("Banana"); // Usando fruta como exemplo ou outro nome se preferir
    LogJS.append('console-output', `Adicionado "Banana" ao final.`);
    updateView();
}

function removeFim() {
    if (nomes.length > 0) {
        const removed = nomes.pop();
        LogJS.append('console-output', `Removido "${removed}" do final.`);
    } else {
        LogJS.append('console-output', "Array vazio!");
    }
    updateView();
}

function addInicio() {
    nomes.unshift("Abacaxi");
    LogJS.append('console-output', `Adicionado "Abacaxi" ao início.`);
    updateView();
}

function removeInicio() {
    if (nomes.length > 0) {
        const removed = nomes.shift();
        LogJS.append('console-output', `Removido "${removed}" do início.`);
    } else {
        LogJS.append('console-output', "Array vazio!");
    }
    updateView();
}

function forEachTest() {
    LogJS.append('console-output', "--- Iniciando forEach ---");
    nomes.forEach((elemento) => {
        LogJS.append('console-output', `Bom dia, ${elemento}!`);
    });
}

// Liga os botões aos eventos (sem onclick inline, compatível com CSP)
document.getElementById('btn-add-fim').addEventListener('click', addFim);
document.getElementById('btn-remove-fim').addEventListener('click', removeFim);
document.getElementById('btn-add-inicio').addEventListener('click', addInicio);
document.getElementById('btn-remove-inicio').addEventListener('click', removeInicio);
document.getElementById('btn-forEach').addEventListener('click', forEachTest);
