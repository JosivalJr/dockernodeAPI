const express = require('express');

const reverseint = require('./src/controllers/reverseintController');
const avgWordLengthController = require('./src/controllers/avgWordLengthController');
const wordsmatch = require('./src/controllers/wordsmatchController');
const tokenController = require('./src/controllers/tokenController');

const validSessionToken = require('./src/middlawares/validateSession');
const routes = express.Router();

/* Public Routes */
routes.get('/api/v1/auth', tokenController.createToken);


/* Private Routes */

routes.get('/api/v1/reverseint/:numberInt?', validSessionToken.validToken, reverseint.reverseint);

routes.get('/api/v1/avgwordslength/:sentence?', validSessionToken.validToken, avgWordLengthController.avgwordslength);

routes.get('/api/v1/wordsmatch?/:firstSentence?/:secondSentence?', validSessionToken.validToken, wordsmatch.wordsmatch);

module.exports = routes;