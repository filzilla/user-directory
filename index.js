const express = require('express');
// const path = require('path');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const dataFile = require('./data.js');

const application = express();





application.engine('mustache', mustacheExpress());
application.set('view engine', 'mustache');
application.set('views', './views');


application.use(bodyParser.urlencoded());

application.use(express.static('public'));

//Listening on root
application.get('/', function (request, response) {
  response.render('index', dataFile);
});

application.get('/:userInfo', (request, response) => {

  var user = dataFile.users[request.params.userInfo - 1]
  response.render('robot-card', user);
});

application.post('/robot-card', (request, response) => {
   request.render('robot-card', dataFile);
});



//arrray protype filter

application.listen(3000, function () {
  console.log('Successfully started express application!');
});