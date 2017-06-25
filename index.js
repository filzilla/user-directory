const express = require('express');
// const path = require('path');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const dataFile = require('./data.js');

const application = express();



// define model
// let robot = {};

// robot.name = request.body.username;
// robot.avatar = request.body.avatar;
// robot.name = request.body.name;
// robot.job = request.body.job;
// robot.streetnum = request.body.address.street_num;
// robot.steetname = request.body.address.street_name;
// robot.city = request.body.address.city;
// robot.state = request.body.address.state_or_province;
// robot.postalcode = request.body.address.postal_code;
// robot.country = request.body.address.country;

// let model = robot;

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