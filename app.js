'use strict';

const express = require('express');
const app = express();
const router = express.Router();

router.route('/').get(function(req, res, next) {
  res.status(200).json({message: 'Api development working'});
});

router.route('/development').get(function(req, res, next) {
  res.status(200).json({message: 'Api development second route working'});
});

app.use(router);
app.listen(3000, function() {
  console.log('Api listening on port 3000')
});
