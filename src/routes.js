const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const UsersController  = require('./controllers/UsersController');

const usersController = new UsersController();

const routes = express.Router();

routes.get('/user', usersController.index);
routes.get('/user/:id', usersController.show);
routes.post('/user', usersController.create);
routes.delete('/user/:id', usersController.drop);
routes.put('/user/:id', usersController.updates);

routes.post('/login', usersController.login);

module.exports = routes;