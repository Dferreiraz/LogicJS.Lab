# ☁️ Consumo de API

<p align="center">
  <strong>Requisições externas com Fetch API, Promises e Async/Await</strong><br>
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

O módulo **Consumo de API** é o primeiro contato do laboratório com dados que não estão no próprio projeto. Ele consome a [Advice Slip API](https://api.adviceslip.com/), um serviço público que devolve conselhos em formato JSON.

A aplicação oferece dois caminhos: buscar um conselho aleatório ou buscar um conselho específico a partir de um número digitado pelo usuário. Em ambos, o JavaScript dispara uma requisição HTTP com `fetch`, aguarda a resposta, converte o corpo para JSON e escreve o texto na tela.

O objetivo é entender o ciclo completo de uma chamada assíncrona — **requisitar → aguardar → converter → renderizar** — e o que fazer quando algo falha no meio do caminho.

### 🎯 Objetivos do projeto

- Compreender o que é uma API e como funciona uma requisição HTTP.
- Realizar requisições com a **Fetch API**.
- Trabalhar com **Promises** e encadeamento de `.then()`.
- Converter a resposta com **`response.json()`**.
- Tratar falhas com **`.catch()`** e, na evolução, com **`try/catch` + `async/await`**.
- Manipular o DOM para exibir o resultado e o estado de carregamento.
- Entender o papel da diretiva `connect-src` da CSP ao chamar domínios externos.

---

## ⚙️ Funcionalidades

- [x] Buscar um conselho aleatório.
- [x] Buscar um conselho por ID informado no formulário.
- [x] Exibir mensagem de carregamento durante a requisição.
- [x] Exibir mensagem de erro quando a requisição falha.
- [x] Formulário com campo numérico obrigatório.
- [x] Interface responsiva com Tailwind CSS.
- [x] Botão de retorno ao menu do laboratório.

---

## 🛠 Tecnologias

- **HTML5** — Estrutura e organização do conteúdo.
- **Tailwind CSS** — Estilização e apresentação visual.
- **JavaScript Vanilla (ES6+)** — Requisições assíncronas, Promises e manipulação do DOM.

---

## 🧩 Camada compartilhada

O tema visual vem de [`../shared/tailwind-config.js`](../shared/tailwind-config.js), carregado depois do CDN do Tailwind. Cores e tipografia ficam centralizadas para todo o laboratório.

O laboratório possui uma API unificada de logs, o `LogJS`, definida em [`../shared/logger.js`](../shared/logger.js). Este módulo carrega a camada, mas **não usa console virtual**: o retorno da API é escrito diretamente no elemento `#conselho`. Por isso, a atualização da interface acontece no próprio `script.js`.

Os botões e o formulário são ligados com `addEventListener()`, sem `onclick` inline. A requisição para um domínio externo depende da diretiva `connect-src` da Content Security Policy, que autoriza o host da API.

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

> Como a página faz requisições a um domínio externo, execute-a por um servidor local (Live Server) e confirme que há conexão com a internet.

---

## 📂 Estrutura do projeto

```text
consumo-api/
│
├── index.html
├── script.js
└── README.md
```

---

## 🧠 Conceitos praticados

**Requisições e assincronismo**

- **Fetch API** — `fetch(url)` inicia a requisição e devolve uma `Promise`.
- **Promises** — estados `pending`, `fulfilled` e `rejected`, com encadeamento de `.then()`.
- **Async/Await** — forma equivalente de escrever o mesmo fluxo com leitura linear; é a evolução natural do encadeamento de `.then()`.
- **Try/Catch** — captura de erros em funções `async`, substituindo o `.catch()` ao final da cadeia.
- **Conversão de JSON** — `response.json()` lê o corpo da resposta e devolve um objeto JavaScript.
- **Tratamento de erros** — verificação de falha de rede, de status HTTP e de corpo inválido.

**JavaScript e DOM**

- Seleção de elementos com `getElementById`.
- Eventos de clique e de submit com `addEventListener()`.
- Atualização de texto no elemento de resultado.
- `e.preventDefault()` para controlar o envio do formulário.
- Estado de carregamento e mensagens de feedback.

**Segurança**

- Content Security Policy com `connect-src` restringindo as origens de rede.
- Sem handlers inline (`onclick`), mantendo o comportamento no `script.js`.

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
