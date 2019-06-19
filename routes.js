const express = require('express')
const routes = express.Router()

const animeController = require('./controllers/AnimeController')
const authController = require('./controllers/AuthController')

routes.post('/anime', animeController.create);
routes.get('/anime', animeController.index);
routes.get('/anime/:id', animeController.show);
routes.put('/anime/:id', animeController.update);
routes.delete('/anime/:id', animeController.delete);

routes.post('/auth/register', authController.register);
routes.post('/auth/login', authController.login);

module.exports = routes