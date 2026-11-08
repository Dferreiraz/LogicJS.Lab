# 🧩 Funções

<p align="center">
  <strong>Parâmetros, retorno e reutilização de código</strong><br>
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

O módulo **Funções** demonstra como encapsular uma regra de negócio em um bloco reutilizável, capaz de receber dados de entrada (parâmetros) e devolver um resultado (retorno).

A página apresenta três funções pequenas e independentes: `triplo`, `nomeCompleto` e `celsiusParaFahrenheit`. Cada botão executa uma delas com valores fixos e mostra o retorno no console virtual, tornando visível a diferença entre **definir** uma função e **chamar** uma função.

### 🎯 Objetivos do projeto

- Compreender a diferença entre declarar e invocar uma função.
- Praticar a passagem de parâmetros.
- Entender o papel da instrução `return`.
- Reutilizar a mesma função com entradas diferentes.
- Relacionar o retorno de uma função com a saída na interface.

---

## ⚙️ Funcionalidades

- [x] Executar `triplo(5)` e exibir o resultado.
- [x] Executar `nomeCompleto("Davi Roberto de", "Almeida Ferreira")`.
- [x] Executar `celsiusParaFahrenheit(25)`.
- [x] Console virtual com o retorno de cada função.
- [x] Código-fonte das funções exibido ao lado da área interativa.

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
LogJS.append('console-output', `O triplo de 5 é: ${resultado}`);
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
funcoes/
│
├── index.html
├── script.js
└── README.md
```

---

## 🧠 Conceitos praticados

**Funções**

- Declaração com `function`.
- Parâmetros e argumentos.
- `return` e o valor devolvido.
- Reutilização de lógica.
- Composição de strings com concatenação.

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
