# 🗂️ Estrutura de Dados

<p align="center">
  <strong>Arrays de objetos, validação e renderização de registros</strong><br>
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

O módulo **Estrutura de Dados** simula um pequeno cadastro: um formulário adiciona pessoas a um **array de objetos**, e a lista é redesenhada na tela a cada inclusão.

Cada registro possui `nome`, `idade` e `email`. Antes de inserir, os dados passam por validações — nome obrigatório e limitado, idade inteira entre 1 e 120 e e-mail em formato válido. Os cards são construídos com `document.createElement()` e preenchidos com `textContent`, sem interpolar dados do usuário em `innerHTML`.

### 🎯 Objetivos do projeto

- Compreender a diferença entre array e objeto.
- Modelar registros com propriedades.
- Adicionar objetos a um array com `push`.
- Validar dados antes de persistir.
- Renderizar listas dinamicamente.
- Aplicar boas práticas de segurança na renderização.

---

## ⚙️ Funcionalidades

- [x] Cadastro de nome, idade e e-mail.
- [x] Validação de nome obrigatório (máximo de 80 caracteres).
- [x] Validação de idade inteira entre 1 e 120.
- [x] Validação de e-mail com expressão regular.
- [x] Contador de registros atualizado automaticamente.
- [x] Cards gerados com `createElement` e `textContent`.
- [x] Console de ações com mensagens de erro e confirmação.
- [x] Estado vazio tratado quando não há registros.

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
LogJS.append('console-log', `Adicionado ao array no índice [${bancoDeDados.length - 1}]`);
LogJS.append('console-log', 'Erro: informe um e-mail válido (ex: nome@dominio.com)!');
```

Centralizar a renderização em um único arquivo elimina a duplicação de funções de log (DRY) e mantém o comportamento consistente entre os módulos. Os cards usam `createElement` e `textContent`, que tratam o conteúdo como texto puro e evitam XSS. O botão é ligado com `addEventListener()`, sem `onclick` inline, e usa `type="button"` para compatibilidade com a CSP.

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
estrutura-dados/
│
├── index.html
├── script.js
└── README.md
```

---

## 🧠 Conceitos praticados

**Estruturas de dados**

- Arrays de objetos.
- Propriedades e acesso por ponto.
- Inserção com `push` e leitura por índice.
- Iteração com `forEach`.
- Atualização do estado da aplicação.

**Validação e segurança**

- Expressão regular para e-mail.
- `Number.isInteger` para idades inteiras.
- Limite de tamanho para o nome.
- Rejeição de campos vazios.
- Renderização com `createElement` e `textContent`.

**JavaScript e DOM**

- Seleção de inputs e containers.
- Eventos de clique com `addEventListener()`.
- Limpeza e repopulação de listas.
- Atualização de contadores na interface.

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
