<h1 align="center" style="color:#7f5cd1; font-size:45px;">Task Manager API</h1>

## Descrição

Uma API simples para gerenciamento de tarefas, desenvolvida com Nest.js, TypeScript, TypeORM e PostgreSQL. Permite criar, atualizar, listar e excluir tarefas com base em status e data de criação.

###### _Pssst! English version of this README is available [here](./EN_US.md)._

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Funcionalidades](#funcionalidades)
- [Instalação](#instalação)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Arquivo Insomnia](#arquivo-insomnia)
- [Licença](#licença)
- [Contato](#contato)

## Sobre o Projeto

A Task Manager API foi projetada para facilitar o gerenciamento de tarefas. Os usuários podem criar, atualizar, listar e excluir tarefas, além de gerenciar o status de cada uma (PENDING, IN_PROGRESS, DONE).

## Tecnologias Utilizadas no Projeto

- [NestJS](https://nestjs.com/)
- [TypeORM](https://typeorm.io/)
- [Banco de Dados: PostgreSQL](https://www.postgresqltutorial.com/postgresql-getting-started/)
- [TypeScript](https://www.typescriptlang.org/)
- [Class Validator](https://github.com/typestack/class-validator)
- [Class Transformer](https://github.com/typestack/class-transformer)
- [Railway](https://railway.app/)
- [Jest](https://jestjs.io/pt-BR/docs/getting-started)

## Funcionalidades

### Criar tarefa

- **POST** `/tasks`
  - Request Body:
    ```json
    {
      "title": "string",
      "description": "string"
    }
    ```

### Listar tarefas

- **GET** `/tasks`

### Atualizar status

- **PATCH** `/tasks/:id/status`
  - Request Body:
    ```json
    {
      "status": "PENDING | IN_PROGRESS | DONE"
    }
    ```

### Excluir tarefa

- **DELETE** `/tasks/:id`

## Instalação

### Pré-requisitos

- Node.js
- npm ou yarn

### Passos para instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/Isabelle-Moura/task-manager-api.git
   ```

2. Instalação de dependências

```bash
$ npm install
```

3. Configure as Variáveis de Ambiente

- Crie um arquivo **.env** na **raiz do projeto** com as variáveis de ambiente necessárias;

```
# APP
APP_PORT = Porta que queira utilizar em sua aplicação (3000);

## DATABASE
DB_HOST = Host do banco de dados (localhost);
DB_PORT = Porta que seu banco esta ativo (5431);
DB_USERNAME = Nome de usuário do banco de dados (nome_user);
DB_PASSWORD = Senha do banco de dados (123456);
DB_DATABASE = Nome do banco de dados (back-end-metavagas);
```

4. Executando o projeto

```bash
# desenvolvimento
$ npm run start

# modo observador
$ npm run start:dev

# modo produção
$ npm run start:prod
```

3. Teste

```bash
# testes unitários
$ npm run test

# test coverage
$ npm run test:cov
```

## Estrutura das Pastas

```task-manager-api/
├── src/
│ ├── database/
│ │ ├── entities/
│ │ │ ├── task.entity.ts
│ │ ├── database.config.ts
│ │ ├── database.module.ts
│ ├── task/
│ │ ├── dtos/
│ │ │ ├── create-task.dto.ts
│ │ │ ├── update-task.dto.ts
│ │ ├── task.controller.ts
│ │ ├── task.module.ts
│ │ ├── task.service.ts
│ ├── utils/
│ │ ├── enum/
│ │ │ ├── task-status.enum.ts
│ ├── app.module.ts
│ ├── main.ts
├── .gitignore
├── package.json
├── README.md
└── tsconfig.json
```

## Arquivo Insomnia

#### O arquivo Insomnia deste projeto, para fazer as requisições, pode ser baixado [aqui]().

## Licença

Nest is [MIT licensed](LICENSE).

## Contato

- [Isa Moura B. Bentes](https://www.linkedin.com/in/isa-moura/)
