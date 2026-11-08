// Os logs usam a camada compartilhada shared/logger.js (LogJS.append).
// Assim, a lógica de renderização fica em um único lugar para todo o laboratório.

// 1. Testando VAR
function testVar() {
    LogJS.append('console-output', "--- Iniciando teste com VAR ---");
    
    var idade = 50;
    LogJS.append('console-output', `Valor inicial: ${idade}`);
    
    idade = 25;
    LogJS.append('console-output', `Novo valor atribuído: ${idade}`);
    LogJS.append('console-output', "Resultado: VAR permite reatribuição facilmente.");
}

// 2. Testando LET
function testLet() {
    LogJS.append('console-output', "--- Iniciando teste com LET ---");
    
    let cidade = "Xique-Xique, Bahia";
    LogJS.append('console-output', `Cidade inicial: ${cidade}`);
    
    cidade = "Tão tão distante";
    LogJS.append('console-output', `Nova cidade: ${cidade}`);
    LogJS.append('console-output', "Resultado: LET também é mutável, mas tem escopo de bloco.");
}

// 3. Testando CONST
function testConst() {
    LogJS.append('console-output', "--- Iniciando teste com CONST ---");
    
    const cpf = 1324343653465375237;
    LogJS.append('console-output', `CPF armazenado: ${cpf}`);
    
    // Tenta mudar o valor (vai gerar erro)
    try {
        // cpf = 2142134; // Isso daria erro real e pararia o script
        throw new Error("Assignment to constant variable.");
    } catch (e) {
        LogJS.append('console-output', `Erro ao tentar mudar: ${e.message}`, { type: 'error' });
        LogJS.append('console-output', "Resultado: CONST é imutável após a declaração.");
    }
}

// Liga os botões aos eventos (sem onclick inline, compatível com CSP)
document.getElementById('btn-test-var').addEventListener('click', testVar);
document.getElementById('btn-test-let').addEventListener('click', testLet);
document.getElementById('btn-test-const').addEventListener('click', testConst);
