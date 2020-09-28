'use strict';

// Reads the encoded username and password from the Authentication header
// Checks the Users model to see if this is a valid user and the right password
// If the user is valid, generate a token and append it to the request object
// If valid, call next()
// Otherwise, call next() with an error as an argument
/*
    let authorization = req.headers.authorization;
    let encoded = authorization.split(' ')[1]
    let creds = base64.decode(encoded);
    let [username, password] = creds.split(":");
*/

const base64 = require('base-64');
const users = require('../models/users-model.js');

module.exports = async (req, res, next) => {

  try{

  let auth = req.headers.authorization;
    console.log({auth});
  let encoded = auth.split(' ')[1];
    console.log({encoded});
  let decoded = base64.decode(encoded);
    console.log({decoded});
  let [username, password] = decoded.split(':');
    console.log(username, password);

  let validUser = await users.validateBasic(username, password);

  let validated = await validUser.generateToken();

  req.token = validated;
  req.user = validUser;

  next();

  } catch(err) {

    console.log(err.message);
    next('invalid login, no treats for rosie');

  };

};