'use strict';

const schema = require('./products-schema.js');

const Model = require('../mongo-colection.js');

class Products extends Model {

  constructor(){
    super(schema)
  };

};

module.exports = Products;