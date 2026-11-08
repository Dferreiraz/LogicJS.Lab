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

function analyzeType() {
    let value = input.value.trim();
    
    if (value === "") {
        alert("Por favor, digite algum valor para analisar!");
        return;
    }

    // Tenta converter para número se parecer um número
    let analyzedValue = value;
    if (!isNaN(value) && value !== '') {
        analyzedValue = Number(value);
    } else if (value === 'true' || value === 'false') {
        analyzedValue = (value === 'true');
    } else if (value === 'null') {
        analyzedValue = null;
    } else if (value === 'undefined') {
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
    resultType.textContent = type.toUpperCase();
    resultType.className = `text-2xl font-bold tracking-wider uppercase ${colorClass}`;
    resultBox.classList.remove('hidden');
}

// Permite apertar Enter para analisar
input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        analyzeType();
    }
});