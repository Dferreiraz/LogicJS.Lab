let display = document.getElementById('display');
let expressao = '';

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
        // Substitui os símbolos visuais pelos operadores JavaScript
        let expressaoCalculo = expressao
            .replace(/×/g, '*')
            .replace(/÷/g, '/')
            .replace(/−/g, '-');
        
        // Eval seguro para expressões matemáticas simples
        let resultado = Function('"use strict"; return (' + expressaoCalculo + ')')();
        
        // Arredonda para evitar problemas de ponto flutuante
        resultado = Math.round(resultado * 100000000) / 100000000;
        
        display.innerText = resultado.toString();
        expressao = resultado.toString();
    } catch (error) {
        display.innerText = 'Erro';
        expressao = '';
    }
}