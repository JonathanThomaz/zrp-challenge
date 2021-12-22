# zrp-challenge

Aqui se encontram o desafio de backend com um middlewere no backend para acessar a pokeapi e trazer as habilidades de um pokemon em ordem alfabética

## Backend

Go to folder `backend` -> `cd backend`

### Comandos

- `npm install` or `yarn` to install the dependencies
- `npm run start:dev` or `yarn start:dev` to run in dev mode with nodemon
- `npm run start` or `yarn start` to run

### Run with docker

- `docker build -t zrp/docker-desafio . --no-cache` to create a image without cache
- `docker run --name challenge-docker -d -p 3000:3000 zrp/docker-challenge` to run a container of image zrp/docker-challenge
