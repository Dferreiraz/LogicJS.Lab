const square = document.getElementById("square");
const reactionTime = document.getElementById("reaction-time");
let startTime = 0;

function aparecerQuadrado() {
    const x = Math.random() * 300;
    const y = Math.random() * 300;
    square.style.left = `${x}px`;
    square.style.top = `${y}px`;
    square.style.display = "block";
    startTime = Date.now();
}

function iniciarRodada() {
    square.style.display = "none";
    const delay = Math.random() * 2000 + 1000;
    setTimeout(aparecerQuadrado, delay);
}

// addEventListener em vez de onclick: mantém o JS desacoplado do HTML e é compatível com CSP
square.addEventListener('click', function () {
    const tempo = Date.now() - startTime;
    reactionTime.textContent = tempo;
    iniciarRodada();
});

iniciarRodada();