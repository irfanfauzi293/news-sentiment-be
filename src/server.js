require('dotenv').config();

var express = require('express');
var app = express();
var port = process.env.PORT;
var bodyParser = require('body-parser');
const cors = require('cors');
const { sequelize } = require('./db');
const routes = require('./route');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  cors({
    credentials: false,
    origin: '*',
    exposedHeaders: ['Content-Disposition'],
  })
);

Object.keys(routes).forEach((key) => {
  app.use('/news-sentiment', routes[key]);
});

app.listen(port);

try {
  sequelize.authenticate();
  console.log('Connection to database is successfully');
} catch (error) {
  console.error('Unable connect to database: ', error);
}

console.log('Restful API server started on: ' + port);
