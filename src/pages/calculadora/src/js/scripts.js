let display = document.getElementById('display')

function adicionar(valor) {
    if (display.innerText === '0') {
        display.innerText = valor
    } else {
        display.innerText += valor
    }
}

function limpar() {
    display.innerText = display.innerText.slice(0, -1) || '0'
}

function calcular() {
    try {
        display.innerText = eval(display.innerText).toString();
    } catch {
        display.innerText = 'Erro'
    }
}