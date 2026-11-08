<h1 align="center">
  🧪 LogicJS.Lab
</h1>

<p align="center">
  <strong>Laboratório de Lógica de Programação com JavaScript</strong><br>
  <em>Front-End • Vanilla JavaScript • Em evolução</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black" alt="JavaScript ES6+">
  <img src="https://img.shields.io/badge/Status-Em_desenvolvimento-orange?style=flat" alt="Status">
</p>

<p align="center">
  •
  <a href="#-sobre-o-projeto">Sobre</a> •
  <a href="#-projetos">Projetos</a> •
  <a href="#-arquitetura-compartilhada">Arquitetura</a> •
  <a href="#-segurança">Segurança</a> •
  <br>
  •
  <a href="#-como-executar-o-projeto">Como executar</a> •
  <a href="#-tecnologias">Tecnologias</a> •
  <a href="#-estrutura-do-projeto">Estrutura</a> •
  <a href="#-autor">Autor</a> •
</p>

---

## 💻 Sobre o projeto

O **LogicJS.Lab** é um laboratório de estudos dedicado à lógica de programação e aos fundamentos do JavaScript Vanilla.

O projeto reúne miniaplicações interativas desenvolvidas para praticar conceitos essenciais do desenvolvimento Front-End, desde operações matemáticas e estruturas condicionais até manipulação do DOM, gerenciamento de eventos e atualização dinâmica da interface.

A proposta é consolidar os fundamentos da programação por meio de projetos pequenos, progressivos e funcionais, construindo uma base sólida para o desenvolvimento de aplicações web mais complexas.

### 🎯 Objetivos do projeto

- Desenvolver o raciocínio lógico e a capacidade de resolver problemas.
- Praticar JavaScript sem depender de frameworks JavaScript.
- Compreender a manipulação do DOM e o gerenciamento de eventos.
- Trabalhar com arrays, objetos, condições e funções.
- Aplicar conceitos de HTML e CSS em aplicações interativas.
- Registrar a evolução dos estudos por meio de projetos práticos.
- Construir uma base para avançar futuramente para frameworks e aplicações mais complexas.

---

## 🚀 Projetos

O laboratório reúne **16 miniaplicações**, cada uma com foco em conceitos específicos da programação.

| Projeto | Conceitos principais | Acessar |
|---|---|---|
| **Calculadora** | Operações matemáticas, validação de expressões e avaliador próprio (sem `eval`). | [Abrir](./calculadora/index.html) |
| **Color Changer** | Manipulação do DOM, eventos e alteração dinâmica de estilos. | [Abrir](./color-changer/index.html) |
| **Counter** | Variáveis, eventos, controle de estado e atualização da interface. | [Abrir](./counter/index.html) |
| **Jogo do Clique** | Eventos de mouse, posicionamento absoluto e tempo de reação. | [Abrir](./jogo-do-clique/index.html) |
| **Reviews** | Arrays de objetos, índices e navegação dinâmica entre avaliações. | [Abrir](./reviews/index.html) |
| **Variáveis** | `var`, `let` e `const`, escopo e reatribuição. | [Abrir](./variaveis/index.html) |
| **Funções** | Parâmetros, retorno e reutilização de blocos de código. | [Abrir](./funcoes/index.html) |
| **Arrays** | `push`, `pop`, `unshift`, `shift` e `forEach`. | [Abrir](./arrays/index.html) |
| **Operadores** | Aritmética, comparação e lógica booleana (`AND`, `OR`, `NOT`). | [Abrir](./operadores/index.html) |
| **Loops & Repetição** | `for` e `while` para automatizar tarefas e percorrer dados. | [Abrir](./estrutura-de-repeticao/index.html) |
| **Condicionais** | `if/else`, `else if` e `switch case` em cenários reais. | [Abrir](./estruturas-condicionais/index.html) |
| **Estrutura de Dados** | Arrays de objetos, validação e renderização segura de registros. | [Abrir](./estrutura-dados/index.html) |
| **Tipos de Dados** | `typeof`, `String`, `Number`, `Boolean`, `null` e `undefined`. | [Abrir](./tipo-de-dados/index.html) |
| **Manipulação DOM** | Seleção de elementos, estilos, teclado e atualização em tempo real. | [Abrir](./manipulacao-dom/index.html) |
| **Consumo de API** | Requisições externas com Fetch API, Promises, `async/await` e tratamento de erros. | [Abrir](./consumo-api/index.html) |
| **Local Storage** | Persistência no navegador com Web Storage API, JSON (`stringify`/`parse`) e CRUD no Front-end. | [Abrir](./local-storage/index.html) |

