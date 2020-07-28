const express = require('express');

const routes = express.Router();

const ImagesController = require('./controllers/ImagesController');

routes.post('/images', ImagesController.sendImage);

module.exports = routes;