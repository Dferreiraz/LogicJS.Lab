// Seleção de Elementos do DOM
const body = document.getElementById('main-body');
const title = document.getElementById('title');
const paragraph = document.getElementById('paragraph');
const img = document.getElementById('demo-img');
const statusLog = document.getElementById('status-log');

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
    
    updateStatus(`Tema ${colorName.toUpperCase()} aplicado`);
}

// Alternar Texto do Parágrafo
function toggleText() {
    isAltText = !isAltText;
    paragraph.innerText = isAltText 
        ? "Texto alterado dinamicamente! O DOM foi atualizado com sucesso." 
        : "Este elemento está esperando para ser manipulado pelo JavaScript Vanilla.";
    updateStatus("Texto alternado");
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
    updateStatus(isLarge ? "Modo Grande ativado" : "Tamanho padrão restaurado");
}

// Atualiza o Log Visual na Tela
function updateStatus(msg) {
    statusLog.textContent = msg;
    // Efeito visual rápido no log
    statusLog.style.opacity = '0.5';
    setTimeout(() => statusLog.style.opacity = '1', 200);
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