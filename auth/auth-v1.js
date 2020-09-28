'use strict';

const express = require('express');
const users = require('./models/users-model.js');
const basicAuth = require('./middleware/basic.js');

const router = express.Router();

router.post('/signup', async (req, res, next) => {
  
  try{

    let obj = {
      username: req.body.username,
      password: req.body.password,
    };

    let record = await new users(obj);

    let newUser = await record.save();

    let newToken = await record.generateToken();

    // sets header of 'auth' as a new token
    res.set('authorization', newToken);

    let validUser = {
      token: newToken,
      user: newUser,
    };

    res.status(201).json(validUser);

  } catch(err) {
    next(err.message);
  };

});

router.post('/signin', basicAuth,  async (req, res, next) => {

  let obj = {
    token: req.token,
    user: req.user, 
  }

  res.status(200).json(obj);

});

module.exports = router;