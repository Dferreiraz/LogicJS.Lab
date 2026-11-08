// Desenvolvimento em JS - Senai Suiço-brasileiro
// String - é tudo que estiver dentro de aspas
// let nome = "Ferreira"

// Number - são números (inteiros e decimais)
// let idade = 25
// const pi = 3.14
// let saldo = -10

// Boolean - é verdadeiro ou falso, usado para decisões
// let maiorDeIdade = true
// let pagamentoConfirmado = false

// null - é um valor nulo, usado de forma proposital
// let desconto = null

// undefined - variável declarada mas sem valor atribuído
// let produto

// console.log(nome)
// console.log(idade)
// console.log(pi)
// console.log(saldo)
// console.log(maiorDeIdade)
// console.log(pagamentoConfirmado)
// console.log(desconto)
// console.log(produto)

// ================================

const input = document.getElementById('test-input');
const resultBox = document.getElementById('result-box');
const resultType = document.getElementById('result-type');
const resultLabel = document.querySelector('#result-box p');
const btnAnalyze = document.getElementById('btn-analyze');

// Regex para reconhecer apenas números decimais simples.
// Evita casos como 0x10, Infinity ou notação científica.
const NUMERO_DECIMAL = /^[+-]?(\d+(\.\d+)?|\.\d+)$/;

function analyzeType() {
    const rawValue = input.value.trim();

    if (rawValue === "") {
        resultLabel.textContent = 'Digite um valor para analisar.';
        resultType.textContent = '—';
        resultType.className = 'text-2xl font-bold tracking-wider uppercase text-red-400';
        resultBox.classList.remove('hidden');
        return;
    }

    // Tenta converter para número se parecer um número
    let analyzedValue = rawValue;

    // Number.isNaN() é mais seguro que o isNaN() global, que faz coerção implícita.
    const numero = Number(rawValue);
    const pareceNumero = NUMERO_DECIMAL.test(rawValue) && !Number.isNaN(numero) && Number.isFinite(numero);

    if (pareceNumero) {
        analyzedValue = numero;
    } else if (rawValue === 'true' || rawValue === 'false') {
        analyzedValue = (rawValue === 'true');
    } else if (rawValue === 'null') {
        analyzedValue = null;
    } else if (rawValue === 'undefined') {
        analyzedValue = undefined;
    }

    const type = typeof analyzedValue;
    
    // Define a cor baseada no tipo
    let colorClass = '';
    switch(type) {
        case 'string': colorClass = 'text-type-string'; break;
        case 'number': colorClass = 'text-type-number'; break;
        case 'boolean': colorClass = 'text-type-boolean'; break;
        case 'object': // null retorna object em JS
            colorClass = (analyzedValue === null) ? 'text-type-null' : 'text-type-undef'; 
            break;
        case 'undefined': colorClass = 'text-type-undef'; break;
        default: colorClass = 'text-text-primary';
    }

    // Atualiza a UI
    resultLabel.textContent = 'O tipo deste valor é:';
    resultType.textContent = type.toUpperCase();
    resultType.className = `text-2xl font-bold tracking-wider uppercase ${colorClass}`;
    resultBox.classList.remove('hidden');
}

// Liga o botão ao evento (sem onclick inline, compatível com CSP)
btnAnalyze.addEventListener('click', analyzeType);

// Permite apertar Enter para analisar (keydown é o evento recomendado)
input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        analyzeType();
    }
});
