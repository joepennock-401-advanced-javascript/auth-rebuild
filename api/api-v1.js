'use strict';

const express = require('express');
const router = express.Router();
const collection = require('./models/mongo-colection.js');
const modelFinder = require('./middleware/model-finder.js');

router.get('/', (req, res, next) => {
  res.send("HELLO WORLD")
});

router.param('model', modelFinder.load);

router.get('/:model', getAll);

async function getAll(req, res, next){

  console.log(req.model);
  let db = await req.model.read();
  res.status(200).json(db);

};

module.exports = router;