---

## 🧩 Arquitetura compartilhada

A partir da refatoração DRY, o que era repetido em cada página foi centralizado na pasta [`shared/`](./shared):

```text
shared/
├── tailwind-config.js   → tema Tailwind único (cores e tipografia)
├── logger.js            → utilitário global LogJS
└── assets/              → 18 SVGs (favicons e ícones de interface)
```

### Tema Tailwind centralizado

Cada HTML carrega o CDN do Tailwind e, logo depois, o mesmo arquivo de configuração:

```html
<script src="https://cdn.tailwindcss.com"></script>
<script src="../shared/tailwind-config.js"></script>
```

Na página inicial (`index.html`), o caminho é `./shared/tailwind-config.js`. O tema é um superset de todas as configurações que antes estavam duplicadas em cada `<head>`.

### Logger compartilhado (`LogJS`)

Os módulos que possuem console virtual usam a API global definida em [`shared/logger.js`](./shared/logger.js):

```js
LogJS.append('console-output', 'mensagem');        // linha padrão
LogJS.append('console-output', 'falha', { type: 'error' }); // linha vermelha
LogJS.clear('console-output');                     // limpa o console
LogJS.status('status-log', 'Tema aplicado');       // status com fade
```

Módulos que usam o logger: `variaveis`, `funcoes`, `arrays`, `estrutura-dados`, `estrutura-de-repeticao` e `manipulacao-dom`. O `logger.js` é sempre carregado **antes** do `script.js` da página.

### Assets centralizados

Todos os favicons e ícones de interface ficam em `shared/assets/`. Os HTMLs referenciam, por exemplo:

```html
<link rel="shortcut icon" href="../shared/assets/arrays.svg" type="image/x-icon">
```

---

## 🔐 Segurança

As páginas aplicam um conjunto de práticas defensivas compatíveis com a execução estática no navegador:

### Content Security Policy (CSP)

Todos os 17 HTMLs possuem uma meta tag de CSP no `<head>`, restringindo as origens permitidas:

- `script-src`: apenas o próprio site e o CDN do Tailwind.
- `style-src` / `font-src`: o próprio site e o CDN dos ícones Phosphor.
- `img-src`: o próprio site e o serviço de imagens placeholder.
- `object-src 'none'`, `base-uri 'self'` e `form-action 'self'`.

### Proteção contra XSS

- Os dados de usuário **não são interpolados em `innerHTML`**.
- Cards e resultados são montados com `document.createElement()` e preenchidos com `.textContent`, que trata o conteúdo como texto puro.
- A renderização de listas em `estrutura-dados`, `arrays`, `estruturas-condicionais` e `local-storage` segue esse padrão.

### Validador matemático customizado

- A calculadora **não usa `eval()` nem `Function()`**.
- A expressão passa por uma allowlist estrita (apenas dígitos, `+`, `-`, `*`, `/`, `.` e espaços) e é resolvida por um avaliador próprio, com precedência de operadores, sinal unário e tratamento de divisão por zero.
- Entradas inválidas exibem `Erro` no display e abortam o cálculo.

### Validação de entrada

- E-mail com regex simples; nome obrigatório e limitado.
- Idade inteira entre 1 e 120 (`Number.isInteger`).
- Conversões numéricas verificadas com `Number.isFinite()` e `Number.isNaN()`.
- Campos vazios ou não numéricos são rejeitados antes de qualquer cálculo.

### Sem handlers inline

- Nenhum `onclick=""` no HTML.
- Os eventos são registrados com `addEventListener()` no JavaScript.
- Todos os botões possuem `type="button"`.

---

## 🧠 Conceitos praticados

**Lógica de programação**
- Variáveis e tipos de dados.
- Operadores aritméticos e lógicos.
- Estruturas condicionais.
- Funções e parâmetros.
- Loops e iteração.

