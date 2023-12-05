## Description

TODO

## Installation

```bash
$ npm install
```
## Environment Variables
The project requires certain environment variables to be set. Copy the contents of the `.env.example` file and create a new file named `.env`. Update the values of the `.env` file.

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Repl

REPL is a simple interactive environment that takes single user inputs, executes them, and returns the result to the user. 

```bash
# open the repl mode (ts + nestjs)
$ npm run repl
```

## Compo-doc

Compo-doc is a documentation tool for Angular applications. Since Nest and Angular share similar project and code structures, Compodoc works with Nest applications as well.

```bash
# open the documentation tool
$ npm run compodoc
```
Let me know if you need any further assistance!

## App Commands (CLI)

### Utils

```bash
# Generate a resource, with alias yarn nsc g re <dirname>
$ npm run nsc generate resource <dirname>
# Generate a command-handler, with alias yarn nsc g ch <dirname>
$ npm run nsc generate command-handler <dirname>
# Generate a query-handler, with alias yarn nsc g qh <dirname>
$ npm run nsc generate query-handler <dirname>
```

### Migrations

TODO

## Resources
https://www.npmjs.com/package/nestjs-command