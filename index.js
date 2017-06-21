const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');
const dataFile = require('/data.js')


const app = express();




// define model
let robot = [
    'id:' ,
    'avatar:' ,
    'name:' ,
    'email:' ,
    'university:',
    'job:' ,
    'address':[
      'street_num:' ,
      'street_name' ,
      'city:'       ,
      'state_or_province:' ,
      'postal_code:'  ,
      'country:'  ,

    ]
];

let model = robot;

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

//Listening on root
app.get('/data.js', function (req, res) {
  res.render('', model);
})

app.listen(3000, function () {
  console.log('Successfully started express application!');
})