<h1 align=“center” style=“color:#7f5cd1; font-size:45px;”>Task Manager API</h1>

## Description

A simple API for managing tasks, developed with Nest.js, TypeScript, TypeORM and PostgreSQL. It allows you to create, update, list and delete tasks based on status and creation date.

###### _Eiiii! Versão em PT-BR deste README está disponível [aqui](./README.md)._

## Index

- [About the Project](#about-the-project)
- Technologies Used](#technologies-used)
- Features](#features)
- Installation
- Folder Structure](#folder-structure)
- License](#license)
- Contact](#contact)

## About the Project

The Task Manager API is designed to make task management easier. Users can create, update, list and delete tasks, as well as manage their status (PENDING, IN_PROGRESS, DONE).

## Technologies Used in the Project

- NestJS](https://nestjs.com/)
- TypeORM](https://typeorm.io/)
- [Database: PostgreSQL](https://www.postgresqltutorial.com/postgresql-getting-started/)
- [TypeScript](https://www.typescriptlang.org/)
- [Class Validator](https://github.com/typestack/class-validator)
- [Class Transformer](https://github.com/typestack/class-transformer)
- [Railway](https://railway.app/)
- [Jest](https://jestjs.io/pt-BR/docs/getting-started)

## Features

### Create task

- **POST** `/tasks`
  - Request Body:
    ```json
    {
      “title": ‘string’,
      “description": ”string”
    }
    ```

### List tasks

- **GET** `/tasks`

### Update status

- **PATCH** `/tasks/:id/status`

  - Request Body:
    ``json
    {
    “status": ”PENDING | IN_PROGRESS | DONE”
    }

    ```

    ```

### Delete task

- **DELETE** `/tasks/:id`

## Installation

### Prerequisites

- Node.js
- npm or yarn

### Installation steps

1. Clone the repository:

   ```bash
   git clone https://github.com/Isabelle-Moura/task-manager-api.git
   ```

2. Install dependencies

```bash
$ npm install
```

3. Configure the Environment Variables

- Create an **.env** file in the **project root** with the necessary environment variables;

```
# APP
APP_PORT = Port you want to use in your application (3000);

## DATABASE
DB_HOST = Database host (localhost);
DB_PORT = Port on which your database is active (5431);
DB_USERNAME = Database username (user_name);
DB_PASSWORD = Database password (123456);
DB_DATABASE = Database name (back-end-jobs);
```

4. Running the project

```bash
# development
$ npm run start

# observer mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

3. Test

```bash
# unit tests
$ npm run test

# test coverage
$ npm run test:cov
```

## Folder's Structure

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

## License

Nest is [MIT licensed](LICENSE).

## Contact

- [Isa Moura B. Bentes](https://www.linkedin.com/in/isa-moura/)
