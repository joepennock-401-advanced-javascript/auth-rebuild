'use strict';

module.exports = (req, res, next) => {

  let obj = {
    error: 'resource not found',
  }

  res.status(404).json(obj).end();
  
};