'use strict';

const schema = require('./categories-schema.js');

const Model = require('../mongo-colection.js');

class Categories extends Model{

  constructor(){
    super(schema);
  };

};

module.exports = Categories;