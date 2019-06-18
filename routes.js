const express = require('express')
const routes = express.Router()

const animeController = require('./controllers/AnimeController')

routes.post('/anime', animeController.create);
routes.get('/anime', animeController.index);
routes.get('/anime/:id', animeController.show);
routes.put('/anime/:id', animeController.update);
routes.delete('/anime/:id', animeController.delete);

module.exports = routes