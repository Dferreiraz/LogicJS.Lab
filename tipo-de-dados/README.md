# 🧬 Tipos de Dados

<p align="center">
  <strong>Descobrindo o tipo de qualquer valor com typeof</strong><br>
  <em>Front-End • JavaScript Vanilla • Projeto de estudo</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-ES6%2B-yellow?style=flat&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Status-Em%20desenvolvimento-orange" alt="Status">
</p>

<p align="center">
  <a href="#-sobre-o-projeto">Sobre</a> •
  <a href="#-funcionalidades">Funcionalidades</a> •
  <a href="#-como-executar-o-projeto">Como executar</a> •
  <a href="#-tecnologias">Tecnologias</a>
  <br>
  <a href="#-estrutura-do-projeto">Estrutura</a> •
  <a href="#-conceitos-praticados">Aprendizados</a> •
  <a href="#-autor">Autor</a>
</p>

---

## 💻 Sobre o projeto

O módulo **Tipos de Dados** é um analisador interativo de tipos primitivos do JavaScript.

O usuário digita um valor e o módulo decide como interpretá-lo: números decimais viram `number`, `true` e `false` viram `boolean`, `null` e `undefined` são reconhecidos explicitamente e todo o restante permanece `string`. O resultado aparece com o nome do tipo e uma cor própria, acompanhado de um guia rápido com exemplos de `String`, `Number`, `Boolean`, `null` e `undefined`.

### 🎯 Objetivos do projeto

- Compreender os tipos primitivos do JavaScript.
- Utilizar `typeof` para inspecionar valores.
- Entender a diferença entre `null` e `undefined`.
- Reconhecer que `typeof null` retorna `"object"`.
- Evitar coerções implícitas com `Number.isNaN()` e `Number.isFinite()`.
- Relacionar tipo de dado com a apresentação visual.

---

## ⚙️ Funcionalidades

- [x] Campo de texto para analisar qualquer valor.
- [x] Detecção de `string`, `number`, `boolean`, `object` e `undefined`.
- [x] Reconhecimento explícito de `null` e `undefined` digitados.
- [x] Validação de números decimais com expressão regular.
- [x] Resultado colorido por tipo.
- [x] Análise ao clicar no botão ou pressionar **Enter**.
- [x] Guia rápido com exemplos de cada tipo.

---

## 🛠 Tecnologias

- **HTML5** — Estrutura e organização do conteúdo.
- **Tailwind CSS** — Estilização e apresentação visual.
- **JavaScript Vanilla (ES6+)** — Manipulação de arrays, objetos, índices, eventos e DOM.

---

## 🧩 Camada compartilhada

O tema visual vem de [`../shared/tailwind-config.js`](../shared/tailwind-config.js), carregado depois do CDN do Tailwind. Cores e tipografia ficam centralizadas para todo o laboratório.

O laboratório possui uma API unificada de logs, o `LogJS`, definida em [`../shared/logger.js`](../shared/logger.js) e usada pelos módulos que têm console virtual. **Este módulo não usa console virtual**: o tipo identificado é escrito diretamente em `result-type` e em `result-label`, dentro do bloco de resultado. Por isso, o `logger.js` não é carregado nesta página.

A conversão é feita com `Number()` e só é aceita quando o texto corresponde ao padrão `^[+-]?(\d+(\.\d+)?|\.\d+)$` e o resultado passa em `Number.isNaN()` e `Number.isFinite()`. Isso evita casos como `0x10`, `Infinity` e notação científica. A interface é atualizada com `textContent`, sem interpretar HTML. O botão usa `addEventListener()`, sem `onclick` inline, e `type="button"` para compatibilidade com a CSP.

---

## 🚀 Como executar o projeto

### 1. Clone o repositório

```bash
git clone URL_DO_REPOSITORIO
```

### 2. Entre na pasta do projeto

```bash
cd NOME_DO_REPOSITORIO
```

### 3. Execute a aplicação

Abra o arquivo `index.html` no navegador ou utilize a extensão **Live Server** no Visual Studio Code para executar o projeto localmente.

---

## 📂 Estrutura do projeto

```text
tipo-de-dados/
│
├── index.html
├── script.js
└── README.md
```

---

## 🧠 Conceitos praticados

**Tipos de dados**

- `String`, `Number`, `Boolean`, `null` e `undefined`.
- O operador `typeof`.
- Coerção explícita com `Number()`.
- `Number.isNaN()` versus o `isNaN()` global.
- `Number.isFinite()` para rejeitar infinitos.
- O caso especial `typeof null === "object"`.

**JavaScript e DOM**

- Leitura de input com `.value` e `.trim()`.
- Expressões regulares para validar o formato.
- `switch` para escolher a cor de cada tipo.
- Atualização de texto com `textContent`.
- Eventos `click` e `keydown` com `addEventListener()`.

**Desenvolvimento Front-End**

- Estruturação com HTML5.
- Estilização com Tailwind CSS.
- Separação entre HTML, JavaScript e a camada compartilhada.

---

## 👨‍💻 Autor

Desenvolvido por **Davi Roberto de Almeida Ferreira**.

<p>
  <a href="https://github.com/Dferreiraz">
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
  </a>
  <a href="https://br.linkedin.com/in/davirobertoferreira">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn">
  </a>
</p>

---

Este projeto faz parte do **LogicJS.Lab**, um laboratório de estudos dedicado à lógica de programação e aos fundamentos do JavaScript Vanilla.
