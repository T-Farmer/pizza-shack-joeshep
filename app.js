'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const routes = require('./routes/')

// pug configuration
app.set('view engine', 'pug');

app.locals.company = 'Pizza Shack 🍕';
app.locals.body = {};
app.locals.body.magic = 'Fooooooo!';

// middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(routes);

app.use((req, res) => {
  res.render('404');
});

// end of middleware

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Listening on port ${port}");
});
