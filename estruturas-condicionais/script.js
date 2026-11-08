// --- ATIVIDADE 1: Sinal de Trânsito (If / Else) ---
function checkSinal() {
    const sinal = document.getElementById('sinal-input').value;
    const resDiv = document.getElementById('res-sinal');
    let msg = "";
    let color = "";

    if (sinal === "verde") {
        msg = "VAI! Prossiga com segurança.";
        color = "text-green-400";
    } else if (sinal === "amarelo") {
        msg = "ATENÇÃO! Reduza a velocidade.";
        color = "text-yellow-400";
    } else {
        msg = "PARE! Aguarde o sinal abrir.";
        color = "text-red-400";
    }

    resDiv.innerHTML = `<span class="${color} font-bold">${msg}</span>`;
}

// --- ATIVIDADE 2: Verificação de Nota (If / Else If / Else) ---
function checkNota() {
    const nota = Number(document.getElementById('nota-input').value);
    const resDiv = document.getElementById('res-nota');
    let msg = "";
    let color = "";

    if (isNaN(nota)) {
        msg = "Por favor, digite uma nota válida.";
        color = "text-gray-400";
    } else if (nota >= 6) {
        msg = "Aprovado! Parabéns! 🎉";
        color = "text-green-400";
    } else if (nota === 5) {
        msg = "Recuperação - Bateu na trave! 😅";
        color = "text-yellow-400";
    } else {
        msg = "Reprovado - Prepare-se para estudar mais. 📚";
        color = "text-red-400";
    }

    resDiv.innerHTML = `<span class="${color}">${msg}</span>`;
}

// --- ATIVIDADE 3: Dias da Semana (Switch Case) ---
function checkDia() {
    const dia = Number(document.getElementById('dia-input').value);
    const resDiv = document.getElementById('res-dia');
    let nomeDia = "";

    switch (dia) {
        case 1: nomeDia = "Domingo"; break;
        case 2: nomeDia = "Segunda-feira"; break;
        case 3: nomeDia = "Terça-feira"; break;
        case 4: nomeDia = "Quarta-feira"; break;
        case 5: nomeDia = "Quinta-feira"; break;
        case 6: nomeDia = "Sexta-feira"; break;
        case 7: nomeDia = "Sábado"; break;
        default: nomeDia = "Opção inválida (1-7)";
    }

    const isWeekend = (dia === 1 || dia === 7);
    const color = isWeekend ? "text-accent" : "text-text-primary";
    
    resDiv.innerHTML = `<span class="${color} font-bold">${nomeDia}</span>`;
}