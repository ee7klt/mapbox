const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes/index');
//const mapapi = require('./public/mapapi');
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', routes);

module.exports = app;
