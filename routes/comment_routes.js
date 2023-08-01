const express = require('express');
const routes = express.Router();

const controller = require('../controllers/comment_controller');

routes.post('/addcoment', controller.commentadd);
routes.get('/viewall',controller.view);

module.exports = routes;