const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const knex = require('../database/connection');

class UsersController {
  async index (request, response) {
    const users = await knex('users').select({
      id: "users.id",
      name: 'users.name',
      email: 'users.email',
      gender: 'users.gender',
      born_date: 'users.born_date',
    });

    return response.json(users);
  }

  async show (request, response) {
    const { id } = request.params;

    const user = await knex('users')
    .where('id', id)
    .first()
    .select({
      id: "users.id",
      name: 'users.name',
      email: 'users.email',
      gender: 'users.gender',
      born_date: 'users.born_date',
    });

    return response.json(user);
  }

  async create (request, response) {
    const { name, email, password, gender, born_date } = request.body;

    bcrypt.hash(password, 10, async (err, password) => {
      const id = await knex('users')
    .insert({
      name,
      email,
      password,
      gender,
      born_date
    });

    const data = {
      id: id[0],
      name,
      email,
      gender,
      born_date,
    }

    return response.json(data);
    });
  }

  async drop (request, response) {
    const { id } = request.params;
    
    await  knex('users')
    .where('id', id)
    .first()
    .delete();

    return response.json("sucess");
  }

  async updates (request, response) {
    const { id } = request.params;
    const { name,email, password, gender, born_date } = request.body;

    if(password !== undefined) {
      bcrypt.hash(password, 10, async (err, password) => {
        const data = {
          name,
          email,
          password,
          gender,
          born_date,
        }
        await knex('users')
          .where('id', id)
          .first()
          .update(data);
    
        return response.json("sucess");
      });
    }else {
      const data = {
        name,
        email,
        gender,
        born_date,
      }
      await knex('users')
        .where('id', id)
        .first()
        .update(data);
  
      return response.json("sucess");
    }
  }

  async login (request, response) {
    const { email, password } = request.body;

    const user = await knex('users')
    .where('email', email)
    .first()
    .select({
      id: "users.id",
      name: 'users.name',
      email: 'users.email',
      password: 'users.password',
    });

    if(user) {
      const userPassword = user.password;
      
      await bcrypt.compare(password, userPassword, (err, result) => {
        if(result) {
          const token = jwt.sign({
            id: user.id,
            name: user.name,
            email: user.email,
          }, process.env.TOKEN_KEY || "skfdfj#[]3", { expiresIn: "10h" });

          //console.log(process.env);
    
          return response.json(token);
        }else{
          return response.status(500).json({message: 'Login inválido!'});
        }
      });

    }else {
      return response.status(500).json({message: 'Login inválido!'});
    }

  }
}

module.exports = UsersController;