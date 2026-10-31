let count = 0;
const value = document.getElementById("value");
const btnIncrease = document.getElementById("btn-increase");
const btnReset = document.getElementById("btn-reset");
const btnDecrease = document.getElementById("btn-decrease");

function aplicarCor() {
    if (count > 0) {
        value.style.color = "var(--accent)";
    } else if (count < 0) {
        value.style.color = "#ef4444";
    } else {
        value.style.color = "var(--text-primary)";
    }
}

btnIncrease.addEventListener("click", function () {
    count++;
    value.innerText = count;
    aplicarCor();
});

btnReset.addEventListener("click", function () {
    count = 0;
    value.innerText = count;
    aplicarCor();
});

btnDecrease.addEventListener("click", function () {
    count--;
    value.innerText = count;
    aplicarCor();
});