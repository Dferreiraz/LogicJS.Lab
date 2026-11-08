// Configuração central do tema Tailwind (identidade JavaScript).
// Este arquivo é carregado depois do CDN do Tailwind em todas as páginas.
// Centralizar aqui evita manter o mesmo bloco repetido em cada HTML.
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'bg-primary': '#0f172a',
                'bg-secondary': '#1e293b',
                'bg-card': '#1e293b',
                'text-primary': '#f8fafc',
                'text-secondary': '#94a3b8',
                'accent': '#F7DF1E',
                'accent-hover': '#E5CC16',
                'border-color': '#334155',
                'title': '#F7DF1E',
                'code-bg': '#111827',
                'key': '#c678dd',
                'value': '#98c379',
                'keyword': '#c678dd',
                'string': '#98c379',
                'number': '#d19a66',
                'function-name': '#F7DF1E',
                'method': '#61afef',
                'operator': '#61afef',
                'boolean': '#d19a66',
                'type-string': '#98c379',
                'type-number': '#d19a66',
                'type-boolean': '#c678dd',
                'type-null': '#e06c75',
                'type-undef': '#5c6370',
            },
            fontFamily: {
                'main': ['Segoe UI', 'system-ui', '-apple-system', 'sans-serif'],
            }
        },
    },
};
