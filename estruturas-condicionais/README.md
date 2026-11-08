# 🔀 Estruturas Condicionais

<p align="center">
  <strong>Tomada de decisão com if, else if e switch</strong><br>
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

O módulo **Estruturas Condicionais** apresenta, em três painéis independentes, como o JavaScript toma decisões.

O primeiro painel simula um sinal de trânsito com `if / else if / else`. O segundo calcula a situação de um aluno a partir da nota, também com `else if`. O terceiro converte um número de 1 a 7 no nome do dia da semana usando `switch case`. Em todos, a mensagem e a cor do resultado mudam conforme a condição atendida.

### 🎯 Objetivos do projeto

- Compreender o fluxo de execução de `if / else`.
- Encadear múltiplas condições com `else if`.
- Utilizar `switch case` para valores discretos.
- Entender a importância da ordem das condições.
- Validar entradas antes de decidir.
- Refletir o resultado na interface com cor e texto.

---

## ⚙️ Funcionalidades

- [x] Verificação de sinal de trânsito com `if / else if / else`.
- [x] Cálculo de situação escolar (aprovado, recuperação ou reprovado).
- [x] Identificação do dia da semana com `switch case`.
- [x] Validação de nota entre 0 e 10.
- [x] Validação de dia inteiro entre 1 e 7.
- [x] Mensagens coloridas conforme o resultado.
- [x] Destaque para fins de semana.

---

## 🛠 Tecnologias

- **HTML5** — Estrutura e organização do conteúdo.
- **Tailwind CSS** — Estilização e apresentação visual.
- **JavaScript Vanilla (ES6+)** — Manipulação de arrays, objetos, índices, eventos e DOM.

---

## 🧩 Camada compartilhada

O tema visual vem de [`../shared/tailwind-config.js`](../shared/tailwind-config.js), carregado depois do CDN do Tailwind. Cores e tipografia ficam centralizadas para todo o laboratório.

O laboratório possui uma API unificada de logs, o `LogJS`, definida em [`../shared/logger.js`](../shared/logger.js) e usada pelos módulos que têm console virtual. **Este módulo não usa console virtual**: cada resposta é escrita diretamente no painel correspondente (`res-sinal`, `res-nota`, `res-dia`). Por isso, o `logger.js` não é carregado nesta página.

A renderização passa pela função auxiliar `renderResultado()`, que limpa o container com `replaceChildren()`, cria um `<span>` com `document.createElement()` e escreve o texto com `textContent`. Isso evita interpretar a mensagem como HTML. Os botões são ligados com `addEventListener()`, sem `onclick` inline, e usam `type="button"` para compatibilidade com a CSP.

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
estruturas-condicionais/
│
├── index.html
├── script.js
└── README.md
```

---

## 🧠 Conceitos praticados

**Estruturas condicionais**

- `if`, `else if` e `else`.
- Operadores relacionais e lógicos nas condições.
- `switch case` e a instrução `break`.
- Ordem de avaliação das condições.
- Valores padrão para entradas inválidas.

**JavaScript e DOM**

- Leitura de `input` e `select` com `.value`.
- Conversão com `Number()` e validação com `Number.isFinite()` e `Number.isInteger()`.
- `replaceChildren`, `createElement`, `appendChild` e `textContent`.
- Eventos de clique com `addEventListener()`.

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
