# Api rest user

## Sobre

A **api** contém várias requisições, como:
* [listar todos os usuários (index)](https://github.com/dsilva01/API-REST-USER#index-metodo-get)
* [Lista um usuário específico (show)](https://github.com/dsilva01/API-REST-USER#show-metodo-get)
* [Criar um usuário (create)](https://github.com/dsilva01/API-REST-USER#create-metodo-post)
* [Atualizar um usuário (updates)](https://github.com/dsilva01/API-REST-USER#updates-metodo-put)
* [Excluir um usuário (drop)](https://github.com/dsilva01/API-REST-USER#drop=metodo-delete)
* [Efectuar o login de um usuario (login)](https://github.com/dsilva01/API-REST-USER#login-metodo-post)

## Tecnologias

* [Node.js](https://nodejs.org/pt-br/)
* [Bcrypt](https://github.com/kelektiv/node.bcrypt.js)
* [Dotenv](https://github.com/motdotla/dotenv)
* [Express](https://github.com/expressjs/express)
* [Jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
* [Knex](https://github.com/knex/knex)
* [Sqlite3](https://github.com/mapbox/node-sqlite3)

## Como executar

Para clonar esse repositório pelo terminal, é necessário possuir o [Git](https://git-scm.com/) instalado em sua máquina.

```bash
# Clone o repositório
$ git clone https://github.com/dsilva01/API-REST-USER.git

# Entre na pasta do projeto
$ cd API-REST-USER
```

Para instalar as dependências e executar o projeto, é necessário possuir o [Node.js](https://nodejs.org/pt-br/) instalado em sua máquina, bem como um gerenciador de pacotes: [Yarn](https://yarnpkg.com/) ou [npm](https://www.npmjs.com/).

<table style="width:100%;">
<tr>
<td align="center"> <strong>Usando Yarn</strong> </td> <td align="center"> <strong>Usando npm</strong> </td>
</tr>
<tr>
<td>


```bash
# Instale as dependências da api
$ yarn

# Execute as migrations do Knex
$ yarn knex:migrate

# Execute a api em Node.js
$ yarn start
```

</td>
<td>


```bash
# Instale as dependências da api
$ npm install

# Execute as migrations do Knex
$ npm run knex:migrate

# Execute a api em Node.js
$ npm run start
```

</td>
</table>

## Como executar as requisições

* A api vai estar no endeço http://localhost:3333
* Enviar a requisição

### index (metodo get)

* Acessar a rota http://localhost:3333/user

### show (metodo get)

* Acessar a rota http://localhost:3333/user/id
* O parâmetro id deve ser substituído pelo id do usuário
* Enviar a requisição

### create (metodo post)

* Acessar a rota http://localhost:3333/user
* Escrever os dados (**name**, **email**, **password**, **gender** (M ou F), **born_date**) do novo usuário no corpo (body) da requisição em formato json
* Enviar a requisição

### updates (metodo put)

* Acessar a rota http://localhost:3333/user/id
* O parâmetro id deve ser substituído pelo id do usuário
* Escrever a actualização dos dados (**name**, **email**, **password**, **gender** (M ou F), **born_date**) opcionais do usuário no corpo (body) da requisição em formato json
* Enviar a requisição

### drop (metodo delete)

* Acessar a rota http://localhost:3333/user/id
* O parâmetro id deve ser substituído pelo id do usuário
* Enviar a requisição

### login (metodo post)

* Acessar a rota http://localhost:3333/login
* Escrever os dados (email, senha) do usuário no corpo (body) da requisição em formato json
* Enviar a requisição
