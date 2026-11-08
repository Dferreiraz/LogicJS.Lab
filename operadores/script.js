// Estado das variáveis booleanas
let chocolate = true;
let pipoca = false;

// Elementos do DOM
const inputA = document.getElementById('val-a');
const inputB = document.getElementById('val-b');
const resArit = document.getElementById('res-arit');
const resComp = document.getElementById('res-comp');
const resLog = document.getElementById('res-log');

// Função para atualizar todos os cálculos
function updateCalculations() {
    const a = Number(inputA.value);
    const b = Number(inputB.value);

    // 1. Aritméticos
    resArit.innerHTML = `
        <div class="flex justify-between"><span>Soma (+):</span> <span class="text-accent">${a + b}</span></div>
        <div class="flex justify-between"><span>Subtração (-):</span> <span class="text-accent">${a - b}</span></div>
        <div class="flex justify-between"><span>Multiplicação (*):</span> <span class="text-accent">${a * b}</span></div>
        <div class="flex justify-between"><span>Divisão (/):</span> <span class="text-accent">${(a / b).toFixed(2)}</span></div>
        <div class="flex justify-between"><span>Módulo (%):</span> <span class="text-accent">${a % b}</span></div>
        <div class="flex justify-between"><span>Potência (**):</span> <span class="text-accent">${a ** b}</span></div>
    `;

    // 2. Comparação
    resComp.innerHTML = `
        <div class="flex justify-between"><span>Igual (==):</span> <span class="${a == b ? 'text-green-400' : 'text-red-400'}">${a == b}</span></div>
        <div class="flex justify-between"><span>Estritamente igual (===):</span> <span class="${a === b ? 'text-green-400' : 'text-red-400'}">${a === b}</span></div>
        <div class="flex justify-between"><span>Diferente (!=):</span> <span class="${a != b ? 'text-green-400' : 'text-red-400'}">${a != b}</span></div>
        <div class="flex justify-between"><span>Maior (>):</span> <span class="${a > b ? 'text-green-400' : 'text-red-400'}">${a > b}</span></div>
        <div class="flex justify-between"><span>Menor (<):</span> <span class="${a < b ? 'text-green-400' : 'text-red-400'}">${a < b}</span></div>
    `;

    // 3. Lógicos
    resLog.innerHTML = `
        <div class="flex justify-between">
            <span>Chocolate (${chocolate}) && Pipoca (${pipoca}):</span> 
            <span class="${chocolate && pipoca ? 'text-green-400' : 'text-red-400'}">${chocolate && pipoca} (AND)</span>
        </div>
        <div class="flex justify-between">
            <span>Chocolate (${chocolate}) || Pipoca (${pipoca}):</span> 
            <span class="${chocolate || pipoca ? 'text-green-400' : 'text-red-400'}">${chocolate || pipoca} (OR)</span>
        </div>
        <div class="flex justify-between">
            <span>NOT Chocolate (!${chocolate}):</span> 
            <span class="${!chocolate ? 'text-green-400' : 'text-red-400'}">${!chocolate}</span>
        </div>
    `;
}

// Função para alternar os botões booleanos
function toggleBool(type) {
    if (type === 'chocolate') {
        chocolate = !chocolate;
        const btn = document.getElementById('btn-choc');
        btn.textContent = `Chocolate: ${chocolate ? 'ON' : 'OFF'}`;
        btn.className = chocolate 
            ? "flex-1 bg-green-500/20 text-green-400 border border-green-500/50 py-2 rounded text-xs font-bold transition"
            : "flex-1 bg-red-500/20 text-red-400 border border-red-500/50 py-2 rounded text-xs font-bold transition";
    } else {
        pipoca = !pipoca;
        const btn = document.getElementById('btn-pipoca');
        btn.textContent = `Pipoca: ${pipoca ? 'ON' : 'OFF'}`;
        btn.className = pipoca 
            ? "flex-1 bg-green-500/20 text-green-400 border border-green-500/50 py-2 rounded text-xs font-bold transition"
            : "flex-1 bg-red-500/20 text-red-400 border border-red-500/50 py-2 rounded text-xs font-bold transition";
    }
    updateCalculations();
}

// Adiciona listeners para os inputs numéricos
inputA.addEventListener('input', updateCalculations);
inputB.addEventListener('input', updateCalculations);

// Inicializa a tela
updateCalculations();