const body = document.body;
const btn = document.getElementById("btn");
const corAtual = document.getElementById("cor-atual");

const cores = [
    "#0f172a", // Slate 900 (Dark)
    "#1e293b", // Slate 800
    "#334155", // Slate 700
    "#1e3a8a", // Blue 900
    "#1e40af", // Blue 800
    "#3730a3", // Indigo 800
    "#4c1d95", // Violet 900
    "#581c87", // Purple 900
    "#701a75", // Fuchsia 900
    "#831843", // Pink 900
    "#881337", // Rose 900
    "#7f1d1d", // Red 900
    "#7c2d12", // Orange 900
    "#78350f", // Amber 900
    "#713f12", // Yellow 900
    "#365314", // Lime 900
    "#14532d", // Green 900
    "#064e3b", // Emerald 900
    "#134e4a", // Teal 900
    "#164e63", // Cyan 900
];

btn.addEventListener("click", function () {
    const indice = Math.floor(Math.random() * cores.length);
    const cor = cores[indice];
    
    body.style.backgroundColor = cor;
    corAtual.innerText = cor;
});