const express = require('express');
const route = express.Router();
const controller = require('../controllers/user_controller');

route.post('/userlogin', controller.login);

module.exports = route;