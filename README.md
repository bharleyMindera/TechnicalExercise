# Mindera Pairing Exercise

This repo contains the source for the Mindera pairing exercise. Here's some useful information to get you started.

## Pre Requisites

- NodeJS 20 (https://nodejs.org/en/). Managing NodeJS versions is made easy by using `nvm`. Follow [these installation instructions](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating) to install and use `nvm` to manage your active NodeJS versions
- Git (https://git-scm.com/downloads)

## Description

1. This is a monorepo containing the following services:

- `api` - a node service written using [ExpressJS](https://expressjs.com/) and responsible for retrieving and returning product data
- `aggregator` - a [GraphQL](https://graphql.org/) node service written using [ExpressJS](https://expressjs.com/) and [Apollo](https://www.apollographql.com/docs/) responsible for aggregating services (the api service)
- `app` - a web application written using [React](https://reactjs.org/docs/getting-started.html)

2. You can find these services within the `packages` folder.
3. The architecture of these services is as follows:

```
+---------------+        +---------------+        +---------------+
|               |        |               |        |               |
|               |        |               |        |               |
|      app      +  http  +  aggregator   +  http  +      api      |
|    (React)    |------->|   (GraphQL)   |------->|   (Express)   |
|               |        |               |        |               |
|               |        |               |        |               |
+---------------+        +---------------+        +---------------+
```

4. If you don't have any experience with GraphQL please feel free to bypass the `aggregator` and call the `api` directly. You can find instructions on how to achieve this in `packages/app/src/App.jsx`.

## Getting Started

- Run `npm install` to install all dependencies
- Run `npm start` to run all services
  - This will run the stack on `http://localhost:3000` where `/graphql` and `/api` proxy to the `aggregator` and `api` respectively.
  - Code changes will be hot loaded automatically.
- Run `npm test` to execute tests once
- In a specific package (e.g. packages/app) run `npm run test:watch` to execute tests in interactive mode where they will re-run on code changes.

When you've got this up and running please move on to the [Exercise](docs/exercise.md).
