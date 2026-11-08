// Os logs usam a camada compartilhada shared/logger.js (LogJS.append).

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
    LogJS.append('console-output', `O triplo de 5 é: ${resultado}`);
}

function runNome() {
    const nome = nomeCompleto("Davi Roberto de", "Almeida Ferreira");
    LogJS.append('console-output', `Nome Completo: ${nome}`);
}

function runTemp() {
    const temp = celsiusParaFahrenheit(25);
    LogJS.append('console-output', `25°C em Fahrenheit é: ${temp}°F`);
}

// Liga os botões aos eventos (sem onclick inline, compatível com CSP)
document.getElementById('btn-run-triplo').addEventListener('click', runTriplo);
document.getElementById('btn-run-nome').addEventListener('click', runNome);
document.getElementById('btn-run-temp').addEventListener('click', runTemp);
