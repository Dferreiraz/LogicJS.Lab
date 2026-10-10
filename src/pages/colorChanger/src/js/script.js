const html = document.getElementById("html")
const btn = document.getElementById("btn")
const span = document.getElementById("span")

const cores = [
  "Blue",
  "Red",
  "Green",
  "Yellow",
  "Purple",
  "Orange",
  "Gray",
  "Black"
]

btn.addEventListener("click", function () {
  const indice = Math.floor(Math.random() * cores.length)
  const cor = cores[indice]
  html.style.backgroundColor = cor
  span.innerText = "Cor de Fundo: " + cor
})

