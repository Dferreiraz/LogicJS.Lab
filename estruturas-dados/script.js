// Desenvolvimento em JS - Senai Suiço-brasileiro
// ARRAY [] - é uma lista em JavaScript 
console.log("=== ARRAYS ===")

// Array de nomes
let nomes = ["Isabella", "Yolanda", "Ferraz"]
console.table(nomes)
console.log(nomes[2], nomes[1])

// Array de frutas
let frutas = ["Maçã", "Morango", "Jabuticaba"]
console.log(frutas[2])

// EXERCÍCIO: Crie um array com 3 cores favoritas e mostre no console
let cores = ["Vermelho", "Azul", "Verde"]
console.table(cores)

// EXERCÍCIO: Crie um array com 3 números e mostre a soma dos dois primeiros
let numeros = [2, 10, 55]
let resultado = numeros[0] + numeros[1]
console.log("Soma dos dois primeiros números:", resultado)

//-------------------------------------------------------------------------//

// OBJECT {} - Objetos em JavaScript
console.log("\n=== OBJETOS ===")
let aluno = {
    nome: "Anderson",
    idade: 41,
    email: "andersonfdsjunior@gmail.com"
}
console.log(aluno.email)

// EXERCÍCIO: Crie um objeto livro com título, autor e páginas
// mostre o número de páginas dele no console
let livro = {
    titulo: "Assim Falou Zaratustra",
    autor: "Nietzsche",
    paginas: 360
}
console.log("Número de páginas:", livro.paginas)