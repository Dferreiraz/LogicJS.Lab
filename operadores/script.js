// Desenvolvimento em JS - Senai Suiço-brasileiro
// OPERADORES ARITMÉTICOS
// Usados para realizar operações matemáticas
console.log("=== OPERADORES ARITMÉTICOS ===")
let a = 2
let b = 9
console.log("Soma (+):", a + b)
console.log("Subtração (-):", a - b)
console.log("Multiplicação (*):", a * b)
console.log("Divisão (/):", a / b)
console.log("Módulo/Resto (%):", a % b)
console.log("Potência (**):", a ** b)

//----------------------------------------------------------------------------------//

// OPERADORES DE COMPARAÇÃO
console.log("\n=== OPERADORES DE COMPARAÇÃO ===")
let c = 7
let d = 8
console.log("Igual (==):", c == d, "- compara apenas o valor")
console.log("Estritamente igual (===):", c === d, "- compara tipo e valor")
console.log("Diferente (!=):", c != d, "- verifica se é diferente")
console.log("Estritamente diferente (!==):", c !== d, "- verifica se é diferente e compara o tipo")
console.log("Maior (>):", c > d)
console.log("Maior ou igual (>=):", c >= d)
console.log("Menor (<):", c < d)
console.log("Menor ou igual (<=):", c <= d)

//------------------------------------------------------------------------------------------//

// OPERADORES LÓGICOS
console.log("\n=== OPERADORES LÓGICOS ===")
let chocolate = true
let pipoca = false
console.log("AND (&&):", chocolate && pipoca, "- precisa que ambos sejam verdadeiros")

let elseve = true
let siage = false
console.log("OR (||):", elseve || siage, "- basta que apenas um seja verdadeiro")

let logado = true
console.log("NOT (!):", !logado, "- inverte o valor (negação)")

//-----------------------------------------------------------------------------------------------------------------------//

// OPERADORES DE ATRIBUIÇÃO
console.log("\n=== OPERADORES DE ATRIBUIÇÃO ===")
let pontos = 10
pontos += 5  // pontos = pontos + 5
console.log("pontos += 5:", pontos)