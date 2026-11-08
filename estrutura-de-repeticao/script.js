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

const output = document.getElementById('console-output');

function log(msg) {
    const p = document.createElement('p');
    p.textContent = `> ${msg}`;
    output.appendChild(p);
    output.scrollTop = output.scrollHeight;
}

function clearConsole() {
    output.innerHTML = '<p class="text-gray-500">// Console limpo.</p>';
}

// 1. Contagem Simples (For)
function runCounting() {
    clearConsole();
    log("--- Iniciando Contagem (for) ---");
    let i = 0;
    
    function step() {
        if (i <= 10) {
            log(i);
            i++;
            setTimeout(step, 300); // Espera 300ms para o próximo
        } else {
            log("Fim da contagem!");
        }
    }
    step();
}

// 2. Tabuada do 5 (For)
function runTabuada() {
    clearConsole();
    log("--- Tabuada do 5 ---");
    let i = 1;
    
    function step() {
        if (i <= 10) {
            log(`5 x ${i} = ${5 * i}`);
            i++;
            setTimeout(step, 400);
        } else {
            log("Tabuada finalizada!");
        }
    }
    step();
}

// 3. Números Pares (For com Condicional)
function runEvenNumbers() {
    clearConsole();
    log("--- Números Pares (0 a 20) ---");
    let i = 0;
    
    function step() {
        if (i <= 20) {
            if (i % 2 === 0) {
                log(`${i} é par`);
            }
            i++;
            setTimeout(step, 200);
        } else {
            log("Busca por pares finalizada.");
        }
    }
    step();
}

// 4. Contagem Regressiva (While)
function runWhileCountdown() {
    clearConsole();
    log("--- Contagem Regressiva (while) ---");
    let i = 10;
    
    function step() {
        if (i >= 1) {
            log(i);
            i--;
            setTimeout(step, 500); // Mais lento para dar suspense
        } else {
            log("🚀 FIM!");
        }
    }
    step();
}
