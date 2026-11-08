# 🔁 Estruturas de Repetição

<p align="center">
  <strong>Automatizando tarefas com for e while</strong><br>
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

O módulo **Estruturas de Repetição** apresenta os dois laços fundamentais do JavaScript: `for` e `while`.

Cada botão executa uma demonstração diferente — contagem de 0 a 10, tabuada do 5, números pares de 0 a 20 e contagem regressiva. Para que o resultado apareça de forma didática, cada repetição é agendada com `setTimeout`, exibindo uma linha por vez no console virtual. Assim, fica fácil acompanhar o papel da **inicialização**, da **condição de parada** e do **incremento/decremento**.

### 🎯 Objetivos do projeto

- Entender quando usar `for` e quando usar `while`.
- Identificar as três partes de um laço `for`.
- Compreender a condição de parada do `while`.
- Evitar laços infinitos ao atualizar a variável de controle.
- Combinar repetição com estruturas condicionais.
- Observar a execução passo a passo na interface.

---

## ⚙️ Funcionalidades

- [x] Contagem de 0 a 10 com `for`.
- [x] Tabuada do 5 com `for`.
- [x] Filtro de números pares (0 a 20) com `for` e `if`.
- [x] Contagem regressiva de 10 a 1 com `while`.
- [x] Execução animada com `setTimeout`.
- [x] Botão para limpar o console virtual.

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
LogJS.append('console-output', i);
LogJS.clear('console-output', '// Console limpo.');
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
estrutura-de-repeticao/
│
├── index.html
├── script.js
└── README.md
```

---

## 🧠 Conceitos praticados

**Estruturas de repetição**

- Laço `for` com inicialização, condição e incremento.
- Laço `while` com condição de parada.
- Variável de controle e atualização obrigatória.
- Repetição combinada com `if`.
- Operador de resto (`%`) para identificar pares.

**JavaScript e DOM**

- Seleção de elementos com `getElementById`.
- Eventos de clique com `addEventListener()`.
- Atualização de um console virtual.
- Agendamento assíncrono com `setTimeout`.
- Uso de `textContent` na camada de log.

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
