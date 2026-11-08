// Os logs usam a camada compartilhada shared/logger.js (LogJS.append / LogJS.clear).

// ==========================================
// ESTRUTURAS de Repetição - Desenvolvimento em JS - Senai Suíço-brasileiro
// Servem para o software fazer repetições (loops)
// ==========================================

// =================================================================================================================
// FOR
// EXPLICAÇÃO: O loop 'for' é ideal quando SABEMOS exatamente quantas vezes 
// queremos que a repetição aconteça. Ele é composto por 3 partes separadas por ponto e vírgula (;):
// 1. Inicialização (ex: let i = 0): Cria a variável de controle e define seu valor inicial. Executada apenas uma vez.
// 2. Condição (ex: i <= 10): O loop continua rodando ENQUANTO esta condição for verdadeira (true).
// 3. Incremento/Decremento (ex: i++): Atualiza o valor da variável de controle ao final de cada repetição.
// =================================================================================================================

// =================================================================================================================
// WHILE
// EXPLICAÇÃO: O loop 'while' (enquanto) é ideal quando NÃO sabemos exatamente 
// quantas vezes a repetição vai ocorrer, mas sabemos qual é a CONDIÇÃO para ela parar.
// Diferente do 'for', ele só possui a condição de parada entre parênteses.
// 
// ESTRUTURA BÁSICA:
// let variavel = valorInicial;
// while (condicao) {
//     // código a ser repetido
//     variavel = novoValor; // ATENÇÃO: Atualizar a variável é obrigatório!
// }
// =================================================================================================================

// 1. Contagem Simples (For)
function runCounting() {
    LogJS.clear('console-output', '// Console limpo.');
    LogJS.append('console-output', "--- Iniciando Contagem (for) ---");
    let i = 0;
    
    function step() {
        if (i <= 10) {
            LogJS.append('console-output', i);
            i++;
            setTimeout(step, 300); // Espera 300ms para o próximo
        } else {
            LogJS.append('console-output', "Fim da contagem!");
        }
    }
    step();
}

// 2. Tabuada do 5 (For)
function runTabuada() {
    LogJS.clear('console-output', '// Console limpo.');
    LogJS.append('console-output', "--- Tabuada do 5 ---");
    let i = 1;
    
    function step() {
        if (i <= 10) {
            LogJS.append('console-output', `5 x ${i} = ${5 * i}`);
            i++;
            setTimeout(step, 400);
        } else {
            LogJS.append('console-output', "Tabuada finalizada!");
        }
    }
    step();
}

// 3. Números Pares (For com Condicional)
function runEvenNumbers() {
    LogJS.clear('console-output', '// Console limpo.');
    LogJS.append('console-output', "--- Números Pares (0 a 20) ---");
    let i = 0;
    
    function step() {
        if (i <= 20) {
            if (i % 2 === 0) {
                LogJS.append('console-output', `${i} é par`);
            }
            i++;
            setTimeout(step, 200);
        } else {
            LogJS.append('console-output', "Busca por pares finalizada.");
        }
    }
    step();
}

// 4. Contagem Regressiva (While)
function runWhileCountdown() {
    LogJS.clear('console-output', '// Console limpo.');
    LogJS.append('console-output', "--- Contagem Regressiva (while) ---");
    let i = 10;
    
    function step() {
        if (i >= 1) {
            LogJS.append('console-output', i);
            i--;
            setTimeout(step, 500); // Mais lento para dar suspense
        } else {
            LogJS.append('console-output', "🚀 FIM!");
        }
    }
    step();
}

// Liga os botões aos eventos (sem onclick inline, compatível com CSP)
document.getElementById('btn-clear-console').addEventListener('click', () => {
    LogJS.clear('console-output', '// Console limpo.');
});
document.getElementById('btn-run-counting').addEventListener('click', runCounting);
document.getElementById('btn-run-tabuada').addEventListener('click', runTabuada);
document.getElementById('btn-run-even').addEventListener('click', runEvenNumbers);
document.getElementById('btn-run-countdown').addEventListener('click', runWhileCountdown);
