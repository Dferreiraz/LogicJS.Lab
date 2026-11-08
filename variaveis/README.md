# 📦 Variáveis

<p align="center">
  <strong>Entendendo var, let e const na prática</strong><br>
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

O módulo **Variáveis** é uma demonstração interativa das três formas de declarar variáveis em JavaScript: `var`, `let` e `const`.

A página mostra, por meio de botões, o comportamento de cada declaração: reatribuição de valores, escopo de bloco e a imutabilidade de uma constante. O objetivo é tornar visível a diferença entre as palavras-chave, que costuma ser apenas teórica nos primeiros contatos com a linguagem.

### 🎯 Objetivos do projeto

- Compreender o papel de `var`, `let` e `const`.
- Praticar reatribuição de valores.
- Entender o conceito de escopo de bloco.
- Observar o erro gerado ao tentar reatribuir uma constante.
- Relacionar variáveis com a atualização dinâmica da interface.

---

## ⚙️ Funcionalidades

- [x] Botão para testar `var` com reatribuição de valor.
- [x] Botão para testar `let` e seu escopo de bloco.
- [x] Botão para testar `const` e a tentativa de reatribuição.
- [x] Console virtual com o resultado de cada teste.
- [x] Destaque em vermelho para mensagens de erro.

---

## 🛠 Tecnologias

- **HTML5** — Estrutura e organização do conteúdo.
- **Tailwind CSS** — Estilização e apresentação visual.
- **JavaScript Vanilla (ES6+)** — Manipulação de arrays, objetos, índices, eventos e DOM.

---

## 🧩 Camada compartilhada

O tema visual vem de [`../shared/tailwind-config.js`](../shared/tailwind-config.js), carregado depois do CDN do Tailwind. Cores e tipografia ficam centralizadas para todo o laboratório.

### 🖥️ Console virtual com LogJS

A saída de dados deste módulo usa a API unificada `LogJS`, definida em [`../shared/logger.js`](../shared/logger.js) e carregada antes do `script.js`:

```js
LogJS.append('console-output', 'mensagem');
LogJS.append('console-output', 'falha', { type: 'error' });
LogJS.clear('console-output');
```

Centralizar a renderização em um único arquivo elimina a duplicação de funções de log (DRY) e mantém o comportamento consistente entre os módulos. Os botões são ligados com `addEventListener()`, sem `onclick` inline, e usam `type="button"` para compatibilidade com a CSP.

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
variaveis/
│
├── index.html
├── script.js
└── README.md
```

---

## 🧠 Conceitos praticados

**Declaração de variáveis**
- `var` e o escopo de função.
- `let` e o escopo de bloco.
- `const` e a imutabilidade da referência.
- Reatribuição e leitura de valores.

**JavaScript e DOM**
- Seleção de botões com `getElementById`.
- Eventos de clique com `addEventListener()`.
- Atualização de um console virtual.
- Uso de template literals para compor mensagens.

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
