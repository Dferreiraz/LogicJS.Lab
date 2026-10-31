// ==========================================
// ESTRUTURAS CONDICIONAIS - Desenvolvimento em JS - Senai Suiço-brasileiro
// Servem para o software tomar decisões
// ==========================================

// ---------------------------------------------------------
// ATIVIDADE 1: If / Else Básico (Sinal de Trânsito)
// ---------------------------------------------------------
console.log("=== ATIVIDADE 1: SINAL DE TRÂNSITO ===");

let sinal = "verde";

if (sinal === "verde") {
    console.log("VAI");
} else {
    console.log("PARE");
}


// ---------------------------------------------------------
// ATIVIDADE 2: If / Else If / Else (Verificação de Nota)
// ---------------------------------------------------------
console.log("\n=== ATIVIDADE 2: VERIFICAÇÃO DE NOTA ===");

let nota = 7;

if (nota >= 6) {
    console.log("Aprovado! Parabéns!");
} else if (nota === 5) {
    console.log("Recuperação - Bateu na trave!");
} else {
    console.log("Reprovado - Prepare-se para ver os mesmos professores ano que vem.");
}


// ---------------------------------------------------------
// ATIVIDADE 3: Switch Case (Dias da Semana)
// ---------------------------------------------------------
console.log("\n=== ATIVIDADE 3: DIAS DA SEMANA (SWITCH) ===");

let dia = 1;

switch (dia) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-feira");
        break;
    case 3:
        console.log("Terça-feira");
        break;
    case 4:
        console.log("Quarta-feira");
        break;
    case 5:
        console.log("Quinta-feira");
        break;
    case 6:
        console.log("Sexta-feira");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Opção inválida. Digite um número de 1 a 7.");
}


// ---------------------------------------------------------
// ATIVIDADE 4: Switch Case (Cores do Semáforo)
// ---------------------------------------------------------
console.log("\n=== ATIVIDADE 4: CORES DO SEMÁFORO (SWITCH) ===");

// A variável representa o estado ATUAL do semáforo (apenas um)
// Tente mudar para "Vermelho" ou "Amarelo" e veja o resultado mudar
let semaforo = "Verde"; 

switch (semaforo) {
    case "Vermelho": 
        console.log("Pare! Espere o sinal abrir.");
        break;
    case "Amarelo":
        console.log("Atenção! Se for passar, tenha cuidado.");
        break;
    case "Verde":
        console.log("Prossiga! Avance.");
        break;
    default:
        console.log("Tá vendo outra cor? Daltônico?");
}


// ---------------------------------------------------------
// ATIVIDADE 4: Switch Case (Cores do Semáforo)
// ---------------------------------------------------------
