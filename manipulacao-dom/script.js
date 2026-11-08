// Os status usam a camada compartilhada shared/logger.js (LogJS.status).

// Seleção de Elementos do DOM
const body = document.getElementById('main-body');
const title = document.getElementById('title');
const paragraph = document.getElementById('paragraph');
const img = document.getElementById('demo-img');

// Mapa de Cores (Mantendo sua lógica original, mas organizada)
const colors = {
    r: { bg: '#450a0a', border: '#7f1d1d', text: '#fca5a5' }, // Red Dark
    g: { bg: '#052e16', border: '#14532d', text: '#86efac' }, // Green Dark
    b: { bg: '#082f49', border: '#0c4a6e', text: '#7dd3fc' }, // Blue Dark
};

let isLarge = false;
let isAltText = false;

// Função Principal de Mudança de Cor
function changeColor(colorName) {
    const colorMap = { 'red': 'r', 'green': 'g', 'blue': 'b' };
    const key = colorMap[colorName];
    const theme = colors[key];

    if (!theme) return;

    // Manipulação direta de estilo via JS
    body.style.backgroundColor = theme.bg;
    title.style.color = theme.text;
    paragraph.style.color = theme.text;
    
    LogJS.status('status-log', `Tema ${colorName.toUpperCase()} aplicado`);
}

// Alternar Texto do Parágrafo
function toggleText() {
    isAltText = !isAltText;
    paragraph.innerText = isAltText 
        ? "Texto alterado dinamicamente! O DOM foi atualizado com sucesso." 
        : "Este elemento está esperando para ser manipulado pelo JavaScript Vanilla.";
    LogJS.status('status-log', "Texto alternado");
}

// Alternar Tamanho da Imagem/Card
function toggleSize() {
    isLarge = !isLarge;
    if (isLarge) {
        img.style.width = "200px";
        img.style.height = "200px";
        title.style.fontSize = "2.5rem";
    } else {
        img.style.width = "150px";
        img.style.height = "150px";
        title.style.fontSize = "1.875rem"; // text-3xl
    }
    LogJS.status('status-log', isLarge ? "Modo Grande ativado" : "Tamanho padrão restaurado");
}

// Event Listener de Teclado (Sua lógica original aprimorada)
document.addEventListener("keydown", (e) => {
    const key = e.key.toLowerCase();
    if (colors[key]) {
        // Mapeia R->Red, G->Green, B->Blue
        const colorMap = { 'r': 'red', 'g': 'green', 'b': 'blue' };
        changeColor(colorMap[key]);
    }
});

// Liga os botões aos eventos (sem onclick inline, compatível com CSP)
document.querySelectorAll('[data-color]').forEach((btn) => {
    btn.addEventListener('click', () => changeColor(btn.dataset.color));
});

document.getElementById('btn-toggle-text').addEventListener('click', toggleText);
document.getElementById('btn-toggle-size').addEventListener('click', toggleSize);
