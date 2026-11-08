# 🧮 Calculadora

<p align="center">
  <strong>Calculadora desenvolvida com HTML, CSS e JavaScript</strong><br>
  <em>Front-End • JavaScript Vanilla • Projeto de estudo</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-ES6%2B-yellow?style=flat&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Status-Em%20desenvolvimento-orange" alt="Status">
</p>

---

## 💻 Sobre o projeto

A **Calculadora** é um projeto desenvolvido com HTML, CSS e JavaScript, com o objetivo de praticar os fundamentos do desenvolvimento Front-End e da lógica de programação.

O projeto apresenta uma interface visual de calculadora com botões numéricos e operadores matemáticos, permitindo trabalhar conceitos de estruturação de páginas, estilização e interatividade.

### 🎯 Objetivos do projeto

- Praticar a construção de interfaces com HTML5.
- Aplicar estilos e organizar elementos com CSS3.
- Desenvolver a lógica de operações matemáticas com JavaScript.
- Trabalhar com eventos de clique e manipulação do DOM.
- Compreender a integração entre HTML, CSS e JavaScript.

---

## ⚙️ Funcionalidades

- [x] Interface visual de uma calculadora.
- [x] Botões numéricos e operadores (`+`, `-`, `*`, `/`).
- [x] Limpar display (`C`) e apagar o último caractere.
- [x] Cálculo com precedência de operadores e números decimais.
- [x] Exibição de `Erro` para expressões inválidas ou divisão por zero.

---

## 🔐 Segurança e validação

- A expressão é validada por uma allowlist estrita antes do cálculo: apenas dígitos, `+`, `-`, `*`, `/`, `.` e espaços.
- O cálculo usa um **avaliador matemático próprio**, com precedência de operadores e sinal unário. Não há uso de `eval()` nem `Function()`.
- Divisão por zero e sintaxe inválida (ex.: `5-`, `1..2`) resultam em `Erro` no display.
- Os botões usam `type="button"` e são ligados via `addEventListener()`, sem handlers inline.

---

## 🛠 Tecnologias

- **HTML5** — Estrutura e organização do conteúdo.
- **Tailwind CSS** — Estilização e apresentação visual.
- **JavaScript Vanilla (ES6+)** — Manipulação de arrays, objetos, índices, eventos e DOM.

---

## 🧩 Camada compartilhada

O tema visual vem de [`../shared/tailwind-config.js`](../shared/tailwind-config.js), carregado depois do CDN do Tailwind. Assim, as cores e a tipografia ficam em um único arquivo para todo o laboratório.

Os eventos são registrados com `addEventListener()` no `scripts.js` (sem `onclick` inline), usando os atributos `data-number` e `data-operator` para identificar cada botão. Este módulo não usa console virtual, portanto não depende do `LogJS`; a UI é atualizada diretamente no display.

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

### 3. Abra o projeto

Abra o arquivo `index.html` no navegador ou utilize a extensão **Live Server** no Visual Studio Code para executar o projeto localmente.

---

## 📂 Estrutura do projeto

```text
calculadora/
│
├── index.html
├── scripts.js
└── README.md
```

---

## 👨‍💻 Autor

Desenvolvido por **Davi Roberto de Almeida Ferreira**.

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Dferreiraz)

---

Este projeto faz parte do **LogicJS.Lab**, um laboratório de estudos dedicado à lógica de programação e aos fundamentos do JavaScript Vanilla.