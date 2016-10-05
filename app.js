'use strict';

const app = require('express')();

app.use(function(req, res, next) {
  console.log('Logging a message');
  res.status(200).json({message: 'Api working'});
});

app.listen(3000, function() {
  console.log('Api listening on port 3000')
});
