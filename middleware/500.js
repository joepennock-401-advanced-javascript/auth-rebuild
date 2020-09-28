'use strict';

module.exports = (err, req, res, next) => {

  let obj = {
    error: err,
    message: 'internal server error',
  };

  res.status(500).json(obj).end();
  
}