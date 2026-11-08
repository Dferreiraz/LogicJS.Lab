const display = document.getElementById('display');
let expressao = '';

// Allowlist: apenas dígitos, operadores aritméticos, ponto decimal e espaços.
// Letras, aspas, parênteses e qualquer caractere de código são rejeitados.
const EXPRESSAO_PERMITIDA = /^[0-9+\-*/. ]+$/;

// Validação estrita antes de qualquer cálculo
function validarExpressao(expressaoCalculo) {
    if (typeof expressaoCalculo !== 'string') return false;
    if (expressaoCalculo.trim() === '') return false;
    return EXPRESSAO_PERMITIDA.test(expressaoCalculo);
}

// Avaliador matemático próprio: NÃO usa eval nem Function.
// Suporta +, -, *, /, números decimais e sinal unário (ex: -5).
function avaliarExpressao(expressaoCalculo) {
    const s = expressaoCalculo.replace(/\s+/g, '');
    let pos = 0;

    function lerNumero() {
        let sinal = 1;
        while (s[pos] === '+' || s[pos] === '-') {
            if (s[pos] === '-') sinal *= -1;
            pos++;
        }

        const inicio = pos;
        let pontos = 0;
        while (pos < s.length && (/[0-9]/.test(s[pos]) || s[pos] === '.')) {
            if (s[pos] === '.') {
                pontos++;
                if (pontos > 1) throw new Error('Número inválido');
            }
            pos++;
        }

        if (inicio === pos) throw new Error('Expressão inválida');
        return sinal * Number(s.slice(inicio, pos));
    }

    function lerTermo() {
        let valor = lerNumero();
        while (s[pos] === '*' || s[pos] === '/') {
            const operador = s[pos];
            pos++;
            const proximo = lerNumero();
            if (operador === '/' && proximo === 0) throw new Error('Divisão por zero');
            valor = operador === '*' ? valor * proximo : valor / proximo;
        }
        return valor;
    }

    function lerSoma() {
        let valor = lerTermo();
        while (s[pos] === '+' || s[pos] === '-') {
            const operador = s[pos];
            pos++;
            const proximo = lerTermo();
            valor = operador === '+' ? valor + proximo : valor - proximo;
        }
        return valor;
    }

    const resultado = lerSoma();
    if (pos !== s.length) throw new Error('Expressão inválida');
    return resultado;
}

function adicionarNumero(numero) {
    if (display.innerText === '0' || display.innerText === 'Erro') {
        display.innerText = numero;
        expressao = numero;
    } else {
        display.innerText += numero;
        expressao += numero;
    }
}

function adicionarOperador(operador) {
    // Evita começar a expressão com um operador que não seja o sinal negativo
    if (expressao === '' && operador !== '-') return;

    const ultimoChar = expressao.slice(-1);

    // Evita operadores duplicados
    if (['+', '-', '*', '/'].includes(ultimoChar)) {
        expressao = expressao.slice(0, -1) + operador;
        display.innerText = expressao;
    } else {
        expressao += operador;
        display.innerText += operador;
    }
}

function limparDisplay() {
    display.innerText = '0';
    expressao = '';
}

function deletarUltimo() {
    if (expressao.length > 0) {
        expressao = expressao.slice(0, -1);
        display.innerText = expressao || '0';
    }
}

function calcular() {
    try {
        const expressaoCalculo = expressao.trim();

        // 1) Validação estrita por regex (allowlist de caracteres)
        if (!validarExpressao(expressaoCalculo)) {
            throw new Error('Expressão inválida');
        }

        // 2) Cálculo com avaliador próprio, sem execução dinâmica de código
        let resultado = avaliarExpressao(expressaoCalculo);

        if (!Number.isFinite(resultado)) {
            throw new Error('Resultado inválido');
        }

        // Arredonda para evitar problemas de ponto flutuante
        resultado = Math.round(resultado * 100000000) / 100000000;

        display.innerText = resultado.toString();
        expressao = resultado.toString();
    } catch (error) {
        display.innerText = 'Erro';
        expressao = '';
    }
}

// Liga os botões aos eventos (sem onclick inline, compatível com CSP)
document.querySelectorAll('[data-number]').forEach((btn) => {
    btn.addEventListener('click', () => adicionarNumero(btn.dataset.number));
});

document.querySelectorAll('[data-operator]').forEach((btn) => {
    btn.addEventListener('click', () => adicionarOperador(btn.dataset.operator));
});

document.getElementById('btn-clear').addEventListener('click', limparDisplay);
document.getElementById('btn-delete').addEventListener('click', deletarUltimo);
document.getElementById('btn-equals').addEventListener('click', calcular);
