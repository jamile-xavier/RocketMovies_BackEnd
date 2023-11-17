<h1 align="center"> ROCKETMOVIES - BACK END </h1>

## Descrição do Projeto

<h2 align="center">
RocketMovies 
</h2>
<p align="center"> O Rocketmovies é uma aplicação web para cadastro de filmes. </p>
<p align="center">A aplicação é baseada em modelo disponibilizado no Figma.</p>
<p align="center">Permite aos usuários a criação de filmes com título, avaliação, observações e marcadores.</p>

# Sumário

<!--ts-->

- 🛠 [Funcionalidades](#funcionalidades)
- 💻 [Tecnologias](#tecnologias)
- 💽 [Instalação](#instalação)
- 👩 [Autora](#autora)
- ➡ [Links](#links)
  - [GitHub Front End](#github-front-end)
  - [GitHub Back End](#github-back-end)
- 📑 [Licença](#licença)
<!--te-->

# Funcionalidades

- [x] Criar conta;
- [x] Fazer Login;
- [x] Atualizar informações da conta;
- [x] Visualizar todos os filmes cadastrados;
- [x] Cadastrar filme;
- [x] Excluir filme;
- [x] Visualizar detalhes do filme;

# Tecnologias

- [Bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [Cookie-Parser](https://www.npmjs.com/package/cookie-parser)
- [Cors](https://www.npmjs.com/package/cors)
- [Dot Env](https://www.npmjs.com/package/dotenv)
- [Express](https://expressjs.com/pt-br/)
- [Express Async Errors](https://www.npmjs.com/package/express-async-errors)
- [Json Web Token](https://jwt.io/)
- [Knex](https://knexjs.org/guide/schema-builder.html#createvieworreplace)
- [Multer](https://www.npmjs.com/package/multer)
- [MD5 Hash](https://www.md5hashgenerator.com/)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [PM2](https://pm2.keymetrics.io/)
- [Render](https://render.com/)
- [Jest](https://jestjs.io/pt-BR/)
- [Sqlite](https://www.sqlite.org/docs.html)
- [Sqlite 3](https://www.npmjs.com/package/sqlite3)
- [Insomnia](https://insomnia.rest/download)
- [Beekeeper](https://www.beekeeperstudio.io/)

# Instalação

Para utilizar o projeto em sua máquina será necessário possuir as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). Você precisará também de um editor como o [VSCode](https://code.visualstudio.com/).

# Rodando o Back End

```bash
# Clone este repositório
$ git clone https://github.com/jamile-xavier/RocketMovies_BackEnd

# Acesse a pasta do projeto no terminal/cmd
$ cd RocketMovies_BackEnd

# Modifique o arquivo .env.example para .env e inclua uma porta e um secret para utilização do jwt no projeto.
  AUTH_SECRET=
  PORT=

# Instale as dependências
$ npm i

# Faça execução das migrations
$ npm run migrate

# Execute a aplicação no modo de desenvolvimento
$ npm run dev

# Aparecerá a mensagem Server is running on port <Número da porta>.

```

# Autora

<p> Jamile Xavier Mendonça </p>

[Github](https://github.com/jamile-xavier)

[Linkedin](https://www.linkedin.com/in/jamile-xavier/)

# Links

## Github Front End

[Repositorio-front](https://github.com/jamile-xavier/RocketMovies_FrontEnd)

## Github Back End

[Repositorio-back](https://github.com/jamile-xavier/RocketMovies_BackEnd)

# Licença

Licença MIT

O figma e requisitos da aplicação é disponibilizado pela [RocketSeat](https://www.rocketseat.com.br/) como parte integrante do curso Explorer.

É concedida permissão gratuita para usar, copiar, modificar, mesclar, publicar, distribuir a aplicação desde que inclua a declaração de direitos autorais e o aviso de permissão em todas as cópias ou partes substanciais do software.

O software é fornecido "como está", sem garantia de qualquer tipo expressa ou implícitas, incluindo mas não se limitando às garantias de comercialização, adequação a um determinado fim e não violação.
