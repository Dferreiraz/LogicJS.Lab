// ==========================================
// ESTRUTURAS de Repetição - Desenvolvimento em JS - Senai Suíço-brasileiro
// Servem para o software fazer repetições (loops)
// ==========================================

// =================================================================================================================
// FOR
// EXPLICAÇÃO: O loop 'for' é ideal quando SABEMOS exatamente quantas vezes 
// queremos que a repetição aconteça. Ele é composto por 3 partes separadas por ponto e vírgula (;):
// 1. Inicialização (ex: let i = 0): Cria a variável de controle e define seu valor inicial. Executada apenas uma vez.
// 2. Condição (ex: i <= 10): O loop continua rodando ENQUANTO esta condição for verdadeira (true).
// 3. Incremento/Decremento (ex: i++): Atualiza o valor da variável de controle ao final de cada repetição.
// =================================================================================================================

// ------------------------------------------
// Atividade 1 - Contagem de 0 a 10
// ------------------------------------------
for (let i = 0; i <= 10; i++) {
    // console.log(i)
}

// ------------------------------------------
// Atividade 2 - Contagem de 1 até 20
// ------------------------------------------
for (let i = 1; i <= 20; i++) {
    // console.log(i)
}

// ------------------------------------------
// Atividade 3 - Tabuada do 5
// ------------------------------------------
for (let i = 1; i <= 10; i++) {
    // console.log(`5 x ${i} = ${5 * i}`)
}

// ------------------------------------------
// Atividade 4 - Contagem regressiva de 10 a 1
// ------------------------------------------
for (let i = 10; i >= 1; i--) {
    // console.log(i)
}

// ------------------------------------------
// Atividade 5 - Mostrar os números pares de 0 a 20
// ------------------------------------------
for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        // console.log(i)
    }
}

// ------------------------------------------
// Atividade 6 - Contar de 0 até 50, de 5 em 5
// ------------------------------------------
for (let i = 0; i <= 50; i += 5) {
    // console.log(i)
}

// =================================================================================================================
// WHILE
// EXPLICAÇÃO: O loop 'while' (enquanto) é ideal quando NÃO sabemos exatamente 
// quantas vezes a repetição vai ocorrer, mas sabemos qual é a CONDIÇÃO para ela parar.
// Diferente do 'for', ele só possui a condição de parada entre parênteses.
// 
// ESTRUTURA BÁSICA:
// let variavel = valorInicial;
// while (condicao) {
//     // código a ser repetido
//     variavel = novoValor; // ATENÇÃO: Atualizar a variável é obrigatório!
// }
// =================================================================================================================

// let i = 1
// while (i <= 5) { 
//     console.log(i)
//     i++
// }

// =========================================================

// let i = 10

// while(i >= 1){
//     console.log(i)
//     i--
// }

// ==========================================================

// let i = 50

//  while(i >= 0){
//      console.log(i)
//      i--
// }

//  ========================================================

