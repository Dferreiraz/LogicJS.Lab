# ➗ Operadores

<p align="center">
  <strong>Aritmética, comparação e lógica booleana na prática</strong><br>
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

O módulo **Operadores** reúne, em uma única tela, os três grupos de operadores do JavaScript: aritméticos, de comparação e lógicos.

O usuário informa dois valores numéricos e vê o resultado de soma, subtração, multiplicação, divisão, módulo e potência, além das comparações entre eles. Dois botões alternam variáveis booleanas (`chocolate` e `pipoca`) e recalculam `AND`, `OR` e `NOT` em tempo real.

### 🎯 Objetivos do projeto

- Praticar os operadores aritméticos (`+`, `-`, `*`, `/`, `%`, `**`).
- Entender a diferença entre igualdade flexível (`==`) e estrita (`===`).
- Compreender `AND` (`&&`), `OR` (`||`) e `NOT` (`!`).
- Observar o comportamento de uma divisão por zero.
- Validar entradas numéricas antes de calcular.

---

## ⚙️ Funcionalidades

- [x] Dois campos numéricos com recálculo em tempo real.
- [x] Painel com soma, subtração, multiplicação, divisão, módulo e potência.
- [x] Painel de comparação com `==`, `===`, `!=`, `>` e `<`.
- [x] Painel de lógica booleana com `&&`, `||` e `!`.
- [x] Botões para alternar as variáveis booleanas.
- [x] Tratamento de divisão por zero (`∞`).
- [x] Aviso para entradas vazias ou não numéricas.

---

## 🛠 Tecnologias

- **HTML5** — Estrutura e organização do conteúdo.
- **Tailwind CSS** — Estilização e apresentação visual.
- **JavaScript Vanilla (ES6+)** — Manipulação de arrays, objetos, índices, eventos e DOM.

---

## 🧩 Camada compartilhada

O tema visual vem de [`../shared/tailwind-config.js`](../shared/tailwind-config.js), carregado depois do CDN do Tailwind. Cores e tipografia ficam centralizadas para todo o laboratório.

O laboratório possui uma API unificada de logs, o `LogJS`, definida em [`../shared/logger.js`](../shared/logger.js) e usada pelos módulos que têm console virtual. **Este módulo não usa console virtual**: os resultados são renderizados diretamente nos painéis `res-arit`, `res-comp` e `res-log` do DOM. Por isso, o `logger.js` não é carregado nesta página.

As entradas são validadas com `Number.isFinite()`, evitando que campos vazios (que o `Number('')` converteria em `0`) gerem cálculos incorretos. Os botões são ligados com `addEventListener()`, sem `onclick` inline, e usam `type="button"` para compatibilidade com a CSP.

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
operadores/
│
├── index.html
├── script.js
└── README.md
```

---

## 🧠 Conceitos praticados

**Operadores**

- Aritméticos: `+`, `-`, `*`, `/`, `%` e `**`.
- Comparação: `==`, `===`, `!=`, `>` e `<`.
- Lógicos: `&&`, `||` e `!`.
- Precedência e agrupamento de expressões.
- Diferença entre igualdade flexível e estrita.

**JavaScript e DOM**

- Leitura de inputs com `.value`.
- Conversão explícita com `Number()`.
- Validação com `Number.isFinite()`.
- Eventos `input` e `click` com `addEventListener()`.
- Atualização dinâmica de painéis de resultado.

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
