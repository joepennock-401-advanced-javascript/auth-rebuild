'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const users = mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

users.pre('save', async function(){
  this.password = await bcrypt.hash(this.password, 5);
});

users.methods.generateToken = async () => {

  let obj = {
    username: this.username,
    password: this.password,
  };

  let token = await jwt.sign(obj, process.env.SECRET || 'taro');
  return token;

};

users.statics.validateBasic = async function (un, pw){

  let user = await this.findOne({username: un});

  let isValid = await bcrypt.compare(pw, user.password);

  if (isValid){
    return user;
  } 
  else {
    return undefined;
  };

}

module.exports = mongoose.model('users', users);
