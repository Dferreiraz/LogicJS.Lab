
const square = document.getElementById("square");
const reactionTime = document.getElementById("reaction-time");

let startTime = 0;

function aparecerQuadrado() {
 const x = Math.random() * 350;
 const y = Math.random() * 350;

  square.style.left = `${x}px`;
  square.style.top = `${y}px`;
  square.style.display = "block";

  startTime = Date.now();
}

function iniciarRodada() {
    square.style.display = "none";
    const delay = Math.random() * 2000 + 1000; // entre 1s e 3s
    setTimeout(aparecerQuadrado, delay);
}

square.onclick = function () {
    const tempo = Date.now() - startTime;
    reactionTime.textContent = tempo;
    iniciarRodada();
};

// Começa o jogo
iniciarRodada();