'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
const server = require('./server.js');

mongoose.connect(process.env.MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

server.start(process.env.PORT || 4000);