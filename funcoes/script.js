// Seleciona o elemento onde vamos mostrar os resultados
const output = document.getElementById('console-output');

// Função auxiliar para limpar e escrever no console virtual
function logToScreen(message) {
    const p = document.createElement('p');
    p.textContent = `> ${message}`;
    p.classList.add('text-green-400');
    output.appendChild(p);
    output.scrollTop = output.scrollHeight;
}

// ====================================================================
// 1. FUNÇÕES PRINCIPAIS (Do seu arquivo de estudo)
// ====================================================================

// Calcula e retorna o triplo de um número.
function triplo(n) {
    return n * 3;
}

// Concatena e retorna o nome completo a partir do nome e sobrenome.
function nomeCompleto(nome, sobrenome) {
    return nome + " " + sobrenome;
}

// Converte e retorna a temperatura de Celsius para Fahrenheit.
function celsiusParaFahrenheit(celsius) {
    return celsius * 1.8 + 32;
}

// ====================================================================
// 2. EXECUÇÃO E SAÍDA DE DADOS (Adaptado para a Interface)
// ====================================================================

function runTriplo() {
    const resultado = triplo(5);
    logToScreen(`O triplo de 5 é: ${resultado}`);
}

function runNome() {
    const nome = nomeCompleto("Davi Roberto de", "Almeida Ferreira");
    logToScreen(`Nome Completo: ${nome}`);
}

function runTemp() {
    const temp = celsiusParaFahrenheit(25);
    logToScreen(`25°C em Fahrenheit é: ${temp}°F`);
}