# Banco API Tests

Projeto de automação de testes para APIs REST utilizando JavaScript, Mocha, Supertest e Chai.

## Objetivo

O objetivo deste projeto é validar o comportamento da API REST disponibilizada no repositório abaixo:

- API alvo: https://github.com/juliodelimas/banco-api
- Projeto de testes: https://github.com/juliodelimas/banco-api-tests

O projeto foi desenvolvido com foco em:

- Validação de endpoints REST
- Verificação de status codes
- Validação de contratos e payloads
- Automação de cenários positivos e negativos
- Geração de relatórios automatizados em HTML
- Organização e padronização de testes de API

---

# Stack Utilizada

| Tecnologia | Finalidade |
|---|---|
| JavaScript | Linguagem principal do projeto |
| Node.js | Ambiente de execução |
| Mocha | Framework de testes |
| Chai | Biblioteca de asserções |
| Supertest | Testes de requisições HTTP |
| Mochawesome | Geração de relatórios HTML |
| Dotenv | Gerenciamento de variáveis de ambiente |

---

# Estrutura do Projeto

```bash
banco-api-tests/
│
├── mochawesome/
├── node_modules/
├── tests/
├── utils/
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

# Pré-requisitos

- Node.js
- NPM
- Git

---

# Instalação do Projeto

```bash
git clone https://github.com/juliodelimas/banco-api-tests.git
```

```bash
cd banco-api-tests
```

```bash
npm install
```

---

# Configuração do Arquivo .env

Crie um arquivo chamado `.env` na raiz do projeto com o seguinte conteúdo:

```env
BASE_URL=http://localhost:3000
```

## Descrição da variável

| Variável | Descrição |
|---|---|
| BASE_URL | URL base da API que será testada |

---

# Execução dos Testes

## Executar todos os testes

```bash
npm test
```

## Executar testes com relatório HTML

```bash
npx mocha tests/**/*.test.js --reporter mochawesome
```

---

# Relatórios HTML com Mochawesome

Após a execução dos testes utilizando o reporter do Mochawesome, será criado automaticamente um diretório chamado:

```bash
mochawesome/
```

Para abrir o relatório HTML:

```bash
mochawesome/mochawesome.html
```

---

# Scripts Disponíveis

```json
"scripts": {
  "test": "mocha tests/**/*.test.js",
  "test:report": "mocha tests/**/*.test.js --reporter mochawesome"
}
```

Execução:

```bash
npm run test
```

```bash
npm run test:report
```

---

# Dependências Utilizadas

- Mocha: https://mochajs.org/
- Chai: https://www.chaijs.com/
- Supertest: https://github.com/ladjs/supertest
- Mochawesome: https://github.com/adamgruber/mochawesome
- Dotenv: https://github.com/motdotla/dotenv

---

# Boas Práticas Aplicadas

- Separação dos testes por funcionalidade
- Uso de variáveis de ambiente
- Organização modular do projeto
- Estrutura reutilizável
- Geração automatizada de relatórios

---

# Possíveis Melhorias Futuras

- Integração contínua com GitHub Actions
- Integração com Docker
- Massa de dados dinâmica
- Validação de schema JSON
- Execução paralela dos testes
- Integração com pipelines CI/CD

---

# Licença

Este projeto pode ser utilizado para fins educacionais e de aprendizado em automação de testes.