**JavaScript e DOM**
- Seleção e manipulação de elementos.
- Event listeners e eventos de interação.
- Atualização dinâmica do conteúdo.
- Arrays e objetos.
- Índices e navegação entre dados.
- Controle de estado simples.
- Criação segura de elementos com `createElement` e `textContent`.

**Persistência de dados**
- Web Storage API (`localStorage`).
- Serialização e desserialização com `JSON.stringify` e `JSON.parse`.
- CRUD no Front-end e estado que sobrevive ao recarregamento.

**Desenvolvimento Front-End**
- Estruturação com HTML5.
- Estilização com Tailwind CSS.
- Organização de arquivos e camada compartilhada.
- Construção de interfaces interativas.
- Separação entre estrutura, estilo e comportamento.

---

## 🛠 Tecnologias

### Front-End

- **HTML5** — Estrutura e organização do conteúdo.
- **Tailwind CSS** — Estilização e apresentação visual.
- **JavaScript Vanilla (ES6+)** — Manipulação de arrays, objetos, índices, eventos e DOM.
- **Phosphor Icons** — Ícones da interface (carregados via CSS, versão fixada).

### Ferramentas

- **Visual Studio Code** — Ambiente de desenvolvimento.
- **Live Server** — Execução local das páginas durante o desenvolvimento.
- **Git** — Controle de versão.
- **GitHub** — Hospedagem do código e acompanhamento da evolução do projeto.

---

## 🚀 Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/Dferreiraz/LogicJS.Lab.git
```

### 2. Entre na pasta do projeto

```bash
cd LogicJS.Lab
```

### 3. Abra o projeto

Abra a pasta no Visual Studio Code:

```bash
code .
```

### 4. Execute no navegador

Abra o arquivo `index.html` localizado na raiz do projeto.

Você também pode utilizar a extensão **Live Server** no VS Code para executar a página localmente e facilitar os testes durante o desenvolvimento.

> Como os HTMLs carregam scripts e estilos locais (`shared/`), execute o projeto por um servidor local (Live Server) em vez de abrir o arquivo diretamente via `file://`.

Depois, navegue pelo menu principal para acessar os mini-projetos ou abra diretamente o `index.html` da pasta desejada.

---

## 📂 Estrutura do projeto

```text
LogicJS.Lab/
│
├── index.html
├── README.md
│
├── shared/
│   ├── tailwind-config.js
│   ├── logger.js
│   └── assets/
│       └── *.svg
│
├── calculadora/
│   ├── index.html
│   ├── scripts.js
│   └── README.md
│
├── color-changer/
│   ├── index.html
│   ├── script.js
│   └── README.md
│
├── counter/
│   ├── index.html
│   ├── script.js
│   └── README.md
│
├── jogo-do-clique/
│   ├── index.html
│   ├── script.js
│   └── README.md
│
├── reviews/
│   ├── index.html
│   ├── script.js
│   └── README.md
│
├── variaveis/
│   ├── index.html
│   └── script.js
│
├── funcoes/
│   ├── index.html
│   └── script.js
│
├── arrays/
│   ├── index.html
│   └── script.js
│
├── operadores/
│   ├── index.html
│   └── script.js
│
├── estrutura-de-repeticao/
│   ├── index.html
│   └── script.js
│
├── estruturas-condicionais/
│   ├── index.html
│   └── script.js
│
├── estrutura-dados/
│   ├── index.html
│   └── script.js
│
├── tipo-de-dados/
│   ├── index.html
│   └── script.js
│
├── manipulacao-dom/
│   ├── index.html
│   └── script.js
│
├── consumo-api/
│   ├── index.html
│   ├── script.js
│   └── README.md
│
└── local-storage/
    ├── index.html
    ├── script.js
    └── README.md
```

---

## 👨‍💻 Autor

Desenvolvido por **Davi Ferreira** como parte da jornada de aprendizado em desenvolvimento Front-End.

<p>
  <a href="https://github.com/Dferreiraz">
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
  </a>
  <a href="https://br.linkedin.com/in/davirobertoferreira">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn">
  </a>
</p>
