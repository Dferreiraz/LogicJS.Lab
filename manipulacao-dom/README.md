# 🖱️ Manipulação DOM

<p align="center">
  <strong>Seleção de elementos, estilos e interação em tempo real</strong><br>
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

O módulo **Manipulação DOM** coloca em prática a alteração de uma página em tempo real, sem recarregar e sem escrever HTML novo.

Botões e atalhos de teclado modificam a cor do fundo, o texto do parágrafo, o tamanho da imagem e a fonte do título. Um painel de status registra cada ação. O objetivo é mostrar que o JavaScript acessa os elementos da página, lê e escreve propriedades e, com isso, muda a interface.

### 🎯 Objetivos do projeto

- Selecionar elementos com `getElementById` e `querySelectorAll`.
- Alterar estilos diretamente com `element.style`.
- Alterar conteúdo de texto com `textContent` e `innerText`.
- Reagir a eventos de clique e de teclado.
- Organizar configurações em um objeto de temas.
- Manter um estado simples com variáveis booleanas.

---

## ⚙️ Funcionalidades

- [x] Aplicação de três temas de cor (vermelho, verde e azul).
- [x] Atalhos de teclado **R**, **G** e **B** para trocar o tema.
- [x] Alternância do texto do parágrafo.
- [x] Alternância do tamanho da imagem e do título.
- [x] Painel de status atualizado a cada ação.
- [x] Botões configurados com `data-color`.

---

## 🛠 Tecnologias

- **HTML5** — Estrutura e organização do conteúdo.
- **Tailwind CSS** — Estilização e apresentação visual.
- **JavaScript Vanilla (ES6+)** — Manipulação de arrays, objetos, índices, eventos e DOM.

---

## 🧩 Camada compartilhada

O tema visual vem de [`../shared/tailwind-config.js`](../shared/tailwind-config.js), carregado depois do CDN do Tailwind. Cores e tipografia ficam centralizadas para todo o laboratório.

### 🖥️ Status com LogJS

Este módulo não possui um console virtual de linhas. Em vez disso, usa `LogJS.status()`, definido em [`../shared/logger.js`](../shared/logger.js) e carregado antes do `script.js`, para atualizar o painel de estado com um efeito suave de opacidade:

```js
LogJS.status('status-log', `Tema ${colorName.toUpperCase()} aplicado`);
```

Centralizar essa atualização em um único arquivo elimina a duplicação de funções de status (DRY) e mantém o comportamento consistente entre os módulos. Os botões de cor são ligados com `addEventListener()` a partir de `data-color`, e os demais por `id`, sem `onclick` inline, todos com `type="button"` para compatibilidade com a CSP.

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
manipulacao-dom/
│
├── index.html
├── script.js
└── README.md
```

---

## 🧠 Conceitos praticados

**Manipulação do DOM**

- Seleção com `getElementById` e `querySelectorAll`.
- Leitura de atributos `data-*` com `dataset`.
- Alteração de estilo com `element.style`.
- Alteração de texto com `textContent` e `innerText`.
- Organização de temas em um objeto de configuração.

**Eventos e estado**

- Eventos de clique com `addEventListener()`.
- Evento de teclado `keydown` no `document`.
- Controle de estado com variáveis booleanas.
- Atualização de status com feedback visual.

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
