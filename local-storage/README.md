# 💾 Local Storage

<p align="center">
  <strong>Persistência de dados no navegador com Web Storage API e JSON</strong><br>
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

O módulo **Local Storage** fecha a base fundamental do laboratório com o primeiro contato do projeto com **persistência de dados**. A aplicação é uma lista de tarefas (To-Do List) que mantém o estado no navegador: ao adicionar, concluir ou excluir uma tarefa, o array de objetos é convertido em JSON e gravado na **Web Storage API**.

O diferencial em relação aos módulos anteriores é que os dados sobrevivem ao recarregamento da página. O `script.js` mantém um array no formato `{ id, texto, concluida }`, salva o array com `localStorage.setItem()` e o recupera com `localStorage.getItem()` ao iniciar a aplicação.

A renderização é feita inteiramente com `document.createElement()` e `.textContent`. Como o texto da tarefa vem do usuário, essa escolha evita que marcações como `<img onerror="...">` sejam interpretadas como HTML, protegendo a aplicação contra **XSS**.

### 🎯 Objetivos do projeto

- Compreender a **Web Storage API** e o `localStorage`.
- Serializar e desserializar dados com **`JSON.stringify()`** e **`JSON.parse()`**.
- Implementar um **CRUD completo no Front-end**.
- Manter o estado da aplicação em um **array de objetos**.
- Renderizar listas dinamicamente com **manipulação segura do DOM**.
- Tratar dados corrompidos ou ausentes no armazenamento.

---

## ⚙️ Funcionalidades

- [x] Adicionar tarefa com texto informado pelo usuário.
- [x] Marcar tarefa como concluída ou pendente.
- [x] Excluir tarefa da lista.
- [x] Persistir todas as alterações no `localStorage`.
- [x] Carregar as tarefas salvas ao abrir a página.
- [x] Contador de tarefas concluídas.
- [x] Estado vazio quando não há tarefas.
- [x] Validação de campo vazio e limite de 120 caracteres.
- [x] Renderização com `createElement` e `textContent`.
- [x] Interface responsiva com Tailwind CSS e alvos de toque de no mínimo 44px.
- [x] Botão de retorno ao menu do laboratório.

---

## 🛠 Tecnologias

- **HTML5** — Estrutura e organização do conteúdo.
- **Tailwind CSS** — Estilização e apresentação visual.
- **JavaScript Vanilla (ES6+)** — Estado, eventos, DOM e persistência com Web Storage API.

---

## 🧩 Camada compartilhada

O tema visual vem de [`../shared/tailwind-config.js`](../shared/tailwind-config.js), carregado depois do CDN do Tailwind. Cores e tipografia ficam centralizadas para todo o laboratório.

Este módulo **não usa console virtual**: o estado da lista é a própria interface. Por isso, não é necessário carregar o `logger.js`. Os eventos são registrados com `addEventListener()`, sem `onclick` inline, e todos os botões usam `type="button"` — exceto o botão de envio do formulário, que é `type="submit"` e é tratado pelo evento `submit`.

O favicon do módulo é o SVG [`../shared/assets/local-storage.svg`](../shared/assets/local-storage.svg), declarado com `type="image/svg+xml"`.

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

> A Web Storage API é específica de cada navegador e origem. Para testar a persistência com o comportamento esperado, execute o projeto por um servidor local (Live Server) em vez de abrir o arquivo diretamente via `file://`.

---

## 📂 Estrutura do projeto

```text
local-storage/
│
├── index.html
├── script.js
└── README.md
```

---

## 🧠 Conceitos praticados

**Web Storage API (LocalStorage)**

- `localStorage.setItem(chave, valor)` para gravar dados.
- `localStorage.getItem(chave)` para recuperar dados.
- Persistência por origem (protocolo, domínio e porta).
- Dados que sobrevivem ao recarregamento e ao fechamento da aba.
- Tratamento de falhas com `try/catch` (modo privado ou armazenamento indisponível).

**JSON (`stringify` / `parse`)**

- `JSON.stringify()` para converter o array de objetos em texto.
- `JSON.parse()` para reconstruir o array a partir do texto salvo.
- Validação do formato antes de usar os dados.
- Filtragem de registros corrompidos para não quebrar a interface.

**CRUD no Front-end**

- **Create** — adicionar tarefa com `push`.
- **Read** — carregar e renderizar a lista.
- **Update** — alternar o status com `map`.
- **Delete** — remover com `filter`.
- Sincronização entre estado, armazenamento e interface.

**Proteção contra XSS via manipulação segura do DOM**

- Criação de elementos com `document.createElement()`.
- Inserção de texto do usuário com `.textContent`, nunca `innerHTML`.
- Limpeza da lista com `replaceChildren()`.
- Atributos estáticos em `setAttribute()` para acessibilidade.
- Eventos com `addEventListener()`, sem `onclick` inline.

**JavaScript e DOM**

- Seleção de elementos com `getElementById`.
- Evento de `submit` com `preventDefault()`.
- Delegação de comportamento por botão criado dinamicamente.
- Uso de `dataset` para associar cada botão ao `id` da tarefa.
- Atributos `aria-label` e `aria-pressed` para acessibilidade.
- Atualização de contadores e estado vazio.

**Desenvolvimento Front-End**

- Estruturação com HTML5.
- Estilização com Tailwind CSS.
- Layout Mobile-First e alvos de toque de no mínimo 44px.
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
