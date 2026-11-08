// Seleciona o elemento onde vamos mostrar os resultados
const output = document.getElementById('console-output');

// Função auxiliar para limpar e escrever no console virtual
function logToScreen(message, type = 'log') {
    const p = document.createElement('p');
    p.textContent = `> ${message}`;
    
    // Adiciona cores diferentes para erros ou logs normais
    if (type === 'error') {
        p.classList.add('text-red-400');
    } else {
        p.classList.add('text-green-400');
    }
    
    output.appendChild(p);
    output.scrollTop = output.scrollHeight; // Mantém o scroll sempre no final
}

// 1. Testando VAR
function testVar() {
    logToScreen("--- Iniciando teste com VAR ---");
    
    var idade = 50;
    logToScreen(`Valor inicial: ${idade}`);
    
    idade = 25;
    logToScreen(`Novo valor atribuído: ${idade}`);
    logToScreen("Resultado: VAR permite reatribuição facilmente.");
}

// 2. Testando LET
function testLet() {
    logToScreen("--- Iniciando teste com LET ---");
    
    let cidade = "Xique-Xique, Bahia";
    logToScreen(`Cidade inicial: ${cidade}`);
    
    cidade = "Tão tão distante";
    logToScreen(`Nova cidade: ${cidade}`);
    logToScreen("Resultado: LET também é mutável, mas tem escopo de bloco.");
}

// 3. Testando CONST
function testConst() {
    logToScreen("--- Iniciando teste com CONST ---");
    
    const cpf = 1324343653465375237;
    logToScreen(`CPF armazenado: ${cpf}`);
    
    // Tenta mudar o valor (vai gerar erro)
    try {
        // cpf = 2142134; // Isso daria erro real e pararia o script
        throw new Error("Assignment to constant variable.");
    } catch (e) {
        logToScreen(`Erro ao tentar mudar: ${e.message}`, 'error');
        logToScreen("Resultado: CONST é imutável após a declaração.");
    }
}