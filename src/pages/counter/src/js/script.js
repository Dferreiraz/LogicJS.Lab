let count = 0

const value = document.getElementById("value")
const btnIncrease = document.getElementById("btn-increase")
const btnReset = document.getElementById("btn-reset")
const btnDecrease = document.getElementById("btn-decrease")

function aplicarCor() {
    if (count > 0) {
        value.style.color = "blue";
    } else if (count < 0) {
        value.style.color = "red";
    } else {
        value.style.color = "white";
    }
}

btnIncrease.addEventListener("click", function () {
    count = count + 1; // Soma 1
    value.innerText = count; // Atualiza o número na tela
    aplicarCor()
})
btnReset.addEventListener("click", function () {
    count = count = 0; // Reset: Count(8) - Count (8)
    value.innerText = count; // Atualiza o número na tela
    aplicarCor()
})
btnDecrease.addEventListener("click", function () {
    count = count - 1; // Subtrai 1
    value.innerText = count; // Atualiza o número na tela
    aplicarCor()
})

