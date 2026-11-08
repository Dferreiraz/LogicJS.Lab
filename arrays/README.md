# 📚 Arrays

<p align="center">
  <strong>Manipulação de listas com os métodos essenciais do Array</strong><br>
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

O módulo **Arrays** é um laboratório interativo para praticar as operações mais comuns sobre listas em JavaScript.

Um array de nomes é exibido na tela e pode ser alterado por botões que chamam `push`, `pop`, `unshift` e `shift`. A cada ação, o array atualizado é redesenhado e o console virtual registra o que aconteceu. O botão de `forEach` percorre a lista e imprime uma saudação para cada elemento, mostrando a diferença entre **modificar** a lista e **iterar** sobre ela.

### 🎯 Objetivos do projeto

- Compreender o conceito de array e índice.
- Praticar a adição e a remoção de itens no início e no fim.
- Entender que os métodos alteram o próprio array.
- Percorrer listas com `forEach`.
- Observar o estado da lista após cada operação.

---

## ⚙️ Funcionalidades

- [x] Exibição do array atual formatado como código.
- [x] Adicionar item ao final com `push`.
- [x] Remover o último item com `pop`.
- [x] Adicionar item ao início com `unshift`.
- [x] Remover o primeiro item com `shift`.
- [x] Percorrer o array com `forEach`.
- [x] Console virtual com o histórico das operações.

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
LogJS.append('console-output', `Adicionado "Banana" ao final.`);
LogJS.append('console-output', `Removido "${removed}" do final.`);
```

Centralizar a renderização em um único arquivo elimina a duplicação de funções de log (DRY) e mantém o comportamento consistente entre os módulos. A visualização do array é atualizada com `textContent`, que trata o conteúdo como texto puro e evita a interpretação de HTML. Os botões são ligados com `addEventListener()`, sem `onclick` inline, e usam `type="button"` para compatibilidade com a CSP.

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
arrays/
│
├── index.html
├── script.js
└── README.md
```

---

## 🧠 Conceitos praticados

**Arrays**

- Criação de arrays literais.
- Índices e a propriedade `length`.
- `push` e `pop` (final da lista).
- `unshift` e `shift` (início da lista).
- Iteração com `forEach`.
- Transformação com `map` e `join` para exibição.

**JavaScript e DOM**

- Seleção de elementos com `getElementById`.
- Eventos de clique com `addEventListener()`.
- Atualização de um console virtual.
- Uso de `textContent` para renderização segura.

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
