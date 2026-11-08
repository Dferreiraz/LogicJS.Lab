// Camada compartilhada de logs do LogicJS.Lab.
// Substitui as implementações duplicadas de logToScreen/log/updateStatus.
(function (global) {
    'use strict';

    function resolve(target) {
        return typeof target === 'string' ? document.getElementById(target) : target;
    }

    // Adiciona uma linha "> mensagem" em um console virtual.
    // options.type: 'error' (vermelho) ou 'log' (herda a cor do container, padrão).
    // options.className: permite sobrescrever as classes Tailwind.
    function append(target, message, options = {}) {
        const container = resolve(target);
        if (!container) return;

        const p = document.createElement('p');
        p.textContent = `> ${message}`;

        if (options.className) {
            p.className = options.className;
        } else if (options.type === 'error') {
            p.className = 'text-red-400';
        }

        container.appendChild(p);
        container.scrollTop = container.scrollHeight;
    }

    // Limpa o console virtual e insere o placeholder padrão.
    function clear(target, placeholder = '// Console limpo.') {
        const container = resolve(target);
        if (!container) return;

        container.innerHTML = '';

        const p = document.createElement('p');
        p.className = 'text-gray-500';
        p.textContent = placeholder;
        container.appendChild(p);
    }

    // Atualiza um status curto com efeito de opacidade (usado no manipulacao-dom).
    function status(target, message) {
        const element = resolve(target);
        if (!element) return;

        element.textContent = message;
        element.style.opacity = '0.5';
        setTimeout(() => {
            element.style.opacity = '1';
        }, 200);
    }

    global.LogJS = { append, clear, status };
})(window);
