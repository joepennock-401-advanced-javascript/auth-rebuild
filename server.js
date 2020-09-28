'use strict';

const express = require('express');
const cors = require('cors');
const app = express();
const authRouter = require('./auth/auth-v1.js');
const apiRouter = require('./api/api-v1.js');
const notFound = require('./middleware/404.js');
const serverError = require('./middleware/500.js');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res, next) => {
  console.log('Hello World');
});

app.use('/auth/v1', authRouter);
app.use('/api/v1', apiRouter);

app.use('*', notFound);
app.use(serverError);

module.exports = {
  app,
  start: (port) => app.listen(port, console.log('up on ', port))
};