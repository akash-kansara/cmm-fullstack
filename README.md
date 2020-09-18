# CMM Fullstack

This project attempts is a fullstack implementation of a simple social media website using ReactJS, ExpressJS and MySQL.

## Application Business logic

This app allows you to add users and create a 'friend' relationship between them. <br />
Important note: If you add User B as User A's friend then User A also becomes User B's friend.

## Project structure
| Folder Path | Description |
| ------------- | ------------- |
| .env | Environment file. Ideally should not be a part of repository but for simplicity I've kept it here |
| src/ | Server Code |
| src/controller/ | Business Logic implementation |
| src/core/ | Basic functionalities required across the project |
| src/db/ | Database implementation. Currently supports MySQL |
| src/entity/ | Joi models for validation |
| src/env/ | Read and set environment for server |
| src/repository/ | Services for external communication |
| src/routes/ | Express routers |
| src/swagger/ | [Swagger 2.0](https://swagger.io/docs/specification/2-0/basic-structure/) definition |
| src/index.js | Handles server initialization and startup |
| ui/ | UI code |
| ui/env/ | Read and set environment for webpack |
| ui/public/ | Public dir |
| ui/src/base/ | Base components |
| ui/src/components/ | React components |
| ui/src/service/ | Communicate with API server |
| ui/src/index.js | React entry point |
| ui/src/webpack.config.js | Webpack config to build project |
| test/ | Unit tests |
| nodemon.json | [Nodemon](https://github.com/remy/nodemon) configuration |
| package.json | Project dependencies |
| babel.config.js | Babel configuration |
| DB.md | Database definitions |


## To start server, follow these steps

### Step 1: Add dependencies

```bash
npm i -D
```

### Step 2: Configure Database

Refer [DB configuration file](DB.md)

### Step 3: Run in dev environment

```bash
npm run start:dev
```

### Step 4: Check UI

```bash
Open browser and go to http://localhost:3000
```

### Step 5: Check API Swagger definition

```bash
Open browser and go to http://localhost:3000/swagger/api-docs
```

### Step 6 (Optional): Run test cases

```bash
npm test
```

### Step 7: Build for production

```bash
npm run build
```

### Step 8: Run in production environment

```bash
npm start
```