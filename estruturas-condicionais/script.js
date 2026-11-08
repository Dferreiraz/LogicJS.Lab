// --- Função auxiliar: renderiza a mensagem sem usar innerHTML ---
function renderResultado(container, mensagem, classeCor) {
    container.replaceChildren();

    const span = document.createElement('span');
    span.className = classeCor;
    span.textContent = mensagem;
    container.appendChild(span);
}

// --- ATIVIDADE 1: Sinal de Trânsito (If / Else) ---
function checkSinal() {
    const sinal = document.getElementById('sinal-input').value.trim().toLowerCase();
    const resDiv = document.getElementById('res-sinal');
    let msg = "";
    let color = "";

    if (sinal === "verde") {
        msg = "VAI! Prossiga com segurança.";
        color = "text-green-400";
    } else if (sinal === "amarelo") {
        msg = "ATENÇÃO! Reduza a velocidade.";
        color = "text-yellow-400";
    } else if (sinal === "vermelho") {
        msg = "PARE! Aguarde o sinal abrir.";
        color = "text-red-400";
    } else {
        msg = "Sinal inválido. Escolha verde, amarelo ou vermelho.";
        color = "text-gray-400";
    }

    renderResultado(resDiv, msg, `${color} font-bold`);
}

// --- ATIVIDADE 2: Verificação de Nota (If / Else If / Else) ---
function checkNota() {
    const rawNota = document.getElementById('nota-input').value.trim();
    const nota = Number(rawNota);
    const resDiv = document.getElementById('res-nota');
    let msg = "";
    let color = "";

    // Number('') retorna 0; validamos o texto e usamos Number.isFinite.
    if (rawNota === '' || !Number.isFinite(nota)) {
        msg = "Por favor, digite uma nota válida.";
        color = "text-gray-400";
    } else if (nota < 0 || nota > 10) {
        msg = "A nota deve estar entre 0 e 10.";
        color = "text-red-400";
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

    renderResultado(resDiv, msg, color);
}

// --- ATIVIDADE 3: Dias da Semana (Switch Case) ---
function checkDia() {
    const rawDia = document.getElementById('dia-input').value.trim();
    const dia = Number(rawDia);
    const resDiv = document.getElementById('res-dia');
    let nomeDia = "";
    let color = "text-text-primary";

    // Rejeita vazio, valores não numéricos, decimais e fora do intervalo 1-7.
    if (rawDia === '' || !Number.isFinite(dia) || !Number.isInteger(dia) || dia < 1 || dia > 7) {
        nomeDia = "Opção inválida (1-7)";
        color = "text-red-400";
    } else {
        switch (dia) {
            case 1: nomeDia = "Domingo"; break;
            case 2: nomeDia = "Segunda-feira"; break;
            case 3: nomeDia = "Terça-feira"; break;
            case 4: nomeDia = "Quarta-feira"; break;
            case 5: nomeDia = "Quinta-feira"; break;
            case 6: nomeDia = "Sexta-feira"; break;
            case 7: nomeDia = "Sábado"; break;
        }

        const isWeekend = (dia === 1 || dia === 7);
        color = isWeekend ? "text-accent" : "text-text-primary";
    }

    renderResultado(resDiv, nomeDia, `${color} font-bold`);
}

// Liga os botões aos eventos (sem onclick inline, compatível com CSP)
document.getElementById('btn-check-sinal').addEventListener('click', checkSinal);
document.getElementById('btn-check-nota').addEventListener('click', checkNota);
document.getElementById('btn-check-dia').addEventListener('click', checkDia);
